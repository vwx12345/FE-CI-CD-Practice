import React from "react";

const YouTubeMusicCard = ({ videoId, title, popularity, sourceLink, user }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="bg-gray-800 text-gray-300 p-4 rounded-lg flex items-center gap-4 w-[350px] shadow-lg">
      {/* 썸네일 */}
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
        <img src={thumbnailUrl} alt={title} className="w-20 h-20 rounded-md" />
      </a>

      {/* 정보 */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold flex items-center">
          {/* <span className="mr-2">🎵</span> */}
          {title}
        </h2>
        <div className="grid grid-cols-2 text-sm mt-2">
          <div>
            <p className="text-gray-300">{user}</p>
          </div>
          <div className="flex justify-center text-center">
            <div>
              <p className="text-gray-300">음원</p>
              <a
                href={sourceLink}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                링크
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeMusicCard;
