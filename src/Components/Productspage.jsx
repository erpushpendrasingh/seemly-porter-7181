import {
     Box,
     Button,
     ButtonGroup,
     Divider,
     Flex,
     Spacer,
     VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProduct } from "../Redux/AppReducer/action";
import ProductCard from "./ProductCard";
// import { Link, useLocation, useSearchParams } from "react-router-dom";

const Productspage = () => {
     const location = useLocation();

     const dispatch = useDispatch();
     const [elem, setElem] = useState(12);

     const { product } = useSelector((store) => store.AppReducer);
     const [searchParams] = useSearchParams();

     useEffect(() => {
          if (location || product.length === 0) {
               const saleBy = searchParams.get("sale");
               console.log("saleBy:", saleBy);
               const getProductParams = {
                    params: {
                         category: searchParams.getAll("category"),
                         gender: searchParams.getAll("gender"),
                         sale_gte: saleBy,
                         // _sort: sortBy && "release_year",
                         // _order: sortBy,
                    },
               };
               dispatch(getProduct(getProductParams));
          }
     }, [location.search, product.length, dispatch]);

     const loadMore = () => {
          setElem(elem + 8);
     };
     let slicedData = product?.slice(0, elem);
     return (
          <>
               {product.length > 0 &&
                    slicedData?.map((item) => {
                         return <ProductCard key={item.id} item={item} />;
                    })}
               <Spacer />
               <Box
                    mt={4}
                    mb={4}
                    direction="column"
                    align={"center"}
                    justifyContent={"center"}
               >
                    Showing{" "}
                    {slicedData?.length < elem ? slicedData?.length : elem} /{" "}
                    {product?.length}
                    <Divider w={"150px"} m={"auto"} mt={2} mb={2} />
                    <Button
                         onClick={() => loadMore()}
                         size="md"
                         height="48px"
                         width="200px"
                         border="2px"
                         borderColor="gray.500"
                    >
                         Show more
                    </Button>
               </Box>
          </>
     );
};

export default Productspage;
