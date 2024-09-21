import { useContext } from "react";
import { ToDoStore } from "../Store/to-do-store";

const Welcome=()=>{
    const {todoItems}= useContext(ToDoStore);

    return todoItems.length===0 && <h1>Welcome!<br></br> Let's do something productive today...!</h1>
}
export default Welcome;