import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Use Turkey/Istanbul timezone (UTC+3)
    const now = new Date();

    // Convert to Turkey timezone (UTC+3)
    const turkeyTime = new Date(now.getTime() + 3 * 60 * 60 * 1000);

    // Format date as MM/DD/YYYY with leading zeros (Turkey timezone)
    const formattedDate = `${(turkeyTime.getUTCMonth() + 1)
      .toString()
      .padStart(2, "0")}/${turkeyTime
      .getUTCDate()
      .toString()
      .padStart(2, "0")}/${turkeyTime.getUTCFullYear()}`;

    // Format time as HH:MM with leading zeros (Turkey timezone)
    const formattedTime = `${turkeyTime
      .getUTCHours()
      .toString()
      .padStart(2, "0")}:${turkeyTime
      .getUTCMinutes()
      .toString()
      .padStart(2, "0")}`;

    const values = [
      [
        email,
        formattedDate,
        formattedTime,
        req.headers["x-forwarded-for"] ||
          req.connection?.remoteAddress ||
          "unknown",
        req.headers["user-agent"] || "unknown",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: values,
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
