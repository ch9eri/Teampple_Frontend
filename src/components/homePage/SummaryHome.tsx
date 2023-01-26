import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import prof1 from '../images/profile/proImageU1.png';
import prof2 from '../images/profile/proImageU2.png';
import prof3 from '../images/profile/proImageU3.png';
import prof4 from '../images/profile/proImageU4.png';
import prof5 from '../images/profile/proImageU5.png';
import prof6 from '../images/profile/proImageU6.png';
import prof7 from '../images/profile/proImageU7.png';
import prof8 from '../images/profile/proImageU8.png';
import prof9 from '../images/profile/proImageU9.png';
import HomeSummaryBg from '../images/HomeSummaryBg.png';
import axios from 'axios';

const SummaryHome = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const week = weeks[now.getDay()];

  const [username, setUsername] = useState('');
  const [doneNum, setDoneNum] = useState<number>(0);
  const [allNum, setAllNum] = useState<number>(0);
  const [remainPercent, setRemainPercent] = useState<number>(
    isNaN(Math.round(Number(doneNum / allNum) * 100))
      ? 0
      : Math.round(Number(doneNum / allNum) * 100),
  );
  const [userid, setUserid] = useState(prof1);
  let s1 = 0;
  let s2 = 0;
  const token = localStorage.getItem('jwt_accessToken');

  const getTaskAPI = async () => {
    
    await axios({
      url: `/api/users/tasks`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setUsername(response.data.data.username);
        response.data.data.teams.map((t: any) =>
          setDoneNum((s1 += parseInt(t.achievement))),
        );
        response.data.data.teams.map((t: any) =>
          setAllNum((s2 += parseInt(t.totalStage))),
        );
        setRemainPercent((doneNum / allNum) * 100);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getTaskAPI();
    console.log(localStorage.getItem('jwt_accessToken'));
  }, [doneNum, allNum]);

  return (
    <SummaryContainer>
      <DateContainer>
        {year}년 {month}월 {date}일 ({week})
      </DateContainer>
      <RemainContainer>
        <RemainBox>
          <Big>
            <span>
              {username}님의
              <br />
            </span>
            <div style={{ marginTop: '18px' }}>
              <span>할 일이</span>
              <span style={{ color: '#487AFF', fontWeight: '700' }}>
                &nbsp;{allNum - doneNum}개&nbsp;
              </span>
              <span>
                남았어요.
                <br />
              </span>
            </div>
          </Big>
          <Small>
            <Text>남은 시간 힘내서 달려보아요</Text>
            <Percent>{remainPercent}%</Percent>
          </Small>
        </RemainBox>
      </RemainContainer>
      <BarContainer>
        <ul>
          <li>
            <Bar
              className="css-progressbar"
              remainPercent={remainPercent}
              userid={userid}
            />
          </li>
        </ul>
      </BarContainer>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  width: 87.5vw;
  height: 296px;
  position: relative;
  background-color: #f9fafd;
  background-image: url(${HomeSummaryBg});
  background-size: contain;
  background-repeat: no-repeat;
`;

const DateContainer = styled.div`
  position: absolute;
  left: 2.81vw;
  top: 36px;
  font-size: 1rem;
  line-height: 100%;
`;

const RemainContainer = styled.div``;

const RemainBox = styled.div`
  position: absolute;
  top: 74px;
  left: 2.81vw;
`;

const Big = styled.div`
  font-size: 2rem;
  line-height: 100%;
  font-weight: 500;
`;

const Small = styled.div`
  margin-top: 20px;
`;

const Text = styled.span`
  font-size: 1.125rem;
  font-weight: 400;
`;

const Percent = styled.span`
  position: absolute;
  left: 43.75vw;
  font-size: 1.5rem;
`;

const BarContainer = styled.div`
  position: absolute;
  top: 230px;
  left: 4vw;
  ul {
    position: relative;
    padding: 0;
    list-style: none;
    width: 46.25vw;
  }

  li {
    background-color: #ececec;
    height: 16px;
    border-radius: 46px;
  }
`;

interface IBar {
  remainPercent: number;
  userid: string;
}

const Bar = styled.span<IBar>`
  position: absolute;
  border-radius: 46px;
  background-color: #487aff;
  height: 16px;
  width: ${(props) => props.remainPercent}%;
  -webkit-animation: css-progressbar 2s ease-out;
  animation: css-progressbar 2s ease-out;

  &::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    top: -10px;
    right: -0.5208vw;
    border: 1.5px solid #487aff;
    border-radius: 54px;
    /* background-image: ${(props) => `url(${props.userid})`}; */
    background-image: url(${(props) => props.userid});
    background-size: cover;
  }

  @keyframes css-progressbar {
    0% {
      width: 0px;
    }

    100% {
      width: ${(props) => props.remainPercent}%;
    }
  }
`;

export default SummaryHome;
