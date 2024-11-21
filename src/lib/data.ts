import { Clothing } from "@/app/models/models";

export async function getClothing(
  trending: boolean,
  search?: string,
  category?: string
) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let data;
    if (trending) {
      data = await fetch(
        `${process.env.API_HOSTNAME}/clothes/?trending=${trending}`
      );
    } else if (search && category) {
      data = await fetch(
        `${process.env.API_HOSTNAME}/clothes/?search=${search}&category=${category}`
      );
    } else if (search) {
      data = await fetch(
        `${process.env.API_HOSTNAME}/clothes/?search=${search}`
      );
    } else if (category) {
      data = await fetch(
        `${process.env.API_HOSTNAME}/clothes/?&category=${category}`
      );
    } else {
      data = await fetch(`${process.env.API_HOSTNAME}/clothes`);
    }

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
