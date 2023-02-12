import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

import useAnimatedNavToggler from "../helpers/useAnimatedNavToggler";

// import logo from "/Images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center p-6 
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block `;
export const NavLink = tw.a`
  text-lg lg:text-sm my-2 lg:mx-0 lg:ml-2 lg:my-0 pb-1
  no-underline	
  text-black
  font-semibold tracking-wide transition duration-300
  border-b-2 border-transparent hover:border-primary-500 hocus:text-orange-1000
`;

export const PrimaryLink = tw(NavLink)`
  px-8 py-3 rounded bg-orange-1000 text-gray-100
  hocus:bg-orange-700 hocus:text-gray-200 focus:shadow-outline
   outline outline-2  outline-orange-1000  hocus:outline-orange-700
`;
export const PrimaryOutlineLink = tw(NavLink)`
  px-8 py-3  rounded text-gray-800
  hocus:bg-orange-1000 hocus:text-gray-100 focus:shadow-outline
  outline outline-2  outline-gray-800 hocus:outline-orange-1000
  `;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center  border-b-0 hover:font-bold text-black xs:text-xl sm:text-2xl! ml-0!`};
  img {
    ${tw`md:w-20 mr-3 xs:w-12`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 bg-white border-solid border-2 border-gray-200  focus:outline-none hocus:bg-gray-500 hocus:text-gray-100 transition duration-300`;
export const MobNavToggle = tw.button`outline-none border-none bg-white mb-3 `;//lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10  fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1   justify-between items-center
`;
const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};

const TopNav= ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  const defaultLinks = [
    <NavLinks key={1}>
      <MobNavToggle onClick={toggleNavbar}>
        <NavLink href="/#home">Home</NavLink>
      </MobNavToggle>
      <MobNavToggle onClick={toggleNavbar}>
        
        <NavLink href="/#about">About</NavLink>
      </MobNavToggle>
      <MobNavToggle onClick={toggleNavbar}>
        <NavLink href="/#services">Services</NavLink>
      </MobNavToggle>
      <MobNavToggle onClick={toggleNavbar}>
        <NavLink href="/#courses">Courses</NavLink>
      </MobNavToggle>
      <MobNavToggle onClick={toggleNavbar}>
        <NavLink href="/#">Pricing</NavLink>
      </MobNavToggle>
      <MobNavToggle onClick={toggleNavbar}>
        <NavLink href="/#">Free Content</NavLink>
      </MobNavToggle>
      <PrimaryOutlineLink
        css={roundedHeaderButton && tw`rounded-lg lg:ml-12!`}
        href="/#"
      >
        Login
      </PrimaryOutlineLink>
      <PrimaryLink
        css={roundedHeaderButton && tw`rounded-lg lg:ml-6!`}
        href="/#"
      >
        Sign Up
      </PrimaryLink>
    </NavLinks>,
  ];
 

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={"/assests/hero.avif"} alt="YIE logo" />
      YI E-SCHOOL
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header id="home" className={className || "header-light"} >
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-8" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};
export default TopNav

