export default function IdeaCard({ idea }) {
  return (
    <div className="bg-white border shadow p-4 rounded">
      <h2 className="text-xl font-semibold">{idea.title}</h2>
      <p className="mt-2">{idea.description}</p>
      <p className="mt-2">{idea.justification}</p>
      <p className="text-sm mt-2">
        <strong>Tech Stack:</strong>
        {idea.stack}
      </p>
      <p className="text-sm">
        <strong>Difficulty:</strong>
        {idea.stack}
      </p>

      <div className="mt-4 flex gap-4">
        <button
          className="bg-red-600 text-ivory py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          onClick={() => {
            const saved = JSON.parse(localStorage.getItem('savedIdeas')) || [];
            localStorage.setItem(
              'savedIdeas',
              JSON.stringify([...saved, idea])
            );
            alert('Idea Saved');
          }}
        >
          Save Idea
        </button>
        <button
          href="https://codesandbox.io/s/new"
          target="_blank"
          rel="noreferrer"
          className="border border-red-500/50 text-ivory py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10"
        >
          Start Building
        </button>
      </div>
    </div>
  );
}
