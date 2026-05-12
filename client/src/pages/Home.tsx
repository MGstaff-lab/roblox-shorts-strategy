/**
 * Roblox Shorts Strategy Hub — Home Page
 * Design: Editorial Magazine / Strategy Brief
 * Colors: Off-white bg, deep slate text, YouTube red accent
 * Fonts: Playfair Display (headers), DM Sans (body), DM Mono (stats)
 */

import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart, Pie, Cell, Legend
} from "recharts";
import {
  creators, hookData, robloxGames, monetizationStreams,
  calendarData, algorithmInsights, platformStats,
  competitors, competitiveGaps, hookFormulas,
  type CalendarEntry
} from "@/lib/data";
import { ChevronDown, ChevronUp, Calendar, TrendingUp, DollarSign, Users, Gamepad2, Zap, BookOpen, Filter, Target, AlertTriangle, ExternalLink, BarChart2, Award } from "lucide-react";

// ============================================================
// ANIMATED COUNTER
// ============================================================
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayed(value);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayed}{suffix}</span>;
}

// ============================================================
// SECTION HEADER
// ============================================================
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-mono-custom tracking-[0.2em] uppercase text-red-600 mb-2">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">{title}</h2>
      {subtitle && <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
      <div className="mt-4 w-16 h-0.5 bg-red-600" />
    </div>
  );
}

// ============================================================
// PILLAR BADGE
// ============================================================
const pillarColors: Record<string, string> = {
  Start: "bg-blue-100 text-blue-800",
  Grow: "bg-emerald-100 text-emerald-800",
  Monetize: "bg-amber-100 text-amber-800",
  "Case Study": "bg-purple-100 text-purple-800",
};

const audienceColors: Record<string, string> = {
  Both: "bg-slate-100 text-slate-700",
  Established: "bg-indigo-100 text-indigo-800",
  "New Creator": "bg-rose-100 text-rose-800",
};

// ============================================================
// CALENDAR CARD
// ============================================================
function CalendarCard({ entry, index }: { entry: CalendarEntry; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border border-slate-200 rounded-lg bg-white hover:border-red-200 hover:shadow-md transition-all duration-200"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <div
        className="p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Day number */}
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <span className="font-display font-bold text-sm">{entry.day}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-1.5 mb-1.5">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${entry.format === 'Long-Form' ? 'bg-slate-900 text-white' : 'bg-red-600 text-white'}`}>
                  {entry.format === 'Long-Form' ? '📹 Long-Form' : '⚡ Short'}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${pillarColors[entry.pillar]}`}>
                  {entry.pillar}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${audienceColors[entry.audience]}`}>
                  {entry.audience}
                </span>
              </div>
              <p className="font-semibold text-slate-900 text-sm leading-snug line-clamp-2">{entry.title}</p>
              <p className="text-xs text-slate-500 mt-1">🕐 {entry.bestTime}{entry.duration ? ` · ${entry.duration}` : ''}</p>
            </div>
          </div>
          <button className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors mt-1">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="px-4 pb-4 border-t border-slate-100 pt-3 space-y-3">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Hook</p>
            <p className="text-sm text-slate-700 italic leading-relaxed">"{entry.hook}"</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">CTA</p>
            <p className="text-sm text-slate-700 leading-relaxed">{entry.cta}</p>
          </div>
          {entry.robloxGame && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Roblox Games Featured</p>
              <p className="text-sm text-slate-700">🎮 {entry.robloxGame}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================
// MAIN HOME PAGE
// ============================================================
export default function Home() {
  const [calendarFilter, setCalendarFilter] = useState<'all' | 'Long-Form' | 'Short'>('all');
  const [audienceFilter, setAudienceFilter] = useState<'all' | 'Both' | 'Established' | 'New Creator'>('all');
  const [weekFilter, setWeekFilter] = useState<number>(0);
  const [creatorSearch, setCreatorSearch] = useState("");

  const filteredCalendar = calendarData.filter(entry => {
    if (calendarFilter !== 'all' && entry.format !== calendarFilter) return false;
    if (audienceFilter !== 'all' && entry.audience !== audienceFilter) return false;
    if (weekFilter > 0 && entry.week !== weekFilter) return false;
    return true;
  });

  const filteredCreators = creators.filter(c =>
    c.name.toLowerCase().includes(creatorSearch.toLowerCase()) ||
    c.focus.toLowerCase().includes(creatorSearch.toLowerCase())
  );

  // Summary stats
  const longFormCount = calendarData.filter(e => e.format === 'Long-Form').length;
  const shortsCount = calendarData.filter(e => e.format === 'Short').length;

  const pillarDistribution = [
    { name: "Grow", value: calendarData.filter(e => e.pillar === 'Grow').length, color: "#10B981" },
    { name: "Start", value: calendarData.filter(e => e.pillar === 'Start').length, color: "#3B82F6" },
    { name: "Monetize", value: calendarData.filter(e => e.pillar === 'Monetize').length, color: "#F59E0B" },
    { name: "Case Study", value: calendarData.filter(e => e.pillar === 'Case Study').length, color: "#8B5CF6" },
  ];

  const hookChartData = hookData.map(h => ({
    name: h.type.split('/')[0].trim(),
    views: h.avgViews,
    multiplier: parseFloat(h.multiplier),
  }));

  return (
    <div className="min-h-screen bg-[#FAFAF8]">

      {/* ======================================================
          NAVIGATION
      ====================================================== */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">RS</span>
              </div>
              <span className="font-display font-bold text-slate-900 text-sm hidden sm:block">Roblox Shorts Strategy Hub</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              {[
                { href: "#research", label: "Research" },
                { href: "#creators", label: "Top 20 Creators" },
                { href: "#competitors", label: "Competitor Intel" },
                { href: "#algorithm", label: "Algorithm" },
                { href: "#calendar", label: "30-Day Calendar" },
                { href: "#monetize", label: "Monetization" },
              ].map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2 py-1 rounded hover:bg-slate-100 transition-colors hidden md:block font-medium text-slate-600 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ======================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663653773593/7Rpn2ThTbpvaPnhsCsZpFu/hero-banner-5JcsweA6x2EijBV44uQvA4.webp)` }}
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative container py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-mono-custom tracking-[0.2em] uppercase text-red-400 mb-4">
              YouTube Consulting Research Report · May 2026
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Roblox Shorts<br />
              <span className="text-red-400">Strategy Hub</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              A comprehensive research report on the top 20 YouTube Shorts strategy creators, high-engagement content patterns, and a 30-day content calendar tailored to the Roblox niche — for both established YouTubers and new creators.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "📊", label: "Top 20 Creators Analyzed" },
                { icon: "📅", label: "30-Day Content Calendar" },
                { icon: "🎮", label: "Roblox Niche Focused" },
                { icon: "💰", label: "6 Monetization Strategies" },
              ].map(tag => (
                <span key={tag.label} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full border border-white/20">
                  {tag.icon} {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PLATFORM STATS STRIP
      ====================================================== */}
      <section id="research" className="bg-slate-900 text-white">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-black mb-1" style={{ color: stat.color }}>
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-slate-400 text-xs mb-1">{stat.label}</div>
                <div className="text-xs font-mono-custom" style={{ color: stat.color }}>{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          ROBLOX TRENDING GAMES
      ====================================================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container">
          <SectionHeader
            eyebrow="Roblox Niche Intelligence"
            title="Trending Games Driving High Engagement"
            subtitle="These six Roblox games are generating the most YouTube Shorts content and viewer engagement in 2025–2026."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {robloxGames.map((game) => (
              <div key={game.name} className="border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all duration-200 hover:border-slate-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: game.color }} />
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    game.youtubeEngagement === 'Extremely High' ? 'bg-red-100 text-red-700' :
                    game.youtubeEngagement === 'Very High' ? 'bg-orange-100 text-orange-700' :
                    game.youtubeEngagement === 'High' ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {game.youtubeEngagement}
                  </span>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-1">{game.name}</h3>
                <p className="text-xs text-slate-500 mb-2">{game.genre}</p>
                <div className="flex items-center gap-1 mb-3">
                  <TrendingUp size={12} className="text-red-500" />
                  <span className="text-xs font-medium text-red-600">{game.trend}</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Content Angle</p>
                  <p className="text-sm text-slate-700">{game.contentAngle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          TOP 20 CREATORS
      ====================================================== */}
      <section id="creators" className="py-16 bg-[#FAFAF8]">
        <div className="container">
          <SectionHeader
            eyebrow="Creator Intelligence"
            title="Top 20 YouTube Shorts Strategy Creators"
            subtitle="Ranked by influence, subscriber count, and relevance to the Roblox gaming niche."
          />

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search creators by name or focus area..."
              value={creatorSearch}
              onChange={e => setCreatorSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-3">
            {filteredCreators.map((creator) => (
              <div key={creator.rank} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-display font-bold text-sm">
                    {creator.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-slate-900">{creator.name}</h3>
                      <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full">{creator.tier}</span>
                      <span className="text-xs font-mono-custom text-slate-500">{creator.subscribers}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{creator.focus}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="bg-blue-50 rounded-lg p-2.5">
                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-0.5">Key Insight</p>
                        <p className="text-xs text-slate-700">{creator.keyInsight}</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-2.5">
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-0.5">Outperforming Pattern</p>
                        <p className="text-xs text-slate-700">{creator.outperformingPattern}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          COMPETITOR INTELLIGENCE SECTION
      ====================================================== */}
      <section id="competitors" className="py-16 bg-[#FAFAF8]">
        <div className="container">
          <SectionHeader
            eyebrow="Competitive Intelligence"
            title="The Roblox Shorts Education Landscape"
            subtitle="9 direct and adjacent competitors analyzed — their outlier videos, hooks, funnels, and the gaps they're all missing."
          />

          {/* Competitor Outlier Views Chart */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-1">
              <BarChart2 size={16} className="text-red-600" />
              <h3 className="font-display font-bold text-xl text-slate-900">Outlier Video Performance</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6">Top-performing video views for each competitor — showing the massive gap between average and outlier content</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={competitors.map(c => ({ name: c.name, outlier: c.topOutlierViews, avg: c.avgViews, multiplier: c.outlierMultiplier }))}
                  margin={{ left: 0, right: 20, top: 10, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b' }} angle={-35} textAnchor="end" interval={0} />
                  <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}K` : v} />
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      `${value >= 1000 ? (value/1000).toFixed(0) + 'K' : value} views`,
                      name === 'outlier' ? 'Top Video' : 'Channel Average'
                    ]}
                    contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }}
                  />
                  <Bar dataKey="outlier" fill="#EF4444" radius={[4, 4, 0, 0]} name="outlier" />
                  <Bar dataKey="avg" fill="#CBD5E1" radius={[4, 4, 0, 0]} name="avg" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6 mt-2 justify-center">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-red-500" /><span className="text-xs text-slate-500">Top Outlier Video</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-slate-300" /><span className="text-xs text-slate-500">Channel Average</span></div>
            </div>
          </div>

          {/* Competitor Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
            {competitors.map((c) => (
              <div key={c.id} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                      <h3 className="font-display font-bold text-slate-900">{c.name}</h3>
                    </div>
                    <p className="text-xs text-slate-400 font-mono-custom">{c.handle}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                    c.tier === 'Direct' ? 'bg-red-100 text-red-700' :
                    c.tier === 'Adjacent' ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-600'
                  }`}>{c.tier}</span>
                </div>

                {/* Key stats row */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <div className="font-display font-black text-sm text-slate-900">{c.subscribers}</div>
                    <div className="text-xs text-slate-400">Subs</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2 text-center">
                    <div className="font-display font-black text-sm text-red-600">{c.topOutlierViews >= 1000 ? (c.topOutlierViews/1000).toFixed(0) + 'K' : c.topOutlierViews}</div>
                    <div className="text-xs text-slate-400">Top Video</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-2 text-center">
                    <div className="font-display font-black text-sm text-emerald-600">{c.outlierMultiplier}x</div>
                    <div className="text-xs text-slate-400">Multiplier</div>
                  </div>
                </div>

                {/* Top outlier video */}
                <div className="bg-slate-50 rounded-lg p-2.5 mb-2.5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Top Outlier Video</p>
                  <p className="text-xs text-slate-700 font-medium leading-snug">"{c.topOutlierVideo}"</p>
                </div>

                {/* Hook formula */}
                <div className="mb-2.5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Hook Formula</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.hookFormula}</p>
                </div>

                {/* Funnel */}
                <div className="border-t border-slate-100 pt-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Funnel</p>
                      <p className="text-xs text-slate-700 font-medium">{c.funnelPlatform}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Price</p>
                      <p className="text-xs font-mono-custom font-medium" style={{ color: c.color }}>{c.funnelPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Members</p>
                      <p className="text-xs font-mono-custom font-medium text-slate-700">{c.funnelMembers}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hook Formulas Section */}
          <div className="bg-slate-900 rounded-2xl p-8 mb-10 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={18} className="text-red-400" />
              <h3 className="font-display font-bold text-2xl text-white">The 6 Hook Formulas That Drive Outlier Views</h3>
            </div>
            <p className="text-slate-400 text-sm mb-8">Every competitor's top-performing video uses one of these six hook structures. Master these and you own the space.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {hookFormulas.map((hf) => (
                <div key={hf.name} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: hf.color }} />
                    <h4 className="font-display font-bold text-white">{hf.name}</h4>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3 mb-3">
                    <p className="text-xs font-mono-custom text-slate-300 leading-relaxed">{hf.formula}</p>
                  </div>
                  <p className="text-xs text-slate-400 italic mb-2">e.g. "{hf.example}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Award size={11} className="text-yellow-400" />
                      <span className="text-xs text-yellow-300">{hf.bestPerformer}</span>
                    </div>
                    <span className="text-xs font-mono-custom" style={{ color: hf.color }}>{hf.avgViews} views</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Gaps Section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} className="text-emerald-600" />
              <h3 className="font-display font-bold text-2xl text-slate-900">8 Gaps Nobody in This Space is Filling</h3>
            </div>
            <p className="text-slate-500 text-sm mb-6">These are the strategic white spaces your consulting business can own. Each gap represents a content or offer opportunity with zero direct competition.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {competitiveGaps.map((gap) => (
                <div key={gap.id} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: gap.color }} />
                      <h4 className="font-display font-bold text-slate-900">{gap.title}</h4>
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        gap.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                        gap.priority === 'High' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>{gap.priority}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{gap.description}</p>
                  <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                    <div className="flex items-start gap-2">
                      <TrendingUp size={12} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-emerald-800 leading-relaxed">{gap.opportunity}</p>
                    </div>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Implementation difficulty:</span>
                    <span className={`text-xs font-medium ${
                      gap.difficulty === 'Low' ? 'text-emerald-600' :
                      gap.difficulty === 'Medium' ? 'text-amber-600' :
                      'text-red-600'
                    }`}>{gap.difficulty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Funnel Comparison Table */}
          <div className="mt-10 bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-red-600" />
                <h3 className="font-display font-bold text-xl text-slate-900">Funnel & Revenue Comparison</h3>
              </div>
              <p className="text-sm text-slate-500 mt-1">How every competitor monetizes their audience — and where the biggest opportunities lie</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Creator</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Platform</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Price</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Members</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Est. MRR</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {competitors.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                          <span className="font-medium text-slate-900">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{c.funnelPlatform}</td>
                      <td className="px-4 py-3 font-mono-custom text-slate-700">{c.funnelPrice}</td>
                      <td className="px-4 py-3 font-mono-custom text-slate-700">{c.funnelMembers}</td>
                      <td className="px-4 py-3">
                        <span className={`font-mono-custom font-medium ${
                          c.funnelMRR.includes('$46') ? 'text-emerald-600' :
                          c.funnelMRR === '$0 (massive gap!)' ? 'text-red-500' :
                          c.funnelMRR === '$0' ? 'text-slate-400' :
                          'text-slate-700'
                        }`}>{c.funnelMRR}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          c.tier === 'Direct' ? 'bg-red-100 text-red-700' :
                          c.tier === 'Adjacent' ? 'bg-amber-100 text-amber-700' :
                          'bg-slate-100 text-slate-600'
                        }`}>{c.tier}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ALGORITHM & HOOK ANALYSIS
      ====================================================== */}
      <section id="algorithm" className="py-16 bg-white border-y border-slate-200">
        <div className="container">
          <SectionHeader
            eyebrow="Algorithm Intelligence"
            title="What Makes Roblox Shorts Go Viral"
            subtitle="Data-backed patterns from 35 billion Shorts views and 13.5 million clip analysis."
          />

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Hook Performance Chart */}
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Hook Type Performance</h3>
              <p className="text-sm text-slate-500 mb-6">Average 7-day views by hook type (OpusClip 2026 data, 13.5M clips analyzed)</p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hookChartData} layout="vertical" margin={{ left: 10, right: 20, top: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                    <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} width={110} />
                    <Tooltip
                      formatter={(value: number) => [`${value.toLocaleString()} avg views`, 'Performance']}
                      contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }}
                    />
                    <Bar dataKey="views" fill="#EF4444" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Algorithm Insights Grid */}
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Algorithm Key Metrics</h3>
              <p className="text-sm text-slate-500 mb-6">Critical benchmarks from VidIQ, Nate Black, and YouTube's own data</p>
              <div className="grid grid-cols-2 gap-3">
                {algorithmInsights.map((insight) => (
                  <div key={insight.metric} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="font-display font-black text-2xl text-red-600 mb-1">{insight.value}</div>
                    <div className="text-sm font-semibold text-slate-900 mb-0.5">{insight.metric}</div>
                    <div className="text-xs text-slate-500">{insight.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Posting Time Guide */}
          <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-white">
            <h3 className="font-display font-bold text-2xl mb-6 text-white">Optimal Posting Schedule</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="font-semibold text-red-400">YouTube Shorts</span>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Friday", time: "4 PM, 6 PM, 7 PM", note: "Peak day" },
                    { day: "Saturday", time: "2 PM – 5 PM", note: "Weekend peak" },
                    { day: "Thursday", time: "5 PM – 7 PM", note: "Strong performer" },
                    { day: "Mon–Wed", time: "9 AM, 5 PM", note: "Consistent" },
                  ].map(slot => (
                    <div key={slot.day} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                      <span className="text-sm font-medium text-white">{slot.day}</span>
                      <span className="text-sm text-slate-300 font-mono-custom">{slot.time}</span>
                      <span className="text-xs text-slate-400">{slot.note}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="font-semibold text-blue-400">Long-Form Videos</span>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Sunday", time: "10 AM", note: "Highest engagement of week" },
                    { day: "Tuesday", time: "9 AM", note: "Strong weekday" },
                    { day: "Monday", time: "9 AM", note: "Good start-of-week" },
                    { day: "Thursday", time: "5 PM", note: "Pre-weekend boost" },
                  ].map(slot => (
                    <div key={slot.day} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                      <span className="text-sm font-medium text-white">{slot.day}</span>
                      <span className="text-sm text-slate-300 font-mono-custom">{slot.time}</span>
                      <span className="text-xs text-slate-400">{slot.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          30-DAY CONTENT CALENDAR
      ====================================================== */}
      <section id="calendar" className="py-16 bg-[#FAFAF8]">
        <div className="container">
          <SectionHeader
            eyebrow="30-Day Content Calendar"
            title="Your Complete Roblox Shorts Content Plan"
            subtitle="Every video idea, hook, format, posting time, and CTA — for both established YouTubers and new creators."
          />

          {/* Calendar Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: <Calendar size={18} />, label: "Total Videos", value: "30", color: "text-slate-900" },
              { icon: <Zap size={18} />, label: "YouTube Shorts", value: shortsCount.toString(), color: "text-red-600" },
              { icon: <BookOpen size={18} />, label: "Long-Form Videos", value: longFormCount.toString(), color: "text-blue-600" },
              { icon: <Gamepad2 size={18} />, label: "Roblox Games Used", value: "6", color: "text-emerald-600" },
            ].map(stat => (
              <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                <div className={`flex justify-center mb-2 ${stat.color}`}>{stat.icon}</div>
                <div className={`font-display font-black text-3xl ${stat.color} mb-0.5`}>{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Pillar Distribution Chart */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4">Content Pillar Distribution</h3>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pillarDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {pillarDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => [`${value} videos`, '']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {pillarDistribution.map(p => (
                  <div key={p.name} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700">{p.name}</span>
                        <span className="text-slate-500">{p.value} videos</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${(p.value / 30) * 100}%`, backgroundColor: p.color }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6 p-4 bg-white border border-slate-200 rounded-xl">
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-slate-400" />
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(['all', 'Long-Form', 'Short'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setCalendarFilter(f)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                    calendarFilter === f
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f === 'all' ? 'All Formats' : f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {(['all', 'Both', 'Established', 'New Creator'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setAudienceFilter(f)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                    audienceFilter === f
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f === 'all' ? 'All Audiences' : f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2, 3, 4].map(w => (
                <button
                  key={w}
                  onClick={() => setWeekFilter(w)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                    weekFilter === w
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {w === 0 ? 'All Weeks' : `Week ${w}`}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-slate-500 mb-4">
            Showing <span className="font-semibold text-slate-900">{filteredCalendar.length}</span> of 30 content pieces
          </p>

          {/* Calendar Grid */}
          <div className="grid md:grid-cols-2 gap-3">
            {filteredCalendar.map((entry, index) => (
              <CalendarCard key={entry.day} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          MONETIZATION SECTION
      ====================================================== */}
      <section id="monetize" className="py-16 bg-white border-t border-slate-200">
        <div className="container">
          <SectionHeader
            eyebrow="Monetization Intelligence"
            title="6 Ways to Make Money from Roblox Shorts"
            subtitle="Ad revenue is just the beginning. Here's the full monetization stack for Roblox Shorts creators."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {monetizationStreams.map((stream) => (
              <div key={stream.name} className="border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all duration-200 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: stream.color }} />
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    stream.difficulty === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                    stream.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {stream.difficulty} Difficulty
                  </span>
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-2">{stream.name}</h3>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{stream.description}</p>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Rate</span>
                    <span className="font-mono-custom font-medium text-slate-700">{stream.rpm}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Potential</span>
                    <span className="font-mono-custom font-medium" style={{ color: stream.color }}>{stream.potential}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Roblox Games Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663653773593/7Rpn2ThTbpvaPnhsCsZpFu/roblox-games-collage-LAcocovmsEiNJ76wD9dBBf.webp"
              alt="Trending Roblox Games: Escape Tsunami, 99 Nights in Forest, Troll Tower, Kick a Lucky Block"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          AUDIENCE STRATEGY SECTION
      ====================================================== */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="container">
          <SectionHeader
            eyebrow="Audience Strategy"
            title="Two Paths, One System"
            subtitle="Whether you're an established YouTuber adding Shorts or starting from scratch, the core principles are the same."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Established YouTubers */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <Users size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Audience A</p>
                  <h3 className="font-display font-bold text-xl text-white">Established YouTubers</h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                You already have an audience. Shorts are your discovery engine to reach the Roblox community and funnel them to your existing long-form content.
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", text: "Repurpose existing long-form into 10+ Shorts per video" },
                  { step: "2", text: "Use Roblox trending games (Escape Tsunami, 99 Nights) as hooks" },
                  { step: "3", text: "Post 3 Shorts/week + 1 long-form/week" },
                  { step: "4", text: "Use Shorts to tease long-form content (3x more views)" },
                  { step: "5", text: "Add persistent link in Shorts to drive to long-form" },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      {item.step}
                    </div>
                    <p className="text-sm text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* New Creators */}
            <div className="bg-red-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-red-200 uppercase tracking-wide">Audience B</p>
                  <h3 className="font-display font-bold text-xl text-white">New Creators</h3>
                </div>
              </div>
              <p className="text-red-100 text-sm mb-6 leading-relaxed">
                You're starting from zero. Shorts are your fastest path to your first 1,000 subscribers and monetization. Focus on trending Roblox games and strong hooks.
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", text: "Pick a Roblox niche: Horror (99 Nights), Viral (Escape Tsunami), or Challenge (Troll Tower)" },
                  { step: "2", text: "Post 3 Shorts/week using trending games for first 30 days" },
                  { step: "3", text: "Use expertise/authority hooks — 5.9x more views than average" },
                  { step: "4", text: "Add captions to every Short (80.2% of viral Shorts use them)" },
                  { step: "5", text: "Hit 200 Shorts milestone — algorithm rewards consistency" },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      {item.step}
                    </div>
                    <p className="text-sm text-red-50">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CREATOR STRATEGY IMAGE
      ====================================================== */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader
                eyebrow="The Hybrid Creator Advantage"
                title="Shorts + Long-Form = Maximum Growth"
                subtitle="The data is clear: creators who post both Shorts and long-form videos grow faster and earn more."
              />
              <div className="space-y-4">
                {[
                  { stat: "3x", label: "Faster subscriber growth vs. single-format creators" },
                  { stat: "40-60%", label: "More income for hybrid creators" },
                  { stat: "2.5x", label: "Total watch time increase in first year" },
                  { stat: "200B+", label: "Daily Shorts views — the discovery engine is real" },
                ].map(item => (
                  <div key={item.stat} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="font-display font-black text-2xl text-red-600 w-20 flex-shrink-0">{item.stat}</div>
                    <p className="text-sm text-slate-700">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663653773593/7Rpn2ThTbpvaPnhsCsZpFu/creator-strategy-PBGSAphPDSi7E9J4MyQfLY.webp"
                alt="Creator Strategy Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">RS</span>
                </div>
                <span className="font-display font-bold text-white text-lg">Roblox Shorts Strategy Hub</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                A comprehensive research report for YouTube consulting businesses helping creators build, grow, and monetize Roblox Shorts channels.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="font-semibold text-white mb-3">Report Sections</p>
                <div className="space-y-2 text-slate-400">
                  <a href="#research" className="block hover:text-white transition-colors">Platform Research</a>
                  <a href="#creators" className="block hover:text-white transition-colors">Top 20 Creators</a>
                  <a href="#competitors" className="block hover:text-white transition-colors">Competitor Intel</a>
                  <a href="#algorithm" className="block hover:text-white transition-colors">Algorithm Insights</a>
                  <a href="#calendar" className="block hover:text-white transition-colors">30-Day Calendar</a>
                  <a href="#monetize" className="block hover:text-white transition-colors">Monetization</a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-3">Data Sources</p>
                <div className="space-y-2 text-slate-400 text-xs">
                  <p>Stream Hatchet (2025 Gaming Report)</p>
                  <p>OpusClip (13.5M Clips Analysis)</p>
                  <p>VidIQ (Algorithm Research)</p>
                  <p>Buffer (1.8M Video Analysis)</p>
                  <p>BloxControl (Roblox Statistics)</p>
                  <p>InfluenceFlow (2026 Creator Data)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">
              © 2026 Roblox Shorts Strategy Hub. Research compiled May 2026.
            </p>
            <p className="text-slate-500 text-xs">
              Data accurate as of May 2026. Roblox game trends subject to change.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
