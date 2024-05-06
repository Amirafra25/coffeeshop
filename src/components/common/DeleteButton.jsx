import { useEffect } from "react";

const DeleteButton = ({ onDelete }) => {
    return (
        <button onClick={onDelete} type="button" className="btn btn-danger">delete</button>
    )
}

export default DeleteButton;