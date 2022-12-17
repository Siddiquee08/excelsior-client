import React from "react";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from "cdbreact";
import logo from "../../../asset/images.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <CDBFooter className="shadow fixed-bottom">
        <CDBBox
          display="flex"
          justifyContent="around"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
        >
          <CDBBox display="flex" alignItems="center">
            <Link to="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="50px" />
              <span className="ml-4 h5 mb-0 font-weight-bold">Excelsior</span>
            </Link>
            <small className="mx-2">&copy; Excelsior, 2022.</small>
          </CDBBox>
          <CDBBox
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="ms-5"
          >
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-1 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2 me-1">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </div>
  );
};

export default Footer;
