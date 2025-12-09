export type Phase = 'discover' | 'define' | 'develop' | 'deliver';
export type Difficulty = 1 | 2 | 3;

export interface Method {
  id: string;
  name: string;
  nameThai: string;
  description: string;
  phase: Phase;
  difficulty: Difficulty;
  duration: string;
  participants: string;
  culturalTip: string;
  steps: string[];
}

export const phaseLabels: Record<Phase, { en: string; th: string }> = {
  discover: { en: 'Discover', th: 'ค้นพบ' },
  define: { en: 'Define', th: 'กำหนด' },
  develop: { en: 'Develop', th: 'พัฒนา' },
  deliver: { en: 'Deliver', th: 'ส่งมอบ' },
};

export const difficultyLabels: Record<Difficulty, { en: string; th: string }> = {
  1: { en: 'Beginner', th: 'เริ่มต้น' },
  2: { en: 'Intermediate', th: 'ปานกลาง' },
  3: { en: 'Advanced', th: 'ขั้นสูง' },
};

export const methods: Method[] = [
  {
    id: 'contextual-observation',
    name: 'Contextual Observation',
    nameThai: 'การสังเกตการณ์ตามบริบท',
    description: 'Observe participants in their natural environment without direct intervention. This low-pressure approach respects social harmony while gathering authentic insights.',
    phase: 'discover',
    difficulty: 1,
    duration: '2-4 hours',
    participants: '1-2 researchers',
    culturalTip: 'In Thai contexts, maintain a respectful distance and avoid taking notes conspicuously. Consider having a local community member introduce you first to build trust.',
    steps: [
      'Identify the context and time for observation',
      'Seek permission from community leaders or gatekeepers',
      'Position yourself unobtrusively',
      'Document observations through mental notes, then write after',
      'Reflect on patterns and behaviors observed',
    ],
  },
  {
    id: 'photo-voice',
    name: 'Photo Voice',
    nameThai: 'ภาพเล่าเรื่อง',
    description: 'Participants document their experiences through photography, then share stories about their images. This indirect method allows expression without confrontational questioning.',
    phase: 'discover',
    difficulty: 1,
    duration: '1-2 weeks',
    participants: '5-15 participants',
    culturalTip: 'Let participants choose what to photograph freely. Group sharing sessions work well as they reduce individual pressure and encourage collective storytelling.',
    steps: [
      'Provide cameras or phones to participants',
      'Give open-ended prompts about daily life or challenges',
      'Allow 1-2 weeks for photo collection',
      'Facilitate group sharing sessions',
      'Identify themes collaboratively',
    ],
  },
  {
    id: 'journey-mapping',
    name: 'Journey Mapping',
    nameThai: 'การทำแผนที่ประสบการณ์',
    description: "Visualize a person's experience over time through a process or service. Using visual tools makes abstract experiences concrete and easier to discuss.",
    phase: 'define',
    difficulty: 2,
    duration: '2-3 hours',
    participants: '4-8 participants',
    culturalTip: 'Use collaborative drawing activities where everyone contributes. This distributes "ownership" of critical feedback across the group, making it safer to express concerns.',
    steps: [
      'Define the journey scope and timeframe',
      'Prepare large paper and colorful materials',
      'Guide participants through timeline creation',
      'Add emotional indicators at each stage',
      'Discuss high and low points together',
    ],
  },
  {
    id: 'card-sorting',
    name: 'Card Sorting',
    nameThai: 'การจัดหมวดหมู่การ์ด',
    description: 'Participants organize concepts or features into categories that make sense to them. The tactile, game-like format reduces formality and encourages participation.',
    phase: 'define',
    difficulty: 1,
    duration: '45-90 minutes',
    participants: '3-6 participants',
    culturalTip: 'Frame this as a collaborative game rather than a test. Allow participants to work in pairs or small groups to reduce individual pressure.',
    steps: [
      'Prepare cards with concepts, features, or ideas',
      'Explain there are no wrong answers',
      'Let participants group cards naturally',
      'Ask them to name each category',
      'Discuss reasoning behind groupings',
    ],
  },
  {
    id: 'dot-voting',
    name: 'Dot Voting',
    nameThai: 'การลงคะแนนด้วยจุด',
    description: 'A democratic prioritization method where everyone places dots on preferred options. Anonymity reduces hierarchy concerns in decision-making.',
    phase: 'develop',
    difficulty: 1,
    duration: '15-30 minutes',
    participants: '5-20 participants',
    culturalTip: 'Use identical dot stickers and allow simultaneous voting to maintain anonymity. This helps junior members express preferences without fear of contradicting seniors.',
    steps: [
      'Display all options clearly on a wall',
      'Give each person the same number of dots',
      'Allow voting simultaneously if possible',
      'Count results together as a group',
      'Discuss the outcomes collectively',
    ],
  },
  {
    id: 'paper-prototyping',
    name: 'Paper Prototyping',
    nameThai: 'การสร้างต้นแบบกระดาษ',
    description: 'Create low-fidelity mockups using paper and basic materials. The rough nature signals that feedback is welcome and changes are easy.',
    phase: 'develop',
    difficulty: 2,
    duration: '2-4 hours',
    participants: '3-5 participants',
    culturalTip: 'Emphasize that rough prototypes are intentional—this signals that everything can change and reduces hesitation to give feedback.',
    steps: [
      'Gather paper, markers, scissors, tape',
      'Sketch initial concepts loosely',
      'Create interactive elements that move',
      'Test with users immediately',
      'Iterate based on observations',
    ],
  },
  {
    id: 'role-play-simulation',
    name: 'Role Play Simulation',
    nameThai: 'การจำลองสถานการณ์',
    description: 'Act out scenarios to test solutions and understand different perspectives. The playful format creates psychological safety for experimentation.',
    phase: 'develop',
    difficulty: 3,
    duration: '1-2 hours',
    participants: '4-8 participants',
    culturalTip: 'Start with warm-up activities to build comfort. Allow people to volunteer for roles rather than assigning them, respecting individual comfort levels.',
    steps: [
      'Define the scenario clearly',
      'Assign or invite volunteers for roles',
      'Set up the physical space',
      'Run through the scenario',
      'Debrief as a group afterward',
    ],
  },
  {
    id: 'feedback-circles',
    name: 'Feedback Circles',
    nameThai: 'วงสนทนาแลกเปลี่ยน',
    description: 'Structured group feedback sessions where comments flow in one direction around a circle. The format ensures everyone speaks and creates balanced participation.',
    phase: 'deliver',
    difficulty: 2,
    duration: '1-2 hours',
    participants: '6-12 participants',
    culturalTip: 'Start with appreciations before moving to suggestions. Use "I wonder if..." language rather than direct criticism to maintain face.',
    steps: [
      'Arrange seating in a circle',
      'Present the solution or prototype',
      'Go around for appreciations first',
      'Second round for gentle suggestions',
      'Thank each contributor explicitly',
    ],
  },
  {
    id: 'pilot-testing',
    name: 'Pilot Testing',
    nameThai: 'การทดสอบนำร่อง',
    description: 'Test solutions with a small group before full implementation. Small-scale testing allows learning without large-scale failure.',
    phase: 'deliver',
    difficulty: 3,
    duration: '1-4 weeks',
    participants: '10-30 users',
    culturalTip: 'Position pilot testing as a learning opportunity for the research team, not an evaluation of users. This reduces pressure and encourages honest feedback.',
    steps: [
      'Select a representative pilot group',
      'Define success metrics clearly',
      'Implement with close support',
      'Gather ongoing feedback',
      'Document learnings for iteration',
    ],
  },
];
