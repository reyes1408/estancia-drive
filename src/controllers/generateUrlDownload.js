
import drive from '../credentials/authDrive.js';

//Generar URL publica para ver y descargar los archivos
const generateUrlDownload = async ( req, res ) => {
  try {
    const fileId = "1s6-jeuN57lf7yMk8QBJWA3KAEKJNqRs_";
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    //webContentLink -> Nos regresa una URL para poder descargar el archivo
    const result = await drive.files.get({
      fileId: fileId,
      fields: "webContentLink",
    });

    result.json({ data: result.data });
  } catch (error) {
    return { error: error.message };
  }
};

export default generateUrlDownload;