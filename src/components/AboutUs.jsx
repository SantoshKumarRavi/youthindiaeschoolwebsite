import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
const SubheadingBase = tw.h5`font-bold text-gray-300`
const Container = tw.div`relative bg-blue-1000`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto `;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-white text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4  text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-600`;
const HighlightedText = tw.span` rounded-tl-5xl lg:ml-2 xs:bg-none md:bg-orange-1000	 text-gray-100 px-4 transform -skew-x-12 inline-block`;
export default ({
  textOnLeft = false
}) => {
  return (
    <Container id="about">
      <TwoColumn css={tw`md:items-center`}>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
             <Subheading>
                <Subheading>ABOUT US</Subheading>
            </Subheading>
            <Heading>
            <>Why choose
            <HighlightedText> YI E-School </HighlightedText>
            </>
            </Heading>
            <Description>
            Youth India E-School aims to make Education more accessible than ever before by providing the less economically fortunate with the same quality of learning tools as the rest of the world. It aims at empowering the young from all sections of the Indian Society by providing them with highly subsidized and quality education through our E-learning and Management platform.            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
