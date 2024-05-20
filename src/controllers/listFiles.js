import drive from '../credentials/authDrive.js';

// Función para listar archivos en Google Drive
const listFiles = async ( req, res ) => {
    try {
        const response = await drive.files.list({
            q: 'trashed: false'
        });
        const files = response.data.files;
        if (files.length) {
            res.status(200).json({ files })
        } else {
            res.status(400).json({ message: 'No se encontraron archivos.' });
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

export default listFiles;