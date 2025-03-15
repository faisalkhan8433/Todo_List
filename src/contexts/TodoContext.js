import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{}

})



export const useTodo = () =>{          // useTodo k ander useContext h uske pass TodoContext h to wo sara TodoContext k ander se sara filter krke nikal lungaa
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider