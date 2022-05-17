import React from "react";
import ReactDOM from "react-dom";
import App from "./components/common.components/app/app";
import "./components/common.components/common/libs/bootstrap@5.0.2/bootstrap.bundle.min";
import GotService from "./services/GotService";

import "./style.scss";

const gotService = new GotService();

gotService.getAllCharacters().then(res => console.log(res));

gotService.getCharacter(7).then(res => console.log(res));

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
