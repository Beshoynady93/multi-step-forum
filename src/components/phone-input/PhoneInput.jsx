import { useContext, useRef, useEffect } from 'react';
import { FormContext } from '../context/form.context';

const PhoneInput = () => {
  const { personalInfo, setpersonalInfo } = useContext(FormContext);
  const { phone, phoneValid } = personalInfo;
  const phoneRef = useRef();

  const updatePersonalInfo = (e) => {
    setpersonalInfo({
      ...personalInfo,
      phone: e.target.value,
    });
  };

  useEffect(() => {
    phoneRef.current.checkValidity()
      ? setpersonalInfo({
          ...personalInfo,
          phoneValid: true,
        })
      : setpersonalInfo({ ...personalInfo, phoneValid: false });
  }, [phone]);

  return (
    <div className="relative">
      <label className="form-label" htmlFor="phone-number">
        Phone Number
      </label>
      <span
        className="hidden text-strawberry-red text-xs absolute right-0 top-2 font-bold"
        id="phone-invalid"
      >
        This field is required
      </span>
      <input
        className="form-input"
        placeholder="e.g. +1 234 567 890"
        type="tel"
        name="number"
        id="phone-number"
        required
        value={phone}
        ref={phoneRef}
        onChange={updatePersonalInfo}
      />
    </div>
  );
};

export default PhoneInput;
