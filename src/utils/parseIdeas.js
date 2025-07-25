export function parseIdeas(rawText) {
  const blocks = rawText.split(/\n\n+/).filter(Boolean);

  return blocks.map((block) => {
    const titleMatch = block.match(/^\d+\.\s\*\*(.+?)\*\*/);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled';

    const descriptionMatch = block.match(/- Description:\s*(.+)/i);
    const description = descriptionMatch ? descriptionMatch[1].trim() : '';

    const stackMatch = block.match(/- Stack:\s*(.+)/i);
    const stack = stackMatch ? stackMatch[1].trim() : '';

    const difficultyMatch = block.match(/- Difficulty:\s*(.+)/i);
    const difficulty = difficultyMatch ? difficultyMatch[1].trim() : '';

    return { title, description, stack, difficulty };
  });
}
