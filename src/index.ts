import express from 'express';
import { router } from './routes/routes';
import './models/index';

const PORT = 3333;

const app = express()
app.use(express.json());
app.use(router)

app.listen(PORT, () => console.log('Server on'));
