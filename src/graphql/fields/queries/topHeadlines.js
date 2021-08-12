import { GraphQLList, GraphQLString } from 'graphql';
import { TopHeadlinesType } from '../../types';
import { getTopHeadlines } from '../../../api';

const args = {
    country: {
        name: 'country',
        type: GraphQLString,
    },
    category: {
        name: 'category',
        type: GraphQLString,
    },
    q: {
        name: 'q',
        type: GraphQLString,
    },
    pageSize: {
        name: 'pageSize',
        type: GraphQLString,
    },
    page: {
        name: 'page',
        type: GraphQLString,
    },
};

/** Graphql Query to bring top news headlines */
export const topHeadlines = {
    type: new GraphQLList(TopHeadlinesType),
    args,
    resolve: async (_, args) => {
        const { status, articles } = await getTopHeadlines(args);
        if (status === 'ok') return articles;
        throw new Error('Error fetching top headlines.');
    },
};
