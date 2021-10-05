import axios from "axios"
import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from "../constants/cardConstants"

export const addToCard = (productId) => async(dispatch)=>{
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch({
        type:CARD_ADD_ITEM,
        payload:{
            brand:data.brand,
            image:data.image,
            price:data.price,
            id:data._id
        }
    })
}

export const removeFromCard = (productId) => async(dispatch)=>{
    dispatch({
        type:CARD_REMOVE_ITEM,
        payload: productId
    })
}