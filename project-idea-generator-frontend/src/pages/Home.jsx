import { useState } from 'react';
import { generateProjects } from '../utils/openai';
import { parseIdeas } from '../utils/parseIdeas';
import InputForm from '../components/InputForm';
import IdeaCard from '../components/IdeaCard';
import Toast from '../components/Toast';
import Loading from '../components/Loading';

export default function Home() {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [showToast, setShowToast] = useState(false);

  const handleGeneration = async (formData) => {
    setLoading(true);
    setIdeas([]);

    try {
      const rawResponse = await generateProjects(formData);
      const parsedIdeas = parseIdeas(rawResponse);
      setIdeas(parsedIdeas);
      setToastType('success');
      setToastMessage('Project ideas generated successfully!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.error('Error generating ideas:', err);
      setToastType('error');
      setToastMessage('Could not generate project ideas. Please try again.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        What should I Work On?
      </h1>
      <InputForm onGenerate={handleGeneration} />
      {isLoading && <Loading />}
      <div className="space-y-4 mt-6">
        {ideas.map((idea, index) => (
          <IdeaCard key={index} idea={idea} />
        ))}
      </div>
      <Toast message={toastMessage} type={toastType} show={showToast} />
    </div>
  );
}
