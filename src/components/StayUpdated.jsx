import React from "react";
// import { motion } from "framer-motion";
// import styled from "styled-components";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
// import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { SectionDescription } from "components/misc/Typography.js";
// import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
// import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
// import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
// import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

export const Container = tw.div`relative`;
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-20 lg:py-8 sm:mx-4 xs:mx-4`;
export const SectionHeading = tw.h2` text-4xl sm:text-5xl font-black font-bold tracking-wide text-center`
export const SubheadingBase = tw.h5`text-gray-600  tracking-widest`
export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 `;
const Subheading = tw(SubheadingBase)` text-center mb-0`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full capitalize text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

// const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
// const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
// const Question = tw.dt`flex justify-between items-center`;
// const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
// const QuestionToggleIcon = motion(styled.span`
//   ${tw`ml-2 transition duration-300`}
//   svg {
//     ${tw`w-6 h-6`}
//   }
// `);
const StayUpdated= ({
  subheading = " STAY UPDATED",
  heading = "Subscribe to our Newsletter",
  description ="Want the latest and the greatest from our blog straight to your inbox? Check your details and get weekly updates.",
}) => {
  return (
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </HeaderContent>
        </Column>
     </ContentWithPaddingXl>
  );
};
export default StayUpdated
