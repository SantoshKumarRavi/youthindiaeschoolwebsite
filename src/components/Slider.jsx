import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
// import { SectionHeading } from "components/misc/Headings";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
// import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
// import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
// import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide`
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-5`;
const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-orange-1000 border-0 border-orange-1000 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200  transition duration-300`;
const Subheading = tw.h5`font-bold text-gray-500  ml-12 sm:ml-8 lg:ml-32 lg:pl-5`

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)`lg:pl-5 lg:ml-32 ml-12 `;
const FlexRight=tw.div`mt-2  w-full`;
const Controls = tw.div`flex items-center lg:mx-16 `;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 ml-0 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;
const HighlightedText = tw.span`text-orange-1000 font-medium	`;
const CardSlider = styled(Slider)`
  ${tw`my-2 truncate whitespace-normal`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1 sm:mx-5`}
  }
`;
// const Card = tw.div`h-full flex! flex-col md:ml-24 sm:border max-w-sm  rounded-2xl relative focus:outline-none`;
const Card = tw.div`h-full flex !w-72 h-96  border-solid border-gray-600 rounded-lg shadow-2xl p-8 flex-col sm:border max-w-sm  relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full  xs:h-40  bg-cover bg-center rounded-md rounded-xl	`
]);

const TextInfo = tw.div`pt-6 sm:pt-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;
const Description = tw.p`text-sm  md:my-0 md:mb-2 sm:mt-4`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none  py-1 sm:py-2`;
export default () => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  const cards = [
    {
      imageSrc: "/assests/calculater.PNG",
      title: "Mathematics",
      highlight:"73,000+",
      description: `active learners are currently learning this course.`,
    },
    {
      imageSrc: "/assests/movingBell.PNG",
      title: "Science",
      highlight:"29,000+",
      description: "Learners are currently learning this course.",
    },
    {
      imageSrc: "/assests/worldmap.PNG",
      title: "History",
      highlight:"14,000+",
      description: "Learners are currently learning this course.",
    },
    {
      imageSrc: "/assests/movingBell.PNG",
      title: "Science",
      highlight:"29,000+",
      description: "Learners are currently learning this course.",
    }
  ]

  return (
    <Container id="courses">
      <Content>
        <FlexRight>
        <Subheading>LEARN FROM US</Subheading>
        <Heading>Top Courses Offered</Heading>
        </FlexRight>
           <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
              <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
              
                </TitleReviewContainer>
                <Description><HighlightedText>{card.highlight}</HighlightedText>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Start Learning <ChevronRightIcon/> </PrimaryButton>
            </Card>
          ))}
        </CardSlider>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/> </NextButton>
          </Controls>
      </Content>
    </Container>
  );
};
