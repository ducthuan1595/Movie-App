import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

// import React, {useContext} from "react";
// import ChildComponent from "./pages/store/ProviderMovie";
// import { ExampleContext } from "./pages/store/ProviderMovie";

// const App = () => {
// 	const ctx = useContext(ExampleContext)
// 	console.log(ctx)
//   return (
//     <ChildComponent>
//       <div className="App">
//         <p style={{color: `${ctx}`}}>test text</p>
//       </div>
//     </ChildComponent>
//   );
// };

// export default App;
