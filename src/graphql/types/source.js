import { GraphQLObjectType, GraphQLString } from 'graphql';

export const SourceType = new GraphQLObjectType({
    name: 'SourceType',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
    }),
});
