/** Dev can add any initial configuration
 * Since everything is set within /src, I added an 'initialConfig.js'
 * just for dotenv config. Developers can add whatever they want over here
 */
import './initialConfig';
/** Server */
import express from 'express';
import cors from 'cors';

/** Graphql */
import schema from './graphql';
import { graphqlHTTP } from 'express-graphql';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get('/', (_, resp) => {
    resp.status(200).send('Server working correctly');
});

/** Used the most basic configuration since this packag still
 * uses graphiql in basic config.
 */
app.use(
    '/graphiql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV !== 'production',
    })
);

app.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`);
});
