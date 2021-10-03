import React from "react";
import { TextoCarrinho } from "../../style";
import { CardCarrinho} from "../Card/style";


export function Carrinho() {

    var soma = 0;
    
    const esvaziarCarrinho = () => {
        localStorage.clear();
        window.location.reload();
    }
    
    if(localStorage.length){
        let carrinho = [];
        for(let i=0; i<localStorage.length; i++){
            carrinho.push(localStorage.getItem(localStorage.key(i)));
        }
         carrinho = carrinho.map(produto => {
         produto = JSON.parse(produto);
         soma = soma + produto.value;
         return <CardCarrinho>
              <h3 name={produto.name}>
                 <u>{produto.name} </u>
              </h3>
              <span>R$ {produto.value.toFixed(2).replace(".", ",")}</span>
            
       </CardCarrinho>
       });
       return <CardCarrinho>{carrinho}
       <button type="submit" onClick = {esvaziarCarrinho}>Esvaziar Carrinho</button> <h3>Total: R$ {soma.toFixed(2).replace(".", ",")}</h3></CardCarrinho>; 
    }
    else {
        return <TextoCarrinho>Carrinho Vazio</TextoCarrinho>
    }

}