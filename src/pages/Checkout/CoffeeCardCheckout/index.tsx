import { useContext } from "react";
import { ButtonsContainer, CardContainer, Content, Details, Price, SelectToCartContainer } from "./styles";
import { Trash } from 'phosphor-react';
import { CartContext } from "../../../contexts/CartContext";

export function CoffeeCardCheckout(props: any) {

    const { removeItemFromCart, increaseQuantityById, decreaseQuantityById } = useContext(CartContext)
    
    function increaseValue(id: string){
        increaseQuantityById(id)
    }

    function decreaseValue(id: string){
        decreaseQuantityById(id)
    }

    function handleRemoveItemFromCart(id: string){
        removeItemFromCart(id)
    }

    const priceInReal = new Intl.NumberFormat("pt-BR", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }).format(props.itemCartData.priceInCents * props.itemCartData.quantity / 100);

    return (
        <CardContainer>
            <Content>
                <img src={props.itemCartData.image} alt="" />
                <Details>
                    <p>{props.itemCartData.title}</p>
                    <ButtonsContainer>
                        <SelectToCartContainer>
                            <span onClick={() => decreaseValue(props.itemCartData.id)}>-</span>
                            <span>{props.itemCartData.quantity}</span>
                            <span onClick={() => increaseValue(props.itemCartData.id)}>+</span>
                        </SelectToCartContainer>
                        <button onClick={() => handleRemoveItemFromCart(props.itemCartData.id)}><Trash size={16}/>REMOVER</button>
                    </ButtonsContainer>
                </Details>
                <Price>
                    R$ <strong>{priceInReal}</strong>
                </Price>
            </Content>
            <hr/>
        </CardContainer>
    )
}