import { Box, Button, Heading, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct, getProduct } from "../Redux/AppReducer/action";
const AdminEdit = () => {
     const { id } = useParams();
     const { product } = useSelector((store) => store.AppReducer);
     const [productName, setProductName] = useState({
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
     });

     const {
          brand,
          title,
          gender,
          category,
          sale,
          price,
          mrp,
          freeshipping,
          color,
          material,
          location,
          quantity,
          desc,
          discount,
          imgurl,
     } = productName;
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const handleSubmit = (e) => {
          e.preventDefault();
          if (productName) {
               const payload = {
                    brand,
                    title,
                    gender,
                    category,
                    sale,
                    price,
                    mrp,
                    freeshipping,
                    color,
                    material,
                    location,
                    quantity,
                    desc,
                    discount,
                    imgurl,
               };
               dispatch(updateProduct(id, payload)).then(() => {
                    navigate("/admin");
               });
               dispatch(getProduct());
          }
     };

     useEffect(() => {
          if (id) {
               const currentMusic = product.find((item) => item.id == id);
               setProductName(currentMusic);
          }
     }, [id]);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setProductName({
               ...productName,
               [name]: value,
          });
     };
     return (
          <div>
               {/* <h1>EDIT PAGE</h1> */}
               <div>
                    <Box>
                         {/* <AdminNavbar /> */}
                         <Heading textAlign={"center"}>Update Products</Heading>
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
                              <form onSubmit={(e) => handleSubmit(e)}>
                                   {/* brand */}
                                   <div>
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             Product brand *
                                        </label>
                                        <Input
                                             size="md"
                                             type="text"
                                             name={"brand"}
                                             value={brand}
                                             placeholder="Brand"
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/* title */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             Product title *
                                        </label>
                                        <Input
                                             size="md"
                                             type="text"
                                             name={"title"}
                                             value={title}
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/*  */}

                                   {/* image */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             Product Image *
                                        </label>
                                        <Input
                                             size="md"
                                             type="url"
                                             placeholder="Image URL"
                                             value={imgurl}
                                             name={"imgurl"}
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/* Product MRP */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             Product MRP *
                                        </label>
                                        <Input
                                             size="md"
                                             type="number"
                                             value={mrp}
                                             name={"mrp"}
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/* price */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             Price *
                                        </label>
                                        <Input
                                             size="md"
                                             type="number"
                                             value={price}
                                             name={"price"}
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/* Description */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             Description *
                                        </label>
                                        <Input
                                             size="md"
                                             type="text"
                                             name={"desc"}
                                             value={desc}
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/* sale */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             sale *
                                        </label>
                                        <Input
                                             size="md"
                                             type="number"
                                             value={sale}
                                             name={"sale"}
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/* material */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             material *
                                        </label>
                                        <Input
                                             size="md"
                                             type="text"
                                             value={material}
                                             name={"material"}
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/* quantity */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             quantity *
                                        </label>
                                        <Input
                                             isDisabled
                                             size="md"
                                             type="number"
                                             value={quantity}
                                             name={"quantity"}
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/* discount */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             discount *
                                        </label>
                                        <Input
                                             size="md"
                                             type="number"
                                             value={discount}
                                             name={"discount"}
                                             onChange={(e) => handleChange(e)}
                                        />
                                   </div>
                                   {/* category */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             Product category *
                                        </label>
                                        <Select
                                             size="md"
                                             value={category}
                                             name={"category"}
                                             onChange={(e) => handleChange(e)}
                                        >
                                             <option value="">
                                                  Select Category
                                             </option>
                                             <option value="Clothing">
                                                  Clothing
                                             </option>
                                             <option value="Shoes">
                                                  Shoes
                                             </option>
                                             <option value="Accessories">
                                                  Accessories
                                             </option>
                                             <option value="Bags">Bags</option>
                                             <option value="Jewelry">
                                                  Jewelry
                                             </option>
                                             <option value="Home">Home</option>
                                        </Select>
                                   </div>
                                   {/* gender */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             Product gender *
                                        </label>
                                        <Select
                                             name={"gender"}
                                             value={gender}
                                             onChange={(e) => handleChange(e)}
                                        >
                                             <option value="">
                                                  Select gender
                                             </option>
                                             <option value="mens">mens</option>
                                             <option value="women">
                                                  women
                                             </option>
                                        </Select>
                                   </div>
                                   {/* color */}
                                   <div className="form-element-div">
                                        <label
                                             style={{ color: "red" }}
                                             className="form-label"
                                        >
                                             Product color *
                                        </label>
                                        <Select
                                             value={color}
                                             name={"color"}
                                             onChange={(e) => handleChange(e)}
                                        >
                                             <option value="">
                                                  Select Category
                                             </option>
                                             <option value="Black">
                                                  Black
                                             </option>
                                             <option value="Brown">
                                                  Brown
                                             </option>
                                             <option value="Gray">Gray</option>
                                             <option value="Green">
                                                  Green
                                             </option>
                                             <option value="Metallic">
                                                  Metallic
                                             </option>
                                             <option value="Multicolor">
                                                  Multicolor
                                             </option>
                                             <option value="Natural">
                                                  Natural
                                             </option>
                                             <option value="Orange">
                                                  Orange
                                             </option>
                                             <option value="Pink">Pink</option>
                                             <option value="Red">Red</option>
                                             <option value="White">
                                                  White
                                             </option>
                                             <option value="Yellow">
                                                  Yellow
                                             </option>
                                        </Select>
                                   </div>

                                   {/*  */}

                                   <div>
                                        <Button
                                             type="submit"
                                             variant={"solid"}
                                             colorScheme={"orange"}
                                             data-cy="add-product-button"
                                             w="150px"
                                             marginLeft="200px"
                                        >
                                             Update Product
                                        </Button>
                                   </div>
                              </form>
                         </div>
                    </Box>
               </div>
          </div>
     );
};

export default AdminEdit;
