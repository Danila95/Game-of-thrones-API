import React from "react";
import ReactDOM from "react-dom";
import App from "./components/common.components/app/app";
import "./components/common.components/common/libs/bootstrap@5.0.2/bootstrap.bundle.min";

import "./style.scss";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
