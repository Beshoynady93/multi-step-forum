import { createContext, useState } from 'react';

export const FormContext = createContext({
  // Form steps
  currentStep: 1,
  setCurrentSetp: () => {},

  // Personal info
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    nameValid: false,
    emailValid: false,
    phoneValid: false,
  },
  setpersonalInfo: () => {},

  // Select plan
  selectedPlan: 'arcade',
  setSelectedPlan: () => {},
  planDuration: 'monthly',
  setPlanDuration: () => {},

  // Add-ons
  selectedAddOns: [],
  setSelectedAddOns: () => {},
});

// eslint-disable-next-line react/prop-types
export const FormContextProvider = ({ children }) => {
  const [currentStep, setCurrentSetp] = useState(1);
  const [personalInfo, setpersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    nameValid: false,
    emailValid: false,
    phoneValid: false,
  });
  const [planDuration, setPlanDuration] = useState('monthly');
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('arcade');
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const value = {
    currentStep,
    setCurrentSetp,
    personalInfo,
    setpersonalInfo,
    planDuration,
    setPlanDuration,
    isFormValid,
    setIsFormValid,
    selectedPlan,
    setSelectedPlan,
    selectedAddOns,
    setSelectedAddOns,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
