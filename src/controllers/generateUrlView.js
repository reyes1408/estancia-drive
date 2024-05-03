
import drive from '../credentials/authDrive.js';

//Generar URL publica para ver y descargar los archivos
const generateUrlView = async ( req, res ) => {
    try {
        const fileId = '1s6-jeuN57lf7yMk8QBJWA3KAEKJNqRs_';
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        });

        //webViewLink -> Nos regresa una URL para ver el archivo de manera pública
        const result = await drive.files.get({ 
            fileId: fileId,
            fields: 'webViewLink'
        });

        result.json({ data: result.data });

    } catch (error) {
        return { error: error.message };
    }
}

export default generateUrlView;