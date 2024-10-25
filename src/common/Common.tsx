import styled from "styled-components";

type FontProps = {
    ftsize: number
    ftHeight?: number
    ftWeight?: string
    ftColor?: string
    bgColor?: string
    bxSize?: number
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
    display: flex;
    justify-content: center;
    border-radius: 5px;
    padding : 5px;

    width: ${({ bxSize }) => `${bxSize}px`};
    font-size: ${({ ftsize }) => `${ftsize}px`};
    font-weight: ${({ ftWeight }) => `${ftWeight}`};
    color: ${({ ftColor }) => `${ftColor}`};
    background-color: ${({ bgColor }) => `${bgColor}`};
`