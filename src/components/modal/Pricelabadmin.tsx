import ad1 from "../../asset/padmin/1.png"
import ad2 from "../../asset/padmin/2.png"
import ad3 from "../../asset/padmin/3.png"
import ad4 from "../../asset/padmin/4.png"
import ad5 from "../../asset/padmin/5.png"
import ad6 from "../../asset/padmin/6.png"
import ad7 from "../../asset/padmin/7.png"
import ad8 from "../../asset/padmin/8.png"
import ad9 from "../../asset/padmin/9.png"
import ad10 from "../../asset/padmin/10.png"
import ad11 from "../../asset/padmin/11.png"
import ad12 from "../../asset/padmin/12.png"
import ad13 from "../../asset/padmin/13.png"
import ad14 from "../../asset/padmin/14.png"
import ad15 from "../../asset/padmin/15.png"
import ad16 from "../../asset/padmin/16.png"
import ad17 from "../../asset/padmin/17.png"
import ad18 from "../../asset/padmin/18.png"
import ad19 from "../../asset/padmin/19.png"
import ad20 from "../../asset/padmin/20.png"
import ad21 from "../../asset/padmin/21.png"
import ad22 from "../../asset/padmin/22.png"
import ad23 from "../../asset/padmin/23.png"
import ad24 from "../../asset/padmin/24.png"
import ad25 from "../../asset/padmin/25.png"
import ad26 from "../../asset/padmin/26.png"
import ad27 from "../../asset/padmin/27.png"
import ad28 from "../../asset/padmin/28.png"
import ad29 from "../../asset/padmin/29.png"
import ad30 from "../../asset/padmin/30.png"
import ad31 from "../../asset/padmin/31.png"
import ad32 from "../../asset/padmin/32.png"
import ad33 from "../../asset/padmin/33.png"

const Pricelabadmin = () => {

  return (
    <>
      <div>
        <h3>홈 화면</h3>
        - 판매 데이터를 보여주는 카드 컴포넌트 구현
      </div>
      <br />
      <img src={ad1} width="100%" />
      <img src={ad2} width="100%" />
      <div>
        <h3>대시 보드 보기 설정 변경 기능</h3>
        - 드래그 드랍으로 왼쪽 타이틀 이동시 오른쪽 서브 타이블 위치 변경 <br />
        - 왼쪽 타이틀 체크 박스 해제시 오른쪽 하위 서브 타이틀 체크 전부 해제<br />
        - 오른쪽 서브 타이틀 해제시 그에 맞는 상위 오른쪽 타이틀 체크 해제
      </div><br />
      <img src={ad3} width="50%" />
      <img src={ad4} width="50%" />

      <div>
        - 각 메뉴 테이블 위에 존재하는 공통 컴포넌트 제작 'Redux로 전역 변수 관리'
      </div><br />
        <img src={ad5} width="100%" />
   
      <div>
        <h3>판매 이력 테이블</h3>
        - 건별 보기, 건별 상세보기로 테이블 형식 바뀜
      </div><br />

      <img src={ad6} width="100%" />
      <img src={ad7} width="50%" />
      <img src={ad8} width="50%" />
      <div><br />
        - 테이블 데이터 더블 클릭 시 결제 취소 기능
      </div><br />
      <img src={ad9} width="100%" />
      <img src={ad10} width="100%" />
      <div><br />
        <h3>데이터 시각화</h3>
        - apexChart.js 사용
        <h3>이슈</h3>
        - 해당 라이브 러리에서 제공하는 옵션만으로는 기획된 디자인에 맞게 <br />
        (마우스 호버되었을때, 클릭했을때, 그래프 뒷면의 줄금선 등)수정하기에 어려움을 느꼈다.<br />
        - 개발자 도구로 렌더링 되는 부분을 하나씩 클래스명을 찾고 innerHTML로 접근하여
        클래스명에 css를 덮어 씌우는 방식으로 해결
      </div><br />

      <img src={ad11} width="100%" />
      <img src={ad12} width="100%" />
      <img src={ad13} width="100%" />
      <img src={ad14} width="100%" />
      <div><br />
        <h3>전체 상품 메뉴</h3>
        - 새로운 상품 등록과 테이블 내에서 더블클릭으로 상품 정보 수정

        <h3>이슈</h3>
        - 이미지 업로드 후 상품등록/상품수정의 다른값이 변함에 따라<br />
        이미지 상태값도 다시 렌더링 되는 문제 발생<br />
        - 컴포넌트를 분리해서 Redux로 상태관리를 시도함<br />
        - Redux 상태값에는 직렬화 불가능한 데이터가 들어갈 수 없는 문제 발생<br />

        <h3>해결</h3>
        - 상품 등록, 수정 페이지의 구조를 바꿔서 등록하기, 수정하기가<br />
        존재하는 부모 컴포넌트에서 props 로 setState 해주는 방식으로 <br />
        다른 상태값에 변화에 따른 종속성 삭제
      </div><br />

      <img src={ad15} width="100%" />
      <img src={ad16} width="100%" />
      <img src={ad17} width="100%" />

      <div><br />
        <h3>발주 메뉴</h3>
        <h3>이슈</h3>
        - 드랍 다운 컴포넌트가 리스트 선택만 되는것이 아니라,<br />
        입력도 동시에 가능해야하는 기능
        <h3>해결</h3>
        - 드랍 다운 기능을 하는 박스에 input 필드를 만들고,<br />
        input 필드의 사이즈를 드랍다운의 사이즈보다 2px 작게 만들어서<br />
        자연스러워 보이도록 해결
      </div><br />
      <img src={ad18} width="100%" />
      <img src={ad19} width="100%" />
  
      <div><br />
        <h3>재고 관리 메뉴</h3>
      </div><br />
      <img src={ad22} width="100%" />

      <div><br />
        <h3>바코드 출력 메뉴</h3>
        - 등록된 상품에 생성된 바코드를 출력하는 기능 <br />
        - zebra 프린트 Web Print Api custom 하여 웹에서 버튼을 눌러서 출력가능하게함
      </div><br/>
      <img src={ad23} width="100%" />

      <div><br/>
        <h3>전자 가격 표시기 메뉴</h3>
        - 매장에서 진열된 전자 가격 표시기 설정 기능<br />
        - 페이지에서 설정 저장 후 websocket을 이용하여 실제 전자가격 표시기 업데이트
      </div><br />
      <img src={ad24} width="100%" />

      <div>
        <h3>알림 보내기 기능과 채널톡 연동 HQ 계정 생성</h3>
      </div>
      <img src={ad30} width="100%" />
      <img src={ad31} width="100%" />
      <img src={ad33} width="100%" />

      <div>
        <h3>그외 다른 내용의 테이블로 구성된 메뉴 페이지</h3>
      </div>
      <img src={ad25} width="100%" />
      <img src={ad26} width="100%" />
      <img src={ad27} width="100%" />
      <img src={ad28} width="100%" />
      <img src={ad29} width="100%" />
      <img src={ad32} width="100%" />
    </>
  )
}

export default Pricelabadmin