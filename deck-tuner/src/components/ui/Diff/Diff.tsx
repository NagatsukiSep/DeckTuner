import React from "react";
import { Card } from "../Card/Card";
import { Comment } from "../Diff/Comment";
import { CommentBox } from "../Box/CommentBox";
import { BasicBox } from "../Box/BasicBox";

interface Props {
  className?: string;
  add: CardProps[];
  sub: CardProps[];
  date: string;
  comment: CommentProps[];
}

interface CardProps {
  name: string;
  image: string;
  amount: number;
}

interface CommentProps {
  content: string;
  date: string;
}

export const Diff = (prop: Props) => {
  return (
    <div className="flex flex-col w-full p-2 items-end">
      <BasicBox className="flex flex-row w-full my-2 p-2">
        <div className="flex flex-col w-1/2">
          {prop.add.map((card) => (
            <div className="text-[#439725]">
              + {card.name} x {card.amount}
            </div>
          ))}
          {prop.sub.map((card) => (
            <div className="text-[#8B0000]">
              - {card.name} x {card.amount}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row w-full m-1">
            <div className="flex flex-row flex-grow justify-start">
              {prop.add.map((card) => (
                <Card
                  className="w-2/5"
                  image={card.image}
                  amount={card.amount}
                  isHalf={true}
                />
              ))}
            </div>
            <img src="/Arrow.svg" alt="arrow" className="w-1/5 mx-1 rotate-180" />
          </div>
          <div className="flex flex-row w-full m-1">
            <img src="/Arrow.svg" alt="arrow" className="w-1/5 mx-1" />
            <div className="flex flex-row flex-grow justify-end">
              {prop.sub.map((card) => (
                <Card
                  className="w-2/5 mx-1"
                  image={card.image}
                  amount={card.amount}
                  isHalf={true}
                />
              ))}
            </div>
          </div>
          <div className="text-right text-xs">
            {prop.date}
          </div>
        </div>
      </BasicBox>
      {prop.comment.map((comment) => (
        <Comment
          className="w-4/5"
          content={comment.content}
          date={comment.date}
        />
      ))}
      <CommentBox className="w-4/5 p-2 mb-1">
        <div className="flex flex-row">
          <input type="text" className="flex-grow" placeholder="コメントを追加" />
          <button className="text-xs bg-green-400 px-2">追加</button>
        </div>
      </CommentBox>
      <BasicBox className="flex flex-row w-full my-2 p-2">
        <input type="text" className="flex-grow" placeholder="新しいデッキコード" />
        <button className="text-xs bg-green-400 px-2">追加</button>

      </BasicBox>
    </div>
  );
};