
import './App.css';

import GenInfo from './component/GeneraInfo/GenInfo';
import SummaryInfo from './component/Summary/SummaryInfo';
import EduInfo from './component/EducationInfo/EduInfo';
import Skill from './component/SkillExp/Skill';
import PracExp from './component/PracticalExp/PracExp';

function App() {
  return (
    <div className="App">
     
     <GenInfo />
     <SummaryInfo />
     <Skill />
     <PracExp />
     <EduInfo />
    </div>
  );
}

export default App;
