
import { useState } from 'react';
import './assets/List.css'

const List = ({ items }) => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (ev) => {
    console.log('ev', ev)
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
            onClick={handleSelect}
          >
          {item.name}
        </li>
      ))}
    </ul>
    </>
);
}

export default List;