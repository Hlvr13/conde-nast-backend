/** Dev can add any initial configuration
 * Since everything is set within /src, I added an 'initialConfig.js'
 * just for dotenv config. Developers can add whatever they want over here
 */
import './initialConfig';
/** Server */
import express from 'express';
import cors from 'cors';

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get('/', (_, resp) => {
    resp.status(200).send('Server working correctly');
});


app.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`);
});
