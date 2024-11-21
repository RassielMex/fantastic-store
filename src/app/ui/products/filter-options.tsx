"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function FilterOptions({ options }: { options: string[] }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleChange = (option: string) => {
    if (option !== "ALL") {
      params.set("category", option);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ul className="flex gap-2 flex-wrap">
      {options.map((option, index) => {
        return (
          <li key={index}>
            <input
              checked={
                !params.get("category") && option === "ALL"
                  ? true
                  : params.get("category") === option
                  ? true
                  : false
              }
              name="filter"
              value={option}
              id={option}
              type="radio"
              className="hidden peer"
              onChange={() => {
                handleChange(option);
              }}
            />
            <label
              htmlFor={option}
              className="peer-checked:bg-gray-700 rounded p-1 hover:bg-slate-500 text-sm"
            >
              {option.toLocaleUpperCase()}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
