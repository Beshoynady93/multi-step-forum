import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/form.context';

const StepsButtons = () => {
  const { currentStep, personalInfo } = useContext(FormContext);
  const { nameValid, emailValid, phoneValid } = personalInfo;
  const navigate = useNavigate();

  const goNext = (e) => {
    e.preventDefault();
    if (!nameValid) {
      if (!document.getElementById('name-invalid')) return;
      document.getElementById('name-invalid').classList.remove('hidden');
      return;
    } else {
      if (document.getElementById('name-invalid'))
        document.getElementById('name-invalid').classList.add('hidden');
    }

    if (!emailValid) {
      if (!document.getElementById('email-invalid')) return;
      document.getElementById('email-invalid').classList.remove('hidden');
      return;
    } else {
      if (document.getElementById('email-invalid'))
        document.getElementById('email-invalid').classList.add('hidden');
    }

    if (!phoneValid) {
      if (!document.getElementById('phone-invalid')) return;
      document.getElementById('phone-invalid').classList.remove('hidden');
      return;
    } else {
      if (document.getElementById('phone-invalid'))
        document.getElementById('phone-invalid').classList.add('hidden');
    }

    switch (currentStep) {
      case 1:
        navigate('/select-plan');
        break;
      case 2:
        navigate('/add-ons');
        break;

      case 3:
        navigate('/summary');
        break;

      default:
        break;
    }
  };

  const goBack = (e) => {
    e.preventDefault();
    switch (currentStep) {
      case 2:
        navigate('/');
        break;

      case 3:
        navigate('/select-plan');
        break;

      case 4:
        navigate('/add-ons');
        break;

      default:
        navigate('/');
        break;
    }
  };

  return (
    <div className="bg-white grid grid-col-2 justify-between items-center px-3 py-2 justify-self-end w-full md:col-start-2 md:col-span-2 md:row-start-2 self-end z-10 md:self-center md:max-w-9/10 md:justify-self-center">
      {
        <button
          type="submit"
          onClick={goBack}
          className={`text-cool-gray text-sm font-bold ${
            currentStep === 1 ? 'hidden' : 'block'
          }`}
        >
          Go Back
        </button>
      }
      <button
        onClick={goNext}
        className={` text-white py-2 px-5 rounded-md col-start-2 ${
          currentStep === 4
            ? 'bg-purple-blue hover:bg-opacity-80'
            : 'bg-marine-blue'
        } transition-all duration-200  hover:bg-purple-blue`}
      >
        {currentStep === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
};

export default StepsButtons;
