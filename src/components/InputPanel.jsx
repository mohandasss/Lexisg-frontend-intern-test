import { useState } from "react";

const InputPanel = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await onSubmit(question);
    setLoading(false);
  };

  return (
    <div className="p-4">
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a legal question..."
        className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
        rows={4}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 disabled:opacity-60"
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
};

export default InputPanel;
