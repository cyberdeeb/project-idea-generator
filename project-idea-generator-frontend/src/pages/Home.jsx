import { useState } from 'react';
import { useRef } from 'react';
import { generateProjects } from '../utils/openai';
import { parseIdeas } from '../utils/parseIdeas';
import InputForm from '../components/InputForm';
import IdeaCard from '../components/IdeaCard';
import Toast from '../components/Toast';
import Loading from '../components/Loading';

export default function Home() {
  // State to manage project ideas, loading state, and toast notifications
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [showToast, setShowToast] = useState(false);
  // Ref to manage the result section for smooth scrolling
  const resultRef = useRef(null);

  // Function to handle project idea generation
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
      resultRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        What should I Work On?
      </h1>
      <p className="text-center text-gray-600 mt-4 mb-4 max-w-xl mx-auto font-inter">
        Instantly generate personalized and buildable project ideas tailored to
        your skills, interests, experience level, and availability. Perfect for
        portfolios, hackathons, or learning something new.
      </p>
      <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-md border border-gray-200">
        <InputForm onGenerate={handleGeneration} isLoading={isLoading} />
      </div>
      {isLoading && (
        <div className="transition-opacity duration-300 ease-in opacity-100">
          <Loading />
        </div>
      )}
      <div className="space-y-4 mt-12" ref={resultRef}>
        {ideas.length > 0 && (
          <h2 className="text-2xl font-semibold text-center mt-12 mb-5 text-gray-700">
            Your Generated Project Ideas
          </h2>
        )}
        {ideas.map((idea, index) => (
          <IdeaCard key={index} idea={idea} />
        ))}
        {ideas.length === 0 && !isLoading && (
          <p className="text-center text-gray-400 mt-6 text-lg">
            ⚡ No ideas yet, click{' '}
            <span className="font-semibold text-blue-400">Generate</span> to get
            inspired!
          </p>
        )}
      </div>
      <Toast message={toastMessage} type={toastType} show={showToast} />
    </div>
  );
}
