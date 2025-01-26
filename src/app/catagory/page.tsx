'use client'
import React from "react";
import Link from "next/link";
import Layout from "../components/layout";

const cars = [
  { name: "Koenigsegg", type: "Sport", imageUrl: "/Car (17).png", price: "99.00", capacity: "2 People", fuel: "Manual" },
  { name: "Nissan GT - R", type: "Sport", imageUrl: "/Car (12).png", price: "80.00", capacity: "2 People", fuel: "Manual" },
  { name: "Rolls-Royce", type: "Sport", imageUrl: "/Car (1).png", price: "96.00", capacity: "4 People", fuel: "Manual" },
  { name: "All New Rush", type: "SUV", imageUrl: "/Car (13).png", price: "72.00", capacity: "6 People", fuel: "Manual" },
  { name: "CR - V", type: "SUV", imageUrl: "/Car (14).png", price: "80.00", capacity: "6 People", fuel: "Manual" },
  { name: "All New Terios", type: "SUV", imageUrl: "/Car (15).png", price: "74.00", capacity: "6 People", fuel: "Manual" },
];

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-4 bg-white shadow-md">
          <div>
            <h3 className="font-semibold mb-2">TYPE</h3>
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
              <label className="flex items-center mb-1" key={type}>
                <input type="checkbox" className="mr-2" /> {type}
              </label>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">CAPACITY</h3>
            {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
              <label className="flex items-center mb-1" key={capacity}>
                <input type="checkbox" className="mr-2" /> {capacity}
              </label>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">PRICE</h3>
            <input type="range" max="100" className="w-full" />
            <p className="text-sm text-gray-500">Max: $100.00</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-md mb-4">
            <div>
              <h3 className="font-semibold">Pick - Up</h3>
              <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 mt-2">
                <select className="border p-2 rounded w-full sm:w-auto">
                  <option>Select your city</option>
                </select>
                <input type="date" className="border p-2 rounded w-full sm:w-auto" />
                <input type="time" className="border p-2 rounded w-full sm:w-auto" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Drop - Off</h3>
              <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 mt-2">
                <select className="border p-2 rounded w-full sm:w-auto">
                  <option>Select your city</option>
                </select>
                <input type="date" className="border p-2 rounded w-full sm:w-auto" />
                <input type="time" className="border p-2 rounded w-full sm:w-auto" />
              </div>
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, index) => (
              car.name === "Nissan GT - R" ? (
                <Link href="/Details" key={index} passHref target="_blank">
                  <div className="border rounded-lg p-4 h-[388px] w-[317px] shadow-md bg-white cursor-pointer hover:shadow-neutral-200">
                    <img
                      src={car.imageUrl}
                      alt={car.name}
                      className="h-[50%] w-full object-contain rounded-md shadow-lg"
                    />
                    <h3 className="font-semibold mt-2 text-lg">{car.name}</h3>
                    <p className="text-gray-500">{car.type}</p>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                      <span>{car.capacity}</span>
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-lg font-semibold">${car.price}/day</p>
                      <button className="bg-blue-500 text-white px-4 py-1 rounded">
                        Rent Now
                      </button>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={index} className="border rounded-lg p-4 h-[388px] w-[317px] shadow-md bg-white">
                  <img
                    src={car.imageUrl}
                    alt={car.name}
                    className="h-[50%] w-full object-contain rounded-md shadow-neutral-300"
                  />
                  <h3 className="font-semibold mt-2 text-lg">{car.name}</h3>
                  <p className="text-gray-500">{car.type}</p>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <span>{car.capacity}</span>
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-semibold">${car.price}/day</p>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded">
                      Rent Now
                    </button>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Show More */}
          <div className="flex justify-center mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Show more cars
            </button>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;  