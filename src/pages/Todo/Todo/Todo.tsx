import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import s from './Todo.module.css';
import {getTodo, getTodoLoading, getTodos, getTodoTotal, getTodoUserId} from "../selectors";
import {TodoRawData} from "../types";
import {useDispatch, useSelector} from "react-redux";
import {createTodoStart, deleteTodoStart, editTodoStart, loadTodosStart, loadTodoStart} from "../actions";
import createIcon from '../../../assets/image/createIcon.svg';
import editIcon from '../../../assets/image/editIcon.svg';
import deleteIcon from '../../../assets/image/deleteIcon.svg';
import {Paginator} from "../../../common/components/Pagination/Pagination";

export const Todo: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const todo = useSelector(getTodo);
  const loading = useSelector(getTodoLoading);
  const total = useSelector(getTodoTotal);
  const userId = useSelector(getTodoUserId);
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [id, setId] = useState<TodoRawData['id'] | null>(null);
  const todos = useSelector(getTodos);
  const [isModeAdd, setIsModeAdd] = useState(false);
  const [editData, setEditData] = useState({
    userId: 11,
    title: '',
    completed: false
  })

  const loadTodos = () => {
    dispatch(loadTodosStart(userId));
  }

  useEffect(() => {
    loadTodos();
  }, [])

  useEffect(() => {
    if (!loading && deleteLoading) {
      setDeleteLoading(false);
      loadTodos();
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && editLoading) {
      setEditLoading(false);
      loadTodos();
    }
  }, [loading]);

  useEffect(() => {
    if (todo) {
      setEditData({
        ...editData,
        userId: todo?.userId!,
        title: todo?.title!,
        completed: todo?.completed!
      });
    }
  }, [todo])

  const onChange = (
    userId: number
  ) => {
    dispatch(loadTodosStart(userId));
  };

  const onOk = () => {
    setIsModeAdd(false);
    !id
      ? dispatch(createTodoStart(editData))
      : dispatch(editTodoStart({...editData, id}));

    setEditData({...editData, title: ''});
    setEditLoading(true);
  };

  const onCancel = () => {
    setIsModeAdd(false);
    setEditData({...editData, title: ''});
    setId(null);
  };

  const onEdit = (id: TodoRawData['id']) => {
    dispatch(loadTodoStart(id));

    setIsModeAdd(true);
    setId(id);
    setEditLoading(true);
  };

  const onDelete = (id: TodoRawData['id']) => {
    dispatch(deleteTodoStart(id));

    setDeleteLoading(true);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditData({...editData, title: e.currentTarget.value});
  }

  const onChangeCheckbox = (
    id: number,
    userId: number,
    title: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(editTodoStart({...editData, id, userId, title, completed: e.target.checked}));
  }

  const data = useMemo(() =>
    todos.map((t) => (
      <div key={t.id} className={s.todo}>
        <div>
          <input
            type={'checkbox'}
            defaultChecked={t.completed}
            onChange={(e) => onChangeCheckbox(t.id, t.userId, t.title, e)}
          />
          <span>{t.title}</span>
        </div>
        <div className={s.changeIconBlock}>
          <img
            src={editIcon}
            className={s.changeIcon}
            alt={'edit icon'}
            onClick={() => onEdit(t.id)}
          />
          <img
            src={deleteIcon}
            className={s.changeIcon}
            alt={'delete icon'}
            onClick={() => onDelete(t.id)}
          />
        </div>
      </div>
    )), [todos]
  )

  return (
    <div className={s.content}>
      {!isModeAdd ?
        <div className={s.createBlock} onClick={() => setIsModeAdd(true)}>
          <img src={createIcon} className={s.createIcon} alt={'add icon'}/>
          <span>Добавить</span>
        </div>
        :
        <div className={s.changeBlock}>
          <input
            type={'text'}
            placeholder={'Введите заголовок'}
            value={editData.title}
            onChange={onChangeTitle}
          />
          <div className={s.btnBlock}>
            <button className={s.btnOk} onClick={onOk}>
              {!id ? 'Добавить' : 'Изменить'}
            </button>
            <button className={s.btnCancel} onClick={onCancel}>
              Отмена
            </button>
          </div>
        </div>
      }
      <div className={s.todos}>{data}</div>

      <Paginator total={200} userId={20} onChangePagination={onChange}/>
    </div>
  )
})