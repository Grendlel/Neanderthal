import React from "react"
import { SAside } from "./styles";
export interface ICard {
    data: string
    titulo: string
    mensagem: string
}
export const Card = ({ data, titulo, mensagem }: ICard) => {
    return (
        <SAside>
            <h3>
                <strong>Data: </strong> {data}
            </h3>
            <h4>Título: {titulo}</h4>
            <p>Mensagem: {mensagem}</p>
        </SAside>
    );
};