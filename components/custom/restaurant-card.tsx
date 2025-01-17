import type { IRestaurant } from "@/api";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

const RestaurantCard = (restaurant: IRestaurant) => {
  console.log(restaurant)
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{restaurant.name}</CardTitle>
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
          Puntuación: {restaurant.score} 
        </p>
        <p className="text-sm text-gray-500">
         ({restaurant.ratings} estrellas)
        </p>
      </CardContent>
      <CardFooter>
        {/* Puedes agregar contenido adicional en el pie de la tarjeta si es necesario */}
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
