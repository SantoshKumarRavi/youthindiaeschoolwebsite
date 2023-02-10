import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro";
const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto `}
`;
const VerticalSpacer = tw.div`mt-0 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw` text-center rounded-full p-5 flex-shrink-0 bg-gray-200`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-lg leading-none`}
  }

  .description {
    ${tw`mt-1  sm:mt-4 font-medium text-secondary-100 sm:text-justify xs:text-center leading-7`}
  }
`;


export default () => {
  const defaultCards = [
    {
      imageSrc: "",
      title: "Online Lectures",
      description: "The lecture videos are breif and engaging and doesn’t exceed 20 minutes."
    },
    { imageSrc: "", title: "Certified Instructors" ,  description: "Instructors are here to make you learn every concept  to ensure deep understanding."},
    { imageSrc: "", title: "Exams & Grades",  description: "Online examination mode with report card, instantly shared with parents and students." },
    { imageSrc: "", title: "Course certificate",  description: "After completing a course, you’ll be eligible to receive a E-Course Certificate for a small fee." },
    { imageSrc: "", title: "Discussion Forums",  description: "The LMS comes equipped with discussion forum to clear every doubt for effective learning." },
    { imageSrc: "", title: "Attendance & Timetable",  description: "Easily mark the attendance and create an error-free timetable." }
  ];
  return (
    <Container>
      <ThreeColumnContainer>
       <VerticalSpacer/>
        {defaultCards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || "Images/fasticon.svg"} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
