import api from "@/api";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const restaurant = await api.fetch(id);

  if (!restaurant) {
    return {
      title: "Restaurant not found",
      description: "",
    };
  }

  const { name, description } = restaurant;

  return {
    title: name,
    description,
  };
}

export async function generateStaticParams() {
  const restaurants = await api.list();

  return restaurants.map((restaurant) => ({
    id: restaurant.id,
  }));
}
interface RestaurantPageProps {
  params: {
    id: string;
  };
}

async function RestaurantPage({
  params: { id },
}: RestaurantPageProps): Promise<JSX.Element> {
  const restaurant = await api.fetch(id);
  if (!restaurant) {
    throw new Error("No se encontro el restaurante");
  }
  const { image, name, score, description, address } = restaurant;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[50vh] w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          priority
          className="brightness-50 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
            {name}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <span className="text-3xl font-semibold ml-2">
                {score.toFixed(1)}
              </span>
            </div>
            <div className="flex">
              {[...Array(Math.round(restaurant.score))].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>

          <p className="text-xl mb-8">{description}</p>

          <div className="flex items-center mb-8">
            <MapPin className="w-6 h-6 text-gray-500 mr-3" />
            <p className="text-gray-700">{address}</p>
          </div>

          <div className="flex flex-col space-y-8">
            <Button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300">
              Reservar una mesa
            </Button>
            <Link
              href="/"
              className="w-fit bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 align-self-center flex self-center"
            >
              Regresar a Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
