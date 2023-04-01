"use client";
import { FC } from "react";
import { ProfileCard } from "@/components";
interface MyProps {
  params: {
    id: string;
  };
}

const UserPage: FC<MyProps> = ({ params }: MyProps) => {
  return (
    <div>
      <ProfileCard userName={params.id} />
    </div>
  );
};

export default UserPage;
