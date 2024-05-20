import drive from '../credentials/authDrive.js';

// Generar URL pública para ver archivos.
const generateUrlView = async (req, res) => {
    const { fileId } = req.body;

    // Verificar el fileId
    if (!fileId) {
        return res.status(400).json({ message: "El fileId es necesario en el cuerpo de la solicitud." });
    }

    try {
        // Crear permiso para ver el archivo
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        });

        // Obtener la URL de vista del archivo
        const result = await drive.files.get({ 
            fileId: fileId,
            fields: 'webViewLink'
        });

        res.json({ webViewLink: result.data.webViewLink });
    } catch (error) {
        console.log({ error: error.message });
        res.status(500).json({ message: "Ha ocurrido un error al generar la URL de vista." });
    }
};

export default generateUrlView;
