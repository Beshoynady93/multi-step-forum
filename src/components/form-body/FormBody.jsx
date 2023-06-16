import PersonalInfo from './components/personal-info/PersonalInfo';
import SelectPlan from './components/select-plan/SelectPlan';
import AddOns from './components/add-ons/AddOns';
import Summary from './components/summary/Summary';

const FormBody = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<PersonalInfo />} />
        <Route path="/select-plan" element={<SelectPlan />} />
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
      </Route>
    </Routes>
  );
};

export default FormBody;
