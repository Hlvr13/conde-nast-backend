import { GraphQLList, GraphQLString } from 'graphql';
import { EverythingType } from '../../types';
import { getEverything } from '../../../api';

const args = {
    qInTitle: {
        name: 'qInTitle',
        type: GraphQLString,
    },
    q: {
        name: 'q',
        type: GraphQLString,
    },
    from: {
        name: 'from',
        type: GraphQLString,
    },
    to: {
        name: 'to',
        type: GraphQLString,
    },
    language: {
        name: 'language',
        type: GraphQLString,
    },
    sortBy: {
        name: 'sortBy',
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

/** Graphql Query to bring ALL news */
export const everything = {
    type: new GraphQLList(EverythingType),
    args,
    resolve: async (_, args) => {
        const { status, articles } = await getEverything(args);
        if (status === 'ok') return articles;
        throw new Error('Error fetching top headlines.');
    },
};
