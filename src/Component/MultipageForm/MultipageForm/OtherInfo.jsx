import React from 'react';

function OtherInfo({ formdata, handlechange }) {
  return (
    <div className='m-5'>
      <div>
        <label>Nationality</label><br />
        <input
          type='text'
          value={formdata.nationality}
          onChange={handlechange}
          name='nationality'
          placeholder='Enter your Nationality'
        />
      </div>
      <div>
        <label>Father's Name</label><br />
        <input
          type='text'
          value={formdata.fathername}
          onChange={handlechange}
          name='fathername'
          placeholder="Enter your Father's Name"
        />
      </div>
    </div>
  );
}

export default OtherInfo;
