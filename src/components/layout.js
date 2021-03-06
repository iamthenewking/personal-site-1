import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import { Helmet } from "react-helmet-async";
import ReactTooltip from "react-tooltip";
import { Location } from "@reach/router";
import Footer from "./Footer";
import Cookies from "./Cookies";

function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/css/line-awesome.min.css"
        />
      </Helmet>
      <Cookies />
      <ReactTooltip className="text-primary bg-primary" />
      <div className="flex flex-col font-sans bg-default " id="my-content">
        <Header />
        <main className="text-default ">{children}</main>
        <Location>{(locationProps) => <Footer {...locationProps} />}</Location>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
