import NewsApi from 'newsapi';

const {
    v2: { sources, topHeadlines, everything },
} = new NewsApi(process.env.API_KEY);

export const getSources = async (args = {}) => {
    try {
        return sources(args);
    } catch (error) {
        throw new Error(error);
    }
};

export const getTopHeadlines = async (args = { country: 'us' }) => {
    try {
        return topHeadlines(args);
    } catch (error) {
        throw new Error(error);
    }
};

export const getEverything = async (args = { country: 'us' }) => {
    try {
        return everything(args);
    } catch (error) {
        throw new Error(error);
    }
};
