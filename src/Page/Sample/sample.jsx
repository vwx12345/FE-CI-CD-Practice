import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function MusicRecommendation() {
  const [text, setText] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = () => {
    if (!text.trim()) return;
    // 예제 추천 목록 (실제 추천 로직을 여기에 연결)
    setRecommendations([
      "Coldplay - Fix You",
      "Adele - Someone Like You",
      "Ed Sheeran - Thinking Out Loud",
    ]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">음악 추천 서비스</h1>
      <Input
        placeholder="당신의 감정을 적어주세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full max-w-md p-2 border rounded-lg shadow-md"
      />
      <Button className="mt-3 px-6 py-2 text-lg" onClick={handleRecommend}>
        추천 받기
      </Button>
      <div className="mt-6 w-full max-w-md">
        {recommendations.map((song, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="mt-2 p-4 text-center">
              <CardContent>{song}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}