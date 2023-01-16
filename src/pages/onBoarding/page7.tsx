import React from "react";
import styled from "styled-components";
import page7 from './images/Component 7.png';
import { Box } from "./page4";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Background = styled.div`
    background-image : url('${page7}');
    width: 1172px;
    height : 276px;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;
    margin-top : 0;
    `;
    
    const Content = styled.div`
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: #383838;
    margin : auto;
    margin-bottom : 48px;
`;

const Page7 = () =>{
    useEffect(()=>{
        AOS.init({
            duration : 2000,
        });
        
      })

    return(
        <Box data-aos="zoom-out">
            <Content>
                <div>또, 이런 사람들에게 필요해요</div>
            </Content>
            <Background/>
        </Box>
    );
}

export default Page7;