import Image from "next/image";

export default function Welcome() {
  return (
    <section className="py-6 h-screen">
      <p className="font-normal text-xs text-center mb-4">Bienvenido a</p>
      <h1 className="font-bold text-5xl text-center mb-4">FANTASTIC STORE</h1>
      <div className="h-3/4 flex justify-center gap-4 overflow-hidden">
        <CardImage src="/images/welcome1.jpg" />
        <CardImage src="/images/welcome2.jpg" />
        <CardImage src="/images/welcome3.jpg" />
        <CardImage src="/images/welcome4.jpg" />
      </div>
    </section>
  );
}

const CardImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-full min-w-[426px]">
      <Image src={src} alt="Card image" fill className="rounded-md" />
    </div>
  );
};
