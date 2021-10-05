import React, { useState } from 'react'
import Filter from '../components/Filter'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

export default function Home() {
    const [search,setSearch]=useState('')
    return (
        <div>
            <Navbar  />
            <Filter search={search} setSearch={setSearch}/>
            <Products search={search} setSearch={setSearch}/>
        </div>
    )
}
