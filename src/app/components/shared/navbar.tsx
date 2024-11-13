import { List, SunDim } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 z-10 hover:bg-background">
      <div className="container mx-auto p-6 flex justify-between">
        <List size={24} />
        <h1 className="font-semibold text-lg">FANTASTIC STORE</h1>
        <SunDim size={24} />
      </div>
    </div>
  );
}
