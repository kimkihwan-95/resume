import { TVAD } from "../../constant/Summary"
import Card from "../Card"
import npp from "../../asset/nppdemo.mp4"
import regi from "../../asset/register.mp4"

export const Npp = () => {

  return (
    <>
      <div>
        <h3>Npp란?</h3>
        - CMS(Content Management System: 콘텐츠 관리 시스템)을 활용한 앱<br />
        - Network Promotion Player 로 삼성 리테일 샵에서 설치되는 앱의 기능<br />
        - TV에 설치되는 App은 React, TypeScript로 개발되고 설치를 위한 tmg파일 생성을 위해 TizenOS로 빌드됨<br />
        - USB에 설치를 위한 tmg파일,메인으로 실행 되는 영상과 각종 세팅 정보가 담긴 config.json를 읽어와서 앱 실행 <br />
        - 2023년도에 존재하던 기능은 네트워크 통신이 아닌, USB에 담긴 컨텐츠를 읽어와서 이미지와 영상을 보여주는 형식<br />
        - 2024년도에 새로운 기능으로 네트워크 통신과 관리자 페이지의 설정을 통해 실시간으로 컨텐츠를 변경 할 수 있도록 개발됨<br />
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