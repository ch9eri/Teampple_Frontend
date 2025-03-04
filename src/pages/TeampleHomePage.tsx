import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SummaryTeample from 'components/teampleHomePage/SummaryTeample';
import FileInfo from 'components/teampleHomePage/FileInfo';
import ToDoBox from 'components/toDo/toDoBox';
import PlanManager from 'components/teampleHomePage/planManager';
import Layout from 'components/layouts/layout';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  teamidState,
  AddToDozIndexState,
  isLoading3State,
  isLoading5State,
} from 'state';
import ModifyStep from '../components/popup/ModifyStep';
import Loading from 'components/common/Loading';

const ContentBox = styled.div`
  display: flex;
`;

const MainContentBox = styled.div`
  display: flex;
`;

const AllBox = styled.div`
  display: flex;
  position: relative;

  .text {
    margin-top: 4.44444vh;
    color: #383838;
    font-weight: 500;
    font-size: 1.25vw;
    line-height: 2.685185vh;
    margin-left: 2.8125vw;
  }
`;

const EditBtn = styled.button`
  width: 3.59375vw;
  height: 2.592592vh;
  border: 1px solid #d5dbee;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.625vw;
  line-height: 100%;
  color: #707070;
  margin-top: 4.44444vh;
  margin-left: 1.25vw;
`;

const ModalContainer = styled.div`
  position: fixed;
  margin: 0 auto;
  z-index: 1000;
`;

const TeampleHomePage = () => {
  const [teamid, setTeamid] = useRecoilState(teamidState);
  const params = useParams();
  const [modal, setModal] = useState(false);
  const [toDoZindex, setToDoZindex] = useRecoilState(AddToDozIndexState);
  const [isLoading3,] = useRecoilState(isLoading3State);
  const [isLoading5,] = useRecoilState(isLoading5State);

  const showModal = () => {
    setModal(!modal);
    setToDoZindex(998);
  };

  useEffect(() => {
    setTeamid(Number(params.teamid));
  }, []);
  return (
    <>
      {/* {isLoading3 && isLoading5 ? <Loading /> : null} */}
      <Layout>
        <AllBox>
          <div>
            <ContentBox>
              <SummaryTeample />
              <FileInfo />
            </ContentBox>
            <div style={{ display: 'flex' }}>
              <div className="text">할 일</div>
              <EditBtn onClick={showModal}>단계 편집</EditBtn>
            </div>
            <ModalContainer>
              {modal && <ModifyStep setModal={setModal} />}
            </ModalContainer>
            <MainContentBox>
              <ToDoBox pathname={window.location.pathname} />
            </MainContentBox>
          </div>
          <PlanManager />
        </AllBox>
      </Layout>
    </>
  );
};

export default TeampleHomePage;
