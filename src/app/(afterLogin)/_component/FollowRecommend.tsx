"use client"

import style from './followRecommend.module.css';
import {User} from "@/model/User";
import Link from "next/link";
import {MouseEventHandler} from "react";

type Props = {
  user: User
}
export default function FollowRecommend({ user }: Props) {
  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {};

  return (
    <Link href={`/${user.id}`} className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </Link>
  )
}