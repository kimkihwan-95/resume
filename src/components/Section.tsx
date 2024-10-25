import styled from "styled-components"
import { ContentsWrapper, CustomFont } from "../common/Common"

type Props = {
  children: React.ReactNode
  bgColor: string
  id: string
  title?: string
}

const Section = ({ children, bgColor, id, title }: Props) => {
  return (
    <Wrapper bgColor={bgColor} id={id}>
      <Contents>
        <CustomFont ftsize={40}>
          {title}
        </CustomFont>
        {children}
      </Contents>
    </Wrapper>
  )
}

export default Section

const Wrapper = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  border-bottom: 1px solid black;
  padding: 50px;
  box-sizing: border-box;

  /* 모바일 화면에서 패딩을 10px로 설정 */
  @media (max-width: 768px) {
    padding: 10px;
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;

  /* 모바일 화면에서 너비를 90%로 설정 */
  @media (max-width: 768px) {
    width: 90%;
  }
`
