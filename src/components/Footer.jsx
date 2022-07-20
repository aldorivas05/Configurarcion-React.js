import React from 'react';
import '../assets/styles/components/Footer.scss';
import linkedinIcon from '../assets/static/LinkedIn_icon.png';
import gitHubicon from '../assets/static/github_icon2.png';
import twitterIcon from '../assets/static/Twitter_icon.png';
import instagramIcon from '../assets/static/instagram_icon2.png';
import facebookIcon from '../assets/static/Facebook_icon.png';

const Footer = () => (
    <footer className="footer">
        <div className="footer__items">
            <img className="footer__items--LinkedInicon" src={linkedinIcon} alt="LinkedIn_icon"  />
            <img className="footer__items--Githubicon" src={gitHubicon} alt="Github_Icon"  />
            <img className="footer__items--Twittericon" src={twitterIcon} alt="Twitter_icon"  />
            <img className="footer__items--Instagramicon" src={instagramIcon} alt="instagram_icon"  />
            <img className="footer__items--Facebookicon" src={facebookIcon} alt="Facebook_icon"  />
        </div>     
    </footer>       
);


export default Footer;