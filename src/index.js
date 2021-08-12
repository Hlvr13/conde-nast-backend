import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.status(200).send('Server working!');
});

app.listen(PORT, () => {
    console.log('Server working successfully.');
});
