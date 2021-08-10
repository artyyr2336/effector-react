import { Button, Grid } from "@chakra-ui/react"
import * as React from "react"
import { load } from "../store"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
	return (
		<Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
			<ColorModeSwitcher />
			<Button
				onClick={() =>
					load("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json")
				}
			>
				Load
			</Button>
		</Grid>
	)
}

export default TopBar
