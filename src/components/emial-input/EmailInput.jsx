import { useContext, useEffect, useRef } from 'react';
import { FormContext } from '../context/form.context';

const EmailInput = () => {
  const { personalInfo, setpersonalInfo } = useContext(FormContext);
  const { email } = personalInfo;
  const emailRef = useRef();

  const updatePersonalInfo = (e) => {
    setpersonalInfo({
      ...personalInfo,
      email: e.target.value,
    });
  };

  useEffect(() => {
    emailRef.current.checkValidity()
      ? setpersonalInfo({
          ...personalInfo,
          emailValid: true,
        })
      : setpersonalInfo({ ...personalInfo, emailValid: false });
  }, [email]);

  return (
    <div className="relative">
      <label className="form-label" htmlFor="email">
        Email Address
      </label>
      <span
        className="hidden text-xs text-strawberry-red absolute right-0 top-2 font-bold"
        id="email-invalid"
      >
        This field is required
      </span>
      <input
        className="form-input"
        placeholder="e.g.stephenking@lorem.com"
        type="email"
        name="email"
        id="email"
        required
        value={email}
        onChange={updatePersonalInfo}
        ref={emailRef}
      />
    </div>
  );
};

export default EmailInput;
