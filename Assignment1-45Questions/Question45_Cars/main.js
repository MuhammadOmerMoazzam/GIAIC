const carDetails = (manufacturer, model_name, ...options) => {
    let details = {
        "Manufacturer": manufacturer,
        "Model Name": model_name,
    };
    for (const [key, value] of options) {
        details[key] = value;
    }
    return details;
};
console.log(carDetails("Honda", "Civic", ["sunroof", true], ["year", 2024]));
console.log(carDetails("Toyota", "Hilux", ["color", "blue"], ["year", 2023]));
export {};
