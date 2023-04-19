import { useContext, useState } from 'react';
import { ButtonAddToCart, CoffeeCardContainer, Description, FooterContainer, PriceContainer, SelectToCartContainer, TagsContainer } from './styles'
import { ShoppingCart} from 'phosphor-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../../../contexts/CartContext';

export function CoffeeCard(props: any) {

    const [quantity, setQuantity] = useState(0)
    const { addItensToCart } = useContext(CartContext)

    const priceInReal = new Intl.NumberFormat("pt-BR", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }).format(props.coffeeData.priceInCents / 100);

    function decreaseQuantityofCoffees (){
        if(!(quantity-1 < 0)){
            setQuantity(quantity - 1);
        }
    }

    function increaseQuantityofCoffees (){
        setQuantity(quantity + 1);
    }

    function handleAddToCart (){
        //toast.success(quantity + ' iten(s) do ' + props.coffeeData.title + " adicionado(s) ao carrinho com sucesso",{ autoClose: 3000 });
        addItensToCart(props.coffeeData, quantity)
        setQuantity(0);
    }

    return (
        <CoffeeCardContainer>
            <img src={props.coffeeData.image} alt="" />
            <TagsContainer>
                {props.coffeeData.tags.map((tag: any) => (
                    <span>{tag}</span>
                ))}
            </TagsContainer>
            <h5>{props.coffeeData.title}</h5>
            <Description>{props.coffeeData.description}</Description>
            <FooterContainer>
                <PriceContainer>
                    R$ <strong>{priceInReal}</strong>
                </PriceContainer>
                <SelectToCartContainer>
                     <span onClick={decreaseQuantityofCoffees}>-</span>
                     <span>{quantity}</span>
                     <span onClick={increaseQuantityofCoffees}>+</span>
                </SelectToCartContainer>
                <ButtonAddToCart onClick={handleAddToCart}>
                    <span><ShoppingCart size={22} weight="fill"/></span>
                </ButtonAddToCart>
                <ToastContainer />
            </FooterContainer>
        </CoffeeCardContainer>
    )
}