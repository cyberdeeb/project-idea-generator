import { use, useState } from 'react';

export default function InputForm({ onGneratate }) {
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGneratate({ skills, interests, time });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Your skills"
        className="input w-full"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your interests"
        className="input w-full"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
      />
      <input
        type="text"
        placeholder="Timing (e.g. 1 week)"
        className="input w-full"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <div className="flex gap-4 justify-center">
        <button type="submit" className="btn btn-primary">
          Generate Ideas
        </button>
      </div>
    </form>
  );
}
