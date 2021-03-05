import React from 'react';

const ProductList = ({productList=[]}) => {
    
  return (
    <>
    { 
        
        productList.map((products,index) => {
        if (products){
          return (
            <div key={products.nombre}>
              <h1>{products.nombre}</h1>
	    </div>	
    	   )	
    	 } return null
    }) }
    </>
  );
}

export default ProductList

// {results.length > 0 && (
//     <ul className="results">
//         {results.map(movie => (
//             <li key={movie.id}>
//                 <ResultCard movie={movie}/>
//             </li>
//         ))}
//     </ul>