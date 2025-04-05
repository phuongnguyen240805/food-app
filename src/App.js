import { BrowserRouter, Route, Routes } from "react-router";
import { Fragment } from "react";

import { publicRouter } from "./routers";
import { DefaultLayout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          publicRouter.map((route, index) => {

            const Page = route.component

            // Default layout
            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            return (
              <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
