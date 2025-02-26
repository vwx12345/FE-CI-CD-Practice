import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AnimatedPage from "../../Components/Effect/AnimatedPage";
import { API_BASE_URL } from "../../config"

const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const question = location.state?.question || "";

  useEffect(() => {
    const fetchData = async () => {
      if (!question) {
        console.error("❌ 질문이 없습니다.");
        navigate("/"); // 질문이 없으면 홈으로 이동
        return;
      }

      console.log("📡 위치 정보 요청 중...");

      // ✅ 위치 정보를 먼저 가져옴
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("📍 현재 위치:", latitude, longitude);

          try {
            console.log("📡 백엔드 요청 시작:", { question, latitude, longitude });

            const response = await fetch(`${API_BASE_URL}/api/test`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ question, latitude, longitude }),
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
          fetch(`${API_BASE_URL}/api/test`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ question, latitude: null, longitude: null }),
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
        <p className="text-lg">AI가 생각 중입니다... 🤔</p>
      </div>
    </AnimatedPage>
  );
};

export default Loading;
