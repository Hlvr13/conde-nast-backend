import { GraphQLList, GraphQLString } from 'graphql';
import { SourcesType } from '../../types';
import { getSources } from '../../../api';

const args = {
    category: {
        name: 'category',
        type: GraphQLString,
    },
    language: {
        name: 'q',
        type: GraphQLString,
    },
    country: {
        name: 'pageSize',
        type: GraphQLString,
    },
};

/** Graphql Query to bring top news headlines sources */
export const topHeadlinesSources = {
    type: new GraphQLList(SourcesType),
    args,
    resolve: async (_, args) => {
        const { status, sources } = await getSources(args);
        if (status === 'ok') return sources;
        throw new Error('Error fetching sources.');
    },
};
