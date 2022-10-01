import { useContext, useState } from "react"
import { TodoContext } from "../../../context/todo_Context"
import { Button } from "../../Button/Button"
import { Input } from "../../Input/input"

export const RenderStartButton = () => {
    // Context
    const { todo, setTodo } = useContext(TodoContext)

    // State's
    const [startButton, setStartButton] = useState(true)
    const [inputValue, setInputValue] = useState("")


    // Function's
    function handleStartButton() {
        setStartButton(curr => curr = !curr)
    }
    function handleAddTodo() {
        if (inputValue !== "") {
            setTodo(
                [...todo, { text: inputValue, id: todo.length + 1, done: false, edit: false }])
            setStartButton(curr => curr = !curr)
            setInputValue("")
        }
    }
    function handleInputChange(e) {
        setInputValue(e.target.value)
    }


    return (
        <>
            {
                startButton ? <div className='alignStyle'>
                    <Button onClick={() => handleStartButton()} className="addBtnStyle" text={<i className="bi bi-plus-square-dotted"></i>} />
                    <h2 className='CreatStyle'>Create Task</h2> <br /> </div> : <div className='alignStyle'>
                    <Button onClick={() => handleAddTodo()} className="addBtnStyle" text={<i className="bi bi-plus-square"></i>} />
                    <Input type="text" onChange={(e) => handleInputChange(e)} /></div>
            }
        </>
    )
}