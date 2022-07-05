import React from 'react';
import { AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Made By Anderson Pereira 2022</p>
      <p className="icons">
        <AiFillLinkedin style={{cursor: 'pointer'}}/>
        <AiOutlineGithub style={{cursor: 'pointer'}}/>
      </p>
    </div>
  )
}

export default Footer;