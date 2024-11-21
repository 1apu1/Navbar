import React from 'react';

function SignUpInfo({ formdata, handlechange }) {
  return (
    <div className='m-5'>
      <div>
        <label htmlFor='em'>Email</label><br />
        <input
          type='email'
          id='em'
          value={formdata.gmail}
          onChange={handlechange}
          name='gmail'
          placeholder='Enter your Email'
        />
      </div>
      <div>
        <label htmlFor='pass'>Password</label><br />
        <input
          type='password'
          id='pass'
          value={formdata.password}
          onChange={handlechange}
          name='password'
          placeholder='Enter your Password'
        />
      </div>
      <div>
        <label htmlFor='conpass'>Confirm Password</label><br />
        <input
          type='password'
          id='conpass'
          value={formdata.confirmpassword}
          onChange={handlechange}
          name='confirmpassword'
          placeholder='Confirm your Password'
        />
      </div>
    </div>
  );
}

export default SignUpInfo;
