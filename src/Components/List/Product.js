import React from 'react'

export default function Product({product,onItemClick}) {
  return (
    <div style={{
        display:"flex",
        margin:"10px",
        marginBottom:"30px",
        border:"1px solid orange",
        justifyContent:"space-around"
    }} onClick={()=>{
      onItemClick(product)
    }}>
        <div style={{
          width:"20%",
          fontSize:"22px"
        }} >
            <h1 >{product.name}</h1>
            <p>{product.description}</p>
            <span>{product.price}$</span>
        </div>
      <img  style={{width:"250px",height:"250px"}} src={product.imageUrl} alt={product.name} />

    </div>
  )
}
