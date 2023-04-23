import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { produce } from "immer";

export interface Coffee {
    id: string;
    title: string;
    image: string;
    tags: string[];
    description: string;
    priceInCents: number;
}

interface CartItem extends Coffee{
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    totalQuantityOfItems: number;
    addToCart: (data: Coffee, quantity: number) => void;
    changeQuantityOfItemById (itemId: string, type: "increase" | "decrease"): void;
    removeItemFromCart(itemId: string): void;
    totalOfOrder: number;

    calculateOrderTotal(): number;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({
    children,
}: CartContextProviderProps) {

    const [cart, setCart] = useState<CartItem[]>([])
    const totalQuantityOfItems = cart.length;

    function addToCart(data: Coffee, quantity: number){
        const checkCoffeeInCart = cart.findIndex(
            (cartItem) => cartItem.id === data.id
        );

        const newCartItem: CartItem = {
            id: data.id,
            title: data.title,
            image: data.image,
            tags: data.tags,
            description: data.description,
            priceInCents: data.priceInCents,
            quantity: quantity,
        }

        const newCart = produce(cart, (draft) => {
            if(checkCoffeeInCart < 0) {
                draft.push(newCartItem);
            }else{
                draft[checkCoffeeInCart].quantity += newCartItem.quantity;
            }
        })

        setCart(newCart);
    }

    function changeQuantityOfItemById(itemId: string, type: "increase" | "decrease" ){
        const newCart = produce(cart, (draft) => {
            const checkCoffeeInCart = cart.findIndex(
                (cartItem) => cartItem.id === itemId
            );

            if (checkCoffeeInCart >= 0) {
                const item = draft[checkCoffeeInCart];
                draft[checkCoffeeInCart].quantity = 
                    type === "increase"? item.quantity + 1 : item.quantity - 1;
            }
        })
        setCart(newCart);
    }

    function removeItemFromCart(itemId: string){

        const newCart = produce(cart, (draft) => {
            const checkCoffeeInCart = cart.findIndex(
                (cartItem) => cartItem.id === itemId
            );

            if(checkCoffeeInCart >= 0) {
                draft.splice(checkCoffeeInCart, 1);
            }
        })

        setCart(newCart);
    }

    /*TODO: check two above */
    function calculateOrderTotal(){
        const initialValue = 0;
        const sumWithInitial = cart.reduce(
            (accumulator, currentValue) => currentValue.priceInCents + accumulator,
            initialValue
        );

        return sumWithInitial;
    } 

    const totalOfOrder = cart.reduce((total, cartItem) => {
        return total + (cartItem.priceInCents * cartItem.quantity);
    }, 0);

    return (
        <CartContext.Provider value={
            { 
                addToCart, 
                cart, 
                totalQuantityOfItems, 
                changeQuantityOfItemById, 
                removeItemFromCart,
                calculateOrderTotal,
                totalOfOrder
            }
        }>
          {children}
        </CartContext.Provider>
    )
}