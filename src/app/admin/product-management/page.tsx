import CreateProduct from "@/features/products/components/form/createProduct";
import ProductsTable from "@/features/products/components/table/productsTable";

export default function Page() {
  return (
    <div className="mt-16  ">
      <h1 className="mb-8">Product managment</h1>
      <CreateProduct className="mb-6" />
      <ProductsTable />
    </div>
  );
}
