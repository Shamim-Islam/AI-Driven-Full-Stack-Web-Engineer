import React from 'react';
import UserCard from '../userCard/page';

const UsersPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UsersPage;