import pwdGen from '../images/Project Screenshots/password generator screenshot.png';
import traks from '../images/Project Screenshots/traks screenshot.png';
import snodes from '../images/Project Screenshots/Snodes Screenshot.png';
import techBlog from '../images/Project Screenshots/Tech Blog Screenshot.png';
import weatherApp from '../images/Project Screenshots/Weather App Screenshot.png';
import pokedex from '../images/Project Screenshots/Pokedex Screenshot.png';


const projects = [
    {
        "title": "TRAKS",
        "subtitle": "MySQL Database CLI",
        "link": "https://github.com/jonathan-warkentine/TRAKS",
        "image": traks,
        "github_link": "https://github.com/jonathan-warkentine/TRAKS",
        "description": "This app streamlines MySQL database interactions. Rather than the clunky, error-prone MySQL command-line, zip around exploring and tweaking your database with this interactive node-based CLI! Using TRAK's fully interactive interface, you can: create/print/update/delete databases, tables, and individual rows, as well as add/remove table fields, and even join tables in any selected database.",
        "technologies": ["JavaScript, Sequelize ORM, MySQL2, MySQL"]
    },
    {
        "title": "Snodes",
        "subtitle": "Code-Snippet Sharing Site",
        "image": snodes,
        "link": "https://floating-shore-96827.herokuapp.com/",
        "github_link": "https://github.com/jonathan-warkentine/snode",
        "description": "Snodes allows users to look at code snippets to quickly find code applicable to whatever application they are working on. They also have the ability to upvote and downvote code that is most helpful for them. This allows for the most used or searched code snippets to populate based off of popularity.",
        "technologies": ["HTML, CSS, JavaScript, Bootstrap, Handlebars, Sequelize ORM, MySQL2, MySQL, Express, Bcrypt, Codemirror"]
    },
    {
        "title": "Tech Blog Spot",
        "subtitle": "A Simple Blog Site with Robust Functionality",
        "image": techBlog,
        "link": "https://tech-blog-spot.herokuapp.com/",
        "github_link": "https://github.com/jonathan-warkentine/Tech-Blog-Spot",
        "description": "'Tech Blog Spot' is a simple blog-style site that allows users to create an account, 'favorite' and comment on blog posts, as well as draft their own.",
        "technologies": ["HTML, CSS, JavaScript, Bootstrap, Handlebars, Sequelize ORM, MySQL2, MySQL, Express, Bcrypt"]
    },
    {
        "title": "Weather App",
        "subtitle": "A Weather Forecast API Interface",
        "image": weatherApp,
        "link": "https://jonathan-warkentine.github.io/weather-app/",
        "github_link": "https://github.com/jonathan-warkentine/weather-app",
        "description": "Quickly search for cities and choose from an autocompleting list to find current temperature conditions and a forecast for the rest of the week",
        "technologies": ["HTML, CSS, JavaScript, Bootstrap, JQuery, JQuery UI"]
    },
    {
        "title": "Pokedex",
        "subtitle": "A Pokemon Card Deck Builder App",
        "image": pokedex,
        "link": "https://jonathan-warkentine.github.io/Pokedex/",
        "github_link": "https://jonathan-warkentine.github.io/Pokedex/",
        "description": "Explore and build your own custom Pokemon deck!",
        "technologies": ["HTML, CSS, JavaScript, Bootstrap, JQuery, JQuery UI"]
    },
    {
        "title": "Password Generator",
        "subtitle": "A Secure Password Generator",
        "image": pwdGen,
        "link": "https://jonathan-warkentine.github.io/password-generator/",
        "github_link": "https://github.com/jonathan-warkentine/password-generator",
        "description": "This project seeks to provide the user with a sleek and intuitive interface from which they can customize and generate passwords.",
        "technologies": ["HTML, CSS, JavaScript, JQuery"]
    }
];

export default projects;