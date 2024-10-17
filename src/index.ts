import express from 'express';
import cors from 'cors';
import { sequelize } from './startup/db';

const app = express();
const PORT = Number(process.env.PORT) | 4003;

app.use(cors());

(async () => {
    require('./models/Feedback');

    try {
        await sequelize.sync();
        await sequelize.authenticate();
    } catch (error) {
        console.log(error);
    }
})();

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));