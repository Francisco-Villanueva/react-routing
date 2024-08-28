import React from "react";
import { useParams } from "react-router-dom";
import { PrdouctDetail } from "../components";

export default function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <div>
      <PrdouctDetail id={productId} />
    </div>
  );
}
