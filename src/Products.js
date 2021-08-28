import React from "react";
import { useLocation } from "react-router-dom";
import "./css/DashBoard.css";

const Product = () => {
  let location = useLocation();
  const { productInfo } = location.state;
  return (
    <>
      <div className="single__product_catalogue">
        {productInfo && (
          <div className="product__cards">
            <div className="product__name">{productInfo.product_name}</div>
            <div className="product__pic">
              {productInfo.image && productInfo.image.length > 0 && (
                <img src={productInfo.image[0]} alt="demon" />
              )}
            </div>
            <div className="product__info">
              <p className="price">
                <span>
                  {productInfo.retail_price}{" "}
                  <i className="fa fa-inr" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            <div className="product__desc">{productInfo.description}</div>
            <div className="product__brand">{productInfo.brand}</div>
          </div>
        )}
      </div>
    </>
  );
};
export default Product;
