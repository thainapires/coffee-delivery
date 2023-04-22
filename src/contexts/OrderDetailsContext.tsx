import { ReactNode, createContext, useReducer, useState } from "react"

interface OrderDetailsType {
    cep: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    uf: string;
}

interface OrderDetailsContextType {
    orderDetails: OrderDetailsType;
    changeAddress(key: string, value: string): void;
}

export const OrderDetailsContext = createContext({} as OrderDetailsContextType)
interface OrderDetailsContextProviderProps {
    children: ReactNode
}

export function OrderDetailsContextProvider({
    children,
}: OrderDetailsContextProviderProps) {

    const [orderDetails, setOrderDetails] = useState<OrderDetailsType>({
      cep: "",
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      uf: "",
    });
  
    function changeAddress(key: string, value: string) {
        
    }

    return (
        <OrderDetailsContext.Provider value={
            { 
                orderDetails,
                changeAddress
            }
        }>
          {children}
        </OrderDetailsContext.Provider>
    )
}
