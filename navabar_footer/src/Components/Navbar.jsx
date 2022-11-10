import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
          width: "10%",
        }}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          ></MenuButton>
          <MenuList width={300} h={650} fontSize={20}>
            <MenuGroup>
              <MenuItem>
                <i class="fa-solid fa-house-chimney"></i>Home
              </MenuItem>
              <MenuItem>
                <i class="fa-sharp fa-solid fa-list-ul"></i>Internships
              </MenuItem>
              <MenuItem>
                <i class="fa-solid fa-briefcase-blank"></i>Jobs
              </MenuItem>
              <MenuItem>
                <i class="fa-solid fa-layer-plus"></i> Post Intership
              </MenuItem>
              <MenuItem>
                {" "}
                <i class="fa-solid fa-book-bookmark"></i>Courses
              </MenuItem>
              <MenuItem>
                <i class="fa-solid fa-phone"></i>Contact Us
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem>
                <i class="fa-solid fa-bars-sort"></i>Register
              </MenuItem>
              <MenuItem>
                <i class="fa-solid fa-door-closed"></i>Login
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        <Link to="/">
          <img
            style={{}}
            src="https://assets.interntheory.com/creative/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div
        style={{
          display:"flex",
          gap:"20px",
         marginLeft:"80%",
        //   border: "1px solid red",
        }}
      >
        <div>
          {" "}
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div>
          <Button colorScheme="red">Sign in</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
