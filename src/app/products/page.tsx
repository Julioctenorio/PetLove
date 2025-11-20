"use client";

import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Link from "next/link";
import { useState, useEffect } from "react";
import IProduct from "../types/products";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://pet-shop-api.runcodeschool.com/api/product"
      );
      const data: IProduct[] = await response.json();
      setProducts(data);
    };
    fetchData();
  });

  return (
    <>
      <Navbar />
      <h1 className="pt-20">Página - Productos</h1>
      {products.map((e) => (
        <Link key={e._id} href={`/product/${e._id}`}>
          {e.name}
        </Link>
      ))}
    </>
  );
}
