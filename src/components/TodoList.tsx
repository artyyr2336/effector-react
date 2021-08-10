import { Button, Checkbox, Flex, Heading, Input } from "@chakra-ui/react"
import { useStore } from "effector-react"
import * as React from "react"
import $store, { deleteEvent } from "../store"

function TodoListItems() {
	const store = useStore($store)
	return (
		<>
			{store.todos.map((todo: { id: number; text: string }) => (
				<Flex pt={2} key={todo.id}>
					<Checkbox />
					<Input mx={2} value={todo.text} />
					<Button onClick={() => deleteEvent(todo.id)}>Delete</Button>
				</Flex>
			))}
		</>
	)
}

function TodoList() {
	return (
		<>
			<Heading>Todo List</Heading>123
			<TodoListItems />
		</>
	)
}

export default TodoList
