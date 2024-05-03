import { Router } from "express";
import listFiles from '../controllers/listFiles.js'
import listFolders from '../controllers/listFolders.js'
import moveFile from '../controllers/moveFile.js'
import uploadFile from '../controllers/uploadFile.js'

const router = Router();

router.post('/listFiles', listFiles);
router.post('/listFolders', listFolders);
router.put('/moveFile', moveFile);
router.put('/uploadFile', uploadFile);

export default router;
