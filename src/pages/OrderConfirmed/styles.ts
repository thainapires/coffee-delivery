import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;

    h5{
        color: ${(props) => props.theme["yellow-dark"]};
        font-size: ${(props) => props.theme.textSizes["title-title-l"]};
        font-family: ${(props) => props.theme.fonts.title};
    }

    h6{
        font-size: ${(props) => props.theme.textSizes["text-regular-l"]};
        font-weight: 400;
    }

`;

export const ContentContainer = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardContainer = styled.main`
    width: 32.87rem;
    height: 16.875rem;
    background-color: red;
    border-width: 1.5px;
    border-style: solid;
    border-color: ${(props) => props.theme.yellow};
    //border-image: linear-gradient(to right, ${(props) => props.theme.yellow}, ${(props) => props.theme.purple}) 1;
    background: ${(props) => props.theme.background};
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    justify-content: center;
`;

export const CardItem = styled.main`
    display: flex;
    gap: 0.75rem;
    span{
        width: 2rem;
        height: 2rem;
        background-color: ${(props) => props.theme.yellow};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        color: white;
    }
    div{
        font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
    }
`;