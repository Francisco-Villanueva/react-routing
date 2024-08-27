import React from "react";
import { useParams } from "react-router-dom";
import { PrdouctDetail } from "../components";

export default function ProductDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <PrdouctDetail id={id} />
    </div>
  );
}
