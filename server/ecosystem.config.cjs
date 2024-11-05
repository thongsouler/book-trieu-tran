module.exports = {
    apps: [
        {
            name: "FILM-MOON",
            script: './index.js',
            env: {
                MONGODB_URL: 'mongodb+srv://nnbinh2504:nqL5Lw1VGQ6fz0cZ@my-film-moon-tuat.mx6qeif.mongodb.net/?retryWrites=true&w=majority&appName=my-film-moon-tuat',
                PORT: "5000",
                TOKEN_SECRET: "binhhuun",
                TOKEN_SECRET_KEY: "binhhuun",
                TMDB_BASE_URL: "https://api.themoviedb.org/3/",
                TMDB_KEY: "f1f257225940af420ceb36a528db07fb",
            }
        }
    ]
}