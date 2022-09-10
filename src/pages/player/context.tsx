import React, {
  Context,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface PlayerContextModel {
  name?: string;
}

interface PlayerDefaultContext {
  state: PlayerContextModel;
  setState: React.Dispatch<any> | ((value: any) => void);
}

const PlayerContext: Context<PlayerDefaultContext> = createContext({
  state: {},
  setState: (value) => {},
});

export const usePlayerContext = () => {
  return useContext(PlayerContext);
};

type Props = {
  children: ReactNode;
  value: PlayerContextModel;
};

export const PlayerContextProvider: React.FC<Props> = ({
  value,
  children,
}: Props) => {
  const [state, setState] = useState(value);

  return (
    <PlayerContext.Provider value={{ state, setState }}>
      {children}
    </PlayerContext.Provider>
  );
};
