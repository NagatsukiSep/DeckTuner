import React from "react";
import { Card } from "../Card/Card";

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
    <div className="flex flex-col w-full m-2 p-2 items-end">
      <div className="flex flex-row w-full my-2 bg-gray-300 p-2">
        <div className="flex flex-col w-1/2">
          {prop.add.map((card) => (
            <div>
              + {card.name} x {card.amount}
            </div>
          ))}
          {prop.sub.map((card) => (
            <div>
              - {card.name} x {card.amount}
            </div>
          ))}
          <div className="">
            {prop.date}
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-row justify-start m-1">
            {prop.add.map((card) => (
              <Card
                className="w-1/3 mx-1"
                image={card.image}
                amount={card.amount}
                isHalf={true}
              />
            ))}
            ⤵
          </div>
          <div className="flex flex-row justify-end m-1">
            ➡
            {prop.sub.map((card) => (
              <Card
                className="w-1/3 mx-1"
                image={card.image}
                amount={card.amount}
                isHalf={true}
              />
            ))}
          </div>
        </div>
      </div>
      {prop.comment.map((comment) => (
        <div className="w-4/5 bg-gray-300 p-2 mb-1">
          {comment.content}<br />
          {comment.date}
        </div>
      ))}

    </div>
  );
};