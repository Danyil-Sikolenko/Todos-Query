import { useState } from "react";
import type { users, PropsRole } from '../../shared/types/TasksTypes';
import {  getRouteApi, useNavigate, Link } from '@tanstack/react-router';
import styles from './user.module.css';


export const mockUsers = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'user' },
  { id: 4, name: 'Dana', role: 'admin' },
];

export function UserFilter () {
  const [user] = useState<users[]>(mockUsers)

 const UsersRoute = getRouteApi('/users'); //возвращает объект с хуками, привязанными к маршруту
 const { role } = UsersRoute.useSearch();
 const navigate = useNavigate()
console.log(role); 

const filteredUsers = role ? user.filter((item) => item.role === role) : user;

const handleFilter = (value: PropsRole) => {
  navigate({
    search: {
      role: value === 'all' ? undefined : value,
    },
  });
};
  
  return (
    <div style={{paddingTop: '100px'}}>
    <div className={styles.container}>
      <div className={styles.userList}>
        {filteredUsers.map((item) => (
          <div key={item.id} className={styles.userItem}>
            {item.name}
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleFilter('admin')} className={styles.button}>Admin</button>
        <button onClick={() => handleFilter('user')} className={styles.button}>User</button>
        <button onClick={() => handleFilter('all')} className={styles.button}>All</button>
      </div>
      <Link to="/" className={styles.link}>Link</Link>
    </div>
    </div>
  )}