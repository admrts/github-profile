"use client";
import { ProfilCard } from "@/components";
import { RootState } from "@/redux/store";

import { FC } from "react";
import { useSelector } from "react-redux";

const User: FC = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.user);

  console.log("userpage");

  return (
    <div>
      {user ? (
        <ProfilCard
          name={user.name}
          login={user.login}
          avatar_url={user.avatar_url}
          html_url={user.html_url}
          bio={user.bio}
          followers={user.followers}
          following={user.following}
          public_repos={user.public_repos}
        />
      ) : (
        isLoading && <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default User;
