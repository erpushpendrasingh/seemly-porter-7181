import { Box, Button, Divider } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import FilterSection from "../Components/FilterSection";
import Productspage from "../Components/Productspage";

const Products = () => {
     return (
          <>
               <ProductPageWrapper>
                    <FilterWrapper>
                         <FilterSection />
                    </FilterWrapper>
                    <ProductWrapper>
                         <Productspage />
                    </ProductWrapper>
               </ProductPageWrapper>
          </>
     );
};
const ProductPageWrapper = styled.div`
     display: flex;
     width: 80%;
     margin: 0 auto;
`;

const FilterWrapper = styled.div`
     background-color: #ffffff;
     width: 350px;
     height: 100vh;
`;
const ProductWrapper = styled.div`
     width: 100%;
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(270px, max-content));
     grid-gap: 10px;
     justify-content: center;
     align-items: center;
`;

export default Products;
