import {
     Accordion,
     AccordionButton,
     AccordionIcon,
     AccordionItem,
     AccordionPanel,
     Box,
     Button,
     ButtonGroup,
     Checkbox,
     HStack,
     IconButton,
     Radio,
     RadioGroup,
     Select,
     Stack,
     Text,
     VStack,
} from "@chakra-ui/react";
import { material } from "../utils/material";
import { colors } from "../utils/color";

import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { minPrice } from "../utils/minPrice";
import { maxPrice } from "../utils/maxPrice";
import { designers } from "../utils/designers";
import Colorbutton from "./Colorbutton";
import { stores } from "../utils/stores";
import { useSearchParams } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";

const colorPrimaryStyles = {
     backgroundColor: "brand.primary",
     border: "1px solid",
     borderColor: "brand.primary",
     color: "white",
};

const FilterSection = () => {
     const [query, setQuery] = useState("");
     const [store, setStore] = useState("");
     const [suggestions, setSuggestions] = useState([]);
     const [newSuggestions, setNewSuggestions] = useState([]);
     const queryHandler = useCallback((val) => {
          setQuery(val);
     }, []);
     const queryFromStore = useCallback((val) => {
          setStore(val);
     }, []);

     const [searchParams, setSearchParams] = useSearchParams();
     const [category, setCategory] = useState("");
     const [gender, setGender] = useState("");
     const [sale, setSale] = useState("");

     useEffect(() => {
          let params = {};
          category && (params.category = category);
          gender && (params.gender = gender);
          sale && (params.sale = sale);
          setSearchParams(params);
     }, [category, setSearchParams, gender, sale]);

     useEffect(() => {
          if (query === "" && store === "") {
               setSuggestions([]);
               setNewSuggestions([]);
          } else {
               let textQuery = query.trim().toLocaleLowerCase();
               let storeQuery = store.trim().toLocaleLowerCase();
               if (textQuery !== "") {
                    let myNewSuggestions = designers
                         .filter((item) => {
                              return item.label
                                   .toLowerCase()
                                   .indexOf(textQuery) !== -1
                                   ? true
                                   : false;
                         })
                         .map((item) => item.label);
                    setSuggestions(myNewSuggestions);
               }
               if (storeQuery !== "") {
                    let storeSuggestions = stores
                         .filter((item) => {
                              return item.label
                                   .toLowerCase()
                                   .indexOf(storeQuery) !== -1
                                   ? true
                                   : false;
                         })
                         .map((item) => item.label);
                    setNewSuggestions(storeSuggestions);
               }
          }
     }, [query, store]);

     const handleClear = () => {
          setGender("");
          setCategory("");
          setSale("");
     };
     const [totalFilters, setTotalFilters] = useState([]);

     useEffect(() => {
          for (const entry of searchParams.entries()) {
               const [param, value] = entry;
               console.log(param, value);
               setTotalFilters(value);
          }
     }, [setSearchParams]);
     return (
          <Box>
               {/* Filter and Clear */}
               <HStack p="2" justify={"space-between"}>
                    <Text as={"h6"}>Filters</Text>
                    <Text as={"h6"} onClick={() => handleClear()}>
                         Clear all
                    </Text>
               </HStack>
               {/* Vertical Menu */}
               <VStack>
                    {/* No filter apply */}

                    <HStack p="3" bg={"#F5F4F2"}>
                         <Button>{gender !== "" ? gender : ""}</Button>
                         <Button>{sale !== "" ? sale : ""}</Button>
                         <Button>
                              {category !== ""
                                   ? category
                                   : "No filters applied"}
                         </Button>
                    </HStack>

                    {/* Accordion */}

                    <Accordion
                         //  border={"1px solid red"}
                         width="350px"
                         allowToggle
                    >
                         {/* gender Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Gender
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <RadioGroup
                                        onChange={setGender}
                                        value={gender}
                                   >
                                        <Stack direction="column">
                                             <Radio value="women">
                                                  Women's
                                             </Radio>
                                             <Radio value="mens">Men's</Radio>
                                        </Stack>
                                   </RadioGroup>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Category Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Category
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <RadioGroup
                                        onChange={setCategory}
                                        value={category}
                                   >
                                        <Stack direction="column">
                                             <Radio value="Clothing">
                                                  Clothing
                                             </Radio>
                                             <Radio value="Shoes">Shoes</Radio>
                                             <Radio value="Accessories">
                                                  Accessories
                                             </Radio>
                                             <Radio value="Bags">Bags</Radio>
                                             <Radio value="Jewelry">
                                                  Jewelry
                                             </Radio>
                                             <Radio value="Home">Home</Radio>
                                        </Stack>
                                   </RadioGroup>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Sale Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Sale
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <RadioGroup onChange={setSale} value={sale}>
                                        <Stack direction="column">
                                             <Radio value="">On sale</Radio>
                                             <Radio value="20">
                                                  20% off or more
                                             </Radio>
                                             <Radio value="40">
                                                  50% off or more
                                             </Radio>
                                             <Radio value="70">
                                                  70% off or more
                                             </Radio>
                                        </Stack>
                                   </RadioGroup>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Price Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Price
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <HStack direction="column">
                                        <Box>
                                             <label htmlFor="Min-price">
                                                  Min price
                                             </label>
                                             <Select placeholder="$0">
                                                  {minPrice.map(
                                                       (item, index) => (
                                                            <option
                                                                 key={index}
                                                                 value={
                                                                      item.value
                                                                 }
                                                            >
                                                                 {item.label}
                                                            </option>
                                                       )
                                                  )}
                                             </Select>
                                        </Box>
                                        <Box>
                                             <label htmlFor="Max price">
                                                  Max price
                                             </label>
                                             <Select placeholder=" $1000">
                                                  {maxPrice.map(
                                                       (item, index) => (
                                                            <option
                                                                 key={index}
                                                                 value={
                                                                      item.value
                                                                 }
                                                            >
                                                                 {item.label}
                                                            </option>
                                                       )
                                                  )}
                                             </Select>
                                        </Box>
                                   </HStack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* shipping Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Shipping
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        <Checkbox>Free shipping</Checkbox>
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Color Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Color
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="row" wrap={"wrap"}>
                                        {colors?.map((item) => (
                                             <ButtonGroup
                                                  size="sm"
                                                  isAttached
                                                  variant="outline"
                                             >
                                                  <Button>{item.name}</Button>
                                                  <IconButton
                                                       bg={item.value}
                                                       aria-label="Add to friends"
                                                  />
                                             </ButtonGroup>
                                        ))}
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Material Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Material
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        {material.map((item, index) => (
                                             <Checkbox
                                                  key={index}
                                                  value={item.value}
                                             >
                                                  {item.label}
                                             </Checkbox>
                                        ))}
                                        {/* <Checkbox></Checkbox> */}
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Designers Accordion */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Designers
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        <SearchBar
                                             queryHandler={queryHandler}
                                             suggestions={suggestions}
                                        />
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                         {/* Stores AccordionItem */}
                         <AccordionItem>
                              <h2>
                                   <AccordionButton>
                                        <Box
                                             as="span"
                                             flex="1"
                                             textAlign="left"
                                             fontWeight={"bold"}
                                        >
                                             Stores
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                   <Stack direction="column">
                                        <SearchBar
                                             queryHandler={queryFromStore}
                                             suggestions={newSuggestions}
                                             // placeholder="Search for store"
                                        />
                                   </Stack>
                              </AccordionPanel>
                         </AccordionItem>
                    </Accordion>
               </VStack>
          </Box>
     );
};

export default FilterSection;
