"use client";
import { FC } from "react";
import "./index.css";
import { UsersType } from "@/types/UsersType";
import { AiFillRightSquare } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UserCard: FC<UsersType> = ({ avatar_url, id, url, login }: UsersType) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${login}`);
  };
  return (
    <div className="user-list-card" onClick={handleClick}>
      <div className="image-wrapper">
        <Image
          className="img"
          src={avatar_url}
          alt={login}
          width={100}
          height={100}
          priority
        />
      </div>
      <p className="username">@{login}</p>
      <div className="best-match">
        {id === 0 && (
          <div className="crown">
            <FaCrown />
            <span>Best Match</span>
          </div>
        )}
      </div>
      <AiFillRightSquare className="arrow" />
    </div>
  );
};

export default UserCard;
