import React from 'react';
import contact from '../../pic/connect.jpg';
import"./Contact1.css"
const Contact1 = () => {
  return (
    <div className="head container my-5">
  <div className="row justify-content-center align-items-center">

    <div className="card col-12 col-md-6 p-4">
      <h2 className="card-title text-center mb-4">Reach Out for Frontend Developer for Hire</h2>
      
      <div className="mb-3">
        <label htmlFor="companyName" className="form-label">Company Name:</label>
        <input
          type="text"
          className="form-control"
          id="companyName"
          placeholder="Enter the company name..."
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Enter Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role to assign:</label>
        <input
          type="text"
          className="form-control"
          id="role"
          placeholder="Enter the Role (e.g., Junior Developer)..."
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="jobDescription" className="form-label">Describe the Job</label>
        <textarea
          className="form-control"
          id="jobDescription"
          rows="3"
          placeholder="Describe the job here..."
        ></textarea>
      </div><div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Send</button>

</div>
    </div>
    <div className="col-12 col-md-5 d-flex justify-content-center">
      <img
        src={contact}
        alt="William Muhuni Kinyua"
        className="img-fluid rounded"
        style={{ maxHeight: '600px', objectFit: 'cover' }}
      />
    </div>
  </div>
</div>
  );
}

export default Contact1;