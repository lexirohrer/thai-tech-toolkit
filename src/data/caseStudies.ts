export interface CaseStudy {
  id: string;
  title: string;
  titleThai: string;
  location: string;
  duration: string;
  summary: string;
  summaryThai?: string;
  challenge: string;
  challengeThai?: string;
  approach: string;
  approachThai?: string;
  methods: string[];
  outcomes: string[];
  outcomesThai?: string[];
  lessons: string[];
  lessonsThai?: string[];
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'muvmi-tuk-tuks',
    title: 'MuvMi Electric Tuk Tuks',
    titleThai: 'มูฟมี รถตุ๊กตุ๊กไฟฟ้า',
    location: 'Bangkok',
    duration: 'August 2021 - Present',
    summary: 'A participatory design project with MuvMi, a Bangkok-based ridesharing startup operating electric tuk-tuks as a cleaner first-last mile alternative. The project explored integrating separate products for tourists and locals while maintaining quality user experience for both groups.',
    summaryThai: 'โครงการออกแบบแบบมีส่วนร่วมกับ MuvMi สตาร์ทอัปการแชร์รถในกรุงเทพฯ ที่ดำเนินการรถตุ๊กตุ๊กไฟฟ้าเป็นทางเลือกที่สะอาดกว่าสำหรับการเดินทางช่วงแรก-สุดท้าย โครงการสำรวจการบูรณาการผลิตภัณฑ์แยกสำหรับนักท่องเที่ยวและคนท้องถิ่นในขณะที่รักษาประสบการณ์ผู้ใช้ที่มีคุณภาพสำหรับทั้งสองกลุ่ม',
    challenge: 'MuvMi offered separate products for tourists and locals, but needed to explore integration while serving both groups. Ethnographic research revealed contrasting mental models: locals accepted zone-based travel limits as familiar from traditional gas tuk-tuks, while tourists—guided by on-demand "Uber-like" expectations—found these constraints confusing. The checkout flow was also problematic, with users unable to easily differentiate ride types.',
    challengeThai: 'MuvMi เสนอผลิตภัณฑ์แยกสำหรับนักท่องเที่ยวและคนท้องถิ่น แต่จำเป็นต้องสำรวจการบูรณาการในขณะที่ให้บริการทั้งสองกลุ่ม การวิจัยชาติพันธุ์วิทยาเปิดเผยแบบจำลองทางจิตใจที่แตกต่างกัน: คนท้องถิ่นยอมรับข้อจำกัดการเดินทางตามโซนตามที่คุ้นเคยจากรถตุ๊กตุ๊กที่ใช้น้ำมันแบบดั้งเดิม ในขณะที่นักท่องเที่ยว—ที่ได้รับแรงบันดาลใจจากความคาดหวังแบบ "Uber" แบบเรียลไทม์—พบว่าข้อจำกัดเหล่านี้สับสน นอกจากนี้โฟลว์การชำระเงินยังมีปัญหาด้วย ผู้ใช้ไม่สามารถแยกแยะประเภทการเดินทางได้ง่าย',
    approach: 'We conducted ethnographic ride-alongs with tourist users and group feedback sessions with local users. In workshops, users co-designed paper prototypes of the app, generating service concepts like showing travel zones visually on the map, having switchable "modes" for tourist vs local rides in one app, and expanding the driving radius for tourists willing to pay more. Observing tourists in real travel contexts produced more emotional and explicit feedback than past methods.',
    approachThai: 'เราดำเนินการวิจัยชาติพันธุ์วิทยาแบบนั่งรถไปด้วยกับผู้ใช้ที่เป็นนักท่องเที่ยวและเซสชันการให้ข้อเสนอแนะแบบกลุ่มกับผู้ใช้ท้องถิ่น ในเวิร์กช็อป ผู้ใช้ร่วมออกแบบโปรโตไทป์กระดาษของแอป สร้างแนวคิดบริการเช่นการแสดงโซนการเดินทางบนแผนที่ การมี "โหมด" ที่เปลี่ยนได้สำหรับการเดินทางของนักท่องเที่ยวเทียบกับคนท้องถิ่นในแอปเดียว และขยายรัศมีการขับขี่สำหรับนักท่องเที่ยวที่ยินดีจ่ายมากขึ้น การสังเกตนักท่องเที่ยวในบริบทการเดินทางจริงสร้างข้อเสนอแนะทางอารมณ์และชัดเจนมากกว่าวิธีการในอดีต',
    methods: ['Ethnographic Research', 'Group Feedback Sessions', 'Paper Prototyping', 'Co-design Workshops', 'User Interviews'],
    outcomes: [
      'Co-designed features including visual zone display on map, switchable modes for tourist vs local rides, and expanded driving radius for tourists—all implemented by MuvMi within months of workshop completion',
      'Revealed contrasting mental models: locals accepted zone-based limits as familiar, while tourists found constraints confusing based on on-demand service expectations',
      'Generated deeper insights than past surveys and interviews—observing users in real contexts captured emotional responses and genuine frustration or happiness',
      'Paper prototyping activities made users think deeper about what they want and why, beyond just identifying dislikes',
    ],
    outcomesThai: [
      'คุณสมบัติที่ร่วมออกแบบรวมถึงการแสดงโซนบนแผนที่ โหมดที่เปลี่ยนได้สำหรับการเดินทางของนักท่องเที่ยวเทียบกับคนท้องถิ่น และรัศมีการขับขี่ที่ขยายสำหรับนักท่องเที่ยว—ทั้งหมดถูกนำไปใช้โดย MuvMi ภายในไม่กี่เดือนหลังจากเสร็จสิ้นเวิร์กช็อป',
      'เปิดเผยแบบจำลองทางจิตใจที่แตกต่างกัน: คนท้องถิ่นยอมรับข้อจำกัดตามโซนตามที่คุ้นเคย ในขณะที่นักท่องเที่ยวพบว่าข้อจำกัดสับสนตามความคาดหวังของบริการแบบเรียลไทม์',
      'สร้างข้อมูลเชิงลึกที่ลึกซึ้งกว่าการสำรวจและการสัมภาษณ์ในอดีต—การสังเกตผู้ใช้ในบริบทจริงจับการตอบสนองทางอารมณ์และความหงุดหงิดหรือความสุขที่แท้จริง',
      'กิจกรรมการสร้างต้นแบบกระดาษทำให้ผู้ใช้คิดลึกขึ้นเกี่ยวกับสิ่งที่พวกเขาต้องการและทำไม เกินกว่าการระบุสิ่งที่พวกเขาไม่ชอบ',
    ],
    lessons: [
      'Observing users in real travel contexts produces more emotional and explicit feedback than surveys and interviews—capturing what users felt, not just what they said',
      'Paper prototyping requires users to think deeper about what they want and why, creating another layer of insight beyond identifying problems',
      'Recruitment methods must align with cultural norms—street recruitment common in Western startups is uncomfortable in Thai culture, requiring alternatives like Facebook Pages and Line Groups',
      'Integrating participatory design into fast-moving startup environments requires lightweight adaptations like templates, defined activity sets, and ready-to-use paper mockup kits',
    ],
    lessonsThai: [
      'การสังเกตผู้ใช้ในบริบทการเดินทางจริงสร้างข้อเสนอแนะทางอารมณ์และชัดเจนมากกว่าการสำรวจและการสัมภาษณ์—จับสิ่งที่ผู้ใช้รู้สึก ไม่ใช่แค่สิ่งที่พวกเขาพูด',
      'การสร้างต้นแบบกระดาษต้องการให้ผู้ใช้คิดลึกขึ้นเกี่ยวกับสิ่งที่พวกเขาต้องการและทำไม สร้างชั้นข้อมูลเชิงลึกอื่นนอกเหนือจากการระบุปัญหา',
      'วิธีการสรรหาผู้เข้าร่วมต้องสอดคล้องกับบรรทัดฐานทางวัฒนธรรม—การสรรหาบนท้องถนนที่พบบ่อยในสตาร์ทอัปตะวันตกไม่สะดวกสบายในวัฒนธรรมไทย ต้องการทางเลือกเช่น Facebook Pages และ Line Groups',
      'การบูรณาการการออกแบบแบบมีส่วนร่วมเข้ากับสภาพแวดล้อมสตาร์ทอัปที่เคลื่อนไหวอย่างรวดเร็วต้องการการปรับตัวแบบเบาเช่นเทมเพลต ชุดกิจกรรมที่กำหนด และชุดโปรโตไทป์กระดาษที่พร้อมใช้งาน',
    ],
  },
  {
    id: 'bridgebox-disaster-response',
    title: 'BridgeBox',
    titleThai: 'บริดจ์บ็อกซ์',
    location: 'Songkhla Province',
    duration: '10 months',
    summary: 'A 10-month collaboration with BridgeBox, a Thai startup developing digital communication systems for climate disasters. The project used participatory design to make the platform more accessible to rural users with low digital literacy, involving both "reporters" (rural users) and "responders" (local governments, nonprofits, employers).',
    summaryThai: 'ความร่วมมือ 10 เดือนกับ BridgeBox สตาร์ทอัปไทยที่พัฒนาระบบการสื่อสารดิจิทัลสำหรับภัยพิบัติทางสภาพอากาศ โครงการใช้การออกแบบแบบมีส่วนร่วมเพื่อทำให้แพลตฟอร์มเข้าถึงได้มากขึ้นสำหรับผู้ใช้ชนบทที่มีความสามารถทางดิจิทัลต่ำ เกี่ยวข้องกับทั้ง "ผู้รายงาน" (ผู้ใช้ชนบท) และ "ผู้ตอบสนอง" (รัฐบาลท้องถิ่น องค์กรพัฒนาเอกชน นายจ้าง)',
    challenge: 'BridgeBox needed to make their disaster response platform accessible to rural users in politically sensitive Songkhla Province who had lower technical literacy than urban participants. These users were unfamiliar with design terminology and required tools that work within their context, respecting existing communication networks and infrastructure limitations like unreliable mobile data.',
    challengeThai: 'BridgeBox จำเป็นต้องทำให้แพลตฟอร์มการตอบสนองภัยพิบัติของพวกเขาสามารถเข้าถึงได้สำหรับผู้ใช้ชนบทในจังหวัดสงขลาที่มีความอ่อนไหวทางการเมืองซึ่งมีความสามารถทางเทคนิคต่ำกว่าผู้เข้าร่วมในเมือง ผู้ใช้เหล่านี้ไม่คุ้นเคยกับคำศัพท์การออกแบบและต้องการเครื่องมือที่ทำงานภายในบริบทของพวกเขา เคารพเครือข่ายการสื่อสารที่มีอยู่และข้อจำกัดด้านโครงสร้างพื้นฐานเช่นข้อมูลมือถือที่ไม่น่าเชื่อถือ',
    approach: 'We conducted five co-design workshops involving both reporters and responders. In-person sessions were essential for building trust, as many participants weren\'t comfortable with tools like Zoom and online whiteboards—using familiar tools like pen and paper put them at ease. Workshops required extra detailed instructions, such as step-by-step guidance for generative sketching exercises. Flexible pacing was crucial, as Thailand\'s polychronic view of time meant discussions continued past timers until consensus was reached.',
    approachThai: 'เราจัดเวิร์กช็อปการออกแบบร่วมกันห้าครั้งที่เกี่ยวข้องกับทั้งผู้รายงานและผู้ตอบสนอง เซสชันแบบตัวต่อตัวมีความจำเป็นสำหรับการสร้างความไว้วางใจ เนื่องจากผู้เข้าร่วมหลายคนไม่สบายใจกับเครื่องมือเช่น Zoom และไวท์บอร์ดออนไลน์—การใช้เครื่องมือที่คุ้นเคยเช่นปากกาและกระดาษทำให้พวกเขาสบายใจ เวิร์กช็อปต้องการคำแนะนำที่ละเอียดเพิ่มเติม เช่นคำแนะนำทีละขั้นตอนสำหรับแบบฝึกหัดการวาดภาพแบบสร้างสรรค์ การกำหนดจังหวะแบบยืดหยุ่นมีความสำคัญ เนื่องจากมุมมองเวลาพหุเวลา (polychronic) ของไทยหมายความว่าการอภิปรายดำเนินต่อไปหลังจากหมดเวลาจนกว่าจะได้ฉันทามติ',
    methods: ['Co-design Workshops', 'Generative Sketching', 'Participatory Design', 'Field Research', 'In-person Facilitation'],
    outcomes: [
      'Co-designed concrete features including offline emergency reporting, proxy reporting for users without smartphones, and alert features for critical announcements from responders to rural users',
      'Generated more "creative and realistic" solutions than previous interview and focus group sessions, such as sending site visit photos via app using cell service when mobile data might not be available',
      'Increased rural users\' confidence in adopting and advocating for the technology—participants took ownership in designing, realizing existing processes didn\'t work well',
      'Built reciprocal relationship where technology and rural users enhance each other\'s effectiveness, spanning Smart Citizens, Smart Environment, and Smart Living pillars',
    ],
    outcomesThai: [
      'คุณสมบัติที่เป็นรูปธรรมที่ร่วมออกแบบรวมถึงการรายงานเหตุฉุกเฉินแบบออฟไลน์ การรายงานแทนสำหรับผู้ใช้ที่ไม่มีสมาร์ทโฟน และคุณสมบัติการแจ้งเตือนสำหรับประกาศสำคัญจากผู้ตอบสนองไปยังผู้ใช้ชนบท',
      'สร้างโซลูชันที่ "สร้างสรรค์และสมจริง" มากกว่าเซสชันการสัมภาษณ์และกลุ่มโฟกัสก่อนหน้านี้ เช่นการส่งภาพถ่ายการเยี่ยมชมสถานที่ผ่านแอปโดยใช้บริการเซลลูลาร์เมื่อข้อมูลมือถืออาจไม่พร้อมใช้งาน',
      'เพิ่มความมั่นใจของผู้ใช้ชนบทในการนำมาใช้และสนับสนุนเทคโนโลยี—ผู้เข้าร่วมรับเป็นเจ้าของในการออกแบบ ตระหนักว่ากระบวนการที่มีอยู่ไม่ทำงานได้ดี',
      'สร้างความสัมพันธ์แบบตอบแทนซึ่งเทคโนโลยีและผู้ใช้ชนบทเพิ่มประสิทธิภาพซึ่งกันและกัน ครอบคลุมเสาหลัก Smart Citizens, Smart Environment, และ Smart Living',
    ],
    lessons: [
      'In-person sessions are essential for building trust with rural users uncomfortable with digital tools—face-to-face interaction allows facilitators to see the time participants spend to write down what they actually think',
      'Workshops with lower technical literacy participants require extra detailed instructions, breaking down activities into clear sequential steps rather than assuming design terminology familiarity',
      'Thailand\'s polychronic view of time means flexible pacing is crucial—discussions continue until consensus is reached, and strict time-boxing is less effective than scheduling multiple sessions',
      'Generative sketching encourages participants to propose ideas different from existing software, framing feedback as preference-based rather than direct critique, which increases engagement and ownership',
    ],
    lessonsThai: [
      'เซสชันแบบตัวต่อตัวมีความจำเป็นสำหรับการสร้างความไว้วางใจกับผู้ใช้ชนบทที่ไม่สบายใจกับเครื่องมือดิจิทัล—การโต้ตอบแบบเผชิญหน้ามีให้ผู้ดำเนินการเห็นเวลาที่ผู้เข้าร่วมใช้ในการเขียนสิ่งที่พวกเขาคิดจริงๆ',
      'เวิร์กช็อปกับผู้เข้าร่วมที่มีความสามารถทางเทคนิคต่ำต้องการคำแนะนำที่ละเอียดเพิ่มเติม แบ่งกิจกรรมออกเป็นขั้นตอนตามลำดับที่ชัดเจนแทนที่จะสันนิษฐานว่าคุ้นเคยกับคำศัพท์การออกแบบ',
      'มุมมองเวลาพหุเวลาของไทยหมายความว่าการกำหนดจังหวะแบบยืดหยุ่นมีความสำคัญ—การอภิปรายดำเนินต่อไปจนกว่าจะได้ฉันทามติ และการกำหนดเวลาอย่างเข้มงวดมีประสิทธิภาพน้อยกว่าการกำหนดเวลาหลายเซสชัน',
      'การวาดภาพแบบสร้างสรรค์ส่งเสริมให้ผู้เข้าร่วมเสนอแนวคิดที่แตกต่างจากซอฟต์แวร์ที่มีอยู่ ทำให้ข้อเสนอแนะเป็นแบบตามความชอบมากกว่าการวิจารณ์โดยตรง ซึ่งเพิ่มการมีส่วนร่วมและความเป็นเจ้าของ',
    ],
  },
  {
    id: 'clean-energy-solar',
    title: 'Clean Energy Solar Accessibility',
    titleThai: 'การเข้าถึงพลังงานแสงอาทิตย์',
    location: 'Bangkok',
    duration: 'Workshop-based project',
    summary: 'A partnership between TDRI and New Energy Nexus to improve accessibility to solar power for individual users. The project focused on understanding and addressing barriers in learning about and installing solar systems, including selecting certified technicians, navigating government regulations, and understanding energy resale frameworks.',
    summaryThai: 'ความร่วมมือระหว่าง TDRI และ New Energy Nexus เพื่อปรับปรุงการเข้าถึงพลังงานแสงอาทิตย์สำหรับผู้ใช้รายบุคคล โครงการมุ่งเน้นการทำความเข้าใจและแก้ไขอุปสรรคในการเรียนรู้เกี่ยวกับและติดตั้งระบบพลังงานแสงอาทิตย์ รวมถึงการเลือกช่างเทคนิคที่ได้รับการรับรอง การนำทางกฎระเบียบของรัฐบาล และการทำความเข้าใจกรอบการขายพลังงานกลับ',
    challenge: 'Purchasing and installing solar systems is confusing due to a lack of clear, accessible guidance. User needs varied by expertise level: experts and solar businesspeople prioritized technical and regulatory details, while curious novices sought more general guidance. Users needed one easy place to find personal energy usage calculators, regulatory knowledge like permits, and technician credentials.',
    challengeThai: 'การซื้อและติดตั้งระบบพลังงานแสงอาทิตย์สับสนเนื่องจากขาดคำแนะนำที่ชัดเจนและเข้าถึงได้ ความต้องการของผู้ใช้แตกต่างกันตามระดับความเชี่ยวชาญ: ผู้เชี่ยวชาญและนักธุรกิจพลังงานแสงอาทิตย์ให้ความสำคัญกับรายละเอียดทางเทคนิคและกฎระเบียบ ในขณะที่ผู้เริ่มต้นที่อยากรู้แสวงหาคำแนะนำทั่วไปมากขึ้น ผู้ใช้ต้องการสถานที่เดียวที่ง่ายต่อการค้นหาเครื่องคำนวณการใช้พลังงานส่วนบุคคล ความรู้ด้านกฎระเบียบเช่นใบอนุญาต และข้อมูลประจำตัวของช่างเทคนิค',
    approach: 'We conducted two participatory design workshops that validated previously identified barriers to installing solar and had users co-design platforms to support the learning and installation process. Participants designed a Line-based AI chatbot as the preferred platform, creating conversation flows for analyzing energy bills, choosing solar systems through quizzes, and browsing technicians—all through the familiar Line app interface.',
    approachThai: 'เราจัดเวิร์กช็อปการออกแบบแบบมีส่วนร่วมสองครั้งที่ตรวจสอบอุปสรรคที่ระบุไว้ก่อนหน้านี้ในการติดตั้งพลังงานแสงอาทิตย์และให้ผู้ใช้ร่วมออกแบบแพลตฟอร์มเพื่อสนับสนุนกระบวนการเรียนรู้และการติดตั้ง ผู้เข้าร่วมออกแบบแชทบอท AI แบบ Line เป็นแพลตฟอร์มที่ต้องการ สร้างโฟลว์การสนทนาสำหรับการวิเคราะห์บิลพลังงาน การเลือกระบบพลังงานแสงอาทิตย์ผ่านแบบทดสอบ และการเรียกดูช่างเทคนิค—ทั้งหมดผ่านอินเทอร์เฟซแอป Line ที่คุ้นเคย',
    methods: ['Participatory Design Workshops', 'Co-design', 'Service Blueprinting', 'Facilitator Training'],
    outcomes: [
      'Validated barriers to installing solar systems, confirming confusion around guidance and varying needs by expertise level',
      'Co-designed a Line-based AI chatbot platform that users were already comfortable using',
      'Created a service blueprint detailing the complete system users had co-designed',
      'Identified that users wanted integrated access to calculators, regulatory knowledge, and technician credentials in one place',
    ],
    outcomesThai: [
      'ตรวจสอบอุปสรรคในการติดตั้งระบบพลังงานแสงอาทิตย์ ยืนยันความสับสนเกี่ยวกับคำแนะนำและความต้องการที่แตกต่างกันตามระดับความเชี่ยวชาญ',
      'ร่วมออกแบบแพลตฟอร์มแชทบอท AI แบบ Line ที่ผู้ใช้รู้สึกสบายใจอยู่แล้ว',
      'สร้างพิมพ์เขียวบริการที่อธิบายรายละเอียดระบบที่สมบูรณ์ที่ผู้ใช้ได้ร่วมออกแบบ',
      'ระบุว่าผู้ใช้ต้องการการเข้าถึงแบบบูรณาการไปยังเครื่องคำนวณ ความรู้ด้านกฎระเบียบ และข้อมูลประจำตัวของช่างเทคนิคในที่เดียว',
    ],
    lessons: [
      'Highly structured facilitation with clear activity sequences, explicit goals, and worksheets is essential for meaningful engagement',
      'Without proper structure and experienced facilitation, participants engage in circular discussions and hesitate to co-design',
      'Balanced participant-to-observer ratios are crucial to avoid increasing nervousness related to hierarchy and seniority',
      'Platform familiarity matters—using Line, which users already use daily, increases adoption and comfort with new services',
    ],
    lessonsThai: [
      'การดำเนินการที่มีโครงสร้างสูงพร้อมลำดับกิจกรรมที่ชัดเจน เป้าหมายที่ชัดเจน และเวิร์กชีตเป็นสิ่งจำเป็นสำหรับการมีส่วนร่วมที่มีความหมาย',
      'โดยไม่มีโครงสร้างที่เหมาะสมและการดำเนินการที่มีประสบการณ์ ผู้เข้าร่วมมีส่วนร่วมในการอภิปรายแบบวงกลมและลังเลที่จะร่วมออกแบบ',
      'อัตราส่วนผู้เข้าร่วมต่อผู้สังเกตการณ์ที่สมดุลมีความสำคัญอย่างยิ่งเพื่อหลีกเลี่ยงการเพิ่มความวิตกกังวลที่เกี่ยวข้องกับลำดับชั้นและอาวุโส',
      'ความคุ้นเคยกับแพลตฟอร์มมีความสำคัญ—การใช้ Line ซึ่งผู้ใช้ใช้อยู่แล้วทุกวัน เพิ่มการยอมรับและความสบายใจกับบริการใหม่',
    ],
  },
  {
    id: 'smart-pole-motorbike-taxi',
    title: 'Smart Pole Motorbike Taxi System',
    titleThai: 'เสาเรียกมอเตอร์ไซค์รับจ้างอัจฉริยะ',
    location: 'Bangkok',
    duration: '2024',
    summary: 'A Bangkok City Lab project aimed at reducing congestion at popular motorbike taxi pickup points through a "Smart Pole" system that allows users to summon taxis from less crowded nearby areas. This project moved beyond speaking with users to having them interact directly with a prototype and generate ideas to improve the system.',
    summaryThai: 'โครงการ Bangkok City Lab ที่มุ่งลดความแออัดที่จุดรับมอเตอร์ไซค์รับจ้างยอดนิยมผ่านระบบ "Smart Pole" ที่ช่วยให้ผู้ใช้เรียกแท็กซี่จากพื้นที่ใกล้เคียงที่แออัดน้อยกว่า โครงการนี้ก้าวไปไกลกว่าการพูดคุยกับผู้ใช้ไปสู่การให้พวกเขามีปฏิสัมพันธ์โดยตรงกับโปรโตไทป์และสร้างความคิดเพื่อปรับปรุงระบบ',
    challenge: 'Popular motorbike taxi pickup points experience significant congestion. The challenge was to design a system that would distribute demand and reduce wait times, while ensuring the solution was usable and aligned with how users actually interact with motorbike taxi services.',
    challengeThai: 'จุดรับมอเตอร์ไซค์รับจ้างยอดนิยมประสบความแออัดอย่างมาก ความท้าทายคือการออกแบบระบบที่จะกระจายความต้องการและลดเวลารอ ในขณะที่ทำให้แน่ใจว่าโซลูชันใช้งานได้และสอดคล้องกับวิธีที่ผู้ใช้มีปฏิสัมพันธ์กับบริการมอเตอร์ไซค์รับจ้างจริงๆ',
    approach: 'BCL conducted a usability and co-design workshop with six university students at the planned pilot site. Participants first shared personal experiences with motorbike taxis, then explored the Smart Pole prototype independently, and finally sketched improvements in a group session. Structured worksheets and routines of writing thoughts before speaking guided users to share divergent experiences.',
    approachThai: 'BCL จัดเวิร์กช็อปการใช้งานและการออกแบบร่วมกันกับนักศึกษามหาวิทยาลัยหกคนที่ไซต์นำร่องที่วางแผนไว้ ผู้เข้าร่วมแบ่งปันประสบการณ์ส่วนตัวกับมอเตอร์ไซค์รับจ้างก่อน จากนั้นสำรวจโปรโตไทป์ Smart Pole อย่างอิสระ และสุดท้ายร่างการปรับปรุงในเซสชันกลุ่ม เวิร์กชีตที่มีโครงสร้างและกิจวัตรของการเขียนความคิดก่อนพูดแนะนำผู้ใช้ให้แบ่งปันประสบการณ์ที่แตกต่างกัน',
    methods: ['Usability Testing', 'Co-design Workshops', 'Prototype Testing', 'Contextual Testing', 'Sketching'],
    outcomes: [
      'Identified critical usability issues including unlabeled numbers on signs, unclear queueing instructions, and uncertainty about taxi selection',
      'Revealed that users\' mental models shifted from "taxi" to "ride-sharing service" when technology was introduced',
      'Participants assumed a companion app should exist to track taxis, highlighting expectations for digital integration',
      'Provided detailed understanding of systemic problems that influence the system, beyond initial assumptions',
    ],
    outcomesThai: [
      'ระบุปัญหาการใช้งานที่สำคัญรวมถึงตัวเลขที่ไม่มีป้ายกำกับบนป้าย คำแนะนำการเข้าคิวที่ไม่ชัดเจน และความไม่แน่นอนเกี่ยวกับการเลือกแท็กซี่',
      'เปิดเผยว่าแบบจำลองทางจิตใจของผู้ใช้เปลี่ยนจาก "แท็กซี่" เป็น "บริการแชร์รถ" เมื่อมีการแนะนำเทคโนโลยี',
      'ผู้เข้าร่วมสันนิษฐานว่าควรมีแอปร่วมเพื่อติดตามแท็กซี่ เน้นความคาดหวังสำหรับการบูรณาการดิจิทัล',
      'ให้ความเข้าใจโดยละเอียดเกี่ยวกับปัญหาทางระบบที่มีอิทธิพลต่อระบบ เกินกว่าสมมติฐานเบื้องต้น',
    ],
    lessons: [
      'Testing prototypes in context reveals critical issues that interviews alone cannot uncover',
      'Structured worksheets help users articulate thoughts clearly and converge toward solutions without circular discussion',
      'Writing thoughts before speaking guides users to share divergent experiences without simply agreeing with each other',
      'Balancing system designers\' ability to observe with hierarchical effects is important—participants may hold back candid feedback when designers are present',
    ],
    lessonsThai: [
      'การทดสอบโปรโตไทป์ในบริบทเปิดเผยปัญหาที่สำคัญที่การสัมภาษณ์เพียงอย่างเดียวไม่สามารถเปิดเผยได้',
      'เวิร์กชีตที่มีโครงสร้างช่วยให้ผู้ใช้แสดงความคิดเห็นอย่างชัดเจนและบรรจบกันไปสู่โซลูชันโดยไม่ต้องอภิปรายแบบวงกลม',
      'การเขียนความคิดก่อนพูดแนะนำผู้ใช้ให้แบ่งปันประสบการณ์ที่แตกต่างกันโดยไม่เพียงแค่เห็นด้วยกับกันและกัน',
      'การสร้างสมดุลระหว่างความสามารถของนักออกแบบระบบในการสังเกตกับผลกระทบของลำดับชั้นมีความสำคัญ—ผู้เข้าร่วมอาจระงับข้อเสนอแนะที่ตรงไปตรงมาเมื่อนักออกแบบอยู่',
    ],
  },
];
