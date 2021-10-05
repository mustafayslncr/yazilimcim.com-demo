import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

export default function Product(props) {
    const {product}=props

    return (
        <div style={{fontFamily:'sans-serif',border:'1px solid gray',padding:'7px 8px',borderRadius:'10px'}} className="product col-lg-3 m-4 cerceve">
            
            <img src={product.image} alt=""/>
            <div style={{fontSize:'11px',textAlign:'center',textTransform:'uppercase',marginTop:'5px',color:'brown'}}>
            {product.brand}
            </div>
            <div style={{fontSize:'15px',textAlign:'center',fontWeight:'bolder',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontSize:'20px'}}>{product.price} ₺</span>
                <span className="mx-3">{product.yorum} <i class="far fa-comments"></i> (Yorum)</span>
            </div>
            <div className="yan">
               <Link to={`/detail/${product._id}`}> <button className="btn btn-warning mt-2" style={{width:'100%'}}>Detaylar</button></Link>
            </div>

            
            
        </div>
    )
}
