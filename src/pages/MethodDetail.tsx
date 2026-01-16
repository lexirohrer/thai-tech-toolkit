import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';
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
          'Cards or sticky notes with concepts, features, or ideas written on them',
          'Large table or wall space for organizing cards',
          'Markers or pens for labeling categories',
          'Notebook for documenting groupings and reasoning',
        ],
        th: [
          'การ์ดหรือโน้ตติดที่มีแนวคิด คุณสมบัติ หรือความคิดเขียนไว้',
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
          'Paper for participants to write on',
        ],
        th: [
          'กระดานแสดงผลหรือพื้นที่ผนังสำหรับตัวเลือก',
          'สติกเกอร์จุด (เหมือนกันทั้งหมด)',
          'ปากกาหรือปากกามาร์คเกอร์สำหรับติดป้ายตัวเลือก',
          'กระดาษสำหรับผู้เข้าร่วมเขียน',
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
          'The product or service you are seeking feedback on',
          'Space for participants to move around',
          'Camera or phone for recording (if permitted)',
        ],
        th: [
          'ผลิตภัณฑ์หรือบริการที่คุณกำลังขอข้อเสนอแนะ',
          'พื้นที่สำหรับผู้เข้าร่วมเคลื่อนไหว',
          'กล้องหรือโทรศัพท์สำหรับบันทึก (หากได้รับอนุญาต)',
        ],
      },
      'pilot-testing': {
        en: [
          'A working prototype or system',
          'A small group of trusted pilot users',
          'Field notes or simple observation checklists',
          'Optional short feedback prompts',
        ],
        th: [
          'โปรโตไทป์หรือระบบที่ใช้งานได้',
          'กลุ่มผู้ใช้ทดสอบนำร่องที่เชื่อถือได้จำนวนเล็กน้อย',
          'บันทึกภาคสนามหรือรายการตรวจสอบการสังเกตง่ายๆ',
          'คำแนะนำข้อเสนอแนะสั้นๆ (ไม่บังคับ)',
        ],
      },
      'write-then-speak': {
        en: [
          'Pens or pencils',
          'Timer or clock',
          'Notebook for collecting and reviewing written materials',
          'Worksheets',
        ],
        th: [
          'ปากกาหรือดินสอ',
          'จับเวลาหรือนาฬิกา',
          'สมุดบันทึกสำหรับรวบรวมและทบทวนเอกสารที่เป็นลายลักษณ์อักษร',
          'เวิร์กชีต',
        ],
      },
      'choose-from-two': {
        en: [
          'Two versions of the design (Option A and Option B)',
          'A way to display materials (print or digital)',
          'Pens or pencils for participants to write notes',
        ],
        th: [
          'สองเวอร์ชันของการออกแบบ (ตัวเลือก A และตัวเลือก B)',
          'วิธีแสดงวัสดุ (พิมพ์หรือดิจิทัล)',
          'ปากกาหรือดินสอสำหรับผู้เข้าร่วมเขียนบันทึก',
        ],
      },
      'worksheets': {
        en: [
          'Pens or pencils',
          'Images or diagrams of the system (if gathering feedback)',
          'Notebook for collecting completed worksheets',
          'Worksheets',
        ],
        th: [
          'ปากกาหรือดินสอ',
          'ภาพหรือแผนภาพของระบบ (หากรวบรวมข้อเสนอแนะ)',
          'สมุดบันทึกสำหรับรวบรวมเวิร์กชีตที่เสร็จสมบูรณ์',
          'เวิร์กชีต',
        ],
      },
      'diary-study': {
        en: [
          'Notebooks, pens, and pencils for participants',
          'or, a LINE account or WhatsApp account set up to receive diary submissions',
          'Phone or camera for participants',
          'Simple prompts or questions to guide entries',
        ],
        th: [
          'สมุดบันทึก ปากกา และดินสอสำหรับผู้เข้าร่วม',
          'หรือบัญชี LINE หรือบัญชี WhatsApp ที่ตั้งค่าเพื่อรับการส่งไดอารี่',
          'โทรศัพท์หรือกล้องสำหรับผู้เข้าร่วม',
          'คำแนะนำหรือคำถามง่ายๆ เพื่อแนะนำรายการ',
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
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors pt-6"
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
                {method.id === 'worksheets' && (
                  <div className="mt-6 p-4 rounded-lg bg-muted border border-border flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      {language === 'en'
                        ? 'If a user has never sketched before, which will be more intimidating: a blank sheet of paper, or a worksheet with guidance?'
                        : 'ถ้าผู้ใช้ไม่เคยวาดภาพมาก่อน อะไรที่น่ากลัวกว่ากัน: กระดาษเปล่า หรือเวิร์กชีตที่มีคำแนะนำ?'}
                    </p>
                  </div>
                )}
                {method.id === 'paper-prototyping' && (
                  <div className="mt-6">
                    <img src="/paper-prototype.png" alt="Paper Prototyping" className="w-full h-auto rounded-lg" />
                  </div>
                )}
                {method.id === 'worksheets' && (
                  <div className="mt-6 flex gap-4">
                    <img src="/Sketch-sheet.png" alt="Sketch Sheet" className="w-1/2 h-auto rounded-lg" />
                    <img src="/Structured-Sketch-sheet.png" alt="Structured Sketch Sheet" className="w-1/2 h-auto rounded-lg" />
                  </div>
                )}
                {method.id === 'card-sorting' && (
                  <div className="mt-6">
                    <img src="/card-sorting.jpg" alt="Card Sorting" className="w-full h-auto rounded-lg" />
                  </div>
                )}
                {method.id === 'diary-study' && (
                  <div className="mt-6 flex gap-4">
                    <img src="/diary-study.jpg" alt="Diary Study" className="w-1/2 h-auto rounded-lg" />
                    <img src="/diary-study-phone.jpg" alt="Diary Study Phone" className="w-1/2 h-auto rounded-lg" />
                  </div>
                )}
              </div>

              {/* When to use */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {t('methodDetail.whenToUse')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {method.id === 'worksheets' && (language === 'en'
                    ? 'Use this method when you want to give users silent time to think and ideate, rather than having them come up with ideas or sketch on the spot. It\'s especially good for people who have never participated in a design workshop, and for users with lower digital literacy or lower tech skills. Structured sketching eliminates uncertainty and increases confidence for first-time participants. It also allows users who may be participating in the workshop in a second language to read instructions as well as hear them verbally.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการให้เวลาผู้ใช้คิดและสร้างไอเดียเงียบๆ แทนที่จะให้พวกเขาคิดไอเดียหรือวาดภาพทันที เหมาะอย่างยิ่งสำหรับผู้ที่ไม่เคยเข้าร่วมเวิร์กช็อปการออกแบบมาก่อน และสำหรับผู้ใช้ที่มีทักษะดิจิทัลต่ำหรือทักษะทางเทคนิคต่ำ การวาดภาพที่มีโครงสร้างช่วยขจัดความไม่แน่นอนและเพิ่มความมั่นใจสำหรับผู้เข้าร่วมครั้งแรก นอกจากนี้ยังช่วยให้ผู้ใช้ที่อาจเข้าร่วมเวิร์กช็อปในภาษาที่สองสามารถอ่านคำแนะนำได้เช่นเดียวกับการได้ยินด้วยวาจา')}
                  {method.phase === 'discover' && method.id !== 'write-then-speak' && method.id !== 'worksheets' && method.id !== 'diary-study' && (language === 'en' 
                    ? 'Use this method when you need to understand how people behave in their natural environment. It works well at the beginning of a project when you want to observe real behaviors without influencing them. It can also be used to uncover problems with existing products or services that don\'t emerge in controlled research contexts like interviews.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการเข้าใจว่าผู้คนมีพฤติกรรมอย่างไรในสภาพแวดล้อมตามธรรมชาติ วิธีนี้ใช้ได้ดีในช่วงเริ่มต้นของโครงการเมื่อคุณต้องการสังเกตพฤติกรรมจริงโดยไม่กระทบต่อพวกเขา นอกจากนี้ยังสามารถใช้เพื่อเปิดเผยปัญหากับผลิตภัณฑ์หรือบริการที่มีอยู่ซึ่งไม่ปรากฏในบริบทการวิจัยที่ควบคุมเช่นการสัมภาษณ์')}
                  {method.id === 'write-then-speak' && (language === 'en'
                    ? 'Use this method when you want to give quieter participants time to think and participate more meaningfully. It\'s especially valuable when working in contexts with hierarchy or social harmony constraints, as it creates written artifacts that capture ideas people might not feel comfortable voicing aloud. The written responses allow you to review what people really think, beyond what they\'re willing to say in group discussions.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการให้เวลาผู้เข้าร่วมที่เงียบกว่าคิดและมีส่วนร่วมอย่างมีความหมายมากขึ้น มีคุณค่าอย่างยิ่งเมื่อทำงานในบริบทที่มีข้อจำกัดของลำดับชั้นหรือความสามัคคีทางสังคม เนื่องจากสร้างสิ่งประดิษฐ์ที่เป็นลายลักษณ์อักษรที่จับไอเดียที่ผู้คนอาจไม่รู้สึกสะดวกใจที่จะพูดออกมาดังๆ คำตอบที่เป็นลายลักษณ์อักษรช่วยให้คุณทบทวนสิ่งที่ผู้คนคิดจริงๆ เกินกว่าสิ่งที่พวกเขายินดีพูดในการอภิปรายกลุ่ม')}
                  {method.id === 'diary-study' && (language === 'en'
                    ? 'Use this method when you need to understand behaviors or experiences that happen over time or in different contexts. Diary studies capture moments that people might forget in interviews, and they let you see patterns that emerge across days or weeks. Great for understanding routines, emotional responses, or how people use products in their daily lives.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการเข้าใจพฤติกรรมหรือประสบการณ์ที่เกิดขึ้นตลอดเวลาหรือในบริบทที่แตกต่างกัน การศึกษาไดอารี่จับช่วงเวลาที่ผู้คนอาจลืมในการสัมภาษณ์ และช่วยให้คุณเห็นรูปแบบที่เกิดขึ้นตลอดหลายวันหรือหลายสัปดาห์ เหมาะสำหรับการทำความเข้าใจกิจวัตร การตอบสนองทางอารมณ์ หรือวิธีที่ผู้คนใช้ผลิตภัณฑ์ในชีวิตประจำวัน')}
                  {method.phase === 'define' && (language === 'en'
                    ? 'Use this method when you need to organize information or understand how people think about concepts. It helps clarify problems and structure your understanding.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการจัดระเบียบข้อมูลหรือเข้าใจว่าผู้คนคิดเกี่ยวกับแนวคิดอย่างไร ช่วยให้ชัดเจนเกี่ยวกับปัญหาและโครงสร้างความเข้าใจของคุณ')}
                  {method.phase === 'ideate' && method.id === 'paper-prototyping' && (language === 'en'
                    ? 'Use Paper Prototyping when you want to quickly test design concepts before investing in digital development. It\'s ideal for exploring multiple ideas, getting early user feedback, and making changes easily. The rough, low-fidelity nature signals to participants that everything is open to change, which encourages honest feedback. This method works especially well when working with users who may be hesitant to critique polished designs, as the paper format makes it clear that feedback is welcome. Note that this activity requires prep time to create a paper mockup kit beforehand—you will spend time prepping so that the sessions themselves run smoothly and are easy and fun for users.'
                    : 'ใช้การสร้างต้นแบบกระดาษเมื่อคุณต้องการทดสอบแนวคิดการออกแบบอย่างรวดเร็วก่อนลงทุนในการพัฒนาดิจิทัล เหมาะสำหรับการสำรวจความคิดหลายๆ แบบ รับข้อเสนอแนะจากผู้ใช้ตั้งแต่เนิ่นๆ และทำการเปลี่ยนแปลงได้ง่าย ลักษณะที่หยาบและมีความเที่ยงตรงต่ำส่งสัญญาณให้ผู้เข้าร่วมว่าทุกอย่างเปิดให้เปลี่ยนแปลง ซึ่งส่งเสริมข้อเสนอแนะที่ซื่อสัตย์ วิธีนี้ใช้ได้ดีเป็นพิเศษเมื่อทำงานกับผู้ใช้ที่อาจลังเลในการวิจารณ์การออกแบบที่เรียบร้อย เนื่องจากรูปแบบกระดาษทำให้ชัดเจนว่าข้อเสนอแนะเป็นที่ยินดี โปรดทราบว่ากิจกรรมนี้ต้องการเวลาเตรียมการเพื่อสร้างชุดต้นแบบกระดาษล่วงหน้า—คุณจะใช้เวลาเตรียมการเพื่อให้เซสชันเองดำเนินไปอย่างราบรื่นและง่ายและสนุกสำหรับผู้ใช้')}
                  {method.id === 'worksheets' && (language === 'en'
                    ? 'Use this method when you want to give users silent time to think and ideate, rather than having them come up with ideas or sketch on the spot. It\'s especially good for people who have never participated in a design workshop, and for users with lower digital literacy or lower tech skills. Structured sketching eliminates uncertainty and increases confidence for first-time participants. It also allows users who may be participating in the workshop in a second language to read instructions as well as hear them verbally.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการให้เวลาผู้ใช้คิดและสร้างไอเดียเงียบๆ แทนที่จะให้พวกเขาคิดไอเดียหรือวาดภาพทันที เหมาะอย่างยิ่งสำหรับผู้ที่ไม่เคยเข้าร่วมเวิร์กช็อปการออกแบบมาก่อน และสำหรับผู้ใช้ที่มีทักษะดิจิทัลต่ำหรือทักษะทางเทคนิคต่ำ การวาดภาพที่มีโครงสร้างช่วยขจัดความไม่แน่นอนและเพิ่มความมั่นใจสำหรับผู้เข้าร่วมครั้งแรก นอกจากนี้ยังช่วยให้ผู้ใช้ที่อาจเข้าร่วมเวิร์กช็อปในภาษาที่สองสามารถอ่านคำแนะนำได้เช่นเดียวกับการได้ยินด้วยวาจา')}
                  {method.id === 'role-play-simulation' && (language === 'en'
                    ? 'Use this method when you need real critical feedback from users, but they will only give polite or vague feedback.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการข้อเสนอแนะเชิงวิพากษ์ที่แท้จริงจากผู้ใช้ แต่พวกเขาจะให้เฉพาะข้อเสนอแนะที่สุภาพหรือคลุมเครือ')}
                  {method.phase === 'ideate' && method.id !== 'paper-prototyping' && method.id !== 'worksheets' && method.id !== 'role-play-simulation' && (language === 'en'
                    ? 'Use this method when you are generating ideas and exploring different possibilities. It helps you brainstorm solutions and test concepts before committing to a specific direction.'
                    : 'ใช้วิธีนี้เมื่อคุณกำลังสร้างไอเดียและสำรวจความเป็นไปได้ที่แตกต่างกัน ช่วยให้คุณระดมสมองหาโซลูชันและทดสอบแนวคิดก่อนที่จะมุ่งมั่นกับทิศทางเฉพาะ')}
                  {method.phase === 'develop' && (language === 'en'
                    ? 'Use this method when you are creating and testing solutions. It helps you gather feedback and refine your ideas through iteration.'
                    : 'ใช้วิธีนี้เมื่อคุณกำลังสร้างและทดสอบโซลูชัน ช่วยให้คุณรวบรวมข้อเสนอแนะและปรับปรุงความคิดของคุณผ่านการทำซ้ำ')}
                  {method.phase === 'deliver' && (language === 'en'
                    ? 'Use this method when you are ready to test your solution with users and gather final feedback before launch.'
                    : 'ใช้วิธีนี้เมื่อคุณพร้อมที่จะทดสอบโซลูชันของคุณกับผู้ใช้และรวบรวมข้อเสนอแนะสุดท้ายก่อนเปิดตัว')}
                  {method.id === 'pilot-testing' && (language === 'en'
                    ? 'A system is close to launch and needs real-world testing, and you want to catch practical issues before scaling. Pilot testing works especially well for public sector, infrastructure, or organizational tools.'
                    : 'ระบบใกล้จะเปิดตัวและต้องการการทดสอบในโลกแห่งความเป็นจริง และคุณต้องการจับปัญหาทางปฏิบัติก่อนการขยายขนาด การทดสอบนำร่องทำงานได้ดีเป็นพิเศษสำหรับเครื่องมือภาครัฐ โครงสร้างพื้นฐาน หรือองค์กร')}
                  {method.phase === 'evaluate' && method.id !== 'choose-from-two' && method.id !== 'dot-voting' && method.id !== 'pilot-testing' && (language === 'en'
                    ? 'Use this method when you need to assess solutions, gather feedback, or make decisions about which direction to pursue.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการประเมินโซลูชัน รวบรวมข้อเสนอแนะ หรือตัดสินใจเกี่ยวกับทิศทางที่ควรดำเนินการ')}
                  {method.id === 'dot-voting' && (language === 'en'
                    ? 'Use this method when you need to assess solutions, gather feedback, or make decisions about which direction to pursue. Dot voting works particularly well after other methods in the toolkit that generate many ideas, helping you align participants and focus on the most important options.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการประเมินโซลูชัน รวบรวมข้อเสนอแนะ หรือตัดสินใจเกี่ยวกับทิศทางที่ควรดำเนินการ การลงคะแนนด้วยจุดทำงานได้ดีเป็นพิเศษหลังจากวิธีอื่นๆ ในชุดเครื่องมือที่สร้างไอเดียจำนวนมาก ช่วยให้คุณจัดแนวผู้เข้าร่วมและมุ่งเน้นที่ตัวเลือกที่สำคัญที่สุด')}
                  {method.id === 'choose-from-two' && (language === 'en'
                    ? 'Use this method when you need to gather honest feedback on designs, especially in contexts with hierarchy or social harmony sensitivity. It allows users to express preferences without direct critique, making it valuable when users may be giving feedback to the person who designed it. This method becomes powerful when used to understand why users prefer one version over the other, not just to choose one option.'
                    : 'ใช้วิธีนี้เมื่อคุณต้องการรวบรวมข้อเสนอแนะที่ซื่อสัตย์เกี่ยวกับการออกแบบ โดยเฉพาะในบริบทที่มีความอ่อนไหวต่อลำดับชั้นหรือความสามัคคีทางสังคม ช่วยให้ผู้ใช้แสดงความชอบโดยไม่ต้องวิจารณ์โดยตรง ทำให้มีคุณค่าเมื่อผู้ใช้อาจกำลังให้ข้อเสนอแนะกับคนที่ออกแบบ วิธีนี้มีพลังเมื่อใช้เพื่อทำความเข้าใจว่าทำไมผู้ใช้ชอบเวอร์ชันหนึ่งมากกว่าอีกเวอร์ชัน ไม่ใช่แค่เลือกตัวเลือกหนึ่ง')}
                </p>
                {method.id === 'choose-from-two' && (
                  <div className="mt-6">
                    <img src="/choose-from-two.png" alt="Comparative Evaluation" className="w-full h-auto rounded-lg" />
                  </div>
                )}
                {method.id === 'dot-voting' && (
                  <div className="mt-6">
                    <img src="/Dot-voting.png" alt="Dot Voting" className="w-full h-auto rounded-lg" />
                  </div>
                )}
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
                  {method.id === 'write-then-speak' && (
                    <>
                      <div className="mt-6 space-y-4">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {language === 'en'
                            ? 'Worksheets are important to provide structure and allow people to reread the question, especially if the workshop is being facilitated in multiple languages. To make worksheets, you can use software like Google Docs or Canva. Write-then-Speak worksheets should have:'
                            : 'เวิร์กชีตมีความสำคัญในการให้โครงสร้างและช่วยให้ผู้คนอ่านคำถามซ้ำได้ โดยเฉพาะอย่างยิ่งหากเวิร์กช็อปถูกดำเนินการในหลายภาษา ในการสร้างเวิร์กชีต คุณสามารถใช้ซอฟต์แวร์เช่น Google Docs หรือ Canva เวิร์กชีต Write-then-Speak ควรมี:'}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground leading-relaxed ml-4">
                          {language === 'en' ? (
                            <>
                              <li>The question being asked, in all relevant languages</li>
                              <li>Space for the name of the person</li>
                              <li>Plenty of space to write or draw thoughts</li>
                            </>
                          ) : (
                            <>
                              <li>คำถามที่ถาม ในทุกภาษาที่เกี่ยวข้อง</li>
                              <li>พื้นที่สำหรับชื่อของบุคคล</li>
                              <li>พื้นที่มากมายสำหรับเขียนหรือวาดความคิด</li>
                            </>
                          )}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <img src="/Write-then-speak.png" alt="Write Then Speak Example" className="w-full h-auto rounded-lg" />
                      </div>
                    </>
                  )}
                  {method.id === 'worksheets' && (
                    <>
                      <div className="mt-6 space-y-4">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {language === 'en'
                            ? 'Worksheets are important to provide structure and allow people to reread the question, especially if the workshop is being facilitated in multiple languages. To make worksheets, you can use software like Google Docs or Canva. Structured Sketching worksheets should have:'
                            : 'เวิร์กชีตมีความสำคัญในการให้โครงสร้างและช่วยให้ผู้คนอ่านคำถามซ้ำได้ โดยเฉพาะอย่างยิ่งหากเวิร์กช็อปถูกดำเนินการในหลายภาษา ในการสร้างเวิร์กชีต คุณสามารถใช้ซอฟต์แวร์เช่น Google Docs หรือ Canva เวิร์กชีตการวาดภาพที่มีโครงสร้างควรมี:'}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground leading-relaxed ml-4">
                          {language === 'en' ? (
                            <>
                              <li>The question being asked, in all relevant languages</li>
                              <li>Space for the name of the person</li>
                              <li>Plenty of space to write or draw thoughts</li>
                              <li>If applicable, a scenario you'd like the user to imagine themselves in</li>
                              <li>Pictures or diagrams of any systems or tech being critiqued, so that users can circle, cross out, and resketch how they would change the system</li>
                            </>
                          ) : (
                            <>
                              <li>คำถามที่ถาม ในทุกภาษาที่เกี่ยวข้อง</li>
                              <li>พื้นที่สำหรับชื่อของบุคคล</li>
                              <li>พื้นที่มากมายสำหรับเขียนหรือวาดความคิด</li>
                              <li>หากเหมาะสม สถานการณ์ที่คุณต้องการให้ผู้ใช้จินตนาการตัวเอง</li>
                              <li>ภาพหรือแผนภาพของระบบหรือเทคโนโลยีใดๆ ที่กำลังถูกวิจารณ์ เพื่อให้ผู้ใช้สามารถวงกลม ขีดฆ่า และวาดใหม่ว่าพวกเขาจะเปลี่ยนระบบอย่างไร</li>
                            </>
                          )}
                        </ul>
                        <div className="mt-6">
                          <img src="/sketch-worksheet.jpeg" alt="Sketch Worksheet Example" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="mt-6 pt-6 p-4 rounded-lg bg-[#CFE2D7] border border-[#29563C]/30 flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-[#29563C] flex-shrink-0 self-center" />
                          <div>
                            <p className="font-semibold text-[#29563C] mb-2">
                              {language === 'en' ? 'Tip:' : 'เคล็ดลับ:'}
                            </p>
                            <p className="text-[#29563C] leading-relaxed">
                              {language === 'en'
                                ? 'Users will often draw in spaces you leave blank, and write when you give them lines. Leave out the lines if you want users to draw!'
                                : 'ผู้ใช้มักจะวาดในพื้นที่ที่คุณเว้นว่างไว้ และเขียนเมื่อคุณให้เส้นแก่พวกเขา อย่าใส่เส้นถ้าคุณต้องการให้ผู้ใช้วาด!'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Field Notes Sheets */}
              {method.id === 'pilot-testing' && (
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

              {/* Worksheet Starter Templates */}
              {method.id === 'write-then-speak' && (
                <div className="mb-12">
                  <div className="flex gap-4">
                    <button
                      className="flex-1 px-6 py-3 rounded-lg border border-primary bg-background text-primary font-semibold hover:bg-muted transition-colors"
                      onClick={() => {
                        // TODO: Add English worksheet template URL
                        window.open('#', '_blank');
                      }}
                    >
                      Worksheet starter templates
                    </button>
                    <button
                      className="flex-1 px-6 py-3 rounded-lg border border-primary bg-background text-primary font-semibold hover:bg-muted transition-colors"
                      onClick={() => {
                        // TODO: Add Thai worksheet template URL
                        window.open('#', '_blank');
                      }}
                    >
                      เทมเพลตเวิร์กชีตเริ่มต้น
                    </button>
                  </div>
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
                      {(method.id === 'write-then-speak' && index === 3) || (method.id === 'worksheets' && index === 3) ? (
                        <div className="flex-1">
                          <p className="text-muted-foreground leading-relaxed pt-1 mb-3">
                            {language === 'en'
                              ? method.id === 'worksheets'
                                ? 'Facilitate the discussion. You can format it as a round table, where everyone goes around and simply shares what they sketched - this format is easy to facilitate, but can be time consuming and repetitive in larger groups. Instead, try asking one or two people to share, then bring others into the discussion with questions like:'
                                : 'Facilitate the discussion. You can format it as a round table, where everyone goes around and simply shares what they wrote - this format is easy to facilitate, but can be time consuming and repetitive in larger groups. Instead, try asking one or two people to share, then bring others into the discussion with questions like:'
                              : method.id === 'worksheets'
                                ? 'ดำเนินการอภิปราย คุณสามารถจัดรูปแบบเป็นโต๊ะกลม โดยให้ทุกคนวนรอบและแบ่งปันสิ่งที่พวกเขาวาด - รูปแบบนี้ง่ายต่อการดำเนินการ แต่อาจใช้เวลานานและซ้ำซ้อนในกลุ่มใหญ่ แทนที่จะทำเช่นนั้น ลองถามคนหนึ่งหรือสองคนให้แบ่งปัน จากนั้นนำผู้อื่นเข้าสู่การอภิปรายด้วยคำถามเช่น:'
                                : 'ดำเนินการอภิปราย คุณสามารถจัดรูปแบบเป็นโต๊ะกลม โดยให้ทุกคนวนรอบและแบ่งปันสิ่งที่พวกเขาเขียน - รูปแบบนี้ง่ายต่อการดำเนินการ แต่อาจใช้เวลานานและซ้ำซ้อนในกลุ่มใหญ่ แทนที่จะทำเช่นนั้น ลองถามคนหนึ่งหรือสองคนให้แบ่งปัน จากนั้นนำผู้อื่นเข้าสู่การอภิปรายด้วยคำถามเช่น:'}
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                            {language === 'en' ? (
                              <>
                                <li>"Did anyone have something similar?"</li>
                                <li>{method.id === 'worksheets' ? '"Did anyone sketch something completely different?"' : '"Did anyone write something completely different?"'}</li>
                                <li>"Has anyone had a similar experience?"</li>
                              </>
                            ) : (
                              <>
                                <li>"มีใครมีสิ่งที่คล้ายกันหรือไม่?"</li>
                                <li>{method.id === 'worksheets' ? '"มีใครวาดสิ่งที่แตกต่างอย่างสิ้นเชิงหรือไม่?"' : '"มีใครเขียนสิ่งที่แตกต่างอย่างสิ้นเชิงหรือไม่?"'}</li>
                                <li>"มีใครเคยมีประสบการณ์คล้ายกันหรือไม่?"</li>
                              </>
                            )}
                          </ul>
                        </div>
                      ) : method.id === 'choose-from-two' && index === 4 ? (
                        <div className="flex-1">
                          <p className="text-muted-foreground leading-relaxed pt-1 mb-3">
                            {language === 'en'
                              ? 'Continue asking "Why" until you understand the root cause. For example:'
                              : 'ถาม "ทำไม" ต่อไปจนกว่าคุณจะเข้าใจสาเหตุหลัก ตัวอย่างเช่น:'}
                          </p>
                          <div className="space-y-3 text-muted-foreground leading-relaxed mb-3">
                            {language === 'en' ? (
                              <>
                                <p><strong>User:</strong> "I like option A because it's cleaner"</p>
                                <p><strong>Facilitator:</strong> "What do you mean by 'cleaner'?"</p>
                                <p><strong>User:</strong> It's easier to understand</p>
                                <p><strong>Facilitator:</strong> "What makes it easier to understand?"</p>
                                <p><strong>User:</strong> "<strong>There's less text to read</strong>, so it doesn't feel as overwhelming I guess"</p>
                              </>
                            ) : (
                              <>
                                <p><strong>ผู้ใช้:</strong> "ฉันชอบตัวเลือก A เพราะมันสะอาดกว่า"</p>
                                <p><strong>ผู้ดำเนินการ:</strong> "คุณหมายถึงอะไรเมื่อพูดว่า 'สะอาดกว่า'?"</p>
                                <p><strong>ผู้ใช้:</strong> มันเข้าใจง่ายกว่า</p>
                                <p><strong>ผู้ดำเนินการ:</strong> "อะไรที่ทำให้มันเข้าใจง่ายกว่า?"</p>
                                <p><strong>ผู้ใช้:</strong> "<strong>มีข้อความให้น้อยลง</strong> ดังนั้นมันจึงไม่รู้สึกท่วมท้นเท่าไหร่"</p>
                              </>
                            )}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {language === 'en' ? (
                              <> <strong>Root Issue:</strong> Too much text on version B. Notice that the facilitator had to ask multiple times to understand the root cause.</>
                            ) : (
                              <> <strong>ปัญหาหลัก:</strong> มีข้อความมากเกินไปในเวอร์ชัน B สังเกตว่าผู้ดำเนินการต้องถามหลายครั้งเพื่อเข้าใจสาเหตุหลัก</>
                            )}
                          </p>
                        </div>
                      ) : method.id === 'diary-study' && index === 4 ? (
                        <div className="flex-1">
                          <p className="text-muted-foreground leading-relaxed pt-1 mb-3">
                            {language === 'en'
                              ? 'Send a daily or weekly prompt to participants. Examples of prompts include:'
                              : 'ส่งคำแนะนำรายวันหรือรายสัปดาห์ให้ผู้เข้าร่วม ตัวอย่างคำแนะนำ ได้แก่:'}
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                            {language === 'en' ? (
                              <>
                                <li>"How did using [product/service] today make you feel? Why?"</li>
                                <li>"Write about a moment when you felt confused using [product/service]."</li>
                                <li>"Describe any moments where you've wished [product/service] worked differently."</li>
                              </>
                            ) : (
                              <>
                                <li>"การใช้ [ผลิตภัณฑ์/บริการ] วันนี้ทำให้คุณรู้สึกอย่างไร? ทำไม?"</li>
                                <li>"เขียนเกี่ยวกับช่วงเวลาที่คุณรู้สึกสับสนเมื่อใช้ [ผลิตภัณฑ์/บริการ]"</li>
                                <li>"อธิบายช่วงเวลาใดๆ ที่คุณหวังว่า [ผลิตภัณฑ์/บริการ] จะทำงานแตกต่างออกไป"</li>
                              </>
                            )}
                          </ul>
                        </div>
                      ) : method.id === 'pilot-testing' && index === 3 ? (
                        <div className="flex-1">
                          <p className="text-muted-foreground leading-relaxed pt-1 mb-3">
                            {language === 'en'
                              ? 'Ask questions like:'
                              : 'ถามคำถามเช่น:'}
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                            {language === 'en' ? (
                              <>
                                <li>"What felt easy to use?"</li>
                                <li>"What took more time than expected?"</li>
                                <li>"If others used this, what might confuse them?"</li>
                              </>
                            ) : (
                              <>
                                <li>"อะไรที่รู้สึกง่ายต่อการใช้งาน?"</li>
                                <li>"อะไรที่ใช้เวลามากกว่าที่คาดไว้?"</li>
                                <li>"ถ้าคนอื่นใช้สิ่งนี้ อะไรอาจทำให้พวกเขาสับสน?"</li>
                              </>
                            )}
                          </ul>
                          <p className="text-muted-foreground leading-relaxed mt-3">
                            {language === 'en'
                              ? 'These questions invite feedback without forcing criticism.'
                              : 'คำถามเหล่านี้เชิญข้อเสนอแนะโดยไม่บังคับการวิจารณ์'}
                          </p>
                        </div>
                      ) : method.id === 'dot-voting' && index === 3 ? (
                        <p className="text-muted-foreground leading-relaxed pt-1">
                          {language === 'en' ? (
                            <>Be sure to specify <em>what conditions</em> users are voting on. For example, "Place your dots on the 3 solutions you think will make the app easier to understand" or "Place your dots on the 3 pain points that are the most frustrating"</>
                          ) : (
                            <>อย่าลืมระบุ<em>เงื่อนไข</em>ที่ผู้ใช้กำลังลงคะแนน ตัวอย่างเช่น "วางจุดของคุณบน 3 โซลูชันที่คุณคิดว่าจะทำให้แอปเข้าใจง่ายขึ้น" หรือ "วางจุดของคุณบน 3 ปัญหาที่น่าหงุดหงิดที่สุด"</>
                          )}
                        </p>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed pt-1">
                          {step}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
                {method.id === 'choose-from-two' && (
                  <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                    {language === 'en' ? (
                      <>Don't just use Comparative Evaluation to choose one option and build it—this method becomes powerful when it's used to understand <em>why</em> users prefer one version over the other. Comparing two options simply gives users a way to critique without directly calling out what they dislike. Usually, the final design will include desirable aspects from each option, based on user feedback on each.</>
                    ) : (
                      <>อย่าใช้การประเมินเปรียบเทียบเพียงเพื่อเลือกตัวเลือกหนึ่งและสร้างมัน—วิธีนี้มีพลังเมื่อใช้เพื่อทำความเข้าใจ<em>ทำไม</em>ผู้ใช้ชอบเวอร์ชันหนึ่งมากกว่าอีกเวอร์ชัน การเปรียบเทียบสองตัวเลือกให้ผู้ใช้มีวิธีวิจารณ์โดยไม่ต้องชี้ให้เห็นโดยตรงว่าพวกเขาไม่ชอบอะไร โดยปกติการออกแบบสุดท้ายจะรวมแง่มุมที่พึงประสงค์จากแต่ละตัวเลือก ตามข้อเสนอแนะของผู้ใช้เกี่ยวกับแต่ละตัวเลือก</>
                    )}
                  </p>
                )}
                {method.id === 'dot-voting' && (
                  <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-green-700 dark:text-green-400 flex-shrink-0" />
                    <p className="text-green-900 dark:text-green-100 leading-relaxed">
                      {language === 'en'
                        ? 'Tip: To make voting anonymous, number all the concepts or groups of concepts. Give each person a piece of paper, and have them write the numbers corresponding to the three concepts they would vote for. Collect all the papers, and tally up the votes.'
                        : 'เคล็ดลับ: เพื่อทำให้การลงคะแนนไม่ระบุตัวตน ให้หมายเลขแนวคิดหรือกลุ่มแนวคิดทั้งหมด ให้แต่ละคนมีกระดาษหนึ่งแผ่น และให้พวกเขาเขียนหมายเลขที่สอดคล้องกับสามแนวคิดที่พวกเขาจะลงคะแนน รวบรวมกระดาษทั้งหมด และนับคะแนน'}
                    </p>
                  </div>
                )}
                {method.id === 'diary-study' && (
                  <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-green-700 dark:text-green-400 flex-shrink-0" />
                    <p className="text-green-900 dark:text-green-100 leading-relaxed">
                      {language === 'en'
                        ? 'Tip: Pair diary studies with group activities where people can reflect on insights together. This turns private observations into shared understanding without direct confrontation.'
                        : 'เคล็ดลับ: จับคู่การศึกษาไดอารี่กับกิจกรรมกลุ่มที่ผู้คนสามารถสะท้อนข้อมูลเชิงลึกร่วมกันได้ นี่เปลี่ยนการสังเกตส่วนตัวเป็นการทำความเข้าใจร่วมกันโดยไม่ต้องเผชิญหน้าโดยตรง'}
                    </p>
                  </div>
                )}
                {method.id === 'pilot-testing' && (
                  <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-green-700 dark:text-green-400 flex-shrink-0" />
                    <p className="text-green-900 dark:text-green-100 leading-relaxed">
                      {language === 'en'
                        ? 'Tip: Pilot testing can happen in one session, or over a period of several weeks, depending on what you\'re testing.'
                        : 'เคล็ดลับ: การทดสอบนำร่องสามารถเกิดขึ้นในหนึ่งเซสชันหรือในช่วงเวลาหลายสัปดาห์ ขึ้นอยู่กับสิ่งที่คุณกำลังทดสอบ'}
                    </p>
                  </div>
                )}
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
                      <img src="/Ethno-phone.jpeg" alt="Paper Prototyping" className="w-1/2 h-full object-cover rounded-lg" />
                      <img src="/ethno-map.jpeg" alt="Ethnographic Observation Map" className="w-1/2 h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              )}

              {/* Case Study */}
              {method.id === 'write-then-speak' && (
                <div className="mt-12">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Case study using this method:
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-8 lg:items-stretch">
                    <div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {language === 'en' 
                          ? 'Bangkok City Lab used Write Then Speak in their Smart Pole Motorbike Taxi System project. They conducted a usability and co-design workshop with six university students at the planned pilot site. Participants first shared personal experiences with motorbike taxis, then explored the Smart Pole prototype independently. Structured worksheets and routines of writing thoughts before speaking guided users to share divergent experiences without simply agreeing with each other. This approach helped identify critical usability issues and revealed that users\' mental models shifted from "taxi" to "ride-sharing service" when technology was introduced.'
                          : 'Bangkok City Lab ใช้ Write Then Speak ในโครงการ Smart Pole Motorbike Taxi System ของพวกเขา พวกเขาจัดเวิร์กช็อปการใช้งานและการออกแบบร่วมกันกับนักศึกษามหาวิทยาลัยหกคนที่ไซต์นำร่องที่วางแผนไว้ ผู้เข้าร่วมแบ่งปันประสบการณ์ส่วนตัวกับมอเตอร์ไซค์รับจ้างก่อน จากนั้นสำรวจโปรโตไทป์ Smart Pole อย่างอิสระ เวิร์กชีตที่มีโครงสร้างและกิจวัตรของการเขียนความคิดก่อนพูดแนะนำผู้ใช้ให้แบ่งปันประสบการณ์ที่แตกต่างกันโดยไม่เพียงแค่เห็นด้วยกับกันและกัน แนวทางนี้ช่วยระบุปัญหาการใช้งานที่สำคัญและเปิดเผยว่าแบบจำลองทางจิตใจของผู้ใช้เปลี่ยนจาก "แท็กซี่" เป็น "บริการแชร์รถ" เมื่อมีการแนะนำเทคโนโลยี'}
                      </p>
                      <div className="max-w-2xl">
                        <CaseStudyCard study={caseStudies.find(s => s.id === 'smart-pole-motorbike-taxi')!} />
                      </div>
                    </div>
                    <div className="lg:sticky lg:top-8">
                      <img src="/Writing-ex.jpeg" alt="Write Then Speak Example" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              )}

              {/* Case Study */}
              {method.id === 'worksheets' && (
                <div className="mt-12">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Case study using this method:
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-8 lg:items-stretch">
                    <div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {language === 'en' 
                          ? 'Bangkok City Lab used Structured Sketching in their Smart Pole Motorbike Taxi System project. They conducted a usability and co-design workshop with six university students at the planned pilot site. Participants first shared personal experiences with motorbike taxis, then explored the Smart Pole prototype independently. Structured worksheets helped users articulate thoughts clearly and converge toward solutions without circular discussion. The worksheets gave users silent time to think and sketch, rather than having to come up with ideas on the spot, which was especially valuable for first-time workshop participants.'
                          : 'Bangkok City Lab ใช้การวาดภาพที่มีโครงสร้างในโครงการ Smart Pole Motorbike Taxi System ของพวกเขา พวกเขาจัดเวิร์กช็อปการใช้งานและการออกแบบร่วมกันกับนักศึกษามหาวิทยาลัยหกคนที่ไซต์นำร่องที่วางแผนไว้ ผู้เข้าร่วมแบ่งปันประสบการณ์ส่วนตัวกับมอเตอร์ไซค์รับจ้างก่อน จากนั้นสำรวจโปรโตไทป์ Smart Pole อย่างอิสระ เวิร์กชีตที่มีโครงสร้างช่วยให้ผู้ใช้แสดงความคิดเห็นอย่างชัดเจนและบรรจบกันไปสู่โซลูชันโดยไม่ต้องอภิปรายแบบวงกลม เวิร์กชีตให้เวลาผู้ใช้คิดและวาดเงียบๆ แทนที่จะต้องคิดไอเดียทันที ซึ่งมีคุณค่าอย่างยิ่งสำหรับผู้เข้าร่วมเวิร์กช็อปครั้งแรก'}
                      </p>
                      <div className="max-w-2xl">
                        <CaseStudyCard study={caseStudies.find(s => s.id === 'smart-pole-motorbike-taxi')!} />
                      </div>
                    </div>
                    <div className="lg:sticky lg:top-8">
                      <img src="/citylab-sketchSheet.jpeg" alt="City Lab Sketch Sheet" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              )}

              {/* Case Study */}
              {method.id === 'choose-from-two' && (
                <div className="mt-12">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Case study using this method:
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-8 lg:items-stretch">
                    <div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {language === 'en' 
                          ? 'BridgeBox used Comparative Evaluation in their disaster response platform project. They needed to make their platform accessible to rural users in Songkhla Province who had lower technical literacy than urban participants. By presenting two design options and asking users to choose, then asking why they preferred one over the other, BridgeBox was able to gather honest feedback without requiring direct critique. This approach helped identify that users wanted integrated access to calculators, regulatory knowledge, and technician credentials in one place, leading to a co-designed solution that combined the best aspects of both options.'
                          : 'BridgeBox ใช้การประเมินเปรียบเทียบในโครงการแพลตฟอร์มการตอบสนองภัยพิบัติของพวกเขา พวกเขาต้องการทำให้แพลตฟอร์มของพวกเขาสามารถเข้าถึงได้สำหรับผู้ใช้ชนบทในจังหวัดสงขลาที่มีความสามารถทางเทคนิคต่ำกว่าผู้เข้าร่วมในเมือง โดยการนำเสนอสองตัวเลือกการออกแบบและขอให้ผู้ใช้เลือก จากนั้นถามว่าทำไมพวกเขาถึงชอบตัวเลือกหนึ่งมากกว่าอีกตัวเลือกหนึ่ง BridgeBox สามารถรวบรวมข้อเสนอแนะที่ซื่อสัตย์โดยไม่ต้องใช้การวิจารณ์โดยตรง แนวทางนี้ช่วยระบุว่าผู้ใช้ต้องการการเข้าถึงแบบบูรณาการไปยังเครื่องคำนวณ ความรู้ด้านกฎระเบียบ และข้อมูลประจำตัวของช่างเทคนิคในที่เดียว นำไปสู่โซลูชันที่ร่วมออกแบบซึ่งรวมแง่มุมที่ดีที่สุดจากทั้งสองตัวเลือก'}
                      </p>
                      <div className="max-w-2xl">
                        <CaseStudyCard study={caseStudies.find(s => s.id === 'bridgebox-disaster-response')!} />
                      </div>
                    </div>
                    <div className="lg:sticky lg:top-8">
                      <img src="/BBx_Songkhla1.png" alt="BridgeBox" className="w-full h-auto object-cover rounded-lg" />
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
