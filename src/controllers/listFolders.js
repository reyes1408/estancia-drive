
import drive from '../credentials/authDrive.js';

// Función para listar carpetas en Google Drive
const listFolders = async ( req, res ) => {
    try {
        const response = await drive.files.list({
            q: "mimeType='application/vnd.google-apps.folder'", // Filtrar solo por archivos de tipo carpeta
            fields: 'files(id, name)' // Solicitar solo los campos id y name de los archivos
        });

        const folders = response.data.files;
        if (folders.length) {
            res.status(200).json({ folders })
        } else {
           res.status(400).json({ message: "No se encontraron carpetas." })
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

export default listFolders;
