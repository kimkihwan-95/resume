import styled from "styled-components";
import { CustomFont, FontBox } from "../common/Common";
import ItemList from "../common/CustomList";

interface CardProp {
  title: string;
  mainTitle: any;
  subTitle: string;
  sumList?: any;
  skill?: string[];
  url?: string | null;
  more?: boolean;
  onMoreClick?: () => void;
}

const Card = ({ title, mainTitle, subTitle, sumList, skill, url, more, onMoreClick }: CardProp) => {
  return (
    <CardWrapper>
      <ContentWrapper>
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
      </ContentWrapper>

      <FooterWrapper>
        <FontBox ftsize={20} ftColor="white" bgColor="lightblue">
          {skill}
        </FontBox>
        {more && (
          <MoreButton onClick={onMoreClick}>
            More
          </MoreButton>
        )}
      </FooterWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  box-shadow: 0 0 3px;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px; /* 상단 내용 사이의 간격 */
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-top: 10px; /* FooterWrapper를 ContentWrapper와 간격 설정 */
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
