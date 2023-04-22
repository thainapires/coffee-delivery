import styled, { css, ThemedStyledProps, ThemeProps } from 'styled-components';


export const MainContainer = styled.main`
    display: flex;
    gap: 2rem;
    
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const OrderInformationContainer = styled.div`
    max-width: 40rem;

    @media (max-width: 1200px) {
        max-width: 100%;
    }

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h5{
        font-family: 'Baloo 2', cursive;
        font-size: 1.125rem;
        line-height: 130%;
    }

`;

export const AddressInfo = styled.div`

    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem 2.5rem 2.5rem 2.5rem;

    input{
        background-color: ${(props) => props.theme['base-input']};
        border: none;
        border: ${(props) => props.theme['base-button']};
        border-radius: 3px;
        padding: 0.75rem;
        margin-bottom: 1rem;
    }

    div{
        display: flex;
        gap: 0.3rem;

        h6{
            font-size: 1rem;
        }

        p{
            font-size: 0.85rem;
        }

        div {
            display: flex;
            flex-direction: column;
        }

        span{
            color: ${(props) => props.theme['yellow-dark']};

            svg {
                height: 1.375rem;
            }
        }
        
    }
`;

export const InputsContainer = styled.main`
    display: grid;
    grid-template-columns: 12.5rem 1fr 3.75rem;
    padding-top: 1rem;
    grid-column-gap: 0.75rem;

    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
    }

    > input {
        :nth-child(2) {
            grid-column: 1 / 4;
        }
        
        :nth-child(4) {
            grid-column: 2 / 4;
        }
    }
`;

export const PaymentInfo = styled.div`

    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem 2.5rem 2.5rem 2.5rem;
    margin-bottom: 2rem;

    div {
        display: flex;
        gap: 0.3rem;

        div {
            display: flex;
            flex-direction: column;
        }

        h6{
            font-size: 1rem;
        }

        p{
            font-size: 0.85rem;
        }

        span{
            color: ${(props) => props.theme['purple']};

            svg {
                height: 1.375rem;
            }
        }
    }
`;


export const SelectedCoffeesContainer = styled.div`

    display: flex;
    flex-direction: column;

    gap: 0.75rem;
    width: 100%;

    h5{
        font-family: 'Baloo 2', cursive;
        font-size: 1.125rem;
        line-height: 130%;
    }
`;

export const ContentSelectCoffees = styled.div`

    background-color: ${(props) => props.theme['base-card']};
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
`;

export const PlaceOrderContainer = styled.div`

    display: flex;
    flex-direction: column;
    padding: 2.5rem 2.5rem 2.5rem 2.5rem;
    gap: 0.5rem;

    div {
        display: flex;
        justify-content: space-between;

        font-size: 0.875rem;

        strong{
            font-size: 1.25rem;
        }
    }

    button {
        color: ${(props) => props.theme['white']};
        background-color: ${(props) => props.theme['yellow']};
        padding: 1rem;
        border: 0;
        border-radius: 6px;
        margin-top: 1rem;
    }
`;
