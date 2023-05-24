import React from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CommentBox = (props: Props) => {
  return (
    <div className={clsx("bg-gray-200 border-l-8 border-gray-700", props.className)}>
      {props.children}
    </div>
  );
};