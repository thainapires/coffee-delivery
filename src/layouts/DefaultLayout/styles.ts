import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7rem;

  @media (max-width: 720px) {
    padding: 0 2rem;
  }
`