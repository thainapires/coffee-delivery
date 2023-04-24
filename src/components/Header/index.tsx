import { Badge, CartAndLocationContainer, HeaderContainer, LocationContainer } from "./styles";
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from 'phosphor-react';
import { CartContext } from "../../contexts/CartContext";
import { useContext } from 'react';

export function Header(){

    const { totalQuantityOfItems } = useContext(CartContext)

    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={logoCoffeeDelivery} alt="" />
            </NavLink>
            <CartAndLocationContainer>
                <LocationContainer>
                    <MapPin weight="fill" size={22} />
                    Rio de Janeiro, RJ
                </LocationContainer>
                <NavLink to="/checkout" title="Carrinho">
                    <ShoppingCart weight="fill" size={22}/>
                </NavLink>
                { totalQuantityOfItems > 0 ? <Badge>{totalQuantityOfItems}</Badge> : ''}
            </CartAndLocationContainer>
        </HeaderContainer>
    )
}