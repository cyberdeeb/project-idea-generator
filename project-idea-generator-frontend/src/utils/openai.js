import axios from 'axios';

export async function generateProjects({
  skills,
  interests,
  time,
  experienceLevel,
}) {
  const res = await axios.post(
    'https://project-idea-generator.onrender.com/api/generate',
    {
      skills,
      interests,
      time,
      experienceLevel,
    }
  );

  return res.data.content;
}
