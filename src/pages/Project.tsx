// Project.tsx
import styled from "styled-components";
import Card from "../components/Card";
import { TVAD } from "../constant/Summary";
import { useState } from "react";
import Modal from "../components/modal";
import { Npp } from "../components/modal/Npp";
import { Bts } from "../components/modal/Bts";

const modalContents = [
  { id: 1, type: 'A', component: Npp },
  { id: 2, type: 'B', component: Bts },
];

const Project = () => {
  const [activeModal, setActiveModal] = useState<{ id: number; component: React.ComponentType } | null>(null);

  const openModal = (id: number) => {
    const foundModal = modalContents.find(modal => modal.id === id);
    if (foundModal) {
      setActiveModal({ id: foundModal.id, component: foundModal.component });
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ProjectWrapper>
      <Card
        title="Card A"
        mainTitle="Title A"
        subTitle="Subtitle A"
        bxSize={100}
        sumList={TVAD.sum}
        skill={TVAD.skill}
        skillbox={300}
        url="https://naver.com"
        more
        onMoreClick={() => openModal(1)} // A 모달 열기
      />
      <Card
        title="Card B"
        mainTitle="Title B"
        subTitle="Subtitle B"
        bxSize={100}
        sumList={TVAD.sum}
        skill={TVAD.skill}
        skillbox={300}
        url="https://naver.com"
        more
        onMoreClick={() => openModal(2)} // B 모달 열기
      />
      <Card
        title="Card C"
        mainTitle="Title C"
        subTitle="Subtitle C"
        bxSize={100}
        sumList={TVAD.sum}
        skill={TVAD.skill}
        skillbox={300}
        url="https://naver.com"
        more
        onMoreClick={() => openModal(3)} // C 모달 열기
      />

      {/* 모달 표시 */}
      {activeModal && (
        <Modal
          isOpen={true}
          onClose={closeModal}
        // title={`모달 ${activeModal.id}`}
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
