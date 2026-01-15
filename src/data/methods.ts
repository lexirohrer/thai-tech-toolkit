export type Phase = 'discover' | 'define' | 'develop' | 'deliver';
export type Difficulty = 1 | 2 | 3;
export type DigitalLiteracy = 'low' | 'medium' | 'high';

export interface Method {
  id: string;
  name: string;
  nameThai: string;
  description: string;
  descriptionThai?: string;
  phase: Phase;
  difficulty: Difficulty;
  duration: string;
  participants: string;
  participantCount: { min: number; max: number };
  digitalLiteracy: DigitalLiteracy;
  culturalTip: string;
  culturalTipThai?: string;
  steps: string[];
  stepsThai?: string[];
}

export const phaseLabels: Record<Phase, { en: string; th: string }> = {
  discover: { en: 'Discovering', th: 'ค้นพบ' },
  define: { en: 'Defining', th: 'กำหนด' },
  develop: { en: 'Developing', th: 'พัฒนา' },
  deliver: { en: 'Delivering', th: 'ส่งมอบ' },
};

export const difficultyLabels: Record<Difficulty, { en: string; th: string }> = {
  1: { en: 'Beginner', th: 'เริ่มต้น' },
  2: { en: 'Intermediate', th: 'ปานกลาง' },
  3: { en: 'Advanced', th: 'ขั้นสูง' },
};

export const digitalLiteracyLabels: Record<DigitalLiteracy, { en: string; th: string }> = {
  low: { en: 'Low tech', th: 'ต่ำ' },
  medium: { en: 'Medium tech', th: 'ปานกลาง' },
  high: { en: 'High tech', th: 'สูง' },
};

export const methods: Method[] = [
  {
    id: 'contextual-observation',
    name: 'Contextual Observation',
    nameThai: 'การสังเกตการณ์ตามบริบท',
    description: 'Observe participants in their natural environment without direct intervention. This low-pressure approach respects social harmony while gathering authentic insights.',
    descriptionThai: 'สังเกตผู้เข้าร่วมในสภาพแวดล้อมตามธรรมชาติโดยไม่มีการแทรกแซงโดยตรง วิธีการที่ไม่มีแรงกดดันนี้เคารพความสามัคคีทางสังคมในขณะที่รวบรวมข้อมูลเชิงลึกที่แท้จริง',
    phase: 'discover',
    difficulty: 1,
    duration: '2-4 hours',
    participants: '1-2 researchers',
    participantCount: { min: 1, max: 2 },
    digitalLiteracy: 'low',
    culturalTip: 'In Thai contexts, maintain a respectful distance and avoid taking notes conspicuously. Consider having a local community member introduce you first to build trust.',
    culturalTipThai: 'ในบริบทไทย รักษาระยะห่างที่เคารพและหลีกเลี่ยงการจดบันทึกอย่างเด่นชัด พิจารณาให้สมาชิกชุมชนท้องถิ่นแนะนำคุณก่อนเพื่อสร้างความไว้วางใจ',
    steps: [
      'Identify the context and time for observation',
      'Seek permission from community leaders or gatekeepers',
      'Position yourself unobtrusively',
      'Document observations through mental notes, then write after',
      'Reflect on patterns and behaviors observed',
    ],
    stepsThai: [
      'ระบุบริบทและเวลาสำหรับการสังเกต',
      'ขออนุญาตจากผู้นำชุมชนหรือผู้ควบคุม',
      'วางตำแหน่งตัวเองอย่างไม่เด่นชัด',
      'บันทึกการสังเกตผ่านบันทึกทางจิตใจ แล้วเขียนภายหลัง',
      'สะท้อนเกี่ยวกับรูปแบบและพฤติกรรมที่สังเกตเห็น',
    ],
  },
  {
    id: 'card-sorting',
    name: 'Card Sorting',
    nameThai: 'การจัดหมวดหมู่การ์ด',
    description: 'Participants organize concepts or features into categories that make sense to them. The tactile, game-like format reduces formality and encourages participation.',
    descriptionThai: 'ผู้เข้าร่วมจัดระเบียบแนวคิดหรือคุณสมบัติเป็นหมวดหมู่ที่สมเหตุสมผลสำหรับพวกเขา รูปแบบที่สัมผัสได้เหมือนเกมช่วยลดความเป็นทางการและส่งเสริมการมีส่วนร่วม',
    phase: 'define',
    difficulty: 1,
    duration: '45-90 minutes',
    participants: '3-6 participants',
    participantCount: { min: 3, max: 6 },
    digitalLiteracy: 'low',
    culturalTip: 'Frame this as a collaborative game rather than a test. Allow participants to work in pairs or small groups to reduce individual pressure.',
    culturalTipThai: 'จัดกรอบนี้เป็นเกมที่ร่วมมือกันมากกว่าการทดสอบ อนุญาตให้ผู้เข้าร่วมทำงานเป็นคู่หรือกลุ่มเล็กเพื่อลดแรงกดดันส่วนบุคคล',
    steps: [
      'Prepare cards with concepts, features, or ideas',
      'Explain there are no wrong answers',
      'Let participants group cards naturally',
      'Ask them to name each category',
      'Discuss reasoning behind groupings',
    ],
    stepsThai: [
      'เตรียมการ์ดที่มีแนวคิด คุณสมบัติ หรือความคิด',
      'อธิบายว่าไม่มีคำตอบที่ผิด',
      'ให้ผู้เข้าร่วมจัดกลุ่มการ์ดตามธรรมชาติ',
      'ขอให้พวกเขาตั้งชื่อแต่ละหมวดหมู่',
      'อภิปรายเหตุผลเบื้องหลังการจัดกลุ่ม',
    ],
  },
  {
    id: 'dot-voting',
    name: 'Dot Voting',
    nameThai: 'การลงคะแนนด้วยจุด',
    description: 'A democratic prioritization method where everyone places dots on preferred options. Anonymity reduces hierarchy concerns in decision-making.',
    descriptionThai: 'วิธีการจัดลำดับความสำคัญแบบประชาธิปไตยที่ทุกคนวางจุดบนตัวเลือกที่ต้องการ ความไม่ระบุตัวตนช่วยลดความกังวลเกี่ยวกับลำดับชั้นในการตัดสินใจ',
    phase: 'develop',
    difficulty: 1,
    duration: '15-30 minutes',
    participants: '5-20 participants',
    participantCount: { min: 5, max: 20 },
    digitalLiteracy: 'low',
    culturalTip: 'Use identical dot stickers and allow simultaneous voting to maintain anonymity. This helps junior members express preferences without fear of contradicting seniors.',
    culturalTipThai: 'ใช้สติกเกอร์จุดที่เหมือนกันและอนุญาตให้ลงคะแนนพร้อมกันเพื่อรักษาความไม่ระบุตัวตน นี่ช่วยให้สมาชิกรุ่นน้องแสดงความชอบโดยไม่กลัวที่จะขัดแย้งกับรุ่นพี่',
    steps: [
      'Display all options clearly on a wall',
      'Give each person the same number of dots',
      'Allow voting simultaneously if possible',
      'Count results together as a group',
      'Discuss the outcomes collectively',
    ],
    stepsThai: [
      'แสดงตัวเลือกทั้งหมดอย่างชัดเจนบนผนัง',
      'ให้แต่ละคนมีจำนวนจุดเท่ากัน',
      'อนุญาตให้ลงคะแนนพร้อมกันถ้าเป็นไปได้',
      'นับผลลัพธ์ร่วมกันเป็นกลุ่ม',
      'อภิปรายผลลัพธ์ร่วมกัน',
    ],
  },
  {
    id: 'paper-prototyping',
    name: 'Paper Prototyping',
    nameThai: 'การสร้างต้นแบบกระดาษ',
    description: 'Create low-fidelity mockups using paper and basic materials. The rough nature signals that feedback is welcome and changes are easy.',
    descriptionThai: 'สร้างแบบจำลองความเที่ยงตรงต่ำโดยใช้กระดาษและวัสดุพื้นฐาน ลักษณะที่หยาบส่งสัญญาณว่าข้อเสนอแนะเป็นที่ยินดีและการเปลี่ยนแปลงเป็นเรื่องง่าย',
    phase: 'develop',
    difficulty: 2,
    duration: '2-4 hours',
    participants: '3-5 participants',
    participantCount: { min: 3, max: 5 },
    digitalLiteracy: 'medium',
    culturalTip: 'Emphasize that rough prototypes are intentional—this signals that everything can change and reduces hesitation to give feedback.',
    culturalTipThai: 'เน้นว่าต้นแบบที่หยาบนั้นตั้งใจ—นี่ส่งสัญญาณว่าทุกอย่างสามารถเปลี่ยนแปลงได้และลดความลังเลในการให้ข้อเสนอแนะ',
    steps: [
      'Gather paper, markers, scissors, tape',
      'Sketch initial concepts loosely',
      'Create interactive elements that move',
      'Test with users immediately',
      'Iterate based on observations',
    ],
    stepsThai: [
      'รวบรวมกระดาษ ปากกา กรรไกร เทป',
      'ร่างแนวคิดเบื้องต้นอย่างหลวมๆ',
      'สร้างองค์ประกอบแบบโต้ตอบที่เคลื่อนไหวได้',
      'ทดสอบกับผู้ใช้ทันที',
      'ทำซ้ำตามการสังเกต',
    ],
  },
  {
    id: 'role-play-simulation',
    name: 'Role Play Simulation',
    nameThai: 'การจำลองสถานการณ์',
    description: 'Act out scenarios to test solutions and understand different perspectives. The playful format creates psychological safety for experimentation.',
    descriptionThai: 'แสดงสถานการณ์เพื่อทดสอบโซลูชันและทำความเข้าใจมุมมองที่แตกต่าง รูปแบบที่สนุกสนานสร้างความปลอดภัยทางจิตใจสำหรับการทดลอง',
    phase: 'develop',
    difficulty: 3,
    duration: '1-2 hours',
    participants: '4-8 participants',
    participantCount: { min: 4, max: 8 },
    digitalLiteracy: 'medium',
    culturalTip: 'Start with warm-up activities to build comfort. Allow people to volunteer for roles rather than assigning them, respecting individual comfort levels.',
    culturalTipThai: 'เริ่มต้นด้วยกิจกรรมวอร์มอัพเพื่อสร้างความสบายใจ อนุญาตให้ผู้คนอาสาสมัครรับบทบาทแทนการมอบหมายให้เคารพระดับความสบายใจของแต่ละบุคคล',
    steps: [
      'Define the scenario clearly',
      'Assign or invite volunteers for roles',
      'Set up the physical space',
      'Run through the scenario',
      'Debrief as a group afterward',
    ],
    stepsThai: [
      'กำหนดสถานการณ์อย่างชัดเจน',
      'มอบหมายหรือเชิญอาสาสมัครสำหรับบทบาท',
      'จัดตั้งพื้นที่ทางกายภาพ',
      'ดำเนินการสถานการณ์',
      'สรุปเป็นกลุ่มหลังจากนั้น',
    ],
  },
  {
    id: 'pilot-testing',
    name: 'Pilot Testing',
    nameThai: 'การทดสอบนำร่อง',
    description: 'Test solutions with a small group before full implementation. Small-scale testing allows learning without large-scale failure.',
    descriptionThai: 'ทดสอบโซลูชันกับกลุ่มเล็กก่อนการดำเนินการเต็มรูปแบบ การทดสอบขนาดเล็กช่วยให้เรียนรู้โดยไม่ต้องล้มเหลวในระดับใหญ่',
    phase: 'deliver',
    difficulty: 3,
    duration: '1-4 weeks',
    participants: '10-30 users',
    participantCount: { min: 10, max: 30 },
    digitalLiteracy: 'high',
    culturalTip: 'Position pilot testing as a learning opportunity for the research team, not an evaluation of users. This reduces pressure and encourages honest feedback.',
    culturalTipThai: 'วางตำแหน่งการทดสอบนำร่องเป็นโอกาสการเรียนรู้สำหรับทีมวิจัย ไม่ใช่การประเมินผู้ใช้ นี่ช่วยลดแรงกดดันและส่งเสริมข้อเสนอแนะที่ซื่อสัตย์',
    steps: [
      'Select a representative pilot group',
      'Define success metrics clearly',
      'Implement with close support',
      'Gather ongoing feedback',
      'Document learnings for iteration',
    ],
    stepsThai: [
      'เลือกกลุ่มนำร่องที่เป็นตัวแทน',
      'กำหนดตัวชี้วัดความสำเร็จอย่างชัดเจน',
      'ดำเนินการด้วยการสนับสนุนอย่างใกล้ชิด',
      'รวบรวมข้อเสนอแนะอย่างต่อเนื่อง',
      'บันทึกการเรียนรู้สำหรับการทำซ้ำ',
    ],
  },
  {
    id: 'write-then-speak',
    name: 'Write Then Speak',
    nameThai: 'เขียนก่อนพูด',
    description: 'Reduce pressure to give feedback directly by having participants write or sketch first, then discuss in pairs before sharing with the group. This allows individual thinking before group influence.',
    descriptionThai: 'ลดแรงกดดันในการให้ข้อเสนอแนะโดยตรงโดยให้ผู้เข้าร่วมเขียนหรือวาดภาพก่อน จากนั้นอภิปรายเป็นคู่ก่อนแบ่งปันกับกลุ่ม วิธีนี้ช่วยให้มีการคิดเป็นรายบุคคลก่อนได้รับอิทธิพลจากกลุ่ม',
    phase: 'discover',
    difficulty: 1,
    duration: '30-60 minutes',
    participants: '4-12 participants',
    participantCount: { min: 4, max: 12 },
    digitalLiteracy: 'low',
    culturalTip: 'Pair participants with similar seniority levels. After writing, ask quieter members to share what their partner said first, which builds confidence before sharing their own ideas.',
    culturalTipThai: 'จับคู่ผู้เข้าร่วมที่มีระดับอาวุโสใกล้เคียงกัน หลังเขียน ขอให้สมาชิกที่เงียบกว่าบอกสิ่งที่คู่ของพวกเขาพูดก่อน ซึ่งสร้างความมั่นใจก่อนแบ่งปันความคิดของตัวเอง',
    steps: [
      'Begin with 2-3 minutes of silent writing or sketching on a worksheet',
      'Pair participants together for 1-2 minutes to discuss what they wrote',
      'Ask each participant to share something interesting their partner said',
      'Collect and review written materials after the workshop',
    ],
    stepsThai: [
      'เริ่มต้นด้วยการเขียนหรือวาดภาพเงียบๆ 2-3 นาทีบนเวิร์กชีต',
      'จับคู่ผู้เข้าร่วมกัน 1-2 นาทีเพื่ออภิปรายสิ่งที่พวกเขาเขียน',
      'ขอให้ผู้เข้าร่วมแต่ละคนแบ่งปันสิ่งที่น่าสนใจที่คู่ของพวกเขาพูด',
      'รวบรวมและทบทวนเอกสารที่เขียนหลังเวิร์กช็อป',
    ],
  },
  {
    id: 'choose-from-two',
    name: 'Comparative Evaluation',
    nameThai: 'เลือกจากสองตัวเลือก',
    description: 'Elicit honest feedback on designs by presenting two options and asking users to choose. Then redirect their preference into critique of the other option using their own words.',
    descriptionThai: 'ดึงข้อเสนอแนะที่ซื่อสัตย์เกี่ยวกับการออกแบบโดยนำเสนอสองตัวเลือกและขอให้ผู้ใช้เลือก จากนั้นเปลี่ยนความชอบของพวกเขาเป็นการวิจารณ์ตัวเลือกอื่นโดยใช้คำพูดของพวกเขาเอง',
    phase: 'deliver',
    difficulty: 2,
    duration: '1-2 hours',
    participants: '4-8 participants',
    participantCount: { min: 4, max: 8 },
    digitalLiteracy: 'medium',
    culturalTip: 'Ask users to write down their preference before sharing. Reframe questions using the user\'s own language to avoid biasing them. This allows participants to avoid saying "this is bad" while still articulating what they do and don\'t like.',
    culturalTipThai: 'ขอให้ผู้ใช้เขียนความชอบของพวกเขาก่อนแบ่งปัน เปลี่ยนกรอบคำถามโดยใช้ภาษาของผู้ใช้เองเพื่อหลีกเลี่ยงการทำให้เกิดอคติ วิธีนี้ช่วยให้ผู้เข้าร่วมหลีกเลี่ยงการพูดว่า "นี่ไม่ดี" ในขณะที่ยังสามารถอธิบายสิ่งที่พวกเขาชอบและไม่ชอบ',
    steps: [
      'Create two versions of a design, Option A and Option B',
      'Present both options to users and ask which they prefer',
      'Ask users to explain why they prefer their chosen option',
      'Redirect their feedback to critique the other option using their own words',
      'Repeat with different participants to understand root challenges in each design',
    ],
    stepsThai: [
      'สร้างสองเวอร์ชันของการออกแบบ ตัวเลือก A และตัวเลือก B',
      'นำเสนอทั้งสองตัวเลือกให้ผู้ใช้และถามว่าพวกเขาชอบตัวเลือกใด',
      'ถามผู้ใช้ให้อธิบายว่าทำไมพวกเขาถึงชอบตัวเลือกที่เลือก',
      'เปลี่ยนข้อเสนอแนะของพวกเขาเป็นการวิจารณ์ตัวเลือกอื่นโดยใช้คำพูดของพวกเขาเอง',
      'ทำซ้ำกับผู้เข้าร่วมที่แตกต่างกันเพื่อทำความเข้าใจความท้าทายหลักในการออกแบบแต่ละแบบ',
    ],
  },
  {
    id: 'worksheets',
    name: 'Worksheets',
    nameThai: 'เวิร์กชีต',
    description: 'Provide structure for ideation or feedback using worksheets with clear instructions. Worksheets reduce uncertainty, boost confidence for first-time participants, and allow quiet thinking time.',
    descriptionThai: 'ให้โครงสร้างสำหรับการสร้างไอเดียหรือข้อเสนอแนะโดยใช้เวิร์กชีตพร้อมคำแนะนำที่ชัดเจน เวิร์กชีตช่วยลดความไม่แน่นอน เพิ่มความมั่นใจสำหรับผู้เข้าร่วมครั้งแรก และให้เวลาคิดเงียบๆ',
    phase: 'discover',
    difficulty: 1,
    duration: '1-2 hours',
    participants: '4-12 participants',
    participantCount: { min: 4, max: 12 },
    digitalLiteracy: 'low',
    culturalTip: 'Write all instructions on the worksheet in all languages used. Include images or diagrams of the system being critiqued. Don\'t put lines in blank spaces—allow users to write or draw, whichever they prefer.',
    culturalTipThai: 'เขียนคำแนะนำทั้งหมดบนเวิร์กชีตในทุกภาษาที่ใช้ รวมภาพหรือแผนภาพของระบบที่กำลังถูกวิจารณ์ อย่าใส่เส้นในช่องว่าง—ให้ผู้ใช้เขียนหรือวาดตามที่พวกเขาต้องการ',
    steps: [
      'Create worksheets with all verbal instructions written on paper',
      'Include a space for participants to write their names',
      'Put different activities on separate worksheets',
      'When gathering feedback, include images or diagrams of the system',
      'Provide adequate time and extend if participants are still writing',
    ],
    stepsThai: [
      'สร้างเวิร์กชีตพร้อมคำแนะนำด้วยวาจาทั้งหมดที่เขียนบนกระดาษ',
      'รวมพื้นที่สำหรับผู้เข้าร่วมเขียนชื่อของพวกเขา',
      'ใส่กิจกรรมต่างๆ บนเวิร์กชีตแยกกัน',
      'เมื่อรวบรวมข้อเสนอแนะ ให้รวมภาพหรือแผนภาพของระบบ',
      'ให้เวลาที่เพียงพอและขยายเวลาหากผู้เข้าร่วมยังเขียนอยู่',
    ],
  },
];
