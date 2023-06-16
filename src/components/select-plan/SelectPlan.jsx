import { useContext, useEffect, useRef } from 'react';
import { FormContext } from '../context/form.context';

import ArcadeIcon from '../icons/ArcadeIcon';
import ProIcon from '../icons/ProIcon';
import AdvancedIcon from '../icons/AdvancedIcon';

const SelectPlan = () => {
  const { setCurrentSetp, setPlanDuration, planDuration, setSelectedPlan } =
    useContext(FormContext);

  const arcadeRef = useRef();
  const advancedRef = useRef();
  const proRef = useRef();

  const ARCADE_MONTHLY = 9;
  const ARCADE_YEARLY = 90;
  const ADVANCED_MONTHLY = 12;
  const ADVANCED_YEARLY = 120;
  const PRO_MONTHLY = 15;
  const PRO_YEARLY = 150;

  useEffect(() => {
    setCurrentSetp(2);
  }, []);

  const togglePlaneDuration = (e) => {
    e.preventDefault();
    const btn = e.target;
    const selectedPlan = btn.getAttribute('data-plan-duration');
    selectedPlan === 'monthly' ? setPlanToYearly(btn) : setPlanToMonthly(btn);
  };

  const setPlanToMonthly = (btn) => {
    setPlanDuration('monthly');
    btn.setAttribute('data-plan-duration', 'monthly');
  };

  const setPlanToYearly = (btn) => {
    setPlanDuration('yearly');
    btn.setAttribute('data-plan-duration', 'yearly');
  };

  const selectArcade = () => {
    arcadeRef.current.classList.add('selected-plan');
    advancedRef.current.classList.remove('selected-plan');
    proRef.current.classList.remove('selected-plan');
    setSelectedPlan('arcade');
  };
  const selectAdvanced = () => {
    advancedRef.current.classList.add('selected-plan');
    arcadeRef.current.classList.remove('selected-plan');
    proRef.current.classList.remove('selected-plan');
    setSelectedPlan('advanced');
  };
  const selectPro = () => {
    proRef.current.classList.add('selected-plan');
    arcadeRef.current.classList.remove('selected-plan');
    advancedRef.current.classList.remove('selected-plan');
    setSelectedPlan('pro');
  };

  return (
    <div className="form-body form-body-md">
      <div>
        <h1 className="form-heading">Select your plan</h1>
      </div>
      <div>
        <p className="text-gray-400 mb-3">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col gap-3 border-cool-gray md:flex-row md:items-center md:justify-center">
        <div
          className="form-option-container selected-plan"
          ref={arcadeRef}
          onClick={selectArcade}
        >
          <div className="md:mb-5">
            <ArcadeIcon />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-marine-blue text-sm">Arcade</h2>
            <span className=" text-cool-gray text-xs">
              ${' '}
              {planDuration === 'monthly'
                ? ARCADE_MONTHLY + '/mo'
                : ARCADE_YEARLY + '/yr'}
            </span>
            {planDuration === 'yearly' ? (
              <span className="text-xs text-marine-blue">2 months free</span>
            ) : (
              ''
            )}
          </div>
        </div>
        <div
          className="form-option-container"
          ref={advancedRef}
          onClick={selectAdvanced}
        >
          <div className="md:mb-5">
            <AdvancedIcon />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-marine-blue text-sm">Advanced</h2>
            <span className=" text-cool-gray text-xs">
              ${' '}
              {planDuration === 'monthly'
                ? ADVANCED_MONTHLY + '/mo'
                : ADVANCED_YEARLY + '/yr'}
            </span>
            {planDuration === 'yearly' ? (
              <span className="text-xs text-marine-blue">2 months free</span>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="form-option-container" ref={proRef} onClick={selectPro}>
          <div className="md:mb-5">
            <ProIcon />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-marine-blue text-sm">Pro</h2>
            <span className=" text-cool-gray text-xs">
              ${' '}
              {planDuration === 'monthly'
                ? PRO_MONTHLY + '/mo'
                : PRO_YEARLY + '/yr'}
            </span>
            {planDuration === 'yearly' ? (
              <span className="text-xs text-marine-blue">2 months free</span>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div className="bg-light-blue bg-opacity-10 mx-auto w-max flex items-center justify-center gap-3 mt-5">
        <span
          className={`text-sm font-bold ${
            planDuration === 'monthly' ? 'text-marine-blue' : 'text-cool-gray'
          }`}
        >
          Monthly
        </span>
        <button
          className="duration-btn | bg-marine-blue w-8 h-4 rounded-3xl relative transition-transform duration-300 after:w-3 after:aspect-square after:bg-white after:rounded-full after:block after:absolute after:top-0.5 after:left-0.5"
          onClick={togglePlaneDuration}
          data-plan-duration="monthly"
        ></button>
        <span
          className={`text-sm font-bold text-cool-gray ${
            planDuration === 'yearly' ? 'text-marine-blue' : 'text-cool-gray'
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default SelectPlan;
