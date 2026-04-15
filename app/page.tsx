"use client";

import React, { useState } from "react";
import { 
  Lock, Bell, MessageSquare, AlertCircle, Share2, 
  Smile, Meh, Frown, Heart, Star, Flame, ChefHat, 
  ThumbsUp, User, TrendingUp, Clock, BarChart2,
  Utensils, ChevronRight, Check
} from "lucide-react";

export default function WithLunchPage() {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [feedbackType, setFeedbackType] = useState<string | null>(null);

  // New states for Toss-style A/B Vote
  const [votedMenu, setVotedMenu] = useState<string | null>(null);
  const [showCustomMenu, setShowCustomMenu] = useState(false);
  const [customMenuInput, setCustomMenuInput] = useState("");
  const [customMenuSubmitted, setCustomMenuSubmitted] = useState(false);

  const ratingIcons = [
    { icon: Frown, color: "text-red-500", label: "별로예요" },
    { icon: Meh, color: "text-orange-400", label: "아쉬워요" },
    { icon: Smile, color: "text-yellow-500", label: "보통이에요" },
    { icon: Utensils, color: "text-green-500", label: "맛있어요" },
    { icon: Heart, color: "text-[#EB5722]", label: "최고예요" },
  ];

  const handleVote = (menu: string) => {
    setVotedMenu(menu);
  };

  const handleCustomMenuSubmit = () => {
    if (customMenuInput.trim()) {
      setCustomMenuSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* HEADER LOGO */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <div className="text-[#EB5722] font-black text-xl sm:text-2xl leading-[0.9] tracking-tighter ">
                With<br/>Lunch
              </div>
            </div>
            
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-36">
        
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF5F0] to-white rounded-3xl p-6 sm:p-10 mb-6 border border-[#EB5722]/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EB5722]/10 to-transparent rounded-bl-full opacity-50 pointer-events-none" />
            
            <div className="relative z-10 sm:text-center sm:mx-auto max-w-2xl">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-[#EB5722]/20 mb-4 text-xs font-bold text-[#EB5722] shadow-sm">
                <Lock className="w-3.5 h-3.5" />
                <span>100% 익명 보장</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight leading-[1.3] mb-3">
                오늘 배송된 점심,<br className="sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5722] to-[#ff8c60]">452명</span>이 식사하셨습니다!
              </h1>
              <p className="text-gray-500 font-medium sm:text-lg">
                솔직한 의견이 더 맛있는 점심을 만듭니다.
              </p>
            </div>
          </div>

          {/* Toss-style A/B Vote Section (Right under Hero) */}
          <section className="bg-white p-6 sm:p-8 w-full rounded-2xl md:rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100/50 relative overflow-hidden mb-6 sm:mb-8">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#EB5722]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="bg-[#FFF5F0] p-2.5 rounded-xl mr-3 shadow-sm border border-[#EB5722]/10">
                <ChefHat className="w-5 h-5 text-[#EB5722]" strokeWidth={2.5}/>
              </div>
              <div>
                <span className="text-xs font-bold text-[#EB5722] tracking-wider mb-1 block uppercase">비밀 투표소 🗳️</span>
                <h3 className="font-extrabold text-gray-900 text-lg sm:text-xl tracking-tight">
                  다음 주 특식 대결! 우리 팀의 선택은?
                </h3>
              </div>
            </div>

            {!votedMenu ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <button
                  onClick={() => handleVote("제육볶음")}
                  className="flex items-center justify-between p-5 bg-gray-50 hover:bg-[#FFF5F0] rounded-2xl transition-all duration-300 active:scale-95 group border border-transparent hover:border-[#EB5722]/20 shadow-sm"
                >
                  <div className="flex items-center text-left">
                    <span className="text-3xl mr-4">🔥</span>
                    <span className="font-extrabold text-gray-900 text-base group-hover:text-[#EB5722] transition-colors tracking-tight">
                      마성의 제육볶음
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#EB5722] transition-colors" />
                </button>
                
                <button
                  onClick={() => handleVote("수제 돈가스")}
                  className="flex items-center justify-between p-5 bg-gray-50 hover:bg-[#FFF5F0] rounded-2xl transition-all duration-300 active:scale-95 group border border-transparent hover:border-[#EB5722]/20 shadow-sm"
                >
                  <div className="flex items-center text-left">
                    <span className="text-3xl mr-4">🍱</span>
                    <span className="font-extrabold text-gray-900 text-base group-hover:text-[#EB5722] transition-colors tracking-tight">
                      바삭 수제 돈가스
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#EB5722] transition-colors" />
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in zoom-in-95 duration-500 relative z-10 space-y-5 pt-2 max-w-2xl">
                <div>
                  <div className="flex justify-between items-end mb-2.5">
                    <span className="font-bold text-gray-900 flex items-center text-[15px]">
                      {votedMenu === "수제 돈가스" ? "수제 돈가스" : "제육볶음"} 
                      <Check className="w-4 h-4 ml-1.5 text-[#EB5722]" strokeWidth={3} />
                    </span>
                    <span className="font-extrabold text-[#EB5722] text-[15px]">68%</span>
                  </div>
                  <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-[#EB5722] rounded-full w-[68%] transition-all duration-1000 ease-out shadow-sm" />
                  </div>
                  <p className="text-[13px] font-bold text-[#EB5722] mt-2.5 bg-[#FFF5F0] inline-block px-3 py-1 rounded-md">
                    돈가스가 68% 로 앞서는 중! 🎉
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-2.5 mt-5">
                    <span className="font-bold text-gray-500 text-[15px]">
                      {votedMenu === "수제 돈가스" ? "제육볶음" : "수제 돈가스"}
                    </span>
                    <span className="font-bold text-gray-400 text-[15px]">32%</span>
                  </div>
                  <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-slate-300 rounded-full w-[32%] transition-all duration-1000 ease-out" />
                  </div>
                </div>
              </div>
            )}

            {/* Progressive Disclosure */}
            {!votedMenu && !customMenuSubmitted && (
              <div className="mt-5 max-w-2xl mx-auto sm:mx-0">
                <button
                  onClick={() => setShowCustomMenu(!showCustomMenu)}
                  className="text-gray-500 text-sm font-bold underline underline-offset-4 mt-3 text-center sm:text-left w-full active:scale-95 transition-transform"
                >
                  👉 둘 다 별론데요? 저는 이거요 🙋‍♂️
                </button>
              </div>
            )}

            {showCustomMenu && !customMenuSubmitted && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-400 mt-5 p-5 bg-gray-50 rounded-2xl border border-gray-100 max-w-2xl relative">
                <div className="absolute -top-2 left-1/2 sm:left-10 -translate-x-1/2 w-4 h-4 bg-gray-50 border-t border-l border-gray-100 rotate-45" />
                
                <p className="text-sm font-bold text-gray-600 mb-3 relative z-10">먹어보고 싶은 메뉴를 맘껏 적어주세요!</p>
                <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10">
                  <input
                    type="text"
                    value={customMenuInput}
                    onChange={(e) => setCustomMenuInput(e.target.value)}
                    placeholder="예: 찜닭, 소시지 야채볶음 등!"
                    className="w-full flex-1 bg-white rounded-xl px-4 py-3.5 text-[16px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5722]/30 border border-gray-200 transition-all shadow-sm"
                  />
                  <button 
                    onClick={handleCustomMenuSubmit}
                    disabled={!customMenuInput.trim()}
                    className="w-full sm:w-auto px-6 py-3.5 font-bold bg-[#EB5722] hover:bg-[#d84e1d] disabled:bg-gray-300 disabled:text-gray-500 text-white rounded-xl transition-colors active:scale-95 shadow-sm text-base"
                  >
                    건의하기
                  </button>
                </div>
              </div>
            )}
            
            {customMenuSubmitted && (
              <div className="animate-in fade-in zoom-in-95 duration-400 mt-5 max-w-2xl">
                 <div className="bg-[#FFF5F0] py-3.5 px-5 rounded-2xl border border-[#EB5722]/10 inline-block font-extrabold text-sm text-[#EB5722]">
                   건의 완료! 다음 주 식단에 꼭 참고할게요 📝
                 </div>
              </div>
            )}
          </section>

          {/* Original Rating & Feedback Grid */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <div className="space-y-6 sm:space-y-8">
              {/* Rating */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100/50 hover:border-[#EB5722]/20 transition-colors duration-300">
                <h3 className="font-bold text-gray-900 mb-6 text-lg sm:text-xl flex items-center tracking-tight">
                  <Utensils className="w-5 h-5 text-[#EB5722] mr-2" />
                  오늘 배달된 식사는 어떠셨나요?
                </h3>
                <div className="flex justify-between items-center sm:px-2">
                  {ratingIcons.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = rating === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setRating(idx)}
                        className={`flex flex-col items-center group transition-all duration-300 ${
                          isSelected ? "scale-110" : "hover:scale-105 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <div className={`p-3 sm:p-5 rounded-2xl mb-2 sm:mb-3 transition-all duration-300 ${
                          isSelected ? "bg-gray-50 shadow-inner" : "group-hover:bg-gray-50 bg-white"
                        }`}>
                          <Icon 
                            className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${isSelected ? item.color : 'text-gray-400 group-hover:text-gray-600'}`} 
                            strokeWidth={isSelected ? 2.5 : 2}
                          />
                        </div>
                        <span className={`text-[11px] sm:text-xs font-extrabold tracking-tight ${
                          isSelected ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                        }`}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Feedback */}
              <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
                  <div className="flex items-center">
                    <div className="bg-[#FFF5F0] p-2 rounded-xl mr-3 relative">
                      <MessageSquare className="w-5 h-5 text-[#EB5722]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg sm:text-xl tracking-tight">사장님께 바로 전하는 한 마디</h3>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    { id: "양이 부족해요", icon: "🍚", text: "양이 부족해요" },
                    { id: "음식이 식었어요", icon: "🥶", text: "음식이 식었어요" },
                    { id: "구성이 아쉬워요", icon: "🍱", text: "구성이 아쉬워요" },
                    { id: "직접 입력", icon: "✏️", text: "직접 입력" }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFeedbackType(option.id)}
                      className={`flex items-center px-4 py-3.5 rounded-2xl border transition-all duration-200 text-sm font-bold active:scale-[0.98] ${
                        feedbackType === option.id
                          ? "border-[#EB5722] bg-[#FFF5F0] text-[#EB5722] shadow-[0_2px_10px_rgba(235,87,34,0.1)]"
                          : "border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-200 hover:bg-white"
                      }`}
                    >
                      <span className="text-lg mr-2">{option.icon}</span>
                      <span>{option.text}</span>
                    </button>
                  ))}
                </div>

                {feedbackType === "직접 입력" && (
                  <div className="animate-in fade-in zoom-in-95 duration-300">
                    <textarea
                      className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl p-5 text-base focus:ring-4 focus:ring-[#EB5722]/10 focus:border-[#EB5722]/50 focus:bg-white outline-none resize-none transition-all placeholder:text-gray-400 font-medium h-32 leading-relaxed mt-2"
                      placeholder="국물이 조금 짰나요? 고기 양이 적었나요? 아니면 너무 맛있었나요? 자유롭게 남겨주세요.(100% 익명)"
                    />
                  </div>
                )}

                <button 
                  disabled={!feedbackType}
                  className={`w-full mt-4 text-white font-bold py-4 rounded-2xl transition-all shadow-md flex justify-center items-center space-x-2 group ${
                    !feedbackType 
                      ? "bg-gray-300 opacity-70 cursor-not-allowed" 
                      : "bg-gray-900 hover:bg-black active:scale-[0.98]"
                  }`}
                >
                  <span className={feedbackType ? "group-hover:translate-x-1 transition-transform" : ""}>의견 보내기</span>
                </button>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Share CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-50 pointer-events-none flex justify-center">
        <button className="max-w-md w-full pointer-events-auto flex items-center justify-center space-x-2 bg-[#FEE500] hover:bg-[#F4DC00] text-[#3c1e1e] font-extrabold text-[15px] sm:text-base py-4 sm:py-5 px-6 rounded-2xl shadow-[0_8px_20px_rgba(254,229,0,0.2)] transition-all duration-300 active:scale-95 hover:-translate-y-1">
          <Share2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
          <span>팀원에게 공유하고 투표하기</span>
        </button>
      </div>

    </div>
  );
}
