
import { useState } from 'react';
import './assets/List.css'

const List = ({ items }) => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (itemName) => {
    if (selected.includes(itemName)) {
      setSelected(selected.filter(item => item !== itemName))
    } else {
      setSelected([...selected, itemName])
    }
  }

  return (
    <>
    <ul className="List">
      {items.map(item => (
          <li
            key={item.name}
            className={`
              List__item List__item--${item.color}
            `}
            onClick={() => handleSelect(item.name)}
          >
          {item.name}
        </li>
      ))}
    </ul>
    </>
);
}

export default List;