import { useState } from 'react';
import Toast from './Toast';

export default function IdeaCard({ idea }) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const handleSave = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('savedIdeas')) || [];

      const alreadySaved = saved.some(
        (savedIdea) =>
          savedIdea.title === idea.title &&
          savedIdea.description === idea.description
      );

      if (alreadySaved) {
        setToastMessage('This idea is already saved!');
        setToastType('info');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
        return;
      }

      localStorage.setItem('savedIdeas', JSON.stringify([...saved, idea]));
      setToastMessage('This idea has been saved!');
      setToastType('success');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Error saving idea:', err);
      setToastMessage('Failed to save idea.');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="bg-white border shadow p-4 rounded">
      <h2 className="text-xl font-semibold">{idea.title}</h2>
      <p className="mt-2">{idea.description}</p>
      <p className="text-sm mt-2">
        <strong>Tech Stack:</strong>
        {idea.stack}
      </p>
      <p className="text-sm">
        <strong>Difficulty:</strong>
        {idea.difficulty}
      </p>

      <div className="mt-4 flex gap-4">
        <button
          className="bg-red-600 text-ivory py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          onClick={handleSave}
        >
          Save Idea
        </button>
        <a
          href="https://codesandbox.io/s/new"
          target="_blank"
          rel="noreferrer"
          className="border border-red-500/50 text-ivory py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10"
        >
          Start Building
        </a>
      </div>
      <Toast message={toastMessage} type={toastType} show={showToast} />
    </div>
  );
}
