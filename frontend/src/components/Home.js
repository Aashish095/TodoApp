import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { listContacts, deleteProfile } from '../actions/contactActions'


const Home = () => {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const contactList = useSelector(state => state.contactList)
    const { error, loading, contacts } = contactList

    const contactDelete = useSelector(state => state.contactDelete)
    const { success } = contactDelete

    useEffect(() => {
        dispatch(listContacts())
    }, [dispatch, success])

    const deleteHandler = (id) => {
        dispatch(deleteProfile(id))
    }


    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const data = {
        nodes: contacts.filter((contact) =>
            contact.name.includes(search)
        ),
    }

    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-12 my-5 text-right'>
                        <Link to="/add" className="btn btn-outline-light">
                            Add Contact
                        </Link>
                    </div>
                    <div>
                        {/* <label htmlFor="search">
                            Search by Task:
                            <input id="search" type="text" onChange={handleSearch} />
                        </label> */}
                        <Table striped bordered hover size="sm" variant='light' data={data}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Created Date</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? <h2>Loading...</h2>
                                    : error ? <h3>{error}</h3>
                                        :
                                        contacts.map((contact, id) => (
                                            <tr key={id}>
                                                <td>{id + 1}</td>
                                                <td>{contact.name}</td>
                                                <td>{contact.phone}</td>
                                                <td>{contact.date_created}</td>
                                                <td><Link className="btn btn-info" to={`/edit/${contact.id}`}>Edit</Link></td>
                                                <td><Button variant="danger" onClick={() => deleteHandler(contact.id)}>Delete</Button></td>
                                            </tr>

                                        ))

                                }
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
