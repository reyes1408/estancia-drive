import { Router } from "express";
import listFiles from '../controllers/listFiles.js'
import listFolders from '../controllers/listFolders.js'
import moveFile from '../controllers/moveFile.js'
import uploadFile from '../controllers/uploadFile.js'
import generateUrlView from "../controllers/generateUrlView.js";
import generateUrlDownload from "../controllers/generateUrlDownload.js";

const router = Router();

router.post('/listFiles', listFiles);
router.post('/listFolders', listFolders);
router.put('/moveFile', moveFile);
router.put('/uploadFile', uploadFile);
router.get('/view', generateUrlView);
router.get('/download', generateUrlDownload);

export default router;
