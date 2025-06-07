import type { FC } from "react";
import { Sidebar } from "./sidebar/sidebar";
import { Header } from "./header/header";
import style from "./layout.module.scss";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.sidebar}>
          <Sidebar />
        </div>
        <div className={style.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
