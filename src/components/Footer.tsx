import LanguageSelector from "../i18next/LanguageSelector";
import styled from "styled-components";
import IconButtonsBox from "./CommandBar";

const Footer = () => {
  return (
    <StyledFooter className="container-fluid d-md-none fixed-bottom d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col d-flex">
          <IconButtonsBox />
          <LanguageSelector />
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 40px;
  background-color: #9b9bcc;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1000;
  bottom: 1px;
`;

export default Footer;
