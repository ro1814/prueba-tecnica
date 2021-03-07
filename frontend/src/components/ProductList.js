import React from 'react';

const ProductList = ({productList=[]}) => {
  return (

    <>
    {productList.length < 10 && (
      <ul className="products">
          {productList.map(products => (
              
              <li className="btn btn-info"key={products.nombre}>
                  <p>Producto: {products.nombre}</p>
                  <p>Relevancia: {products.relevancia}</p>
                  <p>Precio:{products.precio}</p>
                  <p>Fabricante: {products.fab.nombre}</p>
              </li>
          
          ))}
      </ul>
      
  )}
  </>
    
  );
}

export default ProductList