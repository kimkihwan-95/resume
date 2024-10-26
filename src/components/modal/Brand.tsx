import a1 from "../../asset/brand/1.png"
import a2 from "../../asset/brand/2.png"
import a3 from "../../asset/brand/3.png"
import a4 from "../../asset/brand/4.png"

const Brand = () => {

  return (
    <>
      <div>
        <h3>/Admin 접속 로그인 후 컨텐츠 수정 설명입니다.</h3>
        - 콘텐츠 수정을 개발자가 아닌 관리자가 할 수 있도록 아이디어제안 했고,
        실제 개발된 페이지입니다.
      </div>
        <h3>언론 보도 수정 테이블과 수정 페이지</h3>
      <img src={a1} width="100%" />
      <img src={a2} width="100%" />
      <h3>연혁 수정 페이지와 실제 홈페이지의 적용 모습</h3>
      - 등록,삭제,순서 변경이 가능하다.<br/> 
      <img src={a3} width="100%" />
      <img src={a4} width="100%" />
    </>
  )
}

export default Brand