const city_country = (city:string, country:string = "Pakistan")=> {
    console.log(`${city} is in ${country}.`);
}

// calling unction for three different cities, 
// at least one of which is not in the default country
city_country("Karachi");
city_country("Lahore");
city_country("London", "England");