import drive from '../credentials/authDrive.js';

// Función para listar archivos en Google Drive
const listFiles = async ( req, res ) => {
    try {
        const response = await drive.files.list({
            q: 'trashed: false'
        });
        const files = response.data.files;
        if (files.length) {
            return { files };
        } else {
            return { message: 'No se encontraron archivos.' };
        }
    } catch (error) {
        return { error: error.message };
    }
};

export default listFiles;