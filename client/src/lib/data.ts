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
// Week 1 Script Briefs — 21 Shorts (Days 1-7, 3 per day) + 3 Long-Form
// Key: "S-{day}-{ideaNumber}" for Shorts, "LF-1-{ideaNumber}" for Long-Form Week 1

export interface ScriptOutlinePoint {
  timestamp?: string; // e.g. "0:00–0:03" for Shorts
  beat: string;
  notes: string;
}

export interface ScriptBrief {
  id: string; // e.g. "S-1-1", "LF-1-1"
  title: string;
  format: "Short" | "Long-Form";
  hooks: { label: string; text: string; formula: string; inspiredBy?: string }[];
  outline: ScriptOutlinePoint[];
  cta: { text: string; type: string; notes: string };
  proTip?: string;
}

export const week1Scripts: ScriptBrief[] = [

  // ═══════════════════════════════════════════════════════════════
  // DAY 1 — "The Competitor Gap Reveal"
  // ═══════════════════════════════════════════════════════════════

  // S-1-1: "I Studied Every Roblox Shorts Educator — Here Are the 8 Things NONE of Them Teach"
  {
    id: "S-1-1",
    title: "I Studied Every Roblox Shorts Educator — Here Are the 8 Things NONE of Them Teach",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Authority Reveal",
        text: "I watched every single Roblox Shorts tutorial on YouTube — Ventura, Ryvahn, Syrax, Money Groot — and found 8 things NONE of them teach.",
        formula: "Expertise/Authority Hook",
        inspiredBy: "Jake Thomas (Creator Hooks) — 5.9x avg view multiplier"
      },
      {
        label: "Hook B — The Controversy Open",
        text: "Every Roblox Shorts educator is teaching you the same 3 things. Here's what they're ALL leaving out.",
        formula: "Anti-Hype / Controversy Hook",
        inspiredBy: "Ryvahn 141K-view model"
      },
      {
        label: "Hook C — The Specific Number",
        text: "8 gaps. 9 competitors. Zero of them cover this. Here's what the entire Roblox Shorts education space is missing.",
        formula: "Specific Number Hook",
        inspiredBy: "Ventura 124K-view model"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook delivery", notes: "Say Hook A or B directly to camera or as text overlay on Roblox gameplay. No intro, no 'hey guys'." },
      { timestamp: "0:03–0:08", beat: "Credibility flash", notes: "Show a quick montage or screenshot: '9 competitors analyzed, 100+ videos watched.' Builds authority fast." },
      { timestamp: "0:08–0:25", beat: "The 3 biggest gaps (tease)", notes: "Rapid-fire list: Gap #1 — Nobody teaches Shorts ABOUT making Shorts. Gap #2 — Zero content for established YouTubers. Gap #3 — No game-specific trend analysis. Show text on screen as you say each one." },
      { timestamp: "0:25–0:40", beat: "The payoff", notes: "\"I'm building a channel that fills every single one of these gaps. Here's gap #1 in detail...\" — pick ONE gap and give a 10-second actionable tip." },
      { timestamp: "0:40–0:55", beat: "CTA", notes: "\"Follow — I'm covering all 8 gaps this week. Gap #2 drops tomorrow.\" Create a series hook to drive follows." }
    ],
    cta: {
      text: "Follow — I'm covering all 8 gaps this week. Drop a comment if you've noticed these gaps too.",
      type: "Follow + Series Hook",
      notes: "This is Day 1 — the goal is follows, not link clicks. Make the series feel unmissable."
    },
    proTip: "Film this as a talking-head Short with Roblox gameplay in the background. The contrast of 'strategy talk' over gameplay is the visual hook."
  },

  // S-1-2: "Why Every Roblox Shorts Tutorial Is Teaching You the WRONG Strategy"
  {
    id: "S-1-2",
    title: "Why Every Roblox Shorts Tutorial Is Teaching You the WRONG Strategy",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Contrarian Open",
        text: "Every Roblox Shorts tutorial is teaching you the wrong strategy. Here's what actually works.",
        formula: "Anti-Hype / Controversy Hook",
        inspiredBy: "Ryvahn 141K model"
      },
      {
        label: "Hook B — The Pain Point",
        text: "You followed every Roblox Shorts tutorial. You're still stuck at 100 views. Here's why — and it's not your fault.",
        formula: "Pain Point Escape Hook",
        inspiredBy: "Ryvahn 141K-view model"
      },
      {
        label: "Hook C — The Escape Tsunami Tie-In",
        text: "Escape Tsunami is the #1 Roblox game right now. But the tutorials teaching you how to make Shorts about it are all wrong. Here's the real method.",
        formula: "Trending Game + Controversy Hook",
        inspiredBy: "Game-specific trend angle — untapped gap"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook A or B. If using Hook C, show Escape Tsunami gameplay immediately." },
      { timestamp: "0:03–0:12", beat: "The wrong advice", notes: "\"Most tutorials tell you to: post daily, use trending sounds, add captions. That's all surface-level.\" Show a quick clip of a generic tutorial thumbnail for visual contrast." },
      { timestamp: "0:12–0:30", beat: "The real problem", notes: "\"The real issue is hook architecture. The first 3 seconds of your Short determines whether the algorithm pushes it or buries it. Here's the 3-second rule nobody talks about.\"" },
      { timestamp: "0:30–0:45", beat: "The fix (actionable)", notes: "Give ONE specific fix: \"Your first frame needs a visual pattern interrupt — something the viewer hasn't seen in the last 5 Shorts they watched. For Roblox, that means [specific example with Escape Tsunami].\"" },
      { timestamp: "0:45–0:57", beat: "CTA", notes: "\"Tomorrow I'm showing the exact hook formula that got Syrax 255K views. Follow so you don't miss it.\"" }
    ],
    cta: {
      text: "Tomorrow I'm showing the exact hook formula that got Syrax 255K views. Follow so you don't miss it.",
      type: "Series Teaser + Follow",
      notes: "Reference a real competitor's view count to make the promise feel credible and specific."
    },
    proTip: "Use Escape Tsunami gameplay as the background — it's trending and immediately signals relevance to the Roblox audience."
  },

  // S-1-3: "The Roblox Shorts Niche Has 8 Untapped Content Gaps — Here's #1"
  {
    id: "S-1-3",
    title: "The Roblox Shorts Niche Has 8 Untapped Content Gaps — Here's #1",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Scarcity Open",
        text: "There are 8 content gaps in the Roblox Shorts niche that nobody is filling. I'm starting with the biggest one.",
        formula: "Scarcity / Opportunity Hook",
        inspiredBy: "Competitive gap analysis angle"
      },
      {
        label: "Hook B — The Established Creator Angle",
        text: "If you already have a YouTube channel, you have a massive advantage in Roblox Shorts that nobody is talking about.",
        formula: "Expertise/Authority Hook — Established Creator Angle",
        inspiredBy: "Critical Gap #2 — Zero content for established YouTubers"
      },
      {
        label: "Hook C — The Direct Challenge",
        text: "I'm going to show you the #1 untapped gap in Roblox Shorts content. If you move on this in the next 30 days, you'll have zero competition.",
        formula: "Challenge / Copy Hook",
        inspiredBy: "moneyboymax 189K model"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook A or C. Use text overlay: '8 GAPS. NOBODY IS FILLING THEM.' on Roblox gameplay." },
      { timestamp: "0:03–0:15", beat: "Context setup", notes: "\"I analyzed every Roblox Shorts educator — 9 channels, 100+ videos. They all teach the same 3 things. Here's what they're all missing.\"" },
      { timestamp: "0:15–0:40", beat: "Gap #1 reveal", notes: "\"Gap #1: Shorts ABOUT making Shorts. Every competitor makes long-form tutorials. Nobody is making 60-second Shorts that teach Shorts strategy. That's a wide-open lane.\" Show a quick visual of the gap — e.g., a search results page with no Short-format tutorials." },
      { timestamp: "0:40–0:52", beat: "The opportunity", notes: "\"The creator who fills this gap first will own the niche. I'm doing it — and I'm documenting the whole thing.\"" },
      { timestamp: "0:52–0:58", beat: "CTA", notes: "\"Follow — Gap #2 drops tomorrow. All 8 gaps this week.\"" }
    ],
    cta: {
      text: "Follow — I'm revealing all 8 gaps this week. Gap #2 drops tomorrow at 12 PM.",
      type: "Series Follow Hook",
      notes: "Giving a specific time ('12 PM') increases follow-through. Creates appointment viewing."
    },
    proTip: "This is a great 'series launcher' Short. Pin it to your channel when you post it — it sets the narrative for everything that follows."
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 2 — "Hook Formula Breakdown"
  // ═══════════════════════════════════════════════════════════════

  // S-2-1: "The Hook That Got Syrax 255K Views on Roblox Shorts"
  {
    id: "S-2-1",
    title: "The Hook That Got Syrax 255K Views on Roblox Shorts",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Case Study Open",
        text: "Syrax got 255K views on a single Roblox Shorts video. I broke down the exact hook formula he used — and it works for any game.",
        formula: "Case Study / Social Proof Hook",
        inspiredBy: "Syrax @Syrax — 255K views on 'How I Actually Make Viral Roblox AI Shorts'"
      },
      {
        label: "Hook B — The Copy Invitation",
        text: "This is the exact hook formula Syrax used to get 255K views. You can copy it word for word for your Roblox Shorts.",
        formula: "Challenge / Copy Hook",
        inspiredBy: "moneyboymax 189K model"
      },
      {
        label: "Hook C — The Breakdown Tease",
        text: "I'm breaking down the #1 performing hook in Roblox Shorts history. 255K views. Here's every element.",
        formula: "Expertise/Authority Hook",
        inspiredBy: "Jake Thomas (Creator Hooks) — 5.9x avg view multiplier"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Say the hook while showing Syrax's video thumbnail or a recreation of it. The visual proof makes the claim credible instantly." },
      { timestamp: "0:03–0:15", beat: "The hook anatomy", notes: "\"Syrax's hook: 'How I Actually Make Viral Roblox AI Shorts In 5 Minutes.' Break it down: 'Actually' = authenticity signal. 'In 5 Minutes' = time efficiency. 'AI' = curiosity trigger. Three elements, one sentence.\"" },
      { timestamp: "0:15–0:35", beat: "The formula", notes: "\"The formula: [How I/You Can] + [Specific Result] + [Roblox Game] + [Time/Effort Qualifier]. Example for Escape Tsunami: 'How I Actually Make Viral Escape Tsunami Shorts In 3 Minutes.'\"" },
      { timestamp: "0:35–0:50", beat: "Your turn", notes: "\"Now write your version. Pick your game, pick your result, add a time qualifier. That's it. This formula has 6 examples with 100K+ views.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Drop your hook in the comments — I'll tell you if it works.\"" }
    ],
    cta: {
      text: "Drop your hook in the comments — I'll personally tell you if it works.",
      type: "Engagement CTA (Comment)",
      notes: "Asking for comments with a personal reply promise drives massive engagement and signals to the algorithm."
    },
    proTip: "Show the actual formula as text on screen while you explain it. Viewers screenshot formulas — that's a save, which is a strong engagement signal."
  },

  // S-2-2: "How Ventura's $10K Screenshot Thumbnail Gets 124K Views Every Time"
  {
    id: "S-2-2",
    title: "How Ventura's $10K Screenshot Thumbnail Gets 124K Views Every Time",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Income Proof Open",
        text: "Ventura shows a $10,000 screenshot in every thumbnail. That one decision is responsible for 124K views. Here's the psychology behind it.",
        formula: "Income Proof Hook",
        inspiredBy: "Ventura @Ventura419 — 124K views, $10K screenshot thumbnail formula"
      },
      {
        label: "Hook B — The Reverse Engineering",
        text: "I reverse-engineered why Ventura's thumbnails get 124K views while everyone else gets 2K. It comes down to one psychological trigger.",
        formula: "Anti-Hype / Controversy Hook",
        inspiredBy: "Romayroh 42K model"
      },
      {
        label: "Hook C — The Direct Teach",
        text: "The income proof thumbnail formula: show a real number, make it specific, put it in the first frame. Ventura used this to get 124K views. Here's how to do it.",
        formula: "Challenge / Copy Hook",
        inspiredBy: "James Rasp MotionFarm model"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with a recreation of Ventura's thumbnail style — show a '$10,000' screenshot. The visual does the work." },
      { timestamp: "0:03–0:15", beat: "The psychology", notes: "\"Income proof thumbnails work because they trigger two things simultaneously: aspiration (I want that) and curiosity (how?). The specific number ($10,247 beats $10K) makes it feel real, not fabricated.\"" },
      { timestamp: "0:15–0:35", beat: "The formula breakdown", notes: "\"Ventura's formula: Real screenshot + specific number + 'per month' qualifier + your face showing reaction. For Roblox gaming channels: show your YouTube Studio revenue, your Whop earnings, or your brand deal invoice.\"" },
      { timestamp: "0:35–0:50", beat: "Application", notes: "\"You don't need $10K to use this formula. Even '$347 from Roblox Shorts in 30 days' is compelling if it's real. Specificity is the key.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Follow — tomorrow I'm showing the exact thumbnail template I use for Roblox Shorts.\"" }
    ],
    cta: {
      text: "Follow — tomorrow I'm showing the exact thumbnail template. Save this for when you're ready to monetize.",
      type: "Follow + Save",
      notes: "Asking for a save signals high-value content to the algorithm. Use it when the content is reference-worthy."
    },
    proTip: "You don't need to show YOUR income to use this format. You can analyze a competitor's income proof as the content itself — which is exactly what this Short does."
  },

  // S-2-3: "Fabiojit Got 1.6M Views With This One Hook Formula — Here It Is"
  {
    id: "S-2-3",
    title: "Fabiojit Got 1.6M Views With This One Hook Formula — Here It Is",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Outlier Reveal",
        text: "Fabiojit got 1.6 million views on a single video. I found the exact hook formula he used — and it works for Roblox Shorts.",
        formula: "Income Proof / Outlier Hook",
        inspiredBy: "Fabiojit @fabiojit — 1.6M views on 'I Went Pro in 10 Days'"
      },
      {
        label: "Hook B — The Challenge Frame",
        text: "'I went pro in 10 days.' That's the hook that got 1.6M views. Here's how to write the Roblox Shorts version of this exact formula.",
        formula: "Challenge / Copy Hook",
        inspiredBy: "Fabiojit 1.6M model — direct quote"
      },
      {
        label: "Hook C — The Breakdown",
        text: "1.6 million views. One hook. I'm breaking it down in 60 seconds so you can use it today.",
        formula: "Specific Number + Time Efficiency Hook",
        inspiredBy: "Syrax 255K + Fabiojit 1.6M combined"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Flash '1,600,000 VIEWS' as text on screen while saying Hook A. The number is the visual hook." },
      { timestamp: "0:03–0:15", beat: "The formula name", notes: "\"Fabiojit's formula is called the 'Transformation in a Compressed Timeline' hook. 'I went pro in 10 days' = transformation (went pro) + compressed timeline (10 days). That's it.\"" },
      { timestamp: "0:15–0:35", beat: "Roblox application", notes: "\"For Roblox Shorts, the formula becomes: 'I [transformation] in [compressed timeline] playing [game].' Examples: 'I hit 10K subs in 30 days making Escape Tsunami Shorts.' 'I went from 0 to monetized in 21 days on Roblox.'\"" },
      { timestamp: "0:35–0:50", beat: "Why it works", notes: "\"This formula works because it answers the viewer's #1 question before they even ask it: 'How long will this take me?' A compressed timeline makes the goal feel achievable.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Write your version in the comments. I'll tell you if the timeline is believable.\"" }
    ],
    cta: {
      text: "Write your Roblox version of this hook in the comments. I'll tell you if the timeline is believable.",
      type: "Comment Engagement CTA",
      notes: "This drives high-quality comments (actual hook attempts) which signals strong engagement to the algorithm."
    },
    proTip: "Reference Fabiojit by name and link to his video in the description. Crediting sources builds trust and often results in the original creator sharing your content."
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 3 — "Established Creator Angle"
  // ═══════════════════════════════════════════════════════════════

  // S-3-1: "You Already Have a YouTube Channel — Here's Why You're Winning at Roblox Shorts Without Knowing It"
  {
    id: "S-3-1",
    title: "You Already Have a YouTube Channel — Here's Why You're Winning at Roblox Shorts Without Knowing It",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Advantage Reveal",
        text: "If you already have a YouTube channel, you have a massive unfair advantage in Roblox Shorts that nobody is talking about.",
        formula: "Expertise/Authority Hook — Established Creator Gap",
        inspiredBy: "Critical Gap #2 — Zero competitors targeting established YouTubers"
      },
      {
        label: "Hook B — The Reframe",
        text: "Every Roblox Shorts tutorial is made for beginners. If you already have subscribers, you're being given the wrong advice.",
        formula: "Anti-Hype / Controversy Hook",
        inspiredBy: "Ryvahn 141K model"
      },
      {
        label: "Hook C — The Direct Statement",
        text: "Established YouTubers who add Roblox Shorts grow 3x faster than new creators. Here's the exact reason why.",
        formula: "Data Authority Hook",
        inspiredBy: "Nate Black — studied 35B Shorts views"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook A or C. Show a YouTube analytics dashboard in the background — signals 'this is for people who already have a channel.'" },
      { timestamp: "0:03–0:15", beat: "The 3 advantages", notes: "\"If you have an existing channel, you have: 1) An existing audience to seed your first 1,000 views. 2) Existing content to repurpose into Shorts. 3) Existing credibility that new creators spend months building.\"" },
      { timestamp: "0:15–0:35", beat: "The repurposing angle", notes: "\"Your existing long-form Roblox videos are a Shorts library you haven't touched. A 15-minute video has 8-12 Short-worthy clips in it. I'll show you the exact timestamps to look for.\"" },
      { timestamp: "0:35–0:50", beat: "The seeding strategy", notes: "\"Post your first 3 Roblox Shorts and pin a community post telling your existing audience. That first 1,000 engaged views is what tells the algorithm to push your Short to new viewers.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Follow — tomorrow I'm showing the exact repurposing workflow for established YouTubers. It takes 20 minutes per video.\"" }
    ],
    cta: {
      text: "Follow — tomorrow I'm showing the exact repurposing workflow. Drop your subscriber count below — I want to know where you're starting from.",
      type: "Follow + Community Building",
      notes: "Asking for subscriber counts creates community data and makes established creators feel seen and targeted."
    },
    proTip: "This Short should feel like it's speaking directly to someone with 10K–500K subscribers. The language should be 'you already have X' not 'when you eventually have X.'"
  },

  // S-3-2: "How to Repurpose Your Existing Roblox Videos Into 10 Shorts in 1 Hour"
  {
    id: "S-3-2",
    title: "How to Repurpose Your Existing Roblox Videos Into 10 Shorts in 1 Hour",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Time Efficiency",
        text: "Your existing Roblox videos are worth 10 Shorts each. Here's how to extract them in under an hour.",
        formula: "Time Efficiency Hook",
        inspiredBy: "Syrax 255K model — '5 Minutes' qualifier"
      },
      {
        label: "Hook B — The Specific Number",
        text: "I turned one 20-minute Roblox video into 11 Shorts in 47 minutes. Here's the exact workflow.",
        formula: "Specific Number + Time Efficiency Hook",
        inspiredBy: "Fabiojit 1.6M model — compressed timeline"
      },
      {
        label: "Hook C — The Waste Frame",
        text: "Every Roblox video you've posted is a Shorts library you haven't opened yet. Here's how to unlock it.",
        formula: "Pain Point Escape Hook",
        inspiredBy: "Ryvahn 141K model"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook B — the specific number makes it immediately credible. Show a YouTube Studio screen with multiple videos." },
      { timestamp: "0:03–0:15", beat: "The 3 clip types to look for", notes: "\"In every Roblox video, look for: 1) Reaction moments (your face when something unexpected happens). 2) Tutorial segments (any time you explain 'how to do X'). 3) Highlight clips (your best gameplay moments). These are your Shorts.\"" },
      { timestamp: "0:15–0:35", beat: "The workflow", notes: "\"Step 1: Open your video in CapCut. Step 2: Use the 'Scene Detection' feature to auto-identify natural cut points. Step 3: Export each clip as a vertical Short with captions. That's the 47-minute workflow.\"" },
      { timestamp: "0:35–0:50", beat: "The hook addition", notes: "\"The one extra step: add a 3-second hook at the start of each clip. Take the most interesting moment and put it FIRST. Then cut back to the beginning. This is called the 'cold open' technique.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Comment 'REPURPOSE' and I'll send you the free CapCut template I use for this workflow.\"" }
    ],
    cta: {
      text: "Comment 'REPURPOSE' and I'll send you the free CapCut template I use for this exact workflow.",
      type: "Keyword Comment CTA",
      notes: "Keyword comments are easy to track and create a sense of exclusive access. Great for building a DM list."
    },
    proTip: "Screen record the actual CapCut workflow as your B-roll. Showing the tool in action is more convincing than describing it."
  },

  // S-3-3: "The Roblox Shorts Strategy for Creators Who Already Have 10K+ Subscribers"
  {
    id: "S-3-3",
    title: "The Roblox Shorts Strategy for Creators Who Already Have 10K+ Subscribers",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Targeted Open",
        text: "If you have 10,000 subscribers or more, your Roblox Shorts strategy is completely different from a new creator's. Here's what changes.",
        formula: "Expertise/Authority Hook — Established Creator Gap",
        inspiredBy: "Critical Gap #2 — Zero competitors targeting established YouTubers"
      },
      {
        label: "Hook B — The Warning",
        text: "Warning: if you have 10K+ subscribers and you're following beginner Roblox Shorts advice, you're leaving views on the table.",
        formula: "Pain Point Escape Hook",
        inspiredBy: "Ryvahn 141K model"
      },
      {
        label: "Hook C — The Exclusive Frame",
        text: "This strategy only works if you already have an audience. If you're starting from zero, skip this one.",
        formula: "Exclusivity / Scarcity Hook",
        inspiredBy: "Competitive gap — no one targets established creators"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook C — the exclusivity frame immediately makes established creators stop scrolling. It signals 'this is for you specifically.'" },
      { timestamp: "0:03–0:15", beat: "The 3 differences", notes: "\"Established creators: 1) Don't need to build from zero — announce your Shorts channel to existing subscribers first. 2) Can use your existing brand to get brand deals faster. 3) Should post Shorts that drive traffic to your long-form, not compete with it.\"" },
      { timestamp: "0:15–0:35", beat: "The announcement strategy", notes: "\"Post a community update to your existing subscribers: 'I'm starting a Roblox Shorts series — here's why.' Pin it. This seeds your first 500-1,000 engaged views, which is the algorithm signal that pushes your Short to new audiences.\"" },
      { timestamp: "0:35–0:50", beat: "The content bridge", notes: "\"Every Short should end with: 'Full tutorial on my channel.' This turns Shorts viewers into long-form subscribers — the highest-value audience on YouTube.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Follow — I'm building the complete established creator Roblox Shorts playbook this week. Drop your sub count below.\"" }
    ],
    cta: {
      text: "Follow — I'm building the complete established creator Roblox Shorts playbook this week. Drop your sub count below.",
      type: "Follow + Community Data",
      notes: "Collecting sub counts in comments creates social proof (other established creators commenting) and community signal."
    },
    proTip: "This Short is a positioning play — it signals to your audience that you understand the nuance between beginner and established creator strategy. That differentiation is your competitive moat."
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 4 — "Roblox Game Trend Report"
  // ═══════════════════════════════════════════════════════════════

  // S-4-1: "Escape Tsunami Is the #1 Roblox Game Right Now — Here's the Exact Shorts Format Going Viral"
  {
    id: "S-4-1",
    title: "Escape Tsunami Is the #1 Roblox Game Right Now — Here's the Exact Shorts Format Going Viral",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Trend Alert",
        text: "Escape Tsunami is the #1 Roblox game right now. The Shorts window is open for the next 30 days. Here's the exact format going viral.",
        formula: "Trending Game + Time Scarcity Hook",
        inspiredBy: "Game-Specific Trend Analysis gap — nobody does this"
      },
      {
        label: "Hook B — The Data Open",
        text: "Escape Tsunami hit #1 on Roblox in February 2026. Creators making Shorts about it are getting 10x their normal views. Here's why.",
        formula: "Data Authority Hook",
        inspiredBy: "Nate Black — data-driven Shorts research"
      },
      {
        label: "Hook C — The FOMO Frame",
        text: "The Escape Tsunami Shorts wave is happening right now. Creators who move this week will own the niche. Here's the format.",
        formula: "Scarcity / FOMO Hook",
        inspiredBy: "Competitive gap — no game-specific trend analysis in the space"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with actual Escape Tsunami gameplay — the most visually striking moment you can find. Say Hook A over the gameplay." },
      { timestamp: "0:03–0:15", beat: "Why this game works for Shorts", notes: "\"Escape Tsunami works for Shorts because: 1) The gameplay loop is 30-90 seconds — perfect Short length. 2) The 'survival' mechanic creates natural tension and resolution. 3) It's trending, so the algorithm is already pushing Roblox content.\"" },
      { timestamp: "0:15–0:35", beat: "The 3 formats going viral", notes: "\"Format 1: Speed run (can you beat it in under 60 seconds?). Format 2: Fail compilation (show every death before the win). Format 3: Challenge variant ('I tried to escape with only jumping').\"" },
      { timestamp: "0:35–0:50", beat: "The hook template", notes: "\"Your hook template: 'I [challenge] in Escape Tsunami — here's what happened.' That's it. The game's name in the first 3 seconds is your keyword signal to the algorithm.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Follow — I'm posting a full Escape Tsunami Shorts strategy breakdown tomorrow. The window closes in 30 days.\"" }
    ],
    cta: {
      text: "Follow — I'm posting the full Escape Tsunami Shorts strategy tomorrow. The window closes in 30 days.",
      type: "Urgency + Follow",
      notes: "The '30 days' urgency is real — trending game windows typically last 4-8 weeks. This is honest and compelling."
    },
    proTip: "Film this Short WHILE playing Escape Tsunami. The live gameplay makes the trend feel immediate and real."
  },

  // S-4-2: "99 Nights in the Forest Is Generating 759K Views Per Short — Here's Why"
  {
    id: "S-4-2",
    title: "99 Nights in the Forest Is Generating 759K Views Per Short — Here's Why",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The View Count Reveal",
        text: "99 Nights in the Forest is generating 759,000 views per Short for some creators. Here's exactly why this game is a Shorts goldmine.",
        formula: "Specific Number + Data Authority Hook",
        inspiredBy: "Rirusha Roblox — 759K views on 99 Nights content"
      },
      {
        label: "Hook B — The Survival Horror Angle",
        text: "Survival horror Roblox content is the highest-performing Short format right now. 99 Nights in the Forest is the proof.",
        formula: "Data Authority Hook",
        inspiredBy: "Game-Specific Trend Analysis gap"
      },
      {
        label: "Hook C — The Comparison",
        text: "Escape Tsunami gets all the attention. But 99 Nights in the Forest is quietly generating more views per Short. Here's why.",
        formula: "Anti-Hype / Controversy Hook",
        inspiredBy: "Ryvahn 141K model — contrarian angle"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with the most atmospheric 99 Nights in the Forest clip you can find — dark, tense, survival horror aesthetic. Say Hook A." },
      { timestamp: "0:03–0:15", beat: "Why survival horror works for Shorts", notes: "\"Survival horror games work for Shorts because they create a natural emotional arc in 60 seconds: fear → tension → resolution. That arc is what drives replays — and replays are the #1 signal for the Shorts algorithm.\"" },
      { timestamp: "0:15–0:35", beat: "The 3 content angles", notes: "\"Angle 1: Night-by-night survival countdown ('Can I survive Night 50?'). Angle 2: Horror reaction (genuine reactions to jump scares). Angle 3: Strategy guide ('The one thing that keeps you alive past Night 10').\"" },
      { timestamp: "0:35–0:50", beat: "The replay loop", notes: "\"The key to 759K views: end your Short at the moment of maximum tension. Don't resolve it. The viewer replays to see if you survive — and every replay counts as a new view.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Save this — the 99 Nights window is open right now. I'll post the full content calendar for this game tomorrow.\"" }
    ],
    cta: {
      text: "Save this — the 99 Nights window is open right now. Comment '99' and I'll send you the content calendar for this game.",
      type: "Save + Keyword Comment",
      notes: "Saves signal high-value content. The keyword comment creates a trackable engagement action."
    },
    proTip: "The 'unresolved ending' technique is the single most powerful replay driver in Shorts. Test it on your next 3 Shorts and watch your view duration metrics change."
  },

  // S-4-3: "Troll Tower vs. Kick a Lucky Block — Which Roblox Game Is Better for Shorts Right Now?"
  {
    id: "S-4-3",
    title: "Troll Tower vs. Kick a Lucky Block — Which Roblox Game Is Better for Shorts Right Now?",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Versus Frame",
        text: "Troll Tower vs. Kick a Lucky Block — which Roblox game is better for Shorts right now? I analyzed both. Here's the answer.",
        formula: "Comparison / Versus Hook",
        inspiredBy: "KreekCraft — 'Ranking every Roblox game' format"
      },
      {
        label: "Hook B — The Underrated Angle",
        text: "While everyone is making Escape Tsunami Shorts, Troll Tower and Kick a Lucky Block are wide open. Here's which one to pick.",
        formula: "Anti-Hype / Controversy Hook",
        inspiredBy: "Competitive gap — game-specific trend analysis"
      },
      {
        label: "Hook C — The Decision Helper",
        text: "You have 2 hours to make a Roblox Short. Troll Tower or Kick a Lucky Block? Here's which one to choose based on your channel size.",
        formula: "Time Efficiency + Specific Scenario Hook",
        inspiredBy: "Syrax 255K model — practical decision framing"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with a split-screen: Troll Tower gameplay on the left, Kick a Lucky Block on the right. Say Hook A." },
      { timestamp: "0:03–0:15", beat: "The comparison criteria", notes: "\"I'm judging both games on 3 things: 1) Content variety (how many different Short formats can you make?). 2) Competition level (how many creators are already in this space?). 3) Trend trajectory (is it growing or declining?).\"" },
      { timestamp: "0:15–0:35", beat: "The verdict", notes: "\"Troll Tower wins on content variety — reaction content, clutch moments, 'destroying trolls' format. Kick a Lucky Block wins on trend trajectory — it's surging in May 2026 with almost no competition. My recommendation: start with Kick a Lucky Block, add Troll Tower in Week 2.\"" },
      { timestamp: "0:35–0:50", beat: "The content angle for each", notes: "\"Kick a Lucky Block hook: 'I kicked 100 Lucky Blocks and got [rare item].' Troll Tower hook: 'I destroyed every troll in Troll Tower — here's how.' Both follow the challenge format that's proven to go viral.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Comment which game you're going with — Troll Tower or Kick a Lucky Block. I'll tell you the best hook for your choice.\"" }
    ],
    cta: {
      text: "Comment which game you're going with — Troll Tower or Kick a Lucky Block. I'll give you the best hook for your choice.",
      type: "Binary Choice Comment CTA",
      notes: "Binary choice CTAs drive extremely high comment rates because they're low-effort to respond to. Great for algorithm signals."
    },
    proTip: "This 'versus' format is one of the most repeatable content formats in the space. You can do this comparison for any two trending games every month."
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 5 — "Pain Point Escape"
  // ═══════════════════════════════════════════════════════════════

  // S-5-1: "Your Roblox Shorts Are Stuck in 'View Jail' — Here's the 3-Second Fix"
  {
    id: "S-5-1",
    title: "Your Roblox Shorts Are Stuck in 'View Jail' — Here's the 3-Second Fix",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Problem Name",
        text: "Your Roblox Shorts are stuck in 'view jail.' Here's the 3-second fix that gets you out.",
        formula: "Pain Point Escape Hook — Named Problem",
        inspiredBy: "Ryvahn 141K-view model — view jail concept"
      },
      {
        label: "Hook B — The Diagnosis",
        text: "If your Roblox Shorts are getting 50-200 views and then stopping, you're in view jail. Here's exactly why — and how to escape.",
        formula: "Pain Point Escape Hook — Diagnosis",
        inspiredBy: "Ryvahn 141K model"
      },
      {
        label: "Hook C — The Escape Tsunami Tie-In",
        text: "I made 10 Escape Tsunami Shorts. 8 got stuck at 100 views. 2 hit 50K. Here's the only difference between them.",
        formula: "Case Study + Pain Point Hook",
        inspiredBy: "Fabiojit 1.6M model — personal case study"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook A or B. If using Hook C, show a YouTube Analytics graph with two spikes and eight flat lines." },
      { timestamp: "0:03–0:15", beat: "What view jail is", notes: "\"View jail happens when the algorithm shows your Short to your first 200 viewers and they don't engage enough. The algorithm stops pushing it. You're stuck. The fix is in the first 3 seconds.\"" },
      { timestamp: "0:15–0:35", beat: "The 3-second rule", notes: "\"Your first 3 seconds need to do one thing: make the viewer feel like they'll miss something important if they swipe away. The formula: [Unexpected visual] + [Specific promise] + [Implied consequence]. Example for Escape Tsunami: Show the tsunami wave coming, say 'This one trick is the only reason I survived' — the viewer HAS to see if you make it.\"" },
      { timestamp: "0:35–0:50", beat: "The fix in practice", notes: "\"Go back to your last 3 Roblox Shorts. Watch the first 3 seconds. Ask: 'Would I swipe away?' If yes — re-film the opening. That's the only edit you need.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Comment 'JAIL' and I'll audit your last Short for free. I'll tell you exactly what to change in the first 3 seconds.\"" }
    ],
    cta: {
      text: "Comment 'JAIL' and I'll audit your last Short for free — I'll tell you exactly what to change in the first 3 seconds.",
      type: "Free Audit CTA",
      notes: "Free audit CTAs drive massive comment engagement and position you as the expert. This is also a lead generation tool for your consulting business."
    },
    proTip: "The 'view jail audit' format is a great recurring content series — 'I audited 10 Roblox Shorts channels. Here's what they all got wrong.' This is the Ryvahn 141K model applied to your niche."
  },

  // S-5-2: "Why Your Roblox Shorts Are Getting 50 Views (And the 3-Second Fix)"
  {
    id: "S-5-2",
    title: "Why Your Roblox Shorts Are Getting 50 Views (And the 3-Second Fix)",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Direct Diagnosis",
        text: "If your Roblox Shorts are stuck at 50 views, it's almost always the first 3 seconds. Here's exactly what to change.",
        formula: "Pain Point Escape Hook",
        inspiredBy: "Ryvahn 141K model"
      },
      {
        label: "Hook B — The Specific Number",
        text: "50 views. That's the number that tells you your hook is broken. Here's the fix — and it takes 30 seconds to implement.",
        formula: "Specific Number + Time Efficiency Hook",
        inspiredBy: "Syrax 255K model"
      },
      {
        label: "Hook C — The Escape Tsunami Example",
        text: "I had an Escape Tsunami Short stuck at 47 views for 3 days. I changed one thing. It hit 12,000 views in 24 hours. Here's what I changed.",
        formula: "Case Study + Before/After Hook",
        inspiredBy: "Hayden Hillier-Smith — before/after editing transformations"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook C if you have a real example. If not, use Hook A. The specific numbers make it feel real." },
      { timestamp: "0:03–0:15", beat: "The 50-view diagnosis", notes: "\"50 views means the algorithm showed your Short to your first batch of viewers and they swiped away too quickly. The algorithm interpreted that as 'this content isn't interesting' and stopped pushing it. The problem is almost always the hook.\"" },
      { timestamp: "0:15–0:35", beat: "The 3-second audit", notes: "\"Watch your Short with the sound off. Does the first frame make you want to keep watching? If not — that's your problem. For Roblox Shorts, your first frame should show: the most dramatic moment of the video, a surprising result, or a visual question that needs answering.\"" },
      { timestamp: "0:35–0:50", beat: "The fix", notes: "\"The fix: re-film your opening 3 seconds. Put the most interesting moment FIRST. Then cut back to the beginning. This is called the 'cold open' — it's used in every viral Short.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Drop your channel in the comments — I'll check your last Short and tell you if the hook is the problem.\"" }
    ],
    cta: {
      text: "Drop your channel in the comments — I'll check your last Short and tell you if the hook is the problem.",
      type: "Channel Audit CTA",
      notes: "This drives high-quality comments and positions you as a personalized expert. Each audit is also a potential consulting lead."
    },
    proTip: "The 'before/after' format (Hook C) is the highest-performing tutorial format according to Hayden Hillier-Smith's research — 3.5x more views than standard tutorials."
  },

  // S-5-3: "The #1 Reason Roblox Shorts Channels Die in Month 2 (It's Not What You Think)"
  {
    id: "S-5-3",
    title: "The #1 Reason Roblox Shorts Channels Die in Month 2 (It's Not What You Think)",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Misdirection",
        text: "The #1 reason Roblox Shorts channels die in month 2 — it's not the algorithm, it's not the game, it's not your editing.",
        formula: "Anti-Hype / Controversy Hook — Misdirection",
        inspiredBy: "Ryvahn 141K model"
      },
      {
        label: "Hook B — The Statistic",
        text: "90% of Roblox Shorts channels quit before month 3. The reason isn't what any tutorial teaches you.",
        formula: "Data Authority + Controversy Hook",
        inspiredBy: "Nate Black — data-driven research"
      },
      {
        label: "Hook C — The Personal Confession",
        text: "I almost quit my Roblox Shorts channel in month 2. Here's the one thing that kept me going — and why it's the only thing that matters.",
        formula: "Personal Story + Pain Point Hook",
        inspiredBy: "Fabiojit 1.6M model — personal journey"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook A — the misdirection creates immediate curiosity. The viewer NEEDS to know what the real reason is." },
      { timestamp: "0:03–0:15", beat: "The real reason", notes: "\"The real reason: no content system. Month 1 is exciting — you have ideas, energy, motivation. Month 2, the motivation drops and you have no system to replace it. Without a system, you stop posting. Without posting, you stop growing.\"" },
      { timestamp: "0:15–0:35", beat: "The 3-part system", notes: "\"The system that prevents month 2 death: 1) Batch recording — film 7 Shorts in one session, not one per day. 2) Content calendar — know what you're making 2 weeks in advance. 3) Game rotation — have 3 games in your rotation so you never run out of content.\"" },
      { timestamp: "0:35–0:50", beat: "The game rotation for Roblox", notes: "\"Your Roblox game rotation: Escape Tsunami (trending), 99 Nights in the Forest (consistent), Kick a Lucky Block (surging). Three games = 90 days of content ideas without repeating yourself.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Follow — tomorrow I'm posting the exact batch recording system that lets you film a week of Shorts in 2 hours.\"" }
    ],
    cta: {
      text: "Follow — tomorrow I'm posting the exact batch recording system. Comment 'SYSTEM' if you want the free content calendar template.",
      type: "Follow + Keyword Comment",
      notes: "Two CTAs in one: the follow drives channel growth, the keyword comment drives engagement signals."
    },
    proTip: "This Short addresses the emotional reality of content creation — not just the tactical. Emotional resonance drives saves and shares more than any tactical tip."
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 6 — "Faceless & Boring Channel Formula"
  // ═══════════════════════════════════════════════════════════════

  // S-6-1: "The BORING Faceless Roblox Shorts Channel Making $5K/Month"
  {
    id: "S-6-1",
    title: "The BORING Faceless Roblox Shorts Channel Making $5K/Month",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Contradiction",
        text: "This faceless Roblox Shorts channel has zero personality, zero face cam, zero editing flair — and makes $5,000 a month. Here's the formula.",
        formula: "Anti-Hype / Controversy Hook — Contradiction",
        inspiredBy: "Romayroh model — faceless channel strategy"
      },
      {
        label: "Hook B — The Income Proof",
        text: "A boring, faceless Roblox Shorts channel is making $5K/month. No face. No voice. No personality. Here's exactly how.",
        formula: "Income Proof Hook",
        inspiredBy: "Ventura 124K model — $10K screenshot"
      },
      {
        label: "Hook C — The Permission Slip",
        text: "You don't need to show your face to make money on Roblox Shorts. Here's the proof — and the exact formula.",
        formula: "Pain Point Escape Hook — Permission Slip",
        inspiredBy: "Chris Barrera — faceless Roblox channel breakdown"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook A or B. Show a faceless Roblox channel's analytics — blurred channel name, visible view counts. The visual proof makes the claim credible." },
      { timestamp: "0:03–0:15", beat: "What 'boring' means", notes: "\"'Boring' means: no face cam, no voice (just text-to-speech or captions), no complex editing. Just Roblox gameplay with AI commentary. The content is the game — not the creator.\"" },
      { timestamp: "0:15–0:35", beat: "The formula", notes: "\"The faceless formula: 1) Pick a trending Roblox game (Escape Tsunami, 99 Nights). 2) Record 10-15 minutes of gameplay. 3) Use AI voiceover (ElevenLabs or CapCut's built-in TTS). 4) Add captions (80% of viral Shorts use them). 5) Post 3x per day. That's the entire system.\"" },
      { timestamp: "0:35–0:50", beat: "The $5K breakdown", notes: "\"The $5K comes from: YouTube RPM ($0.03-$0.08 per view × 10M monthly views = $300-$800) + brand deals ($500-$2K per post) + community/course ($2K-$3K/month). The channel is the top of the funnel — not the income source.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Follow — tomorrow I'm showing the exact AI tools this channel uses. All free.\"" }
    ],
    cta: {
      text: "Follow — tomorrow I'm showing the exact AI tools this channel uses. All free. Comment 'FACELESS' if you want the full setup guide.",
      type: "Follow + Keyword Comment",
      notes: "The 'all free' qualifier removes the barrier to action. The keyword comment creates a trackable lead."
    },
    proTip: "Reference Chris Barrera's '$131,397 Faceless Roblox Channel' case study in the description. Real numbers from a real creator make the claim undeniable."
  },

  // S-6-2: "How to Start a Roblox Shorts Channel With Zero Equipment (Real Example)"
  {
    id: "S-6-2",
    title: "How to Start a Roblox Shorts Channel With Zero Equipment (Real Example)",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Zero Barrier",
        text: "This creator started a Roblox Shorts channel with just a phone and free editing apps — here's exactly what they used to hit 10K subs.",
        formula: "Challenge / Copy Hook — Zero Barrier",
        inspiredBy: "New Creator gap — no barrier-to-entry content"
      },
      {
        label: "Hook B — The Excuse Eliminator",
        text: "You don't need a PC, a microphone, or a ring light to start a Roblox Shorts channel. Here's the proof.",
        formula: "Pain Point Escape Hook — Excuse Eliminator",
        inspiredBy: "Ryvahn 141K model"
      },
      {
        label: "Hook C — The Specific Setup",
        text: "Phone + CapCut + Roblox = a Shorts channel that can hit 10K subscribers. Here's the exact setup in 60 seconds.",
        formula: "Time Efficiency + Specific Setup Hook",
        inspiredBy: "Syrax 255K model — '5 minutes' qualifier"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook C — the specific formula (Phone + CapCut + Roblox) is immediately actionable and memorable." },
      { timestamp: "0:03–0:15", beat: "The equipment list", notes: "\"Everything you need: 1) A phone (any iPhone or Android from the last 4 years). 2) CapCut (free). 3) Roblox (free). 4) A YouTube account (free). Total cost: $0.\"" },
      { timestamp: "0:15–0:35", beat: "The recording workflow", notes: "\"Step 1: Screen record your Roblox gameplay on your phone. Step 2: Open in CapCut — crop to 9:16 vertical. Step 3: Add captions using CapCut's auto-caption feature. Step 4: Add a trending sound. Step 5: Upload. That's the entire workflow.\"" },
      { timestamp: "0:35–0:50", beat: "The real example", notes: "\"[Reference a real creator who started with minimal equipment — e.g., Rirusha Roblox or a similar channel.] They started with a phone, no microphone, free editing. Here's their first video vs. their 100K-view video. The only difference: consistency.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Comment 'SETUP' and I'll send you the free CapCut template I use for Roblox Shorts. Works on any phone.\"" }
    ],
    cta: {
      text: "Comment 'SETUP' and I'll send you the free CapCut template. Works on any phone, zero cost.",
      type: "Keyword Comment + Free Resource",
      notes: "Free resources with keyword comments are the highest-converting CTA format for new creator audiences."
    },
    proTip: "Film this Short on your phone (not your PC) to demonstrate that you're practicing what you preach. The meta-authenticity is a powerful trust signal."
  },

  // S-6-3: "The Roblox Shorts Channel Niche Nobody Is Competing In (Yet)"
  {
    id: "S-6-3",
    title: "The Roblox Shorts Channel Niche Nobody Is Competing In (Yet)",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Opportunity Alert",
        text: "There's a Roblox Shorts sub-niche with almost zero competition and massive search demand. Here's what it is.",
        formula: "Scarcity / Opportunity Hook",
        inspiredBy: "Competitive gap — game-specific trend analysis"
      },
      {
        label: "Hook B — The Troll Tower / Lucky Block Angle",
        text: "While everyone fights over Escape Tsunami content, Troll Tower and Kick a Lucky Block are wide open. Here's the niche nobody is touching.",
        formula: "Anti-Hype / Controversy Hook",
        inspiredBy: "Competitive gap — underserved games"
      },
      {
        label: "Hook C — The Save-Worthy Frame",
        text: "Save this. In 30 days, this Roblox Shorts niche will be discovered by everyone. Right now, it's empty.",
        formula: "Scarcity + Save CTA Hook",
        inspiredBy: "Channel Makers — 'never run out of ideas' format"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook C — the 'save this' instruction in the hook itself is a proven engagement driver." },
      { timestamp: "0:03–0:15", beat: "The niche reveal", notes: "\"The niche: Roblox Shorts ABOUT making Roblox Shorts. Meta-content. Teaching other Roblox creators how to grow their channels. There are 9 competitors doing this in long-form — zero doing it in Shorts format.\"" },
      { timestamp: "0:15–0:35", beat: "Why it works", notes: "\"This niche works because: 1) The audience (Roblox creators) is huge and growing. 2) The content is evergreen — strategy advice doesn't expire. 3) The monetization is clear — courses, communities, consulting. 4) Zero competition in the Shorts format.\"" },
      { timestamp: "0:35–0:50", beat: "The content angles", notes: "\"3 content angles for this niche: 1) Game trend reports (which Roblox game to make Shorts about this week). 2) Hook formula breakdowns (why this Roblox Short got 100K views). 3) Channel audits (I reviewed your Roblox Shorts — here's what to fix).\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Save this — and follow. I'm building this niche from scratch and documenting every step.\"" }
    ],
    cta: {
      text: "Save this and follow — I'm building this niche from scratch and documenting every step. You're watching it happen in real time.",
      type: "Save + Follow + Series Hook",
      notes: "The 'you're watching it happen' framing creates a documentary-style investment in your channel's journey."
    },
    proTip: "This Short is a positioning manifesto. It tells the audience exactly what your channel is about and why they should follow. Post it early and pin it."
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 7 — "30-Day Challenge Launch"
  // ═══════════════════════════════════════════════════════════════

  // S-7-1: "I'm Starting a Roblox Shorts Channel From 0 — Day 1 (Watch This)"
  {
    id: "S-7-1",
    title: "I'm Starting a Roblox Shorts Channel From 0 — Day 1 (Watch This)",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Challenge Launch",
        text: "I'm starting a Roblox Shorts channel from absolute zero. Here's what I'm doing in the first 24 hours — and why most people get this wrong.",
        formula: "Challenge / Copy Hook — Series Launch",
        inspiredBy: "Fabiojit 1.6M model — 'I Went Pro in 10 Days'"
      },
      {
        label: "Hook B — The Documentary Open",
        text: "Day 1. Zero subscribers. Zero views. I'm documenting everything — the strategy, the mistakes, the real numbers. Follow to watch.",
        formula: "Personal Story + Challenge Hook",
        inspiredBy: "Fabiojit 1.6M model — ongoing case study"
      },
      {
        label: "Hook C — The Accountability Frame",
        text: "I'm committing to 30 days of Roblox Shorts. Starting from zero. I'll show you every view count, every mistake, every win. Day 1 starts now.",
        formula: "Accountability + Challenge Hook",
        inspiredBy: "Money Groot 506K model — raw growth documentation"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook B — the 'Day 1. Zero subscribers.' framing is cinematic and immediately sets up the series." },
      { timestamp: "0:03–0:15", beat: "The strategy for Day 1", notes: "\"Day 1 strategy: 1) Choose your first game — I'm starting with Escape Tsunami because it's trending. 2) Film 3 Shorts in one session. 3) Post the best one at 9 AM. 4) Engage with every comment for the first 2 hours.\"" },
      { timestamp: "0:15–0:35", beat: "The game selection reasoning", notes: "\"Why Escape Tsunami for Day 1: It's the #1 Roblox game right now. The algorithm is already pushing Roblox content. And the gameplay loop is 30-60 seconds — perfect for a first Short.\"" },
      { timestamp: "0:35–0:50", beat: "The 30-day goal", notes: "\"My 30-day goal: 1,000 subscribers and 100,000 total views. I'll post every single day and show you the real analytics. No cherry-picking the good days.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Follow to watch the full 30-day challenge. Drop your starting subscriber count — let's do this together.\"" }
    ],
    cta: {
      text: "Follow to watch the full 30-day challenge. Drop your starting subscriber count below — let's do this together.",
      type: "Series Follow + Community Building",
      notes: "The 'let's do this together' framing turns viewers into participants. This is the most powerful community-building CTA."
    },
    proTip: "This Short is the most important one you'll post — it sets up the entire 30-day series. Film it with genuine energy and vulnerability. The rawness is the hook."
  },

  // S-7-2: "Week 1 Roblox Shorts Strategy Recap — What Worked, What Didn't"
  {
    id: "S-7-2",
    title: "Week 1 Roblox Shorts Strategy Recap — What Worked, What Didn't",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Transparency Open",
        text: "After 7 days of Roblox Shorts content, here are the real numbers — and the one thing I'm changing in Week 2.",
        formula: "Income Proof / Transparency Hook",
        inspiredBy: "Shelby Church — exact income reveal format"
      },
      {
        label: "Hook B — The Honest Recap",
        text: "Week 1 of the Roblox Shorts challenge: 3 videos flopped, 1 hit 12K views, and I learned the most important lesson of the challenge.",
        formula: "Personal Story + Data Hook",
        inspiredBy: "Fabiojit 1.6M model — honest documentation"
      },
      {
        label: "Hook C — The Lesson Tease",
        text: "I made 7 Roblox Shorts in 7 days. Here's the one thing that separated the viral ones from the flops.",
        formula: "Case Study + Contrast Hook",
        inspiredBy: "Hayden Hillier-Smith — before/after format"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook B — the specific numbers (3 flopped, 1 hit 12K) make it feel real and honest." },
      { timestamp: "0:03–0:15", beat: "The real numbers", notes: "\"Week 1 results: [Show actual YouTube Studio analytics]. Total views: X. Best Short: X views (Escape Tsunami). Worst Short: X views (general strategy). Subscribers gained: X.\"" },
      { timestamp: "0:15–0:35", beat: "What worked", notes: "\"What worked: Game-specific content (Escape Tsunami) outperformed general strategy content 5:1. The 'challenge' hook format outperformed the 'tutorial' format. Posting at 9 AM got 2x the views of 5 PM posts.\"" },
      { timestamp: "0:35–0:50", beat: "What didn't work", notes: "\"What didn't work: General 'tips' content with no specific game. Hooks that started with 'In this video...' — immediate swipe. Shorts longer than 45 seconds — drop-off was brutal.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Follow for Week 2 — I'm applying everything I learned. Subscribe to see if the numbers improve.\"" }
    ],
    cta: {
      text: "Follow for Week 2 — I'm applying every lesson from Week 1. Subscribe to see if the numbers improve.",
      type: "Series Continuation Follow",
      notes: "The 'see if the numbers improve' framing creates genuine suspense and investment in the outcome."
    },
    proTip: "Show the actual YouTube Studio analytics screen. Real data is 10x more compelling than described data. Blur your channel name if you want privacy."
  },

  // S-7-3: "The 3 Roblox Shorts I'm Making This Week (And Why I Chose These Games)"
  {
    id: "S-7-3",
    title: "The 3 Roblox Shorts I'm Making This Week (And Why I Chose These Games)",
    format: "Short",
    hooks: [
      {
        label: "Hook A — The Planning Reveal",
        text: "Here's my exact content plan for Week 2 of the Roblox Shorts challenge — game selection, hook formulas, and posting times.",
        formula: "Challenge / Copy Hook — Planning Reveal",
        inspiredBy: "Channel Makers — content system reveals"
      },
      {
        label: "Hook B — The Game Selection Logic",
        text: "I'm making 3 Roblox Shorts this week. Here's exactly why I chose Escape Tsunami, 99 Nights, and Kick a Lucky Block — and not Troll Tower.",
        formula: "Specific Decision + Reasoning Hook",
        inspiredBy: "Game-Specific Trend Analysis gap"
      },
      {
        label: "Hook C — The Copy Invitation",
        text: "Copy my exact Week 2 Roblox Shorts plan. Game selection, hooks, posting times — all of it. Here it is.",
        formula: "Challenge / Copy Hook",
        inspiredBy: "moneyboymax 189K model"
      }
    ],
    outline: [
      { timestamp: "0:00–0:03", beat: "Hook", notes: "Open with Hook C — the direct copy invitation is the most action-driving hook for this content type." },
      { timestamp: "0:03–0:15", beat: "The 3 games and why", notes: "\"Game 1: Escape Tsunami — still trending, highest search volume. Game 2: 99 Nights in the Forest — consistent performer, survival horror is evergreen. Game 3: Kick a Lucky Block — surging in May 2026, almost zero competition.\"" },
      { timestamp: "0:15–0:35", beat: "The 3 hooks", notes: "\"Short 1 hook: 'I survived Escape Tsunami without jumping once.' Short 2 hook: 'Can you survive 99 Nights in the Forest? Night 50 is impossible.' Short 3 hook: 'I kicked 100 Lucky Blocks and got the rarest item in the game.'\"" },
      { timestamp: "0:35–0:50", beat: "The posting schedule", notes: "\"Posting times: Monday 9 AM (highest engagement window), Wednesday 12 PM (midweek peak), Friday 5 PM (weekend lead-in). All based on the Buffer research on YouTube Shorts timing.\"" },
      { timestamp: "0:50–0:58", beat: "CTA", notes: "\"Comment what games you're covering this week — I'll tell you the best hook for each one.\"" }
    ],
    cta: {
      text: "Comment what games you're covering this week — I'll give you the best hook for each one.",
      type: "Engagement CTA — Game Selection",
      notes: "This drives highly specific, high-quality comments that signal strong engagement to the algorithm."
    },
    proTip: "This 'weekly planning' Short format is infinitely repeatable. Every week you can post 'Here's my plan for this week' — it's low-effort content that drives high engagement because viewers want to copy your strategy."
  },

  // ═══════════════════════════════════════════════════════════════
  // WEEK 1 LONG-FORM IDEAS
  // ═══════════════════════════════════════════════════════════════

  // LF-1-1: "The Roblox Shorts Channel That Made Me $131,397 — And What Every Competitor Got Wrong"
  {
    id: "LF-1-1",
    title: "The Roblox Shorts Channel That Made Me $131,397 — And What Every Competitor Got Wrong",
    format: "Long-Form",
    hooks: [
      {
        label: "Hook A — The Income Proof Open",
        text: "I studied every Roblox Shorts educator — Ventura, Ryvahn, moneyboymax, Chris Barrera, Fabiojit, Money Groot — and found 8 things NONE of them teach. Here's the full breakdown with real view counts.",
        formula: "Specific Dollar Amount + Competitor Gap Hook",
        inspiredBy: "Chris Barrera — '$131,397 Faceless Roblox Channel' — 57K views"
      },
      {
        label: "Hook B — The Competitor Teardown",
        text: "9 competitors. 100+ videos analyzed. Here are the 8 content gaps every single one of them is missing — and why the first creator to fill them will own the Roblox Shorts education niche.",
        formula: "Data Authority + Scarcity Hook",
        inspiredBy: "Competitive gap analysis — no one does this"
      },
      {
        label: "Hook C — The Positioning Statement",
        text: "Every Roblox Shorts tutorial teaches the same 3 things. I'm teaching the 8 things nobody else will. Here's why — and here's all 8.",
        formula: "Anti-Hype + Authority Hook",
        inspiredBy: "Paddy Galloway — outlier analysis format"
      }
    ],
    outline: [
      { beat: "Intro (0:00–1:30)", notes: "Open with the income proof hook. Show the $131,397 figure (reference Chris Barrera's case study). Establish credibility: 'I analyzed 9 competitors, 100+ videos, to find what nobody is teaching.'" },
      { beat: "Section 1 — The Competitive Landscape (1:30–4:00)", notes: "Walk through the 9 competitors: Ventura (124K views, Whop funnel), Ryvahn (141K, Skool), moneyboymax (189K, 1:1 mentorship), Chris Barrera (57K, YT Launchpad), Romayroh (138K, $46,800/month Skool), Wealthify AI (tool affiliates), Syrax (255K, tool affiliates), Money Groot (506K, no funnel), Fabiojit (1.6M, Discord). Show the outlier view counts visually." },
      { beat: "Section 2 — The 8 Gaps (4:00–12:00)", notes: "Walk through each gap with a specific example of what's missing and what the opportunity looks like. Gap 1: Shorts ABOUT Shorts. Gap 2: Established YouTuber angle. Gap 3: Game-specific trend analysis. Gap 4: Consistency systems. Gap 5: Full monetization stack. Gap 6: Ongoing case study series. Gap 7: Community-first approach. Gap 8: Two-audience strategy." },
      { beat: "Section 3 — The Opportunity (12:00–16:00)", notes: "Show the market size: 67.2M gaming Shorts posted in 2025, 425M hours of Roblox watched, $0 funnel creators like Money Groot leaving massive revenue on the table. The creator who fills these gaps has a clear path to $10K-$50K/month." },
      { beat: "Section 4 — The Action Plan (16:00–18:00)", notes: "Give viewers a specific 30-day action plan based on the gaps. Which gap to target first based on their current channel size. The exact content formats for each gap." },
      { beat: "Outro (18:00–20:00)", notes: "CTA: 'Comment GAPS and I'll send you the full competitor gap analysis PDF. Subscribe — I'm posting the complete Roblox Shorts strategy series every Monday and Thursday.'" }
    ],
    cta: {
      text: "Comment 'GAPS' and I'll send you the full competitor gap analysis PDF. Subscribe — new video every Monday and Thursday.",
      type: "Lead Magnet + Subscribe",
      notes: "The PDF lead magnet is a consulting business builder — every 'GAPS' comment is a potential client. The Mon/Thu schedule sets appointment viewing expectations."
    },
    proTip: "This video is your channel's flagship content. It should be pinned, featured in your channel trailer, and referenced in every subsequent video. It's the 'why this channel exists' video."
  },

  // LF-1-2: "Roblox Game Trend Report: The 4 Games Driving 60% of Viral Shorts Right Now (May 2026 Data)"
  {
    id: "LF-1-2",
    title: "Roblox Game Trend Report: The 4 Games Driving 60% of Viral Shorts Right Now (May 2026 Data)",
    format: "Long-Form",
    hooks: [
      {
        label: "Hook A — The Data Authority Open",
        text: "Nobody in the Roblox Shorts space breaks down WHY specific games go viral — or how long the window lasts. I analyzed 100 viral Roblox Shorts this month. Here's the full data on Escape Tsunami, 99 Nights, Troll Tower, and Kick a Lucky Block.",
        formula: "Data Authority Hook",
        inspiredBy: "Nate Black — studied 35B Shorts views; Game-Specific Trend gap"
      },
      {
        label: "Hook B — The Trend Window",
        text: "Escape Tsunami. 99 Nights in the Forest. Troll Tower. Kick a Lucky Block. These 4 games are driving 60% of viral Roblox Shorts right now. The window for each one is different — and knowing the difference is worth thousands of views.",
        formula: "Specific Number + Scarcity Hook",
        inspiredBy: "Game-Specific Trend Analysis gap — nobody does this"
      },
      {
        label: "Hook C — The Monthly Report Frame",
        text: "This is the May 2026 Roblox Game Trend Report — the monthly breakdown of which games to make Shorts about, which ones are peaking, and which ones to avoid. Let's get into it.",
        formula: "Authority + Recurring Series Hook",
        inspiredBy: "Channel Makers — content system reveals"
      }
    ],
    outline: [
      { beat: "Intro (0:00–1:30)", notes: "Open with the data hook. Establish the 'monthly trend report' format — this is a recurring series. Show the 4 games with their current trending status." },
      { beat: "Section 1 — Escape Tsunami (1:30–5:30)", notes: "#1 Roblox game Feb 2026. Content angles: speed runs, fail compilations, challenge variants. Trend window: still open, estimated 4-6 more weeks. Best Short format: 'I survived X challenge.' Hook template: 'I [challenge] in Escape Tsunami — here's what happened.' Competition level: high but not saturated." },
      { beat: "Section 2 — 99 Nights in the Forest (5:30–9:30)", notes: "Consistently trending survival horror. 759K views per Short for top creators. Content angles: night-by-night countdown, horror reactions, strategy guides. Trend window: evergreen — survival horror is a permanent Shorts format. Best Short format: unresolved ending (maximum replay loop). Hook template: 'Can you survive Night [X]? I couldn't.' Competition level: medium." },
      { beat: "Section 3 — Troll Tower (9:30–13:00)", notes: "Viral Shorts content — troll reactions, clutch moments, 'destroying trolls' format. Trend window: consistent, not peaking but stable. Best Short format: reaction content (genuine reactions to unexpected troll moments). Hook template: 'The troll that made me rage quit — and how I got revenge.' Competition level: low-medium." },
      { beat: "Section 4 — Kick a Lucky Block (13:00–17:00)", notes: "Surging in May 2026, almost zero competition. Content angles: unboxing reveals, rare item reactions, challenge format. Trend window: currently at peak entry point. Best Short format: unboxing/reveal with genuine reaction. Hook template: 'I kicked 100 Lucky Blocks and got [rare item].' Competition level: very low — move now." },
      { beat: "Section 5 — The Game Selection Framework (17:00–20:00)", notes: "How to choose which game to make Shorts about based on: your channel size, the trend window, and your content style. The 3-game rotation strategy (trending + consistent + surging)." },
      { beat: "Outro (20:00–22:00)", notes: "CTA: 'Subscribe for monthly Roblox game trend reports — I'll tell you which game to cover BEFORE it peaks. Comment which game you're starting with.'" }
    ],
    cta: {
      text: "Subscribe for monthly Roblox game trend reports — I'll tell you which game to cover BEFORE it peaks. Comment which game you're starting with.",
      type: "Subscribe + Recurring Series CTA",
      notes: "The 'monthly trend report' format is a powerful subscriber retention tool — viewers subscribe to get future reports, not just this one video."
    },
    proTip: "This video format is infinitely repeatable and positions you as the definitive authority on Roblox game trends. Post it on the first Monday of every month. It becomes a must-watch for your audience."
  },

  // LF-1-3: "I Went Pro on Roblox Shorts in 30 Days — Here's Every Step, Every Mistake, Every Number"
  {
    id: "LF-1-3",
    title: "I Went Pro on Roblox Shorts in 30 Days — Here's Every Step, Every Mistake, Every Number",
    format: "Long-Form",
    hooks: [
      {
        label: "Hook A — The Fabiojit Callback",
        text: "Fabiojit's 'I Went Pro in 10 Days' got 1.6 million views on Fortnite. Money Groot's Roblox growth video got 506K views with ZERO funnel. I'm doing the Roblox Shorts version — and documenting everything.",
        formula: "Challenge / Copy Hook — Competitor Callback",
        inspiredBy: "Fabiojit 1.6M model + Money Groot 506K model"
      },
      {
        label: "Hook B — The Full Transparency",
        text: "30 days. Zero subscribers to [X subscribers]. Every view count, every mistake, every strategy change — documented in real time. Here's everything.",
        formula: "Personal Story + Income Proof Hook",
        inspiredBy: "Shelby Church — exact income reveal format"
      },
      {
        label: "Hook C — The Compressed Timeline",
        text: "I built a Roblox Shorts channel from zero in 30 days. Here's the exact strategy, the real numbers, and the 3 mistakes that almost killed the challenge.",
        formula: "Transformation in Compressed Timeline Hook",
        inspiredBy: "Fabiojit 1.6M model — 'I Went Pro in 10 Days'"
      }
    ],
    outline: [
      { beat: "Intro (0:00–2:00)", notes: "Open with the Fabiojit callback hook. Show the 1.6M view count. Establish the challenge: 'I'm doing the Roblox Shorts version. 30 days. Starting from zero. Here's everything I did.' Show the end result (subscriber count, view count) at the start — this is the 'cold open' technique." },
      { beat: "Week 1 Recap (2:00–7:00)", notes: "Day 1-7: Game selection (Escape Tsunami), first 3 Shorts, real analytics. What worked: game-specific content. What didn't: general strategy Shorts. Key lesson: the first 3 seconds are everything. Show real YouTube Studio screenshots." },
      { beat: "Week 2 Recap (7:00–12:00)", notes: "Day 8-14: Algorithm breakthrough — one Short hit [X] views. What changed: the hook formula. Introduced 99 Nights in the Forest content. The batch recording system (7 Shorts in one session). Real analytics comparison: Week 1 vs. Week 2." },
      { beat: "Week 3 Recap (12:00–17:00)", notes: "Day 15-21: The consistency crisis — motivation dropped. The system that saved the challenge. Added Kick a Lucky Block to the rotation. First brand deal inquiry (if applicable). The monetization stack started taking shape." },
      { beat: "Week 4 Recap (17:00–22:00)", notes: "Day 22-30: The final push. Total numbers revealed. The 3 biggest mistakes. The 3 things that made the biggest difference. What I'd do differently." },
      { beat: "The Full Strategy (22:00–26:00)", notes: "Distill the 30 days into a repeatable system: game rotation, hook formulas, posting schedule, batch recording, monetization stack. This is the 'here's what you can copy' section." },
      { beat: "Outro (26:00–28:00)", notes: "CTA: 'Subscribe to follow the full 30-day challenge — I post every Mon & Thu. Drop your starting subscriber count below — let's do this together.'" }
    ],
    cta: {
      text: "Subscribe to follow the full 30-day challenge — I post every Mon & Thu. Drop your starting subscriber count below — let's do this together.",
      type: "Subscribe + Community Building",
      notes: "The 'let's do this together' framing turns this into a community challenge, not just a tutorial. This drives the highest subscriber retention of any CTA format."
    },
    proTip: "Film the 'intro' of this video AFTER the 30 days are complete — so you can reference the real end result in the first 30 seconds. The 'cold open' with the final numbers is the most powerful hook for this format."
  }
];
