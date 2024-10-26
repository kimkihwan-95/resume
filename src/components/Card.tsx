import styled from "styled-components";
import { CustomFont, FontBox } from "../common/Common";
import ItemList from "../common/CustomList";

interface CardProp {
  title: string;
  mainTitle: string;
  subTitle: string;
  sumList?: any;
  skill?: string[];
  url?: string | null;
  more?: boolean;
  onMoreClick?: () => void; // 클릭 이벤트 핸들러 추가
}

const Card = ({ title, mainTitle, subTitle,  sumList, skill,  url, more, onMoreClick }: CardProp) => {
  return (
    <CardWrapper>
      <div>
        <FontBox ftsize={25} ftColor="white" ftWeight="800" bgColor="lightblue">
          {title}
        </FontBox>
      </div>
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
      <div>

        <FontBox ftsize={20} ftColor="white" bgColor="lightblue">
          {skill}
        </FontBox>
      </div>

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
  box-shadow: 0 0 3px;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;

 @media (max-width: 768px) {
    height: auto;
  }
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
  box-shadow: 0 0 3px;

  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background-color: lightblue;
    border: none;
  }
`;

export default Card;
