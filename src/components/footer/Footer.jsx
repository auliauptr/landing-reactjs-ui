import './footer.scss';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__contents'>
                    <div className='footer__top'>
                        <span>&copy; 2024 Yourcompany</span>
                        <h1>Landing</h1>
                        <button>Purchase Now</button>
                    </div>
                    <div className='footer__bottom'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        <div className='footer__icons-media'>
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaTwitter />
                            <FaYoutube />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
