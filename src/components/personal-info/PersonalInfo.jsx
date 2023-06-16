import { useContext, useEffect } from 'react';
import { FormContext } from '../context/form.context';

import NameInput from '../name-input/NameInput';
import EmailInput from '../emial-input/EmailInput';
import PhoneInput from '../phone-input/PhoneInput';

const PersonalInfo = () => {
  const { setCurrentSetp } = useContext(FormContext);

  useEffect(() => {
    setCurrentSetp(1);
  }, []);

  return (
    <div className="form-body form-body-md">
      <div>
        <h1 className="form-heading">Personal info</h1>
      </div>
      <div>
        <p className="text-gray-400 mb-3">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <NameInput />
        <EmailInput />
        <PhoneInput />
      </div>
    </div>
  );
};

export default PersonalInfo;
