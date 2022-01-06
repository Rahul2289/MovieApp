import React from "react";
import "./footer.css";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <div className="footer">
      <FacebookOutlined className="icon facebook" />
      <TwitterOutlined className="icon twitter" />
      <InstagramOutlined className="icon instagram" />
    </div>
  );
};

export default Footer;
