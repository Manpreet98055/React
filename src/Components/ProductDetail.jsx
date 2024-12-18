import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import { useEffect } from 'react'
const ProductDetail = () => {
  const { id } = useParams()

  const [product, setproduct] = useState({})

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id)
    // console.log(filterProduct)
    setproduct(filterProduct[0])
  }, [id])


  return (
    <>
      <div className="container">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <h1 className="card-title">{product.title}</h1>
        <p className="card-text">{product.description}</p>
        <button className='btn btn-primary mx-3'>{product.price}{" "}₹</button>
        <button className='btn btn-warning'>Add to cart</button>
      </div>
    </>
  )
}

export default ProductDetail