import { useEffect, useState } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return [users, setUsers]
}

export default useUsers;