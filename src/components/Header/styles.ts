import styled from 'styled-components'

export const Badge = styled.span`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
  
  font-size: ${(props) => props.theme.textSizes['text-bold-s']};
  font-weight: 700;
  
  width: 1.25rem;
  height: 1.25rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 100px;
  margin-top: -2rem;
  margin-left: -1.5rem;
`

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.background};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  /*position: fixed; TODO: make header fied */

`

export const CartAndLocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a{
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      width: 2.375rem;
      height: 2.375rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 6px;
  }
`

export const LocationContainer = styled.span`
  svg {
    color: ${(props) => props.theme['purple']};
  }

  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
  
  width: 8.938rem;
  height: 2.375rem;

  font-size: ${(props) => props.theme.textSizes['text-regular-s']};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

`