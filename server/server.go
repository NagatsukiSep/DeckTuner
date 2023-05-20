package main

import (
	"net/http"

	"server/diff"
	"server/read"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.GET("/read", GetDeck)
	e.GET("/diff", GetDiff)
	e.Logger.Fatal(e.Start(":1323"))
}

func GetDeck(c echo.Context) error {
	deckID := c.FormValue("deckID")
	deck, err := read.Read(deckID)
	if err != nil {
		return err
	}
	return c.JSON(http.StatusOK, deck)
}

func GetDiff(c echo.Context) error {
	ndeckID := c.FormValue("ndeckID")
	odeckID := c.FormValue("odeckID")
	diff, err := diff.Diff(ndeckID, odeckID)
	if err != nil {
		return err
	}
	return c.JSON(http.StatusOK, diff)
}
