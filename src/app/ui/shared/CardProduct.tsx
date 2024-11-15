import Image from "next/image";

export default function CardProduct() {
  return (
    <div className="">
      <div className="relative h-[378px]">
        <p className="absolute right-0 top-0 z-10 m-4 bg-background opacity-75 p-1">
          Out of stock
        </p>
        <Image alt="Card image" src={"/images/welcome1.jpg"} fill />
      </div>
      <h5>Name</h5>
      <h6>$0.0</h6>
      <p>10 availables</p>
    </div>
  );
}
