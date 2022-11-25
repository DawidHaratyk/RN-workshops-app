import React, { useState } from "react";
import UserProfile from "../components/UserProfile/UserProfile";

export const UserProfileScreen = ({ route }: any) => {
  const userUuid: string = route.params.userId;

  const [isEntirePostShown, setIsEntirePostShown] = useState(false);

  return (
    <UserProfile
      isEntirePostShown={isEntirePostShown}
      setIsEntirePostShown={setIsEntirePostShown}
      userUuid={userUuid}
    />
  );
};
