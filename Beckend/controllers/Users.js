import db from "../config/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const [users] = await db.query('SELECT id, name, email FROM users');
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Konfirmasi Password tidak cocok" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const adminEmail = 'admin@gmail.com'; // Replace with the actual admin email
    try {
        await db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [
            name,
            email,
            hashPassword,
            email === adminEmail ? 'admin' : 'user'
        ]);
        res.json({ msg: "Register Berhasil" });
    } catch (error) {
        console.log(error);
    }
}

export const Login = async (req, res) => {
    try {
        console.log('Login request received:', req.body);
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [req.body.email]);
        const user = rows[0];
        if (!user) return res.status(404).json({ msg: "Email tidak ditemukan" });

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(400).json({ msg: "Password Salah" });

        const { id, name, email, role } = user;
        const accessToken = jwt.sign({ userId: id, name, email, role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
        const refreshToken = jwt.sign({ userId: id, name, email, role }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

        await db.query('UPDATE users SET refresh_token = ? WHERE id = ?', [refreshToken, id]);

        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken, role });
    } catch (error) {
        console.error('Error during login:', error); // Tambahkan log ini untuk mencatat pesan kesalahan
        res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}



export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);

    const [rows] = await db.query('SELECT * FROM users WHERE refresh_token = ?', [refreshToken]);
    const user = rows[0];
    if (!user) return res.sendStatus(204);

    await db.query('UPDATE users SET refresh_token = NULL WHERE id = ?', [user.id]);
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
