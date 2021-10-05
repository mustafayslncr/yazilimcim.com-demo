import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCard, removeFromCard } from '../actions/cardActions'
import Navbar from '../components/Navbar'
import './Card.css'

export default function Card(props) {
    const productId=props.match.params.id
    console.log('yslncr',props)
    const card = useSelector(state=>state.card)
    const {cardItems} = card

    const dispatch = useDispatch()
    useEffect(()=>{
        if(productId){
         dispatch(addToCard(productId))
        }
    },[productId])

     const removeFromCardHandler = (id) => {
        dispatch(removeFromCard(id))
     }

     

    return (
        <div>
            <Navbar />
            {cardItems.length === 0 ? 
            (
            <span className="text_sepet">
             <span className="sepet_yazi"> Sepetinizde Ürün Bulunmamaktadır.</span>  <img src="https://st.depositphotos.com/1001911/4372/v/950/depositphotos_43725677-stock-illustration-wiping-tear-emoticon.jpg" alt="" />
            </span> ) : (cardItems.map(item=>(
                <div key={item.id} className="card_kapsa">
              
            
    
                <img src={item.image} alt="resim"/>
                <div className="card_yazi">
                    <span>{item.brand}</span> 
                    <strong>{item.price} ₺</strong>
                    <span>Kurs Sahibi: Mustafa YEŞİLNACAR</span>
                </div>
                <div className="buton_alt">
                <button onClick={()=>removeFromCardHandler(item.id)}><i class="fas fa-trash-alt text-danger"></i></button>
                <button><i class="fab fa-cc-visa text-success"></i></button>
                </div>
                   
                    
            </div>
            
            ))) }
        </div>
    )
}
