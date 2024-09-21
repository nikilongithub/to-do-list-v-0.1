import { useContext } from "react";
import { ToDoStore } from "../Store/to-do-store";
import Item from "./Del-ToDoItem";
const Itemss=( {onDeleteClick} ) => {
   
    
   const {todoItems}= useContext(ToDoStore);
   
    return (
        <div className="items-container">
            {
            todoItems.map(todoItems =>
                 <Item key={todoItems.name}
                 item={todoItems.name} 
            date={todoItems.date} onDeleteClick={onDeleteClick}>

            </Item >)
            }
        </div>
    );
}
export default Itemss;