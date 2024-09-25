import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState, MembersState, MembersActions } from './reducer';

export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);

const MembersStateContext = createContext<MembersState | undefined>(undefined);
const MembersDispatchContext = createContext<
  React.Dispatch<MembersActions> | undefined
>(undefined);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};
