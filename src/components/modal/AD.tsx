import ad1 from "../../asset/ad/ad1.png"
import ad2 from "../../asset/ad/ad2.png"
import ad3 from "../../asset/ad/ad3.png"
import ad4 from "../../asset/ad/ad4.png"
import ad5 from "../../asset/ad/매장사진.png"


const AD = () => {


  return (
    <>
      <div>
        <h3>아이디이 제안 PPT 입니다.</h3>
        <img src={ad1} width="100%" />
        <img src={ad2} width="100%" />
        <img src={ad3} width="100%" />
        <img src={ad4} width="100%" />
        <h3>기능 구현</h3>
        - 현재 할인율이 높은 10개의 상품 데이터를 받아온뒤,<br />
        재고가 많은 순으로 정렬 후 순차적으로 이미지가 나올 수 있게 <br />
        구현하였습니다.<br />

        <h3>이슈</h3>
        - 소리가 들어 있는 mp4 파일을 웹페이지에 autoplay 를 하도록 했는데 영상 실행이 안됨 <br />
        - 웹 브라우저 정책상 video player 에서 autoplay 는 mute 옵션이 필수 적용이라는 서치 결과로 <br />
        영상에서 소리를 따로 추출 하고 영상은 mute 옵션으로 autoplay 후 소리 파일을 따로 재생
        <br />
        <h3>실제 매장 적용 사진 입니다.</h3>
        <img src={ad5} width="100%" />
      </div>
    </>
  )
}

export default AD