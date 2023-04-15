import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    a {
        color: ${(props) => props.theme['yellow-light']};
    }
  }
`

export const CartAndLocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a{
      width: 2.375rem;
      height: 2.385rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 6px;

      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
  }
`

export const LocationContainer = styled.span`
  svg {
    color: ${(props) => props.theme['purple']};
  }

  
  color: ${(props) => props.theme['purple-dark']};

  background: ${(props) => props.theme['purple-light']};
  width: 143px;
  height: 38px;

  font-size: 0.875rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

`