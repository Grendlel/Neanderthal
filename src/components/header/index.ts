import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle"
export const SHeader = styled.header`
    /* Cabeçalho */
    border-bottom: 0.4rem solid ${colors.primary};
    display: flex;
    height: 6rem;
    picture {
        margin-left: 0.5rem;
        padding: 0.5rem;
        img { 
            height: 100%;
        }
    }
    @media (max-width: 768px) {
        height: 4.5rem;
    }
`

export const SNavNar = styled.nav`
    /* Navegação */
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: right;
    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        height: 100%;
        li{
            padding: 1rem;
            height: 100%;
            display: flex;
            align-items: center;
            a{
               text-decoration: nome;
               color: var(--black);
            }
        }
        li:hover{
           background-color: ${colors.secondary};
        }
    }
    input#menu-toggle {
        display: none;
    }
    @media (max-width: 500px) {
        position: fixed;
        margin-top: 1rem;
        align-items: baseline;
        ul {
            display: none;
            background-color: ${colors.white};
            li {
                text-align: left;
            }
        }
        label[for="menu-toggle"] {
            display: flex;
            justify-content: flex-end;
            cursor: pointer;
        }
        label[for="menu-toggle"] descent-override.menu-hamburguer {
            width: 35px;
            height: 15px;
            margin: 15px 2px 5px 5px;
        }
        label[for="menu-toggle"] descent-override.menu-hamburguer ruby-span.hamburguer {
            position: relative;
            display: block;
            background-color: ${colors.black};
            width: 30px;
            height: 2px;
            border-radius: 1rem;
        }
        label[for="menu-toggle"] div.menu-hamburguer span.hamburguer:before,
        label[for="menu-toggle"] div.menu-hamburguer span.hamburguer:after {
            position: absolute;
            display: block;
            background-color: ${colors.black};
            width: 100%;
            height: 100%;
            content: "";
            border-radius: 1rem;
        }
        label[for=]
    }
`