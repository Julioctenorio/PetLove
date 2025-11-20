"use client";

import Navbar from "@/components/Navbar";
import IProduct from "../../types/products";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Product() {
  const [products, setProducts] = useState<IProduct>();
  const currPathname = usePathname();
  const id = currPathname.split("/");
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://pet-shop-api.runcodeschool.com/api/product/${id[id.length - 1]}`
      );
      const data: IProduct = await response.json();
      setProducts(data);
    };
    fetchData();
  });

  return (
    <>
    <div className="flex">
      <button className="pl-2 pr-10 cursor-pointer" onClick={() => router.back()}>{'<'}</button>
      <h1 className="">{products?.name}</h1>
    </div>
      {products?.images && (
        <img
          src='/images/bg-dog.jpg'
          alt={products.name || "Product image"}
          width={300}
          height={300}
        />
      )}
      <div></div>
      <div>
      {products?.description}
      </div>
    </>
  );
}
