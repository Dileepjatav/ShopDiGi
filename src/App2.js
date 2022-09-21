import React from "react";
import './App2.css'
import { Footer } from "./Component2/Footer/Footer";
import Head from "./Component2/Head/Head";
import  Headlist  from "./Component2/Headlist/Headlist";
import { Main } from "./Component2/Main/Main";

export default function App2(){
    return( 
        <div className="App2" >
            
            <Head></Head>
            <Headlist></Headlist>
            <Main></Main>
            <Footer></Footer>
            
            


        </div> 
    );
}