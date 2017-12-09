import React from 'react';

const CataloguePage = (props) => {
  return (
    <div>
      {props.products ? 
        props.products.map((product, idx) => <li key="idx">{product.name}</li>) : <h1>Loading</h1>}
    </div>
  )
}

export default CataloguePage;