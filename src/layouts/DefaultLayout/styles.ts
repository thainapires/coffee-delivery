import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;

  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`