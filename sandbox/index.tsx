import React from "react";
import ReactDOM from "react-dom/client";
import { AppDataProvider } from "../src/context";
import { SandboxPage } from "./sandbox-page";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppDataProvider>
            <SandboxPage />
        </AppDataProvider>
    </React.StrictMode>
);
