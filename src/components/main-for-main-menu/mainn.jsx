import './style.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Mainn = () => {


    return(
        <div>
            <main>
                <div id="add_btn">
                    <button>
                        <p>Add</p>
                    </button>
                </div>

                <div id="search-bar">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 w-100 p-0">
                                <div className="search-container">
                                    <input type="text" className="form-control search-input" placeholder="Search..."/>
                                    <i className="fas fa-search search-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Mainn;