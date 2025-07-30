import { getProducts } from "@/prisma-db";
import React from "react";
const ProductsDbPage = async () => {
  const products = await getProducts();
  console.log({ products });

  return (
    <React.Fragment>
      <main></main>
    </React.Fragment>
  );
};

export default ProductsDbPage;
