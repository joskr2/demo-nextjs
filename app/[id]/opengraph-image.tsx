// app/restaurant/[id]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import api from "@/api";

export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const restaurant = await api.fetch(params.id);

  if (!restaurant) {
    return new Response("Restaurant not found", { status: 404 });
  }

  const { name, description, image } = restaurant;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: "48px",
          fontFamily: "Arial, sans-serif",
          color: "#333",
          padding: "20px",
          backgroundImage: `url(${image || "/placeholder.svg"})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
