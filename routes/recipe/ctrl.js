const recipes = require('../../recipes.json');

function getRecipe(req, res) {
    const query  = req.query;
    console.log(query);

    if (Object.keys(query).length !== 0) { // PAGINATION
        const page  = query.page; // SELECTED PAGE INDEX
        const size  = query.limit; // PAGE SIZE

        const parsedRecipes = recipes.slice(size * (page - 1), size * page);
        console.log(parsedRecipes);
        return res.render('recipes.ejs', { data: parsedRecipes });
    } else { // QUERY ALL
        console.log(recipes);
        return res.render('recipes.ejs', { data: recipes });
    }
}

module.exports = {
    getRecipe: getRecipe
}