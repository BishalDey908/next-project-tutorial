import { Suspense } from "react";
import Componentserver from "./Componentserver";

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <Componentserver />
    </Suspense>
  );
}

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
    </div>
  );
}
