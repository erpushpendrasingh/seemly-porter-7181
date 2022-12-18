import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
     const { product } = useSelector((store) => store.AppReducer, shallowEqual);

     const [len, setLen] = useState(0);
     useEffect(() => {
          setLen(product.length);
     }, [product.length]);

     return (
          <Box h="50px" width={"90%"} m="auto" display={"flex"}>
               <Box
                    width={"30%"}
                    display={"flex"}
                    justifyContent="space-between"
                    m="auto"
               >
                    <Link to="/">
                         <Button
                              h="50px"
                              mr={2}
                              borderRadius={"none"}
                              colorScheme="blackAlpha"
                         >
                              Back to main site
                         </Button>
                    </Link>
                    <Link to="/admin">
                         <Button
                              h="50px"
                              mr={2}
                              borderRadius={"none"}
                              colorScheme="blackAlpha"
                         >
                              Admin Dashboard
                         </Button>
                    </Link>
                    <Link to="/admin/add">
                         <Button
                              h="50px"
                              borderRadius={"none"}
                              colorScheme="blackAlpha"
                         >
                              Add Products
                         </Button>
                    </Link>
               </Box>
               <Box display={"flex"} w="250px" justifyContent={"space-around"}>
                    <Button
                         h="50px"
                         borderRadius={"none"}
                         colorScheme="blackAlpha"
                    >
                         Total items - {len}
                    </Button>
                    <Button
                         h="50px"
                         borderRadius={"none"}
                         colorScheme="blackAlpha"
                    >
                         Logout
                    </Button>
               </Box>
          </Box>
     );
};

export default AdminNavbar;
