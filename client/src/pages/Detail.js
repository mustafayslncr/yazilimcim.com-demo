import React from 'react'
import Detailss from '../components/Detailss'
import Navbar from '../components/Navbar'
import data from '../data'

export default function Detail(props) {
const product=data.products.find(prd=>prd._id === props.match.params.id)
    return (
        <>
        <Navbar/>
        <div style={{backgroundColor:'#c0c0c0',height:'850px'}}>
           <Detailss product={product}/>
        </div>
        </>
    )
}
