// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import AnimatedPage from "../../Components/Effect/AnimatedPage";

// const Result = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const question = location.state?.question || "질문이 없습니다.";
//   const resultData = location.state?.result || {
//     answer: "결과를 불러올 수 없습니다.",
//   };

//   return (
//     <AnimatedPage>
//       <div className="flex flex-col justify-between h-screen bg-gray-900 text-white p-6 max-w-2xl mx-auto">
//         <h1 className="text-xl font-bold text-center mb-4">AI와의 대화</h1>

//         {/* 대화 내용 */}
//         <div className="flex flex-col space-y-4 flex-grow overflow-auto p-4 bg-gray-800 rounded-lg">
//           {/* 사용자 질문 */}
//           <div className="flex justify-end">
//             <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs text-right">
//               {question}
//             </div>
//           </div>

//           {/* AI 응답 */}
//           <div className="flex justify-start">
//             <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
//               {resultData.answer}
//             </div>
//           </div>
//         </div>

//       </div>
//     </AnimatedPage>
//   );
// };

// export default Result;

import React from "react";
import { useLocation } from "react-router-dom";
import AnimatedPage from "../../Components/Effect/AnimatedPage";

const Result = () => {
  const location = useLocation();
  const question = location.state?.question || "질문이 없습니다.";
  const resultData = location.state?.result || {
    answer: "결과를 불러올 수 없습니다.",
    songs: [], // 기본값 설정
  };

  return (
    <AnimatedPage>
      <div className="flex flex-col justify-between h-screen bg-gray-900 text-white p-6 max-w-2xl mx-auto">
        <h1 className="text-xl font-bold text-center mb-4">AI 추천 음악</h1>

        {/* 대화 내용 */}
        <div className="flex flex-col space-y-4 flex-grow overflow-auto p-4 bg-gray-800 rounded-lg">
          {/* 사용자 질문 */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs text-right">
              {question}
            </div>
          </div>

          {/* AI 응답 */}
          <div className="flex justify-start">
            <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
              {resultData.answer}
            </div>
          </div>

          {/* 추천된 노래 목록 */}
          <div className="mt-4 bg-gray-700 p-3 rounded-lg flex flex-col">
            <h2 className="text-lg font-semibold mb-2">🎵 추천 노래 목록:</h2>
            {resultData.songs.length > 0 ? (
              <ul className="space-y-3">
                {resultData.songs.map((song, index) => (
                  <li
                    key={index}
                    className="bg-gray-800 p-3 rounded-lg shadow-lg"
                  >
                    <span className="text-white font-bold">{song.title}</span>
                    <span className="text-gray-300">🎤 {song.artist}</span>
                    <a
                      href={song.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline mt-2"
                    >
                      ▶️ 재생하기
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">추천된 노래가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Result;
