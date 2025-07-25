import { useState } from 'react';

export default function InputForm({ onGenerate }) {
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [time, setTime] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('beginner');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!skills.trim() || !interests.trim() || !time.trim()) {
      alert('Please fill in all fields');
      return;
    }

    onGenerate({ skills, interests, time, experienceLevel });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Your skills"
        className="input w-full"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        required
        aria-label="Your programming skills"
      />
      <input
        type="text"
        placeholder="Your interests"
        className="input w-full"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
        required
        aria-label="Your interests"
      />
      <input
        type="text"
        placeholder="Timing (e.g. 1 week)"
        className="input w-full"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Your time constraint"
      />
      <select
        className="input w-full"
        value={experienceLevel}
        onChange={(e) => setExperienceLevel(e.target.value)}
        required
        aria-label="Your level of experience"
      >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
        <option value="wizard">Wizard</option>
      </select>
      <div className="flex gap-4 justify-center">
        <button type="submit" className="btn btn-primary cursor-pointer">
          Generate Ideas
        </button>
      </div>
    </form>
  );
}
