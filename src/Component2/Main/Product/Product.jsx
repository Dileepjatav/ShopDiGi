import React from "react";
import style from './Product.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';


function Product(props){

    const {name,discription,prise,rating}=props.ele.files;
    const url=props.ele.files.image.url;

    
    
    return(

        <div className={style.body2} >
            <div className={style.img} ><img src={url} alt="img" ></img></div>
            
            <div className={style.name} >{name}
            </div>
            <div className={style.prise} >$  {prise}</div>
            <div className={style.decription} >{discription}</div>
            <div className={style.rating} >
                <div className={style.ratingbox} >
                <StarIcon  className={style.star}></StarIcon>
                <StarIcon  className={style.star}></StarIcon>
                <StarIcon  className={style.star}></StarIcon>
                <StarIcon  className={style.star}></StarIcon>
                <StarIcon  className={style.star}></StarIcon>
               
                <h3>{
                    rating
                }</h3>
                
                
                </div>


                <button className={style.btndiv}>
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                    <p>Watch</p>

                </button>
                
            </div>
           

        </div>
    )
}

export default Product;