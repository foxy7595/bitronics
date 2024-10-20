import { Img } from "@/components";
import React from "react";

interface ImageItem {
  src: string;
  title: string;
  description?: string;
}

interface ImagesProps {
  images?: ImageItem[];
  grid?: boolean;
}

const Images: React.FC<ImagesProps> = ({ images = [], grid = false }) => {
  if (images.length === 0) return null;

  return (
    <div
      className={`${grid
        ? "grid grid-cols-3 gap-[5vw] mx-[200px] lg:mx-[100px] md:mx-6 sm:!mx-4"
        : "flex lg:gap-[4vw] gap-[5vw] sm:gap-[3vw] mx-[100px] md:mx-6 sm:mx-4 "
        } flex-wrap  sm:mt-8   justify-center mt-[80px] `}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-6 sm:gap-2 min-w-[150px] md:min-w-[120px]  sm:min-w-[100px] md:p-0 sm:p-0 p-4 rounded-lg"
        >
          <Img
            src={image.src}
            alt={image.title}
            width={100}
            height={100}
            className="object-contain sm:w-[80px] sm:h-[80px] md:w-[80px] md:h-[80px]"
          />
          <pre className="text-center text-base font-bold sm:text-[10px] md:text-[10px]">
            {image.title}
          </pre>
          {image.description && (
            <div className="text-center text-[14px] sm:text-[10px] md:text-[10px]">
              {image.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Images;
