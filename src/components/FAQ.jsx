import React ,{useState} from "react";
import {motion} from "framer-motion";
import tw from "twin.macro";
import styled,{ css } from "styled-components/macro"; //eslint-disable-line , 
// import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
// import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

export const Container = tw.div`relative`;
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-20 lg:pt-12 lg:pb-10`;
export const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
export const SubheadingBase = tw.h5`font-bold text-primary-500`
export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`;
// export const ContentWithPaddingLg= tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
// export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
// export const Content2Xl= tw.div`max-w-screen-2xl mx-auto`;
const PrimaryBackgroundContainer = tw(Container)`px-8 text-gray-900`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const FaqsContainer = tw.div` w-full  lg:flex justify-between items-start max-w-screen-lg mx-auto`;
const FaqsColumn = tw.div`w-full  lg:max-w-lg lg:mr-12 last:mr-0`;
const Faq = tw.div`select-none   cursor-pointer border-b-2 border-primary-300 hover:border-primary-500 transition-colors duration-300 py-6`;
const Question = tw.div`flex  py-4 px-6  border-solid border-2 rounded-xl border-gray-400 shadow-md justify-between items-center`;
const QuestionText = tw.div`text-sm sm:text-lg font-semibold tracking-wide`;
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const Answer = tw(motion.div)`hidden text-justify	 px-8 text-sm font-normal mt-4 text-gray-600`;

 const FAQ= ({
  subheading = "",
  heading = "Frequently Asked Questions",
  description="",
  faqs = [
    {
      question: "Is lunch provided free of cost ?",
      answer:
        "Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system."
    },
    {
      question: "Do you have 2 Bedroom suites ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Are Wi-Fi costs included in the price ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Where can I reach you for support ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "What kind of SLA Guarantee do you provide ? ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Where are the servers located ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }
  ]
}) => {
  const faqCol1 = [];
  const faqCol2 = [];
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  faqs.map((faq, index) => {
    const renderedFaq = (
      <Faq key={index} onClick={() => toggleQuestion(index)}>
        <Question>
          <QuestionText>{faq.question}</QuestionText>
          <QuestionToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 }
            }}
            initial="collapsed"
            animate={activeQuestionIndex === index ? "open" : "collapsed"}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ChevronDownIcon />
          </QuestionToggleIcon>
        </Question>
        <Answer
          variants={{
            open: { opacity: 1, height: "auto", marginTop: "16px", display: "block" },
            collapsed: { opacity: 0, height: 0, marginTop: "0px", display: "none" }
          }}
          initial="collapsed"
          animate={activeQuestionIndex === index ? "open" : "collapsed"}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {faq.answer}
        </Answer>
      </Faq>
    );

    if (index % 2 === 0) faqCol1.push(renderedFaq);
    else faqCol2.push(renderedFaq);

    return null;
  });
  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <FaqsContainer>
          <FaqsColumn>{faqCol1}</FaqsColumn>
          <FaqsColumn>{faqCol2}</FaqsColumn>
        </FaqsContainer>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};

export default FAQ
