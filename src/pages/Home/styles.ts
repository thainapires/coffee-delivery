import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

export const IntroContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1200px) {
        img {
            display: none;
        }
    }
`;

export const TextContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;

    h1{
        padding-bottom: 1rem; 
        color: ${(props) => props.theme['base-title']};
    }

    h5{
        font-weight: 400;
        padding-bottom: 2rem;
        color: ${(props) => props.theme['base-subtitle']};
    }

`;

export const Advantages = styled.div`

    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    grid-template-rows: auto;

    div {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.1rem;
        font-size: 1rem;

        color: ${(props) => props.theme['base-text']};
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;

        border-radius: 100px;

        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['white']};
    }
`;

export const OurCoffesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 4rem;

    h3 {
        font-family: 'Baloo 2', cursive;
        color: ${(props) => props.theme['base-title']};
    }
`;

export const CoffeesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-template-rows: auto;
`;