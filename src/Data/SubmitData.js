import React from 'react';

const SubmitData = ({contact, handleEditClick}) => {
    return (
        <tr>
        <td>{contact.name}</td>
        <td>{contact.age}</td>
        <td>{contact.course}</td>
        <td>{contact.batch}</td>
        <td>
          <button type="button" onClick={(event) => handleEditClick(event, contact)}>
            Edit
          </button>
        </td>
      </tr>
    );
}

export default SubmitData;