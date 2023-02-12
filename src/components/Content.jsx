import React from "react";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
export const ContainerBase = tw.div`relative  mx-6`;
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const ContentWithPaddingLg= tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-10`;
export const Content2Xl= tw.div`max-w-screen-2xl mx-auto`;

const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`;

const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
const Subheading = tw.h5`font-bold text-primary-500`
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight lg:px-16`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-600 lg:text-base mx-auto lg:mx-0 lg:px-16`;
const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const PrimaryButton = tw(PrimaryButtonBase)`no-underline	lg:mx-16 mt-8 text-sm sm:text-base px-6 py-2 sm:px-10 sm:py-4 
bg-orange-1000 inline-block hocus:bg-orange-700 hocus:text-gray-100`;
const Image = tw.img`w-full	 ml-auto`

export default ({
  heading = "Redefine Learning making it Fun and Affordable",
  description = "Education more accessible than ever before.",
  primaryButtonText = "Meet Us With Your Schedule",
  primaryButtonUrl = "https://calendly.com/yieschool-info/yie-client-meet",
  imageSrc,
}) => {
  return (
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading }</Heading>
                <Description>{description}</Description>
                <PrimaryButton as="a" target="_blank" href={primaryButtonUrl}>
                        {primaryButtonText}
                  </PrimaryButton>
              </TextColumn>
              <IllustrationColumn>
                <Image src={imageSrc || "assests/subhero.avif"} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
  );
};
