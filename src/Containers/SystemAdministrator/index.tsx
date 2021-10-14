import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAdminAccessybility } from '../../store/slice';
import { ADMIN_PASSWORD } from '../../Utils/constants';
import './styles.css'

export const SystemAdministrator: React.FC = () => {
    const [adminAccess, setAdminAccess] = useState<boolean>(true)
    const [addUser, setAddUser] = useState<object>({})
    const [addDiet, setAddDiet] = useState<object>({})
    const [currentUser, setCurrentUser] = useState<object>({})
    const [deleteUser, setDeleteUser] = useState<object>({})

    const dispatch = useDispatch()

    // useEffect(() => {
    //     const adminAccessPassword = prompt('Please type Admin Password')
    //     if (adminAccessPassword === ADMIN_PASSWORD) {
    //         setAdminAccess(true)
    //     } else {
    //         dispatch(setAdminAccessybility(false))
    //     }
    // }, [dispatch])

    const addUserEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setAddUser({
            ...addUser,
            [e.target.name]: e.target.value
        })
    }

    const addDietEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setAddDiet({
            ...addDiet,
            [e.target.name]: e.target.value
        })
    }

    const getCurrentUser = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentUser({
            ...currentUser,
            [e.target.name]: e.target.value
        })
    }
    
    const getDeleteUser = (e: ChangeEvent<HTMLInputElement>) => {
        setDeleteUser({
            ...deleteUser,
            [e.target.name]: e.target.value
        })
    }

    const createUser = () => {
        console.log(addUser)
    }
    const addUserDiet = () => {
        console.log(addDiet)
    }
    const getCurrentUserRequest = () => {
        console.log(currentUser)
    }
    const getDeleteUserRequest = () => {
        console.log(deleteUser)
    }
    const getAllRequest = () => {
        console.log('all')
    }

    return (
        <div className='admin_main' style={{ display: `${adminAccess ? 'block' : 'none'}` }}>
            <div className='getAllContainer'>
                <div className='getAll' onClick={getAllRequest}>
                    Get All
                </div>
            </div>
            <div className='add_header'>
                Create NEW User
            </div>
            <div className='admin_operations_containers'>
                <div className='add_user_container'>
                    <div className='add_block'>
                        <label className='add_label'>Email</label>
                        <input onChange={addUserEvent} className='add_input' type='text' name='email' />
                    </div>
                    <div className='add_block'>
                        <label className='add_label'>Diet ID</label>
                        <input onChange={addUserEvent} className='add_input' type='text' name='id' />
                    </div>
                    <div className='add_block'>
                        <label className='add_label'>Date</label>
                        <input onChange={addUserEvent} className='add_input' type='date' name='date' />
                    </div>
                </div>
            </div>
            <div className='admin_button'>
                <div onClick={createUser}>
                    CREATE
                </div>
            </div>
            <div className='add_header admin_operations_containers_add_role'>
                Add Diet
            </div>
            <div className='admin_operations_containers'>
                <div className='add_user_container'>
                    <div className='add_block'>
                        <label className='add_label'>Diet ID</label>
                        <input onChange={addDietEvent} className='add_input' type='text' name='id' />
                    </div>
                    <div className='add_block'>
                        <label className='add_label'>Current Diet</label>
                        <input onChange={addDietEvent} className='add_input' type='text' name='current_diet' />
                    </div>
                </div>
            </div>
            <div className='admin_button'>
                <div onClick={addUserDiet}>
                    Add
                </div>
            </div>
            <div className='add_header admin_operations_containers_add_role'>
                Get current User
            </div>
            <div className='admin_operations_containers'>
                <div className='add_user_container'>
                    <div className='add_block'>
                        <label className='add_label'>Diet ID</label>
                        <input onChange={getCurrentUser} className='add_input' type='text' name='id' />
                    </div>
                </div>
            </div>
            <div className='admin_button'>
                <div onClick={getCurrentUserRequest}>
                    Get
                </div>
            </div>
            <div className='add_header admin_operations_containers_add_role'>
                Delete current User
            </div>
            <div className='admin_operations_containers'>
                <div className='add_user_container'>
                    <div className='add_block'>
                        <label className='add_label'>Diet ID</label>
                        <input onChange={getDeleteUser} className='add_input' type='text' name='id' />
                    </div>
                </div>
            </div>
            <div className='admin_button'>
                <div onClick={getDeleteUserRequest}>
                    Delete
                </div>
            </div>
        </div>
    )
}