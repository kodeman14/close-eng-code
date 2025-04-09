
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
      <div>
        <label>
          Selected Items: {selected.length || 'N/A' }
        </label>
        {/* simple display separated by comma */}
        {/* <p>
          {selected.join(', ')}
        </p> */}
        <ul className='List__display'>
          {/* displaying items in numbered list */}
          {selected.map((item, idx) => (
            <li key={idx} className='List__item List__item--selected'>
              {idx+1}. {item}
            </li>
          ))}
        </ul>
      </div>
      <hr/>
      <ul className="List">
        {items.map(item => (
          <li
            key={item.name}
            className={`
              List__item List__item--${item.color}
              ${selected.includes(item.name) ? 'List__item--active' : ''}
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