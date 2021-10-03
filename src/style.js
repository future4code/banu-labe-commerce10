import styled from "styled-components";

export const Body = styled.body`
display: Flex;
`
export const ListContainer = styled.div`
   display: Flex;
   justify-content: space-between;
   flex-wrap:wrap;
   *{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
   background-color: darkblue;
`

export const FiltersContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap:wrap;
   background-color: darkblue;
   color: white;
`

export const ListCarrinho = styled.div`
   background-color: silver;
`
export const TextoCarrinho = styled.h1`
   color: blue;
   text-align: center;
`