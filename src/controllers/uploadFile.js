
import { log } from 'console';
import drive from '../credentials/authDrive.js';
import fs from 'fs'

// Función para cargar un archivo
// const uploadFile = async (filePath) => {
const uploadFile = async ( req, res ) => {
    try {
        const response = await drive.files.create({
            requestBody: { // Cuerpo de la solicitud
                name: 'prueba2', // Nombre con el que se guardará en Drive
                mimeType: 'application/pdf', // Tipo de archivo o recurso (TipoPrincipal/Subtipo)
            },
            media: { // Información del archivo que vamos a enviar a Drive
                mimeType: 'application/pdf',
                body: fs.createReadStream(filePath)
            }
        });
        res.status(201).json ({ message: "El archivo se ha cargado correctamente" });

    } catch (error) {
        console.log({ error: error.message });
        res.status(500).json({ message: "No se cargado correctamente el archivo." })
    }
};

export default uploadFile;
