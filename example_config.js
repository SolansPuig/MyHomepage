const LANG = "en"; // The language to display the date, the weather and the text. Look at localization.js to see the options available.

// Weather
const WEATHER_KEY = ""; // Your API key for OpenWeatherMap. Visit https://openweathermap.org/price to get one, the Free one is enough.
                        // You can leave it empty ("") to disable that feature.
const CITY = "London"; // Leave empty ("") to detect from your IP. It won't be as precise.
const TEMP_UNITS = ["metric", "°C"]; // The units of the temperature. Alternatives: ["imperial", "°F"] or ["standard", "K"]
const ICONS = 2 // The icons that represent the weather. Use 0 for none, 1 for Weather Icons or 2 for Open Weather Font.
                // If you don't use Open Weather Font, you can safely delete the "fonts" folder, as well as the "css/owfont.css" file. 

// News
const NEWS_SOURCES = [ // The RSS sources you are interested in. You can leave it empty to disable that feature.
    "https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml"
    // Add more...
];
