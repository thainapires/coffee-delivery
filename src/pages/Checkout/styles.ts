import styled from "styled-components";

export const ButtonGroup = styled.div`


`;

export const OrderInformationContainer = styled.div`
    display: flex;
    flex-direction: column;

    h5{
        font-family: 'Baloo 2', cursive;
        font-size: 1.125rem;
        line-height: 130%;
    }

    padding-right: 1rem;

`;

export const AddressInfo = styled.div`
    background-color: ${(props) => props.theme['base-card']};
    width: 40rem;
    height: 23.25rem;
    margin-bottom: 0.75rem;

    padding: 2.5rem 2.5rem 2.5rem 2.5rem;

    input{
        background-color: ${(props) => props.theme['base-input']};
        border: none;
        border: ${(props) => props.theme['base-button']};
        border-radius: 3px;
        padding: 0.75rem;
        margin-bottom: 1rem;
        margin-right: 1rem;
    }

    div {
        display: flex;

        gap: 0.3rem;

        h6{
            font-size: 1rem;
        }

        p{
            font-size: 0.85rem;
        }

        span{
            color: ${(props) => props.theme['yellow-dark']};

            svg {
                height: 1.375rem;
            }
        }
        div {
            display: flex;
            flex-direction: column;
        }
        
    }
`;

export const InputsContainer = styled.main`
    display: grid;
    grid-template-columns: 12.5rem 1fr 3.75rem;
    padding-top: 1rem;

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
    width: 40rem;
    height: 12.93rem;
    margin-bottom: 2rem;

    padding: 2.5rem 2.5rem 2.5rem 2.5rem;

    div {
        display: flex;

        gap: 0.3rem;

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
        div {
            display: flex;
            flex-direction: column;
        }
        
    }

`;

export const SelectedCoffeesContainer = styled.div`

    h5{
        font-family: 'Baloo 2', cursive;
        font-size: 1.125rem;
        line-height: 130%;
    }
`;

export const MainContainer = styled.main`
    display: flex;
`;

export const ContentSelectCoffees = styled.div`
    width: 28rem;
    height: 31.12rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;

`;

export const PlaceOrderContainer = styled.div`

    div {
        display: flex;
        justify-content: space-between;

        font-size: 0.875rem;

        strong{
            font-size: 1.25rem;
        }
    }

    button {
        color: ${(props) => props.theme['white']};;
        background-color: ${(props) => props.theme['yellow']};
        border: 0;
        padding: 1rem;
        border-radius: 6px;
        margin-top: 1rem;
        
    }

    padding: 2.5rem 2.5rem 2.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem

`;
