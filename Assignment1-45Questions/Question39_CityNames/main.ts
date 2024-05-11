// making a function containing city and country as an arguments
const city_country = (city:string, country:string)=> {
    return `\"${city}, ${country}\"`;
}

// making an object containing key:value pair city:country
const capital: Record<string, string> = {
    "Islamabad":"Pakistan",
    "Muscat":"Oman",
    "Doha":"Qatar",
}

// calling the function with three different arguments
for (let i in capital) {
    console.log( city_country(i, capital[i]) );
}


//--------- Explanation for Record<string, string> ------------
// We've used a type annotation Record<string, string> to specify that capital is an object,
// where keys (city names) are of type string and values (country names) are also 
// of type string.