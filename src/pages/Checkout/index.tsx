import { useContext, useEffect, useState } from "react";
import { AddressInfo, ContentSelectCoffees, InputsContainer, MainContainer, OrderInformationContainer, PaymentInfo, PlaceOrderContainer, SelectedCoffeesContainer } from "./styles";
import { MapPinLine, CurrencyDollar, Bank, CreditCard, Money } from 'phosphor-react';
import { CartContext } from "../../contexts/CartContext";
import { CoffeeCardCheckout } from "./CoffeeCardCheckout";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const deliveryPrice = 350;

const orderValidationSchema = zod.object({
    cep: zod.string().length(8, 'Digite um CPF válido'),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().length(2, "Informe a UF"),
})

type NewOrderFormData = zod.infer<typeof orderValidationSchema>

export function Checkout() {

    const { register, handleSubmit, watch, reset } = useForm<NewOrderFormData>({
        resolver: zodResolver(orderValidationSchema),
        defaultValues: {
            cep: '',
        }
    }) 

    const { cart, totalQuantityOfItems, totalOfOrder, calculateOrderTotal } = useContext(CartContext)

    function handleCreateNewOrder(data: any){
        console.log('Handle Submit');
        console.log(data);
    }

    return (
        
        <form onSubmit={handleSubmit(handleCreateNewOrder)}>
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
                            <input type="text" id="cep" placeholder="CEP" {...register('cep')}/>
                            <input type="text" id="street" placeholder="Rua" {...register('street')}/>
                            <input type="text" id="number" placeholder="Número" {...register('number')}/>
                            <input type="text" id="complement" placeholder="Complemento" {...register('complement')}/>
                            <input type="text" id="district" placeholder="Bairro" {...register('district')} />
                            <input type="text" id="city" placeholder="Cidade" {...register('city')}/>
                            <input type="text" id="uf" placeholder="UF" {...register('uf')}/>
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
                        <nav>
                            <input type="radio" id="x1" name="x"/>
                            <label htmlFor="x1"><CreditCard/> CARTÃO DE CRÉDITO</label>
                            
                            <input type="radio" id="x2" name="x"/>
                            <label htmlFor="x2"><Bank/> CARTÃO DE DÉBITO</label>
                            
                            <input type="radio" id="x3" name="x"/>
                            <label htmlFor="x3"><Money/> DINHEIRO</label>
                        </nav>
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
                                <span>R${totalOfOrder}</span>
                            </div>
                            <div>
                                <p>Entrega</p>
                                {totalOfOrder > 0 ? <span>R${deliveryPrice}</span> : <span>R$0,00</span>}
                            </div>
                            <div>
                                <strong>Total</strong>
                                {totalOfOrder > 0 ? <strong>R${totalOfOrder + deliveryPrice}</strong> : <strong>R${totalOfOrder}</strong>}
                            </div>
                            <button type="submit">CONFIRMAR PEDIDO</button>
                        </PlaceOrderContainer>
                    </ContentSelectCoffees>
                </SelectedCoffeesContainer>
            </MainContainer>
        </form>
    )
}