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

        <h3>실제 매장 적용 사진 입니다.</h3>
        <img src={ad5} width="100%" />
      </div>
    </>
  )
}

export default AD