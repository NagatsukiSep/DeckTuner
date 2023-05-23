import React from "react";
import { Card } from "@/components/ui/Card/Card";
import { Diff } from "@/components/ui/Diff/Diff";

export const Deck = () => {
  return (
    <div className="flex h-full w-full flex-col items-center p-2">
      <h1 className="text-4xl font-bold">DeckName</h1>
      <img src="https://www.pokemon-card.com/deck/deckView.php/deckID/22Xypy-z0r9Mv-yypUpX.png" alt="Deck" className="w-full m-2 p-2" />
      <div className="text-xl text-end w-full px-2">22Xypy-z0r9Mv-yypUpX</div>
      <div className="flex flex-col w-full m-2 p-2">
        <Diff
          className="w-full"
          add={[
            {
              name: "hoge",
              image: "https://www.pokemon-card.com/assets/images/card_images/large/S-P/041517_P_GACHIGUMAV.jpg",
              amount: 1,
            },
            {
              name: "fuga",
              image: "https://www.pokemon-card.com/assets/images/card_images/large/S-P/041517_P_GACHIGUMAV.jpg",
              amount: 1,
            },
          ]}
          sub={[
            {
              name: "piyo",
              image: "https://www.pokemon-card.com/assets/images/card_images/large/S-P/041517_P_GACHIGUMAV.jpg",
              amount: 1,
            },
          ]}
          date="2021-10-10"
          comment={[
            {
              content: "調整理由調整理由",
              date: "2021-10-10",
            },
            {
              content: "コメントコメント",
              date: "2021-10-10",
            },
          ]}
        />
      </div>

    </div>
  );
};