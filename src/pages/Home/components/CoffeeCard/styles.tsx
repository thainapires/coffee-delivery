import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 16rem;
    height: 20rem;
    
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
    margin-top: 1.75rem;
    margin-bottom: 1rem;

    background-color: ${(props) => props.theme['base-card']};

    img{
        width: 7.5rem;
        margin-top: calc(0px - 1.5rem - 6px);
    }

    h5{
        font-family: 'Baloo 2', cursive;
        margin-top: 1.5rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
`;

export const Description = styled.div`
    font-size: 0.875rem;
    text-align: center;
    max-width: 13.5rem;
    margin-top: 0.3rem;

    color: ${(props) => props.theme['base-label']};
`;

export const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-top: 1rem;
    
    span {
        font-size: 0.625rem;
        font-weight: bold;
        color: ${(props) => props.theme['yellow-dark']};
        background-color: ${(props) => props.theme['yellow-light']};
        padding: 0.25rem 0.5rem;
        border-radius: 8px;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    max-width: 13.5rem;
`;

export const PriceContainer = styled.div`
    strong {
        font-family: 'Baloo 2', cursive;
        font-size: 1rem;
    }
    color: ${(props) => props.theme['base-text']};
`;

export const SelectToCartContainer = styled.div`
    padding: 0.4rem 0.1rem 0.4rem 0.1rem;
    border-radius: 8px;

    background-color: ${(props) => props.theme['base-button']};

    span {
        padding: 0.5rem;
        cursor: pointer;
        color: ${(props) => props.theme['purple']};
    }
`;


export const ButtonAddToCart = styled.button`

    border: 0;
    
    span{
        width: 2rem;
        height: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.375rem;
        background-color: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme['white']};
        cursor: pointer;
    }
`;