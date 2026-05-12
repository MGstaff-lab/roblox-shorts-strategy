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
