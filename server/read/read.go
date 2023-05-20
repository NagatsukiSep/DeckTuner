package read

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"regexp"
	"strconv"

	"server/typefile"
)

func Read(code string) (typefile.Deck, error) {
	url := "https://www.pokemon-card.com/deck/confirm.html/deckID/" + code

	class := []string{"pke", "gds", "sup", "sta", "ene"}

	deck := typefile.Deck{}

	deck.DeckID = code

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Println(err)
		return deck, err
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return deck, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return deck, err
	}

	for _, c := range class {
		cpattern := `id="deck_` + c + `" value="(.*?)"`
		re, err := regexp.Compile(cpattern)
		if err != nil {
			fmt.Println(err)
			return deck, err
		}
		matches := re.FindAllStringSubmatch(string(body), -1)
		match := matches[0][1]

		pattern := `(\d{5})_(\d)`

		re, err = regexp.Compile(pattern)
		if err != nil {
			fmt.Println(err)
			return deck, err
		}
		matches = re.FindAllStringSubmatch(match, -1)

		for _, match := range matches {
			amount, err := strconv.Atoi(match[2])
			if err != nil {
				fmt.Println(err)
				return deck, err
			}
			deck.CardList = append(deck.CardList, typefile.Card{CardID: match[1], Amount: amount, Class: c})
		}
	}

	dpattern := `PCGDECK\.searchItemName\[(\d{5})\]='(.*?)';[\s\S]*?
PCGDECK\.searchItemNameAlt\[(\d{5})\]='(.*?)';[\s\S]*?
PCGDECK\.searchItemCardPict\[(\d{5})\]='(.*?)';`

	re, err := regexp.Compile(dpattern)
	if err != nil {
		fmt.Println(err)
		return deck, err
	}
	matches := re.FindAllStringSubmatch(string(body), -1)

	for _, match := range matches {
		id := match[1]
		name := match[4]
		fname := match[2]
		image := match[6]
		for i, card := range deck.CardList {
			if card.CardID == id {
				deck.CardList[i].Name = name
				deck.CardList[i].FullName = fname
				deck.CardList[i].Image = image
			}
		}
	}

	return deck, nil
}
