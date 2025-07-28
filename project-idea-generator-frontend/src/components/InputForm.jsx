import { useState } from 'react';

export default function InputForm({ onGenerate, isLoading }) {
  // State for form inputs
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [time, setTime] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('beginner');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!skills.trim() || !interests.trim() || !time.trim()) {
      alert('Please fill in all fields');
      return;
    }
    // Call the onGenerate function passed from Home component
    onGenerate({ skills, interests, time, experienceLevel });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Tell us about yourself:
      </h2>
      <input
        type="text"
        placeholder="Your skills e.g. JavaScript, React"
        className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        required
        aria-label="Your programming skills"
      />
      <input
        type="text"
        placeholder="Your interests e.g. AI, Web Development"
        className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
        required
        aria-label="Your interests"
      />
      <input
        type="text"
        placeholder="Timing (e.g. 1 week)"
        className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Your time constraint"
      />
      <select
        className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          } bg-blue-600 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]`}
        >
          {isLoading ? 'Generating...' : 'Generate'}
        </button>
      </div>
    </form>
  );
}
