import { createGlobalStyle } from 'styled-components'

export const cores = {
    salmao: '#E66767',
    salmaoClaro: '#FFEBD9',
    bege: '#FFF8F2',
    branco: '#fff'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
    }
`