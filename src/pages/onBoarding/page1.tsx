import React from "react";
import styled from "styled-components";
import page1 from './images/Component 1.png';
import btn from './images/Frame 311.png';
import { Link } from "react-router-dom";

export const Background = styled.div`
    background-image : url('${page1}');
    width : 100%;
    height : 1080px;
    background-size: cover;
    justify-content : center;
    display:flex;
    
`;

const ContentBox = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 80px;

    .header{
        font-weight: 500;
        font-size: 28px;
        line-height: 140%;
        color: #707070;
        margin-bottom : 8px;
        margin-left : auto;
        margin-right : auto;
    }

    .mid{
        font-weight: 700;
        font-size: 36px;
        line-height: 140%;
        color: #383838;
        margin-bottom: 35px;

        a{
            color : #487AFF;
        }
    }

    .start{
        width: 131px;
        height: 56px;
        margin-left : auto;
        margin-right : auto;
    }

    img{
        max-width : 100%;
        max-height : 100%;
    }
    
`;

const Page1 = () =>{
    return(
        <Background>
            <ContentBox>
                <div className="header">서로가 모여 플러스가 되는</div>
                <div className="mid">새내기 팀플 가이드 솔루션 <a>팀쁠</a></div>
                <button className="start">
                    <Link to='/home' style={{textDecoration : 'none'}}>
                        <img src={btn}/>
                    </Link>
                </button>
            </ContentBox>
        </Background>
    );
}

export default Page1;