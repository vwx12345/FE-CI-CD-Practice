import React from "react";

const Info = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* 서비스 소개 박스 */}
      <div className="p-5 bg-gray-700 text-gray-300 rounded-lg shadow-lg">
        <div className="p-2 bg-gray-600 rounded-md mb-3">
          <h1 className="text-3xl font-bold">HarmonAI 서비스 소개합니다!</h1>
        </div>
        <p className="text-lg">
          당신의 감정과 날씨에 딱 맞는 음악, 맞춤형으로 즐겨보세요! 🎵 <br />
          우리는 단순한 음악 추천 서비스를 넘어, 당신의 감정과 날씨에 맞춘
          새로운 음악 경험을 제공합니다.
        </p>
      </div>

      {/* 입력 요소 박스 */}
      <div className="p-5 bg-gray-700 text-gray-300 rounded-lg shadow-lg">
        <div className="p-2 bg-gray-600 rounded-md mb-3">
          <h2 className="text-xl font-semibold">💡 당신의 선택 요소</h2>
        </div>
        <p className="text-lg">
          <strong>✅ 지금 기분은 어떤가요? 😃</strong> <br />
          <strong>✅ 오늘 어디로 떠나셨나요? 📍</strong> <br />
          <strong>✅ 당신이 있는 곳의 날씨는? 🌦️</strong> <br />
          <strong>
            ✅ 트렌디한 곡 🎧 🔥 vs. 숨겨진 명곡 🎼🔍 , 어떤 걸 듣고 싶나요?
          </strong>
        </p>
        <p className="text-lg mt-4">
          이 모든 요소를 고려해, 지금 당신에게 딱 맞는 음악을 추천합니다.
        </p>
      </div>

      {/* Temperature 기능 소개 박스 */}
      <div className="p-5 bg-gray-700 text-gray-300 rounded-lg shadow-lg">
        <div className="p-2 bg-gray-600 rounded-md mb-3">
          <h2 className="text-xl font-semibold">
            🎚 Temperature: 나만의 취향을 더하다
          </h2>
        </div>


        <h3 className="text-lg font-semibold">📈 유명도 조절 기능</h3>

        <p className="text-lg pt-2 pb-3">
          이 기능을 사용하면, 음악의 유명도를 직접 조정할 수 있어요.
        </p>

        <p className="text-lg">
          🔥 <strong>온도를 높이면?</strong> 트렌디한 인기곡이 더 많이 추천!{" "}
          <br />
          ❄️ <strong>온도를 낮추면?</strong> 잘 알려지지 않은 숨은 명곡들을
          발견!
        </p>
        <p className="text-lg mt-4">
          이제 기분과 날씨뿐만 아니라,{" "}
          <strong>당신이 원하는 스타일의 음악까지 조절하며</strong>{" "}
          감상해보세요🎶 <br />
        </p>
      </div>
    </div>
  );
};

export default Info;
