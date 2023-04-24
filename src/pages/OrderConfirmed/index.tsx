import { CardContainer, CardItem, ContentContainer, MainContainer } from "./styles";
import orderConfirmed from '../../assets/order-confirmed.svg'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';

export function OrderConfirmed() {
    return (
        <MainContainer>
            <h5>Uhu! Pedido confirmado</h5>
            <h6>Agora é só aguardar que logo o café chegará até você</h6>
            <ContentContainer>
                <CardContainer>
                    <CardItem>
                        <span><MapPin weight="fill"/></span>
                        <div>
                            <p>Entrega em Rua X, 102 Farrapos - Porto Alegre, RS</p>
                        </div>
                    </CardItem>
                    <CardItem>
                        <span><Clock weight="fill"/></span>
                        <div>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min</strong></p>
                        </div>
                    </CardItem>
                    <CardItem>
                        <span><CurrencyDollar weight="fill"/></span>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p><strong>Cartão de Crédito</strong></p>
                        </div>
                    </CardItem>
                </CardContainer>
                <img src={orderConfirmed} alt="" />
            </ContentContainer>
        </MainContainer>
    )
}