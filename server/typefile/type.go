package typefile

type Card struct {
	CardID   string `json:"card_id"`
	Amount   int    `json:"amount"`
	Name     string `json:"name"`
	Class    string `json:"class"`
	FullName string `json:"full_name"`
	Image    string `json:"image"`
}

type Deck struct {
	DeckID   string `json:"deck_id"`
	DeckName string `json:"deck_name"`
	CardList []Card `json:"card_list"`
}
