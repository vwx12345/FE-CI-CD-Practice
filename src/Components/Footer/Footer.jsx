import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleAsk = async () => {
    if (!question.trim()) return; // 빈 입력 방지
    
    console.log("✅ 질문 전송:", question);

    try {
      window.scrollTo({ top: 0, behavior: "smooth" }); // 화면 맨 위로 이동
      navigate("/loading", { state: { question } }); // ✅ 질문을 state로 전달
    } catch (error) {
      console.error("❌ 요청 실패:", error);
    }

    setQuestion(""); // 입력 초기화
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-center">
      <div className="w-full max-w-2xl flex items-center bg-gray-800 rounded-3xl p-2">
        <input
          type="text"
          className="flex-1 bg-transparent text-white p-3 outline-none"
          placeholder="무엇이든 물어보세요"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            console.log("입력된 값:", e.target.value); // ✅ 입력값 출력
          }}
        />

        <button
          className="bg-white text-black rounded-full p-3 ml-2"
          onClick={handleAsk}
        >
          🎤
        </button>
      </div>
    </footer>
  );
};

export default Footer;

