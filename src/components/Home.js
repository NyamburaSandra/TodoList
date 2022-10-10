import React from 'react';
import {NavLink} from "react-router-dom";

function Home() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">TODO APP</h1>
        <p className="col-md-8 fs-4">A simple tool to organise everything. It's a list of tasks you need to complete or things that you want to do. Helping you not forget anything important.</p>
        <button className="btn btn-primary btn-lg" type="button">
          <NavLink to={'/todo-list'}>See Todos</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Home;
