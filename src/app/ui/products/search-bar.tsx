"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const ref = useRef<HTMLInputElement>(null);
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);

    if (ref.current?.value) {
      params.set("search", ref.current.value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      ref={ref}
      placeholder="Búscar..."
      className="px-2 py-3 mb-4 w-full"
      onChange={handleChange}
    />
  );
}
