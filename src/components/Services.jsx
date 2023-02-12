import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import ServiceFeature from "../components/ServiceFeature";

// import { ContentWithPaddingXl } from "components/misc/Layouts.js";
// import { SectionHeading as Heading, Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
// import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
export const Container = tw.div`relative  mx-6 `;
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto pb-10  lg:pb-4 `;
// const Subheading = tw(SubheadingBase)`text-center`;
const Subheading = tw.h5`font-bold text-gray-600 ml-12 sm:ml-8 lg:ml-24 lg:pl-5`
const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide`
const Heading = tw(SectionHeading)`max-w-3xl ml-12 sm:ml-8 lg:ml-24 lg:pl-5 lg:max-w-4xl lg:text-left leading-tight`;
const FlexBox = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch `;
const FlexLeft=tw.div`mt-2 w-full lg:w-1/3  flex flex-col justify-start items-center pt-8`;
const FlexRight=tw.div`mt-2  w-full lg:w-2/3 `;
const FlexContent = tw.div`px-4 text-center flex flex-col items-center `;
// const TopFlexRight = tw(FlexRight)`justify-items-center items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;
const Column = tw.div`lg:w-1/2`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16 w-full`;
const IllustrationImage = tw.img`w-full	 ml-auto`
export default () => {
  return (
    <>
     <Container id="services">
      <ContentWithPaddingXl>
        <FlexBox>
            <FlexLeft>
            </FlexLeft>
            <FlexRight>
                <Subheading>WHAT WE OFFER</Subheading>
                <Heading>Services we offer</Heading>
            </FlexRight>
        </FlexBox>
      </ContentWithPaddingXl>
    </Container>
    <Container>
      <ContentWithPaddingXl>
        <FlexBox>
            <FlexLeft>
              <FlexContent>
              <IllustrationColumn>
                <IllustrationImage src={"" || "assests/subheroHelp.avif"} />
              </IllustrationColumn>
              </FlexContent>
            </FlexLeft>
            <FlexRight>
              <FlexContent>
              <ServiceFeature/>
              </FlexContent>
            </FlexRight>
        </FlexBox>
      </ContentWithPaddingXl>
    </Container>
    </>
  );
};
