package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os/exec"
)

type CloudflareCookieCollection []CloudflareCookie
type CloudflareCookie struct {
	Domain   string `json="domain"`
	Expires  string `json="expires"`
	Expiry   int    `json="expiry"`
	Httponly bool   `json="httponly"`
	Name     string `json="name"`
	Path     string `json="path"`
	Secure   bool   `json="secure"`
	Value    string `json="value"`
}

func main() {
	cookies, err := exec.Command("sh", "-c", "/usr/bin/phantomjs --ssl-protocol=tlsv1 ph.js").Output()

	if err != nil {
		log.Fatal(err)
	}

	cloudflareCookieCollection := &CloudflareCookieCollection{}
	var cloudFlareSession CloudflareCookie

	err = json.Unmarshal(cookies, cloudflareCookieCollection)

	if err != nil {
		fmt.Println(err)
	}

	for _, e := range *cloudflareCookieCollection {
		if e.Name == "__cfduid" {
			cloudFlareSession = e
		}
	}

	fmt.Println(" session is %s: ", cloudFlareSession.Value)
}
