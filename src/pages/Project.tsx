// Project.tsx
import styled from "styled-components";
import Card from "../components/Card";
import { BRAND, BTS, BUYING, NPP, PADMIN, QR, SAMIN, TVAD } from "../constant/Summary";
import { useState } from "react";
import Modal from "../components/modal";
import { Npp } from "../components/modal/Npp";
import { Bts } from "../components/modal/Bts";
import AD from "../components/modal/AD";
import Pricelabadmin from "../components/modal/Pricelabadmin";
import Brand from "../components/modal/Brand";
import Samsungadmin from "../components/modal/Samsungadmin";
import Buying from "../components/modal/Buying";
import Aiqr from "../components/modal/Aiqr";

const modalContents = [
  { id: "npp", type: 'Npp', component: Npp },
  { id: "bts", type: 'ButtonSolution', component: Bts },
  { id: "ad", type: 'PRICELAB_TV', component: AD },
  { id: "padmin", type: 'PRICELAB_ADMIN', component: Pricelabadmin },
  { id: "brand", type: 'CHEESEADE_HOMEPAGE', component: Brand },
  { id: "sadmin", type: 'SamsungRetail_App_Admin', component: Samsungadmin },
  { id: "buy", type: 'BuyingGuide', component: Buying },
  { id: "qr", type: 'AI_QR', component: Aiqr },
];


const Project = () => {
  const [activeModal, setActiveModal] = useState<{ id: string; type: String; component: React.ComponentType } | null>(null);

  const openModal = (id: string) => {
    const foundModal = modalContents.find(modal => modal.id === id);
    if (foundModal) {
      setActiveModal({ id: foundModal.id, component: foundModal.component, type: foundModal.type });
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ProjectWrapper>
      <Card
        title="2023_AI_QR"
        mainTitle={<><Point onClick={() => openModal("npp")}>Npp</Point>기반의 사용자 모바일기기 연동으로 기능 체험 앱</>}
        // mainTitle={"Npp 기반의 사용자 모바일기기 연동으로 기능 체험 앱"}
        subTitle="2024.01 ~ 2024.06"
        sumList={QR.sum}
        skill={QR.skill}
        more
        onMoreClick={() => openModal("qr")}
      />
      <Card
        title="2023_ButtonSolution"
        mainTitle={<><Point onClick={() => openModal("npp")}>Npp</Point>기반의 액션 버튼으로 영상과 이미지를 재생하는 앱</>}
        subTitle="2024.01 ~ 2024.06"
        sumList={BTS.sum}
        skill={BTS.skill}
        more
        onMoreClick={() => openModal("bts")}
        />
      <Card
        title="2023_BuyingGuide"
        mainTitle={<><Point onClick={() => openModal("npp")}>Npp</Point>기반의 TV의 특징을 소개하는 앱</>}
        subTitle="2024.01 ~ 2024.06"
        sumList={BUYING.sum}
        skill={BUYING.skill}
        more
        onMoreClick={() => openModal("buy")}
      />
      <Card
        title="2023_Npp"
        mainTitle="CMS기능의 삼성리테일샵에 설치되는 Tizen기반의 개발"
        subTitle="2024.01 ~ 2024.06"
        sumList={NPP.sum}
        skill={NPP.skill}
        more
        onMoreClick={() => openModal("npp")}
      />
      <Card
        title="SamsungRetail_App_Admin"
        mainTitle="전 세계 삼성 스토어에서 사용하는 앱을 관리하는 admin 페이지 제작"
        subTitle="2023.11.03 ~ 2024.05"
        sumList={SAMIN.sum}
        skill={SAMIN.skill}
        more
        onMoreClick={() => openModal("sadmin")}
      />
      <Card
        title="2023_CHEESEADE_HOMEPAGE"
        mainTitle="CHEESEADE 홈페이지 리뉴얼 제작"
        subTitle="2023.08.23 ~ 2023.10.16"
        sumList={BRAND.sum}
        skill={BRAND.skill}
        url="https://cheeseade.com"
        more
        onMoreClick={() => openModal("brand")}
      />
      <Card
        title="2022_PRICELAB_ADMIN"
        mainTitle="PRICELAB 매장 솔루션 관리자 페이지 제작"
        subTitle="2022.10.18 ~ 2023.06.23"
        sumList={PADMIN.sum}
        skill={PADMIN.skill}
        more
        onMoreClick={() => openModal("padmin")}
      />
      <Card
        title="2022_PRICELAB_TV"
        mainTitle="PRICELAB 매장 내 광고 영상 재생 앱 개발"
        subTitle="2022.08.16 ~ 2022.10.04"
        sumList={TVAD.sum}
        skill={TVAD.skill}
        more
        onMoreClick={() => openModal("ad")}
      />

      {activeModal && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={`${activeModal.type}`}
        >
          {activeModal.component && <activeModal.component />}
        </Modal>
      )}


    </ProjectWrapper>
  );
};

export default Project;

const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;

  > * {
    flex: 1 1 calc(50% - 15px);
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    > * {
      flex: 1 1 100%;
    }
  }
`;

const Point = styled.span`
  cursor: pointer;
  color: blue
`

