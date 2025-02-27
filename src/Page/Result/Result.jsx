import React from "react";
import { useLocation } from "react-router-dom";
import AnimatedPage from "../../Components/Effect/AnimatedPage";
import YouTubeMusicCard from "../../Components/YouTubeMusicCard";

const Result = () => {
  const location = useLocation();
  const question = location.state?.question || "질문이 없습니다.";
  const resultData =
    location.state?.result && location.state.result.recommendations
      ? location.state.result
      : { recommendations: [] };

  return (
    <AnimatedPage>
      <div className="pt-20 flex flex-col justify-between h-screen bg-gray-900 text-white p-6 mx-auto no-scrollbar rounded-xl">

        {/* 대화 내용 */}
        <div className="flex flex-col space-y-4 flex-grow overflow-y-scroll no-scrollbar p-4 bg-gray-800 rounded-xl w-full max-w-2xl mx-auto pb-20 no-scrollbar">
          {/* 사용자 질문 */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs text-right">
              {question}
            </div>
          </div>

          {/* AI 응답 */}
          <div className="flex justify-start no-scrollbar">
            <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg max-w-xs">
              아래 노래 추천드려요!🌟🌟
            </div>
          </div>

          {/* 추천된 노래 목록 */}
          <div className="mt-4 bg-gray-700 p-2 rounded-lg flex flex-col no-scrollbar  ml-4 w-fit">
            <h2 className="text-lg font-semibold mb-2">🎵 추천 노래 목록:</h2>
            {resultData.recommendations.length > 0 ? (
              <div className="space-y-2 pr-5">
                {resultData.recommendations.map((recommendation, index) => {
                  // 유튜브 URL에서 videoId 추출
                  const videoIdMatch = recommendation.embedUrl.match(
                    /(?:v=|\/embed\/|\/\d+\/|\/vi\/|\/v\/|youtu\.be\/|\/e\/|watch\?v=|&v=|\/watch\?.*?v=)([^#\&\?]*)/
                  );
                  const videoId =
                    videoIdMatch && videoIdMatch[1] ? videoIdMatch[1] : null;

                  return (
                    videoId && (
                      <YouTubeMusicCard
                        key={index}
                        videoId={videoId}
                        title={recommendation.title}
                        popularity={recommendation.pop}
                        sourceLink={recommendation.embedUrl}
                        user={recommendation.artist}
                      />
                    )
                  );
                })}
              </div>
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
