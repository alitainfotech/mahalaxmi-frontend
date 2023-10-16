import React from "react";

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => <Component />;

export default Authmiddleware;
