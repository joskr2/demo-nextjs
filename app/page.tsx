import api from "@/api";
import RestaurantCard from "@/components/custom/restaurant-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home({ searchParams }: { searchParams: { search: string } }) {
  const restaurants = searchParams.search 
  ? await api.search(searchParams.search)
  : await api.list();

  async function searchAction(formData: FormData) {
    "use server";
    const search = formData.get("search") as string;
    redirect(`/?search=${search}`);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">Restaurantes</h1>

        <form action={searchAction} className="flex gap-2">
          <Input type="text" name="search" placeholder="Buscar restaurante" />
          <Button type="submit">Buscar</Button>
        </form>

        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* 
          el prefetch  es false para que no se cargue la página de detalle del restaurante hasta que el usuario haga clic en el enlace 
          */}
          {restaurants.map((restaurant) => (
            <Link key={restaurant.name} href={restaurant.id} prefetch={false}>
              <RestaurantCard {...restaurant} />
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
