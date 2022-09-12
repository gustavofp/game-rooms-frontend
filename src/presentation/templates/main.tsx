import React, { PropsWithChildren } from "react";
import Navbar from "presentation/components/navbar";
// import { RoomsContext } from "pages/rooms/context";

const MainTemplate: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      {/* <RoomsContext.Provider value={{}}> */}
      <Navbar />
      {children}
      {/* </RoomsContext.Provider> */}
    </>
  );
};

export default MainTemplate;
