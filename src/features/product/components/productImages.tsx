/* eslint-disable @next/next/no-img-element */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductRequsetDto } from "@/features/products/types/services";

type Props = {
  className?: string;
  data: ProductRequsetDto;
};

export default function ProductImages({ className, data }: Props) {
  return (
    <Carousel className={className}>
      <CarouselContent>
        <CarouselItem>
          <img
            src={data.imgUrl}
            className="w-full"
            alt={data.title + " image"}
            width={200}
            height={100}
            onError={(e) =>
              (e.currentTarget.src =
                "https://dukkan.marmaracizgi.com.tr/rick-and-morty-sayi-39-rick-and-morty-marmara-cizgi-904-45-B.jpg")
            }
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={data.imgUrl}
            className="w-full"
            alt={data.title + " image"}
            width={200}
            height={100}
            onError={(e) =>
              (e.currentTarget.src =
                "https://dukkan.marmaracizgi.com.tr/rick-and-morty-sayi-39-rick-and-morty-marmara-cizgi-904-45-B.jpg")
            }
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={data.imgUrl}
            className="w-full"
            alt={data.title + " image"}
            width={200}
            height={100}
            onError={(e) =>
              (e.currentTarget.src =
                "https://dukkan.marmaracizgi.com.tr/rick-and-morty-sayi-39-rick-and-morty-marmara-cizgi-904-45-B.jpg")
            }
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
