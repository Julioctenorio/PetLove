"use client";

import Navbar from "@/components/Navbar";
// import Search from "@/components/Search";
import Link from "next/link";
import { useState, useEffect } from "react";
import IProduct from "../types/products";
// import ProductPage from "@/components/ProductPage";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

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
    <div className="flex flex-col">
      <Navbar />
      <h1 className="pt-20">Página - Productos</h1>
      <div className="flex flex-wrap gap-5 ">
        {products.map((e) => (
          <Link key={e._id} href={`/product/${e._id}`}>
            <ProductCard Product={e} />
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
