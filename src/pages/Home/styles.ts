import styled from "styled-components";

export const HomeContainer = styled.main`
`;

export const ContentContainer = styled.div`
    display: flex;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        img {
            display: none;
        }
    }

    color: #272221;
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
      color: white;
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.1rem;
    }
    
`;

export const TextContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        line-height: 130%;
        padding-bottom: 1rem; 
    }

    h5{
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.3;
        padding-bottom: 3rem;
    }

`;

export const CoffeesContainer = styled.div`
    padding-top: 4rem;

    h3 {
        font-family: 'Baloo 2', cursive;
        line-height: 1.3;
        font-size: 2rem;

    }
`;