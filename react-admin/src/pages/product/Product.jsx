import React from "react";
import "./product.css";
import {Link} from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {productData} from "../../dummeyData";
import {Publish} from "@material-ui/icons";

export default function Product() {
  return (<div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">Product</h1>
      <Link>
        <button className="productAddButton">Create</button>
      </Link>
    </div>

    <div className="productTop">
      <div className="productTopLeft">
        <Chart data={productData} dataKey="Sales" title="Sales Pergormance"/>
      </div>
      <div className="productTopRight">
        <div className="productInfoTop">
          <img src="https://images.unsplash.com/photo-1542847970-584270eb111b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1866&q=80" alt="" className="productInfoImg"/>
          <span className="productName">Apple Airpods</span>
        </div>
        <div className="productInfoBottom">
          <div className="productInfoItem">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">123</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">sales:</span>
            <span className="productInfoValue">1523</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">active:</span>
            <span className="productInfoValue">yes</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">in stock:</span>
            <span className="productInfoValue">no</span>
          </div>
        </div>
      </div>
    </div>
    <div className="productBottom">
      <form className="productForm">
        <div className="productFormLeft">
          <label>Product Name</label>
          <input type="text" name="" id="" placeholder="Apple Airpods"/>
          <label htmlFor="">In Stock</label>
          <select name="inStock" id="idStock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label htmlFor="">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="productFormRight">
          <div className="productUpload">
            <img src="https://images.unsplash.com/photo-1619184781462-c0f13d6c2b0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" className="productUploadImg"/>
            <label for="file">
              <Publish/>
            </label>
            <input type="file" name="" id="file" style={{
                display: "none"
              }}/>
          </div>
          <button className="productButton">Update</button>
        </div>
      </form>
    </div>
  </div>);
}
