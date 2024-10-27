import styled from "styled-components";

const Skill = () => {
  return (
    <Contents>
      <div>
        <h2>JavaScript</h2>
        <ResponsiveHeading as="h3">JavaScript를 활용하여 다양한 웹 애플리케이션을 구현할 수 있으며, RESTful API를 통한 서버 통신과 데이터 처리에 능숙합니다.</ResponsiveHeading>
        <ResponsiveHeading as="h3">비동기 프로그래밍을 활용하여 효율적인 데이터 처리와 API 통신을 구현할 수 있습니다.</ResponsiveHeading>
        <ResponsiveHeading as="h3">ES6 이상 문법을 적극 사용합니다.</ResponsiveHeading>
        <ResponsiveHeading as="h3">타입스크립트를 사용해 개발할 수 있습니다.</ResponsiveHeading>
      </div>

      <div>
        <h2>HTML/CSS</h2>
        <ResponsiveHeading as="h3">마크업을 구조적으로 설계해 작성할 수 있습니다.</ResponsiveHeading>
        <ResponsiveHeading as="h3">반응형을 적용할 수 있습니다.</ResponsiveHeading>
        <ResponsiveHeading as="h3">설계된 디자인에 맞게 화면을 구성 할 수 있습니다.</ResponsiveHeading>
        <ResponsiveHeading as="h3">다양한 브라우저 환경에서도 일관된 사용자 경험을 제공하기 위해 크로스 브라우징을 최적화합니다.</ResponsiveHeading>
      </div>

      <div>
        <h2>ReactJS</h2>
        <ResponsiveHeading as="h3">React를 활용해 모듈화된 컴포넌트를 설계하고, 재사용 가능한 UI 구조를 구현합니다.</ResponsiveHeading>
        <ResponsiveHeading as="h3">Redux,Recoil,Zustand를 이용하여 전역 상태관리를 할 수 있습니다.</ResponsiveHeading>
        <ResponsiveHeading as="h3">React hook을 이용해 공통 비즈니스 로직을 적절히 모듈화해 사용할 수 있습니다.</ResponsiveHeading>
      </div>

      <div>
        <h2>Git</h2>
        <ResponsiveHeading as="h3">Git을 사용하여 프로젝트를 관리합니다.</ResponsiveHeading>
        <ResponsiveHeading as="h3">Git flow 방식에 익숙합니다.</ResponsiveHeading>
      </div>
    </Contents>
  );
}

export default Skill;

const Contents = styled.div`
  display: grid;
  width: 100%;
  gap: 15px; /* 항목 간격 추가 */
  
  /* 두 개씩 배치 */
  grid-template-columns: repeat(2, 1fr);

  > div {
    width: 100%;
  }

  /* 모바일에서는 한 열로 변경 */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 한 열 배치 */
  }
`;

const ResponsiveHeading = styled.h3`
  /* 기본 스타일 */
  
  @media (max-width: 768px) {
    /* 모바일에서는 h3 대신 h4 스타일 적용 */
    font-size: 1em; /* h4 스타일을 위한 글자 크기 조정 (필요 시) */
  }
`;
