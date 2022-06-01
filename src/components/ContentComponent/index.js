import React from 'react';
import DashboardComponent from './DashboardComponent';
import CategoriesComponent from './CategoriesComponent';
import { Route, Routes } from "react-router-dom";

const ContentComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DashboardComponent/>} />
                <Route path="/categories" element={<CategoriesComponent />} />
            </Routes>
        </div>
    );
}

export default ContentComponent;
