// Project.tsx
import styled from "styled-components";
import Card from "../components/Card";
import { PADMIN, TVAD } from "../constant/Summary";
import { useState } from "react";
import Modal from "../components/modal";
import { Npp } from "../components/modal/Npp";
import { Bts } from "../components/modal/Bts";
import AD from "../components/modal/AD";
import Pricelabadmin from "../components/modal/Pricelabadmin";

const modalContents = [
  { id: "npp", type: 'Npp', component: Npp },
  { id: "bts", type: 'Bts', component: Bts },
  { id: "ad", type: '2022_PRICELAB_TV', component: AD },
  { id: "padmin", type: '2022_PRICELAB_ADMIN', component: Pricelabadmin },
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

const Contents = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 50px;
`
