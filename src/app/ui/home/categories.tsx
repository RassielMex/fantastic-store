import clsx from "clsx";
import Image from "next/image";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { ClothingCategory } from "@/app/models/models";

export default function Categories() {
  return (
    <section className="bg-background py-20">
      <motion.div
        className="container mx-auto "
        initial={{ opacity: 0.8, y: 20, x: -5 }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 5,
          transition: { ease: "easeIn", type: "spring" },
        }}
      >
        <h1 className="font-bold text-5xl text-center mb-4">
          ELEVANDO TU FORMA DE JUGAR A LA MODA
        </h1>
        <p className="font-normal text-xs text-center mb-8">
          DESCUBRE LA COMBINACION ENTRE COMODIDAD Y ESTILO, EXPLORA ENTRE TODAS
          LAS CATEGORIAS Y MÁS.
        </p>

        <div className="grid gap-x-4 gap-y-6 md:grid-rows-3 md:grid-cols-3 md:h-3/4 md:max-h-[800]">
          <CategoryCard
            category={ClothingCategory.JEANS.toUpperCase()}
            bottomyImg="/images/jeans.png"
            description="El mejor estilo para tus jeans. Descubre las tendencias y marca la nueva era."
            span={2}
            paddingTop
            href={`/products/?category=${ClothingCategory.JEANS}`}
          />
          <CategoryCard
            category={ClothingCategory.ACCESORIOS.toUpperCase()}
            topImg="/images/promotions1.png"
            bottomyImg="/images/promotions2.png"
            description="El mejor estilo para tus jeans"
            span={3}
            href={`/products/?category=${ClothingCategory.ACCESORIOS}`}
          />
          <CategoryCard
            category={ClothingCategory.CASUAL.toUpperCase()}
            bottomyImg="/images/t-shirts.png"
            paddingTop
            href={`/products/?category=${ClothingCategory.CASUAL}`}
          />
          <CategoryCard
            category={ClothingCategory.DEPORTIVO.toUpperCase()}
            bottomyImg="/images/sneakers.png"
            description="Pasion por lo fashion y la comodidad que se reflejan en cada par de zapatos. Experiencia en estilo y funcionalidad"
            span={2}
            paddingTop
            href={`/products/?category=${ClothingCategory.DEPORTIVO}`}
          />
          <CategoryCard
            category={ClothingCategory.FORMAL.toUpperCase()}
            bottomyImg="/images/shirts.png"
            paddingTop
            href={`/products/?category=${ClothingCategory.FORMAL}`}
          />
        </div>
      </motion.div>
    </section>
  );
}

type CategoryType = {
  bottomyImg: string;
  category: string;
  topImg?: string;
  description?: string;
  span?: number;
  paddingTop?: boolean;
  href: string;
};
const CategoryCard = ({
  bottomyImg,
  category,
  topImg,
  description,
  paddingTop = false,
  span = 1,
  href,
}: CategoryType) => {
  return (
    <Link
      href={href}
      className={clsx(
        "flex flex-col justify-between px-10 bg-gradient-to-tr from-card_background rounded-md",
        span === 1 && "row-span-1",
        span === 2 && "row-span-2",
        span === 3 && "row-span-3",
        paddingTop && "pt-10"
      )}
    >
      {topImg && (
        <div className="relative h-60">
          <Image src={topImg} alt="bottom image" fill />
        </div>
      )}
      <h3 className="text-center text-xl font-bold mb-4">{category}</h3>
      {description && (
        <p className="font-normal text-sm text-center">{description}</p>
      )}
      <div className="relative h-60">
        <Image src={bottomyImg} alt="bottom image" fill />
      </div>
    </Link>
  );
};
