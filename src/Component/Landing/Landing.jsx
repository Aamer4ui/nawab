import React from "react";
import { MainHeader } from "../HeaderContent/MainHeader";
import { BodyMain } from "../BodyContent/BodyMain";
import { Footer } from "../Footer/Footer";
import { NavigationTop } from "../Navigation/NavigationTop";

export const Landing = () => {
  return (
    <div>
      <MainHeader />
      <NavigationTop />
      <BodyMain />
      <Footer />
    </div>
  );
};
