import CityData from "@/interfaces/city";
import { NextApiRequest, NextApiResponse } from "next";
import cities from '@/lib/city.list.json';

const Cities = cities as CityData[];
const NUM_SUGGESTIONS = 5;

function searchCities(value: string):CityData[] {
    const matchingCities = Cities.filter(city =>
        city.name.toLowerCase()
        .startsWith(value.toLowerCase()))
        .slice(0, NUM_SUGGESTIONS);
    
    return matchingCities;
}

export default function handler({query: {name}}: NextApiRequest, res:NextApiResponse) { 
    // filter the list of cities to those whose names contain the given name
    const filteredCities = cityName? searchCities(cityName) : [];

    // Return the filtered list of cities as JSON
    return res.json({
        cities: filteredCities
    })
}