import React from 'react'

const Item = (props) => {
  return (
    <tr style={{ color: props.isIncome ? 'green' : 'tomato' }}>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.amount}</td>
    </tr>
  );
}

export default Item;
