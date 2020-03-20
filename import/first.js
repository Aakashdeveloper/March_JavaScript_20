let article = {}

article.latestItem = [
    {
        name:'About JavaScript',
        price:987
    },
    {
        name:'About React',
        price:1987
    }
]

article.find =  (table) => { return `Select * from ${table}`}

//module.exports = article;
export default article;