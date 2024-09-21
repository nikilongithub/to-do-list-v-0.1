import { useReducer } from "react";
import Todo from "./Componets/add-todo";
import AppName from "./Componets/appname";
import Itemss from "./Componets/TODOitems";
import "./style.css";    
import Welcome from "./Componets/Welcome";             
import { ToDoStore } from "./Store/to-do-store";

const Items_Reducer=(currentValue, action)=>{
    let newTODoitems=currentValue;
    if (action.type==="NEW_ITEM") {
      newTODoitems=[
          ...currentValue , {name: action.payload.itemname, date: action.payload.duedate},
    
        ];

    }else if(action.type==='DELETE_ITEM'){
      newTODoitems =  currentValue.filter((item)=>item.name!==action.payload.itemname);
    }
    return newTODoitems;
}
function App(){
  // const InitialTodoItems=[];

const [todoItems, dispatchTodoItems]=useReducer(Items_Reducer, []);

const addNew=(itemname, duedate)=>{
  const newItemAction={
    type: 'NEW_ITEM',
    payload:{
      itemname,
      duedate,
    }
    
  }
    dispatchTodoItems(newItemAction);
  };


const Deletee=(todoItemsNamee)=>{
  const deletItemAction={
      type:'DELETE_ITEM',
      payload:{
        itemname: todoItemsNamee,
      },
  }
    dispatchTodoItems(deletItemAction);
}
  return (
    <ToDoStore.Provider value={{
      todoItems,
      addNew,
      Deletee,
      }}>
  
  <center className='todo-container'>
    <AppName />   

    <Todo/>
    <Welcome></Welcome>

    <Itemss/>
    
    
  </center>
  </ToDoStore.Provider>
  );
}
export default App;