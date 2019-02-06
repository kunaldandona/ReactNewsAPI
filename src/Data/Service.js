export function getData(query,countryInput) {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('a7d2235b72e041709507eb8f2e4a5e6b');
    return new Promise((resolve, reject) =>{
        newsapi.v2.topHeadlines({
            q: query,
            category: 'business',
            language: 'en',
            country: countryInput,
        }).then(response => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
}