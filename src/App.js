import React, { Component } from "react"
import proList from "./data/produtos.json"
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Body, ListCarrinho, ListContainer, TextoCarrinho } from "./style";
import { Filters } from "./components/Filters";
import { Carrinho} from "./components/Carrinho";

export class App extends Component {

   state = {
      produtos: proList,
      query: "",
      minValue: "",
      maxValue: "",
      sortingParameter: "name",
      order: 1
   }

   updateQuery = (ev) => {
      this.setState({
         query: ev.target.value
      })
   }

   updateMinValue = (ev) => {
      this.setState({
         minValue: ev.target.value
      })
   }

   updateMaxValue = (ev) => {
      this.setState({
         maxValue: ev.target.value
      })
   }

   updateSortingParameter = (ev) => {
      this.setState({
         sortingParameter: ev.target.value
      })
   }

   updateOrder = (ev) => {
      this.setState({
         order: ev.target.value
      })
   }

   render() {
      return <>
         <Header />

         <Filters
            query={this.state.query}
            updateQuery={this.updateQuery}
            updateMinValue={this.updateMinValue}
            updateMaxValue={this.updateMaxValue}
            updateSortingParameter={this.updateSortingParameter}
            updateOrder={this.updateOrder}
            minValue={this.state.minValue}
            maxValue={this.state.maxValue}
            sortingParameter={this.state.sortingParameter}
            order={this.state.order}
         />

         <Body>
         <ListContainer>
            {this.state.produtos
               .filter(produtos => {
                  return produtos.name.toLowerCase().includes(this.state.query.toLowerCase())
               })
               .filter(produtos => {
                  return this.state.minValue === "" || produtos.value >= this.state.minValue
               })
               .filter(produtos => {
                  return this.state.maxValue === "" || produtos.value <= this.state.maxValue
               })
               .sort((atual, proximo) => {
                  switch (this.state.sortingParameter) {
                     case "name":
                        return this.state.order * atual.name.localeCompare(proximo.name)
                     default:
                        return this.state.order * (atual.value - proximo.value)
                  }
               })
               .map(produtos => {
                  return <Card key={produtos.id} produtos={produtos} />
               })}
         </ListContainer>
         <ListCarrinho>
            <TextoCarrinho>Carrinho</TextoCarrinho>
            <TextoCarrinho>&#128722;</TextoCarrinho>
               <Carrinho/>
         </ListCarrinho>
         </Body>
      </>
   }
}