import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { addToCard } from '../actions/cardActions'
import  './Detailss.css'

export default function Detailss(props) {
    const {product}=props
    
    
    const history = useHistory()
    const addToCardd = ()=>{
      history.push(`/card/${product._id}`)
    }
    return (
        <div className="detailss">
            <div>
                <img src={product.image} alt=""/>
            </div>
            <div className="duz mb-3">
                <span style={{fontSize:'25px',fontWeight:'bolder',marginTop:'10px'}}>{product.brand}</span>
                <span style={{fontSize:'15px',fontWeight:'bolder',marginTop:'10px'}}>Mustafa YEŞİLNACAR</span>
                <span style={{fontSize:'30px',fontWeight:'bolder',marginTop:'10px'}}>{product.price} ₺</span>
            </div>
            <div style={{maxWidth:'620px',margin:'auto',textAlign:'left',marginBottom:'10px'}} className="duz">
                <span><i class="fas fa-check"></i> {product.icerikbir}</span>
                <span><i class="fas fa-check"></i> {product.icerikiki}</span>
                <span><i class="fas fa-check"></i> {product.icerikuc}</span>
                <span> <i class="fas fa-check"></i> {product.icerikdort}</span>
                <span><i class="fas fa-check"></i> {product.icerikbes}</span>
                <span><i class="fas fa-check"></i> {product.icerikalti}</span>
            </div>
            <hr style={{width:'600px',margin:'auto'}}/>
            <div style={{maxWidth:'620px',margin:'auto',textAlign:'left',marginTop:'10px'}} className="duz">
                <span><i class="fas fa-check"></i> {product.icindekilerbir}</span>
                <span><i class="fas fa-check"></i> {product.icindekileriki}</span>
                <span><i class="fas fa-check"></i> {product.icindekileruc}</span>
                <span> <i class="fas fa-check"></i> {product.icindekilerdort}</span>
                <span><i class="fas fa-check"></i> {product.icindekilerbes}</span>
            </div>
            <div className="mt-3">
               <Link to="/"> <button style={{width:'250px',marginRight:'5px'}} className="btn btn-dark ">Anasayfa</button></Link>
                <button onClick={addToCardd} style={{width:'250px',marginLeft:'5px'}} className="btn btn-light"><i class="fas fa-shopping-basket"></i> Sepete Ekle</button>
            </div>
        </div>
    )
}
