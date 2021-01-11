const LANG = "en"; // The language to display the date, the weather and the text. Look at localization.js to see the options available.

// Weather
const WEATHER_KEY = ""; // Your API key for OpenWeatherMap. Visit https://openweathermap.org/price to get one, the Free one is enough.
                        // You can leave it empty ("") to disable that feature.
const CITY = "London"; // Leave empty ("") to detect from your IP. It won't be as precise.
const TEMP_UNITS = ["metric", "°C"]; // The units of the temperature. Alternatives: ["imperial", "°F"] or ["standard", "K"]
const ICONS = 2 // The icons that represent the weather. Use 0 for none, 1 for Weather Icons or 2 for Open Weather Font.
                // If you don't use Open Weather Font, you can safely delete the "fonts" folder, as well as the "css/owfont.css" file.

// Favorite websites 
const WEBSITES = [ // A list of links to the websites you're interested in.
    {
        img: "https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63", // The logo of the website
        name: "Gmail",  // The name that will be displayed below the logo
        url: "https://mail.google.com" // The URL to the website
    },
    {
        img: "https://i.pinimg.com/originals/31/23/9a/31239a2f70e4f8e4e3263fafb00ace1c.png",
        name: "YouTube",
        url: "youtube.com"        
    },
    {
        img: "https://static.wikia.nocookie.net/owobot/images/f/fe/Patreon_Logo.png/revision/latest?cb=20191211093539",
        name: "Patreon",
        url: "https://www.patreon.com/home"
    },
    {
        img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        name: "GitHub",
        url: "https://www.github.com"
    }
];

// News
const NEWS_SOURCES = [ // The RSS sources you are interested in. You can leave it empty to disable that feature.
    "https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml"
    // Add more...
];
