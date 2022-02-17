import React from "react";
import {useState} from "react";
import s from './Pagination.module.css';
import cn from 'classnames'

type PropsType = {
  total: number
  userId: number
  currentPage?: number
  onChangePagination?: (pageNumber: number) => void
  portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({
                                                 total, userId,
                                                 currentPage = 1,
                                                 onChangePagination = x => x,
                                                 portionSize = 3
                                               }) => {

  const [selectedPage, setSelectedPage] = useState(1);

  const onChange = (page: number) => {
    onChangePagination(page);
    setSelectedPage(page);
  }

  let pagesCount = Math.ceil(total / userId);

  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return <div className={cn(s.paginator)}>
    {portionNumber > 1 &&
        <button onClick={() => {
          setPortionNumber(portionNumber - 1)
        }}>PREV</button>}

    {pages
      .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p) => {
        return <span className={cn({
          [s.selectedPage]: selectedPage === p
        }, s.pageNumber)}
                     key={p}
                     onClick={(e) => {
                       onChange(p);
                     }}>{p}</span>
      })}
    {portionCount > portionNumber &&
        <button onClick={() => {
          setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}


  </div>
}