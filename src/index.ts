import express from 'express';
import { router } from './routes/routes';
import './config/database';
import cors from 'cors';

const PORT = 3333;
const app = express()

app.use(cors());
app.use(express.json());
app.use(router)

app.listen(PORT, () => console.log('Server on'));
