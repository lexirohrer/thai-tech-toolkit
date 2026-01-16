import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, AlertCircle, CheckCircle } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { methods, phaseLabels, difficultyLabels, digitalLiteracyLabels } from '@/data/methods';
import { caseStudies } from '@/data/caseStudies';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const MethodDetail = () => {
  const { id } = useParams();
  const method = methods.find((m) => m.id === id);
  const { language, t } = useLanguage();

  if (!method) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              {t('methodDetail.notFound')}
            </h1>
            <Link to="/" className="text-primary hover:underline">
              {t('methodDetail.backToHome')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const phaseClasses = {
    discover: 'phase-discover',
    define: 'phase-define',
    ideate: 'phase-ideate',
    develop: 'phase-develop',
    deliver: 'phase-deliver',
    evaluate: 'phase-evaluate',
  };

  const difficultyClasses = {
    1: 'difficulty-beginner',
    2: 'difficulty-intermediate',
    3: 'difficulty-advanced',
  };

  const digitalLiteracyClasses = {
    low: 'digital-literacy-low',
    medium: 'digital-literacy-medium',
    high: 'digital-literacy-high',
  };

  // Get materials for each method
  const getMaterials = () => {
    const materials: Record<string, { en: string[]; th: string[] }> = {
      'contextual-observation': {
        en: [
          'Small notebook for writing observations',
          'Pen or pencil',
          'Camera or phone for taking pictures of the setting and interactions',
          'Map or location information (if needed)',
          'Permission forms or consent documents (if required)',
        ],
        th: [
          'สมุดบันทึกขนาดเล็กสำหรับเขียนการสังเกต',
          'ปากกาหรือดินสอ',
          'กล้องหรือโทรศัพท์สำหรับถ่ายภาพของสถานที่และการโต้ตอบ',
          'แผนที่หรือข้อมูลสถานที่ (หากจำเป็น)',
          'แบบฟอร์มอนุญาตหรือเอกสารยินยอม (หากจำเป็น)',
        ],
      },
      'card-sorting': {
        en: [
          'Cards with concepts, features, or ideas written on them',
          'Large table or wall space for organizing cards',
          'Markers or pens for labeling categories',
          'Notebook for documenting groupings and reasoning',
        ],
        th: [
          'การ์ดที่มีแนวคิด คุณสมบัติ หรือความคิดเขียนไว้',
          'โต๊ะขนาดใหญ่หรือพื้นที่ผนังสำหรับจัดระเบียบการ์ด',
          'ปากกาหรือปากกามาร์คเกอร์สำหรับติดป้ายหมวดหมู่',
          'สมุดบันทึกสำหรับบันทึกการจัดกลุ่มและเหตุผล',
        ],
      },
      'dot-voting': {
        en: [
          'Display board or wall space for options',
          'Dot stickers (all identical)',
          'Markers or pens for labeling options',
          'Notebook for documenting results',
        ],
        th: [
          'กระดานแสดงผลหรือพื้นที่ผนังสำหรับตัวเลือก',
          'สติกเกอร์จุด (เหมือนกันทั้งหมด)',
          'ปากกาหรือปากกามาร์คเกอร์สำหรับติดป้ายตัวเลือก',
          'สมุดบันทึกสำหรับบันทึกผลลัพธ์',
        ],
      },
      'paper-prototyping': {
        en: [
          'Paper (various sizes)',
          'Markers, pens, and colored pencils',
          'Scissors and tape',
          'Sticky notes',
          'Camera or phone for documenting prototypes',
        ],
        th: [
          'กระดาษ (ขนาดต่างๆ)',
          'ปากกามาร์คเกอร์ ปากกา และดินสอสี',
          'กรรไกรและเทป',
          'โน้ตติด',
          'กล้องหรือโทรศัพท์สำหรับบันทึกโปรโตไทป์',
        ],
      },
      'role-play-simulation': {
        en: [
          'Props or objects to represent the system or service',
          'Space for participants to move around',
          'Notebook for documenting observations',
          'Camera or phone for recording (if permitted)',
        ],
        th: [
          'อุปกรณ์ประกอบหรือวัตถุเพื่อแสดงระบบหรือบริการ',
          'พื้นที่สำหรับผู้เข้าร่วมเคลื่อนไหว',
          'สมุดบันทึกสำหรับบันทึกการสังเกต',
          'กล้องหรือโทรศัพท์สำหรับบันทึก (หากได้รับอนุญาต)',
        ],
      },
      'pilot-testing': {
        en: [
          'Working prototype or system',
          'Devices for participants to use',
          'Notebook or forms for documenting feedback',
          'Camera or screen recording software (if needed)',
        ],
        th: [
          'โปรโตไทป์หรือระบบที่ใช้งานได้',
          'อุปกรณ์สำหรับผู้เข้าร่วมใช้',
          'สมุดบันทึกหรือแบบฟอร์มสำหรับบันทึกข้อเสนอแนะ',
          'กล้องหรือซอฟต์แวร์บันทึกหน้าจอ (หากจำเป็น)',
        ],
      },
      'write-then-speak': {
        en: [
          'Worksheets or paper for writing',
          'Pens or pencils',
          'Timer or clock',
          'Notebook for documenting discussions',
        ],
        th: [
          'เวิร์กชีตหรือกระดาษสำหรับเขียน',
          'ปากกาหรือดินสอ',
          'จับเวลาหรือนาฬิกา',
          'สมุดบันทึกสำหรับบันทึกการอภิปราย',
        ],
      },
      'choose-from-two': {
        en: [
          'Two versions of the design (Option A and Option B)',
          'Display materials (printed or digital)',
          'Notebook for documenting preferences and feedback',
          'Pens or pencils for participants to write notes',
        ],
        th: [
          'สองเวอร์ชันของการออกแบบ (ตัวเลือก A และตัวเลือก B)',
          'วัสดุแสดงผล (พิมพ์หรือดิจิทัล)',
          'สมุดบันทึกสำหรับบันทึกความชอบและข้อเสนอแนะ',
          'ปากกาหรือดินสอสำหรับผู้เข้าร่วมเขียนบันทึก',
        ],
      },
      'worksheets': {
        en: [
          'Worksheets with clear instructions (in all languages used)',
          'Pens or pencils',
          'Images or diagrams of the system (if gathering feedback)',
          'Notebook for collecting completed worksheets',
        ],
        th: [
          'เวิร์กชีตพร้อมคำแนะนำที่ชัดเจน (ในทุกภาษาที่ใช้)',
          'ปากกาหรือดินสอ',
          'ภาพหรือแผนภาพของระบบ (หากรวบรวมข้อเสนอแนะ)',
          'สมุดบันทึกสำหรับรวบรวมเวิร์กชีตที่เสร็จสมบูรณ์',
        ],
      },
    };
    return materials[method.id] || { en: [], th: [] };
  };

  const materials = getMaterials();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <article className="flex-1">
        {/* Header */}
        <section className="pb-12 lg:pb-16 pt-0 bg-gradient-to-br from-secondary/30 via-background to-gold-light/20">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              {t('methodDetail.backToHome')}
            </Link>

            <div className="flex items-start gap-2 flex-wrap mb-4">
              <span className={cn('phase-badge', phaseClasses[method.phase])}>
                {phaseLabels[method.phase][language]}
              </span>
              <span className={cn('difficulty-badge', difficultyClasses[method.difficulty])}>
                {difficultyLabels[method.difficulty][language]}
              </span>
              <span className={cn('digital-literacy-badge', digitalLiteracyClasses[method.digitalLiteracy])}>
                {digitalLiteracyLabels[method.digitalLiteracy][language]}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
              {language === 'en' ? method.name : method.nameThai}
            </h1>
            <p className="text-xl text-muted-foreground">{language === 'en' ? method.nameThai : method.name}</p>

            <div className="flex items-center gap-6 mt-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {method.duration}
              </span>
              <span className="flex items-center gap-2">
                <Users size={18} />
                {method.participants}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-12 pt-0">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="w-full">
              {/* Description */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {t('methodDetail.overview')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === 'en' ? method.description : (method.descriptionThai || method.description)}
                </p>
                {method.id === 'paper-prototyping' && (
                  <div className="mt-6">
                    <img src="/paper-prototype.png" alt="Paper Prototyping" className="w-full h-auto rounded-lg" />
                  </div>
                )}
              </div>

              {/* When to use */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {t('methodDetail.whenToUse')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {method.phase === 'discover' && (language === 'en' 
                    ? 'Use this method when you need to understand how people behave in their natural environment. It works well at the beginning of a project when you want to observe real behaviors without influencing them. It can also be used to uncover problems with existing products or services that don\'t emerge in controlled research contexts like interviews.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการเข้าใจว่าผู้คนมีพฤติกรรมอย่างไรในสภาพแวดล้อมตามธรรมชาติ วิธีนี้ใช้ได้ดีในช่วงเริ่มต้นของโครงการเมื่อคุณต้องการสังเกตพฤติกรรมจริงโดยไม่กระทบต่อพวกเขา นอกจากนี้ยังสามารถใช้เพื่อเปิดเผยปัญหากับผลิตภัณฑ์หรือบริการที่มีอยู่ซึ่งไม่ปรากฏในบริบทการวิจัยที่ควบคุมเช่นการสัมภาษณ์')}
                  {method.phase === 'define' && (language === 'en'
                    ? 'Use this method when you need to organize information or understand how people think about concepts. It helps clarify problems and structure your understanding.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการจัดระเบียบข้อมูลหรือเข้าใจว่าผู้คนคิดเกี่ยวกับแนวคิดอย่างไร ช่วยให้ชัดเจนเกี่ยวกับปัญหาและโครงสร้างความเข้าใจของคุณ')}
                  {method.phase === 'ideate' && method.id === 'paper-prototyping' && (language === 'en'
                    ? 'Use Paper Prototyping when you want to quickly test design concepts before investing in digital development. It\'s ideal for exploring multiple ideas, getting early user feedback, and making changes easily. The rough, low-fidelity nature signals to participants that everything is open to change, which encourages honest feedback. This method works especially well when working with users who may be hesitant to critique polished designs, as the paper format makes it clear that feedback is welcome. Note that this activity requires prep time to create a paper mockup kit beforehand—you will spend time prepping so that the sessions themselves run smoothly and are easy and fun for users.'
                    : 'ใช้การสร้างต้นแบบกระดาษเมื่อคุณต้องการทดสอบแนวคิดการออกแบบอย่างรวดเร็วก่อนลงทุนในการพัฒนาดิจิทัล เหมาะสำหรับการสำรวจความคิดหลายๆ แบบ รับข้อเสนอแนะจากผู้ใช้ตั้งแต่เนิ่นๆ และทำการเปลี่ยนแปลงได้ง่าย ลักษณะที่หยาบและมีความเที่ยงตรงต่ำส่งสัญญาณให้ผู้เข้าร่วมว่าทุกอย่างเปิดให้เปลี่ยนแปลง ซึ่งส่งเสริมข้อเสนอแนะที่ซื่อสัตย์ วิธีนี้ใช้ได้ดีเป็นพิเศษเมื่อทำงานกับผู้ใช้ที่อาจลังเลในการวิจารณ์การออกแบบที่เรียบร้อย เนื่องจากรูปแบบกระดาษทำให้ชัดเจนว่าข้อเสนอแนะเป็นที่ยินดี โปรดทราบว่ากิจกรรมนี้ต้องการเวลาเตรียมการเพื่อสร้างชุดต้นแบบกระดาษล่วงหน้า—คุณจะใช้เวลาเตรียมการเพื่อให้เซสชันเองดำเนินไปอย่างราบรื่นและง่ายและสนุกสำหรับผู้ใช้')}
                  {method.phase === 'ideate' && method.id !== 'paper-prototyping' && (language === 'en'
                    ? 'Use this method when you are generating ideas and exploring different possibilities. It helps you brainstorm solutions and test concepts before committing to a specific direction.'
                    : 'ใช้วิธีนี้เมื่อคุณกำลังสร้างไอเดียและสำรวจความเป็นไปได้ที่แตกต่างกัน ช่วยให้คุณระดมสมองหาโซลูชันและทดสอบแนวคิดก่อนที่จะมุ่งมั่นกับทิศทางเฉพาะ')}
                  {method.phase === 'develop' && (language === 'en'
                    ? 'Use this method when you are creating and testing solutions. It helps you gather feedback and refine your ideas through iteration.'
                    : 'ใช้วิธีนี้เมื่อคุณกำลังสร้างและทดสอบโซลูชัน ช่วยให้คุณรวบรวมข้อเสนอแนะและปรับปรุงความคิดของคุณผ่านการทำซ้ำ')}
                  {method.phase === 'deliver' && (language === 'en'
                    ? 'Use this method when you are ready to test your solution with users and gather final feedback before launch.'
                    : 'ใช้วิธีนี้เมื่อคุณพร้อมที่จะทดสอบโซลูชันของคุณกับผู้ใช้และรวบรวมข้อเสนอแนะสุดท้ายก่อนเปิดตัว')}
                  {method.phase === 'evaluate' && (language === 'en'
                    ? 'Use this method when you need to assess solutions, gather feedback, or make decisions about which direction to pursue.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการประเมินโซลูชัน รวบรวมข้อเสนอแนะ หรือตัดสินใจเกี่ยวกับทิศทางที่ควรดำเนินการ')}
                </p>
              </div>

              {/* Materials */}
              {materials.en.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {t('methodDetail.materials')}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground leading-relaxed">
                    {(language === 'en' ? materials.en : materials.th).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Steps */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  {t('methodDetail.howToFacilitate')}
                </h2>
                <ol className="space-y-4">
                  {(language === 'en' ? method.steps : (method.stepsThai || method.steps)).map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground leading-relaxed pt-1">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Field Notes Sheets */}
              {method.id === 'contextual-observation' && (
                <div className="mb-12">
                  <div className="flex gap-4">
                    <button
                      className="flex-1 px-6 py-3 rounded-lg border border-primary bg-background text-primary font-semibold hover:bg-muted transition-colors"
                      onClick={() => {
                        window.open('https://docs.google.com/document/d/1SncuUQ0q5psNMscEM0Yi_fIoOL5jfHBxhtjJp6yp-3c/edit?usp=sharing', '_blank');
                      }}
                    >
                      English Field Notes Sheet
                    </button>
                    <button
                      className="flex-1 px-6 py-3 rounded-lg border border-primary bg-background text-primary font-semibold hover:bg-muted transition-colors"
                      onClick={() => {
                        window.open('https://docs.google.com/document/d/1C_Fx3bTraDCMgWMb3MbeDOnSL7Ege8gmPBxSxE8u07k/edit?usp=sharing', '_blank');
                      }}
                    >
                      การ์ดบันทึกภาคสนามภาษาไทย
                    </button>
                  </div>
                </div>
              )}

              {/* Case Study */}
              {method.id === 'contextual-observation' && (
                <div className="mt-12">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Case study using this method:
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-8 lg:items-stretch">
                    <div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {language === 'en' 
                          ? 'When MuvMi was trying to figure out how to merge their electric Tuk Tuk offerings to serve both tourists and locals, they conducted "Ride Along Research." In these Ethnographic Observation sessions, MuvMi researchers rode the tuk tuks alongside real users on the streets of Bangkok, learning about issues like confusion using the app on the go, difficulty finding the correct tuk tuk, and comfort in the vehicles.'
                          : 'เมื่อ MuvMi พยายามหาวิธีรวมบริการรถตุ๊กตุ๊กไฟฟ้าของพวกเขาเพื่อให้บริการทั้งนักท่องเที่ยวและคนท้องถิ่น พวกเขาดำเนินการ "การวิจัยแบบนั่งรถไปด้วย" ในการสังเกตการณ์ชาติพันธุ์วิทยาเหล่านี้ นักวิจัย MuvMi นั่งรถตุ๊กตุ๊กไปพร้อมกับผู้ใช้จริงบนถนนในกรุงเทพฯ เรียนรู้เกี่ยวกับปัญหาต่างๆ เช่นความสับสนในการใช้แอปขณะเดินทาง ความยากลำบากในการหารถตุ๊กตุ๊กที่ถูกต้อง และความสะดวกสบายในยานพาหนะ'}
                      </p>
                      <div className="max-w-2xl">
                        <CaseStudyCard study={caseStudies.find(s => s.id === 'muvmi-tuk-tuks')!} />
                      </div>
                    </div>
                    <div className="lg:sticky lg:top-8 flex flex-row gap-4">
                      <img src="/Ethno-obs-pic.jpeg" alt="Ethnographic Observation" className="w-1/2 h-full object-cover rounded-lg" />
                      <img src="/ethno-map.jpeg" alt="Ethnographic Observation Map" className="w-1/2 h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              )}

              {/* Case Study */}
              {method.id === 'paper-prototyping' && (
                <div className="mt-12">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Case study using this method:
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-8 lg:items-stretch">
                    <div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {language === 'en' 
                          ? 'When MuvMi was trying to figure out how to merge their electric Tuk Tuk offerings to serve both tourists and locals, they used Paper Prototyping workshops. In these sessions, users co-designed paper prototypes of the app, generating service concepts like showing travel zones visually on the map, having switchable "modes" for tourist vs local rides in one app, and expanding the driving radius for tourists willing to pay more. Paper prototyping activities made users think deeper about what they want and why, beyond just identifying dislikes, and all co-designed features were implemented by MuvMi within months of workshop completion.'
                          : 'เมื่อ MuvMi พยายามหาวิธีรวมบริการรถตุ๊กตุ๊กไฟฟ้าของพวกเขาเพื่อให้บริการทั้งนักท่องเที่ยวและคนท้องถิ่น พวกเขาใช้เวิร์กช็อปการสร้างต้นแบบกระดาษ ในเซสชันเหล่านี้ ผู้ใช้ร่วมออกแบบโปรโตไทป์กระดาษของแอป สร้างแนวคิดบริการเช่นการแสดงโซนการเดินทางบนแผนที่ การมี "โหมด" ที่เปลี่ยนได้สำหรับการเดินทางของนักท่องเที่ยวเทียบกับคนท้องถิ่นในแอปเดียว และขยายรัศมีการขับขี่สำหรับนักท่องเที่ยวที่ยินดีจ่ายมากขึ้น กิจกรรมการสร้างต้นแบบกระดาษทำให้ผู้ใช้คิดลึกขึ้นเกี่ยวกับสิ่งที่พวกเขาต้องการและทำไม เกินกว่าการระบุสิ่งที่พวกเขาไม่ชอบ และคุณสมบัติที่ร่วมออกแบบทั้งหมดถูกนำไปใช้โดย MuvMi ภายในไม่กี่เดือนหลังจากเสร็จสิ้นเวิร์กช็อป'}
                      </p>
                      <div className="max-w-2xl">
                        <CaseStudyCard study={caseStudies.find(s => s.id === 'muvmi-tuk-tuks')!} />
                      </div>
                    </div>
                    <div className="lg:sticky lg:top-8 flex flex-row gap-4">
                      <img src="/Ethno-obs-pic.jpeg" alt="Ethnographic Observation" className="w-1/2 h-full object-cover rounded-lg" />
                      <img src="/ethno-map.jpeg" alt="Ethnographic Observation Map" className="w-1/2 h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default MethodDetail;
