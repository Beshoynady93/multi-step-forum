import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import PersonalInfo from './components/personal-info/PersonalInfo';
import SelectPlan from './components/select-plan/SelectPlan';
import AddOns from './components/add-ons/AddOns';
import Summary from './components/summary/Summary';
import StepsButtons from './components/steps-buttons/StepsButtons';

import './App.css';

function App() {
  return (
    <form className="max-w-screen-lg mx-auto font-body bg-light-blue bg-opacity-25 min-h-screen grid md:grid-cols-3 md:items-stretch md:gap-8 md:bg-white md:h-auto md:min-h-fit md:my-auto md:grid-rows-2 md:max-h-forum-max md:mt-16 md:p-4 md:rounded-md md:w-11/12">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PersonalInfo />} />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/summary" element={<Summary />} />
        </Route>
      </Routes>
      <StepsButtons />
    </form>
  );
}

export default App;
