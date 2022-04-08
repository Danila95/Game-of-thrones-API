import * as $ from "jquery";
import Post from "../common.components/common/models/Post";
import WebpackLogo from "../../images/webpack-logo.png";
import json from "../../assets/json.json";
import xml from "../../assets/data.xml";
import csv from "../../assets/data.csv";

const FirstStartWebpack = () => {
  const post = new Post("Webpack Post Title", WebpackLogo);
  console.log("Post to String:", post.toString());
  console.log("JSON:", json);
  console.log("XML:", xml);
  console.log("CSV:", csv);

  console.log("Test");

  return (
    <div className="container">
      <h1>First start Webpack</h1>
      <hr />
      <div className="logoo">
        <img src={WebpackLogo} alt="" />
        <h1>png loaded successfully</h1>
        <hr />
        <pre>{$("pre").addClass("code").html(post.toString())}</pre>
        <hr />
        <div className="card">
          <h2>SCSS is work very well</h2>
        </div>
      </div>
    </div>
  );
};

export default FirstStartWebpack;
