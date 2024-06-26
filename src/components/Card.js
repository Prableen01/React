import React from 'react';

export default function Card(props) {
  const cardStyle = {
    backgroundColor: props.color
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />

      <div className="card mt-3" style={{ width: '18rem', ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.item}</li>
        </ul>
        <div className="card-body container">
        <a href="https://prableen01.github.io/Biodata/" target="_blank" rel="noopener noreferrer" className="card-link">Website link</a>


        </div>
      </div>
    </>
  );
}
