import qr from "../../asset/aiqr.mp4"


const Aiqr = () => {
  
  return (
    <>
      <div>
        <h3>Npp 기반의 사용자 모바일기기 연동으로 기능 체험 앱</h3>
        - 앱 실행 후 나오는 QR 코드를 모바일 기기로 인식하면 웹 사이트 연결과 동시에 웹소켓 통신으로 체험앱으로 이동 <br />
        - 그 후 사용자의 컨트롤에 따라 화면 이동과 사운드 제어등 체험 지속 <br />
        <video src={qr} width="100%" controls />
      </div>
    </>
  )
}

export default Aiqr