import { useContext, useEffect, useRef } from 'react';
import { FormContext } from '../context/form.context';

const AddOns = () => {
  const { setCurrentSetp, setSelectedAddOns, selectedAddOns } =
    useContext(FormContext);

  const onlineServiceRef = useRef();
  const largerStorageRef = useRef();
  const customizableProfileRef = useRef();

  useEffect(() => {
    setCurrentSetp(3);
  }, []);

  const selected = (addOn) => {
    addOn.current.classList.toggle('form-add-ons-checked');
    const input = addOn.current.childNodes[0];
    if (!selectedAddOns.includes(input.name))
      setSelectedAddOns([...selectedAddOns, input.name]);
    else
      setSelectedAddOns(selectedAddOns.filter((addOn) => addOn !== input.name));
  };

  return (
    <div className="form-body form-body-md">
      <div>
        <h1 className="form-heading">Pick add-ons</h1>
      </div>
      <div>
        <p className="text-gray-400 mb-3">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <label
          ref={onlineServiceRef}
          className={`flex gap-4 px-2 py-3 items-center border border-cool-gray rounded-md duration-200 cursor-pointer ${
            selectedAddOns.includes('online service')
              ? 'form-add-ons-checked'
              : ''
          }`}
        >
          <input
            type="checkbox"
            name="online service"
            id="online-service"
            className={`input-check-box`}
            onClick={() => selected(onlineServiceRef)}
          />
          <div htmlFor="online-service">
            <h2 className="text-marine-blue font-bold cursor-pointer">
              Online service
            </h2>
            <span className="text-sm text-cool-gray cursor-pointer">
              Access to multiplayer games
            </span>
          </div>
          <span className="text-purple-blue text-sm ml-auto">+$1/mo</span>
        </label>
        <label
          ref={largerStorageRef}
          className="flex gap-4 px-2 py-3 items-center border border-cool-gray rounded-md duration-200 cursor-pointer"
          htmlFor="larger-storage"
        >
          <input
            type="checkbox"
            name="larger storage"
            id="larger-storage"
            className="input-check-box"
            onClick={() => selected(largerStorageRef)}
          />
          <div>
            <h2 className="text-marine-blue font-bold cursor-pointer">
              Larger storage
            </h2>
            <span className="text-sm text-cool-gray cursor-pointer">
              Extra 1TB of cloud save
            </span>
          </div>
          <span className="text-purple-blue text-sm ml-auto">+$2/mo</span>
        </label>
        <label
          ref={customizableProfileRef}
          className="flex gap-4 px-2 py-3 items-center border border-cool-gray rounded-md duration-200 cursor-pointer"
          htmlFor="customizable-profile"
        >
          <input
            type="checkbox"
            name="customizable profile"
            id="customizable-profile"
            className="input-check-box"
            onClick={() => selected(customizableProfileRef)}
          />
          <div>
            <h2 className="text-marine-blue font-bold cursor-pointer">
              Customizable profile
            </h2>
            <span className="text-sm text-cool-gray cursor-pointer">
              Customize theme on your profile
            </span>
          </div>
          <span className="text-purple-blue text-sm ml-auto">+$2/mo</span>
        </label>
      </div>
    </div>
  );
};

export default AddOns;
