import { useContext, useRef, useEffect } from 'react';
import { FormContext } from '../context/form.context';

const NameInput = () => {
  const { personalInfo, setpersonalInfo } = useContext(FormContext);
  const { name } = personalInfo;
  const nameRef = useRef();

  const updatePersonalInfo = (e) => {
    setpersonalInfo({
      ...personalInfo,
      name: e.target.value,
    });
  };

  useEffect(() => {
    nameRef.current.checkValidity()
      ? setpersonalInfo({
          ...personalInfo,
          nameValid: true,
        })
      : setpersonalInfo({ ...personalInfo, nameValid: false });
  }, [name]);

  return (
    <div className="relative">
      <label className="form-label" htmlFor="name">
        Name
      </label>
      <span
        className="hidden text-xs text-strawberry-red absolute right-0 top-2 font-bold"
        id="name-invalid"
      >
        This field is required
      </span>
      <input
        className="form-input"
        placeholder="e.g.Stephen King"
        type="text"
        id="name"
        required
        value={name}
        ref={nameRef}
        onChange={updatePersonalInfo}
      />
    </div>
  );
};

export default NameInput;
