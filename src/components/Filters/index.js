import { FiltersContainer } from "../../style";
import React from "react";

export function Filters(props) {
   return <FiltersContainer>
      <input
         placeholder="Pesquisa"
         value={props.query}
         onChange={props.updateQuery}
      />

      <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minValue}
         onChange={props.updateMinValue}
      />

      <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxValue}
         onChange={props.updateMaxValue}
      />

      <span>
         <label for="sort">Ordenação: </label>
         <select
            name="sort"
            value={props.sortingParameter}
            onChange={props.updateSortingParameter}
         >
            <option value="name">Nome</option>
            <option value="value">Preço</option>
         </select>
      </span>

      <select
         name="order"
         value={props.order}
         onChange={props.updateOrder}
      >
         <option value={1}>Crescente</option>
         <option value={-1}>Decrescente</option>

      </select>

   </FiltersContainer>

}