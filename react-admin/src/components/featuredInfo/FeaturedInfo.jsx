import React from "react";
import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

export default function FeaturedInfo() {
  return (<div className="featured">
    <div className="featuredItem">
      <span className="featureTitle">Revanue</span>
      <div className="featuredMoneyContainer">
        <span className="featureMoney">$2,415</span>
        <span className="featureMoneyRate">
          -11.4
          <ArrowDownward className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featureTitle">Sales</span>
      <div className="featuredMoneyContainer">
        <span className="featureMoney">$4,415</span>
        <span className="featureMoneyRate">
          -1.4
          <ArrowDownward className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featureTitle">Cost</span>
      <div className="featuredMoneyContainer">
        <span className="featureMoney">$2,455</span>
        <span className="featureMoneyRate">
          +11.4
          <ArrowUpward className="featuredIcon"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
  </div>);
}
