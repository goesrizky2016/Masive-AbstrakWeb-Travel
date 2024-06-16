import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
import { google } from "googleapis";
import routes from "./routes/upload.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use("/", routes);

const oauth2client = new google.auth.OAuth2(process.env.CLIENT_ID_GOOGLE, process.env.CLIENT_SECRET_GOOGLE, "http://localhost:5000/auth/google/callback");

const scopes = ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"];

app.get("/auth/google", (req, res) => {
  const authorizationUrl = oauth2client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    include_granted_scopes: true,
  });
  res.json({ authUrl: authorizationUrl });
});

app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;

  try {
    const { tokens } = await oauth2client.getToken(code);
    oauth2client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauth2client,
      version: "v2",
    });

    const { data } = await oauth2.userinfo.get();

    if (!data) {
      return res.status(500).json({
        error: "Gagal mengambil data pengguna",
      });
    }

    res.redirect("http://localhost:3000/dasboard");
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({
      error: "Gagal mengambil data pengguna",
    });
  }
});

try {
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.listen(5000, () => console.log(`Server running on port 5000`));
