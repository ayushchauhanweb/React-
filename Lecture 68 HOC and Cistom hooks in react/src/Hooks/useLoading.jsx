import React, { useState } from "react";

function useLoading() {
  const [loading, SetLoading] = useState(true);
  const startLoading = () => SetLoading(true);
  const stopLoading = () => SetLoading(false);

  return (loading, startLoading, stopLoading);
}

export default useLoading;
