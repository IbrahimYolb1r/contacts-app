import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import ContactLogo from './assets/ContactViewer.png'

function Home() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    async function getUsers() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
    <div className='container'>
        <div className="row">
            <div className='nav'>
                <img className='nav__logo' src={ContactLogo} alt="" />
                <div className='user__search--container'>
                    <img src={search} alt="" />
                    <input
                        type="text"
                        className='user__search--input'
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder='Enter name here to filter...'
                    />
                </div>
            </div>
                <h2 className='contacts__heading'>My Contacts</h2>
                <div className='contacts__heading--container'>
                    <hr className='contacts__heading--line' />
                </div>

            <div className="user__border">
                <div className="user-list">
                        {users.filter((user) => {
                            if (search === "" || user.name.toLowerCase().includes(search.toLowerCase())) {
                                return user
                            }
                        }).map((user) => (
                            <div className="user" key={user.id}>
                                <div className="user-card">
                                    <div className="user-card__container">
                                        <h3>{user.name}</h3>
                                        <p>
                                            Email: {user.email}
                                        </p>
                                        <p>
                                            Phone: {user.phone}
                                        </p>
                                        <p>
                                            Website: 
                                            {user.website}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home