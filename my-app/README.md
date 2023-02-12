import "./App.css";
// import Allroutes from "./Frontend/Routes/Allroutes";
// import SingleQuestion from "./Frontend/Components/AnswerPage/SingleQuestion/SingleQuestion";
// import Answer from "./Frontend/Components/AnswerPage/Answer/Answer";
// import AnswerPopup from "./Frontend/Components/AnswerPage/AnswerPopup/AnswerPopup";
function App() {
return (
<div className="App">
{/_ <Allroutes /> _/}
{/_ <SingleQuestion /> _/}
{/_ <AnswerPopup /> _/}
{/_ <Answer /> _/}
</div>
);
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import store from "./Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
<BrowserRouter>
<ChakraProvider>
<React.StrictMode>
<App />
</React.StrictMode>
</ChakraProvider>
</BrowserRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
