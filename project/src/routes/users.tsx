import { createFileRoute, useSearch, getRouteApi, useNavigate, Link } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/users')({
  component: RouteComponent,
   validateSearch: (search) => {
    return {
      role:
        search.role === 'admin' || search.role === 'user'
          ? search.role : undefined, // это для того что бы показвалось обычная юрл без квери параметров 
    };
  },
})


export type users ={
  id: number,
  name: string,
  role: string
}
export type PropsRole = 'admin' | 'user' | 'all'

export const mockUsers = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'user' },
  { id: 4, name: 'Dana', role: 'admin' },
];

function RouteComponent() {
  const [user, setUser] = useState<users[]>(mockUsers)

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
    <>
    {filteredUsers.map(item=> (
      <div key={item.id}>{item.name}
      </div>
    ))}
     <button onClick={()=> handleFilter('admin')}>Admin</button>
      <button onClick={()=> handleFilter('user')}>User</button>
       <button onClick={()=> handleFilter('all')}>All</button>
       <Link to='/'>Link</Link>

    </>
  )}