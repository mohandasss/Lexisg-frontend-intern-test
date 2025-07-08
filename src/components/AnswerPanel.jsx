const AnswerPanel = ({ answer, citations }) => {
    if (!answer) return null;
  
    return (
      <div className="p-4 mt-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Answer</h2>
        <p className="mb-4 text-gray-900">{answer}</p>

        <h3 className="font-medium mb-1 text-gray-700">Citations:</h3>
        <ul className="list-disc ml-5 mt-1">
          {citations.map((cite, index) => (
            <li key={index}>
              <a
                href={cite.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {cite.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AnswerPanel;
  