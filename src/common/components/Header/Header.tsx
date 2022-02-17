import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import s from './Header.module.css';
import logoIcon from '../../../assets/image/logo.png';
import {MAIN_ROUTE, TODOS_ROUTE} from "../../../router/routes";

export const Header: React.FC = () => {
  const history: any = useHistory();

  return (
    <header className={s.header}>
      <Link className={s.logo} to={MAIN_ROUTE}>
        <img src={logoIcon} className={s.logoIcon}/>
        <span>TodoList</span>
      </Link>
      <div className={s.navbar}>
        <ul>
          <Link to={MAIN_ROUTE}>
            <li className={history.location.pathname === '/' ? s.activeLink : ''}>Главная</li>
          </Link>
          <Link to={TODOS_ROUTE}>
            <li className={history.location.pathname === '/todos' ? s.activeLink : ''}>Список</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
