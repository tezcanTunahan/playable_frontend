import { CreateProductSheet } from "@/features/products/components/createProductSheet";
import Products from "@/features/products/components/products";

export default function Page() {
  return (
    <div className="mt-16 ">
      <h1 className="mb-8">Product managment</h1>
      <CreateProductSheet className="mb-6" />
      <Products />
    </div>
  );
}
