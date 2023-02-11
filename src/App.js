import "./App.css";
// import GlobalStyles from 'styles/GlobalStyles';
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { createMuiTheme, MuiThemeProvider,withStyles } from "@material-ui/core/styles";

import TopNav from "./components/TopNav";
import Content from "./components/Content";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Features from "./components/Features";
import Slider from "./components/Slider";
import HighLights from "./components/HighLights";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import StayUpdated from "./components/StayUpdated";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl":1440
    }
  }
});
function App() {
  return (
      <div>
      <MuiThemeProvider theme={theme}>
        <TopNav  roundedHeaderButton={true} />
        <Content/>
        <AboutUs/>
        <Services/>
        <Features/>
        <Slider/>
        <HighLights/>
        <Testimonials/>
        <FAQ/>
        <StayUpdated/>
        <Subscription/>
        <Footer/>
      </MuiThemeProvider>

      </div> 
  );
}

export default App;
