import React from "react";
import s from './MainPage.module.css';
import {TODOS_ROUTE} from "../../router/routes";
import {Link} from 'react-router-dom';

export const MainPage: React.FC = () => {
  return (
    <div className={s.content}>
      <div className={s.titleBlock}>
        <h1>TodoList - всё просто!</h1>
        <h2>Создавай и меняй список дел так, как ты хочешь)</h2>
        <Link to={TODOS_ROUTE}><button className={s.btnStart}>Начать!</button></Link>
      </div>
    </div>
  )
}