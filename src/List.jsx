

const { Fragment } = React;

const List = ({ items }) => (
  <Fragment>
    <ul className="List">
      {items.map(item => (
        <li key={item.name} className={`List__item List__item--${item.color}`}>
          {item.name}
        </li>
      ))}
    </ul>
  </Fragment>
);