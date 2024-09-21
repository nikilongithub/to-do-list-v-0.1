import { useState, useRef, useContext } from "react";
import { ToDoStore } from "../Store/to-do-store";

function Todo() {
  const { addNew, todoItems } = useContext(ToDoStore); // Destructure todoItems from context

  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef(null);
  const dateRef = useRef(null);

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    const naam = nameRef.current.value;
    const tareekh = dateRef.current.value;

   

    // Check if the item is already added
    const if_item_already_added = todoItems.some(
      (item) => item.name === naam && item.date === tareekh
    );

    if (if_item_already_added) {
      setErrorMessage("This item has already been added, please try adding a new item.");
    } else {
      addNew(naam, tareekh); // Add the new item
      nameRef.current.value = ""; // Clear input fields
      dateRef.current.value = "";
      setErrorMessage(""); // Clear error message
    }
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter to-do here"
            ref={nameRef}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="dd/mm/yy"
            ref={dateRef}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success">Add</button>
        </div>
      </form>

      {/* Display error message if the item already exists */}
      {errorMessage && (
        <div className="row mt-3">
          <div className="col-12">
            <p className="text-danger">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
