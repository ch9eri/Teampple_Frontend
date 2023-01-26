import styled from 'styled-components';
import React from 'react';
import logo from '../../components/images/logo.png';
import { Link } from 'react-router-dom';


const HeaderBox = styled.div`
    width: 100vw;
    height: 7.5vh;
    background-color: #ffffff;
    display: flex;
    font-weight: 600;
    font-size: 1.25vw;
    white-space: nowrap;
    position: relative;
    z-index: 998;
    justify-content : space-between;
`;

const Logo = styled.div`

    margin-left : 19.4vw;
    margin-top : auto;
    margin-bottom : auto;
    
    .logo{
        margin : auto;
        height: 4vh;
        width: 8vw;
        
    }
    img{
        max-width: 100%;
        max-height: 100%;
    }
    `;
    
    const Contents = styled.div`
    font-weight: 600;
    font-size: 0.9374vw;
    line-height: 140%;
    color: #383838;
    margin-right : 19.4vw;
    margin-top : auto;
    margin-bottom : auto;
    display : flex;

    .aboutUs,
    .plan {
        margin-right : 1.4vw;
    }

    .aboutUs:hover,
    .plan:hover,
    .login:hover{
        cursor : grab;
        border-bottom : 1px solid black;
    }
`;



const OnBoardingHeader = () => {


  return (
    <HeaderBox>
        <Logo>
            <Link to='/' style={{textDecoration : 'none'}}>
                <div className='logo'>
                    <img src={logo}/>
                </div>
            </Link>
        </Logo>
            <Contents>
                <div className='aboutUs'>ABOUT US</div>
                <div className='plan'>PLAN</div>
                <Link to='/login' style={{textDecoration : 'none', color: '#383838'}}>
                    <div className='login'>LOGIN</div>
                </Link>
            </Contents>
    </HeaderBox>
  );
};

export default OnBoardingHeader;
