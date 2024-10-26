import styled from "styled-components"
import { useMediaQuery } from 'react-responsive';
import { ContentsWrapper, CustomFont } from "../common/Common"

const Title = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <CustomFont ftsize={isMobile ? 20 : 30} ftHeight={isMobile ? 30 : 50}>
      반갑습니다.<br />
      경력 2년차 웹 프론트 개발자 <span style={{ fontSize: "1.3em", fontWeight: "bold" }}>김기환</span> 입니다.<br />
      도전적인 목표를 통해 배우고 습득하는 과정을 좋아합니다.<br />
      사용자가 쉽게 접근할 수 있는 간결하고 실용적인 UI를 좋아합니다.<br />
      자유로운 소통속에서 다양한 피드백을 적극 수용하고,<br />
      항상 배우는 자세로 임하기 위해 노력합니다.
    </CustomFont>
  )
}

export default Title

