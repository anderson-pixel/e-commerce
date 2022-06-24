import * as React from "react";
import { MdStar } from "react-icons/md";
import fontawesome from '@fortawesome/fontawesome'
import { AiOutlineArrowDown } from "react-icons/ai";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

if (process.browser) {
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});
}

export default function Faq() {

  return (
    <div className="faq">
    <h1 className="heading">Q&<span>A</span></h1>

<div className="accordion-container">

<div className="accordion">
        <div className="accordion-heading">
            <h3>lorem</h3>
            <i id='oklin' style={{color: 'white'}} className="fas fa-angle-down"></i>
        </div>
        <p className="accordioin-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores.
        </p>
    </div>


    <div className="accordion">
        <div className="accordion-heading">
            <h3>lorem</h3>
            <i id='oklin' style={{color: 'white'}} className="fas fa-angle-down"></i>
        </div>
        <p className="accordioin-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores.
        </p>
    </div>

    <div className="accordion">
        <div className="accordion-heading">
            <h3>lorem</h3>
            <i id='oklin' style={{color: 'white'}} className="fas fa-angle-down"></i>
        </div>
        <p className="accordioin-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores.
        </p>
    </div>

    <div className="accordion">
        <div className="accordion-heading">
            <h3>lorem</h3>
            <i id='oklin' style={{color: 'white'}} className="fas fa-angle-down"></i>
        </div>
        <p className="accordioin-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores.
        </p>
    </div>

    <div className="accordion">
        <div className="accordion-heading">
            <h3>Lorem</h3>
            <i id='oklin' style={{color: 'white'}} className="fas fa-angle-down"></i>
        </div>
        <p className="accordioin-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores.
        </p>
    </div>
</div>
    </div>
  );
}