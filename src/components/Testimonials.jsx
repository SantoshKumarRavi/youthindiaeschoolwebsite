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
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;
const PrimaryButtonBase = tw.button`px-8 py-3 border-0 font-bold rounded bg-orange-1000 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200  transition duration-300`;
const Subheading = tw.h5`font-bold text-gray-700  text-center `
const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)`text-center `;
const FlexRight=tw.div`mt-2  w-full`;
const Controls = tw.div`flex items-center lg:mx-4 mt-6`;
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
  ${tw`mt-0 truncate whitespace-normal	`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1 sm:mx-5`}
  }
`;
// const Card = tw.div`h-full flex! flex-col md:ml-24 sm:border max-w-sm  rounded-2xl relative focus:outline-none`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded-md	`
]);

const TextInfo = tw.div`py-6 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;
const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none  py-3 sm:py-6`;
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
//---TESTIMON-----------------------------------------------------
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;
const TestimonialText = tw.div`outline-none bg-gray-300 p-10 ` ;
const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);
const QuoteContainer = tw.div`relative mt-0 lg:mt-0 `;
const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-gray-900`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;
const defaultTestimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
      profileImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Charlotte Hale",
      customerTitle: "CEO, Delos Inc.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      profileImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote:
        "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Adam Cuppy",
      customerTitle: "Founder, EventsNYC",
    },
    {
        imageSrc:
          "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
        profileImageSrc:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
        quote:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        customerName: "Charlotte Hale",
        customerTitle: "CEO, Delos Inc.",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
        profileImageSrc:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
        quote:
          "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        customerName: "Adam Cuppy",
        customerTitle: "Founder, EventsNYC",
      }
  ];
  return (
    <Container>
      <Content>
        <FlexRight>
        <Subheading>OUR SUCCESS STORIES</Subheading>
        <Heading>Testimonials</Heading>
        </FlexRight>
           <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
              <CardSlider ref={setSliderRef} {...sliderSettings}>
           {defaultTestimonials.map((testimonial, index) => (
          <TestimonialText key={index}>
            <QuoteContainer>
              <Quote><HighlightedText>"</HighlightedText> {testimonial.quote}
              <HighlightedText>"</HighlightedText>
              </Quote>
            </QuoteContainer>
            <CustomerInfo>
              <CustomerProfilePicture
                src={testimonial.profileImageSrc}
                alt={testimonial.customerName}
              />
              <CustomerTextInfo>
                <CustomerName>{testimonial.customerName}</CustomerName>
                <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
              </CustomerTextInfo>
            </CustomerInfo>
          </TestimonialText>
        ))}

        </CardSlider>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/> </NextButton>
          </Controls>
      </Content>
    </Container>
  );
};
