import styled from "styled-components";

type FontProps = {
    ftsize: number
    ftHeight?: number
    ftWeight?: string
    ftColor?: string
    bgColor?: string
}

export const CustomFont = styled.div<FontProps>`
    line-height: ${({ ftHeight }) => `${ftHeight}px`};
    font-size: ${({ ftsize }) => `${ftsize}px`};
    font-weight: ${({ ftWeight }) => `${ftWeight}`};
    color: ${({ ftColor }) => `${ftColor}`};
`

export const ContentsWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const FontBox = styled.div<FontProps>`
    display: inline-flex; /* 텍스트 길이에 따라 너비를 조절 */
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 5px;

    font-size: ${({ ftsize }) => `${ftsize}px`};
    font-weight: ${({ ftWeight }) => `${ftWeight}`};
    color: ${({ ftColor }) => `${ftColor}`};
    background-color: ${({ bgColor }) => `${bgColor}`};

    word-break: keep-all; /* 줄바꿈을 방지하고, 필요한 경우만 줄바꿈 */
    text-align: center;
`;

