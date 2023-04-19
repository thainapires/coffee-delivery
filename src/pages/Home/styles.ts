import styled from "styled-components";

export const HomeContainer = styled.main`
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1200px) {
        justify-content: center;
        align-items: center;
        text-align: center;

        img {
            display: none;
        }
    }

`;

export const AdvantagesContainer = styled.div`

    span{
      width: 2rem;
      height: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 100px;

      background-color: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme['white']};
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.1rem;
        color: ${(props) => props.theme['base-text']};
        font-size: 1rem;
    }
    
`;

export const TextContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%;

    h1{
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        line-height: 130%;
        padding-bottom: 1rem; 
        color: ${(props) => props.theme['base-title']};
    }

    h5{
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.3;
        padding-bottom: 3rem;
        color: ${(props) => props.theme['base-subtitle']};
    }

`;

export const OurCoffesContainer = styled.div`
    padding-top: 4rem;

    h3 {
        font-family: 'Baloo 2', cursive;
        line-height: 1.3;
        font-size: 2rem;
        color: ${(props) => props.theme['base-title']};
    }
    display: flex;
    flex-direction: column;
`;

export const CoffeesContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
`;