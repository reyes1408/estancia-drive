
import drive from '../credentials/authDrive.js';

// Función para mover un archivo entre carpetas en Google Drive
// const moveFile = async (fileId, newParentFolderId) => {
const moveFile = async ( req, res ) => {

    const {fileId, newParentFolderId } = req.body;

    try {
        // Obtener la información actual del archivo
        const file = await drive.files.get({
            fileId: fileId,
            fields: 'parents' // Solicitar solo la propiedad parents del archivo
        });

        // Actualizar la propiedad parents para agregar la nueva carpeta y quitar la anterior (si es necesario)
        await drive.files.update({
            fileId: fileId,
            addParents: newParentFolderId, // Agregar la nueva carpeta como padre
            removeParents: file.data.parents.join(',') // Quitar la carpeta anterior (si es necesario)
        });

        res.status(201).json({ message: 'Archivo movido correctamente.' });

    } catch (error) {
        console.log({ error: error.message });
        res.status(500).json({message: "Error al mover el archivo"})
    }
};

export default moveFile;