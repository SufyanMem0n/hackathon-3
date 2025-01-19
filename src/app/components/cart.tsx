// components/CarCard.tsx
interface CarCardProps {
    name: string;
    category: string;
    price: number;
    image: string;
    specs: {
      capacity: string;
      transmission: string;
      people: number;
    };
    isFavorite?: boolean;
  }
  
  const CarCard = ({ name, category, price, image, specs, isFavorite }: CarCardProps) => {
    return (
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
          <button>
            <svg
              className={`h-6 w-6 ${isFavorite ? 'fill-red-500' : 'fill-none stroke-gray-400'}`}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
  
        <div className="my-4">
          <img src={image} alt={name} className="w-full object-contain h-20" />
        </div>
  
        <div className="flex  mb-4  text-end text-gray-500">
          <div className="flex items-center gap-2">
            <span>{specs.capacity}</span>
            <span>{specs.transmission}</span>
            <span>{specs.people} People</span>
          </div>
        </div>
  
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
            <span className="text-gray-500">/day</span>
          </div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white h-8">
            Rent Now
          </button>
        </div>
      </div>
    );
  };
  
  export default CarCard;