import { FC } from "react";
import "./index.css";
import { UsersType } from "@/types/UsersType";
import { AiFillRightSquare } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
import { fetchUser } from "@/redux/userSlice";
import { store } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";

const UserCard: FC<UsersType> = ({ avatar_url, id, url, login }: UsersType) => {
  const handleClick = async () => {
    await store.dispatch(fetchUser(url));
  };
  return (
    <Link href="/user" className="user-list-card" onClick={handleClick}>
      <div className="image-wrapper">
        <Image
          className="img"
          src={avatar_url}
          alt={login}
          width={100}
          height={100}
          priority
        />
        {/* <img src={avatar_url} alt="" /> */}
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
    </Link>
  );
};

export default UserCard;
