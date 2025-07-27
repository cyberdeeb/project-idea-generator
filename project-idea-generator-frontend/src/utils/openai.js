import axios from 'axios';

export async function generateProjects({
  skills,
  interests,
  time,
  experienceLevel,
}) {
  const res = await axios.post('http://localhost:3001/api/generate', {
    skills,
    interests,
    time,
    experienceLevel,
  });

  return res.data.content;
}
