import { Button, Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react';

const Problem2 = () => {
    const [showOnlyEven, setShowOnlyEven] = useState(false);
    const [allContact, setAllContact] = useState([]);
    const [usContact, setUsContact] = useState([]);


    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => {
                setAllContact(data?.results);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/country-contacts/us/')
            .then(res => res.json())
            .then(data => {
                setUsContact(data?.results);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log(allContact?.length);
    const filteredContacts = showOnlyEven ? allContact.filter(contact => contact.phone % 2 === 0) : allContact;
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal"
                        data-bs-target="#modalA">All Contacts</button>
                    <button
                        data-bs-toggle="modal"
                        data-bs-target="#modalB"
                        className="btn btn-lg btn-outline-warning" type="button" >US Contacts
                    </button>


                </div>

            </div>



            {/* Modal A*/}
            <div
                class="modal fade"
                id="modalA"
                tabIndex={-1}
                aria-labelledby="modalA"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalA">
                                Modal A
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    {showOnlyEven ?
                                        filteredContacts?.map(result => (
                                            <div
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalC"
                                                className="col-md-6" key={result.id}>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Phone: {result.phone}</h5>
                                                        <p className="card-text">Country: {result.country.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )) :
                                        allContact?.map(result => (
                                            <div
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalC"
                                                className="col-md-6" key={result.id}>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Phone: {result.phone}</h5>
                                                        <p className="card-text">Country: {result.country.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={showOnlyEven} id="flexCheckDefault" onChange={() => setShowOnlyEven(!showOnlyEven)} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Only Even
                                </label>
                            </div>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button className="btn  btn-outline-primary" type="button" data-bs-toggle="modal"
                                data-bs-target="#modalA">All Contacts
                            </button>
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#modalB"
                                className="btn  btn-outline-warning" type="button" >US Contacts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal B*/}
            <div
                class="modal fade"
                id="modalB"
                tabIndex={-1}
                aria-labelledby="modalB"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalB">
                                Modal B
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    {usContact.length > 0 ?
                                        usContact?.map(result => (
                                            <div
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalC"
                                                className="col-md-6" key={result.id}>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Phone: {result.phone}</h5>
                                                        <p className="card-text">Country: {result.country.name}</p>
                                                    </div>
                                                </div>
                                            </div>


                                        )) :
                                        <p>No Contact Found in us</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button className="btn  btn-outline-primary" type="button" data-bs-toggle="modal"
                                data-bs-target="#modalA">All Contacts</button>
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#modalB"
                                className="btn  btn-outline-warning" type="button" >US Contacts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal C*/}
            <div
                class="modal fade"
                id="modalC"
                tabIndex={-1}
                aria-labelledby="modalC"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalC">
                                Modal C
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    {allContact?.slice(0, 6).map(result => (
                                        <div className="col-md-6" key={result.id}>
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">Phone: {result.phone}</h5>
                                                    <p className="card-text">Country: {result.country.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button className="btn btn-outline-primary" type="button" data-bs-toggle="modal"
                                data-bs-target="#modalA">All Contacts</button>
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#modalB"
                                className="btn  btn-outline-warning" type="button" >US Contacts
                            </button>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Problem2;