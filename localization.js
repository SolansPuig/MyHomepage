// Feel free to create your own translation. 
// The language name must be one from this list: https://openweathermap.org/current#multi, otherwise, the weather description won't be translated.

const LOCALE_ALL = {
    "en": { // English
        date: "en-US", // The language to display the date. Must be one from the list here: https://www.w3schools.com/jsref/jsref_tolocalestring.asp.
        weather: ["The weather in ", " is ", " The temperature is ", " and feels like "], 
        last_news: "Last News"
    },
    "es": { // Spanish / Español
        date: "es-ES", 
        weather: ["El tiempo en ", " es ", " La temperatura es de ", ", con sensación de "], 
        last_news: "Últimas noticias"
    },
    "ca": { // Catalan / Català
        date: "ca-ES", 
        weather: ["El temps a ", " és ", " La temperatura és de ", ", amb sensació de "], 
        last_news: "Últimes notícies"
    },
}