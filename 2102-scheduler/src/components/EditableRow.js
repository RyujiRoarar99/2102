import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <table>
    <thead>
    <tr>
    <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the S/N..."
          name="sn"
          value={editFormData.sn}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the Model Number..."
          name="model_no"
          value={editFormData.model_no}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the Scope Type..."
          name="scope_type"
          value={editFormData.scope_type}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the Brand Number..."
          name="brand_no"
          value={editFormData.brand_no}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the Serial Number..."
          name="serial_number"
          value={editFormData.serial_number}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
    </thead>
    </table>
  );
};

export default EditableRow;