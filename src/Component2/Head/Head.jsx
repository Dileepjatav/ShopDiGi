import React from "react";
import style from './Head.module.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import img from '../../img/Edward Powlowski.png'

function Head(){
    return(

        <div className={style.Head} >
            <div className={style.container} >
            <div className={style.logo} >

                <div><p>S</p></div>
                <p>Shop DiGi</p>


            </div>
            <div className={style.register} >
                <p>Register</p>
            </div>

            <div className={style.search}>
                <SearchIcon></SearchIcon>
                <input type="text" placeholder="Search Item"></input>
                <CloseIcon></CloseIcon>
            </div>

            <div className={style.menu} >
                <p>Consumer Electronics</p>
            </div>

            <div className={style.signup}>
                <button>Sign up</button>
            </div>

            <div className={style.cart}>
                <button>My cart</button>

            </div>
            
            <img className={style.profile} src={img} alt="img"></img>
            </div>
            




        </div>
    );
}

export default Head;