import Routes from "./Routes";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <>
            <Routes />
            <Toaster position="top-right"/>{" "}
            <Analytics />
        </>
    );
}

export default App;
