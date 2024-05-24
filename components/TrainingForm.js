import { useState } from 'react';

const TrainingForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', answer: '' }]);

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, questions });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Titel:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <fieldset className="space-y-4">
        <legend className="text-gray-700">Vragen:</legend>
        {questions.map((q, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-gray-700">Vraag:</label>
            <input
              type="text"
              value={q.question}
              onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            <label className="block text-gray-700">Antwoord:</label>
            <input
              type="text"
              value={q.answer}
              onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddQuestion}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-sm"
        >
          Vraag toevoegen
        </button>
      </fieldset>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm"
      >
        Training aanmaken
      </button>
    </form>
  );
};

export default TrainingForm;
