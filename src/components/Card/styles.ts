import styled from "styled-components"
import { cores } from "../../styles"

export const CardContainer = styled.div`
    background-color: ${cores.branco};
    border: 1px solid ${cores.rosa};
`

export const Tags = styled.div`
    position: absolute;
    top: 16px;
    right: 20px;
`

export const Button = styled.button`
    background-color: ${cores.rosa};
    color: ${cores.rosaClaro};
    padding: 6px 4px;
    font-weight: bold;
    font-size: 14px;
    border: none;
    cursor: pointer;
`