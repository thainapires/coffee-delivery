import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;

        h1{
            font-family: 'Baloo 2', cursive;
            line-height: 130%;
            font-size: 3rem;

             /* Desktop */
            @media (max-width: 1200px) {
                font-size: 2.5rem;

            }

            /* Landscape phones and down */
            @media (max-width: 480px) {
                font-size: 2rem;
            }
        }

        h5{
            line-height: 130%;
            font-size: 1.25rem;

            /* Landscape phones and down */
            @media (max-width: 480px) {
                font-size: 1rem;
            }
        }

        h3 {
            line-height: 1.3;
            font-size: 2rem;
        }

    }
`