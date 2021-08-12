import { GraphQLObjectType, GraphQLString } from 'graphql';

export const SourcesType = new GraphQLObjectType({
    name: 'Sources',
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        url: {
            type: GraphQLString,
        },
        category: {
            type: GraphQLString,
        },
        language: {
            type: GraphQLString,
        },
        country: {
            type: GraphQLString,
        },
    }),
});
