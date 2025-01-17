import api from "@/api";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  const restaurants = await api.list();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">Restaurantes</h1>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {restaurant.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {restaurant.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    priority
                    width={500}
                    height={500}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-sm text-gray-500">{restaurant.address}</p>
                  <p className="text-sm text-gray-500">
                    Puntuación: {restaurant.score} ({restaurant.rating}{" "}
                    estrellas)
                  </p>
                </CardContent>
                <CardFooter>
                  {/* Puedes agregar contenido adicional en el pie de la tarjeta si es necesario */}
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
