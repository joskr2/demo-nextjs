export interface IRestaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
}

// const restaurants: IRestaurant[] = [
//   {
//     id: "1",
//     name: "La Trattoria",
//     image:
//       "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwzNTc2MjR8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     description:
//       "Auténtica comida italiana con pasta fresca y pizzas al horno.",
//     address: "Av. Italia 345, Ciudad Gótica",
//     score: 4.7,
//     rating: 5,
//   },
//   {
//     id: "2",
//     name: "Sushi House",
//     image:
//       "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwzNTc2MjR8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     description: "Variedad de sushi y platos de la cocina japonesa.",
//     address: "Calle del Mar 567, Tokio",
//     score: 4.3,
//     rating: 4,
//   },
//   {
//     id: "3",
//     name: "Taquería El Mexicano",
//     image:
//       "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwzNTc2MjR8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     description:
//       "Los mejores tacos y antojitos mexicanos, con salsas picantes.",
//     address: "Av. Reforma 999, Ciudad de México",
//     score: 4.6,
//     rating: 5,
//   },
//   {
//     id: "4",
//     name: "Burger Queen",
//     image:
//       "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwzNTc2MjR8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     description:
//       "Deliciosas hamburguesas gourmet y papas fritas con salsas caseras.",
//     address: "Boulevard Central 123, Los Ángeles",
//     score: 4.0,
//     rating: 4,
//   },
//   {
//     id: "5",
//     name: "El Café de la Esquina",
//     image:
//       "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwzNTc2MjR8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     description:
//       "Cafetería acogedora con repostería artesanal y café de especialidad.",
//     address: "Calle Principal 10, Barcelona",
//     score: 4.8,
//     rating: 5,
//   },
// ];

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhjHDFRHHb2VTPYpDvoQxHVKrf9lqwLqlnVXo5-qvUqZvTdcYMphRc2owF6r8kWf4aoIuZmRP0gJ_t/pub?gid=0&single=true&output=csv";

const api = {
  list: async (): Promise<IRestaurant[]> => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primera línea porque es el encabezado
    const [, ...data] = await fetch(URL)
      .then((res) => res.text())
      .then((text) => text.split("\n"));

    // Convertimos cada línea en un objeto Restaurant, asegúrate de que los campos no posean `,`
    const restaurants: IRestaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] =
        row.split(",");
      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    // Lo retornamos
    return restaurants;
  },
  fetch: async (id: string): Promise<IRestaurant | undefined> => {
    const restaurants = await api.list();
    return restaurants.find((restaurant) => restaurant.id === id);
  },
};

export default api;
