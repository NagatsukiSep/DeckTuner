import clsx from "clsx";
import React from "react";
import { CommentBox } from "../Box/CommentBox";

interface Props {
  className?: string;
  content: string;
  date: string;
}

export const Comment = (props: Props) => {
  return (
    <CommentBox className={clsx("mb-1 p-2", props.className)}>
      <div className="">
        {props.content}
      </div>
      <div className="text-right text-xs">
        {props.date}
      </div>
    </CommentBox>
  );
};