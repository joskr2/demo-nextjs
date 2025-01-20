"use client";

import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { HeartIcon } from "lucide-react";

interface FavouriteButtonProps {
  id: string;
  name?: string;
  image?: string;
  description?: string;
  score?: number;
  ratings?: number;
}

const FavouriteButton = ({ id }: FavouriteButtonProps) => {
  const isFavourite = window.localStorage.getItem("favorites")?.includes(id);
  const handleFavourite = () => {
    if (isFavourite) {
      window.localStorage.removeItem("favorites");
    } else {
      window.localStorage.setItem("favorites", id);
    }
  };
  return (
    <Button type="button" variant="ghost" onClick={handleFavourite}>
      <HeartIcon
        className={`${isFavourite ? "text-red-500" : "text-gray-500"}`}
      />
    </Button>
  );
};

const DynamicFavouriteButton = dynamic(async () => FavouriteButton, {
  ssr: false,
});

export default DynamicFavouriteButton;
