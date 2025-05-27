import React, { useState } from 'react';
import './App.css';
function App() {
  const [showSkillInput, setShowSkillInput] = useState(false);
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);
  const addSkill = () => {
    const newSkill = skillInput.trim();
    if (newSkill !== '' && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setSkillInput('');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div className="skillset-theme-container">
      <div className="header-section">
        <h2 className="page-title">Profile Skillset</h2>
        {!showSkillInput ? (
          <button className="add-skill-btn" onClick={() => setShowSkillInput(true)}>
            + Add Skill
          </button>
        ) : (
          <div className="input-skill-wrapper">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Enter a skill"
              className="skill-input"
            />
            <button className="confirm-add-btn" onClick={addSkill}>Add</button>
          </div>
        )}
      </div>
      <div className="profile-card">
        <div className='flexarea'>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="profile-img"
        />
        <div>
        <h3 className="profile-name">Jack</h3>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"/></svg>jackdaniel45@gmail.com</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"/></svg>Mumbai</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11.95q0-2.925-2.037-4.962T12 4.95v-2q1.875 0 3.513.713t2.85 1.925t1.925 2.85T21 11.95zm-4 0q0-1.25-.875-2.125T12 8.95v-2q2.075 0 3.538 1.463T17 11.95zM19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>8989787878</p>
        </div>
</div>
        <div className="skills-container">
          <h5 className="skills-heading">SKILLS</h5>
          <div className="skill-tags-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
                <span className="remove-tag" onClick={() => removeSkill(index)}>✕</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
