import React, { PropsWithChildren } from "react";
import Navbar from "../components/navbar";
import { PlayerContextProvider } from "../pages/player/context";
// import { RoomsContext } from "../pages/rooms/context";

const MainTemplate: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <PlayerContextProvider
      value={{
        name: "",
      }}
    >
      {/* <RoomsContext.Provider value={{}}> */}
      <Navbar />
      {children}
      {/* </RoomsContext.Provider> */}
    </PlayerContextProvider>
  );
};

export default MainTemplate;
