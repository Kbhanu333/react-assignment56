import React from 'react';

const EnterData = (editFormData, handleEditFormChange) => {
    return (
        <tr>
        <td>
          <input type="text" required="required" placeholder="Enter a name..." name="name"value={editFormData.name}onChange={handleEditFormChange}></input>
        </td>
        <td>
          <input type="number" required="required" placeholder="Enter your age .." name="age"value={editFormData.age} onChange={handleEditFormChange}></input>
        </td>
        <td>
          <input type="text" required="required" placeholder="Enter the course..."name="course" value={editFormData.course} onChange={handleEditFormChange}></input>
        </td>
        <td>
          <input type="text" required="required" placeholder="Enter the batch..."name="batch"value={editFormData.batch}onChange={handleEditFormChange}></input>
        </td>
        <td>
          <button  type="submit">Save</button>
        </td>
      </tr>
    );
}

export default EnterData;