"use client";

import Link from "next/link";
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

const cars: Car[] = [
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

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-4 bg-white shadow-md">
          {/* Sidebar Filters */}
          <div>
            <h3 className="font-semibold mb-2">TYPE</h3>
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
              <label className="flex items-center mb-1" key={type}>
                <input type="checkbox" className="mr-2" /> {type}
              </label>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          hellooooocls
          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, index) => (
              <Link key={index} href={`/Details/${car.slug}`} passHref>
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
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
