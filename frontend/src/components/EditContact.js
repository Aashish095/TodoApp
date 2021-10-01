import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { pageDetails, updateProfile } from '../actions/contactActions'

const EditContact = ({ history }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const { id } = useParams();


    const contactDetails = useSelector(state => state.contactDetails)
    const { error, loading, contact } = contactDetails



    const dispatch = useDispatch()

    useEffect(() => {

        if (!contact || !contact.name) {
            dispatch(pageDetails(id))
        } else {

            setName(contact.name)
            setPhone(contact.phone)
        }

    }, [contact, dispatch, id])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProfile({
            'id': contact.id,
            "name": name,
            "phone": phone
        }, id))
        // dispatch(updateProfile(id))
        history.push('/')
        console.log({
            'id': contact.id,
            "name": name,
            "phone": phone
        });

    }

    return (
        <>
            {loading ? <h2>Loading...</h2>
                : error ? <h3>{error}</h3>
                    :
                    <div className="container">
                        <h1 className="display-7 my-5 text-center ">Update Contact </h1>
                        <div className="row">

                            <div className="col-md-7 shadow mx-auto p-5">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input type='text' placeholder='Name' className="form-control" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input type='number' placeholder='Phone Number' className="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input type='submit' placeholder='Add Student' className="btn btn-block btn-light" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

            }
        </>

    )
}

export default EditContact
