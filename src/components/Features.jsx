import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
export const Container = tw.div`relative  mx-6`;
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto flex lg:flex-row lg:justify-center lg:items-center py-10  lg:py-4 `;
const ThreeColumnContainer = styled.div`
  ${tw`mt-0 flex sm:flex-col md:flex-col xs:flex-col items-center items-stretch  lg:flex-row lg:flex-nowrap flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const ColumnWrapper =tw.a`border  border-black p-8 ` 
const Column =tw.div`lg:w-1/4 
lg:border lg:border-black
 md:border md:border-black
  xs:border xs:border-black	
 	shadow-md	border-solid !border-gray-400 rounded-xl  shadow-gray-500	
  max-w-48 lg:ml-4 md:mb-4 sm:mb-4 xs:mb-4 lg:mb-0`
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center	`

const Card = styled.div`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-2 pt-10 pb-6 rounded `}
  .imageContainer {
    ${tw`text-center rounded-full p-8  mb-4`}
    img {
      ${tw`w-full h-full`}
    }
  }
  .title {
    ${tw` font-bold text-lg  leading-none no-underline	`}
  }
`;

const cards = [
    {
      imageSrc: "/assests/DegreeCap.png",
      title: "Active learning approach",
      description: "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com"
    },
    {
      imageSrc: "/assests/youtubeF.PNG",
      title: "Brief video lectures",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com"
    },
    {
      imageSrc: "/assests/badge.png",
      title: "Quizzes & Leaderboard",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://reddit.com"
    },
    {
        imageSrc: "/assests/assignment.png",
        title: "Assignment submission and evaluation",
        description: "Lorem ipsum donor amet siti ceali placeholder text",
        url: "https://reddit.com"
      },
      {
        imageSrc: "/assests/discussion.png",
        title: "Discussion Forums",
        description: "Lorem ipsum donor amet siti ceali placeholder text",
        url: "https://google.com"
      }
  ]
export default () => {
  return (
    <>
    <Container>
    <Heading>Features</Heading>
      <ContentWithPaddingXl>
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column>
            <Card>
                <span className="imageContainer" css={""}>
                  <img src={card.imageSrc || "Images/fasticon.svg"} alt="" css={""} />
                </span>
                <span className="title">{card.title}</span>
              </Card>
        </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
    </Container>

    </>
  );
};
