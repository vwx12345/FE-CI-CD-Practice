import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Footer.css"; // ✅ 스타일 파일 가져오기
import volumeIcon from "../../assets/chillguy.png";

const Footer = () => {
  const [question, setQuestion] = useState("");
  const [volume, setVolume] = useState(50); // 🎚️ 기본 볼륨 50
  const [pop, setPop] = useState(false);
  const navigate = useNavigate();

  let hideTimeout;

  // 🔥 CSS 변수 업데이트 (아래에서 위로 차오르도록 설정)
  useEffect(() => {
    document.documentElement.style.setProperty("--progress", `${volume}%`);
  }, [volume]);

  // 🔄 슬라이더의 값 반전 (위로 올릴수록 볼륨 커짐)
  const handleVolumeChange = (e) => {
    const reversedVolume = 100 - Number(e.target.value);
    setVolume(reversedVolume);
  };

  // 🔥 슬라이더 사라지는 시간 연장 (1초)
  const hideSlider = () => {
    hideTimeout = setTimeout(() => {
      setPop(false);
    }, 700); // ⏳ 1초 후 사라짐
  };

  const handleAsk = async () => {
    if (!question.trim()) return;

    console.log("✅ 질문 전송:", question, "🔊 볼륨:", volume);

    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/loading", { state: { question, volume } });
    } catch (error) {
      console.error("❌ 요청 실패:", error);
    }

    setQuestion("");
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-center">
      <div className="w-full max-w-2xl flex items-center bg-gray-800 rounded-3xl p-2 relative">
        <input
          type="text"
          className="flex-1 bg-transparent text-white p-3 outline-none"
          placeholder="지금 당신에게 필요한 노래를 찾아드릴게요."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAsk();
            }
          }}
        />

        <div
          className="relative ml-2 cursor-pointer"
          onMouseEnter={() => {
            clearTimeout(hideTimeout);
            setPop(true);
          }}
          onMouseLeave={hideSlider} // ✅ 마우스를 떼면 1초 후에 사라짐
        >
          <img
            src={volumeIcon} // ✅ import한 이미지 사용
            alt="Volume Icon"
            className="pl-2 w-8 h-10"
          />

          {pop && (
            <div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-700 p-3 rounded-lg shadow-lg"
              onMouseEnter={() => clearTimeout(hideTimeout)} // ✅ 마우스를 올리면 사라지지 않음
              onMouseLeave={hideSlider} // ✅ 마우스를 떼면 1초 후 사라짐
            >
              <input
                type="range"
                min="0"
                max="100"
                value={100 - volume} // ✅ 위로 올릴수록 값이 커지도록 반전
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>
          )}
        </div>
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
