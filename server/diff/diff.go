package diff

import (
	"server/read"
	"server/typefile"
)

func Diff(ndeckID string, odeckID string) (typefile.Diff, error) {

	ndeck, err := read.Read(ndeckID)
	if err != nil {
		return typefile.Diff{}, err
	}

	odeck, err := read.Read(odeckID)
	if err != nil {
		return typefile.Diff{}, err
	}

	diff := typefile.Diff{}

	// when amount changed(the card in both deck)
	for _, ncard := range ndeck.CardList {
		for _, ocard := range odeck.CardList {
			if ncard.CardID == ocard.CardID {
				if ncard.Amount > ocard.Amount {
					tmp := typefile.Card{}
					tmp = ncard
					tmp.Amount = ncard.Amount - ocard.Amount
					diff.Plus = append(diff.Plus, tmp)
				}
				if ncard.Amount < ocard.Amount {
					tmp := typefile.Card{}
					tmp = ocard
					tmp.Amount = ocard.Amount - ncard.Amount
					diff.Minus = append(diff.Minus, tmp)
				}
			}
		}
	}
	// when card added
	for _, ncard := range ndeck.CardList {
		flag := false
		for _, ocard := range odeck.CardList {
			if ncard.CardID == ocard.CardID {
				flag = true
			}
		}
		if !flag {
			diff.Plus = append(diff.Plus, ncard)
		}
	}
	// when card removed
	for _, ocard := range odeck.CardList {
		flag := false
		for _, ncard := range ndeck.CardList {
			if ocard.CardID == ncard.CardID {
				flag = true
			}
		}
		if !flag {
			diff.Minus = append(diff.Minus, ocard)
		}
	}

	return diff, nil

}
