import React from "react"
import {Routes, Route, Navigate} from 'react-router-dom'
import {TablePage} from "@pages/table-page";

function App() {
    return (
        <Routes>
            <Route path={"/pages/:pageNum"} element={<TablePage/>}/>
            <Route
                path="*"
                element={<Navigate to="/pages/1" replace/>}
            />
        </Routes>
    );
}

export default App;
