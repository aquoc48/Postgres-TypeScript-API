import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.port || 3000;

const server = app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

app.use('/api/users', require('./routes/app'));

app.use(async (req, res) => {
    res.status(404).send(`route not found.`);
});

export default app;
