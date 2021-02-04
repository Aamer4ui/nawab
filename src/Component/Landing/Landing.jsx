import React from "react";
import { MainHeader } from "../HeaderContent/MainHeader";
import { BodyMain } from "../BodyContent/BodyMain";
import { Information } from "../BodyContent/Information";
import { Footer } from "../Footer/Footer";
import { NavigationTop } from "../Navigation/NavigationTop";

export const Landing = () => {
  return (
    <div>
      <MainHeader />
      <NavigationTop />
      <BodyMain />
      <Information />
      <Footer />
    </div>
  );
};
