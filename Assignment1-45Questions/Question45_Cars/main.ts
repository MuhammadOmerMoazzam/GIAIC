const carDetails = (manufacturer: string, model_name: string,
    ...options: [string, any][]): Object => {

        let details: any = {
            "Manufacturer": manufacturer,
            "Model Name": model_name,
        }

        for (const [key, value] of options) {
            details[key] = value;
        }

        return details;
}

console.log(carDetails("Honda", "Civic", ["sunroof", true], ["year", 2024]));
console.log(carDetails("Toyota", "Hilux", ["color", "blue"], ["year", 2023]));
