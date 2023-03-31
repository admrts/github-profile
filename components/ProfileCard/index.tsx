"use client";
import { FC } from "react";
import "./index.css";
import { UserType } from "@/types/UsersType";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

const ProfileCard: FC<UserType> = ({
  avatar_url,
  login,
  name,
  html_url,
  bio,
  followers,
  following,
  public_repos,
}: UserType) => {
  return (
    <div className="profil-card">
      <div className="image-wrapper">
        <img src={avatar_url} alt="" />
      </div>
      <a href={html_url} className="profil-link" target="_blank">
        <span> @{login}</span>
        <span>
          <FiExternalLink />
        </span>
      </a>

      {name && <div className="profil-name">{name}</div>}

      {bio && <div className="profil-bio">{bio}</div>}
      <div className="info">
        <div className="follow">
          <div className="followers">
            <span>{followers}</span>
            <span>Followers</span>
          </div>
          <div className="following">
            <span>{following}</span>
            <span>Following</span>
          </div>
        </div>
        <div className="repo">
          <span>
            <RiGitRepositoryLine />
          </span>
          <span>{public_repos}Repositories</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
