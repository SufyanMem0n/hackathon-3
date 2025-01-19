"use client";

import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

interface Car {
  slug: string;
  name: string;
  type: string;
  imageUrl: string;
  price: string;
  capacity: string;
  fuel: string;
}

const carsData: Car[] = [
  {
    slug: "koenigsegg",
    name: "Koenigsegg",
    type: "Sport",
    imageUrl: "/Car (17).png",
    price: "99.00",
    capacity: "2 People",
    fuel: "Manual",
  },
  {
    slug: "nissan-gt-r",
    name: "Nissan GT - R",
    type: "Sport",
    imageUrl: "/Car (12).png",
    price: "80.00",
    capacity: "2 People",
    fuel: "Manual",
  },
  // Add more car data with unique slugs
];

const CarDetails: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const car = carsData.find((item) => item.slug === slug);

  if (!car) {
    return (
      <Layout>
        <div className="p-6">
          <h1 className="text-2xl font-bold">Car not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          <img src={car.imageUrl} alt={car.name} className="w-full rounded-md" />
          <h1 className="text-3xl font-bold mt-4">{car.name}</h1>
          <p className="text-gray-500">{car.type}</p>
          <p className="mt-4 text-lg font-semibold">Capacity: {car.capacity}</p>
          <p className="text-lg font-semibold">Fuel: {car.fuel}</p>
          <p className="text-lg font-bold text-blue-600">${car.price}/day</p>
        </div>
      </div>
    </Layout>
  );
};

export default CarDetails;
