import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { en: 'Home', th: 'หน้าแรก' },
  'nav.methods': { en: 'Methods', th: 'วิธีการ' },
  'nav.caseStudies': { en: 'Case Studies', th: 'กรณีศึกษา' },
  'nav.about': { en: 'About', th: 'เกี่ยวกับ' },
  'nav.designToolkit': { en: 'Design Toolkit', th: 'ชุดเครื่องมือการออกแบบ' },

  // Hero Section
  'hero.title': { en: 'A toolkit for doing co-design research in Thailand', th: 'ชุดเครื่องมือสำหรับการวิจัยการออกแบบร่วมกันในประเทศไทย' },
  'hero.iHave': { en: 'I have', th: 'ฉันมี' },
  'hero.experience': { en: 'experience', th: 'ประสบการณ์' },
  'hero.facilitating': { en: 'facilitating', th: 'ในการดำเนินการ' },
  'hero.beginnerExperience': { en: 'beginner experience', th: 'ประสบการณ์ระดับเริ่มต้น' },
  'hero.someExperience': { en: 'some experience', th: 'ประสบการณ์บ้าง' },
  'hero.extensiveExperience': { en: 'extensive experience', th: 'ประสบการณ์มาก' },
  'hero.imTryingTo': { en: "I'm trying to", th: 'ฉันกำลังพยายาม' },
  'hero.achieveGoal': { en: 'achieve a goal', th: 'บรรลุเป้าหมาย' },
  'hero.understandUsers': { en: 'understand users better', th: 'เข้าใจผู้ใช้ให้ดีขึ้น' },
  'hero.defineProblem': { en: 'define the problem', th: 'กำหนดปัญหา' },
  'hero.generateSolutions': { en: 'generate solutions', th: 'สร้างแนวทางแก้ไข' },
  'hero.testIdeas': { en: 'test my ideas', th: 'ทดสอบความคิดของฉัน' },
  'hero.gatherFeedback': { en: 'gather feedback', th: 'รวบรวมความคิดเห็น' },
  'hero.evaluateEffectiveness': { en: 'evaluate effectiveness', th: 'ประเมินประสิทธิภาพ' },
  'hero.projectInPhase': { en: 'my project is in phase', th: 'โครงการของฉันอยู่ในระยะ' },
  'hero.selectPhase': { en: 'select phase', th: 'เลือกระยะ' },
  'hero.findMethods': { en: 'Find Methods', th: 'ค้นหาวิธีการ' },
  'hero.browseAllMethods': { en: 'or, browse all methods', th: 'หรือ ดูวิธีการทั้งหมด' },
  'hero.and': { en: ', and', th: ', และ' },

  // Methods Section
  'methods.title': { en: 'All Methods', th: 'วิธีการทั้งหมด' },
  'methods.subtitle': { en: 'Browse our collection of culturally-adapted design research methods.', th: 'เรียกดูคอลเลกชันวิธีการวิจัยการออกแบบที่ปรับให้เหมาะกับวัฒนธรรม' },
  'methods.searchPlaceholder': { en: 'Search methods by name, description, or cultural tips...', th: 'ค้นหาวิธีการตามชื่อ คำอธิบาย หรือเคล็ดลับทางวัฒนธรรม...' },
  'methods.noMatch': { en: 'No methods match your current filters.', th: 'ไม่พบวิธีการที่ตรงกับตัวกรองปัจจุบัน' },
  'methods.researchMethods': { en: 'Research Methods', th: 'วิธีการวิจัย' },
  'methods.pageSubtitle': { en: 'Browse our collection of culturally-adapted design research methods. Filter by phase of the design process or by difficulty level to find the right method for your project.', th: 'เรียกดูคอลเลกชันวิธีการวิจัยการออกแบบที่ปรับให้เหมาะกับวัฒนธรรม กรองตามขั้นตอนของกระบวนการออกแบบหรือระดับความยากเพื่อค้นหาวิธีที่เหมาะสมกับโครงการของคุณ' },
  'methods.noMatchAdjust': { en: 'No methods match your current filters. Try adjusting your selection.', th: 'ไม่พบวิธีการที่ตรงกับตัวกรอง ลองปรับการเลือกของคุณ' },

  // Filter Bar
  'filter.byPhase': { en: 'Project Phase', th: 'ระยะของโครงการ' },
  'filter.byDifficulty': { en: 'Facilitator Experience', th: 'ประสบการณ์ผู้ดำเนินการ' },
  'filter.byParticipants': { en: 'Number of Participants', th: 'จำนวนผู้เข้าร่วม' },
  'filter.byDigitalLiteracy': { en: 'User Digital Literacy', th: 'ทักษะดิจิทัลของผู้ใช้' },
  'filter.allPhases': { en: 'All Phases', th: 'ทุกระยะ' },
  'filter.allLevels': { en: 'All Levels', th: 'ทุกระดับ' },
  'filter.allParticipants': { en: 'All', th: 'ทั้งหมด' },
  'filter.allLiteracy': { en: 'All', th: 'ทั้งหมด' },

  // Method Card
  'method.learnMore': { en: 'Learn more', th: 'เรียนรู้เพิ่มเติม' },

  // Method Detail
  'methodDetail.backToMethods': { en: 'Back to Methods', th: 'กลับไปวิธีการ' },
  'methodDetail.level': { en: 'Level', th: 'ระดับ' },
  'methodDetail.overview': { en: 'Overview', th: 'ภาพรวม' },
  'methodDetail.whenToUse': { en: 'When to use', th: 'เมื่อใดควรใช้' },
  'methodDetail.materials': { en: 'Materials', th: 'วัสดุอุปกรณ์' },
  'methodDetail.culturalTip': { en: 'Cultural Adaptation Tip', th: 'เคล็ดลับการปรับให้เหมาะกับวัฒนธรรม' },
  'methodDetail.howToFacilitate': { en: 'How to Facilitate', th: 'วิธีดำเนินการ' },
  'methodDetail.facilitationDifficulty': { en: 'Facilitation Difficulty', th: 'ความยากในการดำเนินการ' },
  'methodDetail.beginner': { en: 'Suitable for first-time facilitators with basic preparation.', th: 'เหมาะสำหรับผู้ดำเนินการครั้งแรกที่มีการเตรียมพื้นฐาน' },
  'methodDetail.intermediate': { en: 'Requires some facilitation experience and thoughtful planning.', th: 'ต้องการประสบการณ์การดำเนินการและการวางแผนอย่างรอบคอบ' },
  'methodDetail.advanced': { en: 'Best suited for experienced facilitators who can adapt in real-time.', th: 'เหมาะที่สุดสำหรับผู้ดำเนินการที่มีประสบการณ์ซึ่งสามารถปรับตัวได้ทันที' },
  'methodDetail.notFound': { en: 'Method Not Found', th: 'ไม่พบวิธีการ' },

  // Case Studies
  'caseStudy.title': { en: 'Case Studies', th: 'กรณีศึกษา' },
  'caseStudy.subtitle': { en: 'Real research projects from Thailand that shaped this toolkit. Each case study demonstrates how methods were adapted and applied in practice.', th: 'โครงการวิจัยจริงจากประเทศไทยที่หล่อหลอมชุดเครื่องมือนี้ แต่ละกรณีศึกษาแสดงให้เห็นว่าวิธีการต่างๆ ถูกปรับใช้และนำไปใช้ในทางปฏิบัติอย่างไร' },
  'caseStudy.fulbrightResearch': { en: 'Fulbright Research', th: 'การวิจัย Fulbright' },
  'caseStudy.readCaseStudy': { en: 'Read case study', th: 'อ่านกรณีศึกษา' },
  'caseStudy.backToCaseStudies': { en: 'Back to Case Studies', th: 'กลับไปกรณีศึกษา' },
  'caseStudy.summary': { en: 'Summary', th: 'สรุป' },
  'caseStudy.theChallenge': { en: 'The Challenge', th: 'ความท้าทาย' },
  'caseStudy.ourApproach': { en: 'Our Approach', th: 'แนวทางของเรา' },
  'caseStudy.keyOutcomes': { en: 'Key Outcomes', th: 'ผลลัพธ์หลัก' },
  'caseStudy.lessonsLearned': { en: 'Lessons Learned', th: 'บทเรียนที่ได้รับ' },
  'caseStudy.notFound': { en: 'Case Study Not Found', th: 'ไม่พบกรณีศึกษา' },

  // About Page
  'about.title': { en: 'About This Toolkit', th: 'เกี่ยวกับชุดเครื่องมือนี้' },
  'about.subtitle': { en: 'How this collection of culturally-adapted design research methods came to be, and why it matters for Thai practitioners.', th: 'ว่าคอลเลกชันวิธีการวิจัยการออกแบบที่ปรับให้เหมาะกับวัฒนธรรมนี้เกิดขึ้นได้อย่างไร และทำไมจึงสำคัญสำหรับผู้ปฏิบัติงานชาวไทย' },
  'about.whyThisToolkit': { en: 'Why This Toolkit?', th: 'ทำไมต้องชุดเครื่องมือนี้?' },
  'about.whyDescription': { en: 'Standard design research methods often assume Western cultural norms. This toolkit adapts proven methods for Thai research contexts.', th: 'วิธีการวิจัยการออกแบบมาตรฐานมักถือเอาบรรทัดฐานทางวัฒนธรรมตะวันตก ชุดเครื่องมือนี้ปรับวิธีการที่พิสูจน์แล้วสำหรับบริบทการวิจัยของไทย' },
  'about.socialHarmony': { en: 'Social Harmony', th: 'ความสามัคคีทางสังคม' },
  'about.socialHarmonyDesc': { en: 'Methods designed to gather honest feedback while maintaining relationships and group cohesion.', th: 'วิธีการที่ออกแบบมาเพื่อรวบรวมความคิดเห็นที่ซื่อสัตย์ในขณะที่รักษาความสัมพันธ์และความสามัคคีของกลุ่ม' },
  'about.indirectFeedback': { en: 'Indirect Feedback', th: 'ข้อเสนอแนะทางอ้อม' },
  'about.indirectFeedbackDesc': { en: 'Techniques that surface critical insights without requiring direct confrontation or criticism.', th: 'เทคนิคที่เปิดเผยข้อมูลเชิงลึกที่สำคัญโดยไม่ต้องเผชิญหน้าหรือวิพากษ์วิจารณ์โดยตรง' },
  'about.hierarchySensitivity': { en: 'Hierarchy Sensitivity', th: 'ความอ่อนไหวต่อลำดับขั้น' },
  'about.hierarchySensitivityDesc': { en: 'Approaches that create space for all voices, regardless of age, status, or position.', th: 'แนวทางที่สร้างพื้นที่สำหรับเสียงทุกเสียง โดยไม่คำนึงถึงอายุ สถานะ หรือตำแหน่ง' },
  'about.originStory': { en: 'The Origin Story', th: 'ต้นกำเนิด' },
  'about.originP1': { en: 'This toolkit emerged from a Fulbright research project that explored how design research methods—developed primarily in Western contexts—could be adapted for Thai cultural settings.', th: 'ชุดเครื่องมือนี้เกิดจากโครงการวิจัย Fulbright ที่สำรวจว่าวิธีการวิจัยการออกแบบ—ที่พัฒนาขึ้นในบริบทตะวันตกเป็นหลัก—สามารถปรับให้เหมาะกับสถานการณ์ทางวัฒนธรรมของไทยได้อย่างไร' },
  'about.originP2': { en: 'During months of fieldwork across Thailand, we observed that many standard research techniques yielded surface-level insights. Participants would often provide polite, positive feedback even when they had concerns. Critical feedback was rare, and honest opinions about sensitive topics were difficult to surface.', th: 'ในระหว่างการทำงานภาคสนามหลายเดือนทั่วประเทศไทย เราสังเกตว่าเทคนิคการวิจัยมาตรฐานจำนวนมากให้ข้อมูลเชิงลึกในระดับผิวเผิน ผู้เข้าร่วมมักจะให้ข้อเสนอแนะที่สุภาพและเป็นบวกแม้ว่าพวกเขาจะมีข้อกังวล ความคิดเห็นเชิงวิพากษ์หายาก และความคิดเห็นที่ซื่อสัตย์เกี่ยวกับหัวข้อที่ละเอียดอ่อนนั้นยากที่จะปรากฏ' },
  'about.originP3': { en: 'We began experimenting with adaptations—changing how questions were framed, using visual and participatory methods, and creating conditions where indirect expression was valued. The methods in this toolkit represent what we learned.', th: 'เราเริ่มทดลองกับการปรับตัว—เปลี่ยนวิธีการตั้งคำถาม ใช้วิธีการแบบภาพและการมีส่วนร่วม และสร้างเงื่อนไขที่การแสดงออกทางอ้อมได้รับการยอมรับ วิธีการในชุดเครื่องมือนี้แสดงถึงสิ่งที่เราได้เรียนรู้' },
  'about.culturalContext': { en: 'Understanding the Cultural Context', th: 'ทำความเข้าใจบริบททางวัฒนธรรม' },
  'about.krengJai': { en: 'Kreng Jai (เกรงใจ)', th: 'เกรงใจ' },
  'about.krengJaiDesc': { en: "A reluctance to impose on others or cause discomfort. This cultural value means participants may withhold critical feedback to avoid making others feel bad.", th: 'ความไม่เต็มใจที่จะสร้างภาระให้ผู้อื่นหรือทำให้ไม่สบายใจ คุณค่าทางวัฒนธรรมนี้หมายความว่าผู้เข้าร่วมอาจปิดกั้นความคิดเห็นเชิงวิพากษ์เพื่อหลีกเลี่ยงการทำให้ผู้อื่นรู้สึกไม่ดี' },
  'about.face': { en: 'Face (หน้า)', th: 'หน้า' },
  'about.faceDesc': { en: 'Social reputation and dignity are highly valued. Research methods should create conditions where feedback can be given without anyone losing face.', th: 'ชื่อเสียงและศักดิ์ศรีทางสังคมมีคุณค่าสูง วิธีการวิจัยควรสร้างเงื่อนไขที่สามารถให้ข้อเสนอแนะได้โดยไม่มีใครเสียหน้า' },
  'about.hierarchy': { en: 'Hierarchy (ลำดับชั้น)', th: 'ลำดับชั้น' },
  'about.hierarchyDesc': { en: 'Age, status, and position significantly influence social interactions. Junior members may defer to seniors even when they have valuable insights.', th: 'อายุ สถานะ และตำแหน่งมีอิทธิพลอย่างมากต่อการปฏิสัมพันธ์ทางสังคม สมาชิกรุ่นน้องอาจยอมจำนนต่อรุ่นพี่แม้ว่าพวกเขาจะมีข้อมูลเชิงลึกที่มีค่า' },
  'about.indirectCommunication': { en: 'Indirect Communication', th: 'การสื่อสารทางอ้อม' },
  'about.indirectCommunicationDesc': { en: 'Direct criticism or confrontation is often avoided. Meaning is conveyed through context, tone, and what is left unsaid.', th: 'การวิพากษ์วิจารณ์โดยตรงหรือการเผชิญหน้ามักจะถูกหลีกเลี่ยง ความหมายถูกสื่อผ่านบริบท น้ำเสียง และสิ่งที่ไม่ได้พูด' },
  'about.howToUse': { en: 'How to Use This Toolkit', th: 'วิธีใช้ชุดเครื่องมือนี้' },
  'about.step1Title': { en: 'Start with Beginner Methods', th: 'เริ่มต้นด้วยวิธีการสำหรับผู้เริ่มต้น' },
  'about.step1Desc': { en: 'If you\'re new to design research, begin with methods rated as "Beginner" difficulty. These require less facilitation skill and are more forgiving.', th: 'หากคุณเพิ่งเริ่มต้นกับการวิจัยการออกแบบ ให้เริ่มด้วยวิธีการที่ได้รับการจัดอันดับว่า "ผู้เริ่มต้น" วิธีการเหล่านี้ต้องการทักษะการดำเนินการน้อยกว่าและมีความยืดหยุ่นมากกว่า' },
  'about.step2Title': { en: 'Match Methods to Your Phase', th: 'จับคู่วิธีการกับระยะของคุณ' },
  'about.step2Desc': { en: 'Use the phase filter to find methods appropriate for where you are in the design process—whether discovering insights or testing solutions.', th: 'ใช้ตัวกรองระยะเพื่อค้นหาวิธีการที่เหมาะสมกับตำแหน่งที่คุณอยู่ในกระบวนการออกแบบ—ไม่ว่าจะเป็นการค้นพบข้อมูลเชิงลึกหรือทดสอบโซลูชัน' },
  'about.step3Title': { en: 'Read the Cultural Tips', th: 'อ่านเคล็ดลับทางวัฒนธรรม' },
  'about.step3Desc': { en: 'Each method includes specific cultural adaptation guidance. These tips are drawn from real fieldwork experience and can make the difference between surface-level and genuine insights.', th: 'แต่ละวิธีการรวมถึงคำแนะนำการปรับตัวทางวัฒนธรรมโดยเฉพาะ เคล็ดลับเหล่านี้ได้มาจากประสบการณ์การทำงานภาคสนามจริงและสามารถสร้างความแตกต่างระหว่างข้อมูลเชิงลึกในระดับผิวเผินและข้อมูลเชิงลึกที่แท้จริง' },
  'about.step4Title': { en: 'Learn from Case Studies', th: 'เรียนรู้จากกรณีศึกษา' },
  'about.step4Desc': { en: 'The case studies show how methods were applied in real projects. Use them to understand context and potential adaptations for your work.', th: 'กรณีศึกษาแสดงให้เห็นว่าวิธีการต่างๆ ถูกนำไปใช้ในโครงการจริงอย่างไร ใช้พวกมันเพื่อทำความเข้าใจบริบทและการปรับตัวที่เป็นไปได้สำหรับงานของคุณ' },
  'about.acknowledgments': { en: 'Acknowledgments', th: 'กิตติกรรมประกาศ' },
  'about.acknowledgmentsText': { en: 'This toolkit was developed with support from the Fulbright Program and in collaboration with Thai universities, community organizations, and the many research participants who shared their time and insights. Special thanks to the local facilitators who helped adapt and refine these methods in practice.', th: 'ชุดเครื่องมือนี้ได้รับการพัฒนาด้วยการสนับสนุนจากโปรแกรม Fulbright และร่วมมือกับมหาวิทยาลัยไทย องค์กรชุมชน และผู้เข้าร่วมการวิจัยจำนวนมากที่แบ่งปันเวลาและข้อมูลเชิงลึกของพวกเขา ขอบคุณเป็นพิเศษสำหรับผู้ดำเนินการท้องถิ่นที่ช่วยปรับและปรับปรุงวิธีการเหล่านี้ในทางปฏิบัติ' },
  'about.fromTheField': { en: 'From the Field', th: 'จากภาคสนาม' },
  'about.realResearch': { en: 'Real Research, Real Insights', th: 'การวิจัยจริง ข้อมูลเชิงลึกจริง' },
  'about.realResearchDesc': { en: 'These methods were developed and refined through actual research projects across Thailand. Read the case studies to see how each method was applied in practice.', th: 'วิธีการเหล่านี้ได้รับการพัฒนาและปรับปรุงผ่านโครงการวิจัยจริงทั่วประเทศไทย อ่านกรณีศึกษาเพื่อดูว่าแต่ละวิธีการถูกนำไปใช้ในทางปฏิบัติอย่างไร' },
  'about.readCaseStudies': { en: 'Read Case Studies', th: 'อ่านกรณีศึกษา' },
  'about.readyToStart': { en: 'Ready to Start?', th: 'พร้อมเริ่มต้นหรือยัง?' },
  'about.readyToStartDesc': { en: 'Begin with beginner-friendly methods and build your research skills step by step.', th: 'เริ่มต้นด้วยวิธีการที่เหมาะกับผู้เริ่มต้นและสร้างทักษะการวิจัยของคุณทีละขั้นตอน' },
  'about.browseAllMethods': { en: 'Browse All Methods', th: 'ดูวิธีการทั้งหมด' },

  // Footer
  'footer.description': { en: 'A collection of culturally-adapted design research methods for Thai practitioners, developed through Fulbright research.', th: 'คอลเลกชันวิธีการวิจัยการออกแบบที่ปรับให้เหมาะกับวัฒนธรรมสำหรับผู้ปฏิบัติงานชาวไทย พัฒนาผ่านการวิจัย Fulbright' },
  'footer.quickLinks': { en: 'Quick Links', th: 'ลิงก์ด่วน' },
  'footer.methods': { en: 'Methods', th: 'วิธีการ' },
  'footer.caseStudies': { en: 'Case Studies', th: 'กรณีศึกษา' },
  'footer.aboutProject': { en: 'About This Project', th: 'เกี่ยวกับโครงการนี้' },
  'footer.acknowledgments': { en: 'Acknowledgments', th: 'กิตติกรรมประกาศ' },
  'footer.acknowledgmentsText': { en: 'This toolkit was developed as part of a Fulbright research project in collaboration with Thai universities and community organizations.', th: 'ชุดเครื่องมือนี้ได้รับการพัฒนาเป็นส่วนหนึ่งของโครงการวิจัย Fulbright ร่วมกับมหาวิทยาลัยไทยและองค์กรชุมชน' },
  'footer.copyright': { en: 'Design Toolkit. Open for adaptation and use.', th: 'ชุดเครื่องมือการออกแบบ เปิดให้ปรับใช้ได้' },
  'footer.madeWith': { en: 'Made with', th: 'สร้างด้วย' },
  'footer.forPractitioners': { en: 'for Thai research practitioners', th: 'สำหรับนักวิจัยชาวไทย' },

  // Facilitation Tips
  'facilitation.tipsForFacilitators': { en: 'Tips for facilitators', th: 'เคล็ดลับสำหรับผู้ดำเนินการ' },
  'facilitation.goal': { en: 'Your goal as a facilitator is to provide enough structure to guide participants without leading or biasing them.', th: 'เป้าหมายของคุณในฐานะผู้ดำเนินการคือให้โครงสร้างที่เพียงพอเพื่อแนะนำผู้เข้าร่วมโดยไม่ชี้นำหรือทำให้เกิดอคติ' },
  'facilitation.tip1': { en: 'Limit observers. They make participants hesitant to share and more sensitive to hierarchy.', th: 'จำกัดผู้สังเกตการณ์ พวกเขาทำให้ผู้เข้าร่วมลังเลที่จะแบ่งปันและไวต่อลำดับชั้น' },
  'facilitation.tip2': { en: 'Separate groups by seniority for more open expression.', th: 'แยกกลุ่มตามอาวุโสเพื่อการแสดงออกที่เปิดกว้าง' },
  'facilitation.tip3': { en: 'Give minimal context, and wait for users to figure out the system themselves. Explain goals, not how the system works.', th: 'ให้บริบทน้อยที่สุด และรอให้ผู้ใช้เข้าใจระบบด้วยตนเอง อธิบายเป้าหมาย ไม่ใช่การทำงานของระบบ' },
  'facilitation.tip4': { en: 'Don\'t make assumptions—ask the user to explain why they feel a certain way. Avoid leading questions that bias responses.', th: 'อย่าสร้างสมมติฐาน—ถามผู้ใช้ให้อธิบายว่าทำไมถึงรู้สึกแบบนั้น หลีกเลี่ยงคำถามชี้นำที่ทำให้เกิดอคติในการตอบ' },
  'facilitation.tip6': { en: 'Have someone other than the designer host the session. Tell participants you didn\'t create the designs so they can critique with less hesitation to offend you.', th: 'ให้คนอื่นที่ไม่ใช่ผู้ออกแบบเป็นผู้ดำเนินการเซสชัน บอกผู้เข้าร่วมว่าคุณไม่ได้สร้างการออกแบบเพื่อให้วิจารณ์ได้โดยลังเลน้อยลงที่จะทำให้คุณไม่พอใจ' },
  'facilitation.tip7': { en: 'After writing activities, invite quieter members to share their thoughts. Affirm their contributions to build confidence.', th: 'หลังกิจกรรมการเขียน เชิญสมาชิกที่เงียบกว่าให้แบ่งปันความคิดเห็น ยืนยันการมีส่วนร่วมเพื่อสร้างความมั่นใจ' },
  'facilitation.tip8': { en: 'Participants may want to continue discussing until they reach consensus, even if allocated time is up. Budget for discussions to run over time and workshops to take longer than expected.', th: 'ผู้เข้าร่วมอาจต้องการอภิปรายต่อไปจนกว่าจะบรรลุฉันทามติ แม้เวลาที่กำหนดไว้จะหมดแล้ว วางแผนงบประมาณให้การอภิปรายใช้เวลานานเกินกำหนดและเวิร์กช็อปใช้เวลานานกว่าที่คาดไว้' },
  'facilitation.tip9': { en: 'Conduct research in person whenever possible, especially when working with users who may have lower digital literacy (e.g. rural users, elder users, etc).', th: 'ดำเนินการวิจัยแบบพบหน้ากันเมื่อเป็นไปได้ โดยเฉพาะเมื่อทำงานกับผู้ใช้ที่มีทักษะดิจิทัลต่ำ (เช่น ผู้ใช้ในชนบท ผู้ใช้สูงอายุ เป็นต้น)' },
  'facilitation.commonChallenges': { en: 'Common Challenges', th: 'ความท้าทายทั่วไป' },
  'facilitation.challenge1': { en: 'Everyone is agreeing with the first person who speaks', th: 'ทุกคนเห็นด้วยกับคนแรกที่พูด' },
  'facilitation.challenge1Solution': { en: 'Switch to using Write-then-Speak methods, or anonymous Dot Voting to choose between ideas.', th: 'เปลี่ยนไปใช้วิธีการเขียนก่อนพูด หรือการลงคะแนนด้วยจุดแบบไม่ระบุชื่อเพื่อเลือกระหว่างไอเดีย' },
  'facilitation.challenge2': { en: 'People won\'t sketch', th: 'ผู้คนไม่ยอมวาดภาพ' },
  'facilitation.challenge2Solution': { en: 'Use paper components that are pre-built, or use worksheets that have some structure (such as phone outlines, already labelled to tell them the step of the journey they should draw).', th: 'ใช้ส่วนประกอบกระดาษที่สร้างไว้ล่วงหน้า หรือใช้เวิร์กชีตที่มีโครงสร้างบางอย่าง (เช่น รูปทรงโทรศัพท์ที่มีป้ายบอกขั้นตอนของกระบวนการที่ควรวาด)' },
  'facilitation.challenge3': { en: 'People are too polite to critique the designs in front of authority', th: 'ผู้คนสุภาพเกินไปที่จะวิจารณ์การออกแบบต่อหน้าผู้มีอำนาจ' },
  'facilitation.challenge3Solution': { en: 'Remove observers; make any designers or builders of the system leave; ask people to write their thoughts on worksheets or sticky notes, and put people in pairs to discuss.', th: 'ลบผู้สังเกตการณ์ ให้ผู้ออกแบบหรือผู้สร้างระบบออก ขอให้ผู้คนเขียนความคิดของพวกเขาบนเวิร์กชีตหรือโน้ตติด และจับคู่ผู้คนเพื่ออภิปราย' },
  'facilitation.challenge4': { en: 'People are just echoing others\' thoughts', th: 'ผู้คนเพียงแค่ทำซ้ำความคิดของผู้อื่น' },
  'facilitation.challenge4Solution': { en: 'Ask more specific follow-up questions. Instead of "What problems do you have with this system?", ask "What was the most frustrating moment in this process?", or "Why did you hesitate before pressing that button?"', th: 'ถามคำถามติดตามที่เฉพาะเจาะจงมากขึ้น แทนที่จะถามว่า "คุณมีปัญหาอะไรกับระบบนี้?" ถามว่า "ช่วงเวลาที่น่าหงุดหงิดที่สุดในกระบวนการนี้คืออะไร?" หรือ "ทำไมคุณถึงลังเลก่อนกดปุ่มนั้น?"' },
  'facilitation.understandingContext': { en: 'Understanding the facilitation context', th: 'ทำความเข้าใจบริบทการดำเนินการ' },
  'facilitation.seeTips': { en: 'See Facilitation Tips', th: 'ดูเคล็ดลับการดำเนินการ' },

  // Cultural Context
  'cultural.krengJai': { en: 'Kreng Jai (เกรงใจ)', th: 'เกรงใจ' },
  'cultural.krengJaiDesc': { en: 'A reluctance to impose on others or cause discomfort. This cultural value means participants may withhold critical feedback to avoid making others feel bad.', th: 'ความไม่เต็มใจที่จะสร้างภาระให้ผู้อื่นหรือทำให้ไม่สบายใจ คุณค่าทางวัฒนธรรมนี้หมายความว่าผู้เข้าร่วมอาจปิดกั้นความคิดเห็นเชิงวิพากษ์เพื่อหลีกเลี่ยงการทำให้ผู้อื่นรู้สึกไม่ดี' },
  'cultural.face': { en: 'Face (หน้า)', th: 'หน้า' },
  'cultural.faceDesc': { en: 'Social reputation and dignity are highly valued. Research methods should create conditions where feedback can be given without anyone losing face.', th: 'ชื่อเสียงและศักดิ์ศรีทางสังคมมีคุณค่าสูง วิธีการวิจัยควรสร้างเงื่อนไขที่สามารถให้ข้อเสนอแนะได้โดยไม่มีใครเสียหน้า' },
  'cultural.hierarchy': { en: 'Hierarchy (ลำดับชั้น)', th: 'ลำดับชั้น' },
  'cultural.hierarchyDesc': { en: 'Age, status, and position significantly influence social interactions. Junior members may defer to seniors even when they have valuable insights.', th: 'อายุ สถานะ และตำแหน่งมีอิทธิพลอย่างมากต่อการปฏิสัมพันธ์ทางสังคม สมาชิกรุ่นน้องอาจยอมจำนนต่อรุ่นพี่แม้ว่าพวกเขาจะมีข้อมูลเชิงลึกที่มีค่า' },
  'cultural.indirectCommunication': { en: 'Indirect Communication', th: 'การสื่อสารทางอ้อม' },
  'cultural.indirectCommunicationDesc': { en: 'Direct criticism or confrontation is often avoided. Meaning is conveyed through context, tone, and what is left unsaid.', th: 'การวิพากษ์วิจารณ์โดยตรงหรือการเผชิญหน้ามักจะถูกหลีกเลี่ยง ความหมายถูกสื่อผ่านบริบท น้ำเสียง และสิ่งที่ไม่ได้พูด' },
  'cultural.polychronicTime': { en: 'Polychronic Time Perception', th: 'การรับรู้เวลาหลายมิติ' },
  'cultural.polychronicTimeDesc': { en: 'Time is relational, not linear. Workshops prioritize discussion and consensus over strict schedules.', th: 'เวลาเป็นความสัมพันธ์ ไม่ใช่เชิงเส้น เวิร์กช็อปให้ความสำคัญกับการอภิปรายและฉันทามติมากกว่าตารางเวลาที่เข้มงวด' },

  // Method Detail
  'methodDetail.backToHome': { en: 'Back to Home', th: 'กลับไปหน้าแรก' },
  'methodDetail.duration': { en: 'Duration', th: 'ระยะเวลา' },
  'methodDetail.participants': { en: 'Participants', th: 'ผู้เข้าร่วม' },

  // Case Study Detail
  'caseStudyDetail.backToCaseStudies': { en: 'Back to Case Studies', th: 'กลับไปกรณีศึกษา' },

  // NotFound
  'notFound.title': { en: '404', th: '404' },
  'notFound.message': { en: 'Oops! Page not found', th: 'โอ๊ะ! ไม่พบหน้า' },
  'notFound.returnHome': { en: 'Return to Home', th: 'กลับไปหน้าแรก' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
