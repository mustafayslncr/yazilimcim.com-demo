import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Product from './Product'
import Loading from './Loading'

export default function Products({search,setSearch}) {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
      try {
          const fetchData=async()=>{
              setLoading(true)
              const {data}=await Axios.get('/api/products')
              setLoading(false)
              setProducts(data)
          }
          fetchData();

      } catch (err) {
          console.log(err)
      }
    },[])
    
    return (
        <div style={{maxWidth:'70%',margin:'auto',marginTop:'15px',display:'flex',justifyContent:'center'}} className="products row">
            {   loading ? <Loading/> :
                products.filter(product=>{
                    if(setSearch==="") {return product}
                    else if(product.brand.toLowerCase().includes(search.toLowerCase())){
                        return product
                    }
                }).map(product=>{
                   return <Product key={product._id} product={product}/>
                }
                   
                )
            }
        </div>
    )
}
