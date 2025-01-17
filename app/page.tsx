import api from "@/api";
import RestaurantCard from "@/components/custom/restaurant-card";
import Link from "next/link";

export default async function Home() {
  const restaurants = await api.list();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">Restaurantes</h1>

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
