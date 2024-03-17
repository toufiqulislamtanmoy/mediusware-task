import React from 'react';

const Modal = ({ modalType, data }) => {
    return (
        <div
            className="modal fade"
            id={modalType}
            tabIndex={-1}
            aria-labelledby="modalB"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalB">
                            {modalType}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
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
                        <button data-bs-toggle="modal"
                            data-bs-target="#modalB" className="btn  btn-outline-warning" type="button" >US Contacts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;