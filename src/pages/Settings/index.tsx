import React from 'react';
import pic from '../../assets/images/background-pic.png';
import print from '../../utils/print';

const Settings: React.FC = () => {
  console.log(print('hello'));
  return (
    <>
      <h1>SETTINGS</h1>
      <img className="profile-photo" src={pic} alt={'settings'}/>
    </>
  );
};

export default Settings;
