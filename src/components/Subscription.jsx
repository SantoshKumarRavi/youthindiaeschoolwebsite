import React from "react";
import tw from "twin.macro";
// import styled, { css } from "styled-components/macro"; //eslint-disable-line
import Box from '@mui/material/Box';
// import { makeStyles } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
const useStyles = theme =>{
  return ({
    newsLetter: {
[theme.breakpoints.down('sm')]: {
      paddingTop:"0rem",
      paddingBottom:"3.8rem",
      },
      [theme.breakpoints.between('sm', 'md')]:{
        height:"9rem",
        marginX:"2.5rem",
        paddingTop:"2.7rem",
      },
      [theme.breakpoints.between('md', 'lg')]:{
        height:"9rem",
        marginX:"2.5rem",
        paddingTop:"2.2rem",
  },
      [theme.breakpoints.between('lg', 'xl')]:{
        paddingTop:"2.2rem",
        height:"9rem",
        marginX:"2.5rem",
      }
    },
  })
}
const Subscription=({ classes }) => {
     const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded lg:bg-white md:bg-white sm:bg-white xs:bg-orange-1000 text-gray-100 focus:outline-none transition duration-300`;
    //  const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;
    // const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
    // const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
    // const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
    const SubscribeForm = tw.div`lg:mt-1  text-sm sm:flex  max-w-xs sm:max-w-none mx-auto sm:mx-0`;
    const SubscribeFormWrapper = tw.div`lg:mt-1 rounded-xl lg:mx-32 sm:mx-6 md:mx-12 bg-white max-w-xs sm:max-w-none mx-auto sm:mx-0`;
    const Input = tw.input`bg-white px-16 text-lg py-3 sm:border-r-0 drop-shadow-2xl border-solid border-2 border-gray-300   shadow-xl  rounded sm:rounded-r-none  focus:outline-none transition duration-300 w-full`;
    const SubscribeButton = tw(PrimaryButtonBase)`mt-4 border-solid shadow-xl  lg:border-gray-300 md:border-gray-300 sm:border-gray-300 xs:border-orange-1000 border-2 sm:mt-0 w-full sm:w-auto rounded   px-10 py-2`;
    const InsideSubscribeButton = tw.div`bg-orange-1000 lg:py-3 md:py-3 sm:py-3 lg:text-xl md:text-xl sm:text-xl xs:text-3xl lg:px-16 md:px-16 sm:px-16  rounded-md	 sm:w-full `;
    // const ColumnHeading = tw.h5`uppercase font-bold`;
return(
   <Box
      className={classes.newsLetter}
      sx={{
        paddingX:"1rem",
        background: "linear-gradient(to bottom, white 50%,#1F2433 50%)",
    }}
    >
    {/* <Box
     sx={{
      background: "white",
      }}
    > */}
    <SubscribeFormWrapper>
    <SubscribeForm>
        <Input type="email" placeholder="Your Email Address" />
        <SubscribeButton type="submit">
          <InsideSubscribeButton>Subscribe</InsideSubscribeButton>
        </SubscribeButton>
    </SubscribeForm>
    </SubscribeFormWrapper>
    {/* </Box> */}

    </Box>

)
}
export default withStyles(useStyles)(Subscription)
