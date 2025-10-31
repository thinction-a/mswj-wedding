import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import Loading from "./sections/Loading";

const AppContent = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <Suspense fallback={<Loading />}>
      <AppContent />
    </Suspense>
  </>
);
