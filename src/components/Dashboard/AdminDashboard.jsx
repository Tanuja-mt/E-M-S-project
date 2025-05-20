import React, { useEffect } from 'react';
import Header from '../../other/Header';
import CreateTask from '../../other/CreateTask';
import AllTask from '../../other/AllTask';
import axios from 'axios';

const AdminDashboard = (props) => {

    const API = "https://pokeapi.co/api/v2/";
    const data = async () => {
        try {
            const res = await axios.get(API)
            console.log(res)
        } catch (error) {
        }
    }
    useEffect(() => {
        data();
    }, []),
        console.log(data)
    
    return (
        <div className='h-screen w-full p-10 '>
            <Header changeUser={props.changeUser}/>
            <CreateTask  />
            <AllTask />
        </div>
    )
}

export default AdminDashboard