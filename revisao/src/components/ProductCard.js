import React from 'react';

const ProductCard  = ({titulo, imagem, alt, preco}) => {
    return(
        <div className='card'>
            <h2 className='titulo'>{titulo}</h2>
            <img className='imagem' src={imagem} alt={alt}/>
            <h3>{preco}</h3>
        </div>
    )
}

export default ProductCard ;