import bts from "../../asset/bts.mp4"


export const Bts = () => {

  return (
    <>
      <div>
        <h3>Npp 기반의 액션 버튼으로 영상과 이미지를 재생하는 앱</h3>
        - USB의 1번,2번,3번,4번 폴더로 이미지나 영상을 넣고 액션버튼과 리모컨으로 컨트롤 <br />
        
        <h3>이슈</h3>
        - 영상을 바꿔가면서 테스트 도중 알 수 없는 오류로 영상을 못 읽어오는 현상 발생<br />
        - TizenAPI player 에서 컴포넌트가 바뀌어도 이전 영상의 객체가 남아있으면 인덱스가 남아있어서 영상 재생이 안되는 문제로 판단<br />
        (4번에서 1번으로 갔을때 4번영상 객체가 종료가 안되면 인덱스4에서 5로 넘어가고 5번 인덱스에서는 영상이 없으니 재생이 안되는 문제) <br />
        - 이미지와 영상의 처리 방법이 다르기 때문에 컴포넌트를 분리 해두어서 발생한 문제
        <h3>해결</h3>
        - 이미지 플레이 컴포넌트와 영상 플레이 컴포넌트 하나로 합처서 관리 <br />
        - 컴포넌트가 바뀌는 것이 아니라서 확실하게 이전 영상을 종료 시킬 수 있는 방법으로 해결 <br />
        - 코드가 길어지고 복잡해졌지만 오류 디버깅에는 수월 <br />


        
        <video src={bts} width="100%" controls />
      </div>
    </>
  )
}