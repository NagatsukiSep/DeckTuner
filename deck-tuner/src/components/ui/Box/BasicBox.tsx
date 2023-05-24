import React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const BasicBox = (props: Props) => {
  return (
    <div className={clsx("border-t-4 border-gray-700 shadow-md bg-gray-100", props.className)}>
      {props.children}
    </div>
  );
};