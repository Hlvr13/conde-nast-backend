import NewsApi from 'newsapi';

const {
    v2: { sources, topHeadlines, everything },
} = new NewsApi(process.env.API_KEY);

/** NO Arg needed
 * @Filters => category, language, country
 */
export const getSources = async (args = {}) => {
    try {
        return sources(args);
    } catch (error) {
        throw new Error(error);
    }
};

/** Need to include at least one of arguments
 * @Filters => country, category q, pageSize, page
 */
export const getTopHeadlines = async (args = { country: 'us' }) => {
    try {
        return topHeadlines(args);
    } catch (error) {
        throw new Error(error);
    }
};

/** Need to include at least one of arguments
 * @Filters => qInTitle, q, from, to, language, sortBy, pageSize, page
 */
export const getEverything = async (args = { language: 'en' }) => {
    try {
        return everything(args);
    } catch (error) {
        throw new Error(error);
    }
};
