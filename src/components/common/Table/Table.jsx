import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table({ foodBody, onLiked, onDelete }) {
  return (
    <table className="table">
      <TableHead />
      <TableBody foodBody={foodBody} onDelete={onDelete} onLiked={onLiked} />
    </table>
  );
}
