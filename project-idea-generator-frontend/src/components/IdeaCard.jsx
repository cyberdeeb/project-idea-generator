import { useState } from 'react';
import Toast from './Toast';

export default function IdeaCard({ idea }) {
  // State for toast notifications
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  // Function to handle saving the idea
  const handleSave = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('savedIdeas')) || [];

      const alreadySaved = saved.some(
        (savedIdea) =>
          savedIdea.title === idea.title &&
          savedIdea.description === idea.description
      );
      // Check if the idea is already saved
      if (alreadySaved) {
        setToastMessage('This idea is already saved!');
        setToastType('info');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
        return;
      }
      // Save the idea to localStorage
      localStorage.setItem('savedIdeas', JSON.stringify([...saved, idea]));
      // Show success toast
      setToastMessage('This idea has been saved!');
      setToastType('success');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      // Handle any errors during saving
      console.error('Error saving idea:', err);
      setToastMessage('Failed to save idea.');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="bg-[#3A3A3A] text-[#F9FAFB] p-6 rounded-2xl shadow-lg border border-[#4B5563] font-inter transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-[#60A5FA]">
      <h2 className="text-xl font-semibold font-poppins">{idea.title}</h2>
      <p className="mt-2">{idea.description}</p>
      <p className="text-sm mt-2 border-t border-slate-600 pt-2">
        <strong>Tech Stack:</strong> {idea.stack}
      </p>
      <p className="text-sm mt-2 border-t border-slate-600 pt-2">
        <strong>Difficulty:</strong>
        <span
          className={`ml-1 px-2 py-1 rounded-full text-xs font-semibold ${
            idea.difficulty === 'Easy'
              ? 'bg-green-600 text-white'
              : idea.difficulty === 'Medium'
              ? 'bg-yellow-500 text-black'
              : 'bg-red-600 text-white'
          }`}
        >
          {idea.difficulty}
        </span>
      </p>
      <div className="mt-6 flex gap-4">
        <button
          className="bg-[#60A5FA] text-white py-3 px-6 rounded font-medium transition-all duration-300 hover:bg-[#3B82F6] hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] hover:-translate-y-0.5 cursor-pointer"
          onClick={handleSave}
        >
          Save Idea
        </button>
        <a
          href="https://codesandbox.io/s/new"
          target="_blank"
          rel="noreferrer"
          className="border border-[#60A5FA] text-[#60A5FA] py-3 px-6 rounded font-medium transition-all duration-300 hover:bg-[#3B82F6]/10 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] hover:-translate-y-0.5 cursor-pointer"
        >
          Start Building
        </a>
      </div>
      <Toast message={toastMessage} type={toastType} show={showToast} />
    </div>
  );
}
