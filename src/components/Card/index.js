import { CardContainer, CardFooter, CardPhoto } from "./style";
import React from "react";

export function Card(props) {
   const adicionarItemAoCarrinho = () => {
      localStorage.setItem(props.produtos.id,JSON.stringify(props.produtos));
      window.location.reload();
    };
   return <CardContainer>
      <h2 name={props.produtos.name}>
         <u >{props.produtos.name} </u>
      </h2>
      <CardPhoto
         src={props.produtos.imageUrl}>
      </CardPhoto>
      <CardFooter>
         <span>R$ {props.produtos.value.toFixed(2).replace(".", ",")}</span>
         <button type="submit" onClick = {adicionarItemAoCarrinho}>Carrinho</button>
      </CardFooter>
   </CardContainer>
}