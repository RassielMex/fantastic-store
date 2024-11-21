import React from "react";
import CardSkeleton from "./card-skeleton";

export default function ProductsGridSkeleton({
  itemsCount,
}: {
  itemsCount: number;
}) {
  return (
    <div className="p-8 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: itemsCount }, (v, i) => i).map((v) => {
        return <CardSkeleton key={v} />;
      })}
    </div>
  );
}
