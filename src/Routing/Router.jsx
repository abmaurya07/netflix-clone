import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout";
import Test from "../Components/Test";
import { routes } from "./Routes";

const AppRouter = () => {


  return ( 

    <BrowserRouter>

   <Routes>
   <Route element={<DefaultLayout />}>
   <Route path="/" element={<Navigate to = "/browse"/>}/>
   <Route path="/browse" element={<Test val='Landing Page' />}/>
   <Route path="/TV&Shows" element={<Test val='TV & Shows' />}/>
   <Route path="/Movies" element={<Test val='Movies' />}/>
   <Route path="/MyList" element={<Test val='My List Page' />}/>

   <Route path="*" element={<Test val='Page Not Found!' />}/>
   </Route>
   {/* <Route element={<DefaultLayout />}>
   {routes.map((item, idx) => {
    return(

   <Route path={item.path} element={item.element} key={idx} />

    )
   })}
   </Route > */}
    </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;