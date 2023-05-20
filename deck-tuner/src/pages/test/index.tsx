import React from "react";
import puppeteer from "puppeteer";

interface Card {
  id: number;
  name: string;
  fullName: string;
  image: string;
  amount: number;
}

interface Deck {
  code: string;
  name: string;
  cards: Card[];
}


export default function Test() {
  getCards("y2XpSS-QGzOCO-MySMpX");
  return (
    <div>
      <h1>Test</h1>

    </div>
  );
}

async function getCards(deckCode: string) {
  const url = "https://www.pokemon-card.com/deck/confirm.html/deckID/y2XpSS-QGzOCO-MySMpX";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const title = await page.title();
  console.log('タイトル:', title);
}
