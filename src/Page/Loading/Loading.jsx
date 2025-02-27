import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AnimatedPage from "../../Components/Effect/AnimatedPage";
import { API_BASE_URL } from "../../config";

const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const question = location.state?.question || "";
  const pop = location.state?.volume || 0;

  useEffect(() => {
    const fetchData = async () => {
      if (!question) {
        console.error("❌ 질문이 없습니다.");
        navigate("/"); // 질문이 없으면 홈으로 이동
        return;
      }
      console.log("popularity", pop);
      console.log("📡 위치 정보 요청 중...");

      // ✅ 위치 정보를 먼저 가져옴
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("📍 현재 위치:", latitude, longitude);

          try {
            console.log("📡 백엔드 요청 시작:", {
              question,
              pop,
              latitude,
              longitude,
            });

            const response = await fetch(`${API_BASE_URL}/api/info/current`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ question, pop, latitude, longitude }),
            });

            if (response.ok) {
              const resultData = await response.json();
              console.log("📡 백엔드 응답:", resultData);

              navigate("/result", { state: { question, result: resultData } }); // ✅ 결과 전달
            } else {
              console.error("❌ 응답 오류:", response.statusText);
            }
          } catch (error) {
            console.error("❌ 요청 실패:", error);
          }
        },
        (error) => {
          console.error("❌ 위치 정보를 가져올 수 없습니다:", error);

          // 위치 정보를 가져오지 못한 경우 `latitude: null, longitude: null`을 설정하고 백엔드 요청
          fetch(`${API_BASE_URL}/api/info/current`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }, 
            body: JSON.stringify({ question, latitude: 37.4004401, longitude: 127.1067428 }),
          })
            .then((response) => response.json())
            .then((resultData) => {
              console.log("📡 백엔드 응답:", resultData);
              navigate("/result", { state: { question, result: resultData } });
            })
            .catch((error) => console.error("❌ 요청 실패:", error));
        }
      );
    };

    fetchData(); // API 요청 실행
  }, [navigate, question]);

  return (
    <AnimatedPage>
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="flex flex-col justify-center space-y-4 p-4 bg-gray-800 rounded-xl w-full max-w-2xl mx-auto h-40">
          <p className="text-lg text-gray-300">
            잠시만요, 맞춤 음악을 찾는 중이에요! ⏳
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Loading;