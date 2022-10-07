import React, { createContext, useContext, useState, useEffect } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import { GiAbstract100, GiSkills, GiFamilyTree, GiHouse } from "react-icons/gi";
import { FiActivity, FiPackage } from "react-icons/fi";
import $ from 'jquery';
const Navbar = () => {

    function animation(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeItemNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeItemNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $('.hori-selector').css({
            'top':itemPosNewAnimTop.top + 'px',
            'left':itemPosNewAnimLeft.left + 'px',
            'height':activeItemNewAnimHeight + 'px',
            'width':activeItemNewAnimWidth + 'px'
        });
        $("#navbarSupportedContent").on("click","li",function(e){
            $('#navbarSupportedContent ul li').removeClass('active');
            $(this).addClass('active');
            var activeItemNewAnimHeight = $(this).innerHeight();
            var activeItemNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $('.hori-selector').css({
                'top':itemPosNewAnimTop.top + 'px',
                'left':itemPosNewAnimTop.left + 'px',
                'height':activeItemNewAnimHeight + 'px',
                'width':activeItemNewAnimWidth + 'px'
            });
        });
    }
    
    useEffect(() => {
        animation();
        $(window).on('resize', function(){
            setTimeout(function(){
                animation();
            }, 10);
        });
    }, []);
    const navLinkStyles = ({isActive}) => {
        return {
            color: isActive ? 'white' : 'grey',
        }
    }
  return (
    <nav className='navbar navbar-mainbg'>

        
        
        <div
        
            aria-controls='navbarSupportedContent'
            id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/'></NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/home' style={navLinkStyles}>
                        
                        <GiHouse/>
                        Home 
                    </NavLink>
                </li>
                
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/openskill' style={navLinkStyles}>
                        
                        <GiFamilyTree/>
                        OpenSkill
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/activity' style={navLinkStyles}>
                        
                        <FiActivity/>
                        Activity
                    </NavLink>
                    
                </li>
                <li className='nav-item'>
                    
                    <NavLink className='nav-link' to='/aggregator' style={navLinkStyles}>
                        
                        <GiAbstract100 />
                        Aggregator
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/skill' style={navLinkStyles}>
                        
                        <GiSkills/>
                        Skill
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/package' style={navLinkStyles}>
                        
                        <FiPackage/>
                        Package
                    </NavLink>
                </li>
            </ul>
        </div>
        
    {/*<nav className='navbar navbar-expand-lg navbar-mainbg'> 
        <NavLink className='navbar-brand navbar-logo' to='/' exact>
            Web
        </NavLink>   
        <button 
            className='navbar-toggler  black-color'
            onClick={
                function(){
                    setTimeout(
                        function(){
                            animation();
                        }
                    );
                }
            }
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <i className='fa fa-power-off white-color'></i>

        </button>

        <div
            className='collapse navbar-collapse'
            id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
                <div className='hori-selector'>
                    <div className='left'></div>
                    <div className='right'></div>
                </div>

                <li className='nav-item active'>
                    <NavLink className='nav-link' to='/' exact>
                        
                        <FiActivity/>
                        Activity
                    </NavLink>
                    
                </li>
                <li className='nav-item active'>
                    <NavLink className='nav-link' to='/openskill' exact>
                        
                        <GiFamilyTree/>
                        OpenSkill
                    </NavLink>
                </li>
                <li className='nav-item active'>
                    <NavLink className='nav-link' to='/home' exact>
                        
                        <GiHouse/>
                        Home 
                    </NavLink>
                </li>
                <li className='nav-item active'>
                    
                    <NavLink className='nav-link' to='/aggregator' exact>
                        
                        <GiAbstract100 />
                        Aggregator
                    </NavLink>
                </li>
                <li className='nav-item active'>
                    <NavLink className='nav-link' to='/skill' exact>
                        
                        <GiSkills/>
                        Skill
                    </NavLink>
                </li>
                <li className='nav-item active'>
                    <NavLink className='nav-link' to='/package' exact>
                        
                        <FiPackage/>
                        Package
                    </NavLink>
                </li>
            </ul>
        </div>
    */}  



    </nav>
    

    
  );
}

export default Navbar;
