import { CreateProductSheet } from "@/features/products/components/createProductSheet";
import ProductsTable from "@/features/products/components/products/productsTable";

export default function Page() {
  return (
    <div className="mt-16 ">
      <h1 className="mb-8">Product managment</h1>
      <CreateProductSheet className="mb-6" />
      <ProductsTable />
    </div>
  );
}
