import styled from "styled-components"
import { ContentsWrapper, CustomFont } from "../common/Common"
import ItemList from "../common/CustomList"

const AboutMe = () => {

  return (
    <Contents>

      <div>
        <h2>Career</h2>
        <h3>치즈에이드</h3>
        <CustomFont ftsize={14} ftColor="gray">
          2022.07 ~ 2024.09
        </CustomFont>
        <h5>- FE 주니어 개발자</h5>
        <h5>- 사원 대표 사내 활동(Change Agent)</h5>
      </div>

      <div>
        <h2>Education</h2>

        <h3>플레이데이터</h3>
        <CustomFont ftsize={14} ftColor="gray">
          2021.09 ~ 2022.03
        </CustomFont>
        <h5>인공지능을 활용한 웹 서비스 개발자 과정 수료</h5>

        <h3>학점은행제</h3>
        <CustomFont ftsize={14} ftColor="gray">
          2020.02
        </CustomFont>
        <h5>컴퓨터 공학 학사 취득</h5>

        <h3>울산과학대학교 </h3>
        <CustomFont ftsize={14} ftColor="gray">
          2014.03 ~ 2019.02
        </CustomFont>
        <h5>컴퓨터 정보학부 - 정보 시스템 관리 전공 졸업 </h5>

      </div>

      <div>
        <h2>Certificate</h2>
        <h3>정보처리기사</h3>
        <CustomFont ftsize={14} ftColor="gray">
          2021.08.21 취득
        </CustomFont>
        <h3>네트워크관리사 2급</h3>
        <CustomFont ftsize={14} ftColor="gray">
          2019.04.23 취득
        </CustomFont>
      </div>
    </Contents>
  )
}

export default AboutMe

const Contents = styled.div`
  display: flex;
  width: 100%;

  > div {
    flex : 1
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
    
    > div {
      width: 100%;
    }
  }
`;
