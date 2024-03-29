import React, { useState } from "react";
import { AppRouter } from "./AppRouter";

import { UserContext } from "./UserContext";

export const MainApp = () => {
  // const user = {
  //   id: 123,
  //   name: 'Alain Serrano',
  //   email: 'alain@gmail.com'
  // }
  const [user, setUser] = useState({});
  return (
    <div>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
};
