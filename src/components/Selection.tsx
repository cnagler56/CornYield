import { useState } from "react";

function Selection() {
  let items = [
    "Iowa",
    "Illinois",
    "Minnesota",
    "Nebraska",
    "Indiana",
    "Wisconsin",
    "Ohio",
    "South Dakota",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 ? <p>There are no items</p> : null;

  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List Group</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Selection;
