import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../mock-data.json";
import './TableStyles.css'
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";

const Table = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    sn: "",
    model_no: "",
    scope_type: "",
    brand_no: "",
    serial_number: "",
  });

  const [editFormData, setEditFormData] = useState({
    sn: "",
    model_no: "",
    scope_type: "",
    brand_no: "",
    serial_number: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      sn: addFormData.sn,
      model_no: addFormData.model_no,
      scope_type: addFormData.scope_type,
      brand_no: addFormData.brand_no,
      serial_number: addFormData.serial_number,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      sn: editFormData.sn,
      model_no: editFormData.model_no,
      scope_type: editFormData.scope_type,
      brand_no: editFormData.brand_no,
      serial_number: editFormData.serial_number,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      sn:contact.sn,
      model_no: contact.fullName,
      scope_type: contact.address,
      brand_no: contact.phoneNumber,
      serial_number: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Model no.</th>
              <th>Scope Type</th>
              <th>Brand Number</th>
              <th>Serial no.</th>
              <th>Ass</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Scope</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="sn"
          required="required"
          placeholder="Enter the S/N..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="model_no"
          required="required"
          placeholder="Enter the Model Number..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="scope_type"
          required="required"
          placeholder="Enter the Scope Type..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="brand_no"
          required="required"
          placeholder="Enter the Brand Number..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="serial_number"
          required="required"
          placeholder="Enter the Serial Number of your device..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Table;