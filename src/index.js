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
import HomeTwo from './routes/homeTwo';
import AllTransactionsTwo from './routes/allTransactionsTwo';
import MakePaymentTwo from './routes/makePaymentTwo';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home/1" element={<Home />} />
      <Route path="/home/2" element={<HomeTwo />} />
      <Route path="/all-transactions/1" element={<AllTransactions />} />
      <Route path="/all-transactions/2" element={<AllTransactionsTwo />} />
      <Route path="/pay/1" element={<MakePayment />} />
      <Route path="/pay/2" element={<MakePaymentTwo />} />
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
