import { useEffect, useState } from 'react';
import IdeaCard from '../components/IdeaCard';

export default function SavedIdeas() {
  // State to manage saved ideas
  const [savedIdeas, setSavedIdeas] = useState([]);
  // Load saved ideas from localStorage on component mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('savedIdeas')) || [];
    setSavedIdeas(data);
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Saved Ideas</h1>

      {savedIdeas.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t saved any ideas yet.
        </p>
      ) : (
        <div className="space-y-4">
          {savedIdeas.map((idea, index) => (
            <IdeaCard key={index} idea={idea} />
          ))}
        </div>
      )}
    </div>
  );
}
