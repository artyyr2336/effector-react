import { Button, Grid, Input } from "@chakra-ui/react"
import { useStore } from "effector-react"
import * as React from "react"
import $store, { addTodo, setNewTodo } from "../store"

function TodoAdd() {
	const store = useStore($store)

	return (
		<Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
			<Input
				placeholder="New todo"
				value={store.newTodo}
				onChange={e => setNewTodo(e.target.value)}
			/>
			<Button onClick={() => addTodo()}>Add Todo</Button>
		</Grid>
	)
}

export default TodoAdd
