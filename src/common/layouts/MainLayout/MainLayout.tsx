import React from 'react';
import s from "./MainLayout.module.css";
import {Header} from "../../components/Header/Header";


export const MainLayout: React.FC = ({children}) => {
  return (
    <div className={s.page}>
      <Header/>
      <div className={s.wrapper}>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};