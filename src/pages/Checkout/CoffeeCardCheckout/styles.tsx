import styled from "styled-components";

export const CardContainer = styled.main`
    padding: 2.5rem 2.5rem 0rem 2.5rem;
    hr {
        background-color: ${(props) => props.theme['base-button']};
    }
`;

export const Content = styled.main`
    display: flex;

    img {
        width: 4rem;
    }
    gap: 2rem;
    padding-bottom: 1.5rem;

`;

export const Details = styled.div`
    p{
        font-size: 1rem;
    }
`;

export const Price = styled.div`


`;


export const ButtonsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    padding-top: 0.5rem;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;

        border: 0;
        border-radius: 6px;

        font-size: 0.75rem;
        padding: 0.5rem;

        background-color: ${(props) => props.theme['base-button']};

        cursor: pointer;
        
        svg{
            color: ${(props) => props.theme['purple']}; 
        }
    }
`;

export const SelectToCartContainer = styled.div`
    background-color: ${(props) => props.theme['base-button']};
    padding: 0.4rem 0.1rem 0.4rem 0.1rem;
    border-radius: 8px;
    span {
        padding: 0.5rem;
        cursor: pointer;
        color: ${(props) => props.theme['purple']};
    }
`;