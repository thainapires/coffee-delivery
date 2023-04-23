import { useContext, useEffect, useState } from "react";
import { AddressInfo, ContentSelectCoffees, InputsContainer, MainContainer, OrderInformationContainer, PaymentInfo, PlaceOrderContainer, SelectedCoffeesContainer } from "./styles";
import { MapPinLine, CurrencyDollar, Bank, CreditCard, Money } from 'phosphor-react';
import { CartContext } from "../../contexts/CartContext";
import { CoffeeCardCheckout } from "./CoffeeCardCheckout";

export function Checkout() {

    const { cart, totalQuantityOfItems, totalOfOrder, calculateOrderTotal } = useContext(CartContext)

    return (
        <MainContainer>
            <OrderInformationContainer>
                <h5>Complete seu pedido</h5>
                <AddressInfo>
                    <div>
                        <span><MapPinLine size={16} /></span>
                        <div>
                            <h6>Endereço de Entrega</h6>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <InputsContainer>
                        <input type="text" name="name" placeholder="CEP" />
                        <input type="text" name="name" placeholder="Rua" />
                        <input type="text" name="name" placeholder="Número" />
                        <input type="text" name="name" placeholder="Complemento" />
                        <input type="text" name="name" placeholder="Bairro" />
                        <input type="text" name="name" placeholder="Cidade" />
                        <input type="text" name="name" placeholder="UF" />
                    </InputsContainer>

                </AddressInfo>
                <PaymentInfo>
                    <div>
                        <span><CurrencyDollar size={16} /></span>
                        <div>
                            <h6>Pagamento</h6>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>
                </PaymentInfo>
            </OrderInformationContainer>
            <SelectedCoffeesContainer>
                <h5>Cafés selecionados</h5>
                <ContentSelectCoffees>
                    {cart.map(coffee => {
                        return (
                            <CoffeeCardCheckout itemCartData={coffee}/>
                        )
                    })}
                    <PlaceOrderContainer>
                        <div>
                            <p>Total de itens</p>
                            <span>{totalOfOrder}</span>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <span>R$0,00</span>
                        </div>
                        <div>
                            <strong>Total</strong>
                            <strong>{totalOfOrder}</strong>
                        </div>
                        <button type="button">CONFIRMAR PEDIDO</button>
                    </PlaceOrderContainer>
                </ContentSelectCoffees>
            </SelectedCoffeesContainer>
        </MainContainer>
    )
}