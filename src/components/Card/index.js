import { CardContainer, CardFooter, CardPhoto } from "./style";
import React from "react";

export function Card(props) {
   return <CardContainer>
      <h2 name={props.produtos.name}>
         <u >{props.produtos.name} </u>
      </h2>
      <CardPhoto
         src={props.produtos.imageUrl}>
      </CardPhoto>
      <CardFooter>
         <span>R$ {props.produtos.value.toFixed(2).replace(".", ",")}</span>
         <button type="submit">Carrinho</button>
      </CardFooter>
   </CardContainer>
}