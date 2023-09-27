import CityData from "@/interfaces/city";
import WeatherData from "@/interfaces/weather";
import cities from "@/lib/city.list.json";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

let Cities = cities as CityData[];

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { city_id } = context.query;
  // find the city with city ID
  const city = Cities.find((city) => city.id.toString() == city_id);

  if (!city) {
    throw new Error("City not found");
  }
  let lat = city.coord.lat;
  let lon = city.coord.lon;
  let api_key = process.env.WEATHER_API_KEY;

  const params = {
    lat: city.coord.lat,
    lon: city.coord.lon,
    apiKey: process.env.WEATHER_API_KEY,
    exclude: "minutely",
    units: "metric",
  };

  let url = `https://api.openweathermap.org/data/2.5/weather`;
  url = url + `?appid=${params.apiKey}`;
  url = url + `&lon=${params.lon}`;
  url = url + `&lat=${params.lat}`;
  url = url + `&exclude=${params.exclude}`;
  url = url + `&units=${params.units}`;

  // fetch the weather data
  const res = await fetch(url);
  const weatherData: WeatherData = await res.json();

  if (!weatherData) {
    throw new Error("Weather Data Not Found");
  }

  return {
    props: {
      city: city,
      weather: weatherData,
    },
  };
}

type Props = {
  city: CityData;
  weather: WeatherData;
};

export default function cityDetail({ city, weather }: Props) {
  const iconURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <>
      <Head>
        <title>Weather</title>
      </Head>
      <main className="mt-5 mx-5">
        <h1 className="text-xl font-medium mb-4">
          {city.name} ({city.country})
        </h1>
        <Link href="/weather">&larr; Back to Weather</Link>
        <div className="py-5">
          <div className="bg-blue-500 rounded p-4">
            <div className="grid grid-cols-2">
              <div>
                <h2 className="text-2xl mb-4 text-white">{weather.main.temp_max.toFixed(0)}&deg;C</h2>
                <span className="font-medium text-lg text-white">{weather.main.temp_max.toFixed(0)}&deg;C</span>
              </div>
            </div>
          </div>
          <div>{weather.weather[0].description}</div>
          <Image
            src={iconURL}
            width={50}
            height={50}
            alt="Weather Icon"
          />
        </div>
      </main>
    </>
  );
}
