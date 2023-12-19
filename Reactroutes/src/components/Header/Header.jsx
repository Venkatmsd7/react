import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div class="header">
        <div class="left">
            <img class="hamburger-menu" src="icons/hamburger-menu.svg" alt="Logo"/>
            <img class="youtube-logo" src="icons/youtube-logo.svg" alt="Logo"/>
        </div>
        <div class="middle">
            <input class="search-bar" type="text" placeholder="Search"/>
            <button class="search-button">
                <img class="search-icon" src="icons/search.svg" alt="Logo"/>
            </button>
            <button class="voice-search-button">
                <img class="voice-search-icon" src="icons/voice-search-icon.svg" alt="Logo"/>
            </button>
        </div>
        <div class="right">
            <img class="upload-icon" src="icons/upload.svg" alt="Logo"/>
            <img class="notification-icon" src="icons/notifications.svg" alt="Logo"/>
            <img class="mylogo-icon" src="icons/mylogo.jpg" alt="Logo" />
        </div>
    </div>
    );
}