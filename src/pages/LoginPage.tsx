import React from 'react';
import styled from 'styled-components';
import KakaoBtn from 'components/loginPage/KakaoBtn';
import Logo from '../components/images/Logo_login.png';

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LogoImg src={Logo}></LogoImg>
      <Desc>서로가 모여 플러스가 되는 팀쁠</Desc>
      <KakaoButton>
        <KakaoBtn />
      </KakaoButton>
      <SubDesc>
        계정을 생성하면 서비스이용약관과 개인정보처리방침에 동의하게 됩니다.
      </SubDesc>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const LogoImg = styled.img`
  width: 237.26px;
  height: 67px;
  position: absolute;
  top: 276px;
`;

const Desc = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #707070;
  position: absolute;
  top: 359px;
`;

const KakaoButton = styled.div`
  position: absolute;
  top: 494px;
`;

const SubDesc = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #c0c0c0;
  position: absolute;
  top: 580px;
`;

export default LoginPage;
