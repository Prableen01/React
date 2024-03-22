import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Card from './components/Card';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <div className='container text-center mb-5'>
      <h1>Welcome to Our Website!</h1>
      <p>
        We're delighted to have you here. Whether you're exploring our products, seeking information, or simply browsing, we hope you find everything you need. Our goal is to provide a seamless experience and valuable resources to enhance your visit.
      </p>
      <p>
        Feel free to explore our pages, discover what we have to offer, and don't hesitate to reach out if you have any questions or feedback. Thank you for visiting us!
      </p>
    </div>

    <div className="row mx-5">
      <div className="col-md-4">
        <Card title="Text to speech" text="A website that generates sound from the text!" item="18 March 2024" color="#ffcccc" />
      </div>
      <div className="col-md-4">
        <Card title="Grade Calculator" text="A website that generates grade from marks!" item="25 February 2024" color="#ccffcc" />
      </div>
      <div className="col-md-4">
        <Card title="Tip Calculator" text="A website that generates tip from bill!" item="1 October 2023" color="#ccccff" />
      </div>
    </div>

    <div className="row mx-5">
      <div className="col-md-4">
        <Card title="An Analog Clock" text="Counts every second whether you do it or not!" item="5 May 2023" color="#ffffcc" />
      </div>
      <div className="col-md-4">
        <Card title="Task Tracker" text="Tracks all your work!" item="18 March 2024" color="#ffccff" />
      </div>
      <div className="col-md-4">
        <Card title="BMI Calculator" text="Calculates your BMI to keep you healthy!" item="7 July 2023" color="#ccffff" />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
