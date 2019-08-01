// Adrián Navarro Gabino

const fs = require('fs');

const file = 'games.json';

let loadGames = () => {
    try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
        return [];
    }
};

let saveGames = (games) => {
    fs.writeFileSync(file, JSON.stringify(games));
};

let searchGameById = (id) => {
    let games = loadGames();
    let result = games.filter((game) => game.id == id);
    if (result.length > 0)
        return result[0];
};

let newGame = (id, title, producer, category, releaseYear) => {
    if (!searchGameById(id)) {
        let games = loadGames();
        let newGame = {
            id: id,
            title: title,
            producer: producer,
            category: category,
            releaseYear: releaseYear
        };
        games.push(newGame);
        saveGames(games);
        return true;
    }
};

let deleteGame = (id) => {
    let games = loadGames();
    let filteredGames = games.filter((game) => game.id != id);
    if (filteredGames.length !== games.length)
        saveGames(filteredGames);
    return filteredGames.length !== games.length;
}

let searchGameByYear = (year) => {
    let games = loadGames();
    let result = games.filter((game) => game.releaseYear >= year);
    if (result.length > 0)
        return result;
};

let searchGameByCategory = (category) => {
    let games = loadGames();
    let result = games.filter((game) => game.category == category);
    if (result.length > 0)
        return result;
};

module.exports = {
    loadGames: loadGames,
    newGame: newGame,
    deleteGame: deleteGame,
    searchGameByYear: searchGameByYear,
    searchGameByCategory: searchGameByCategory
};