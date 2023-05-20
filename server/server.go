package main

import (
	"net/http"

	"server/read"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.GET("/read", read.Read)
	e.Logger.Fatal(e.Start(":1323"))
}
