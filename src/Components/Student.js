import React from 'react';
import EditData from './EditData'

const Student = () => {
    return (
        <div>
            <div className="card-body">
        <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'white' }}>
          Student Details
        </h1>
        <EditData />
      </div>
        </div>
    );
}

export default Student;