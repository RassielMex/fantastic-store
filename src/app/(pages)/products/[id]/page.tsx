import Image from "next/image";

export default function ProductIdPage() {
  return (
    <div className="pt-20 px-2 container mx-auto flex">
      <div className="relative ml-2 mr-2 mb-8 lg:mr-16 w-1/2 min-h-52 lg:min-h-96">
        <Image src="/images/welcome1.jpg " alt="Product image" fill />
      </div>
      <div className="w-1/2">
        <h1 className="font-bold text-5xl mb-4">Jeans</h1>
        <hr className="my-6" />
        <h4 className="font-thin text-2xl">$50</h4>
        <hr />
        <p>Escoge tu talla</p>
        <hr className="my-6" />
        <p>Descriptions</p>
        <hr className="my-6" />
        <button className="w-full p-3 bg-foreground text-background">
          Comprar ahora
        </button>
      </div>
    </div>
  );
}
