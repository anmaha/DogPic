import React from 'react';
import CatPic from './CatPic'
import DogPic from './DogPic';

const NavBar = () => {
    return (
    <div class="ui tabular menu">
        <a class="active item">
        Cat Photos
        </a>
        <a class="item">
        Dog Photos
        </a>
    </div>
    )
}

export default NavBar;