import React from "react";
import styled from "styled-components";

type ItemListProps = {
  items: string[];
};

const ItemList = ({ items }: ItemListProps) => {
  return (
    <ListWrapper>
      {items?.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ListWrapper>
  );
};

export default ItemList;

const ListWrapper = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  list-style-type: none;  /* 기본 점 제거 */
  font-size: 20px;

  &::before {
    content: "•";
    color: lightblue;  // 점 색상만 적용
    margin-right: 8px;  // 텍스트와 점 사이의 간격 추가
  }
`;
