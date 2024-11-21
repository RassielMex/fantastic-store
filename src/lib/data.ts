import { Clothing } from "@/app/models/clothing";

export async function getClothing(trending: boolean) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const data = await fetch(
      `${process.env.API_HOSTNAME}/clothes/?trending=${trending}`
    );

    if (!data.ok) {
      return null;
    }
    const trendingProducts = (await data.json()) as Clothing[];
    return trendingProducts;
  } catch (error) {
    console.log(error);
    return null;
  }
}
