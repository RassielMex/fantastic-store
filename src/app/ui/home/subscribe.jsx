//import Image from "next/image";
import * as motion from "framer-motion/client";

//
export default function Subscribe() {
  return (
    <section className="py-28 bg-background">
      <div className="relative px-10 h-[720px] flex flex-col justify-center items-center">
        <motion.div
          className="absolute w-full h-full blur-sm opacity-30 grayscale bg-cover  bg-[url('/images/clothes.png')]"
          initial={{ x: "0%" }}
          animate={{
            x: "-100%",
            transition: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
        <motion.div
          className="absolute w-full h-full blur-sm opacity-30 grayscale bg-cover bg-[url('/images/clothes.png')]"
          initial={{ x: "100%" }}
          animate={{
            x: "0%",
            transition: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
        <h1 className="z-10 font-bold text-5xl text-center mb-8">
          DESCRUBRE TU ESTILO
        </h1>
        <h1 className="z-10 font-bold text-5xl text-center mb-8">
          A UN BOTÓN DE DISTANCIA
        </h1>
        <form className="z-10 flex flex-col gap-2 w-full max-w-lg">
          <input
            placeholder="email"
            className="p-4 rounded border border-foreground focus:outline-none"
          />
          <button className="p-4 rounded bg-foreground text-background">
            Suscribirse
          </button>
          <p className="text-sm font-light">
            ACCESO INSTANTEO A LAS TENDENCIAS MÁS EXLUSVAS DE NUESTRO SITIO.
            DESCUBRE TU ESTILO EN TAN SOLO UNOS PASOS.
          </p>
        </form>
      </div>
    </section>
  );
}
