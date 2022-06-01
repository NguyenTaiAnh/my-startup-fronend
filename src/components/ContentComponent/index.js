import React from 'react';
import DashboardComponent from './DashboardComponent';
import CategoriesComponent from './CategoriesComponent';
import { Route } from "react-router-dom";

const ContentComponent = () => {
    return (
        <>
            {/* <Route path="/" element={<DashboardComponent/>} />
            <Route path="/categories" element={<CategoriesComponent />} /> */}
            <Route exact path="/" component={DashboardComponent} />
            <Route path="/categories" component={CategoriesComponent} />
        </>
    );
}

export default ContentComponent;
