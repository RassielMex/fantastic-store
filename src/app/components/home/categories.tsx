import clsx from "clsx";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="h-lvh mb-16">
      <h1 className="font-bold text-5xl text-center mb-4">
        ELEVANDO TU FORMA DE JUGAR A LA MODA
      </h1>
      <p className="font-normal text-xs text-center mb-8">
        DESCUBRE LA COMBINACION ENTRE COMODIDAD Y ESTILO, EXPLORA ENTRE TODAS
        LAS CATEGORIAS Y MÁS.
      </p>
      <div className="grid gap-x-4 gap-y-6 grid-rows-3 grid-cols-3 h-3/4">
        <CategoryCard
          category="JEANS_1"
          bottomyImg="/images/jeans.png"
          description="El mejor estilo para tus jeans"
          span={2}
        />
        <CategoryCard
          category="JEANS_2"
          bottomyImg="/images/jeans.png"
          description="El mejor estilo para tus jeans"
          span={3}
        />
        <CategoryCard
          category="JEANS_3"
          bottomyImg="/images/jeans.png"
          description="El mejor estilo para tus jeans"
        />
        <CategoryCard
          category="JEANS_4"
          bottomyImg="/images/jeans.png"
          description="El mejor estilo para tus jeans"
          span={2}
        />
        <CategoryCard
          category="JEANS_5"
          bottomyImg="/images/jeans.png"
          description="El mejor estilo para tus jeans"
        />
      </div>
    </section>
  );
}

type CategoryType = {
  bottomyImg: string;
  category: string;
  topImg?: string;
  description?: string;
  span?: number;
};
const CategoryCard = ({
  bottomyImg,
  category,
  topImg,
  description,
  span = 1,
}: CategoryType) => {
  return (
    <div
      className={clsx(
        "p-10 bg-gradient-to-b from-card_background rounded-md",
        span === 1 && "row-span-1",
        span === 2 && "row-span-2",
        span === 3 && "row-span-3"
      )}
    >
      {topImg && <Image src={topImg} alt="top image" />}
      <h3>{category}</h3>
      {description && <p>{description}</p>}
      <div className="relative w-[150px] h-[150px]">
        <Image src={bottomyImg} alt="bottom image" fill />
      </div>
    </div>
  );
};
