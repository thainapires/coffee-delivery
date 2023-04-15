import { CartAndLocationContainer, HeaderContainer, LocationContainer } from "./styles";
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header(){
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
                <NavLink to="/cart" title="Carrinho">
                    <ShoppingCart weight="fill" size={22}/>
                </NavLink>
            </CartAndLocationContainer>
        </HeaderContainer>
    )
}