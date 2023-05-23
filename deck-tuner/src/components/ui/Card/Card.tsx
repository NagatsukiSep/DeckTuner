import React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  image: string;
  name?: string;
  amount: number;
  isHalf?: boolean;
}

export const Card = (props: Props) => {
  return (
    <div className={clsx(
      "relative",
      props.className,
      props.isHalf && "aspect-[63/44] overflow-hidden rounded-2xl"
    )}>
      <img src={props.image} alt={props.name} className="w-full" />
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="bg-white text-xl text-center px-3 rounded-xl">
          {props.amount}
        </div>
      </div>
    </div>
  );
};