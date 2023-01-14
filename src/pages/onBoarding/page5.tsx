import React from "react";
import styled from "styled-components";
import page5 from './images/Component 5.png';
import { Box,Contents } from "./page4";

export const Background = styled.div`
    background-image : url('${page5}');
    width: 1172px;
    height : 400px;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;

`;


const Page5 = () =>{
    return(
        <Box>
            <Contents>
                <div className="top">파일 관리도 간편하게!</div>
                <div className="mid">채팅방에 뒤죽박죽 섞인 파일을 찾기 어려우셨나요?<br/> 파일 모아보기로 간편하게 파일을 관리할 수 있습니다.</div>
            </Contents>
            <Background/>
        </Box>
    )
}

export default Page5;