"use client";
import { FC, useEffect } from "react";
import "./index.css";
import { UserType } from "@/types/UsersType";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { RootState, store } from "@/redux/store";
import { fetchUser } from "@/redux/userSlice";
import { useSelector } from "react-redux";
interface MyProps {
  userName: string;
}

const ProfileCard: FC<MyProps> = ({ userName }: MyProps) => {
  const { user, isLoading, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    store.dispatch(fetchUser(userName));
    console.log("123");
  }, [userName]);

  return (
    <>
      {user ? (
        <div className="profil-card">
          <div className="image-wrapper">
            <Image
              className="img"
              src={user.avatar_url}
              alt={user.name ? user.name : ""}
              width={100}
              height={100}
              priority
            />
          </div>
          <a href={user.html_url} className="profil-link" target="_blank">
            <span> @{user.login}</span>
            <span>
              <FiExternalLink />
            </span>
          </a>

          {user.name && <div className="profil-name">{user.name}</div>}

          {user.bio && <div className="profil-bio">{user.bio}</div>}
          <div className="info">
            <div className="follow">
              <div className="followers">
                <span>{user.followers}</span>
                <span>Followers</span>
              </div>
              <div className="following">
                <span>{user.following}</span>
                <span>Following</span>
              </div>
            </div>
            <div className="repo">
              <span>
                <RiGitRepositoryLine />
              </span>
              <span>{user.public_repos}Repositories</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
};

export default ProfileCard;
