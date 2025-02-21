import React from 'react';
import Header1 from '../Components/Header1';
import Footer from '../Components/Footer'; // Import Footer component correctly
import './Preview.css'; // Correct path for Preview.css

function Preview() {
    return (
        <div>
            <Header1 />
            <div className="background">
                <p className="h1style">Welcome to Study Hall Management System</p>
                <h1 className="he1">Now we are 24X7 open</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Preview;
