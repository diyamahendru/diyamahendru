import React from "react";
import { useState } from "react";
import "./styles.css";

const EmptyList = ({img}) => {
  return (
    <div className="emptyList-wrap">
      <h1>404 - NOT FOUND</h1>
      <img src={img} alt="empty" />
    </div>
  );
};

export default EmptyList;
