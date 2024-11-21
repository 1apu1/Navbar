import React from 'react';

function PersonalInfo({ formdata, handlechange }) {
  return (
    <div className='m-5'>
      <div>
        <label>First Name</label><br />
        <input
          type='text'
          value={formdata.firstname}
          onChange={handlechange}
          name='firstname'
          placeholder='Enter your First Name'
        />
      </div>
      <div>
        <label>Last Name</label><br />
        <input
          type='text'
          value={formdata.lastname}
          onChange={handlechange}
          name='lastname'
          placeholder='Enter your Last Name'
        />
      </div>
      <div>
        <label>Date of Birth</label><br />
        <input
          type='date'
          value={formdata.dob}
          onChange={handlechange}
          name='dob'
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
