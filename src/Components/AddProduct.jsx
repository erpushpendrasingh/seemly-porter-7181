import {
     Box,
     Button,
     color,
     Heading,
     Input,
     Select,
     Text,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProducts, getProduct } from "../Redux/AppReducer/action";
import AdminNavbar from "./AdminNavbar";

const initialState = {
     brand: "",
     title: "",
     gender: "",
     category: "",
     sale: "",
     price: 0,
     mrp: "",
     freeshipping: false,
     color: "",
     material: "",
     location: "",
     quantity: 0,
     desc: "",
     discount: "",
     imgurl: "",
};

const reducerFunction = (state, action) => {
     switch (action.type) {
          case "brand":
               return { ...state, brand: action.payload };
          case "title":
               return { ...state, title: action.payload };
          case "gender":
               return { ...state, gender: action.payload };
          case "category":
               return { ...state, category: action.payload };
          case "sale":
               return { ...state, sale: action.payload };
          case "price":
               return { ...state, price: action.payload };
          case "mrp":
               return { ...state, mrp: action.payload };
          case "freeshipping":
               return { ...state, freeshipping: action.payload };
          case "color":
               return { ...state, color: action.payload };
          case "material":
               return { ...state, material: action.payload };
          case "location":
               return { ...state, location: action.payload };
          case "quantity":
               return { ...state, quantity: action.payload };
          case "desc":
               return { ...state, desc: action.payload };
          case "discount":
               return { ...state, discount: action.payload };
          case "imgurl":
               return { ...state, imgurl: action.payload };
          default:
               return state;
     }
};

const AddProduct = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [productState, setProductState] = useReducer(
          reducerFunction,
          initialState
     );
     console.log("productState:", productState);
     const addHandler = () => {
          if (JSON.stringify(productState) !== JSON.stringify(initialState)) {
               dispatch(addProducts(productState))
                    .then(() => dispatch(getProduct()))
                    .then(() => {
                         setProductState({
                              brand: "",
                              title: "",
                              gender: "",
                              category: "",
                              sale: "",
                              price: "",
                              mrp: "",
                              freeshipping: false,
                              color: "",
                              material: "",
                              location: "",
                              quantity: 0,
                              desc: "",
                              discount: "",
                              imgurl: "",
                         });
                         navigate("/admin");
                    });
          }
     };

     return (
          <Box>
               <AdminNavbar />
               <Heading textAlign={"center"}>Add Products</Heading>
               <div
                    style={{
                         margin: "auto",
                         display: "flex",
                         flexDirection: "column",
                         width: "500px",
                         gap: "20px",
                         justifyContent: "space-between",
                    }}
               >
                    {/* brand */}
                    <div>
                         <label style={{ color: "red" }} className="form-label">
                              Product brand *
                         </label>
                         <Input
                              size="md"
                              type="text"
                              value={productState.brand}
                              onChange={(e) =>
                                   setProductState({
                                        type: "brand",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* title */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              Product title *
                         </label>
                         <Input
                              size="md"
                              type="text"
                              value={productState.title}
                              onChange={(e) =>
                                   setProductState({
                                        type: "title",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* image */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              Product Image *
                         </label>
                         <Input
                              size="md"
                              type="url"
                              placeholder="Image URL"
                              value={productState.imgurl}
                              onChange={(e) =>
                                   setProductState({
                                        type: "imgurl",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* Product MRP */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              Product MRP *
                         </label>
                         <Input
                              size="md"
                              type="number"
                              value={productState.mrp}
                              onChange={(e) =>
                                   setProductState({
                                        type: "mrp",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* price */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              Price *
                         </label>
                         <Input
                              size="md"
                              type="number"
                              value={productState.price}
                              onChange={(e) =>
                                   setProductState({
                                        type: "price",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* Description */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              Description *
                         </label>
                         <Input
                              size="md"
                              type="text"
                              value={productState.desc}
                              onChange={(e) =>
                                   setProductState({
                                        type: "desc",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* sale */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              sale *
                         </label>
                         <Input
                              size="md"
                              type="number"
                              value={productState.sale}
                              onChange={(e) =>
                                   setProductState({
                                        type: "sale",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* material */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              material *
                         </label>
                         <Input
                              size="md"
                              type="text"
                              value={productState.material}
                              onChange={(e) =>
                                   setProductState({
                                        type: "material",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* quantity */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              quantity *
                         </label>
                         <Input
                              isDisabled
                              size="md"
                              type="number"
                              value={productState.quantity}
                              onChange={(e) =>
                                   setProductState({
                                        type: "quantity",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* discount */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              discount *
                         </label>
                         <Input
                              size="md"
                              type="number"
                              value={productState.discount}
                              onChange={(e) =>
                                   setProductState({
                                        type: "discount",
                                        payload: e.target.value,
                                   })
                              }
                         />
                    </div>
                    {/* category */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              Product category *
                         </label>
                         <Select
                              size="md"
                              value={productState.category}
                              onChange={(e) =>
                                   setProductState({
                                        type: "category",
                                        payload: e.target.value,
                                   })
                              }
                         >
                              <option value="">Select Category</option>
                              <option value="Clothing">Clothing</option>
                              <option value="Shoes">Shoes</option>
                              <option value="Accessories">Accessories</option>
                              <option value="Bags">Bags</option>
                              <option value="Jewelry">Jewelry</option>
                              <option value="Home">Home</option>
                         </Select>
                    </div>
                    {/* gender */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              Product gender *
                         </label>
                         <Select
                              value={productState.gender}
                              onChange={(e) =>
                                   setProductState({
                                        type: "gender",
                                        payload: e.target.value,
                                   })
                              }
                         >
                              <option value="">Select gender</option>
                              <option value="mens">mens</option>
                              <option value="women">women</option>
                         </Select>
                    </div>
                    {/* color */}
                    <div className="form-element-div">
                         <label style={{ color: "red" }} className="form-label">
                              Product color *
                         </label>
                         <Select
                              value={productState.color}
                              onChange={(e) =>
                                   setProductState({
                                        type: "color",
                                        payload: e.target.value,
                                   })
                              }
                         >
                              <option value="">Select Category</option>
                              <option value="Black">Black</option>
                              <option value="Brown">Brown</option>
                              <option value="Gray">Gray</option>
                              <option value="Green">Green</option>
                              <option value="Metallic">Metallic</option>
                              <option value="Multicolor">Multicolor</option>
                              <option value="Natural">Natural</option>
                              <option value="Orange">Orange</option>
                              <option value="Pink">Pink</option>
                              <option value="Red">Red</option>
                              <option value="White">White</option>
                              <option value="Yellow">Yellow</option>
                         </Select>
                    </div>
                    <div>
                         <Button
                              variant={"solid"}
                              colorScheme={"orange"}
                              data-cy="add-product-button"
                              onClick={addHandler}
                              w="150px"
                              marginLeft="200px"
                         >
                              Add Product
                         </Button>
                    </div>
               </div>
          </Box>
     );
};

export default AddProduct;
