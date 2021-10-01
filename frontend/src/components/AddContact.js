import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { pageContacts } from '../actions/contactActions'

const AddContact = ({ history }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone) {
            alert('please fill in all fields')
        }

        dispatch(pageContacts(name, phone))
        history.push('/')
    }

    return (
        <>
            <div className="container">
                <h1 className="display-7 my-5 text-center ">Add Contact</h1>
                <div className="row">

                    <div className="col-md-7 shadow mx-auto p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type='text' placeholder='Name' class="form-control" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type='number' placeholder='Phone Number' class="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type='submit' placeholder='Add Student' className="btn btn-block btn-light" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddContact
