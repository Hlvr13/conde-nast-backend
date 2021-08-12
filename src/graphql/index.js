import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import * as queryFields from './fields/queries';

/** Graphql Schema
 * We can add queries, mutations and subscriptions.
 *
 * @NOTE Server is NOT configured for subscriptions, just queries and mutations
 */
export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queryFields,
    }),
});
