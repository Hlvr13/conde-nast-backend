import { GraphQLObjectType, GraphQLString } from 'graphql';

export const TopHeadlinesType = new GraphQLObjectType({
    name: 'TopHeadlines',
    fields: () => ({
        source: {
            type: new GraphQLObjectType({
                name: 'TopHeadlinesSource',
                fields: () => ({
                    id: { type: GraphQLString },
                    name: { type: GraphQLString },
                }),
            }),
        },
        author: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        url: { type: GraphQLString },
        urlToImage: { type: GraphQLString },
        publishedAt: { type: GraphQLString },
        content: { type: GraphQLString },
    }),
});
