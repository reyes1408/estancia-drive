import drive from '../credentials/authDrive.js';

// Generar URL pública para descargar los archivos
const generateUrlDownload = async (req, res) => {
    const { fileId } = req.body;

    // Verificar el fileId
    if (!fileId) {
        return res.status(400).json({ message: "El fileId es necesario en el cuerpo de la solicitud." });
    }

    try {
        // Obtener la URL de descarga del archivo
        const result = await drive.files.get({ 
            fileId: fileId,
            fields: 'webContentLink'
        });

        res.json({ webContentLink: result.data.webContentLink });
    } catch (error) {
        console.log({ error: error.message });
        res.status(500).json({ message: "Ha ocurrido un error al generar la URL de descarga." });
    }
};

export default generateUrlDownload;
