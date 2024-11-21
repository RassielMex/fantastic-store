export interface Clothing {
  id?: number;
  name?: string;
  description?: string;
  trending?: boolean;
  categoryId?: number;
  availability?: number;
  imgUrl?: string;
  price?: number;
}

export enum ClothingCategory {
  JEANS = "jeans",
  CASUAL = "casual",
  DEPORTIVO = "deportivo",
  FORMAL = "formal",
  ACCESORIOS = "accesorios",
}
