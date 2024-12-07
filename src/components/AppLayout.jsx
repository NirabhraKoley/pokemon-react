import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

export const AppLayout = () => {
  const navigate = useNavigation();
  // console.log(navigate);
  if (navigate.state === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
