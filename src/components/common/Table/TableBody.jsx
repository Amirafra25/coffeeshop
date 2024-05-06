import React from "react";
import { Link } from "react-router-dom";
import Like from "../Like";
import DeleteButton from "../DeleteButton";

export default function TableBody({ foodBody, onLiked, onDelete }) {
  return (
    <tbody>
      {foodBody.map((food) => (
        <tr key={food._id}>
          <td>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/foods/${food._id}`}
            >
              {food.name}
            </Link>
          </td>
          <td>{food.price}</td>
          <td>{food.category.name}</td>
          <td>
            <Like liked={food.liked} onToggleLiked={() => onLiked(food)} />
          </td>
          <td>
            <DeleteButton onDelete={() => onDelete(food)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
