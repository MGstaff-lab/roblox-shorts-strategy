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
    outperformingPattern: "Step-by-step tutorials with numbered frameworks outperform opinion pieces by 4x"
  },
  {
    rank: 2,
    name: "VidIQ",
    tier: "Tier 1 — Major Educator",
    subscribers: "1.5M+",
    focus: "Data-Driven Algorithm Analysis",
    keyInsight: "Channels with 200+ Shorts see consistent view increases over time",
    outperformingPattern: "Data-backed claims with visual proof get 5.9x average views vs. baseline"
  },
  {
    rank: 3,
    name: "Paddy Galloway",
    tier: "Tier 1 — Major Educator",
    subscribers: "600K+",
    focus: "Viral Hook Writing & Title Optimization",
    keyInsight: "\"Use Shorts as bait. Monetize with long-form.\" One 45-min video can make 10x more than 100 Shorts combined",
    outperformingPattern: "Outlier analysis videos (studying 3x+ average performers) consistently outperform"
  },
  {
    rank: 4,
    name: "Nick Nimmin",
    tier: "Tier 1 — Major Educator",
    subscribers: "1M+",
    focus: "Practical YouTube Tips for Small Channels",
    keyInsight: "Consistency beats frequency — 3-5 Shorts/week outperforms daily posting",
    outperformingPattern: "\"Mistake\" and \"fix\" format videos get 4.2x more engagement than general tips"
  },
  {
    rank: 5,
    name: "Roberto Blake",
    tier: "Tier 1 — Major Educator",
    subscribers: "500K+",
    focus: "YouTube Strategy & Creator Business",
    keyInsight: "Creators posting both Shorts and long-form earn 40-60% more than single-format creators",
    outperformingPattern: "Income transparency videos and \"how much I made\" content outperform by 6x"
  },
  {
    rank: 6,
    name: "Nate Black",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "200K+",
    focus: "Shorts Algorithm Research",
    keyInsight: "Studied 35 billion Shorts views: 13s and 60s lengths perform best; first 3 seconds are critical",
    outperformingPattern: "Original showcases and sensory experiences (ASMR) consistently attract more views"
  },
  {
    rank: 7,
    name: "Hayden Hillier-Smith",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "300K+",
    focus: "Editing & Retention Optimization",
    keyInsight: "80.2% of viral Shorts use captions — it's non-negotiable",
    outperformingPattern: "Before/after editing transformations outperform standard tutorials by 3.5x"
  },
  {
    rank: 8,
    name: "Channel Makers",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "400K+",
    focus: "YouTube Growth Systems",
    keyInsight: "The 3-pillar content system (Education + Entertainment + Inspiration) prevents burnout",
    outperformingPattern: "Content system reveals and \"never run out of ideas\" formats drive highest saves"
  },
  {
    rank: 9,
    name: "Cathrin Manning",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "350K+",
    focus: "YouTube Growth for Creators",
    keyInsight: "Thumbnail strategy applies even to Shorts — they appear in regular YouTube feed",
    outperformingPattern: "Personal journey + data combination outperforms pure tutorial content"
  },
  {
    rank: 10,
    name: "Jake Thomas (Creator Hooks)",
    tier: "Tier 2 — Shorts Specialist",
    subscribers: "150K+",
    focus: "Hook Writing & Title Formulas",
    keyInsight: "Expertise/Authority hooks get 5.9x more views than average — highest performing hook type",
    outperformingPattern: "Hook teardown videos and \"why this went viral\" analysis consistently outperform"
  },
  {
    rank: 11,
    name: "Colin and Samir",
    tier: "Tier 3 — Creator Economy",
    subscribers: "1.2M+",
    focus: "Creator Economy Analysis",
    keyInsight: "Hybrid creators (Shorts + long-form) grow subscriber base 3x faster",
    outperformingPattern: "Creator interview/case study format outperforms solo commentary by 2.8x"
  },
  {
    rank: 12,
    name: "Shelby Church",
    tier: "Tier 3 — Creator Economy",
    subscribers: "600K+",
    focus: "YouTube Monetization Transparency",
    keyInsight: "Gaming Shorts RPM is $0.02-$0.08 — real money comes from brand deals and long-form traffic",
    outperformingPattern: "Exact income reveal videos get 8x average views — transparency drives massive engagement"
  },
  {
    rank: 13,
    name: "Ryan Hildreth",
    tier: "Tier 3 — Creator Economy",
    subscribers: "300K+",
    focus: "YouTube Monetization Strategies",
    keyInsight: "76% of top Shorts creators earn more from brand deals than ad revenue",
    outperformingPattern: "Step-by-step monetization roadmaps with specific numbers outperform vague advice"
  },
  {
    rank: 14,
    name: "Robert Benjamin",
    tier: "Tier 3 — Creator Economy",
    subscribers: "250K+",
    focus: "YouTube Growth Tactics",
    keyInsight: "The explore/exploit algorithm: seed audience engagement in first 1,000 views determines fate",
    outperformingPattern: "Algorithm explanation videos with visual diagrams outperform text-heavy content"
  },
  {
    rank: 15,
    name: "Derral Eves",
    tier: "Tier 3 — Creator Economy",
    subscribers: "800K+",
    focus: "YouTube Strategy & Algorithm Expert",
    keyInsight: "Engaged views (not just views) are the only metric that matters for YPP and revenue",
    outperformingPattern: "\"The YouTube Formula\" framework videos drive highest long-term watch time"
  },
  {
    rank: 16,
    name: "CaylusBlox",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "10M+",
    focus: "Roblox Content Creation",
    keyInsight: "Gained 14M new followers in 2025 by combining Shorts with live streaming on Roblox content",
    outperformingPattern: "Reaction to unexpected Roblox moments gets 5x more engagement than planned content"
  },
  {
    rank: 17,
    name: "KreekCraft",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "8M+",
    focus: "Roblox Gaming Content",
    keyInsight: "Trending game ranking videos drive massive search traffic — evergreen + trending combination",
    outperformingPattern: "\"Ranking every Roblox game\" format consistently outperforms single-game content"
  },
  {
    rank: 18,
    name: "Rirusha Roblox",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "500K+",
    focus: "Roblox Gameplay & Shorts",
    keyInsight: "99 Nights in the Forest content drives 759K+ views — survival horror is peak Shorts content",
    outperformingPattern: "Survival challenge format with countdown creates natural replay loop"
  },
  {
    rank: 19,
    name: "TubeBuddy",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "400K+",
    focus: "YouTube Optimization Education",
    keyInsight: "Metadata optimization (title, description, hashtags) still matters for Shorts categorization",
    outperformingPattern: "Tool tutorial + strategy combination outperforms pure strategy content"
  },
  {
    rank: 20,
    name: "Faceless Roblox Channels",
    tier: "Tier 4 — Gaming/Roblox",
    subscribers: "100K-1M",
    focus: "AI-Powered Roblox Shorts",
    keyInsight: "Faceless Roblox rant/story channels are the fastest-growing format in 2026",
    outperformingPattern: "AI-generated Roblox commentary with gameplay overlay drives 10x more views than face-cam"
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
    color: "#3B82F6"
  },
  {
    name: "99 Nights in the Forest",
    genre: "Survival Horror",
    trend: "Consistently Trending",
    youtubeEngagement: "Very High",
    contentAngle: "Night-by-night survival, horror reaction, strategy guides",
    color: "#10B981"
  },
  {
    name: "Troll Tower",
    genre: "Obby / Troll Mechanics",
    trend: "Viral Shorts Content",
    youtubeEngagement: "High",
    contentAngle: "Troll reactions, clutch moments, \"destroying trolls\" format",
    color: "#F59E0B"
  },
  {
    name: "Kick a Lucky Block",
    genre: "Casual / Viral Trend",
    trend: "Surging May 2026",
    youtubeEngagement: "Very High",
    contentAngle: "Unboxing reveals, rare item reactions, challenge format",
    color: "#EF4444"
  },
  {
    name: "Steal a Brainrot",
    genre: "Comedy PvP",
    trend: "#2 Roblox Game Feb 2026",
    youtubeEngagement: "High",
    contentAngle: "Meme content, PvP highlights, funny moments",
    color: "#8B5CF6"
  },
  {
    name: "Blox Fruits",
    genre: "Action RPG / Anime",
    trend: "Long-Running Giant",
    youtubeEngagement: "Consistent",
    contentAngle: "Fruit tier lists, progression guides, PvP highlights",
    color: "#EC4899"
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
  // WEEK 1: FOUNDATION
  {
    day: 1, dayOfWeek: "Mon", week: 1, format: "Long-Form", audience: "Both", pillar: "Start",
    title: "How to Start a Roblox Shorts Channel in 2026 (Complete Beginner Guide)",
    hook: "Roblox creators are making $50K/month from Shorts — here's the exact system they use, whether you're starting from zero or already have a channel",
    bestTime: "Monday 9 AM", duration: "10-15 min",
    cta: "Drop a comment: Are you starting from scratch or adding Shorts to an existing channel? I'll reply to every comment this week.",
    robloxGame: "Escape Tsunami, 99 Nights in Forest"
  },
  {
    day: 2, dayOfWeek: "Tue", week: 1, format: "Short", audience: "New Creator", pillar: "Start",
    title: "You Don't Need Equipment to Start a Roblox Shorts Channel",
    hook: "This creator made their first $1,000 from Roblox Shorts using just their phone and free editing apps — here's exactly what they used",
    bestTime: "Tuesday 4 PM", duration: "30-45 sec",
    cta: "Follow for daily Roblox Shorts strategy tips"
  },
  {
    day: 3, dayOfWeek: "Wed", week: 1, format: "Short", audience: "Established", pillar: "Start",
    title: "Why Your Existing YouTube Channel Needs Roblox Shorts RIGHT NOW",
    hook: "Roblox had 425 million hours watched in 2025 — a 294% increase. Your channel is missing this audience",
    bestTime: "Wednesday 5 PM", duration: "45-60 sec",
    cta: "Watch my full video on how to add Shorts to your existing channel (link in bio)",
    robloxGame: "General Roblox"
  },
  {
    day: 4, dayOfWeek: "Thu", week: 1, format: "Long-Form", audience: "Both", pillar: "Case Study",
    title: "The 3 Roblox Games Driving the Most YouTube Shorts Views Right Now (May 2026)",
    hook: "I analyzed the top 100 Roblox Shorts this week and found 3 games responsible for 60% of viral content — here's what they are and how to use them",
    bestTime: "Thursday 5 PM", duration: "12-18 min",
    cta: "Subscribe and hit the bell — I drop a new Roblox Shorts strategy video every Tuesday and Thursday",
    robloxGame: "Escape Tsunami, 99 Nights, Kick a Lucky Block"
  },
  {
    day: 5, dayOfWeek: "Fri", week: 1, format: "Short", audience: "Both", pillar: "Start",
    title: "The #1 Mistake New Roblox Shorts Creators Make (And How to Fix It)",
    hook: "99% of new Roblox Shorts creators do this wrong in their first video — and it kills their channel before it starts",
    bestTime: "Friday 4 PM", duration: "30-45 sec",
    cta: "Comment 'HOOK' and I'll send you my free Roblox Shorts hook template"
  },
  {
    day: 6, dayOfWeek: "Sat", week: 1, format: "Short", audience: "New Creator", pillar: "Start",
    title: "How to Pick Your Roblox Shorts Niche in 60 Seconds",
    hook: "Don't start a Roblox Shorts channel until you watch this — picking the wrong niche is why 90% of creators quit in month one",
    bestTime: "Saturday 2 PM", duration: "45-60 sec",
    cta: "Which niche are you choosing? Drop it in the comments",
    robloxGame: "99 Nights, Escape Tsunami, Troll Tower"
  },
  {
    day: 7, dayOfWeek: "Sun", week: 1, format: "Long-Form", audience: "Both", pillar: "Grow",
    title: "I Studied 100 Viral Roblox Shorts — Here Are the 7 Patterns That Made Them Go Viral",
    hook: "After watching 100 viral Roblox Shorts back-to-back, I found 7 patterns that appear in almost every single one — and most creators are ignoring all of them",
    bestTime: "Sunday 10 AM", duration: "15-20 min",
    cta: "Save this video — it's your Roblox Shorts cheat sheet. New strategy video drops Tuesday"
  },

  // WEEK 2: ALGORITHM & HOOKS
  {
    day: 8, dayOfWeek: "Mon", week: 2, format: "Short", audience: "Both", pillar: "Grow",
    title: "How the YouTube Shorts Algorithm Actually Works (Roblox Creator Edition)",
    hook: "YouTube shows your Short to 1,000 people first. If they don't watch it, it's dead forever. Here's how to make sure they watch it",
    bestTime: "Monday 9 AM", duration: "45-60 sec",
    cta: "Watch my full algorithm breakdown video (link in bio) — it changed everything for my Roblox Shorts"
  },
  {
    day: 9, dayOfWeek: "Tue", week: 2, format: "Long-Form", audience: "Both", pillar: "Grow",
    title: "The Perfect Roblox Shorts Hook Formula (With 10 Real Examples)",
    hook: "The difference between a Roblox Short that gets 100 views and one that gets 1 million views is usually just the first 3 seconds — here's the formula",
    bestTime: "Tuesday 9 AM", duration: "12-15 min",
    cta: "Download my free Roblox Shorts Hook Template — link in description",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block"
  },
  {
    day: 10, dayOfWeek: "Wed", week: 2, format: "Short", audience: "Established", pillar: "Grow",
    title: "How to Repurpose Your Long-Form Roblox Videos Into 10 Shorts",
    hook: "One 20-minute Roblox video = 10 Shorts. Here's exactly how to find the clips",
    bestTime: "Wednesday 5 PM", duration: "30-45 sec",
    cta: "Try this with your last video and comment how many clips you found"
  },
  {
    day: 11, dayOfWeek: "Thu", week: 2, format: "Long-Form", audience: "Both", pillar: "Case Study",
    title: "Roblox Shorts Case Study: How This Creator Got 10M Views on 99 Nights in the Forest Content",
    hook: "This creator posted 30 Roblox Shorts about 99 Nights in the Forest and one of them hit 10 million views — I broke down exactly what they did differently",
    bestTime: "Thursday 5 PM", duration: "15-20 min",
    cta: "Subscribe — I drop a new Roblox Shorts case study every Thursday",
    robloxGame: "99 Nights in the Forest"
  },
  {
    day: 12, dayOfWeek: "Fri", week: 2, format: "Short", audience: "Both", pillar: "Grow",
    title: "3 Hooks That Make Roblox Shorts Go Viral Every Time",
    hook: "I tested 50 different hooks on my Roblox Shorts. These 3 outperformed everything else by 5x",
    bestTime: "Friday 6 PM", duration: "45-60 sec",
    cta: "Save this — use these hooks in your next 3 Roblox Shorts and tell me your results"
  },
  {
    day: 13, dayOfWeek: "Sat", week: 2, format: "Short", audience: "New Creator", pillar: "Grow",
    title: "Why Your Roblox Shorts Are Getting 0 Views (And the Fix)",
    hook: "If your Roblox Shorts are stuck at 0-50 views, it's almost always one of these 3 things",
    bestTime: "Saturday 2 PM", duration: "30-45 sec",
    cta: "Comment your channel name and I'll check your last Short and give you feedback"
  },
  {
    day: 14, dayOfWeek: "Sun", week: 2, format: "Long-Form", audience: "Both", pillar: "Grow",
    title: "The Complete Roblox Shorts Content System: How to Never Run Out of Ideas",
    hook: "I've been posting Roblox Shorts for 6 months without running out of ideas once — here's the exact system I use",
    bestTime: "Sunday 10 AM", duration: "18-25 min",
    cta: "Download my free 30-day Roblox Shorts content calendar — link in description",
    robloxGame: "Escape Tsunami, Troll Tower, Kick a Lucky Block"
  },

  // WEEK 3: CONSISTENCY & GROWTH
  {
    day: 15, dayOfWeek: "Mon", week: 3, format: "Short", audience: "Both", pillar: "Grow",
    title: "How Often Should You Post Roblox Shorts? (The Data Answer)",
    hook: "Posting Roblox Shorts every day actually HURTS your channel — here's what the data says you should do instead",
    bestTime: "Monday 9 AM", duration: "45-60 sec",
    cta: "What's your current posting schedule? Drop it in the comments"
  },
  {
    day: 16, dayOfWeek: "Tue", week: 3, format: "Long-Form", audience: "Established", pillar: "Grow",
    title: "How to Add Roblox Shorts to Your Existing YouTube Channel Without Confusing Your Audience",
    hook: "Adding Shorts to your existing YouTube channel can either 3x your growth or tank your channel — here's how to do it right",
    bestTime: "Tuesday 9 AM", duration: "15-20 min",
    cta: "If you already have a YouTube channel, comment your subscriber count — I'll tell you exactly how to add Shorts to your strategy",
    robloxGame: "General Roblox (CaylusBlox case study)"
  },
  {
    day: 17, dayOfWeek: "Wed", week: 3, format: "Short", audience: "Both", pillar: "Grow",
    title: "The Roblox Shorts Posting Schedule That Grew This Channel 10x",
    hook: "This Roblox creator went from 500 to 50,000 subscribers in 90 days using this exact posting schedule",
    bestTime: "Wednesday 5 PM", duration: "30-45 sec",
    cta: "Screenshot this schedule and start it this week",
    robloxGame: "Kick a Lucky Block, Troll Tower"
  },
  {
    day: 18, dayOfWeek: "Thu", week: 3, format: "Long-Form", audience: "Both", pillar: "Grow",
    title: "Roblox Shorts Analytics: How to Read Your Data and Double Your Views",
    hook: "Most Roblox Shorts creators are looking at the WRONG metrics — here's what actually matters and how to use it to grow faster",
    bestTime: "Thursday 5 PM", duration: "20-25 min",
    cta: "Check your Shorts analytics right now and comment your swipe-away rate — I'll tell you if it's good or bad"
  },
  {
    day: 19, dayOfWeek: "Fri", week: 3, format: "Short", audience: "New Creator", pillar: "Grow",
    title: "How to Get Your First 1,000 Subscribers with Roblox Shorts",
    hook: "Getting your first 1,000 subscribers on Roblox Shorts is easier than you think — but only if you do these 3 things",
    bestTime: "Friday 4 PM", duration: "45-60 sec",
    cta: "Follow for daily Roblox Shorts tips — I'll help you hit 1,000 subs",
    robloxGame: "Escape Tsunami, 99 Nights"
  },
  {
    day: 20, dayOfWeek: "Sat", week: 3, format: "Short", audience: "Both", pillar: "Grow",
    title: "The Roblox Shorts Thumbnail Hack That Gets 3x More Clicks",
    hook: "Your Roblox Short thumbnail is the first thing people see in the regular YouTube feed — and most creators are wasting it",
    bestTime: "Saturday 2 PM", duration: "30-45 sec",
    cta: "Show me your current Roblox Short thumbnail in the comments — I'll give you a quick review"
  },
  {
    day: 21, dayOfWeek: "Sun", week: 3, format: "Long-Form", audience: "Both", pillar: "Case Study",
    title: "0 to Monetized: The 90-Day Roblox Shorts Roadmap",
    hook: "I mapped out exactly what you need to do in the next 90 days to go from zero to monetized on YouTube with Roblox Shorts — including the exact games to cover each week",
    bestTime: "Sunday 10 AM", duration: "20-30 min",
    cta: "Save this video — it's your 90-day roadmap. Drop your start date in the comments and I'll check in with you",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block"
  },

  // WEEK 4: MONETIZATION
  {
    day: 22, dayOfWeek: "Mon", week: 4, format: "Short", audience: "Both", pillar: "Monetize",
    title: "How Much YouTube Actually Pays for Roblox Shorts (Real Numbers)",
    hook: "I made 1 million views on Roblox Shorts and YouTube paid me $47. Here's why that's actually fine — and how I made $3,000 from the same views",
    bestTime: "Monday 9 AM", duration: "45-60 sec",
    cta: "Watch my full monetization breakdown video to see all 5 ways I make money from Roblox Shorts (link in bio)"
  },
  {
    day: 23, dayOfWeek: "Tue", week: 4, format: "Long-Form", audience: "Both", pillar: "Monetize",
    title: "5 Ways to Monetize Your Roblox Shorts Channel (Beyond Ad Revenue)",
    hook: "If you're only making money from YouTube ads on your Roblox Shorts, you're leaving 95% of your potential income on the table",
    bestTime: "Tuesday 9 AM", duration: "18-25 min",
    cta: "Which monetization strategy are you most interested in? Comment below and I'll make a detailed video on it",
    robloxGame: "General Roblox"
  },
  {
    day: 24, dayOfWeek: "Wed", week: 4, format: "Short", audience: "Established", pillar: "Monetize",
    title: "How Roblox Shorts Can 10x Your Long-Form Video Views",
    hook: "I added Roblox Shorts to my channel and my long-form videos started getting 10x more views — here's exactly why this happens",
    bestTime: "Wednesday 5 PM", duration: "30-45 sec",
    cta: "Try this: Make one Short that teases your next long-form video and see what happens",
    robloxGame: "Escape Tsunami, 99 Nights"
  },
  {
    day: 25, dayOfWeek: "Thu", week: 4, format: "Long-Form", audience: "Both", pillar: "Monetize",
    title: "How to Land Your First Brand Deal as a Roblox Shorts Creator",
    hook: "You don't need 100,000 subscribers to get paid by brands for your Roblox Shorts — here's how creators with 5,000 subscribers are landing $500-$2,000 deals",
    bestTime: "Thursday 5 PM", duration: "15-20 min",
    cta: "Download my free brand deal pitch template — link in description",
    robloxGame: "Kick a Lucky Block, Troll Tower"
  },
  {
    day: 26, dayOfWeek: "Fri", week: 4, format: "Short", audience: "New Creator", pillar: "Monetize",
    title: "The Fastest Way to Get Monetized on YouTube with Roblox Shorts",
    hook: "The YouTube Partner Program requires 500 subscribers and 3,000 watch hours OR 3M Shorts views — here's the fastest path using Roblox content",
    bestTime: "Friday 4 PM", duration: "45-60 sec",
    cta: "Comment your current subscriber count and I'll tell you exactly how far you are from monetization",
    robloxGame: "Escape Tsunami, Kick a Lucky Block"
  },
  {
    day: 27, dayOfWeek: "Sat", week: 4, format: "Short", audience: "Both", pillar: "Monetize",
    title: "Roblox Shorts Affiliate Marketing: How to Make $500/Month Without Brand Deals",
    hook: "You can make $500/month from your Roblox Shorts channel without a single brand deal — here's the affiliate strategy most creators ignore",
    bestTime: "Saturday 2 PM", duration: "30-45 sec",
    cta: "Save this — and check out the affiliate resources in my bio link"
  },
  {
    day: 28, dayOfWeek: "Sun", week: 4, format: "Long-Form", audience: "Both", pillar: "Monetize",
    title: "The Complete Roblox Shorts Monetization Masterclass: From $0 to $5,000/Month",
    hook: "I'm going to show you the exact monetization roadmap that took one Roblox Shorts creator from $0 to $5,000 per month in 12 months — every step, every strategy, every mistake",
    bestTime: "Sunday 10 AM", duration: "25-35 min",
    cta: "Subscribe and join my free community — link in description. We're building Roblox Shorts channels together",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block"
  },

  // DAYS 29-30: ADVANCED STRATEGY
  {
    day: 29, dayOfWeek: "Mon", week: 5, format: "Short", audience: "Both", pillar: "Grow",
    title: "The Roblox Shorts Strategy That's Working RIGHT NOW (May 2026)",
    hook: "The Roblox Shorts strategy that worked 6 months ago is DEAD. Here's what's actually working right now in May 2026",
    bestTime: "Monday 9 AM", duration: "45-60 sec",
    cta: "Follow for weekly Roblox Shorts strategy updates — the algorithm changes fast",
    robloxGame: "Kick a Lucky Block, 99 Nights, Troll Tower"
  },
  {
    day: 30, dayOfWeek: "Tue", week: 5, format: "Long-Form", audience: "Both", pillar: "Case Study",
    title: "My Complete Roblox Shorts Strategy Revealed: Everything I Know in One Video",
    hook: "After 30 days of sharing Roblox Shorts strategy, I'm putting everything I know into one video — the complete system from start to monetization",
    bestTime: "Tuesday 9 AM", duration: "20-30 min",
    cta: "If this 30-day series helped you, share it with one creator who needs it. And if you want personalized help building your Roblox Shorts channel, check out my consulting services — link in description",
    robloxGame: "Escape Tsunami, 99 Nights, Troll Tower, Kick a Lucky Block"
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
