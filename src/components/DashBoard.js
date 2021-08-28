import React, { useEffect, useState } from "react";
import "../css/DashBoard.css";
import { getList } from "../apis/apis";
import { useHistory } from "react-router-dom";
export const DashBoard = () => {
  const [products, setProducts] = useState();
  let history = useHistory();
  useEffect(() => {
    async function apiCall() {
      let res = await getList();
      console.log(res);
      setProducts(res.data);
    }
    apiCall();
  }, []);
  const openSingleProduct = (product) => {
    history.push({
      pathname: `/${product.uniq_id}`,
      state: { productInfo: product },
    });
  };
  return (
    <>
      <div className="dashboard__main">
        <div className="product_catalogue">
          {products &&
            products.map((product, index) => (
              <div
                className="product__card"
                key={index}
                onClick={() => openSingleProduct(product)}
              >
                <div className="product__name">{product.product_name}</div>
                <div className="product__pic">
                  {product.image && product.image.length > 0 && (
                    <img src={product.image[0]} alt="demon" />
                  )}
                </div>
                <div className="product__info">
                  <p className="price">
                    <span>
                      {product.retail_price}{" "}
                      <i className="fa fa-inr" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
                <div className="product__desc">{product.description}</div>
                <div className="product__brand">{product.brand}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
