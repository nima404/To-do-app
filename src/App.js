import { type } from '@testing-library/user-event/dist/type';
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { Input } from './components/Input/input';
import { useTime } from './hooks/useTime/useTime';
import { actionTypes } from './reducers/actionTypes';
import { reducer } from './reducers/reucer';

function App() {



  // const [addBtn, setAddBtn] = useState(true)

  // const [inputValue, setInputValue] = useState("")

  // const [todo, setTodo] = useState([])
  // console.log("Todo: ", todo);

  // const [updateValue, setUpdateValue] = useState("")

  // let orgDateess = {
  //   date: GetDateTodo()
  // }

  // function inputChange(e) {
  //   setInputValue(e.target.value)
  // }

  // function addToTodo() {
  //   if (inputValue !== "") {
  //     setTodo(
  //       [...todo, { text: inputValue, id: todo.length + 1, done: false, edit: false }])
  //     setAddBtn(curr => curr = !curr)
  //     setInputValue("")
  //   }
  // }

  // function handlerDelete(id) {
  //   const newTodo = todo.filter(item => item.id !== id)
  //   setTodo(newTodo)
  // }

  // function editVAl(e) {
  //   setUpdateValue(e.target.value)
  //   console.log("inputValue: ", inputValue);

  // }

  // function handlerEdit(id) {
  //   let newArray = [...todo]
  //   let newFindDone = newArray.find(item => item.id === id)
  //   newFindDone.edit = !newFindDone.edit
  //   setUpdateValue(newFindDone.text)
  //   setTodo([...newArray])
  // }

  // function gotoAdd() {
  //   setAddBtn(curr => curr = !curr)
  // }

  // function handlerDone(id) {
  //   let newArray = [...todo]
  //   let newFindDone = newArray.find(item => item.id === id)
  //   newFindDone.done = !newFindDone.done
  //   setTodo([...newArray])
  // }

  // function canclEdit(id) {
  //   let newArray = [...todo]
  //   let newFindDone = newArray.find(item => item.id === id)
  //   newFindDone.edit = false
  //   setTodo([...newArray])
  // }

  // function changeUpdate(id) {
  //   let newArray = [...todo]
  //   let newFindDone = newArray.find(item => item.id === id)
  //   newFindDone.text = updateValue ? updateValue : "Nothing"
  //   newFindDone.edit = false
  //   setTodo([...newArray])
  // }

  // function GetDateTodo() {
  //   const date = new Date();
  //   const year = date.getFullYear();
  //   const month = date.getMonth() + 1;
  //   const day = date.getDate();
  //   const hour = date.getHours();
  //   const minute = date.getMinutes();
  //   const withSlashes = [year, month, day].join('/');
  //   const time = [hour, minute].join(":")
  //   const mached = [withSlashes, time].join("__")
  //   return mached
  // }


  // useEffect(() => {
  //   window.localStorage.setItem("Todo", todo);
  // }, [todo])

  const [value, setValue] = useState("")

  const valueName = (e) => {
    setValue(e.target.value)
  }

  const initialValue = {
    userName: []
  }

  const [state, dispacth] = useReducer(reducer, initialValue)


  return (
    <div className='parent'>

      <input onChange={(e) => valueName(e)} value={value} />

      <button onClick={() => dispacth({
        type: actionTypes.add, payload: {
          name: value
        }
      })}>ADD</button>
      {
        console.log("value: ", state.userName)
      }

      {/* {
        addBtn ? <div className='alignStyle'> <button onClick={() => gotoAdd()} className="addBtnStyle"><i className="bi bi-plus-square-dotted"></i></button> <h2 className='CreatStyle'>Create Task</h2> </div> : <div className='alignStyle'><button onClick={() => addToTodo()} className="addBtnStyle"><i className="bi bi-plus-square"></i></button> <Input type="text" onChange={(e) => inputChange(e)} /></div>
      }

      {
        todo.map((node, index) => {
          return (
            <div key={`${node}_${index}`} className="returnParent">

              <div className='returnBody'>

                {
                  node.edit ? <input onChange={(e) => editVAl(e)} value={updateValue} className="inputChangeStyle" /> : <div> {node.done ? <s>{node.text}</s> : <p>{node.text}</p>} </div>
                }

                {
                  node.edit ? <div><button className="btnStyles" onClick={() => changeUpdate(node.id)}><i class="bi bi-check2-square"></i></button><button className="btnStyles" onClick={() => canclEdit(node.id)}><i class="bi bi-x-square"></i></button></div> : <div className='btnParents'>
                    <button onClick={() => handlerDelete(node.id)} className="btnStyles"><i className="bi bi-trash3-fill"></i></button>
                    <button onClick={() => handlerEdit(node.id)} className="btnStyles"><i className="bi bi-pencil-fill"></i></button>
                    {
                      node.done ? <button onClick={() => handlerDone(node.id)} className="btnStyles"><i className="bi bi-x"></i></button> : <button onClick={() => handlerDone(node.id)} className="btnStyles"><i className="bi bi-check-lg"></i></button>
                    }
                  </div>
                }
              </div>

              <hr className='hrStyles' />

              <div className='returnFooter'>
                <p className='footerTag'>{node.done ? "Checked: True" : "Checked: False"}</p>
                <p className='footerTag'>Date: {orgDateess.date}</p>
              </div>

            </div>
          )
        })
      }


 */}




    </div>
  );
}

export default App;
