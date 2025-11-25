"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ProductRequsetDto, ProductRequsetDtoSchema } from "../types/services";
import { useCreateProduct } from "../queries/useProducts";

type Props = {
  className?: string;
  onSuccess: () => void;
};

export function CreateProductForm({ className, onSuccess }: Props) {
  const { mutateAsync, isPending } = useCreateProduct();

  const form = useForm<ProductRequsetDto>({
    resolver: zodResolver(ProductRequsetDtoSchema),
    defaultValues: {
      title: "",
      desc: "",
      imgUrl: "",
      stock: 1,
      price: 1,
    },
  });

  async function onSubmit(values: ProductRequsetDto) {
    await mutateAsync(values);
    onSuccess();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-4", className)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input placeholder="espresso" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>desc</FormLabel>
              <FormControl>
                <Input placeholder="it is a espresso " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imgUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>img as a url</FormLabel>
              <FormControl>
                <Input placeholder="espressoImgUrl.jpg " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>stock</FormLabel>
              <FormControl>
                <Input
                  placeholder="10"
                  type="number"
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>price</FormLabel>
              <FormControl>
                <Input
                  placeholder="200"
                  type="number"
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          add product
        </Button>
      </form>
    </Form>
  );
}
