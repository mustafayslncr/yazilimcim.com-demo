import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from "../constants/cardConstants";

export const cardReducer = (state={cardItems:[]},action)=>{
    switch (action.type) {
       case CARD_ADD_ITEM:
           const item = action.payload
           const existItem = state.cardItems.find(x=>x.id === item.id)
           if(existItem){
                return {
                    ...state,
                    cardItems:state.cardItems.map(x=>x.id=== existItem.id ? item : x)
                }
           }else {
               return {
                 ...state,cardItems:[...state.cardItems,item]  
               }
           }

           case CARD_REMOVE_ITEM:
               return {
                   ...state,cardItems:state.cardItems.filter(x => x.id !== action.payload)
               }
    
        default:
            return state;
    }
}

