import { TVAD } from "../../constant/Summary"
import Card from "../Card"
import npp from "../../asset/nppdemo.mp4"
import regi from "../../asset/register.mp4"

export const Npp = () => {

  return (
    <>
      <div>
        <h3>Npp의 기본 동작 방식 설명 영상</h3>
        - 앱 설치 후 TV를 등록 설정
        <video src={regi} width="100%" controls />
      </div>
      <h3>설정 후 실제 Npp 동작 영상</h3>
      - 웹에서 설정된 정보를 TV UID 와 함께 서버로 데이터를 보내고, 서버에서 웹 소켓 통신을 실행<br />
      - 원래는 지정 된 시간마다 사진이 나오지만, 데모를 위한 PREVIEW 버튼으로 동작 
      <video src={npp} width="100%" controls />
    </>
  )
}