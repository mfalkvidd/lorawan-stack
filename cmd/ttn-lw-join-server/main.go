// Copyright © 2018 The Things Network Foundation, The Things Industries B.V.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// ttn-lw-join-server is the binary that runs the join server of The Things Network Stack for LoRaWAN.
package main

import (
	"fmt"
	"os"

	"github.com/TheThingsNetwork/ttn/cmd/ttn-lw-join-server/commands"
)

func main() {
	if err := commands.Root.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(-1)
	}
}