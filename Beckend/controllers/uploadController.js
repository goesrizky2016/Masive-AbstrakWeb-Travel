import db from "../config/database.js";

export const uploadImage = (req, res) => {
  console.log("File:", req.file);
  console.log("Body:", req.body);

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const { filename } = req.file;
  const { userId, firstName, lastName, email, gender } = req.body;

  if (!userId || !firstName || !lastName || !email || !gender) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "UPDATE user SET image = ?, firstName = ?, lastName = ?, email = ?, gender = ? WHERE id = ?";
  db.query(sql, [filename, firstName, lastName, email, gender, userId], (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      return res.status(500).json({ message: "Error updating user" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ status: "Success", image: filename });
  });
};
