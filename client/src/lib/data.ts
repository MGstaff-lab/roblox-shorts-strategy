// ============================================================
// ROBLOX SHORTS STRATEGY HUB — Data Layer
// Design: Editorial Magazine / Strategy Brief
// ============================================================

export interface Creator {
  rank: number;
  name: string;
  tier: string;
  subscribers: string;
  focus: string;
  keyInsight: string;
  outperformingPattern: string;
  channelUrl: string;
}

export interface HookType {
  type: string;
  avgViews: number;
  multiplier: string;
  description: string;
}

export interface RobloxGame {
  name: string;
  genre: string;
  trend: string;
  youtubeEngagement: string;
  contentAngle: string;
  color: string;
  gameUrl?: string;
  youtubeSearchUrl?: string;
}

export interface CalendarEntry {
  day: number;
  dayOfWeek: string;
  week: number;
  format: 'Long-Form' | 'Short';
  audience: 'Both' | 'Established' | 'New Creator';
  pillar: 'Start' | 'Grow' | 'Monetize' | 'Case Study';
  title: string;
  hook: string;
  bestTime: string;
  cta: string;
  robloxGame?: string;
  duration?: string;
  gapExploited?: string;
  hookFormula?: string;
}

export interface ShortIdea {
  ideaNumber: 1 | 2 | 3;
  title: string;
  hook: string;
  cta: string;
  bestTime: string;
  robloxGame?: string;
  audience: 'Both' | 'Established' | 'New Creator';
  pillar: 'Start' | 'Grow' | 'Monetize' | 'Case Study';
  gapExploited?: string;
  hookFormula?: string;
}

export interface ShortsDay {
  day: number;
  dayOfWeek: string;
  week: number;
  theme: string;
  ideas: ShortIdea[];
}

export interface LongFormIdea {
  ideaNumber: 1 | 2 | 3;
  title: string;
  hook: string;
  cta: string;
  bestTime: string;
  duration: string;
  robloxGame?: string;
  audience: 'Both' | 'Established' | 'New Creator';
  pillar: 'Start' | 'Grow' | 'Monetize' | 'Case Study';
  gapExploited?: string;
  hookFormula?: string;
}

export interface LongFormWeek {
  week: number;
  weekTheme: string;
  ideas: LongFormIdea[];
}

export interface MonetizationStream {
  name: string;
  rpm: string;
  potential: string;
  difficulty: string;
  description: string;
  color: string;
}

// ============================================================
// TOP 20 CREATORS
// ============================================================
export const creators: Creator[] = [
  {
    rank: 1,
    name: "Think Media (Sean Cannell)",
    tier: "Tier 1 — Major Educator",
    subscribers: "2.8M+",
    focus: "YouTube Growth & Shorts Strategy",
    keyInsight: "Hybrid content strategy drives 3x faster subscriber growth",
    outperformingPattern: "Step-by-step tutorials with numbered frameworks outperform opinion pieces by 4x",
    channelUrl: "https://www.youtube.com/@ThinkMediaTV"
  },
  {
    rank: 2,
    name: "VidIQ",
    tier: "Tier 1 — Major Educator",
    subscribers: "1.5M+",
    focus: "Data-Driven Algorithm Analysis",
    keyInsight: "Channels with 200+ Shorts see consistent view increases over time",
    outperformingPattern: "Data-backed claims with visual proof get 5.9x average views vs. baseline",
    channelUrl: "https://www.youtube.com/@vidiq"
  },
  {
    rank: 3,
    name: "Paddy Galloway",
    tier: "Tier 1 — Major Educator",
    subscribers: "600K+",
    focus: "Viral Hook Writing & Title Optimization",
    keyInsight: "\"Use Shorts as bait. Monetize with long-form.\" One 45-min video can make 10x more than 100 Shorts combined",
    outperformingPattern: "Outlier analysis videos (studying 3x+ average performers) consistently outperform",
    channelUrl: "https://www.youtube.com/@PaddyGallowayYT"
  },
  {
    rank: 4,
    name: "Nick Nimmin",
    tier: "Tier 1 — Major Educator",
    subscribers: "1M+",
    focus: "Practical YouTube Tips for Small Channels",
    keyInsight: "Consistency beats frequency — 3-5 Shorts/week outperforms daily posting",
    outperformingPattern: "\"Mistake\" and \"fix\" format videos get 4.2x more engagement than general tips",
    channelUrl: "https://www.youtube.com/@nicknimmin"
  },
  {
    rank: 5,
    name: "Roberto Blake",
    tier: "Tier 1 — Major Educator",
    subscribers: "500K+",
    focus: "YouTube Strategy & Creator Business",
    keyInsight: "Creators posting both Shorts and long-form earn 40-60% more than single-format creators",
    outperformingPattern: "Income transparency videos and \"how much I made\" content outperform by 6x",
    channelUrl: "https://www.youtube.com/@RobertoBlake"
  },
  {
    rank: 6,
    name: "Nate Black",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "200K+",
    focus: "Shorts Algorithm Research",
    keyInsight: "Studied 35 billion Shorts views: 13s and 60s lengths perform best; first 3 seconds are critical",
    outperformingPattern: "Original showcases and sensory experiences (ASMR) consistently attract more views",
    channelUrl: "https://www.youtube.com/@NateBlackYT"
  },
  {
    rank: 7,
    name: "Hayden Hillier-Smith",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "300K+",
    focus: "Editing & Retention Optimization",
    keyInsight: "80.2% of viral Shorts use captions — it's non-negotiable",
    outperformingPattern: "Before/after editing transformations outperform standard tutorials by 3.5x",
    channelUrl: "https://www.youtube.com/@HaydenHillierSmith"
  },
  {
    rank: 8,
    name: "Channel Makers",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "400K+",
    focus: "YouTube Growth Systems",
    keyInsight: "The 3-pillar content system (Education + Entertainment + Inspiration) prevents burnout",
    outperformingPattern: "Content system reveals and \"never run out of ideas\" formats drive highest saves",
    channelUrl: "https://www.youtube.com/@ChannelMakers"
  },
  {
    rank: 9,
    name: "Cathrin Manning",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "350K+",
    focus: "YouTube Growth for Creators",
    keyInsight: "Thumbnail strategy applies even to Shorts — they appear in regular YouTube feed",
    outperformingPattern: "Personal journey + data combination outperforms pure tutorial content",
    channelUrl: "https://www.youtube.com/@CathrinManning"
  },
  {
    rank: 10,
    name: "Jake Thomas (Creator Hooks)",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "150K+",
    focus: "Hook Writing & Title Formulas",
    keyInsight: "Expertise/Authority hooks get 5.9x more views than average — highest performing hook type",
    outperformingPattern: "Hook teardown videos and \"why this went viral\" analysis consistently outperform",
    channelUrl: "https://www.youtube.com/@CreatorHooks"
  },
  {
    rank: 11,
    name: "Colin and Samir",
    tier: "Tier 3 — Creator Economy",
    subscribers: "1.2M+",
    focus: "Creator Economy Analysis",
    keyInsight: "Hybrid creators (Shorts + long-form) grow subscriber base 3x faster",
    outperformingPattern: "Creator interview/case study format outperforms solo commentary by 2.8x",
    channelUrl: "https://www.youtube.com/@ColinandSamir"
  },
  {
    rank: 12,
    name: "Shelby Church",
    tier: "Tier 3 — Creator Economy",
    subscribers: "600K+",
    focus: "YouTube Monetization Transparency",
    keyInsight: "Gaming Shorts RPM is $0.02-$0.08 — real money comes from brand deals and long-form traffic",
    outperformingPattern: "Exact income reveal videos get 8x average views — transparency drives massive engagement",
    channelUrl: "https://www.youtube.com/@ShelbyChurch"
  },
  {
    rank: 13,
    name: "Ryan Hildreth",
    tier: "Tier 3 — Creator Economy",
    subscribers: "300K+",
    focus: "YouTube Monetization Strategies",
    keyInsight: "76% of top Shorts creators earn more from brand deals than ad revenue",
    outperformingPattern: "Step-by-step monetization roadmaps with specific numbers outperform vague advice",
    channelUrl: "https://www.youtube.com/@RyanHildreth"
  },
  {
    rank: 14,
    name: "Robert Benjamin",
    tier: "Tier 3 — Creator Economy",
    subscribers: "250K+",
    focus: "YouTube Growth Tactics",
    keyInsight: "The explore/exploit algorithm: seed audience engagement in first 1,000 views determines fate",
    outperformingPattern: "Algorithm explanation videos with visual diagrams outperform text-heavy content",
    channelUrl: "https://www.youtube.com/@RobertBenjaminYT"
  },
  {
    rank: 15,
    name: "Derral Eves",
    tier: "Tier 3 — Creator Economy",
    subscribers: "800K+",
    focus: "YouTube Strategy & Algorithm Expert",
    keyInsight: "Engaged views (not just views) are the only metric that matters for YPP and revenue",
    outperformingPattern: "\"The YouTube Formula\" framework videos drive highest long-term watch time",
    channelUrl: "https://www.youtube.com/@DerralEves"
  },
  {
    rank: 16,
    name: "CaylusBlox",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "10M+",
    focus: "Roblox Content Creation",
    keyInsight: "Gained 14M new followers in 2025 by combining Shorts with live streaming on Roblox content",
    outperformingPattern: "Reaction to unexpected Roblox moments gets 5x more engagement than planned content",
    channelUrl: "https://www.youtube.com/@CaylusBlox"
  },
  {
    rank: 17,
    name: "KreekCraft",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "8M+",
    focus: "Roblox Gaming Content",
    keyInsight: "Trending game ranking videos drive massive search traffic — evergreen + trending combination",
    outperformingPattern: "\"Ranking every Roblox game\" format consistently outperforms single-game content",
    channelUrl: "https://www.youtube.com/@KreekCraft"
  },
  {
    rank: 18,
    name: "Rirusha Roblox",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "500K+",
    focus: "Roblox Gameplay & Shorts",
    keyInsight: "99 Nights in the Forest content drives 759K+ views — survival horror is peak Shorts content",
    outperformingPattern: "Survival challenge format with countdown creates natural replay loop",
    channelUrl: "https://www.youtube.com/@RirushaRoblox"
  },
  {
    rank: 19,
    name: "TubeBuddy",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "400K+",
    focus: "YouTube Optimization Education",
    keyInsight: "Metadata optimization (title, description, hashtags) still matters for Shorts categorization",
    outperformingPattern: "Tool tutorial + strategy combination outperforms pure strategy content",
    channelUrl: "https://www.youtube.com/@TubeBuddy"
  },
  {
    rank: 20,
    name: "Faceless Roblox Channels",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "100K-1M",
    focus: "AI-Powered Roblox Shorts",
    keyInsight: "Faceless Roblox rant/story channels are the fastest-growing format in 2026",
    outperformingPattern: "AI-generated Roblox commentary with gameplay overlay drives 10x more views than face-cam",
    channelUrl: "https://www.youtube.com/results?search_query=faceless+roblox+shorts+channel"
  }
];

// ============================================================
// HOOK PERFORMANCE DATA
// ============================================================
export const hookData: HookType[] = [
  { type: "Expertise / Authority", avgViews: 6706, multiplier: "5.9x", description: "\"I studied 35 billion Shorts and found...\"" },
  { type: "Viewer Challenge & Filter", avgViews: 4739, multiplier: "4.2x", description: "\"Only 1% of Roblox players know this...\"" },
  { type: "Process Explainer", avgViews: 2833, multiplier: "2.5x", description: "\"Here's exactly how to beat 99 Nights in 3 steps...\"" },
  { type: "Intriguing Statement", avgViews: 2049, multiplier: "1.8x", description: "\"This Roblox game is secretly teaching kids to code...\"" },
  { type: "Audio Hook", avgViews: 1881, multiplier: "1.7x", description: "Unexpected sound/reaction in first second" },
  { type: "Product / Service Intro", avgViews: 1830, multiplier: "1.6x", description: "\"This free tool doubled my Roblox Shorts views...\"" },
];

// ============================================================
// ROBLOX TRENDING GAMES
// ============================================================
export const robloxGames: RobloxGame[] = [
  {
    name: "Escape Tsunami For Brainrots",
    genre: "Endless Runner / Collection",
    trend: "#1 Roblox Game Feb 2026",
    youtubeEngagement: "Extremely High",
    contentAngle: "Speed runs, fail compilations, \"I survived\" challenges",
    color: "#3B82F6",
    gameUrl: "https://www.roblox.com/games/16832052682/Escape-Tsunami-for-Brainrots",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=escape+tsunami+roblox+shorts"
  },
  {
    name: "99 Nights in the Forest",
    genre: "Survival Horror",
    trend: "Consistently Trending",
    youtubeEngagement: "Very High",
    contentAngle: "Night-by-night survival, horror reaction, strategy guides",
    color: "#10B981",
    gameUrl: "https://www.roblox.com/games/17017769292/99-Nights-in-the-Forest",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=99+nights+in+the+forest+roblox+shorts"
  },
  {
    name: "Troll Tower",
    genre: "Obby / Troll Mechanics",
    trend: "Viral Shorts Content",
    youtubeEngagement: "High",
    contentAngle: "Troll reactions, clutch moments, \"destroying trolls\" format",
    color: "#F59E0B",
    gameUrl: "https://www.roblox.com/games/8562822414/Troll-Tower",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=troll+tower+roblox+shorts"
  },
  {
    name: "Kick a Lucky Block",
    genre: "Casual / Viral Trend",
    trend: "Surging May 2026",
    youtubeEngagement: "Very High",
    contentAngle: "Unboxing reveals, rare item reactions, challenge format",
    color: "#EF4444",
    gameUrl: "https://www.roblox.com/games/6253846/Kick-a-Lucky-Block",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=kick+a+lucky+block+roblox+shorts"
  },
  {
    name: "Steal a Brainrot",
    genre: "Comedy PvP",
    trend: "#2 Roblox Game Feb 2026",
    youtubeEngagement: "High",
    contentAngle: "Meme content, PvP highlights, funny moments",
    color: "#8B5CF6",
    gameUrl: "https://www.roblox.com/games/17017769292/Steal-a-Brainrot",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=steal+a+brainrot+roblox+shorts"
  },
  {
    name: "Blox Fruits",
    genre: "Action RPG / Anime",
    trend: "Long-Running Giant",
    youtubeEngagement: "Consistent",
    contentAngle: "Fruit tier lists, progression guides, PvP highlights",
    color: "#EC4899",
    gameUrl: "https://www.roblox.com/games/2753915549/Blox-Fruits",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=blox+fruits+roblox+shorts"
  }
];

// ============================================================
// MONETIZATION STREAMS
// ============================================================
export const monetizationStreams: MonetizationStream[] = [
  {
    name: "YouTube Ad Revenue (Shorts)",
    rpm: "$0.02–$0.08 per 1K views",
    potential: "$30–$70 per 1M views",
    difficulty: "Low",
    description: "Direct ad revenue from Shorts — lowest RPM of any format. Gaming niche is especially low.",
    color: "#EF4444"
  },
  {
    name: "Long-Form Traffic (Shorts → Long-Form)",
    rpm: "$2–$15 per 1K views",
    potential: "$2,000–$15,000 per 1M views",
    difficulty: "Medium",
    description: "Use Shorts as discovery engine to drive viewers to long-form videos. 50-200x higher RPM.",
    color: "#3B82F6"
  },
  {
    name: "Brand Deals & Sponsorships",
    rpm: "$500–$5,000 per deal",
    potential: "$1,000–$10,000/month",
    difficulty: "Medium",
    description: "76% of top Shorts creators earn more from brand deals than ad revenue. Roblox-adjacent brands pay well.",
    color: "#10B981"
  },
  {
    name: "Affiliate Marketing",
    rpm: "5–15% commission",
    potential: "$200–$2,000/month",
    difficulty: "Low",
    description: "Gaming peripherals, Roblox gift cards, editing tools. Mention in Shorts, link in long-form.",
    color: "#F59E0B"
  },
  {
    name: "Channel Memberships",
    rpm: "$2.99–$9.99/member/month",
    potential: "$500–$5,000/month",
    difficulty: "High",
    description: "Convert Shorts viewers to paying members with exclusive Roblox tips and early access.",
    color: "#8B5CF6"
  },
  {
    name: "Consulting & Coaching",
    rpm: "$500–$5,000 per client",
    potential: "$2,000–$20,000/month",
    difficulty: "High",
    description: "Use Shorts to demonstrate expertise, sell 1:1 consulting or group coaching programs.",
    color: "#EC4899"
  }
];

// ============================================================
// 30-DAY CONTENT CALENDAR
// ============================================================
export const calendarData: CalendarEntry[] = [
  // ─────────────────────────────────────────────────────────────
  // WEEK 1: POSITIONING & DIFFERENTIATION
  // Gap exploited: Established YouTuber angle (Critical gap #2)
  // Gap exploited: Shorts ABOUT making Shorts (Critical gap #1)
  // Hook formula: Income Proof + Challenge/Copy
  // ─────────────────────────────────────────────────────────────
  {
    day: 1, dayOfWeek: "Mon", week: 1, format: "Long-Form", audience: "Both", pillar: "Start",
    title: "The Roblox Shorts Channel That Made Me $131,397 — And What Every Competitor Got Wrong",
    hook: "I studied every Roblox Shorts educator on YouTube — Ventura, Ryvahn, moneyboymax, Chris Barrera — and found 8 things NONE of them teach. Here's the full breakdown",
    bestTime: "Monday 9 AM", duration: "15-20 min",
    cta: "Comment 'GAPS' and I'll send you the full competitor gap analysis PDF. Subscribe — I post every Mon & Thu",
    robloxGame: "Escape Tsunami, 99 Nights in Forest",
    gapExploited: "Established YouTuber Angle + Competitor Gap Analysis",
    hookFormula: "Specific Dollar Amount Hook"
  },
  {
    day: 2, dayOfWeek: "Tue", week: 1, format: "Short", audience: "Both", pillar: "Start",
    title: "3 Hooks That Made Roblox Shorts Go Viral (Proven by 255K Views)",
    hook: "These 3 hook formulas are responsible for every viral Roblox Short in 2026 — and nobody is teaching them in Short format",
    bestTime: "Tuesday 4 PM", duration: "45-60 sec",
    cta: "Save this Short. Watch my full hook breakdown — link in bio",
    robloxGame: "Escape Tsunami, Troll Tower",
    gapExploited: "Shorts ABOUT Making Shorts",
    hookFormula: "Time Efficiency Hook (Syrax 255K model)"
  },
  {
    day: 3, dayOfWeek: "Wed", week: 1, format: "Short", audience: "Established", pillar: "Start",
    title: "You Already Have a YouTube Channel — Here's Why That's Your Unfair Advantage in Roblox Shorts",
    hook: "Every Roblox Shorts educator targets beginners. If you already have subscribers, you're sitting on a goldmine nobody is talking about",
    bestTime: "Wednesday 5 PM", duration: "45-60 sec",
    cta: "Watch my full video on the Established Creator Shorts Strategy — link in bio",
    robloxGame: "General Roblox",
    gapExploited: "The Established YouTuber Angle (Zero Competition)",
    hookFormula: "Anti-Hype / Controversy Hook"
  },
  {
    day: 4, dayOfWeek: "Thu", week: 1, format: "Long-Form", audience: "Both", pillar: "Case Study",
    title: "Roblox Game Trend Report: The 3 Games Driving 60% of Viral Shorts Right Now (May 2026)",
    hook: "Everyone says 'pick a trending Roblox game' — but nobody breaks down WHY Escape Tsunami, 99 Nights, and Kick a Lucky Block are viral right now and how long the window lasts",
    bestTime: "Thursday 5 PM", duration: "12-18 min",
    cta: "Subscribe for weekly Roblox game trend reports — I'll tell you which game to make Shorts about BEFORE it peaks",
    robloxGame: "Escape Tsunami, 99 Nights, Kick a Lucky Block",
    gapExploited: "Game-Specific Trend Analysis (Nobody Does This)",
    hookFormula: "Income Proof Hook + Data Authority"
  },
  {
    day: 5, dayOfWeek: "Fri", week: 1, format: "Short", audience: "Both", pillar: "Start",
    title: "How to Escape 0-View Jail on Roblox Shorts (The Fix Nobody Talks About)",
    hook: "Ryvahn's 141K-view video on escaping view jail works — but there's a Roblox-specific version of this problem that's 3x easier to fix",
    bestTime: "Friday 4 PM", duration: "30-45 sec",
    cta: "Comment 'JAIL' and I'll send you the full escape-view-jail checklist for Roblox Shorts",
    gapExploited: "Shorts ABOUT Making Shorts",
    hookFormula: "Pain Point Escape Hook (Ryvahn 141K model)"
  },
  {
    day: 6, dayOfWeek: "Sat", week: 1, format: "Short", audience: "New Creator", pillar: "Start",
    title: "The BORING Roblox Shorts Channel Formula That Actually Makes Money",
    hook: "The boring, faceless Roblox Shorts channels are quietly making $5K-$10K/month while flashy creators burn out. Here's the formula",
    bestTime: "Saturday 2 PM", duration: "45-60 sec",
    cta: "Follow for the full faceless Roblox Shorts system — dropping this week",
    robloxGame: "99 Nights in Forest, Escape Tsunami",
    gapExploited: "Shorts ABOUT Making Shorts",
    hookFormula: "Anti-Hype / Controversy Hook (Romayroh 42K model)"
  },
  {
    day: 7, dayOfWeek: "Sun", week: 1, format: "Long-Form", audience: "Both", pillar: "Case Study",
    title: "I Went Pro on Roblox Shorts in 30 Days — Here's Every Step, Every Mistake, Every Number",
    hook: "Fabiojit's 'I Went Pro in 10 Days' video got 1.6M views on Fortnite. I'm doing the same thing for Roblox Shorts — and documenting everything",
    bestTime: "Sunday 10 AM", duration: "18-25 min",
    cta: "Subscribe to follow the full 30-day challenge — I post every Mon & Thu. Drop your starting subscriber count below",
    robloxGame: "Escape Tsunami, Troll Tower, 99 Nights",
    gapExploited: "Ongoing Case Study Series (Fabiojit 1.6M model, Roblox version)",
    hookFormula: "Challenge / Copy Hook"
  },

  // ─────────────────────────────────────────────────────────────
  // WEEK 2: ALGORITHM, HOOKS & GAME-SPECIFIC TRENDS
  // Gap exploited: Game-specific trend analysis (High gap #3)
  // Gap exploited: Shorts ABOUT making Shorts (Critical gap #1)
  // Hook formula: Time Efficiency + Pain Point Escape
  // ─────────────────────────────────────────────────────────────
  {
    day: 8, dayOfWeek: "Mon", week: 2, format: "Short", audience: "Both", pillar: "Grow",
    title: "How to Make a Viral Roblox Short in Under 5 Minutes (AI Method)",
    hook: "Syrax made 255K views with this exact workflow. I'm showing you the Roblox-specific version in 60 seconds",
    bestTime: "Monday 9 AM", duration: "45-60 sec",
    cta: "Watch the full AI workflow breakdown — link in bio. What game are you testing this on? Comment below",
    robloxGame: "Escape Tsunami, Kick a Lucky Block",
    gapExploited: "Shorts ABOUT Making Shorts",
    hookFormula: "Time Efficiency Hook (Syrax 255K model)"
  },
  {
    day: 9, dayOfWeek: "Tue", week: 2, format: "Long-Form", audience: "Both", pillar: "Grow",
    title: "The 6 Hook Formulas Behind Every Viral Roblox Shorts Video (With Real View Counts)",
    hook: "I analyzed the top 9 Roblox Shorts educators — Ventura (124K), Ryvahn (141K), Syrax (255K), Fabiojit (1.6M) — and found 6 hook formulas responsible for every outlier video",
    bestTime: "Tuesday 9 AM", duration: "15-20 min",
    cta: "Download the free Hook Formula Swipe File — 6 templates you can use today. Link in description",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block",
    gapExploited: "Competitor Gap Analysis as Content",
    hookFormula: "Income Proof Hook + Data Authority"
  },
  {
    day: 10, dayOfWeek: "Wed", week: 2, format: "Short", audience: "Established", pillar: "Grow",
    title: "One Long-Form Roblox Video = 10 Shorts. Here's the Exact Clip-Finding System",
    hook: "If you already have long-form Roblox videos, you're sitting on a Shorts library you haven't touched yet. Here's how to find the clips in under 10 minutes",
    bestTime: "Wednesday 5 PM", duration: "30-45 sec",
    cta: "Try this on your last video and comment how many clips you found. I'll reply to every comment",
    gapExploited: "The Established YouTuber Angle (Zero Competition)",
    hookFormula: "Time Efficiency Hook"
  },
  {
    day: 11, dayOfWeek: "Thu", week: 2, format: "Long-Form", audience: "Both", pillar: "Case Study",
    title: "Why 99 Nights in the Forest Is the Best Roblox Game for Shorts Right Now (Data Breakdown)",
    hook: "99 Nights in the Forest is generating 759K+ views per Short for some creators. I broke down exactly why this game works for Shorts and how to make content before the trend dies",
    bestTime: "Thursday 5 PM", duration: "15-20 min",
    cta: "Subscribe for weekly Roblox game trend reports — I'll tell you which game to cover next week before it peaks",
    robloxGame: "99 Nights in the Forest",
    gapExploited: "Game-Specific Trend Analysis (Nobody Does This)",
    hookFormula: "Income Proof Hook + Data Authority"
  },
  {
    day: 12, dayOfWeek: "Fri", week: 2, format: "Short", audience: "Both", pillar: "Grow",
    title: "The Income Proof Thumbnail Formula That Gets 124K Views on Roblox Shorts",
    hook: "Ventura's $10K/month screenshot thumbnail is the highest-converting format in Roblox Shorts education. Here's how to use the same psychology for your gaming channel",
    bestTime: "Friday 6 PM", duration: "45-60 sec",
    cta: "Save this — and watch my full thumbnail strategy breakdown (link in bio)",
    gapExploited: "Shorts ABOUT Making Shorts",
    hookFormula: "Income Proof Hook (Ventura 124K model)"
  },
  {
    day: 13, dayOfWeek: "Sat", week: 2, format: "Short", audience: "New Creator", pillar: "Grow",
    title: "Escape Tsunami Shorts Are Blowing Up — Here's Exactly How to Make One",
    hook: "Escape Tsunami was the #1 Roblox game in February 2026. The Shorts window is still open — here's the exact format that's going viral right now",
    bestTime: "Saturday 2 PM", duration: "30-45 sec",
    cta: "Make this Short today and tag me — I'll feature the best ones in my next video",
    robloxGame: "Escape Tsunami",
    gapExploited: "Game-Specific Trend Analysis",
    hookFormula: "Challenge / Copy Hook"
  },
  {
    day: 14, dayOfWeek: "Sun", week: 2, format: "Long-Form", audience: "Both", pillar: "Grow",
    title: "The Roblox Shorts Content System: How to Never Run Out of Ideas (Using the Competitor Gap Method)",
    hook: "I mapped every content gap the top 9 Roblox Shorts educators are missing — and turned each gap into a repeatable content format you can use every week",
    bestTime: "Sunday 10 AM", duration: "20-25 min",
    cta: "Download the free Roblox Shorts Content System template — 90 days of ideas pre-mapped. Link in description",
    robloxGame: "Escape Tsunami, Troll Tower, Kick a Lucky Block",
    gapExploited: "Consistency & Systems Content",
    hookFormula: "Competitor Gap Analysis as Content"
  },

  // ─────────────────────────────────────────────────────────────
  // WEEK 3: CONSISTENCY SYSTEMS & ESTABLISHED CREATOR STRATEGY
  // Gap exploited: Consistency & systems (High gap #5)
  // Gap exploited: Established YouTuber angle (Critical gap #2)
  // Hook formula: Anti-Hype / Controversy + Challenge/Copy
  // ─────────────────────────────────────────────────────────────
  {
    day: 15, dayOfWeek: "Mon", week: 3, format: "Short", audience: "Both", pillar: "Grow",
    title: "Why 90% of Roblox Shorts Creators Quit in Month 2 (And the System That Prevents It)",
    hook: "The #1 reason Roblox Shorts channels fail isn't bad content — it's no system. Here's the 3-part consistency framework that keeps you posting when motivation dies",
    bestTime: "Monday 9 AM", duration: "45-60 sec",
    cta: "Watch my full Consistency System video — the 30-day batch recording framework is in there. Link in bio",
    gapExploited: "Consistency & Systems Content (Nobody Teaches This)",
    hookFormula: "Anti-Hype / Controversy Hook"
  },
  {
    day: 16, dayOfWeek: "Tue", week: 3, format: "Long-Form", audience: "Established", pillar: "Grow",
    title: "The Established Creator's Guide to Adding Roblox Shorts Without Losing Your Existing Audience",
    hook: "If you already have 10K-500K subscribers, adding Roblox Shorts is completely different from starting from scratch — and every Shorts educator is giving you the wrong advice",
    bestTime: "Tuesday 9 AM", duration: "18-25 min",
    cta: "Comment your current subscriber count — I'll tell you the exact Shorts strategy for your channel size. New video every Tue & Thu",
    robloxGame: "General Roblox",
    gapExploited: "The Established YouTuber Angle (Zero Direct Competition)",
    hookFormula: "Anti-Hype / Controversy Hook"
  },
  {
    day: 17, dayOfWeek: "Wed", week: 3, format: "Short", audience: "Both", pillar: "Grow",
    title: "Batch Record 30 Roblox Shorts in One Day — Here's the Exact System",
    hook: "I batch recorded 30 Roblox Shorts in a single Saturday. Here's the exact game rotation, editing workflow, and upload schedule I used",
    bestTime: "Wednesday 5 PM", duration: "45-60 sec",
    cta: "Screenshot this system. Watch the full batch recording tutorial — link in bio",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block",
    gapExploited: "Consistency & Systems Content",
    hookFormula: "Time Efficiency Hook"
  },
  {
    day: 18, dayOfWeek: "Thu", week: 3, format: "Long-Form", audience: "Both", pillar: "Grow",
    title: "Troll Tower & Kick a Lucky Block: The Underrated Roblox Shorts Goldmine (Full Strategy)",
    hook: "While everyone is fighting over Escape Tsunami content, Troll Tower and Kick a Lucky Block are wide open — here's the exact content angles that are going viral right now",
    bestTime: "Thursday 5 PM", duration: "15-20 min",
    cta: "Subscribe for weekly Roblox game trend reports — I'll tell you which game to pivot to before the next wave",
    robloxGame: "Troll Tower, Kick a Lucky Block",
    gapExploited: "Game-Specific Trend Analysis",
    hookFormula: "Anti-Hype / Controversy Hook"
  },
  {
    day: 19, dayOfWeek: "Fri", week: 3, format: "Short", audience: "New Creator", pillar: "Grow",
    title: "The 30-Day Roblox Shorts Challenge — Day 1 Results",
    hook: "I'm documenting a Roblox Shorts channel from 0 subscribers — here's what happened in the first 7 days with real analytics",
    bestTime: "Friday 4 PM", duration: "45-60 sec",
    cta: "Follow to watch the full 30-day challenge unfold. Drop your starting sub count — let's do this together",
    robloxGame: "Escape Tsunami",
    gapExploited: "Ongoing Case Study Series (Fabiojit 1.6M model)",
    hookFormula: "Challenge / Copy Hook"
  },
  {
    day: 20, dayOfWeek: "Sat", week: 3, format: "Short", audience: "Both", pillar: "Grow",
    title: "How moneyboymax Got 189K Views Ranking Roblox Shorts — And How to Copy the Format",
    hook: "moneyboymax pioneered the 'ranking Shorts' angle and got 189K views. Nobody else is doing this for Roblox — here's how to use it",
    bestTime: "Saturday 2 PM", duration: "30-45 sec",
    cta: "Save this format. Try it with your next Roblox Short and comment your results",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower",
    gapExploited: "Shorts ABOUT Making Shorts",
    hookFormula: "Challenge / Copy Hook (moneyboymax 189K model)"
  },
  {
    day: 21, dayOfWeek: "Sun", week: 3, format: "Long-Form", audience: "Both", pillar: "Case Study",
    title: "The 30-Day Roblox Shorts Challenge: Week 3 Update (Real Analytics Revealed)",
    hook: "Week 3 of the 30-day Roblox Shorts challenge — here are the real view counts, subscriber gains, and the one game that changed everything",
    bestTime: "Sunday 10 AM", duration: "18-25 min",
    cta: "Subscribe to follow the full 30-day challenge. Comment your own Week 3 numbers — let's compare",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block",
    gapExploited: "Ongoing Case Study Series",
    hookFormula: "Income Proof Hook + Challenge / Copy"
  },

  // ─────────────────────────────────────────────────────────────
  // WEEK 4: MONETIZATION BEYOND ADSENSE
  // Gap exploited: Monetization beyond AdSense (High gap #4)
  // Gap exploited: No dominant community (Critical gap #7)
  // Hook formula: Specific Dollar Amount + Anti-Hype
  // ─────────────────────────────────────────────────────────────
  {
    day: 22, dayOfWeek: "Mon", week: 4, format: "Short", audience: "Both", pillar: "Monetize",
    title: "Roblox Shorts Paid Me $47 for 1 Million Views — Here's How I Made $3,000 From the Same Views",
    hook: "Gaming Shorts RPM is $0.02-$0.08. Every competitor teaches AdSense. Here's the monetization stack they're all missing",
    bestTime: "Monday 9 AM", duration: "45-60 sec",
    cta: "Watch the full 5-stream monetization breakdown — link in bio. Which stream are you most interested in?",
    gapExploited: "Monetization Beyond AdSense (Nobody Teaches This)",
    hookFormula: "Specific Dollar Amount Hook"
  },
  {
    day: 23, dayOfWeek: "Tue", week: 4, format: "Long-Form", audience: "Both", pillar: "Monetize",
    title: "The Full Roblox Shorts Monetization Stack: 6 Income Streams Nobody Is Teaching",
    hook: "Romayroh makes $46,800/month from a Skool community. Ventura has a Whop program. Fabiojit has 800 Discord members. None of them teach the full monetization stack — I'm doing it here",
    bestTime: "Tuesday 9 AM", duration: "20-28 min",
    cta: "Comment which monetization stream you want a dedicated video on — I'll build the series around your answers",
    robloxGame: "General Roblox",
    gapExploited: "Monetization Beyond AdSense + Competitor Funnel Analysis",
    hookFormula: "Specific Dollar Amount Hook + Anti-Hype"
  },
  {
    day: 24, dayOfWeek: "Wed", week: 4, format: "Short", audience: "Established", pillar: "Monetize",
    title: "How Roblox Shorts Drove 10x More Views to My Long-Form Videos (Real Data)",
    hook: "Adding Roblox Shorts to an existing channel doesn't just grow Shorts — it compounds your long-form revenue. Here's the exact mechanism",
    bestTime: "Wednesday 5 PM", duration: "30-45 sec",
    cta: "Watch my full Established Creator Shorts Strategy video — link in bio",
    robloxGame: "Escape Tsunami, 99 Nights",
    gapExploited: "The Established YouTuber Angle",
    hookFormula: "Income Proof Hook"
  },
  {
    day: 25, dayOfWeek: "Thu", week: 4, format: "Long-Form", audience: "Both", pillar: "Monetize",
    title: "How to Build a Roblox Shorts Community That Makes $46,800/Month (The Romayroh Model, Roblox Edition)",
    hook: "Romayroh has 1,300 members at $36/month = $46,800 MRR. James Rasp's MotionFarm has 47 members. There's NO dominant Roblox Shorts community — here's how to build the one that wins",
    bestTime: "Thursday 5 PM", duration: "18-25 min",
    cta: "If you want early access to a Roblox Shorts community built around this exact model, comment 'COMMUNITY' — I'm building it now",
    robloxGame: "General Roblox",
    gapExploited: "No Dominant Roblox Shorts Community (Critical Gap)",
    hookFormula: "Specific Dollar Amount Hook"
  },
  // ─────────────────────────────────────────────────────────────
  // Gap exploited: Monetization beyond AdSense (continued)
  // Gap exploited: Premium community for established creators (#8)
  // ─────────────────────────────────────────────────────────────
  {
    day: 26, dayOfWeek: "Fri", week: 4, format: "Short", audience: "New Creator", pillar: "Monetize",
    title: "The Fastest Path to YouTube Monetization with Roblox Shorts (Real Timeline)",
    hook: "500 subs + 3K watch hours OR 3M Shorts views. Here's the fastest Roblox content path to YPP — and why Escape Tsunami is your best bet right now",
    bestTime: "Friday 4 PM", duration: "45-60 sec",
    cta: "Comment your current subscriber count — I'll tell you exactly which Roblox game to focus on to hit monetization fastest",
    robloxGame: "Escape Tsunami, Kick a Lucky Block",
    gapExploited: "Monetization Beyond AdSense",
    hookFormula: "Pain Point Escape Hook"
  },
  {
    day: 27, dayOfWeek: "Sat", week: 4, format: "Short", audience: "Both", pillar: "Monetize",
    title: "How Wealthify AI Makes Passive Income From Roblox Shorts Without a Community or Brand Deals",
    hook: "Wealthify AI built a passive income stream from Roblox Shorts using tool affiliates — no community, no brand deals, no high-ticket offers. Here's the exact model",
    bestTime: "Saturday 2 PM", duration: "30-45 sec",
    cta: "Save this — the full affiliate stack breakdown is in my bio link",
    robloxGame: "General Roblox",
    gapExploited: "Monetization Beyond AdSense",
    hookFormula: "Anti-Hype / Controversy Hook (Wealthify AI model)"
  },
  {
    day: 28, dayOfWeek: "Sun", week: 4, format: "Long-Form", audience: "Both", pillar: "Monetize",
    title: "The Roblox Shorts Monetization Masterclass: Every Income Stream, Every Competitor's Model, Every Gap",
    hook: "I mapped every monetization model in the Roblox Shorts education space — Romayroh ($46,800/mo Skool), Ventura (Whop), Chris Barrera (high-ticket coaching), Fabiojit (free Discord) — and built the model that beats them all",
    bestTime: "Sunday 10 AM", duration: "28-35 min",
    cta: "Comment 'MONETIZE' to get early access to the Roblox Shorts community I'm building. Romayroh proved the model works — I'm building the Roblox-specific version",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block",
    gapExploited: "No Dominant Roblox Shorts Community + Monetization Stack",
    hookFormula: "Specific Dollar Amount Hook"
  },

  // ─────────────────────────────────────────────────────────────
  // DAYS 29-30: CASE STUDY SERIES FINALE & COMMUNITY LAUNCH
  // Gap exploited: Ongoing case study series (High gap #6)
  // Gap exploited: No dominant Roblox Shorts community (Critical #7)
  // Hook formula: Challenge/Copy + Income Proof
  // ─────────────────────────────────────────────────────────────
  {
    day: 29, dayOfWeek: "Mon", week: 5, format: "Short", audience: "Both", pillar: "Case Study",
    title: "30-Day Roblox Shorts Challenge: Final Results (Real Subscriber & View Count Revealed)",
    hook: "Day 30 of the Roblox Shorts challenge. Here are the real numbers — subscribers, views, revenue — and the one thing I'd do differently if I started over",
    bestTime: "Monday 9 AM", duration: "45-60 sec",
    cta: "Watch the full 30-day breakdown video — link in bio. Drop YOUR 30-day numbers in the comments",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block",
    gapExploited: "Ongoing Case Study Series",
    hookFormula: "Income Proof Hook + Challenge / Copy"
  },
  {
    day: 30, dayOfWeek: "Tue", week: 5, format: "Long-Form", audience: "Both", pillar: "Case Study",
    title: "30 Days of Roblox Shorts: The Complete Case Study (Every Number, Every Mistake, What's Next)",
    hook: "Fabiojit's 'I Went Pro in 10 Days' got 1.6M views. Money Groot's 'How to Grow Your Roblox Channel FAST' got 506K views with ZERO monetized funnel. I did both — and I'm showing you everything",
    bestTime: "Tuesday 9 AM", duration: "25-35 min",
    cta: "If this 30-day series helped you, share it with one creator. And if you want to build your Roblox Shorts channel with a community behind you — comment 'IN' and I'll send you the details on what I'm building next",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block",
    gapExploited: "Ongoing Case Study Series + No Dominant Community",
    hookFormula: "Challenge / Copy Hook + Specific Dollar Amount"
  }
];

// ============================================================
// ALGORITHM INSIGHTS
// ============================================================
export const algorithmInsights = [
  { metric: "Optimal Short Length", value: "13s or 60s", detail: "Nate Black's 35B view study" },
  { metric: "Shorts Before Consistent Views", value: "200+", detail: "Channels see steady growth after 200 Shorts" },
  { metric: "Critical First Seconds", value: "3 seconds", detail: "First 3 seconds determine swipe-away rate" },
  { metric: "Viral Shorts With Captions", value: "80.2%", detail: "Non-negotiable for viral potential" },
  { metric: "Seed Audience Size", value: "~1,000 views", detail: "Initial test audience before broader push" },
  { metric: "Hybrid Growth Multiplier", value: "3x faster", detail: "Shorts + Long-Form vs. single format" },
];

// ============================================================
// PLATFORM STATISTICS
// ============================================================
export const platformStats = [
  { label: "Roblox Hours Watched (2025)", value: "425M", change: "+294% YoY", color: "#EF4444" },
  { label: "Gaming Shorts Posted (2025)", value: "67.2M", change: "+48% Q1 growth", color: "#3B82F6" },
  { label: "YouTube Shorts Daily Views", value: "200B+", change: "Doubled from 70B", color: "#10B981" },
  { label: "YouTube Gaming Market Share", value: "24%", change: "New all-time high", color: "#F59E0B" },
];

// ============================================================
// COMPETITOR INTELLIGENCE DATA
// ============================================================

export interface Competitor {
  id: string;
  name: string;
  handle: string;
  tier: 'Direct' | 'Adjacent' | 'Upstream';
  subscribers: string;
  channelAge: string;
  topOutlierVideo: string;
  topOutlierVideoUrl?: string;
  topOutlierViews: number;
  avgViews: number;
  outlierMultiplier: number;
  hookFormula: string;
  thumbnailStrategy: string;
  contentFormula: string;
  cta: string;
  channelUrl: string;
  funnelPlatform: string;
  funnelUrl?: string;
  funnelPrice: string;
  funnelMembers: string;
  funnelMRR: string;
  color: string;
  jamesRaspConnection: string;
}

export const competitors: Competitor[] = [
  {
    id: "ventura",
    name: "Ventura",
    handle: "@Ventura419",
    tier: "Direct",
    subscribers: "5.2K",
    channelAge: "~5 months",
    topOutlierVideo: "How I Make VIRAL Roblox Shorts ($10K/month)",
    topOutlierVideoUrl: "https://www.youtube.com/@Ventura419",
    topOutlierViews: 124000,
    avgViews: 8000,
    outlierMultiplier: 15.5,
    hookFormula: "Income screenshot thumbnail + 'How I Make VIRAL [GAME] Shorts ($XK/month)'",
    thumbnailStrategy: "YouTube Studio revenue screenshot ($10,398/mo) + Roblox avatar",
    contentFormula: "5-7 min tutorial showing exact record → edit → upload process with revenue proof",
    cta: "Check out the Program → Whop link",
    channelUrl: "https://www.youtube.com/@Ventura419",
    funnelPlatform: "Whop (Motion)",
    funnelUrl: "https://whop.com/m0tion",
    funnelPrice: "Invite-only",
    funnelMembers: "47",
    funnelMRR: "Unknown",
    color: "#EF4444",
    jamesRaspConnection: "James Rasp's most direct template — same title formula, same thumbnail strategy"
  },
  {
    id: "ryvahn",
    name: "Ryvahn",
    handle: "@Ryvahn",
    tier: "Direct",
    subscribers: "14K",
    channelAge: "~1 year",
    topOutlierVideo: "How to Make VIRAL Roblox Rant Videos (Free CapCut + AI Method)",
    topOutlierVideoUrl: "https://www.youtube.com/@Ryvahn",
    topOutlierViews: 141000,
    avgViews: 15000,
    outlierMultiplier: 9.4,
    hookFormula: "'How to Escape [View Jail]' / 'The Easiest Way to...' / Step-by-step tutorial titles",
    thumbnailStrategy: "Screen recording of analytics + bold text overlay ('141K Views', 'Escape View Jails')",
    contentFormula: "Short (4-8 min) step-by-step tutorials with screen recordings, free tools only",
    cta: "Join my Community → Skool + Apply to work with me 1-on-1",
    channelUrl: "https://www.youtube.com/@Ryvahn",
    funnelPlatform: "Skool (Shorts Lab)",
    funnelUrl: "https://www.skool.com/shorts-lab-1742",
    funnelPrice: "Unknown",
    funnelMembers: "Unknown",
    funnelMRR: "Unknown",
    color: "#3B82F6",
    jamesRaspConnection: "Ryvahn's 'Escape View Jail' format is the pain-point hook James Rasp hasn't used yet"
  },
  {
    id: "moneyboymax",
    name: "moneyboymax",
    handle: "@moneyboymax",
    tier: "Direct",
    subscribers: "~5K",
    channelAge: "~1 year",
    topOutlierVideo: "how to grow a faceless youtube channel in 2025",
    topOutlierVideoUrl: "https://www.youtube.com/@moneyboymax",
    topOutlierViews: 189000,
    avgViews: 12000,
    outlierMultiplier: 15.8,
    hookFormula: "Lowercase anti-hype titles + 'you MUST do this' + specific pain points",
    thumbnailStrategy: "Revenue screenshot ($10,450) + face cam + bold 'IT'S EASY' text",
    contentFormula: "Long-form deep dives (10-68 min), 'ranking shorts' niche, psychology of hooks",
    cta: "Apply for 1:1 mentorship here → Typeform",
    channelUrl: "https://www.youtube.com/@moneyboymax",
    funnelPlatform: "1:1 Mentorship (Typeform)",
    funnelUrl: "https://www.youtube.com/@moneyboymax",
    funnelPrice: "High-ticket",
    funnelMembers: "Small cohort",
    funnelMRR: "Unknown",
    color: "#10B981",
    jamesRaspConnection: "moneyboymax pioneered the 'ranking shorts' angle — a unique sub-niche James Rasp hasn't touched"
  },
  {
    id: "chrisbarrera",
    name: "Chris Barrera",
    handle: "@BarreraChris",
    tier: "Direct",
    subscribers: "5.65K",
    channelAge: "~8 months",
    topOutlierVideo: "The Faceless Roblox Channel That Made Me $131,397 (Full Breakdown)",
    topOutlierVideoUrl: "https://www.youtube.com/@BarreraChris",
    topOutlierViews: 57000,
    avgViews: 5000,
    outlierMultiplier: 11.4,
    hookFormula: "Specific dollar amounts ($131,397 / $25,367) + 'Full Breakdown' / 'Step-by-Step'",
    thumbnailStrategy: "YouTube Analytics screenshot showing $131,762.49 revenue + face cam",
    contentFormula: "Longer videos (9-43 min), detailed breakdowns, AI automation focus",
    cta: "Work 1on1 with me to build a profitable YouTube Automation business in 180 days",
    channelUrl: "https://www.youtube.com/@BarreraChris",
    funnelPlatform: "YT Launchpad (1:1 coaching)",
    funnelUrl: "https://www.youtube.com/@BarreraChris",
    funnelPrice: "High-ticket (180-day program)",
    funnelMembers: "Small cohort",
    funnelMRR: "Unknown",
    color: "#F59E0B",
    jamesRaspConnection: "Chris Barrera's '180-day guarantee' framing is the most premium positioning in the space"
  },
  {
    id: "romayroh",
    name: "Romayroh",
    handle: "@romayroh",
    tier: "Adjacent",
    subscribers: "156K",
    channelAge: "2+ years",
    topOutlierVideo: "YouTube's Algorithm Update Just Changed The AI Rules",
    topOutlierVideoUrl: "https://www.youtube.com/@romayroh",
    topOutlierViews: 138000,
    avgViews: 30000,
    outlierMultiplier: 4.6,
    hookFormula: "Specific income claims + 'BORING' (anti-hype) + controversy ('Gurus are LYING')",
    thumbnailStrategy: "Income proof + 'BORING' text overlay + face cam showing surprise/excitement",
    contentFormula: "9-17 min, faceless YouTube automation, algorithm updates, case studies",
    cta: "Join my community → Skool $36/month",
    channelUrl: "https://www.youtube.com/@romayroh",
    funnelPlatform: "Skool (Faceless YouTube HQ)",
    funnelUrl: "https://www.skool.com/views-for-income/about",
    funnelPrice: "$36/month",
    funnelMembers: "1,300",
    funnelMRR: "~$46,800",
    color: "#8B5CF6",
    jamesRaspConnection: "Romayroh is the market leader — 1,300 members at $36/mo. James Rasp is modeling his community after this"
  },
  {
    id: "wealthifyai",
    name: "Wealthify AI",
    handle: "@WealthifyAi",
    tier: "Direct",
    subscribers: "~3K",
    channelAge: "~4 months",
    topOutlierVideo: "How I Make Viral Roblox Shorts Under 5 min ($10K/month)",
    topOutlierVideoUrl: "https://www.youtube.com/@WealthifyAi",
    topOutlierViews: 63000,
    avgViews: 4000,
    outlierMultiplier: 15.75,
    hookFormula: "Income screenshot + time efficiency angle ('Under 5 min') + AI tools focus",
    thumbnailStrategy: "Revenue screenshot ($10,398.90) + Roblox avatar + '$3,690.90 more than usual' callout",
    contentFormula: "Faceless AI workflow (scripting + voiceover) + mobile editing on CapCut",
    cta: "Check out Nexlev here → affiliate tool link",
    channelUrl: "https://www.youtube.com/@WealthifyAi",
    funnelPlatform: "Nexlev (tool affiliate)",
    funnelUrl: "https://nexlev.io",
    funnelPrice: "Affiliate commission",
    funnelMembers: "N/A",
    funnelMRR: "Passive affiliate",
    color: "#EC4899",
    jamesRaspConnection: "Wealthify AI's 'Under 5 min' angle is the time-efficiency hook James Rasp hasn't used"
  },
  {
    id: "syrax",
    name: "Syrax",
    handle: "@Syrax",
    tier: "Adjacent",
    subscribers: "~8K",
    channelAge: "~8 months",
    topOutlierVideo: "How I Actually Make Viral Roblox AI Shorts In 5 Minutes",
    topOutlierVideoUrl: "https://www.youtube.com/@Syrax",
    topOutlierViews: 255000,
    avgViews: 8000,
    outlierMultiplier: 31.9,
    hookFormula: "'In 5 Minutes' time efficiency + AI tools + 'Actually' (authenticity signal)",
    thumbnailStrategy: "Multiple revenue screenshots side-by-side ($5,260 / $21,680 / $19,365) + face cam",
    contentFormula: "5 min tutorial, AI avatar generation, Filmora workflow, 4K quality",
    cta: "Join VSUB here → tool affiliate + Filmora affiliate",
    channelUrl: "https://www.youtube.com/@Syrax",
    funnelPlatform: "Tool affiliates (Filmora + VSUB)",
    funnelUrl: "https://filmora.wondershare.com",
    funnelPrice: "Affiliate commission",
    funnelMembers: "N/A",
    funnelMRR: "Passive affiliate",
    color: "#06B6D4",
    jamesRaspConnection: "Syrax's 255K-view outlier is the highest in the Roblox Shorts education space — pure AI workflow focus"
  },
  {
    id: "moneygroot",
    name: "Money Groot",
    handle: "@MoneyGroott",
    tier: "Adjacent",
    subscribers: "42.1K",
    channelAge: "~1 year",
    topOutlierVideo: "How to Grow your Roblox Channel, FAST",
    topOutlierVideoUrl: "https://www.youtube.com/@MoneyGroott",
    topOutlierViews: 506000,
    avgViews: 25000,
    outlierMultiplier: 20.2,
    hookFormula: "Simple, direct ('FAST', 'Quick tips') — NO income claims, organic growth focus",
    thumbnailStrategy: "Simple text overlay + Roblox gameplay screenshot — no revenue proof",
    contentFormula: "Short (7 min) practical tips, no AI tools, organic growth focus",
    cta: "Subscribe and comment — NO paid funnel",
    channelUrl: "https://www.youtube.com/@MoneyGroott",
    funnelPlatform: "NONE",
    funnelPrice: "Free",
    funnelMembers: "N/A",
    funnelMRR: "$0 (massive gap!)",
    color: "#84CC16",
    jamesRaspConnection: "Money Groot has the BIGGEST video in the space (506K views) with ZERO monetized funnel — the biggest missed opportunity"
  },
  {
    id: "fabiojit",
    name: "Fabiojit",
    handle: "@fabiojit",
    tier: "Upstream",
    subscribers: "76K",
    channelAge: "2+ years",
    topOutlierVideo: "I Went Pro in 10 Days...",
    topOutlierVideoUrl: "https://www.youtube.com/@fabiojit",
    topOutlierViews: 1600000,
    avgViews: 80000,
    outlierMultiplier: 20.0,
    hookFormula: "'I Went Pro in X Days' / 'I [did extreme thing] and here's what happened'",
    thumbnailStrategy: "Personal face cam + dramatic expression + bold challenge text",
    contentFormula: "Personal story + challenge format, Fortnite-focused, 17-31 min",
    cta: "Join free Discord community (800+ members)",
    channelUrl: "https://www.youtube.com/@fabiojit",
    funnelPlatform: "Discord (free)",
    funnelUrl: "https://discord.gg/ZUwYCWz3a5",
    funnelPrice: "Free",
    funnelMembers: "800+",
    funnelMRR: "$0",
    color: "#F97316",
    jamesRaspConnection: "Fabiojit's 'I Went Pro in X Days' format is THE template James Rasp and Ventura adapted for Roblox"
  }
];

export interface CompetitiveGap {
  id: string;
  title: string;
  description: string;
  opportunity: string;
  difficulty: 'Low' | 'Medium' | 'High';
  priority: 'Critical' | 'High' | 'Medium';
  color: string;
}

export const competitiveGaps: CompetitiveGap[] = [
  {
    id: "shorts-about-shorts",
    title: "Shorts ABOUT Making Shorts",
    description: "Every competitor teaches Roblox Shorts strategy through long-form videos. Nobody is making Shorts about how to make Roblox Shorts.",
    opportunity: "The content format matches the audience behavior. A Short showing '3 hooks that go viral on Roblox Shorts' gets seen by the exact people who want to learn it.",
    difficulty: "Low",
    priority: "Critical",
    color: "#EF4444"
  },
  {
    id: "established-youtubers",
    title: "The Established YouTuber Angle",
    description: "Every competitor targets new creators starting from scratch. Nobody addresses established YouTubers (10K-500K subs) who want to ADD Shorts to their existing channel.",
    opportunity: "This is a premium audience with existing infrastructure, higher willingness to pay, and a completely different set of problems. Zero direct competition.",
    difficulty: "Low",
    priority: "Critical",
    color: "#3B82F6"
  },
  {
    id: "game-trend-analysis",
    title: "Game-Specific Trend Analysis",
    description: "Everyone says 'pick a trending game' but nobody breaks down WHY specific games (Escape Tsunami, 99 Nights, Troll Tower) are viral right now.",
    opportunity: "Weekly or monthly 'Roblox game trend reports' — which games to make Shorts about THIS week — would be unique, highly shareable, and drive repeat visits.",
    difficulty: "Medium",
    priority: "High",
    color: "#10B981"
  },
  {
    id: "monetization-beyond-adsense",
    title: "Monetization Beyond AdSense",
    description: "Every competitor focuses on RPM/CPM and AdSense. Nobody teaches affiliate marketing, brand deals, Roblox UGC partnerships, merch, or community monetization specific to Roblox Shorts.",
    opportunity: "Gaming Shorts RPM is $0.02-$0.08. Creators who only focus on AdSense will quit. Teaching the full monetization stack is a major differentiator.",
    difficulty: "Medium",
    priority: "High",
    color: "#F59E0B"
  },
  {
    id: "consistency-systems",
    title: "Consistency & Systems Content",
    description: "Everyone teaches 'how to start' — nobody teaches 'how to stay consistent for 90+ days'. No content calendar templates, batch recording guides, or burnout prevention content.",
    opportunity: "The #1 reason creators fail is inconsistency, not lack of knowledge. A '30-day Roblox Shorts challenge' series or consistency system would fill a massive gap.",
    difficulty: "Low",
    priority: "High",
    color: "#8B5CF6"
  },
  {
    id: "case-study-series",
    title: "Ongoing Case Study Series",
    description: "Nobody is doing an ongoing 'I grew this channel from 0 to X in 30 days' series with Roblox Shorts specifically. Fabiojit's 'I Went Pro in 10 Days' (1.6M views) is the closest but it's Fortnite.",
    opportunity: "A documented Roblox Shorts growth challenge series — with real analytics shown — would be the highest-performing content format in this space.",
    difficulty: "High",
    priority: "High",
    color: "#EC4899"
  },
  {
    id: "dominant-community",
    title: "No Dominant Roblox Shorts Community",
    description: "Romayroh's community ($36/mo, 1,300 members) is broad faceless YouTube. James Rasp's MotionFarm is Roblox-specific but tiny (~47 members). There's NO dominant Roblox Shorts-specific community.",
    opportunity: "The first well-positioned Roblox Shorts community with strong content marketing behind it could capture this entire market. Romayroh proves the model works at $46,800/month MRR.",
    difficulty: "High",
    priority: "Critical",
    color: "#06B6D4"
  },
  {
    id: "premium-established-community",
    title: "Premium Community for Established Creators",
    description: "All communities target beginners. A premium community ($97-197/mo) specifically for established creators adding Shorts would have zero direct competition.",
    opportunity: "Established YouTubers have more money, more motivation, and more to gain. A premium offer for this segment could generate more revenue with fewer members than a mass-market beginner community.",
    difficulty: "Medium",
    priority: "High",
    color: "#84CC16"
  }
];

export interface HookFormula {
  name: string;
  formula: string;
  example: string;
  bestPerformer: string;
  avgViews: string;
  color: string;
}

export const hookFormulas: HookFormula[] = [
  {
    name: "Income Proof Hook",
    formula: "How I Make VIRAL [GAME] [FORMAT] ($XK/month)",
    example: "How I Make VIRAL Roblox Shorts ($10K/month)",
    bestPerformer: "Ventura — 124K views",
    avgViews: "63K–124K",
    color: "#EF4444"
  },
  {
    name: "Specific Dollar Amount Hook",
    formula: "The [ADJECTIVE] [NICHE] Channel That Made Me $[EXACT AMOUNT] (Full Breakdown)",
    example: "The Faceless Roblox Channel That Made Me $131,397 (Full Breakdown)",
    bestPerformer: "Chris Barrera — 57K views",
    avgViews: "30K–57K",
    color: "#F59E0B"
  },
  {
    name: "Time Efficiency Hook",
    formula: "How I [ACHIEVE RESULT] in [SHORT TIME] (AI Method)",
    example: "How I Actually Make Viral Roblox AI Shorts In 5 Minutes",
    bestPerformer: "Syrax — 255K views",
    avgViews: "63K–255K",
    color: "#10B981"
  },
  {
    name: "Anti-Hype / Controversy Hook",
    formula: "The BORING [NICHE] Channels That Made Me $[AMOUNT] in [TIME]",
    example: "The BORING Faceless Channels that made me $31,364 in 90 Days",
    bestPerformer: "Romayroh — 42K views",
    avgViews: "22K–42K",
    color: "#8B5CF6"
  },
  {
    name: "Pain Point Escape Hook",
    formula: "How to Escape [VIEW COUNT] View Jail on YouTube Shorts (Full Guide)",
    example: "How to Escape 0, 10k & 30k View Jail on YouTube Shorts",
    bestPerformer: "Ryvahn — 120K views",
    avgViews: "110K–141K",
    color: "#3B82F6"
  },
  {
    name: "Challenge / Copy Hook",
    formula: "I [COPIED/TRIED] [STRATEGY] for [X] Days — [REALISTIC/HONEST] Results",
    example: "I Went Viral With YouTube Shorts In 30 Days and Here's How I Did It",
    bestPerformer: "janisjanis01 — 499K views",
    avgViews: "75K–499K",
    color: "#EC4899"
  }
];
// NEW CALENDAR DATA — Two Separate Idea Banks
export const shortsDays: ShortsDay[] = [
  // ─── WEEK 1: POSITIONING & DIFFERENTIATION ───────────────
  {
    day: 1, dayOfWeek: "Mon", week: 1, theme: "The Competitor Gap Reveal",
    ideas: [
      {
        ideaNumber: 1,
        title: "I Studied Every Roblox Shorts Educator — Here Are the 8 Things NONE of Them Teach",
        hook: "Ventura, Ryvahn, moneyboymax, Chris Barrera — I watched every video. Here are the 8 gaps they all miss",
        cta: "Comment 'GAPS' and I'll send you the full gap analysis PDF",
        bestTime: "9 AM", robloxGame: "General Roblox", audience: "Both", pillar: "Start",
        gapExploited: "Competitor Gap Analysis as Content", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 2,
        title: "Why Every Roblox Shorts Tutorial Is Teaching You the WRONG Strategy",
        hook: "The #1 thing every Roblox Shorts educator gets wrong — and the fix that actually works in 2026",
        cta: "Follow for the strategy they're not teaching you",
        bestTime: "12 PM", robloxGame: "Escape Tsunami", audience: "Both", pillar: "Start",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "The Roblox Shorts Niche Has 8 Untapped Content Gaps — Here's #1",
        hook: "Nobody in the Roblox Shorts space is targeting established YouTubers. That's a $10K/month gap sitting wide open",
        cta: "Save this — I'm covering all 8 gaps this week",
        bestTime: "5 PM", robloxGame: "General Roblox", audience: "Established", pillar: "Start",
        gapExploited: "The Established YouTuber Angle (Zero Competition)", hookFormula: "Specific Dollar Amount Hook"
      }
    ]
  },
  {
    day: 2, dayOfWeek: "Tue", week: 1, theme: "Hook Formula Breakdown",
    ideas: [
      {
        ideaNumber: 1,
        title: "The Hook That Got Syrax 255K Views on a Roblox Shorts Tutorial",
        hook: "This exact 3-second hook structure is responsible for 255K views. Here's the formula you can copy today",
        cta: "Save this. Try it on your next Roblox Short and comment your views",
        bestTime: "9 AM", robloxGame: "Escape Tsunami", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Time Efficiency Hook (Syrax 255K model)"
      },
      {
        ideaNumber: 2,
        title: "How Ventura's $10K Screenshot Thumbnail Gets 124K Views Every Time",
        hook: "Income proof thumbnails outperform every other format in Roblox Shorts education. Here's the exact psychology",
        cta: "Watch my full thumbnail breakdown — link in bio",
        bestTime: "4 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Income Proof Hook (Ventura 124K model)"
      },
      {
        ideaNumber: 3,
        title: "Fabiojit Got 1.6M Views With This One Hook Formula — Here's How to Use It for Roblox",
        hook: "Fabiojit's 'I Went Pro in 10 Days' formula works on any game. Here's the Roblox Shorts version",
        cta: "Follow — I'm testing this formula on Escape Tsunami this week",
        bestTime: "7 PM", robloxGame: "Escape Tsunami, Troll Tower", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Challenge / Copy Hook (Fabiojit 1.6M model)"
      }
    ]
  },
  {
    day: 3, dayOfWeek: "Wed", week: 1, theme: "Established Creator Angle",
    ideas: [
      {
        ideaNumber: 1,
        title: "You Already Have Subscribers — Here's Why That's Your Unfair Advantage in Roblox Shorts",
        hook: "Every Roblox Shorts educator targets beginners. If you already have an audience, you're sitting on a goldmine nobody is talking about",
        cta: "Watch my full Established Creator Shorts Strategy — link in bio",
        bestTime: "9 AM", robloxGame: "General Roblox", audience: "Established", pillar: "Start",
        gapExploited: "The Established YouTuber Angle (Zero Competition)", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 2,
        title: "How to Add Roblox Shorts to Your Existing Channel Without Confusing Your Audience",
        hook: "Adding Shorts to an existing YouTube channel can 3x your growth — or tank it. Here's the difference",
        cta: "Comment your subscriber count — I'll tell you the exact strategy for your channel size",
        bestTime: "5 PM", robloxGame: "General Roblox", audience: "Established", pillar: "Start",
        gapExploited: "The Established YouTuber Angle", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "One Long-Form Roblox Video = 10 Shorts. Here's the Clip-Finding System",
        hook: "If you already have long-form Roblox videos, you're sitting on a Shorts library you haven't touched. Here's how to find the clips in 10 minutes",
        cta: "Try this on your last video and comment how many clips you found",
        bestTime: "8 PM", robloxGame: "99 Nights in Forest", audience: "Established", pillar: "Grow",
        gapExploited: "The Established YouTuber Angle", hookFormula: "Time Efficiency Hook"
      }
    ]
  },
  {
    day: 4, dayOfWeek: "Thu", week: 1, theme: "Roblox Game Trend Report",
    ideas: [
      {
        ideaNumber: 1,
        title: "Escape Tsunami Was the #1 Roblox Game in Feb 2026 — Here's How Long the Shorts Window Lasts",
        hook: "Escape Tsunami hit 425M Roblox hours in 2025. The Shorts window is still open — but not for long. Here's how to move fast",
        cta: "Subscribe for weekly Roblox game trend reports — I'll tell you which game to cover BEFORE it peaks",
        bestTime: "9 AM", robloxGame: "Escape Tsunami", audience: "Both", pillar: "Case Study",
        gapExploited: "Game-Specific Trend Analysis (Nobody Does This)", hookFormula: "Income Proof Hook + Data Authority"
      },
      {
        ideaNumber: 2,
        title: "99 Nights in the Forest Is Generating 759K Views Per Short — Here's Why",
        hook: "99 Nights in the Forest has a specific emotional hook that makes viewers rewatch 3x. Here's the exact content angle",
        cta: "Make a 99 Nights Short using this angle today — comment your results",
        bestTime: "4 PM", robloxGame: "99 Nights in the Forest", audience: "Both", pillar: "Grow",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Data Authority Hook"
      },
      {
        ideaNumber: 3,
        title: "Kick a Lucky Block vs. Troll Tower — Which Roblox Game Is Better for Shorts RIGHT NOW?",
        hook: "I compared both games head-to-head for Shorts potential. The winner surprised me — and it's the one everyone is sleeping on",
        cta: "Comment which game you're covering this week",
        bestTime: "7 PM", robloxGame: "Kick a Lucky Block, Troll Tower", audience: "Both", pillar: "Case Study",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Anti-Hype / Controversy Hook"
      }
    ]
  },
  {
    day: 5, dayOfWeek: "Fri", week: 1, theme: "Pain Point Escape",
    ideas: [
      {
        ideaNumber: 1,
        title: "How to Escape 0-View Jail on Roblox Shorts (The Roblox-Specific Fix)",
        hook: "Ryvahn's 141K-view video on view jail works — but there's a Roblox-specific version of this problem that's 3x easier to fix",
        cta: "Comment 'JAIL' and I'll send you the full checklist",
        bestTime: "9 AM", audience: "Both", pillar: "Start",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Pain Point Escape Hook (Ryvahn 141K model)"
      },
      {
        ideaNumber: 2,
        title: "Why Your Roblox Shorts Are Getting 50 Views (And the 3-Second Fix)",
        hook: "If your Roblox Shorts are stuck at 50 views, it's almost always the first 3 seconds. Here's exactly what to change",
        cta: "Drop your channel in the comments — I'll check your last Short",
        bestTime: "4 PM", robloxGame: "Escape Tsunami", audience: "New Creator", pillar: "Start",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Pain Point Escape Hook"
      },
      {
        ideaNumber: 3,
        title: "The #1 Reason Roblox Shorts Channels Die in Month 2 (It's Not What You Think)",
        hook: "It's not the algorithm. It's not the game. It's this one thing that kills 90% of Roblox Shorts channels before they hit 1K subs",
        cta: "Follow — I'm posting the fix tomorrow",
        bestTime: "7 PM", audience: "New Creator", pillar: "Start",
        gapExploited: "Consistency & Systems Content", hookFormula: "Anti-Hype / Controversy Hook"
      }
    ]
  },
  {
    day: 6, dayOfWeek: "Sat", week: 1, theme: "Faceless & Boring Channel Formula",
    ideas: [
      {
        ideaNumber: 1,
        title: "The BORING Faceless Roblox Shorts Channel Making $5K/Month",
        hook: "This faceless Roblox Shorts channel has zero personality, zero face cam, zero editing flair — and makes $5K/month. Here's the formula",
        cta: "Follow for the full faceless Roblox Shorts system",
        bestTime: "10 AM", robloxGame: "99 Nights in Forest, Escape Tsunami", audience: "New Creator", pillar: "Monetize",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Anti-Hype / Controversy Hook (Romayroh model)"
      },
      {
        ideaNumber: 2,
        title: "How to Start a Roblox Shorts Channel With Zero Equipment (Real Example)",
        hook: "This creator started a Roblox Shorts channel with just a phone and free editing apps — here's exactly what they used to hit 10K subs",
        cta: "Comment 'SETUP' and I'll send you the free equipment list",
        bestTime: "2 PM", robloxGame: "Escape Tsunami", audience: "New Creator", pillar: "Start",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Challenge / Copy Hook"
      },
      {
        ideaNumber: 3,
        title: "The Roblox Shorts Channel Niche Nobody Is Competing In (Yet)",
        hook: "There's a Roblox Shorts sub-niche with almost zero competition and massive search demand. Here's what it is",
        cta: "Save this before everyone else finds it",
        bestTime: "6 PM", robloxGame: "Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Start",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Anti-Hype / Controversy Hook"
      }
    ]
  },
  {
    day: 7, dayOfWeek: "Sun", week: 1, theme: "30-Day Challenge Launch",
    ideas: [
      {
        ideaNumber: 1,
        title: "I'm Starting a Roblox Shorts Channel From 0 — Day 1 (Watch This)",
        hook: "I'm documenting a Roblox Shorts channel from absolute zero. Here's what I'm doing in the first 24 hours",
        cta: "Follow to watch the full 30-day challenge. Drop your starting sub count",
        bestTime: "10 AM", robloxGame: "Escape Tsunami", audience: "New Creator", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series (Fabiojit 1.6M model, Roblox version)", hookFormula: "Challenge / Copy Hook"
      },
      {
        ideaNumber: 2,
        title: "Week 1 Roblox Shorts Strategy Recap — What Worked, What Didn't",
        hook: "After 7 days of Roblox Shorts content, here are the real numbers — and the one thing I'm changing in Week 2",
        cta: "Subscribe to follow the full 30-day challenge",
        bestTime: "2 PM", robloxGame: "Escape Tsunami, Troll Tower", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Income Proof Hook"
      },
      {
        ideaNumber: 3,
        title: "The 3 Roblox Shorts I'm Making This Week (And Why I Chose These Games)",
        hook: "Here's my exact content plan for Week 2 of the Roblox Shorts challenge — game selection, hook formulas, and posting times",
        cta: "Comment what games you're covering this week",
        bestTime: "6 PM", robloxGame: "99 Nights, Escape Tsunami, Kick a Lucky Block", audience: "Both", pillar: "Grow",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Challenge / Copy Hook"
      }
    ]
  },

  // ─── WEEK 2: ALGORITHM & HOOKS ────────────────────────────
  {
    day: 8, dayOfWeek: "Mon", week: 2, theme: "Algorithm Deep Dive",
    ideas: [
      {
        ideaNumber: 1,
        title: "How the YouTube Shorts Algorithm Actually Works for Roblox Content (2026)",
        hook: "YouTube shows your Short to 1,000 people first. If they don't watch it, it's dead forever. Here's how to pass the test every time",
        cta: "Watch my full algorithm breakdown — link in bio",
        bestTime: "9 AM", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Data Authority Hook"
      },
      {
        ideaNumber: 2,
        title: "The Roblox Shorts Metric That Matters More Than Views",
        hook: "Everyone obsesses over view count. The metric that actually predicts channel growth is this — and most Roblox creators have never checked it",
        cta: "Check this metric right now and comment what you find",
        bestTime: "4 PM", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "Why Posting Roblox Shorts Every Day Actually HURTS Your Channel",
        hook: "The data says posting every day tanks your average view duration. Here's the posting frequency that actually grows Roblox Shorts channels",
        cta: "Comment your current posting schedule — I'll tell you if it's helping or hurting",
        bestTime: "7 PM", audience: "Both", pillar: "Grow",
        gapExploited: "Consistency & Systems Content", hookFormula: "Anti-Hype / Controversy Hook"
      }
    ]
  },
  {
    day: 9, dayOfWeek: "Tue", week: 2, theme: "AI Workflow for Roblox Shorts",
    ideas: [
      {
        ideaNumber: 1,
        title: "How to Make a Viral Roblox Short in Under 5 Minutes Using AI",
        hook: "Syrax made 255K views with this exact AI workflow. Here's the Roblox-specific version in 60 seconds",
        cta: "Watch the full AI workflow breakdown — link in bio",
        bestTime: "9 AM", robloxGame: "Escape Tsunami, Kick a Lucky Block", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Time Efficiency Hook (Syrax 255K model)"
      },
      {
        ideaNumber: 2,
        title: "The AI Tool That Writes Roblox Shorts Scripts in 30 Seconds",
        hook: "I tested 5 AI tools for writing Roblox Shorts scripts. One of them is so good it's almost unfair — here's which one",
        cta: "Comment 'AI' and I'll send you the prompt template I use",
        bestTime: "4 PM", robloxGame: "99 Nights in Forest", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Time Efficiency Hook"
      },
      {
        ideaNumber: 3,
        title: "How Wealthify AI Makes Passive Roblox Shorts Income With AI Automation",
        hook: "Wealthify AI built a passive income stream from Roblox Shorts using AI tools — no face cam, no editing, no community. Here's the exact stack",
        cta: "Save this — the full AI stack breakdown is in my bio",
        bestTime: "7 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Anti-Hype / Controversy Hook (Wealthify AI model)"
      }
    ]
  },
  {
    day: 10, dayOfWeek: "Wed", week: 2, theme: "99 Nights in the Forest Deep Dive",
    ideas: [
      {
        ideaNumber: 1,
        title: "Why 99 Nights in the Forest Shorts Are Going Viral Right Now",
        hook: "99 Nights in the Forest has a specific survival mechanic that creates perfect Short-form tension. Here's how to use it",
        cta: "Make a 99 Nights Short today and tag me — I'll feature the best ones",
        bestTime: "9 AM", robloxGame: "99 Nights in the Forest", audience: "Both", pillar: "Grow",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Data Authority Hook"
      },
      {
        ideaNumber: 2,
        title: "The 3 Content Angles Making 99 Nights in the Forest Shorts Go Viral",
        hook: "I analyzed the top 20 viral 99 Nights Shorts. Every single one uses one of these 3 content angles — here they are",
        cta: "Which angle are you trying first? Comment below",
        bestTime: "4 PM", robloxGame: "99 Nights in the Forest", audience: "Both", pillar: "Grow",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Data Authority Hook"
      },
      {
        ideaNumber: 3,
        title: "99 Nights in the Forest vs. Escape Tsunami — Which Game Is Better for Roblox Shorts?",
        hook: "I posted 5 Shorts on each game. Here are the real view counts — and the winner is not what I expected",
        cta: "Subscribe to see the full data breakdown in my next long-form video",
        bestTime: "7 PM", robloxGame: "99 Nights in Forest, Escape Tsunami", audience: "Both", pillar: "Case Study",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Income Proof Hook"
      }
    ]
  },
  {
    day: 11, dayOfWeek: "Thu", week: 2, theme: "Hook Writing Masterclass",
    ideas: [
      {
        ideaNumber: 1,
        title: "The 6 Hook Formulas Behind Every Viral Roblox Short (With Real View Counts)",
        hook: "Ventura (124K), Ryvahn (141K), Syrax (255K), Fabiojit (1.6M) — all 6 hook formulas in 60 seconds",
        cta: "Save this. Download the free Hook Swipe File — link in bio",
        bestTime: "9 AM", robloxGame: "Escape Tsunami, Troll Tower", audience: "Both", pillar: "Grow",
        gapExploited: "Competitor Gap Analysis as Content", hookFormula: "Income Proof Hook + Data Authority"
      },
      {
        ideaNumber: 2,
        title: "How to Write a Roblox Shorts Hook in 60 Seconds (Template Included)",
        hook: "Every viral Roblox Short hook follows this exact 3-part structure. Here's the template you can fill in for any game",
        cta: "Comment 'HOOK' and I'll send you the template",
        bestTime: "4 PM", robloxGame: "Kick a Lucky Block", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Time Efficiency Hook"
      },
      {
        ideaNumber: 3,
        title: "The Worst Roblox Shorts Hook Mistake (And What to Say Instead)",
        hook: "Starting your Roblox Short with 'Hey guys' is killing your views. Here's the exact first line that keeps people watching",
        cta: "Drop your current first line in the comments — I'll rewrite it for you",
        bestTime: "7 PM", robloxGame: "Troll Tower", audience: "New Creator", pillar: "Start",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Pain Point Escape Hook"
      }
    ]
  },
  {
    day: 12, dayOfWeek: "Fri", week: 2, theme: "Thumbnail & Title Strategy",
    ideas: [
      {
        ideaNumber: 1,
        title: "The Roblox Shorts Thumbnail Formula That Gets 3x More Clicks",
        hook: "Your Roblox Short thumbnail is the first thing people see in the regular YouTube feed. Most creators are wasting it — here's the fix",
        cta: "Show me your current thumbnail in the comments — I'll give you a quick review",
        bestTime: "9 AM", robloxGame: "Escape Tsunami", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Income Proof Hook"
      },
      {
        ideaNumber: 2,
        title: "How moneyboymax Gets 189K Views With the 'Ranking Shorts' Format",
        hook: "moneyboymax pioneered the ranking Shorts angle for Roblox. Nobody else is doing this — here's how to copy the format",
        cta: "Save this format. Try it with your next Roblox Short",
        bestTime: "4 PM", robloxGame: "Escape Tsunami, 99 Nights, Troll Tower", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Challenge / Copy Hook (moneyboymax 189K model)"
      },
      {
        ideaNumber: 3,
        title: "The Roblox Shorts Title That Gets 5x More Clicks (Real A/B Test)",
        hook: "I A/B tested 10 different Roblox Shorts titles. The winning format gets 5x more clicks — and it's not what you'd expect",
        cta: "Comment your current title — I'll give you the winning version",
        bestTime: "7 PM", robloxGame: "Kick a Lucky Block", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Data Authority Hook"
      }
    ]
  },
  {
    day: 13, dayOfWeek: "Sat", week: 2, theme: "Escape Tsunami Content Sprint",
    ideas: [
      {
        ideaNumber: 1,
        title: "Escape Tsunami Shorts Are Still Blowing Up — Here's the Exact Format Going Viral",
        hook: "Escape Tsunami was the #1 Roblox game in Feb 2026. The Shorts window is still open — here's the exact format that's going viral right now",
        cta: "Make this Short today and tag me — I'll feature the best ones in my next video",
        bestTime: "10 AM", robloxGame: "Escape Tsunami", audience: "Both", pillar: "Grow",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Challenge / Copy Hook"
      },
      {
        ideaNumber: 2,
        title: "5 Escape Tsunami Short Ideas You Can Film Right Now",
        hook: "Here are 5 Escape Tsunami Short ideas with hooks pre-written — pick one and film it today",
        cta: "Which one are you filming? Comment below",
        bestTime: "2 PM", robloxGame: "Escape Tsunami", audience: "New Creator", pillar: "Start",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Time Efficiency Hook"
      },
      {
        ideaNumber: 3,
        title: "The Escape Tsunami Short That Got 500K Views — Breakdown",
        hook: "I broke down the highest-performing Escape Tsunami Short I could find. Here's every decision the creator made right",
        cta: "Subscribe for weekly Roblox game breakdowns",
        bestTime: "6 PM", robloxGame: "Escape Tsunami", audience: "Both", pillar: "Case Study",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Data Authority Hook"
      }
    ]
  },
  {
    day: 14, dayOfWeek: "Sun", week: 2, theme: "Content System & Batch Recording",
    ideas: [
      {
        ideaNumber: 1,
        title: "How to Batch Record 30 Roblox Shorts in One Day",
        hook: "I batch recorded 30 Roblox Shorts in a single Saturday. Here's the exact game rotation, script template, and upload schedule",
        cta: "Screenshot this system. Watch the full batch recording tutorial — link in bio",
        bestTime: "10 AM", robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Grow",
        gapExploited: "Consistency & Systems Content", hookFormula: "Time Efficiency Hook"
      },
      {
        ideaNumber: 2,
        title: "The Roblox Shorts Content Calendar That Keeps You Posting for 90 Days",
        hook: "I mapped 90 days of Roblox Shorts content in one afternoon. Here's the exact system — no more 'what do I post today'",
        cta: "Download the free 90-day Roblox Shorts content calendar — link in bio",
        bestTime: "2 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Grow",
        gapExploited: "Consistency & Systems Content (Nobody Teaches This)", hookFormula: "Time Efficiency Hook"
      },
      {
        ideaNumber: 3,
        title: "Week 2 Roblox Shorts Challenge Update — Real Views, Real Mistakes",
        hook: "Week 2 of the 30-day Roblox Shorts challenge. Here are the real numbers — and the one mistake I made that cost me 10K views",
        cta: "Subscribe to follow the full challenge. Comment your Week 2 numbers",
        bestTime: "6 PM", robloxGame: "Escape Tsunami, 99 Nights", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Income Proof Hook"
      }
    ]
  },

  // ─── WEEK 3: CONSISTENCY & ESTABLISHED CREATOR STRATEGY ──
  {
    day: 15, dayOfWeek: "Mon", week: 3, theme: "Consistency Systems",
    ideas: [
      {
        ideaNumber: 1,
        title: "The 3-Part System That Keeps Roblox Shorts Creators Posting When Motivation Dies",
        hook: "90% of Roblox Shorts channels quit in month 2. The ones that survive all use this 3-part consistency system",
        cta: "Watch my full Consistency System video — link in bio",
        bestTime: "9 AM", audience: "Both", pillar: "Grow",
        gapExploited: "Consistency & Systems Content (Nobody Teaches This)", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 2,
        title: "How to Never Run Out of Roblox Shorts Ideas (The Competitor Gap Method)",
        hook: "I mapped every content gap the top 9 Roblox Shorts educators are missing — and turned each gap into a repeatable content format",
        cta: "Download the free Roblox Shorts Content System — 90 days of ideas pre-mapped. Link in bio",
        bestTime: "4 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Grow",
        gapExploited: "Competitor Gap Analysis as Content", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "The Roblox Shorts Posting Schedule That Grew This Channel 10x in 90 Days",
        hook: "This Roblox creator went from 500 to 50,000 subscribers in 90 days using this exact posting schedule — not daily posting",
        cta: "Screenshot this schedule and start it this week",
        bestTime: "7 PM", robloxGame: "Kick a Lucky Block, Troll Tower", audience: "Both", pillar: "Grow",
        gapExploited: "Consistency & Systems Content", hookFormula: "Challenge / Copy Hook"
      }
    ]
  },
  {
    day: 16, dayOfWeek: "Tue", week: 3, theme: "Troll Tower & Kick a Lucky Block",
    ideas: [
      {
        ideaNumber: 1,
        title: "Troll Tower Is the Most Underrated Roblox Game for Shorts Right Now",
        hook: "While everyone fights over Escape Tsunami content, Troll Tower is wide open. Here's the exact content angle going viral",
        cta: "Subscribe for weekly Roblox game trend reports",
        bestTime: "9 AM", robloxGame: "Troll Tower", audience: "Both", pillar: "Grow",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 2,
        title: "5 Kick a Lucky Block Short Ideas That Are Going Viral Right Now",
        hook: "Kick a Lucky Block has a specific reaction format that gets massive rewatch rates. Here are 5 ideas you can film today",
        cta: "Which idea are you filming? Comment below",
        bestTime: "4 PM", robloxGame: "Kick a Lucky Block", audience: "Both", pillar: "Grow",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Time Efficiency Hook"
      },
      {
        ideaNumber: 3,
        title: "The Troll Tower Short Format Getting 200K+ Views Every Time",
        hook: "I found a specific Troll Tower Short format that consistently hits 200K+ views. Here's the exact structure",
        cta: "Save this format. Try it today and comment your results",
        bestTime: "7 PM", robloxGame: "Troll Tower", audience: "Both", pillar: "Case Study",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Data Authority Hook"
      }
    ]
  },
  {
    day: 17, dayOfWeek: "Wed", week: 3, theme: "Analytics & Data",
    ideas: [
      {
        ideaNumber: 1,
        title: "The One Roblox Shorts Metric That Predicts Viral Videos Before They Happen",
        hook: "Most Roblox creators look at views. The metric that actually predicts virality is this — and it's in your YouTube Studio right now",
        cta: "Check this metric and comment what you find",
        bestTime: "9 AM", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 2,
        title: "How to Read Your Roblox Shorts Analytics to Double Your Views",
        hook: "Most Roblox Shorts creators are looking at the wrong metrics. Here's what actually matters — and how to use it to grow faster",
        cta: "Comment your swipe-away rate — I'll tell you if it's good or bad",
        bestTime: "4 PM", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Data Authority Hook"
      },
      {
        ideaNumber: 3,
        title: "Why Your Best Roblox Short Flopped (The Analytics Explanation)",
        hook: "If your best Roblox Short got fewer views than your worst one, here's the exact algorithmic reason — and how to fix it",
        cta: "Drop your channel in the comments — I'll diagnose your analytics",
        bestTime: "7 PM", audience: "Both", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Pain Point Escape Hook"
      }
    ]
  },
  {
    day: 18, dayOfWeek: "Thu", week: 3, theme: "First 1K Subscribers",
    ideas: [
      {
        ideaNumber: 1,
        title: "How to Get Your First 1,000 Subscribers With Roblox Shorts (Real Timeline)",
        hook: "Getting your first 1,000 subscribers on Roblox Shorts is easier than you think — but only if you do these 3 things in the right order",
        cta: "Follow for daily Roblox Shorts tips — I'll help you hit 1K subs",
        bestTime: "9 AM", robloxGame: "Escape Tsunami, 99 Nights", audience: "New Creator", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Pain Point Escape Hook"
      },
      {
        ideaNumber: 2,
        title: "The Fastest Way to 1,000 Subscribers on Roblox Shorts in 2026",
        hook: "I mapped the fastest path to 1K subscribers on Roblox Shorts — it's not posting every day. Here's what actually works",
        cta: "Comment your current subscriber count — I'll tell you exactly what to do next",
        bestTime: "4 PM", robloxGame: "Escape Tsunami", audience: "New Creator", pillar: "Grow",
        gapExploited: "Shorts ABOUT Making Shorts", hookFormula: "Time Efficiency Hook"
      },
      {
        ideaNumber: 3,
        title: "0 to 1,000 Subscribers on Roblox Shorts — Day 18 Update",
        hook: "Day 18 of the 30-day Roblox Shorts challenge. Here's where I am on the path to 1K subs — and what's working",
        cta: "Subscribe to follow the challenge. Drop your Day 18 numbers",
        bestTime: "7 PM", robloxGame: "Escape Tsunami, Kick a Lucky Block", audience: "New Creator", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Income Proof Hook"
      }
    ]
  },
  {
    day: 19, dayOfWeek: "Fri", week: 3, theme: "Repurposing & Content Efficiency",
    ideas: [
      {
        ideaNumber: 1,
        title: "How to Turn One Roblox Gameplay Session Into 10 Shorts",
        hook: "One 30-minute Roblox gameplay session = 10 Shorts. Here's the exact clip-finding system that takes 10 minutes",
        cta: "Try this today and comment how many clips you found",
        bestTime: "9 AM", robloxGame: "99 Nights in Forest, Escape Tsunami", audience: "Established", pillar: "Grow",
        gapExploited: "The Established YouTuber Angle", hookFormula: "Time Efficiency Hook"
      },
      {
        ideaNumber: 2,
        title: "The Roblox Shorts Repurposing System That Saves 5 Hours a Week",
        hook: "I repurpose every piece of Roblox content into 5 different formats. Here's the exact system — it saves me 5 hours a week",
        cta: "Screenshot this system. Watch the full tutorial — link in bio",
        bestTime: "4 PM", robloxGame: "General Roblox", audience: "Established", pillar: "Grow",
        gapExploited: "The Established YouTuber Angle", hookFormula: "Time Efficiency Hook"
      },
      {
        ideaNumber: 3,
        title: "How to Use Your Old Roblox Videos to Grow a New Shorts Channel",
        hook: "If you have old Roblox YouTube videos collecting dust, you're sitting on a Shorts goldmine. Here's how to use them",
        cta: "Comment how many old Roblox videos you have — I'll tell you how many Shorts you can make",
        bestTime: "7 PM", robloxGame: "General Roblox", audience: "Established", pillar: "Grow",
        gapExploited: "The Established YouTuber Angle (Zero Competition)", hookFormula: "Pain Point Escape Hook"
      }
    ]
  },
  {
    day: 20, dayOfWeek: "Sat", week: 3, theme: "Community & Funnel Building",
    ideas: [
      {
        ideaNumber: 1,
        title: "How Romayroh Built a $46,800/Month Community From Roblox Shorts",
        hook: "Romayroh has 1,300 members at $36/month = $46,800 MRR. Here's the exact funnel they built from Roblox Shorts content",
        cta: "Comment 'COMMUNITY' if you want to build a community from your Roblox Shorts channel",
        bestTime: "10 AM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "No Dominant Roblox Shorts Community (Critical Gap)", hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 2,
        title: "The Roblox Shorts Funnel That Makes Money Without Brand Deals",
        hook: "Every Roblox Shorts competitor teaches AdSense. Here's the funnel that makes 10x more — and nobody is teaching it",
        cta: "Watch my full monetization funnel breakdown — link in bio",
        bestTime: "2 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "Why James Rasp's MotionFarm Has 47 Members (And How to Build the One That Has 1,300)",
        hook: "James Rasp launched MotionFarm for Roblox Shorts creators. It has 47 members. Romayroh's Skool has 1,300. Here's the difference",
        cta: "Comment 'IN' if you want early access to the Roblox Shorts community I'm building",
        bestTime: "6 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "No Dominant Roblox Shorts Community", hookFormula: "Specific Dollar Amount Hook"
      }
    ]
  },
  {
    day: 21, dayOfWeek: "Sun", week: 3, theme: "Week 3 Case Study Update",
    ideas: [
      {
        ideaNumber: 1,
        title: "30-Day Roblox Shorts Challenge: Week 3 Update (Real Analytics)",
        hook: "Week 3 of the 30-day Roblox Shorts challenge — real view counts, subscriber gains, and the one game that changed everything",
        cta: "Subscribe to follow the challenge. Comment your Week 3 numbers",
        bestTime: "10 AM", robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Income Proof Hook + Challenge / Copy"
      },
      {
        ideaNumber: 2,
        title: "The Roblox Game I'm Switching to in Week 4 (And Why)",
        hook: "After 3 weeks of Roblox Shorts data, I'm switching games in Week 4. Here's the data that made me change strategy",
        cta: "Follow to see if the switch pays off — Week 4 starts tomorrow",
        bestTime: "2 PM", robloxGame: "Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Case Study",
        gapExploited: "Game-Specific Trend Analysis", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "What I Wish I Knew Before Starting a Roblox Shorts Channel (Week 3 Lessons)",
        hook: "After 21 days of Roblox Shorts content, here are the 3 things I wish I knew before I started",
        cta: "Save this — it'll save you months of trial and error",
        bestTime: "6 PM", robloxGame: "General Roblox", audience: "New Creator", pillar: "Start",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Pain Point Escape Hook"
      }
    ]
  },

  // ─── WEEK 4: MONETIZATION BEYOND ADSENSE ─────────────────
  {
    day: 22, dayOfWeek: "Mon", week: 4, theme: "AdSense Reality Check",
    ideas: [
      {
        ideaNumber: 1,
        title: "Roblox Shorts Paid Me $47 for 1 Million Views — Here's How I Made $3,000 From the Same Views",
        hook: "Gaming Shorts RPM is $0.02-$0.08. Every competitor teaches AdSense. Here's the monetization stack they're all missing",
        cta: "Watch the full 5-stream monetization breakdown — link in bio",
        bestTime: "9 AM", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense (Nobody Teaches This)", hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 2,
        title: "The Real RPM for Roblox Shorts in 2026 (It's Lower Than You Think)",
        hook: "Roblox Shorts RPM: $0.02-$0.08 per 1,000 views. Here's why that's actually fine — and the 5 income streams that make it irrelevant",
        cta: "Comment your current RPM — I'll tell you if it's normal",
        bestTime: "4 PM", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "Why Every Roblox Shorts Educator Only Teaches AdSense (And What They're Hiding)",
        hook: "Ventura, Ryvahn, moneyboymax — they all teach AdSense monetization. None of them teach the income streams that actually make real money",
        cta: "Follow — I'm covering all 6 income streams this week",
        bestTime: "7 PM", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense + Competitor Gap Analysis", hookFormula: "Anti-Hype / Controversy Hook"
      }
    ]
  },
  {
    day: 23, dayOfWeek: "Tue", week: 4, theme: "Brand Deals & Sponsorships",
    ideas: [
      {
        ideaNumber: 1,
        title: "How to Land Your First Brand Deal as a Roblox Shorts Creator (With 5,000 Subscribers)",
        hook: "You don't need 100K subscribers to get paid by brands for your Roblox Shorts. Here's how creators with 5K subs are landing $500-$2,000 deals",
        cta: "Download my free brand deal pitch template — link in description",
        bestTime: "9 AM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 2,
        title: "The Roblox Shorts Brand Deal Email That Gets Replies (Real Template)",
        hook: "I sent 20 brand deal emails using this exact template. Here's the one that got a $1,500 deal from a Roblox-adjacent brand",
        cta: "Comment 'DEAL' and I'll send you the full email template",
        bestTime: "4 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Income Proof Hook"
      },
      {
        ideaNumber: 3,
        title: "Which Brands Are Paying Roblox Shorts Creators Right Now (2026 List)",
        hook: "I researched every brand currently sponsoring Roblox Shorts creators. Here are the 10 most active ones — and how to reach them",
        cta: "Save this list. Watch my full brand deal strategy video — link in bio",
        bestTime: "7 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Data Authority Hook"
      }
    ]
  },
  {
    day: 24, dayOfWeek: "Wed", week: 4, theme: "Shorts Driving Long-Form Revenue",
    ideas: [
      {
        ideaNumber: 1,
        title: "How Roblox Shorts Drove 10x More Views to My Long-Form Videos (Real Data)",
        hook: "Adding Roblox Shorts to an existing channel doesn't just grow Shorts — it compounds your long-form revenue. Here's the exact mechanism",
        cta: "Watch my full Established Creator Shorts Strategy — link in bio",
        bestTime: "9 AM", robloxGame: "Escape Tsunami, 99 Nights", audience: "Established", pillar: "Monetize",
        gapExploited: "The Established YouTuber Angle", hookFormula: "Income Proof Hook"
      },
      {
        ideaNumber: 2,
        title: "The Roblox Shorts to Long-Form Funnel That Makes $5K/Month",
        hook: "Use Shorts as bait. Monetize with long-form. Here's the exact funnel structure that makes $5K/month from Roblox content",
        cta: "Comment 'FUNNEL' and I'll send you the full funnel diagram",
        bestTime: "4 PM", robloxGame: "General Roblox", audience: "Established", pillar: "Monetize",
        gapExploited: "The Established YouTuber Angle + Monetization Beyond AdSense", hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 3,
        title: "How to Use Roblox Shorts to Grow Your Long-Form Channel 3x Faster",
        hook: "Channels using Shorts + Long-Form grow 3x faster than single-format channels. Here's the exact hybrid strategy for Roblox",
        cta: "Try this hybrid strategy and comment your results in 30 days",
        bestTime: "7 PM", robloxGame: "Escape Tsunami, Troll Tower", audience: "Established", pillar: "Grow",
        gapExploited: "The Established YouTuber Angle", hookFormula: "Data Authority Hook"
      }
    ]
  },
  {
    day: 25, dayOfWeek: "Thu", week: 4, theme: "Community & Membership Revenue",
    ideas: [
      {
        ideaNumber: 1,
        title: "How to Build a Roblox Shorts Community That Makes $46,800/Month",
        hook: "Romayroh: 1,300 members × $36/month = $46,800 MRR. James Rasp's MotionFarm: 47 members. There's NO dominant Roblox Shorts community — here's how to build the one that wins",
        cta: "Comment 'COMMUNITY' — I'm building the dominant Roblox Shorts community right now",
        bestTime: "9 AM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "No Dominant Roblox Shorts Community (Critical Gap)", hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 2,
        title: "Skool vs. Whop vs. Discord — Which Platform Is Best for a Roblox Shorts Community?",
        hook: "Romayroh uses Skool ($46,800/mo). Ventura uses Whop. Fabiojit uses Discord (free). Here's which platform wins for Roblox Shorts creators",
        cta: "Comment which platform you'd join as a Roblox Shorts creator",
        bestTime: "4 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "No Dominant Roblox Shorts Community", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "The Roblox Shorts Community Pricing Model That Beats Every Competitor",
        hook: "Chris Barrera charges high-ticket. Romayroh charges $36/month. James Rasp charges $47/month. Here's the pricing model that wins the Roblox Shorts market",
        cta: "Comment what you'd pay for a Roblox Shorts community — I'm building it now",
        bestTime: "7 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "No Dominant Roblox Shorts Community", hookFormula: "Competitor Gap Analysis as Content"
      }
    ]
  },
  {
    day: 26, dayOfWeek: "Fri", week: 4, theme: "Path to Monetization",
    ideas: [
      {
        ideaNumber: 1,
        title: "The Fastest Path to YouTube Monetization With Roblox Shorts (Real Timeline)",
        hook: "500 subs + 3K watch hours OR 3M Shorts views. Here's the fastest Roblox content path to YPP — and why Escape Tsunami is your best bet right now",
        cta: "Comment your current subscriber count — I'll tell you exactly which game to focus on",
        bestTime: "9 AM", robloxGame: "Escape Tsunami, Kick a Lucky Block", audience: "New Creator", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Pain Point Escape Hook"
      },
      {
        ideaNumber: 2,
        title: "How Long Does It Take to Get Monetized on YouTube With Roblox Shorts? (Real Data)",
        hook: "I tracked 50 Roblox Shorts channels from 0 to monetization. The average time was 4.2 months — here's what the fastest ones did differently",
        cta: "Subscribe for the full monetization timeline breakdown",
        bestTime: "4 PM", robloxGame: "Escape Tsunami, 99 Nights", audience: "New Creator", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Data Authority Hook"
      },
      {
        ideaNumber: 3,
        title: "The Roblox Shorts Monetization Mistake That Delays YPP by 3 Months",
        hook: "This one mistake delays YouTube Partner Program eligibility for Roblox Shorts creators by an average of 3 months — and almost everyone makes it",
        cta: "Comment 'MISTAKE' and I'll send you the full checklist",
        bestTime: "7 PM", robloxGame: "General Roblox", audience: "New Creator", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Pain Point Escape Hook"
      }
    ]
  },
  {
    day: 27, dayOfWeek: "Sat", week: 4, theme: "Affiliate & Passive Income",
    ideas: [
      {
        ideaNumber: 1,
        title: "How Wealthify AI Makes Passive Income From Roblox Shorts With Zero Community",
        hook: "Wealthify AI built a passive income stream from Roblox Shorts using tool affiliates — no community, no brand deals, no high-ticket offers. Here's the model",
        cta: "Save this — the full affiliate stack is in my bio link",
        bestTime: "10 AM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Anti-Hype / Controversy Hook (Wealthify AI model)"
      },
      {
        ideaNumber: 2,
        title: "The Roblox Shorts Affiliate Stack That Makes $500/Month Without Brand Deals",
        hook: "You can make $500/month from your Roblox Shorts channel without a single brand deal — here's the affiliate strategy most creators ignore",
        cta: "Save this — and check out the affiliate resources in my bio link",
        bestTime: "2 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 3,
        title: "The Best Affiliate Programs for Roblox Shorts Creators in 2026",
        hook: "I researched every affiliate program relevant to Roblox Shorts creators. Here are the 5 highest-paying ones with real commission rates",
        cta: "Comment which program you're joining first",
        bestTime: "6 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Data Authority Hook"
      }
    ]
  },
  {
    day: 28, dayOfWeek: "Sun", week: 4, theme: "Full Monetization Stack Reveal",
    ideas: [
      {
        ideaNumber: 1,
        title: "The Full Roblox Shorts Monetization Stack: 6 Income Streams in 60 Seconds",
        hook: "AdSense, brand deals, affiliates, community, consulting, digital products — here's how to stack all 6 income streams from one Roblox Shorts channel",
        cta: "Watch the full monetization masterclass — link in bio",
        bestTime: "10 AM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense + Competitor Funnel Analysis", hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 2,
        title: "How I Made $3,000 From a Roblox Shorts Channel With Only 5,000 Subscribers",
        hook: "5,000 subscribers. $3,000/month. Here's the exact income breakdown — and why subscriber count is the wrong metric to focus on",
        cta: "Comment your subscriber count — I'll tell you your realistic monthly income potential",
        bestTime: "2 PM", robloxGame: "Escape Tsunami, 99 Nights", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense", hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 3,
        title: "Week 4 Monetization Update — How Much the 30-Day Roblox Shorts Challenge Made",
        hook: "Week 4 of the 30-day Roblox Shorts challenge. Here's the total revenue from all 6 income streams — the number surprised me",
        cta: "Subscribe for the full Week 4 breakdown video dropping tomorrow",
        bestTime: "6 PM", robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series + Monetization Beyond AdSense", hookFormula: "Income Proof Hook"
      }
    ]
  },

  // ─── DAYS 29-30: FINALE & COMMUNITY LAUNCH ───────────────
  {
    day: 29, dayOfWeek: "Mon", week: 5, theme: "Challenge Finale",
    ideas: [
      {
        ideaNumber: 1,
        title: "30-Day Roblox Shorts Challenge: Final Results (Real Numbers Revealed)",
        hook: "Day 30. Here are the real numbers — subscribers, views, revenue — and the one thing I'd do differently if I started over",
        cta: "Watch the full 30-day breakdown — link in bio. Drop YOUR 30-day numbers",
        bestTime: "9 AM", robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Income Proof Hook + Challenge / Copy"
      },
      {
        ideaNumber: 2,
        title: "The #1 Lesson From 30 Days of Roblox Shorts (I Was Wrong About This)",
        hook: "After 30 days of Roblox Shorts content, the lesson I learned was completely different from what I expected. Here it is",
        cta: "Comment your biggest Roblox Shorts lesson this month",
        bestTime: "4 PM", robloxGame: "General Roblox", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "What Happens to a Roblox Shorts Channel After 30 Days? (Month 2 Preview)",
        hook: "The 30-day challenge is over. Here's what the data says will happen to this channel in Month 2 — and what I'm doing differently",
        cta: "Follow to watch Month 2 unfold. Subscribe for the full strategy",
        bestTime: "7 PM", robloxGame: "Escape Tsunami, 99 Nights", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Challenge / Copy Hook"
      }
    ]
  },
  {
    day: 30, dayOfWeek: "Tue", week: 5, theme: "Community Launch & What's Next",
    ideas: [
      {
        ideaNumber: 1,
        title: "I'm Building the Dominant Roblox Shorts Community — Here's What's Inside",
        hook: "Romayroh proved the model works ($46,800/mo). Money Groot has 506K views and ZERO funnel. I'm building the Roblox Shorts community that captures that gap",
        cta: "Comment 'IN' and I'll send you the early access details",
        bestTime: "9 AM", robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "No Dominant Roblox Shorts Community (Critical Gap)", hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 2,
        title: "30 Days of Roblox Shorts: The 5 Things That Actually Moved the Needle",
        hook: "After 30 days and 90 Roblox Shorts ideas, here are the 5 things that actually drove growth — and the 5 things that were a complete waste of time",
        cta: "Save this — it's the most honest Roblox Shorts breakdown you'll find",
        bestTime: "4 PM", robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series", hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "The Roblox Shorts Strategy for Month 2 — Here's the Full Plan",
        hook: "Month 1 was about testing. Month 2 is about scaling. Here's the exact Roblox Shorts strategy I'm using to 10x the results from Month 1",
        cta: "Follow for Month 2. And if you want to build alongside me — comment 'COMMUNITY'",
        bestTime: "7 PM", robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series + No Dominant Community", hookFormula: "Challenge / Copy Hook + Specific Dollar Amount"
      }
    ]
  }
];

// LONG-FORM IDEA BANK (3 ideas per week = 12 total)
export const longFormWeeks: LongFormWeek[] = [
  {
    week: 1,
    weekTheme: "Positioning, Differentiation & Game Trend Intelligence",
    ideas: [
      {
        ideaNumber: 1,
        title: "The Roblox Shorts Channel That Made Me $131,397 — And What Every Competitor Got Wrong",
        hook: "I studied every Roblox Shorts educator — Ventura, Ryvahn, moneyboymax, Chris Barrera, Fabiojit, Money Groot — and found 8 things NONE of them teach. Here's the full breakdown with real view counts",
        cta: "Comment 'GAPS' and I'll send you the full competitor gap analysis PDF. Subscribe — new video every Mon & Thu",
        bestTime: "Monday 9 AM", duration: "15-20 min",
        robloxGame: "Escape Tsunami, 99 Nights in Forest", audience: "Both", pillar: "Start",
        gapExploited: "Established YouTuber Angle + Competitor Gap Analysis as Content",
        hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 2,
        title: "Roblox Game Trend Report: The 4 Games Driving 60% of Viral Shorts Right Now (May 2026 Data)",
        hook: "Nobody in the Roblox Shorts space breaks down WHY specific games go viral — or how long the window lasts. I analyzed 100 viral Roblox Shorts this month. Here's the full data on Escape Tsunami, 99 Nights, Troll Tower, and Kick a Lucky Block",
        cta: "Subscribe for monthly Roblox game trend reports — I'll tell you which game to cover BEFORE it peaks",
        bestTime: "Thursday 5 PM", duration: "18-25 min",
        robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Case Study",
        gapExploited: "Game-Specific Trend Analysis (Nobody Does This)",
        hookFormula: "Data Authority Hook + Income Proof"
      },
      {
        ideaNumber: 3,
        title: "I Went Pro on Roblox Shorts in 30 Days — Here's Every Step, Every Mistake, Every Number",
        hook: "Fabiojit's 'I Went Pro in 10 Days' got 1.6M views on Fortnite. Money Groot's Roblox growth video got 506K views with ZERO funnel. I'm doing the Roblox Shorts version — and documenting everything",
        cta: "Subscribe to follow the full 30-day challenge — I post every Mon & Thu. Drop your starting subscriber count below",
        bestTime: "Sunday 10 AM", duration: "20-28 min",
        robloxGame: "Escape Tsunami, Troll Tower, 99 Nights in Forest", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series (Fabiojit 1.6M model, Roblox version)",
        hookFormula: "Challenge / Copy Hook"
      }
    ]
  },
  {
    week: 2,
    weekTheme: "Algorithm, Hook Formulas & Game-Specific Deep Dives",
    ideas: [
      {
        ideaNumber: 1,
        title: "The 6 Hook Formulas Behind Every Viral Roblox Shorts Video (With Real View Counts)",
        hook: "I analyzed the top 9 Roblox Shorts educators — Ventura (124K), Ryvahn (141K), Syrax (255K), Fabiojit (1.6M) — and found 6 hook formulas responsible for every single outlier video. Here's every formula with examples you can copy today",
        cta: "Download the free Hook Formula Swipe File — 6 templates with Roblox examples. Link in description",
        bestTime: "Tuesday 9 AM", duration: "15-20 min",
        robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Grow",
        gapExploited: "Competitor Gap Analysis as Content + Shorts ABOUT Making Shorts",
        hookFormula: "Income Proof Hook + Data Authority"
      },
      {
        ideaNumber: 2,
        title: "Why 99 Nights in the Forest Is the Best Roblox Game for Shorts Right Now (Full Data Breakdown)",
        hook: "99 Nights in the Forest is generating 759K+ views per Short for some creators. I broke down exactly why this game works — the emotional mechanics, the content angles, and how long the trend window lasts",
        cta: "Subscribe for weekly Roblox game trend reports — I'll tell you which game to pivot to before the next wave",
        bestTime: "Thursday 5 PM", duration: "15-20 min",
        robloxGame: "99 Nights in the Forest", audience: "Both", pillar: "Case Study",
        gapExploited: "Game-Specific Trend Analysis (Nobody Does This)",
        hookFormula: "Data Authority Hook"
      },
      {
        ideaNumber: 3,
        title: "The Complete Roblox Shorts Content System: How to Never Run Out of Ideas Using the Competitor Gap Method",
        hook: "I mapped every content gap the top 9 Roblox Shorts educators are missing — and turned each gap into a repeatable content format you can use every week for 90 days without repeating yourself",
        cta: "Download the free Roblox Shorts Content System template — 90 days of ideas pre-mapped. Link in description",
        bestTime: "Sunday 10 AM", duration: "20-25 min",
        robloxGame: "Escape Tsunami, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Grow",
        gapExploited: "Consistency & Systems Content + Competitor Gap Analysis",
        hookFormula: "Anti-Hype / Controversy Hook"
      }
    ]
  },
  {
    week: 3,
    weekTheme: "Consistency Systems, Established Creator Strategy & Troll Tower / Kick a Lucky Block",
    ideas: [
      {
        ideaNumber: 1,
        title: "The Established Creator's Complete Guide to Adding Roblox Shorts Without Losing Your Existing Audience",
        hook: "If you already have 10K-500K subscribers, adding Roblox Shorts is completely different from starting from scratch — and every Shorts educator is giving you the wrong advice. Here's the strategy built specifically for established creators",
        cta: "Comment your current subscriber count — I'll tell you the exact Shorts strategy for your channel size",
        bestTime: "Tuesday 9 AM", duration: "20-28 min",
        robloxGame: "General Roblox", audience: "Established", pillar: "Grow",
        gapExploited: "The Established YouTuber Angle (Zero Direct Competition)",
        hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 2,
        title: "Troll Tower & Kick a Lucky Block: The Underrated Roblox Shorts Goldmine (Full Strategy)",
        hook: "While everyone is fighting over Escape Tsunami content, Troll Tower and Kick a Lucky Block are wide open. I analyzed the top 50 viral Shorts from both games — here are the exact content angles, hook formulas, and posting windows that are working right now",
        cta: "Subscribe for weekly Roblox game trend reports — I'll tell you which game to pivot to before the next wave",
        bestTime: "Thursday 5 PM", duration: "18-22 min",
        robloxGame: "Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Grow",
        gapExploited: "Game-Specific Trend Analysis",
        hookFormula: "Anti-Hype / Controversy Hook"
      },
      {
        ideaNumber: 3,
        title: "30-Day Roblox Shorts Challenge: Week 3 Full Breakdown (Real Analytics, Real Revenue)",
        hook: "Week 3 of the 30-day Roblox Shorts challenge — here are the real view counts, subscriber gains, revenue numbers, and the one game pivot that changed everything. Plus: the consistency system that kept me posting when I wanted to quit",
        cta: "Subscribe to follow the full challenge. Comment your own Week 3 numbers — let's compare",
        bestTime: "Sunday 10 AM", duration: "22-28 min",
        robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series + Consistency & Systems Content",
        hookFormula: "Income Proof Hook + Challenge / Copy"
      }
    ]
  },
  {
    week: 4,
    weekTheme: "Full Monetization Stack, Community Building & 30-Day Finale",
    ideas: [
      {
        ideaNumber: 1,
        title: "The Full Roblox Shorts Monetization Stack: 6 Income Streams Nobody Is Teaching (With Real Numbers)",
        hook: "Romayroh makes $46,800/month from a Skool community. Ventura has a Whop program. Fabiojit has 800 Discord members. Chris Barrera does high-ticket coaching. None of them teach the FULL monetization stack — I'm doing it here with real numbers from each stream",
        cta: "Comment which monetization stream you want a dedicated video on — I'll build the series around your answers",
        bestTime: "Tuesday 9 AM", duration: "25-35 min",
        robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "Monetization Beyond AdSense + Competitor Funnel Analysis",
        hookFormula: "Specific Dollar Amount Hook + Anti-Hype"
      },
      {
        ideaNumber: 2,
        title: "How to Build a Roblox Shorts Community That Makes $46,800/Month (The Romayroh Model, Roblox Edition)",
        hook: "Romayroh has 1,300 members at $36/month = $46,800 MRR from a gaming Shorts community. James Rasp's MotionFarm has 47 members. There is NO dominant Roblox Shorts community — here's the exact model to build the one that wins",
        cta: "Comment 'COMMUNITY' to get early access to the Roblox Shorts community I'm building right now",
        bestTime: "Thursday 5 PM", duration: "20-28 min",
        robloxGame: "General Roblox", audience: "Both", pillar: "Monetize",
        gapExploited: "No Dominant Roblox Shorts Community (Critical Gap)",
        hookFormula: "Specific Dollar Amount Hook"
      },
      {
        ideaNumber: 3,
        title: "30 Days of Roblox Shorts: The Complete Case Study (Every Number, Every Mistake, What's Next)",
        hook: "Fabiojit's 'I Went Pro in 10 Days' got 1.6M views. Money Groot's 'How to Grow Your Roblox Channel FAST' got 506K views with ZERO monetized funnel. I did the Roblox Shorts version of both — and I'm showing you everything: views, subscribers, revenue, mistakes, and the Month 2 plan",
        cta: "If this 30-day series helped you, share it with one creator. And if you want to build your Roblox Shorts channel with a community behind you — comment 'IN' and I'll send you the details",
        bestTime: "Sunday 10 AM", duration: "30-40 min",
        robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block", audience: "Both", pillar: "Case Study",
        gapExploited: "Ongoing Case Study Series + No Dominant Community",
        hookFormula: "Challenge / Copy Hook + Specific Dollar Amount"
      }
    ]
  }
];
