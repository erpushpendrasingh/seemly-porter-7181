import React, { useState } from "react";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
     CloseNav,
     OverlayDiv,
     SecMainDiv,
     SecondaryNavTop,
} from "./Navbar.styled";
import NavSidebar from "./NavSidebar";
import { Data } from "./NavDB";
import { CloseIcon } from "@chakra-ui/icons";
import { BsTagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SecondaryNav = ({ active, link, setActiveProd }) => {
     const [selected, setSelected] = useState("Clothing");
     return (
          <SecMainDiv
               style={active ? { display: "block" } : { display: "none" }}
          >
               <SecondaryNavTop>
                    <p
                         className="cursor-pointer"
                         style={
                              selected === "Clothing"
                                   ? { textDecoration: "underline" }
                                   : { textDecoration: "none" }
                         }
                         onClick={(e) => setSelected(e.target.innerHTML)}
                    >
                         Clothing
                    </p>
                    <p
                         className="cursor-pointer"
                         style={
                              selected === "Shoes"
                                   ? { textDecoration: "underline" }
                                   : { textDecoration: "none" }
                         }
                         onClick={(e) => setSelected(e.target.innerHTML)}
                    >
                         Shoes
                    </p>
                    <p
                         className="cursor-pointer"
                         style={
                              selected === "Accessories"
                                   ? { textDecoration: "underline" }
                                   : { textDecoration: "none" }
                         }
                         onClick={(e) => setSelected(e.target.innerHTML)}
                    >
                         Accessories
                    </p>
                    <p
                         className="cursor-pointer"
                         style={
                              selected === "Bags"
                                   ? { textDecoration: "underline" }
                                   : { textDecoration: "none" }
                         }
                         onClick={(e) => setSelected(e.target.innerHTML)}
                    >
                         Bags
                    </p>
                    <p
                         className="cursor-pointer"
                         style={
                              selected === "Jewelry"
                                   ? { textDecoration: "underline" }
                                   : { textDecoration: "none" }
                         }
                         onClick={(e) => setSelected(e.target.innerHTML)}
                    >
                         Jewelry
                    </p>
                    <p
                         className="cursor-pointer"
                         style={
                              selected === "Brands"
                                   ? { textDecoration: "underline" }
                                   : { textDecoration: "none" }
                         }
                         onClick={(e) => setSelected(e.target.innerHTML)}
                    >
                         Brands
                    </p>
                    <p
                         className="cursor-pointer"
                         onClick={() => setActiveProd(!active)}
                    >
                         <Link to={"/allMens"}>All {link}'s</Link>
                    </p>
                    <p
                         className="cursor-pointer"
                         onClick={() => setActiveProd(!active)}
                    >
                         <BsTagFill
                              style={{
                                   color: "red",
                                   fontSize: "1.1rem",
                                   transform: "rotate(90deg)",
                              }}
                         />
                         <Link to={"/sale"}>Sale </Link>
                    </p>
               </SecondaryNavTop>
               <CloseNav onClick={() => setActiveProd(!active)}>
                    <CloseIcon style={{ color: "#3E3D3D" }} />
               </CloseNav>
               <NavSidebar
                    data={Data[selected]}
                    setActiveProd={setActiveProd}
               />
               <OverlayDiv />
          </SecMainDiv>
     );
};

export default SecondaryNav;
