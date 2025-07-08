import { useState } from "react";
import InputPanel from "./components/InputPanel";
import AnswerPanel from "./components/AnswerPanel";

function App() {
  const [answer, setAnswer] = useState(null);
  const [citations, setCitations] = useState([]);

  const handleSubmit = async (userQuery) => {
    
    const response = {
      answer:
        "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
      citations: [
        {
          text:
            "As the age of the deceased at the time of accident was held to be about 54–55 years... (Para 7 of the document)",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link:
            "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
        },
      ],
    };

    setAnswer(response.answer);
    setCitations(response.citations);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-xl border border-gray-200 shadow-sm p-8">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Lexi Legal Assistant</h1>
        <InputPanel onSubmit={handleSubmit} />
        <AnswerPanel answer={answer} citations={citations} />
      </div>
    </div>
  );
}

export default App;
