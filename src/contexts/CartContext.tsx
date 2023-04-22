import { ReactNode, createContext, useReducer, useState } from "react"

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
    addItensToCart: (data: Coffee, quantity: number) => void;
    increaseQuantityById (itemId: string): void;
    decreaseQuantityById (itemId: string): void;
    removeItemFromCart(itemId: string): void;
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
    const [totalQuantityOfItems, setTotalQuantityOfItems] = useState(0)

    function increaseQuantityById(itemId: string){
        setCart((prevState) => {
            const indexCoffeeSelected = cart.findIndex(
                ({id}) => id === itemId
            );
      
            const newShoppingCartItems: CartItem[] = [
              ...JSON.parse(JSON.stringify(prevState)),
            ];

            newShoppingCartItems[indexCoffeeSelected].quantity += 1;
      
            return newShoppingCartItems;
        });

        setTotalQuantityOfItems(totalQuantityOfItems + 1)
    }

    function calculateOrderTotal(){
        const initialValue = 0;
        const sumWithInitial = cart.reduce(
            (accumulator, currentValue) => currentValue.priceInCents + accumulator,
            initialValue
        );

        return sumWithInitial;

        console.log(sumWithInitial);
    } 

    function decreaseQuantityById(itemId: string){
        setCart((prevState) => {
            const indexCoffeeSelected = cart.findIndex(
                ({id}) => id === itemId
            );
      
            const newShoppingCartItems: CartItem[] = [
              ...JSON.parse(JSON.stringify(prevState)),
            ];

            newShoppingCartItems[indexCoffeeSelected].quantity -= 1;
      
            return newShoppingCartItems;
        });

        setTotalQuantityOfItems(totalQuantityOfItems - 1)
    }

    function addItensToCart(data: Coffee, quantity: number){
        const newCartItem: CartItem = {
            id: data.id,
            title: data.title,
            image: data.image,
            tags: data.tags,
            description: data.description,
            priceInCents: data.priceInCents,
            quantity: quantity,
        }
        setCart((state) => [...state, newCartItem])
        setTotalQuantityOfItems(totalQuantityOfItems + quantity)
    }

    function removeItemFromCart(itemId: string){

        const indexCoffeeSelected = cart.findIndex(
            ({id}) => id === itemId
        );

        const quantity = cart[indexCoffeeSelected].quantity;

        setCart((prevState) => {
            const newCartItems = prevState.filter((coffee) => coffee.id !== itemId)
            return newCartItems;
        })
        setTotalQuantityOfItems(totalQuantityOfItems - quantity)

    }

    return (
        <CartContext.Provider value={
            { 
                addItensToCart, 
                cart, 
                totalQuantityOfItems, 
                increaseQuantityById, 
                decreaseQuantityById,
                removeItemFromCart,
                calculateOrderTotal
            }
        }>
          {children}
        </CartContext.Provider>
    )
}