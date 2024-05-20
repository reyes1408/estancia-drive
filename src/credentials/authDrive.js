import { google } from "googleapis";
import { config } from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Obtener el directorio actual en un módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno desde el archivo .env
config({ path: `${__dirname}/../.env` });

// Credenciales del cliente
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

// Verificar que las variables de entorno estén definidas
if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !REFRESH_TOKEN) {
    throw new Error("Missing required environment variables");
}

// Inicializar el cliente OAuth2
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Inicializar la unidad de Google Drive
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

export default drive;
