import React from 'react'
import './Filter.css'

export default function Filter({search,setSearch}) {
    return (
        <div className="filter">
            <div>
            <input type="text" placeholder="search..." onChange={e=>setSearch(e.target.value)}/>
            <span className="searchicon">
            <i class="fas fa-search"></i>
            </span>
            </div>
            <div className="secim">
                <select name="cars" id="cars">
                    <option value="volvo">Kurslar</option>
                    <option value="saab">Web Yazılım</option>
                    <option value="mercedes">Robotik</option>
                    <option value="audi">Siber Güvenlik</option>
                </select>
            </div>
            <div className="secim">
                <select name="cars" id="cars">
                    <option value="volvo">Order</option>
                    <option value="saab">Low</option>
                    <option value="mercedes">High</option>
                </select>
            </div>
            
        </div>
    )
}
