import React from 'react'
import style from './Headlist.module.css'
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PetsIcon from '@mui/icons-material/Pets';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MovingIcon from '@mui/icons-material/Moving';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import BoltIcon from '@mui/icons-material/Bolt';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ToysIcon from '@mui/icons-material/Toys';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckroomIcon from '@mui/icons-material/Checkroom';



function Headlist() {
  return (
    <div className={style.body} >
      <div className={style.listcontainer}>
        <ul>

          <div className={style.icon} >
            <div className={style.logo} >
             <CheckroomIcon></CheckroomIcon>
            </div>
            <p>Clothing</p>
          </div>


          <div className={style.icon} >
            <div className={style.logo} >
             <LocalMoviesOutlinedIcon></LocalMoviesOutlinedIcon>
            </div>
            <p>Entertainment</p>
          </div>


          <div className={style.icon} >
            <div className={style.logo} >
             <MusicNoteOutlinedIcon></MusicNoteOutlinedIcon>
            </div>
            <p>Music</p>
          </div>


          <div className={style.icon} >
            <div className={style.logo} >
             <FitnessCenterIcon></FitnessCenterIcon>
            </div>
            <p>Sport Lifestyle</p>
          </div>



          <div className={style.icon} >
            <div className={style.logo} >
             <PetsIcon></PetsIcon>
            </div>
            <p>Pets</p>
          </div>

          <div className={style.icon} >
            <div className={style.logo} >
             <LocalDiningIcon></LocalDiningIcon>
            </div>
            <p>Kitchen</p>
          </div>

          <div className={style.icon} >
            <div className={style.logo} >
             <MovingIcon></MovingIcon>
            </div>
            <p>Travel Equipment</p>
          </div>


          <div className={style.icon} >
            <div className={style.logo} >
             <LocalFloristIcon></LocalFloristIcon>
            </div>
            <p>Growing Garden</p>
          </div>


          <div className={style.icon} >
            <div className={style.logo} >
             <BoltIcon></BoltIcon>
            </div>
            <p>Electrical Tool</p>
          </div>


          <div className={style.icon} >
            <div className={style.logo} >
             <ChildFriendlyIcon></ChildFriendlyIcon>
            </div>
            <p>Baby Care</p>
          </div>



          <div className={style.icon} >
            <div className={style.logo} >
             <ToysIcon></ToysIcon>
            </div>
            <p> Toys Entertainment</p>
          </div>

          <div className={style.icon} >
            <div className={style.logo} >
             <AcUnitIcon></AcUnitIcon>
            </div>
            <p>Vintage</p>
          </div>  

          




    


          
          
          
        </ul> 
        


      </div>

    
    
    </div>
  );
}

export default Headlist;
