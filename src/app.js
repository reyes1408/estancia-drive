import express from 'express'
import morgan from 'morgan'

import router from './routes/router.js'

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json())

// Rutas
app.use('/api', router);

export default app;