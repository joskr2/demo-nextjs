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

const RestaurantCard = ({
  name,
  description,
  image,
  score,
  address,
  rating,
}: IRestaurant) => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Image
          src={image}
          alt={name}
          priority
          width={500}
          height={500}
          className="w-full h-48 object-cover rounded-lg"
        />
        <p className="text-sm text-gray-500">{address}</p>
        <p className="text-sm text-gray-500">
          Puntuación: {score} ({rating} estrellas)
        </p>
      </CardContent>
      <CardFooter>
        {/* Puedes agregar contenido adicional en el pie de la tarjeta si es necesario */}
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
