import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { ToDoStore } from "../Store/to-do-store";

function Item({ item, date }) {
  const { Deletee } = useContext(ToDoStore); // Use the Deletee function from context

  const handleDeleteClick = () => {
    Deletee(item); // Call Deletee from context and pass the item name
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{item}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteClick} // Handle delete with context function
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
