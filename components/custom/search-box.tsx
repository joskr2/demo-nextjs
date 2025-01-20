"use client";

import { Input } from "@/components/ui/input";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const search = formData.get("search") as string;
    router.push(`/?search=${search}`);
  };

  // async function searchAction(formData: FormData) {

  //   "use server";

  //   const search = formData.get("search") as string;
  //   router.push(`/?search=${search}`);
  // }

  return (
    <form onSubmit={handleSearch} className="flex gap-2 my-4">
      <Input
        type="text"
        name="search"
        placeholder="Buscar restaurante"
        className="px-4 py-2"
        defaultValue={search}
      />
      <Button type="submit" className="px-4 py-2">
        Buscar
      </Button>
    </form>
  );
};

export default SearchBox;
