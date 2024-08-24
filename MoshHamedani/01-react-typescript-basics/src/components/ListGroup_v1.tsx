import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   items = [];

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };

  // Event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>

      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            // className="list-group-item active"
            // onClick={() => console.log(`${index} ${item}`)}
            // onClick={(event) => console.log(event)}
            // onClick={handleClick}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
