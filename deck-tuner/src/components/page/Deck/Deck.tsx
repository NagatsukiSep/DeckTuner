import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Diff } from "@/components/ui/Diff/Diff";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Deck = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="flex h-full w-full flex-col items-center p-2">
      <h1 className="text-4xl font-bold">DeckName</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className="w-full"
      >
        <Tab value={0} label="カードリスト" />
        <Tab value={1} label="調整ログ" />
        <Tab value={2} label="メモ" />
      </Tabs>
      <TabPanel value={value} index={0}>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src="https://www.pokemon-card.com/deck/deckView.php/deckID/22Xypy-z0r9Mv-yypUpX.png" alt="Deck" className="w-full p-2" />
        <div className="text-xl text-end w-full px-2">22Xypy-z0r9Mv-yypUpX</div>
        <div className="flex flex-col w-full p-2">
          <Diff
            className="w-full"
            add={[
              {
                name: "ガチグマV",
                image: "https://www.pokemon-card.com/assets/images/card_images/large/S-P/041517_P_GACHIGUMAV.jpg",
                amount: 1,
              },
              {
                name: "ガチグマV",
                image: "https://www.pokemon-card.com/assets/images/card_images/large/S-P/041517_P_GACHIGUMAV.jpg",
                amount: 1,
              },
            ]}
            sub={[
              {
                name: "ガチグマV",
                image: "https://www.pokemon-card.com/assets/images/card_images/large/S-P/041517_P_GACHIGUMAV.jpg",
                amount: 2,
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
      </TabPanel>
    </div>
  );
};