// app/page.tsx
import HeroSection from './components/hero';
import SearchSection from './components/search';
import CarCard from './components/cart';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';
const carsData = [
  {
    name: "Koenigsegg",
    category: "Sport",
    price: 99.00,
    image: "/car (7).png",
    specs: {
      capacity: "90L",
      transmission: "Manual",
      people: 2
    },
    isFavorite: true
  },
  {
    name: "Nissan GT-R",
    category: "Sport",
    price: 99.00,
    image: "/car (8).png",
    specs: {
      capacity: "80L",
      transmission: "Manual",
      people: 2
    },
    isFavorite: true
  },
  {
    name: "All New Rush",
    category: "Sport",
    price: 99.00,
    image: "/Car (23).png",
    specs: {
      capacity: "70L",
      transmission: "Manual",
      people: 2
    },
    isFavorite: true
  },
  {
    name: "MG ZX Exclusice",
    category: "Sport",
    price: 99.00,
    image: "/Car (10).png",
    specs: {
      capacity: "70L",
      transmission: "Manual",
      people: 2
    },
    isFavorite: false
  }];

  // Add more cars data...
;

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
     <Navbar/>
      <HeroSection />
      <SearchSection />
      
      <section className="p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Popular Car</h2>
          <a href="#" className="text-blue-600">View All</a>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {carsData.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </section>

      <section className="p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Recommendation Car</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {carsData.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </section>

      <div className="flex justify-center p-4">
      <Link href="/catagory" target='blank'>
  <button className="bg-[#3563e9] px-4 py-2 text-white rounded-lg mt-5">
    Show More Cars
  </button>
</Link>
     </div>
      <Footer/>
    </main>
  );
}