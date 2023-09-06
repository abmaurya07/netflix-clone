import React, { useState } from "react";
import { Box } from "@mui/material";
import videoPreview from './groot.mp4'

function Banner() {


  return (
   <Box sx={{
    width:'100vw',
    overflow:'hidden'
   }}>

<video
            autoPlay
            loop
            controls
            style={{
             width:'100%',
             height:'auto'
            
            }}
          >
            <source
              src={videoPreview}
              type="video/mp4"
            />
          </video>


      </Box>
   
  );
}

export default Banner;