

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};



export async function fetchCars() {
    // const { manufacturer, year, model, limit, fuel } = filters;
  
    // Set the required headers for the API request
    const headers: HeadersInit = {
      "X-RapidAPI-Key": "ae9130e3demshf804db12e592098p11b7afjsnc9aef7746de1",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

     // Set the required headers for the API request
    //  ?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
        {
        headers: headers,
        }
    );
    // Parse the response as JSON
    const result = await response.json();

    return result;
}