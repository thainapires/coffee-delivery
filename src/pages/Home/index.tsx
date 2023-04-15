import { AdvantagesContainer, CoffeesContainer, ContentContainer, HomeContainer, TextContentContainer } from "./styles";
import CoffeeIllustration from '../../assets/coffee-illustration.png'
import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react';

export function Home() {
    return (
        <HomeContainer>
            <ContentContainer>
                <TextContentContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h5>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h5>
                    <AdvantagesContainer>
                        <div>
                            <span><ShoppingCart size={16} weight="fill"/></span>
                            Compra simples e segura
                        </div>
                        <div>
                            <span><Timer size={16} weight="fill"/></span>
                            Entrega rápida e rastreada
                        </div>
                        <div>
                            <span><Package size={16} weight="fill"/></span>
                            Embalagem mantém o café intacto
                        </div>
                        <div>
                            <span><Coffee size={16} weight="fill"/></span>
                            O café chega fresquinho até você
                        </div> 
                    </AdvantagesContainer>
                </TextContentContainer>
                <img src={CoffeeIllustration} alt="" />
            </ContentContainer>
            <CoffeesContainer>
                <h3>Nossos cafés</h3>
            </CoffeesContainer>
        </HomeContainer>
    )
}