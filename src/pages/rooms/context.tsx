import React, { Context, createContext, ReactNode, useContext } from "react";
import { CreateRoomUseCase } from "../../use-cases/interfaces/create-room";

export interface RoomsContextModel {
  createRoomUseCase?: CreateRoomUseCase;
}

export interface RoomsDefaultContext {
  value: RoomsContextModel;
  setValue: (value: any) => void;
}
const defaultValue: RoomsDefaultContext = {
  value: {
    createRoomUseCase: undefined,
  },
  setValue: (value: any) => {},
};
const RoomsContext: Context<RoomsDefaultContext> = createContext(defaultValue);

export const useRoomsContext = () => {
  return useContext(RoomsContext);
};

type Props = {
  value: RoomsContextModel;
  setValue: (value: any) => void;
  children: ReactNode;
};

export const RoomsProvider: React.FC<Props> = ({
  value,
  setValue,
  children,
}: Props) => {
  return (
    <RoomsContext.Provider value={{ value, setValue }}>
      {children}
    </RoomsContext.Provider>
  );
};
