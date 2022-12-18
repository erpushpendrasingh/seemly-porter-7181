import {
     Box,
     Button,
     Divider,
     Image,
     Table,
     TableCaption,
     TableContainer,
     Tbody,
     Td,
     Text,
     Tfoot,
     Th,
     Thead,
     Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import { deleteProducts, getProduct } from "../Redux/AppReducer/action";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

const AdminDashboard = () => {
     const dispatch = useDispatch();
     const { product } = useSelector((store) => store.AppReducer, shallowEqual);
     const [elem, setElem] = useState(5);
     const deleteHandler = (id) => {
          dispatch(deleteProducts(id)).then(() => dispatch(getProduct()));
     };

     useEffect(() => {
          if (product.length === 0) {
               dispatch(getProduct());
          }
     }, [product.length, dispatch]);
     const loadMore = () => {
          setElem(elem + 10);
     };
     let slicedData = product?.slice(0, elem);
     return (
          <Box maxW={"1500px"}>
               <AdminNavbar />
               <TableContainer width={"90%"} m="auto">
                    <Table variant="striped" colorScheme="teal">
                         <Thead>
                              <Tr>
                                   <Th>Sr.no</Th>
                                   <Th>Brand</Th>
                                   <Th>title</Th>
                                   <Th>gender</Th>
                                   <Th>category</Th>
                                   <Th isNumeric>price</Th>
                                   <Th isNumeric>discount</Th>
                                   <Th>imgurl</Th>
                                   <Th>Delete</Th>
                                   <Th>Update</Th>
                              </Tr>
                         </Thead>
                         <Tbody>
                              {product.length > 0 &&
                                   slicedData?.map((item, index) => {
                                        return (
                                             <Tr key={item.id}>
                                                  <Td>{index + 1}</Td>
                                                  <Td>
                                                       <Text
                                                            inlineSize={"150px"}
                                                            overflow="hidden"
                                                            w={"150px"}
                                                       >
                                                            {item.brand}
                                                       </Text>
                                                  </Td>

                                                  <Td>
                                                       <Text
                                                            inlineSize={"150px"}
                                                            overflow="hidden"
                                                            w={"150px"}
                                                       >
                                                            {item.title}
                                                       </Text>
                                                  </Td>

                                                  <Td>{item.gender}</Td>
                                                  <Td>{item.category}</Td>
                                                  <Td isNumeric>
                                                       ₹{item.price}
                                                  </Td>
                                                  <Td isNumeric>
                                                       {item.discount}%
                                                  </Td>
                                                  <Td>
                                                       <Image
                                                            h="80px"
                                                            src={item.imgurl}
                                                       />
                                                  </Td>
                                                  <Td>
                                                       <Button
                                                            as={Link}
                                                            onClick={() =>
                                                                 deleteHandler(
                                                                      item.id
                                                                 )
                                                            }
                                                       >
                                                            <AiOutlineDelete />
                                                       </Button>
                                                  </Td>
                                                  <Td>
                                                       <Link
                                                            to={`/admin/${item.id}/edit`}
                                                       >
                                                            <Button>
                                                                 <GrUpdate />
                                                            </Button>
                                                       </Link>
                                                  </Td>
                                             </Tr>
                                        );
                                   })}
                         </Tbody>
                         <Tfoot></Tfoot>
                         <TableCaption>
                              <>
                                   Showing {elem} / {product?.length}
                              </>
                              <Divider w={"150px"} m={"auto"} mt={4} mb={4} />
                              <Button onClick={() => loadMore()}>
                                   Load more
                              </Button>
                         </TableCaption>
                    </Table>
               </TableContainer>
          </Box>
     );
};

export default AdminDashboard;
