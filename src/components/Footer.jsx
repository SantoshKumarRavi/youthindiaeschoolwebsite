import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { ReactComponent as TwitterIcon } from "../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../images/youtube-icon.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedIn-icon.svg";
import { ReactComponent as InstagramWhiteIcon } from "../images/instagramWhite.svg";



 const ContainerBase = tw.div`relative`;


const Container = tw(ContainerBase)`bg-blue-1000 text-gray-100`
const Content = tw.div`max-w-screen-xl mx-auto pt-5 pb-2`;

const Row = tw.div`flex items-center lg:justify-around justify-center lg:flex-row flex-col-reverse  px-8 xs:px-2 w-full`
const ImgContainer = tw(Row)`xs:hidden  lg:flex`
const LogoContainer = tw.div`flex lg:flex-col items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-20`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider `;

const TwoContainer = tw.div`font-medium flex flex-row px-8`

const LinksContainer = tw.div`mt-8 font-medium flex flex-col flex-wrap justify-center lg:items-start items-center`
const Link = tw.a`text-left text-gray-600	 border-b-2  border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4 no-underline`;
const AddressName=tw.p`lg:text-left text-center text-gray-600 font-medium	 xs:mx-1 xs:px-16 xs:text-sm  border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 my-2 mx-4 no-underline`;
// const TopAddressName=tw.p`lg:text-left text-center text-gray-600 font-medium	 xs:mx-1 xs:px-16 xs:text-sm  border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-0 transition duration-300 my-0 mx-4 no-underline`;
const HeadingLink = tw.a`border-b-2 text-gray-200 border-transparent pb-1  hocus:text-gray-200 transition duration-300 mt-2 mx-4 no-underline`;

const BreakTag = tw.br`lg:block hidden`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer  inline-block text-gray-100 hover:text-gray-500 transition duration-300 lg:mx-4 mx-4 xs:mx-5`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-16 font-medium tracking-wide text-sm text-gray-600`
const Footer= () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <ImgContainer>
            <a href="/#home"> 
            <LogoImg src={"/assests/heroBG_Blue.avif"}/>
            </a>
            <LogoText>YI E-SCHOOL</LogoText>
            </ImgContainer>
            <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/company/youth-india-e-school">
            <LinkedInIcon/>
            </SocialLink>
            <SocialLink href="https://twitter.com/YIEschool?s=09">
            <TwitterIcon/>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/youthindiaeschool/">
            <InstagramWhiteIcon/>
            </SocialLink>
            <SocialLink href="https://www.youtube.com/@youthindiae-school5362/videos">
            <YoutubeIcon/>
            </SocialLink>
          </SocialLinksContainer>
          </LogoContainer>
          <LinksContainer>
            <AddressName >CM-1, VSS Nagar, Bhubaneswar,<BreakTag/> Odisha 751007</AddressName>
            <AddressName >info@youthindiaeschool.com</AddressName>
            {/* <TopAddressName>Mr.Subhankar Nanda</TopAddressName>
            <AddressName >91786-27783</AddressName>
            <TopAddressName>Mr.Paras Kalura</TopAddressName>
            <AddressName >98929-93203</AddressName> */}
          </LinksContainer>
          <TwoContainer>
          <LinksContainer>
            <HeadingLink>Links</HeadingLink>
            <Link href="#">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#">&nbsp;</Link>
          </LinksContainer>
          <LinksContainer>
            <HeadingLink>Info</HeadingLink>
            <Link href="#about">About</Link>
            <Link href="#features">Features</Link>
            <Link href="#">&nbsp;</Link>
          </LinksContainer>
          </TwoContainer>
         
        </Row>
        <CopyrightText>
            &copy; Copyright 2023, Youth India E-school. All Rights Reserved.
          </CopyrightText>
      </Content>
    </Container>
  );
};
export default Footer