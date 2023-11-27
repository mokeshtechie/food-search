import React, { useState } from 'react';
import {data} from "../data/data.js"


function Food  ()  {

let [food,setFood]=useState(data)
//    console.log(data)
let filterType =(category)=>{
    setFood(
        data.filter((item) => {
            return item.category===category
        })
    )
    }
    let filterPrice = (price) =>{
        setFood(
            data.filter((item)=>{
                return item.price ===price;
            })
        )
    }


    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>top rated menu items</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='font-bold text-gray-700'>filter Type</p>
                <div className='flex justify-between flex-wrap max-w-[420px] w-full'>
                     <button onClick={()=>setFood(data)}className='border-orange-600  m-1 border px-3 text-orange-600 hover:bg-orange-600 hover:text-white' >all</button>
                     <button onClick={()=>filterType("burger")}className='border-orange-600  m-1 border px-3 text-orange-600 hover:bg-orange-600 hover:text-white' >burgers</button>
                     <button onClick={()=>filterType("pizza")}className='border-orange-600  m-1 border px-3 text-orange-600 hover:bg-orange-600 hover:text-white' >pizzas</button>
                     <button onClick={()=>filterType("salad")}className='border-orange-600  m-1 border px-3 text-orange-600 hover:bg-orange-600 hover:text-white' >salads</button>
                     <button onClick={()=>filterType("chicken")}className='border-orange-600  m-1 border px-3 text-orange-600 hover:bg-orange-600 hover:text-white' >chikens</button>
                </div>

         </div>
         <div>
            <p className='font-bold text-gray-700 '>filter price</p>
            <div className='flex justify-between max-w-[310px] w-full'>
                <button onClick={()=>filterPrice("$")}className='  border-orange-600  m-1 border px-5 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                <button onClick={()=>filterPrice("$$")}className='  border-orange-600  m-1 border px-5 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                <button onClick={()=>filterPrice("$$$")}className='  border-orange-600  m-1 border px-5 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                <button onClick={()=>filterPrice("$$$$")}className='  border-orange-600  m-1 border px-5 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
            </div>
         </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
               {food.map((item,index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p>{item.name}</p>
                            <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
                    </div>
                </div>
               ) )}
            </div>
        </div>
    );
};

export default Food;
