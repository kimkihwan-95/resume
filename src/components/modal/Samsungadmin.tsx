import a1 from "../../asset/sadmin/1.png"
import a2 from "../../asset/sadmin/2.png"
import a3 from "../../asset/sadmin/3.png"
import a4 from "../../asset/sadmin/4.png"
import a5 from "../../asset/sadmin/5.png"
import a6 from "../../asset/sadmin/6.png"
import a7 from "../../asset/sadmin/7.png"
import a8 from "../../asset/sadmin/8.png"
import a9 from "../../asset/sadmin/9.png"
import a10 from "../../asset/sadmin/10.png"
import a11 from "../../asset/sadmin/11.png"
import a12 from "../../asset/sadmin/12.png"
import a13 from "../../asset/sadmin/13.png"

import a14 from "../../asset/sadmin/14.png"


const Samsungadmin = () => {


  return (
    <>
      <div>
        <h3>전 세계 삼성 리테일 샵의 TV에 설치되는 앱과 법인,지역,사용자 별 관리가 가능한 어드민 사이트입니다</h3>
        CMS(Content Management System: 콘텐츠 관리 시스템)기반의 앱이며 Npp(Network Promotion Player)라는 앱을 기반으로 10개 정도의 앱이 존재합니다.<br />
        앱을 설치하고 이미지,영상을 원하는 시간,횟수,반복 시간등을 설정 할 수 있어
        특정 시간에 프로모션 이미지나 영상을 보여주는식으로 사용됩니다.<br />
        또한 전 세계에 사용되는 앱이기 때문에 언어현지화를 지원하고, 앱에 사용되는 config.json 같은 파일 다운로드를 지원합니다.
      </div>
      <h3>매장에서 사용되는 앱 관련 데이터 시각화</h3>
      <img src={a1} width="100%" />
      <h3>앱이 설치된 TV 테이블과 설정 가능한 모달</h3>
      <img src={a2} width="100%" />
      <h3>하나만 설정하는 경우</h3>
      <img src={a3} width="100%" />
      <h3>두개 이상을 한번에 설정하는 경우</h3>
      <img src={a4} width="100%" />
      <h3>앱 종류에 따라 언어를 바꿀 수 있는 기능(왼쪽 기준, 오른쪽 사용자 현지화)</h3>
      <img src={a6} width="100%" />
      <h3>중국 현지화가 된 모습</h3>
      <img src={a5} width="100%" />
      <h3>실제 사용자들이 질문을 할 수 있는 게시판</h3>
      <img src={a7} width="100%" />
      <h3>게시글의 답변</h3>
      <img src={a14} width="100%" />

      <h3>앱에 따른 설치와 사용 방법이 담긴 파일 다운로드 기능</h3>
      <img src={a8} width="100%" />
      <h3>앱 파일 다운로드 기능</h3>
      <img src={a9} width="100%" />
      <h3>유저 관리(추가, 수정, 삭제, 정지)</h3>
      <img src={a10} width="100%" />
      <h3>유저에 대한 권한 부여 기능</h3>
      <img src={a11} width="100%" />
      <h3>사용중인 법인 관리</h3>
      <img src={a12} width="100%" />
      <h3>각 법인의 정보 수정</h3>
      <img src={a13} width="100%" />
    </>
  )
}

export default Samsungadmin