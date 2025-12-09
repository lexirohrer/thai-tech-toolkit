export interface CaseStudy {
  id: string;
  title: string;
  titleThai: string;
  location: string;
  duration: string;
  summary: string;
  challenge: string;
  approach: string;
  methods: string[];
  outcomes: string[];
  lessons: string[];
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'rural-healthcare',
    title: 'Rural Healthcare Access in Isaan',
    titleThai: 'การเข้าถึงบริการสุขภาพในชนบทภาคอีสาน',
    location: 'Khon Kaen Province',
    duration: '3 months',
    summary: 'A participatory research project exploring barriers to healthcare access among elderly residents in rural Northeastern Thailand.',
    challenge: 'Elderly residents in remote villages faced multiple barriers to accessing healthcare, but initial interviews yielded polite but uninformative responses due to reluctance to criticize existing services.',
    approach: 'We shifted from direct interviews to Photo Voice methodology, asking participants to document their daily health-related activities and challenges. Group sharing sessions created a supportive environment for discussing sensitive topics.',
    methods: ['Photo Voice', 'Journey Mapping', 'Feedback Circles'],
    outcomes: [
      'Identified transportation as primary barrier, not cost as initially assumed',
      'Discovered informal care networks between neighbors',
      'Co-designed a community health volunteer program',
      'Recommendations adopted by local health district',
    ],
    lessons: [
      'Indirect methods surface insights that direct questioning cannot',
      'Community-based activities reduce power dynamics',
      'Visual documentation empowers participants to lead conversations',
    ],
  },
  {
    id: 'student-mental-health',
    title: 'University Student Mental Health Services',
    titleThai: 'บริการสุขภาพจิตนักศึกษามหาวิทยาลัย',
    location: 'Bangkok Metropolitan Area',
    duration: '4 months',
    summary: 'Redesigning mental health support services for university students in a context where seeking help carries significant stigma.',
    challenge: 'Students rarely used existing counseling services. Surveys showed high satisfaction, but utilization remained low. The gap between reported satisfaction and actual behavior suggested social desirability bias.',
    approach: 'Used anonymous card sorting activities to understand how students categorize different types of support. Paper prototyping allowed students to design their ideal support touchpoints without criticizing existing services.',
    methods: ['Card Sorting', 'Paper Prototyping', 'Dot Voting'],
    outcomes: [
      'Revealed preference for peer support over professional counseling',
      'Identified need for anonymous first-contact options',
      'Designed a chatbot-first approach that respects privacy',
      'Increased service utilization by 340% after redesign',
    ],
    lessons: [
      'Anonymous methods reveal true preferences in stigmatized topics',
      'Designing "for the future" is safer than criticizing "the present"',
      'Quantitative satisfaction data can mask qualitative concerns',
    ],
  },
  {
    id: 'community-tourism',
    title: 'Community-Based Tourism Development',
    titleThai: 'การพัฒนาการท่องเที่ยวโดยชุมชน',
    location: 'Chiang Rai Province',
    duration: '6 months',
    summary: 'Working with a hill tribe community to develop sustainable tourism offerings while preserving cultural authenticity and community control.',
    challenge: "External consultants had previously proposed tourism plans that community members privately opposed but publicly accepted due to respect for the experts' status.",
    approach: 'Extended immersion and relationship building preceded any formal research. Contextual observation and informal conversations over shared meals built trust. All formal sessions were facilitated by community members we trained.',
    methods: ['Contextual Observation', 'Role Play Simulation', 'Pilot Testing'],
    outcomes: [
      'Community members identified tourism activities they wanted to share',
      'Created boundaries around sacred spaces and practices',
      'Developed pricing that reflected true community preferences',
      'Established community-controlled tourism cooperative',
    ],
    lessons: [
      'Relationship building is research, not pre-research',
      'Training community facilitators transfers power appropriately',
      'Silence often signals disagreement, not agreement',
    ],
  },
  {
    id: 'agricultural-innovation',
    title: 'Smallholder Farmer Technology Adoption',
    titleThai: 'การนำเทคโนโลยีมาใช้ของเกษตรกรรายย่อย',
    location: 'Chiang Mai Province',
    duration: '5 months',
    summary: 'Understanding why farmers were not adopting seemingly beneficial agricultural technologies despite free training programs.',
    challenge: "Government extension programs reported high training attendance but low technology adoption. Farmers expressed gratitude for training but rarely implemented new techniques.",
    approach: 'Rather than asking why they did not adopt, we used Journey Mapping to understand their complete agricultural decision-making process. Dot voting helped prioritize which innovations aligned with existing practices.',
    methods: ['Journey Mapping', 'Dot Voting', 'Feedback Circles'],
    outcomes: [
      'Discovered innovations conflicted with labor availability patterns',
      'Found that social proof from respected farmers was essential',
      'Redesigned programs around farmer-to-farmer learning',
      'Identified trusted information sources in each community',
    ],
    lessons: [
      'Non-adoption is often rational within context',
      'Timing and social dynamics matter as much as technical merit',
      'Asking "why not" creates defensive responses; observation reveals truth',
    ],
  },
];
