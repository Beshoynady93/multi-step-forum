import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormContext } from '../context/form.context';

const Summary = () => {
  const { setCurrentSetp, selectedPlan, planDuration, selectedAddOns } =
    useContext(FormContext);
  const changePlanNav = useNavigate();

  useEffect(() => {
    setCurrentSetp(4);
  }, []);
  return (
    <div className="form-body form-body-md">
      <div>
        <h1 className="form-heading">Finishing up</h1>
      </div>
      <div>
        <p className="text-gray-400 mb-3">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="bg-light-blue bg-opacity-10">
        <div className="flex items-center justify-between border-b-2">
          <div>
            <span className="text-marine-blue font-bold">
              {selectedPlan} ({planDuration})
            </span>
            <button
              className="text-sm text-cool-gray underline block hover:text-purple-blue transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                changePlanNav('/select-plan');
              }}
            >
              change
            </button>
          </div>
          <div className="text-marine-blue font-bold">$9/mo</div>
        </div>
        {selectedAddOns &&
          selectedAddOns.map((addOn, i) => {
            return (
              <p
                key={i}
                className="text-cool-gray text-sm first-letter:capitalize"
              >
                {addOn}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Summary;
