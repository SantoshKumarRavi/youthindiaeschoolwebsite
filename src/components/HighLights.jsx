import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro";
const Container = tw.div`relative mx-6`;

const ThreeColumnContainer = styled.div`
  ${tw`flex  mx-auto flex-col bg-blue-1000 items-center md:flex-row flex-wrap justify-center max-w-screen-lg `}
`;
const VerticalSpacer = tw.div`mt-0 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/4 max-w-sm `}
`;

const Card = styled.div`
  ${tw`flex flex-col  items-center  text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw` text-center text-white rounded-full px-16  flex-shrink-0`}
    img {
      ${tw`w-full `}
    }
  }
  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-1 tracking-wide text-white font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const HighlightedText = tw.span`mt-2 sm:mt-4  text-white font-medium	`;

export default () => {
  const defaultCards = [
    {
      imageSrc: "/assests/book.png",
      highlight:"768+",
      title: "Courses Published",
    },
    { imageSrc: "/assests/degree.png",
    highlight:"8,300+",
    title: "Happy Learners"     },
    { imageSrc: "/assests/tieHuman.png", 
    highlight:"120",
    title: "Expert Instructors"    },
    { imageSrc: "/assests/awardcup.png", 
    highlight:"32",
    title: "Awards Acheived"    }
  ];


  return (
    <Container>
      <ThreeColumnContainer>
       {/* <VerticalSpacer/> */}
        {defaultCards.map((card, i) => (
          <Column key={i}>
            <Card>
                <span className="imageContainer" css={""}>
                  <img src={card.imageSrc || "Images/fasticon.svg"} alt="" css={""} />
                </span>
                <HighlightedText>{card.highlight}</HighlightedText>
                <span className="title">{card.title}</span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
