
import drive from '../credentials/authDrive.js';
import fs from 'fs';

// Función para cargar un archivo
const uploadFile = async (req, res) => {
    const { name, filePath } = req.body;

    // Verificar que los datos necesarios están presentes en el cuerpo de la solicitud
    if (!name || !filePath) {
        return res.status(400).json({ message: "El nombre y la ruta del archivo son necesarios." });
    }

    try {
        const response = await drive.files.create({
            requestBody: {
                name: name, // Nombre con el que se guardará en Drive
                mimeType: 'application/pdf', // Tipo de archivo o recurso (TipoPrincipal/Subtipo)
            },
            media: {
                mimeType: 'application/pdf',
                body: fs.createReadStream(filePath)
            }
        });

        res.status(201).json({ message: "El archivo se ha cargado correctamente", data: response.data });
    } catch (error) {
        console.log({ error: error.message });
        res.status(500).json({ message: "No se ha cargado correctamente el archivo." });
    }
};

export default uploadFile;
