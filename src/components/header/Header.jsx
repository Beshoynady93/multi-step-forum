import { Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../context/form.context';
const Header = () => {
  const navigate = useNavigate();
  const { currentStep } = useContext(FormContext);

  return (
    <>
      <header
        className={
          'bg-side-bar-mobile md:bg-side-bar-desktop bg-no-repeat bg-center overflow-hidden flex gap-3 h-32 px-8 py-4 items-start justify-center bg-cover md:grid-row md:gap-10 md:h-auto md:bg-bottom md:flex-col md:justify-start md:py-10 md:row-span-2 md:rounded-md'
        }
      >
        <div className="md:flex md:items-center md:justify-center md:gap-5">
          <button
            className={`${
              currentStep === 1 ? 'btn-active' : ''
            } border rounded-full text-white bg-transparent py-1 px-3 font-bold`}
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            1
          </button>
          <div className="hidden md:block">
            <span className="btn-text-step ">step 1</span>
            <span className="btn-text-page">your info</span>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center md:gap-5">
          <button
            className={`${
              currentStep === 2 ? 'btn-active' : ''
            } border rounded-full text-white bg-transparent py-1 px-3 font-bold`}
            onClick={(e) => {
              e.preventDefault();
              navigate('/select-plan');
            }}
          >
            2
          </button>
          <div className="hidden md:block">
            <span className="btn-text-step ">step 2</span>
            <span className="btn-text-page">select plan</span>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center md:gap-5">
          <button
            className={`${
              currentStep === 3 ? 'btn-active' : ''
            } border rounded-full text-white bg-transparent py-1 px-3 font-bold`}
            onClick={(e) => {
              e.preventDefault();
              navigate('/add-ons');
            }}
          >
            3
          </button>
          <div className="hidden md:block">
            <span className="btn-text-step ">step 3</span>
            <span className="btn-text-page">add-ons</span>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center md:gap-5">
          <button
            className={`${
              currentStep === 4 ? 'btn-active' : ''
            } border rounded-full text-white bg-transparent py-1 px-3 font-bold`}
            onClick={(e) => {
              e.preventDefault();
              navigate('/summary');
            }}
          >
            4
          </button>
          <div className="hidden md:block">
            <span className="btn-text-step ">step 4</span>
            <span className="btn-text-page">summary</span>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
