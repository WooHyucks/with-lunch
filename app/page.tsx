"use client";

import React, { useState } from "react";
import { 
  Lock, Bell, MessageSquare, AlertCircle, Share2, 
  Smile, Meh, Frown, Heart, Star, Flame, ChefHat, 
  ThumbsUp, User, TrendingUp, Clock, BarChart2,
  Utensils
} from "lucide-react";

export default function WithLunchPage() {
  const [activeTab, setActiveTab] = useState<"customer" | "admin">("customer");
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [rating, setRating] = useState<number | null>(null);

  const handleVote = (menu: string) => {
    setSelectedMenu(menu);
  };

  const ratingIcons = [
    { icon: Frown, color: "text-red-500", label: "별로예요" },
    { icon: Meh, color: "text-orange-400", label: "아쉬워요" },
    { icon: Smile, color: "text-yellow-500", label: "보통이에요" },
    { icon: Utensils, color: "text-green-500", label: "맛있어요" },
    { icon: Heart, color: "text-[#EB5722]", label: "최고예요" },
  ];

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
            
            {/* Desktop Tabs */}
            <div className="hidden md:flex space-x-1 bg-gray-100/80 p-1.5 rounded-2xl">
              <button
                onClick={() => setActiveTab("customer")}
                className={`px-6 py-2.5 rounded-xl text-[15px] font-bold transition-all duration-300 ${
                  activeTab === "customer"
                    ? "bg-white text-[#EB5722] shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                고객 목소리
              </button>
              <button
                onClick={() => setActiveTab("admin")}
                className={`px-6 py-2.5 rounded-xl text-[15px] font-bold transition-all duration-300 ${
                  activeTab === "admin"
                    ? "bg-white text-[#EB5722] shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                사장님 대시보드
              </button>
            </div>
          </div>
          
          {/* Mobile Tabs */}
          <div className="flex md:hidden w-full font-bold text-[15px] pt-1">
            <button
              onClick={() => setActiveTab("customer")}
              className={`flex-1 pb-3 text-center transition-all duration-300 relative ${
                activeTab === "customer" ? "text-[#EB5722]" : "text-gray-400"
              }`}
            >
              고객 목소리
              {activeTab === "customer" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EB5722] rounded-t-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`flex-1 pb-3 text-center transition-all duration-300 relative ${
                activeTab === "admin" ? "text-[#EB5722]" : "text-gray-400"
              }`}
            >
              사장님 대시보드
              {activeTab === "admin" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EB5722] rounded-t-full" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-36">
        
        {/* ======================= */}
        {/* TAB 1: CUSTOMER VIEW    */}
        {/* ======================= */}
        {activeTab === "customer" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF5F0] to-white rounded-3xl p-6 sm:p-10 mb-6 sm:mb-8 border border-[#EB5722]/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Main Content Column */}
              <div className="lg:col-span-12 xl:col-span-7 space-y-6 sm:space-y-8">
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
                  <div className="flex items-center mb-5">
                    <div className="bg-[#FFF5F0] p-2 rounded-xl mr-3 relative">
                      <MessageSquare className="w-5 h-5 text-[#EB5722]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg sm:text-xl tracking-tight">사장님께 바로 전하는 한 마디</h3>
                    </div>
                  </div>
                  <textarea
                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl p-5 text-[15px] focus:ring-4 focus:ring-[#EB5722]/10 focus:border-[#EB5722]/50 focus:bg-white outline-none resize-none transition-all placeholder:text-gray-400 font-medium h-32 leading-relaxed"
                    placeholder="국물이 조금 짰나요? 고기 양이 적었나요? 아니면 너무 맛있었나요? 자유롭게 남겨주세요."
                  />
                  <button className="w-full mt-4 bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-md flex justify-center items-center space-x-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">의견 보내기</span>
                  </button>
                </section>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-12 xl:col-span-5 space-y-6 sm:space-y-8">
                {/* A/B Test */}
                <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100/50 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#EB5722]/5 rounded-full blur-2xl" />
                  
                  <div className="mb-6 relative z-10 flex-1">
                    <span className="text-xs font-bold text-[#EB5722] tracking-wider mb-2 block uppercase">A/B 메뉴 배틀</span>
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl leading-snug tracking-tight">
                      다음 주 금요일 특식,<br/>당신의 선택은?
                    </h3>
                  </div>
                  
                  {!selectedMenu ? (
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                      <button
                        onClick={() => handleVote("A")}
                        className="group flex flex-col justify-center items-center p-6 bg-white border border-gray-100 hover:border-[#EB5722] hover:shadow-[0_10px_30px_rgba(235,87,34,0.1)] rounded-2xl transition-all duration-300 active:scale-95"
                      >
                        <div className="bg-[#FFF5F0] p-4 rounded-full mb-4 group-hover:scale-110 transition-transform shadow-sm">
                          <ChefHat className="w-8 h-8 text-[#EB5722]" strokeWidth={2.5}/>
                        </div>
                        <span className="font-extrabold text-gray-800 tracking-tight text-[15px]">수제 등심 돈가스</span>
                      </button>
                      <button
                        onClick={() => handleVote("B")}
                        className="group flex flex-col justify-center items-center p-6 bg-white border border-gray-100 hover:border-[#EB5722] hover:shadow-[0_10px_30px_rgba(235,87,34,0.1)] rounded-2xl transition-all duration-300 active:scale-95"
                      >
                        <div className="bg-gray-50 p-4 rounded-full mb-4 group-hover:bg-[#FFF5F0] group-hover:scale-110 transition-all shadow-sm">
                          <Flame className="w-8 h-8 text-gray-600 group-hover:text-[#EB5722]" strokeWidth={2.5} />
                        </div>
                        <span className="font-extrabold text-gray-800 tracking-tight text-[15px]">매콤 쭈꾸미 볶음</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500 relative z-10 pt-4">
                      <div className="relative h-14 bg-white border border-gray-100 rounded-2xl overflow-hidden flex items-center px-4 shadow-sm">
                        <div className="absolute left-0 top-0 h-full bg-[#EB5722] w-[68%] transition-all duration-1000 opacity-10" />
                        <div className="absolute left-0 top-0 h-full border-l-[3px] border-[#EB5722]" />
                        <div className="flex justify-between items-center w-full relative z-10">
                          <span className="font-bold text-gray-900 flex items-center">
                            <ChefHat className="w-4 h-4 mr-2 text-[#EB5722]" /> 수제 등심 돈가스
                          </span>
                          <span className="font-black text-[#EB5722]">68%</span>
                        </div>
                      </div>
                      <div className="relative h-14 bg-white border border-gray-100 rounded-2xl overflow-hidden flex items-center px-4 shadow-sm">
                        <div className="absolute left-0 top-0 h-full bg-gray-100 w-[32%] transition-all duration-1000" />
                        <div className="flex justify-between items-center w-full relative z-10">
                          <span className="font-bold text-gray-600 flex items-center">
                             <Flame className="w-4 h-4 mr-2 text-gray-400" /> 매콤 쭈꾸미 볶음
                          </span>
                          <span className="font-bold text-gray-500">32%</span>
                        </div>
                      </div>
                      <div className="bg-[#FFF5F0] text-center rounded-xl p-3 border border-[#EB5722]/10 mt-2">
                        <p className="text-sm font-extrabold text-[#EB5722] flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 mr-1.5" strokeWidth={3} />
                          돈가스 메뉴가 유력하네요! 🎉
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              </div>
            </div>
          </div>
        )}

        {/* ======================= */}
        {/* TAB 2: ADMIN DASHBOARD  */}
        {/* ======================= */}
        {activeTab === "admin" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* KPI Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100">
                <div className="flex items-center text-[13px] font-bold text-gray-500 mb-3">
                  <Star className="w-4 h-4 text-[#EB5722] mr-1.5" /> 전체 만족도
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">4.7</span>
                  <span className="text-sm font-bold text-gray-400">/5.0</span>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100">
                <div className="flex items-center text-[13px] font-bold text-gray-500 mb-3">
                  <User className="w-4 h-4 text-blue-500 mr-1.5" /> 참여 인원
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">124</span>
                  <span className="text-sm font-bold text-gray-400">명</span>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100">
                <div className="flex items-center text-[13px] font-bold text-gray-500 mb-3">
                  <MessageSquare className="w-4 h-4 text-green-500 mr-1.5" /> 신규 접수 코멘트
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">18</span>
                  <span className="text-sm font-bold text-gray-400">건</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#EB5722] to-[#ff7e50] p-5 sm:p-6 rounded-3xl shadow-lg shadow-[#EB5722]/20 flex flex-col justify-center relative overflow-hidden group border border-[#EB5722]">
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center text-[13px] font-bold text-white/80 mb-2">
                    <TrendingUp className="w-4 h-4 mr-1.5" /> 이번주 반응 1위
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    수제 등심 돈가스
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Charts */}
              <section className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-gray-900 text-lg flex items-center tracking-tight">
                    <BarChart2 className="w-5 h-5 text-gray-400 mr-2" />
                    오늘의 반찬 선호도 분석
                  </h3>
                </div>
                
                <div className="space-y-7">
                  <div>
                    <div className="flex justify-between items-end mb-2.5">
                      <span className="font-extrabold text-gray-800 text-[15px]">제육볶음</span>
                      <span className="text-blue-600 font-extrabold text-[11px] bg-blue-50 px-2.5 py-1 rounded-md">90% · 필살기 마진율</span>
                    </div>
                    <div className="w-full bg-gray-50 rounded-full h-3.5 shadow-inner">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-full rounded-full w-[90%] relative overflow-hidden shadow-sm">
                        <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 animate-[shimmer_2s_infinite]" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2.5">
                      <span className="font-extrabold text-gray-800 text-[15px]">계란말이</span>
                      <span className="text-green-600 font-extrabold text-[11px] bg-green-50 px-2.5 py-1 rounded-md">75% · 무난한 베스트</span>
                    </div>
                    <div className="w-full bg-gray-50 rounded-full h-3.5 shadow-inner">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full w-[75%] shadow-sm" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2.5">
                      <span className="font-extrabold text-gray-800 text-[15px]">멸치볶음</span>
                      <span className="text-red-500 font-extrabold text-[11px] bg-red-50 px-2.5 py-1 rounded-md">30% · 잔반 개선 필요</span>
                    </div>
                    <div className="w-full bg-gray-50 rounded-full h-3.5 shadow-inner">
                      <div className="bg-gradient-to-r from-red-400 to-red-500 h-full rounded-full w-[30%] shadow-sm" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Feedbacks */}
              <section className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col">
                <div className="flex items-center mb-6">
                  <Bell className="w-5 h-5 text-gray-400 mr-2" />
                  <h3 className="font-bold text-gray-900 text-lg tracking-tight">실시간 고객 피드백</h3>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-start bg-gray-50/50 p-5 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] group">
                    <div className="bg-green-100 p-2.5 rounded-xl mr-3 h-fit group-hover:bg-green-500 transition-colors">
                      <ThumbsUp className="w-4 h-4 text-green-600 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-[14px] leading-relaxed">
                        "오늘 국물이 따뜻해서 너무 좋았어요!"
                      </p>
                      <span className="text-[11px] font-bold text-gray-400 mt-2.5 flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> 방금 전
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-gray-50/50 p-5 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] group">
                    <div className="bg-red-100 p-2.5 rounded-xl mr-3 h-fit group-hover:bg-red-500 transition-colors">
                      <AlertCircle className="w-4 h-4 text-red-500 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-[14px] leading-relaxed">
                        "어제보다 고기 양이 좀 적은 것 같아요 ㅠㅠ"
                      </p>
                      <span className="text-[11px] font-bold text-gray-400 mt-2.5 flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> 15분 전
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </main>

      {/* Floating CTA for Customer */}
      {activeTab === "customer" && (
        <div className="fixed bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-50 pointer-events-none flex justify-center">
          <button className="max-w-md w-full pointer-events-auto flex items-center justify-center space-x-2 bg-[#FEE500] hover:bg-[#F4DC00] text-[#3c1e1e] font-extrabold text-[15px] sm:text-base py-4 sm:py-5 px-6 rounded-2xl shadow-[0_8px_20px_rgba(254,229,0,0.2)] transition-all duration-300 active:scale-95 hover:-translate-y-1">
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
            <span>팀원에게 공유하고 투표하기</span>
          </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(200%); }
        }
      `}} />
    </div>
  );
}
