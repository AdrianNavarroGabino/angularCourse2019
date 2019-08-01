// Adrián Navarro Gabino

const videoGames = require('./videoGames');

let game1 = videoGames.games.newGame(1, 'Angry birds', 'Rovio Entertainment', 'Platforms', 2009);
let game2 = videoGames.games.newGame(2, 'Bubble Bobble', 'Taito', 'Arcade', 1986);
let game3 = videoGames.games.newGame(3, 'Asteroids', 'Atari', 'Arcade', 1979);
let game4 = videoGames.games.newGame(4, 'R-Type', 'Irem', 'Arcade', 1987);
let game5 = videoGames.games.newGame(5, 'Golden Sun', 'Nintendo', 'Rol', 2001);

console.log("ALL THE GAMES");
let games = videoGames.games.loadGames();
console.log(games);
console.log();

console.log("ARCADE GAMES");
games = videoGames.games.searchGameByCategory('Arcade');
console.log(games);
console.log();

videoGames.games.deleteGame(4);

console.log('GAMES SINCE 1985');
games = videoGames.games.searchGameByYear(1985);
console.log(games);