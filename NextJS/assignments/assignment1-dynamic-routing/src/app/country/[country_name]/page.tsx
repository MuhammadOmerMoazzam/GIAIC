import Link from "next/link";

export default function DynamicCountry({params}:{params:{country_name: string}}) {

    const countries = {
        "pakistan":{
            "capital": "Islamabad",
            "population": "235.8 million"
        },
        "china":{
            "capital": "Beijing",
            "population": "1.412 billion"
        },
        "qatar":{
            "capital": "Doha",
            "population": "2.695 million"
        },
        "russia":{
            "capital": "Moscow",
            "population": "144.2 million"
        },
        "united-arab-emirates":{
            "capital": "Abu Dhabi",
            "population": "9.441 million"
        }
    }

    if (Object.keys(countries).includes(params.country_name) ) {

        const country = params.country_name as keyof typeof countries;

        return (
            <div style={{margin: 30, padding: 10}}>
                <Link className="go-back" href="/country">Go Back</Link>
    
                <h2> {params.country_name.toUpperCase()} </h2>

                <p>Capital: {countries[country].capital}</p>

                <p>Population: {countries[country].population}</p>
            </div>
        );
    } else {
        return(
            <div className="not-found">
                <p>Country not found.</p>
            </div>
        );
    }
}