"use client";
import "./index.css";
import { RootState } from "@/redux/store";
import { FC } from "react";
import { useSelector } from "react-redux";
import { UserListCard } from "../";
import { UsersType } from "@/types/UsersType";

const UserList: FC = () => {
  const { searchUsers, isLoading } = useSelector(
    (state: RootState) => state.searchUsers
  );
  if (searchUsers.length > 0) {
    return (
      <div className="user-list">
        {searchUsers.map((item: UsersType, index: number) => (
          <UserListCard
            key={item.id}
            avatar_url={item.avatar_url}
            id={index}
            login={item.login}
            url={item.url}
          />
        ))}
      </div>
    );
  }
  return <div>{isLoading && <div className="loading">Loading...</div>}</div>;
};

export default UserList;
