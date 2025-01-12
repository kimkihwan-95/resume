import buy from "../../asset/buying.mp4"

const Buying = () => {

  return (
    <>
      <div>
        <h3>Npp 기반의 특정 제품을 소개하는 앱</h3>
        - 메인 화면 keyframe을 이용한 리모컨 애니메이션 구현 <br />
        - 리모컨 동작 기능 추가 <br />
        - 리모컨 동작으로 체험 시작 후 180초간 입력 없으면 USB의 담긴 영상 재생 <br />
        - 실제 TV사이즈에 맞는 사이즈 시뮬레이터 구현(영상 27~28초) <br />
        <h3>이슈</h3>
        - 이미지가 많이 사용된 앱인데, TV의 성능에 따라 이미지를 불러오는 속도 차이 발생<br />
        - 이미지가 넘어갈때 마다 검은 화면으로 이미지 로딩 되는 모습이 보여서 완성도가 떨어지는 모습이 발견<br />
        <h3>해결</h3>
        - 앱 최초 설정을 읽어오는 로딩 컴포넌트에서 전체 이미지를 불러오고 보여주지 않는 방식(zindex 사용)으로 이미지 프리로딩을 구현
        
        <video src={buy} width="100%" controls />
      </div>
    </>
  )
}

export default Buying