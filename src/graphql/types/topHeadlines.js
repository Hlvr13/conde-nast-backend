import { GraphQLObjectType, GraphQLString } from 'graphql';
import { SourceType } from './source';
export const TopHeadlinesType = new GraphQLObjectType({
    name: 'TopHeadlines',
    fields: () => ({
        source: {
            type: SourceType,
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
