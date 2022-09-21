import React from 'react'
import style from './Main.module.css'
import Product from './Product/Product'
import json from '../../Json/file.json'
import { useState } from 'react'
import { useEffect } from 'react'


export const Main = () => {


  let [product,setproduct]=useState([]);
  
  useEffect(()=>{
    setproduct(json.item)

  },[])
  

  return (
    <div className={style.body} >
      <div className={style.box}>
      <div className={style.container}>
        
      {product=product.map((ele)=>{
        return(
          <Product ele={ele}></Product>
        )
        
      })}
      

      </div>
      </div>
      


        
    </div>
  )
}
