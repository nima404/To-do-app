import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../../context/todo_Context"
import { Button } from "../Button/Button"
import { GetDate } from "./GetDate/GetDate"
import { Input } from "../Input/input"
import { RenderStartButton } from "./Render_Start_Button/RenderStartButton"

export function Render_Tasks() {
    // Context
    const { todo, setTodo } = useContext(TodoContext)

    // State
    const [updateValue, setUpdateValue] = useState("")

    // Function's
    function handleCanclEdit(id) {
        let newArray = [...todo]
        let newFindDone = newArray.find(item => item.id === id)
        newFindDone.edit = false
        setTodo([...newArray])
    }

    function handlerDelete(id) {
        const newTodo = todo.filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function handleEditValue(e) {
        setUpdateValue(e.target.value)
    }

    function handlerEdit(id) {
        let newArray = [...todo]
        let newFindDone = newArray.find(item => item.id === id)
        newFindDone.edit = !newFindDone.edit
        setUpdateValue(newFindDone.text)
        setTodo([...newArray])
    }

    function handlerDone(id) {
        let newArray = [...todo]
        let newFindDone = newArray.find(item => item.id === id)
        newFindDone.done = !newFindDone.done
        setTodo([...newArray])
    }

    function handleChangeUpdate(id) {
        let newArray = [...todo]
        let newFindDone = newArray.find(item => item.id === id)
        newFindDone.text = updateValue ? updateValue : "Nothing"
        newFindDone.edit = false
        setTodo([...newArray])
    }

    // UseEffect's
    
    useEffect(() => {
        window.localStorage.setItem("Todo", todo);
    }, [todo])

    return (
        <div className="parent">

            <RenderStartButton />
            {
                todo.length >= 1 ? todo.map((node, index) => {
                    return (
                        <div key={`${node}_${index}`} className="returnParent">

                            <div className='returnBody'>
                                {
                                    node.edit ? <input onChange={(e) => handleEditValue(e)} value={updateValue} className="inputChangeStyle" /> : <div> {node.done ? <s>{node.text}</s> : <p>{node.text}</p>} </div>
                                }

                                {
                                    node.edit ?
                                        <div><Button className="btnStyles" onClick={() => handleChangeUpdate(node.id)} text={<i class="bi bi-check2-square"></i>} />
                                            <Button className="btnStyles" onClick={() => handleCanclEdit(node.id)} text={<i class="bi bi-x-square"></i>} />
                                        </div>
                                        :
                                        <div className='btnParents'>
                                            <Button onClick={() => handlerDelete(node.id)} className="btnStyles" text={<i className="bi bi-trash3-fill"></i>} />
                                            <Button onClick={() => handlerEdit(node.id)} className="btnStyles" text={<i className="bi bi-pencil-fill"></i>} />
                                            {
                                                node.done ? <Button onClick={() => handlerDone(node.id)} className="btnStyles" text={<i className="bi bi-x"></i>} /> : <Button onClick={() => handlerDone(node.id)} className="btnStyles" text={<i className="bi bi-check-lg"></i>} />
                                            }
                                        </div>
                                }
                            </div>

                            <hr className='hrStyles' />

                            <div className='returnFooter'>
                                <p className='footerTag'>{node.done ? "Checked: True" : "Checked: False"}</p>
                                <GetDate />
                            </div>
                        </div>
                    )
                }) : <p className='emptyTaskMassge'>Task It Is Empty, Please Add</p>
            }
        </div>
    )
}