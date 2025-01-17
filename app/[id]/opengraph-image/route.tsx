// app/restaurant/[id]/opengraph-image.tsx
import api from "@/api";
import Image from "next/image";
import { ImageResponse } from "next/og"; // o "next/og" en versiones anteriores

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  // 1. Obtener datos del restaurante
  const restaurant = await api.fetch(params.id); // tu lógica de fetch
  if (!restaurant) {
    return new Response("Not found", { status: 404 });
  }

  // 2. Si la imagen es externa, obtén el ArrayBuffer
  let imageData: ArrayBuffer | null = null;
  if (restaurant.image) {
    const res = await fetch(restaurant.image);
    if (res.ok) {
      imageData = await res.arrayBuffer();
    }
  }

  // 3. Retornar el ImageResponse
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          width: "100%",
          height: "100%",
          // En lugar de backgroundImage externo, podrías usar un <img />
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 
          En Edge, no se soporta backgroundImage con URL externa.
          En su lugar, se usa un <img /> con un objeto Blob (imageData) si existe.
        */}
        {imageData ? (
          <Image
            src={`data:image/jpeg;base64,${Buffer.from(imageData).toString(
              "base64"
            )}`}
            width="1200"
            height="630"
            alt={restaurant.name}
          />
        ) : (
          <p>Sin imagen</p>
        )}
        {/* Superponer texto encima, con absolute positioning o usando otro div */}
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 50,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h1>{restaurant.name}</h1>
          <p>{restaurant.description}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
