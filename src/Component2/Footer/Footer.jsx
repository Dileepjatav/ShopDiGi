import React from 'react'
import style from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <div className={style.body}>
        <footer className={style.footer}>

            <div className={style.content}>
            <h3>Shop DiGi</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in consectetur sit?</p>
            <ul className={style.social}>
                <li><FacebookIcon></FacebookIcon></li>
                <li><TwitterIcon></TwitterIcon></li>
                <li><YouTubeIcon></YouTubeIcon></li>
                <li><GoogleIcon></GoogleIcon></li>
                <li><GitHubIcon></GitHubIcon></li>
            </ul>
            </div>

            <div className={style.bottom}>
            <p>Copyright &copy;2022 ShopDiGi. designed by   <span>  Dileep Jatav</span> </p>
            </div>
 

        </footer>
        



    </div>
  )
}
