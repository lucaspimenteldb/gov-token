import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './routes/home';
import AllTransactions from './routes/allTransactions';
import MakePayment from './routes/makePayment';
import Charge from './routes/charge';
import SignUp from './routes/signUp';
import Support from './routes/support';
import ForgotPassword from './routes/forgotPassword';
import Convert from './routes/convert';
import TransparencyPortal from './routes/transparencyPortal';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/all-transactions" element={<AllTransactions />} />
      <Route path="/pay" element={<MakePayment />} />
      <Route path="/charge" element={<Charge />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/support" element={<Support />} />
      <Route path="/convert" element={<Convert />} />
      <Route path="/transparency-portal" element={<TransparencyPortal />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
