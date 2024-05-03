import { google } from "googleapis";
import { config } from "dotenv";

config();

// Credenciales del cliente
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// Inicializamos el cliente/usuario
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Inicializamos la unidad de Google Drive
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

export default drive;