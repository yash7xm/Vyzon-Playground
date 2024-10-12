import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Playground from "./pages/Playground";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/docs/:id" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/playground" element={<Playground />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
