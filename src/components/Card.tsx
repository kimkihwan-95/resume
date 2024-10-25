import styled from "styled-components";
import { CustomFont, FontBox } from "../common/Common";
import ItemList from "../common/CustomList";

interface CardProp {
  title: string;
  mainTitle: string;
  subTitle: string;
  bxSize: number;
  skillbox?: number;
  sumList?: any;
  skill?: string[];
  url?: string;
  more?: boolean;
  onMoreClick?: () => void; // 클릭 이벤트 핸들러 추가
}

const Card = ({ title, mainTitle, subTitle, bxSize, sumList, skill, skillbox, url, more, onMoreClick }: CardProp) => {
  return (
    <CardWrapper>
      <FontBox ftsize={25} bxSize={bxSize} ftColor="white" ftWeight="800" bgColor="black">
        {title}
      </FontBox>
      <CustomFont ftsize={16} ftColor="gray">
        {subTitle}
      </CustomFont>
      <CustomFont ftsize={20} ftColor="black">
        {mainTitle}
      </CustomFont>

      {url && (
        <div>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </Link>
        </div>
      )}

      <ItemList items={sumList} />
      <FontBox ftsize={20} bxSize={skillbox} ftColor="white" bgColor="black">
        {skill}
      </FontBox>

      {more && (
        <MoreButton onClick={onMoreClick}>
        READ ME
        </MoreButton>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 500px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

const Link = styled.a`
  text-decoration: none;
`;

const MoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 20px;
  padding: 10px;

  border: 1px solid black;
  border-radius: 5px;

  cursor: pointer;
`;

export default Card;
