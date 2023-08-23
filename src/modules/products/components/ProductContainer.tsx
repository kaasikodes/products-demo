import { useState } from "react";
import { AddProduct } from "./AddProduct";
import { ProductTable } from "./ProductTable";
import { Button } from "antd";

export const ProductContainer = () => {
  const [comp, setComp] = useState<"add-product">();

  return (
    <>
      <AddProduct
        open={comp === "add-product"}
        handleClose={() => setComp(undefined)}
      />{" "}
      <div className="flex flex-col gap-6">
        <div className="flex justify-end">
          <Button onClick={() => setComp("add-product")} type="dashed">
            Add Product
          </Button>
        </div>
        <ProductTable />
      </div>
    </>
  );
};
