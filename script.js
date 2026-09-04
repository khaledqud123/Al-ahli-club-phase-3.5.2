/* =========================================================
   AL AHLI PHASE 3.5.2
   INTERACTION + BILINGUAL + BOOKING + ADMIN DEMO
========================================================= */


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {

        "nav.home": "Home",
        "nav.club": "Club",
        "nav.admin": "Administration",
        "nav.sports": "Sports",
        "nav.facilities": "Facilities",
        "nav.legacy": "Legacy",
        "nav.events": "Events",
        "nav.contact": "Contact",
        "nav.book": "Book",

        "hero.kicker": "AMMAN · JORDAN · SINCE 1944",
        "hero.line1": "MORE",
        "hero.line2": "THAN A",
        "hero.line3": "CLUB.",
        "hero.description": "Eight decades of sport, culture, achievement and community. One home for generations of Al Ahli.",
        "hero.explore": "Explore Al Ahli",
        "hero.book": "Book a Field",
        "hero.founded": "FOUNDED",
        "hero.titles": "TITLES",
        "hero.years": "YEARS",
        "hero.scroll": "SCROLL TO EXPLORE",

        "club.eyebrow": "THE CLUB",
        "club.title": "A legacy built<br>through generations.",
        "club.copy": "Al Ahli Sporting Club has been part of Jordan's sporting story since 1944 — growing from a sporting institution into a home for competition, culture and community.",
        "club.story": "Discover our story",
        "club.caption": "SPORT · CULTURE · COMMUNITY",

        "stats.titles": "TOTAL TITLES",
        "stats.athletes": "REGISTERED ATHLETES+",
        "stats.fields": "FOOTBALL FIELDS",
        "stats.folklore": "FOLKLORE MEMBERS+",

        "administration.eyebrow": "LEADERSHIP & GOVERNANCE",
        "administration.title": "The people<br>behind the club.",
        "administration.description": "A professional administration working behind the scenes to build the future of Al Ahli.",
        "administration.board": "BOARD & LEADERSHIP",
        "administration.boardTitle": "Guiding the club forward.",
        "administration.boardText": "Verified leadership information and official photography can be added here following club approval.",
        "administration.sports": "SPORTS MANAGEMENT",
        "administration.sportsTitle": "Competition & performance.",
        "administration.sportsText": "Supporting teams, athletes, competitions and sporting development across the club.",
        "administration.operations": "CLUB OPERATIONS",
        "administration.operationsTitle": "Keeping the club moving.",
        "administration.operationsText": "Facilities, member services, events and the everyday experience of the club.",

        "sports.eyebrow": "SPORTS",
        "sports.title": "Where<br>competition lives.",
        "sports.description": "Explore the sporting world of Al Ahli — from football fields to swimming and competitive team sports.",
        "sports.football": "Football",
        "sports.basketball": "Basketball",
        "sports.handball": "Handball",
        "sports.swimming": "Swimming",

        "football.title": "FOOTBALL",
        "football.fieldsEyebrow": "FOUR FIELDS",
        "football.fieldsTitle": "Choose your pitch.",
        "football.field": "FIELD",
        "football.book": "Book",

        "basketball.title": "BASKETBALL",
        "basketball.text": "A competitive sporting tradition backed by decades of achievement and development.",

        "handball.title": "HANDBALL",
        "handball.text": "Al Ahli's most decorated sporting discipline with 53 titles recorded in the club's official history.",

        "swimming.title": "SWIMMING",
        "swimming.text": "From public pool experiences to swimming academy training for different levels and ages.",
        "swimming.explore": "Explore Pools",

        "achievements.eyebrow": "THE HONOUR ROLL",
        "achievements.title": "91 titles.<br><em>One legacy.</em>",
        "achievements.football": "FOOTBALL TITLES",
        "achievements.handball": "HANDBALL TITLES",
        "achievements.basketball": "BASKETBALL TITLES",

        "facilities.eyebrow": "FACILITIES",
        "facilities.title": "Explore the<br><em>club environment.</em>",
        "facilities.pools": "Swimming Pools",
        "facilities.poolText": "Discover pool facilities, public days and swimming academy opportunities.",
        "facilities.meidan": "Al Meidan",
        "facilities.meidanText": "Training, strength, conditioning and memberships.",
        "facilities.fields": "Football Fields",
        "facilities.fieldText": "Four fields designed for training and football.",
        "facilities.explore": "Explore",
        "facilities.discover": "Discover",
        "facilities.view": "View Fields",

        "meidan.line1": "TRAIN",
        "meidan.line2": "WITH",
        "meidan.line3": "PURPOSE.",
        "meidan.description": "A dedicated training environment built around strength, conditioning and performance.",
        "meidan.strength": "Strength Area",
        "meidan.strengthText": "Dedicated space for strength-focused training.",
        "meidan.cardio": "Cardio Area",
        "meidan.cardioText": "Conditioning and cardiovascular training environment.",
        "meidan.functional": "Functional Training",
        "meidan.functionalText": "Flexible training space for movement and performance.",
        "meidan.personal": "Personal Training",
        "meidan.personalText": "Membership and training options can be presented here.",
        "meidan.membershipEyebrow": "MEMBERSHIPS",
        "meidan.membershipTitle": "Find your training rhythm.",
        "meidan.membershipText": "Subscription details can be replaced with official Al Meidan pricing and benefits after approval.",
        "meidan.monthly": "MONTHLY",
        "meidan.monthlyTitle": "Flexible Start",
        "meidan.quarterly": "QUARTERLY",
        "meidan.quarterlyTitle": "Consistency",
        "meidan.annual": "ANNUAL",
        "meidan.annualTitle": "Long Term",
        "meidan.benefit1": "Gym access",
        "meidan.benefit2": "Training areas",
        "meidan.benefit3": "Membership support",
        "meidan.contact": "Contact Us",

        "pools.eyebrow": "THE POOLS",
        "pools.title": "Make a splash<br><em>at Al Ahli.</em>",
        "pools.status": "POOL INFORMATION",
        "pools.statusText": "Check current schedule before visiting",
        "pools.experience": "POOL EXPERIENCE",
        "pools.facilityTitle": "Water, sport & summer.",
        "pools.facilityText": "Explore pool facilities and public swimming opportunities in a dedicated club environment.",
        "pools.hoursButton": "Opening Hours",
        "pools.hoursEyebrow": "OPENING HOURS",
        "pools.hoursTitle": "Plan your visit.",
        "pools.demoNote": "Demonstration schedule — official opening hours should be confirmed with Al Ahli before launch.",
        "pools.contactEyebrow": "NEED INFORMATION?",
        "pools.contactTitle": "Contact the pools.",
        "pools.call": "Call",
        "pools.whatsapp": "Message",

        "days.monday": "Monday",
        "days.tuesday": "Tuesday",
        "days.wednesday": "Wednesday",
        "days.thursday": "Thursday",
        "days.friday": "Friday",
        "days.saturday": "Saturday",
        "days.sunday": "Sunday",

        "legacy.eyebrow": "THE ARCHIVE",
        "legacy.title": "Three moments.<br><em>One story.</em>",
        "legacy.founded": "THE BEGINNING",
        "legacy.1944Title": "Al Ahli is founded.",
        "legacy.1944Text": "The club begins its journey as Al Ahli Sporting Club, establishing a sporting institution that would become part of Jordan's sporting history.",
        "legacy.headquarters": "A NEW HOME",
        "legacy.1986Title": "Bayader Wadi Al-Seer.",
        "legacy.1986Text": "The current headquarters opens, giving generations of athletes and families a new home.",
        "legacy.today": "THE NEXT CHAPTER",
        "legacy.todayTitle": "Still moving forward.",
        "legacy.todayText": "Sport, culture, community and new generations continue to shape Al Ahli.",

        "culture.eyebrow": "CIRCASSIAN HERITAGE",
        "culture.title": "Sport is only<br><em>part of the story.</em>",
        "culture.text": "Al Ahli's identity also carries cultural heritage, including Circassian folklore and traditions that continue to connect generations.",
        "culture.members": "FOLKLORE GROUP MEMBERS",

        "community.eyebrow": "COMMUNITY",
        "community.title": "A club with<br><em>a social role.</em>",
        "community.text": "Beyond competition, Al Ahli's mission includes community partnerships, social responsibility and opportunities for people to participate.",
        "community.cta": "Connect With Al Ahli",

        "events.eyebrow": "WHAT'S HAPPENING",
        "events.title": "Inside<br><em>the club.</em>",
        "events.all": "View all events",
        "events.sport": "SPORT",
        "events.community": "COMMUNITY",
        "events.culture": "CULTURE",
        "events.event1": "Football activities",
        "events.event2": "Community gatherings",
        "events.event3": "Cultural occasions",
        "events.eventText": "Training, competitions and sporting activity.",

        "booking.eyebrow": "FIELD BOOKING",
        "booking.title": "Your next game<br><em>starts here.</em>",
        "booking.text": "Choose your field, date and preferred time. This presentation version demonstrates the future Al Ahli booking experience.",
        "booking.note": "Demonstration booking system — not yet connected to the club's live reservation system.",
        "booking.name": "Full Name",
        "booking.namePlaceholder": "Your name",
        "booking.phone": "Phone",
        "booking.field": "Field",
        "booking.chooseField": "Choose field",
        "booking.players": "Players",
        "booking.date": "Date",
        "booking.time": "Time",
        "booking.chooseTime": "Choose time",
        "booking.notes": "Additional Information",
        "booking.notesPlaceholder": "Anything we should know?",
        "booking.submit": "Request Booking",

        "contact.eyebrow": "VISIT AL AHLI",
        "contact.title": "Your home<br><em>at the club.</em>",
        "contact.addressLabel": "ADDRESS",
        "contact.address": "52 Mousa Al-Nahar Street,<br>Amman, Jordan",
        "contact.directions": "Get Directions",
        "contact.phoneLabel": "PHONE",
        "contact.emailLabel": "EMAIL",
        "contact.socialLabel": "SOCIAL",

        "footer.text": "More than a club. A legacy in motion.",

        "modal.title": "Request received.",
        "modal.text": "Your demonstration booking request has been saved locally.",
        "modal.reference": "REFERENCE",
        "modal.done": "Done"
    },


    ar: {

        "nav.home": "الرئيسية",
        "nav.club": "النادي",
        "nav.admin": "الإدارة",
        "nav.sports": "الرياضات",
        "nav.facilities": "المرافق",
        "nav.legacy": "الإرث",
        "nav.events": "الفعاليات",
        "nav.contact": "تواصل معنا",
        "nav.book": "احجز",

        "hero.kicker": "عمّان · الأردن · منذ 1944",
        "hero.line1": "أكثر",
        "hero.line2": "من مجرد",
        "hero.line3": "نادٍ.",
        "hero.description": "ثمانية عقود من الرياضة والثقافة والإنجاز وخدمة المجتمع. بيت واحد لأجيال الأهلي.",
        "hero.explore": "اكتشف الأهلي",
        "hero.book": "احجز ملعباً",
        "hero.founded": "التأسيس",
        "hero.titles": "بطولة",
        "hero.years": "عاماً",
        "hero.scroll": "اكتشف النادي",

        "club.eyebrow": "النادي",
        "club.title": "إرث بُني<br>عبر الأجيال.",
        "club.copy": "كان النادي الأهلي الرياضي جزءاً من قصة الرياضة الأردنية منذ عام 1944، وتحول من مؤسسة رياضية إلى بيت للمنافسة والثقافة والمجتمع.",
        "club.story": "اكتشف قصتنا",
        "club.caption": "رياضة · ثقافة · مجتمع",

        "stats.titles": "إجمالي البطولات",
        "stats.athletes": "رياضي مسجل وأكثر",
        "stats.fields": "ملاعب كرة قدم",
        "stats.folklore": "عضو في فرقة الفلكلور وأكثر",

        "administration.eyebrow": "القيادة والإدارة",
        "administration.title": "الأشخاص<br>خلف النادي.",
        "administration.description": "إدارة تعمل خلف الكواليس لبناء مستقبل النادي الأهلي.",
        "administration.board": "مجلس الإدارة والقيادة",
        "administration.boardTitle": "نقود النادي نحو المستقبل.",
        "administration.boardText": "يمكن إضافة أسماء وصور الإدارة الرسمية بعد اعتمادها من النادي.",
        "administration.sports": "الإدارة الرياضية",
        "administration.sportsTitle": "المنافسة والأداء.",
        "administration.sportsText": "دعم الفرق والرياضيين والمسابقات والتطوير الرياضي في مختلف أقسام النادي.",
        "administration.operations": "عمليات النادي",
        "administration.operationsTitle": "نحافظ على حركة النادي.",
        "administration.operationsText": "المرافق وخدمات الأعضاء والفعاليات والتجربة اليومية داخل النادي.",

        "sports.eyebrow": "الرياضات",
        "sports.title": "حيث<br>تعيش المنافسة.",
        "sports.description": "اكتشف عالم الرياضة في الأهلي، من ملاعب كرة القدم إلى السباحة والرياضات الجماعية.",
        "sports.football": "كرة القدم",
        "sports.basketball": "كرة السلة",
        "sports.handball": "كرة اليد",
        "sports.swimming": "السباحة",

        "football.title": "كرة القدم",
        "football.fieldsEyebrow": "أربعة ملاعب",
        "football.fieldsTitle": "اختر ملعبك.",
        "football.field": "ملعب",
        "football.book": "احجز",

        "basketball.title": "كرة السلة",
        "basketball.text": "تاريخ رياضي تنافسي مدعوم بعقود من الإنجازات والتطوير.",

        "handball.title": "كرة اليد",
        "handball.text": "أكثر رياضات الأهلي تتويجاً، مع 53 بطولة وفق التاريخ الرسمي للنادي.",

        "swimming.title": "السباحة",
        "swimming.text": "من المسابح العامة إلى أكاديمية السباحة التي تقدم التدريب لمختلف المستويات والأعمار.",
        "swimming.explore": "اكتشف المسابح",

        "achievements.eyebrow": "سجل الإنجازات",
        "achievements.title": "91 بطولة.<br><em>إرث واحد.</em>",
        "achievements.football": "بطولات كرة القدم",
        "achievements.handball": "بطولات كرة اليد",
        "achievements.basketball": "بطولات كرة السلة",

        "facilities.eyebrow": "المرافق",
        "facilities.title": "اكتشف<br><em>بيئة النادي.</em>",
        "facilities.pools": "المسابح",
        "facilities.poolText": "اكتشف مرافق المسابح وأيام السباحة العامة وأكاديمية السباحة.",
        "facilities.meidan": "الميدان",
        "facilities.meidanText": "التدريب والقوة واللياقة والاشتراكات.",
        "facilities.fields": "ملاعب كرة القدم",
        "facilities.fieldText": "أربعة ملاعب للتدريب وكرة القدم.",
        "facilities.explore": "اكتشف",
        "facilities.discover": "تعرّف",
        "facilities.view": "شاهد الملاعب",

        "meidan.line1": "تدرّب",
        "meidan.line2": "بكل",
        "meidan.line3": "هدف.",
        "meidan.description": "بيئة تدريب مخصصة تركز على القوة واللياقة والأداء.",
        "meidan.strength": "منطقة القوة",
        "meidan.strengthText": "مساحة مخصصة للتدريب المرتكز على القوة.",
        "meidan.cardio": "منطقة الكارديو",
        "meidan.cardioText": "بيئة مخصصة للياقة وتمارين القلب.",
        "meidan.functional": "التدريب الوظيفي",
        "meidan.functionalText": "مساحة مرنة للحركة وتطوير الأداء.",
        "meidan.personal": "التدريب الشخصي",
        "meidan.personalText": "يمكن عرض خيارات العضوية والتدريب هنا.",
        "meidan.membershipEyebrow": "الاشتراكات",
        "meidan.membershipTitle": "اختر نظامك التدريبي.",
        "meidan.membershipText": "يمكن استبدال تفاصيل الاشتراكات بالأسعار والمزايا الرسمية بعد اعتمادها.",
        "meidan.monthly": "شهري",
        "meidan.monthlyTitle": "بداية مرنة",
        "meidan.quarterly": "ربع سنوي",
        "meidan.quarterlyTitle": "استمرارية",
        "meidan.annual": "سنوي",
        "meidan.annualTitle": "طويل المدى",
        "meidan.benefit1": "دخول النادي الرياضي",
        "meidan.benefit2": "مناطق التدريب",
        "meidan.benefit3": "دعم العضوية",
        "meidan.contact": "تواصل معنا",

        "pools.eyebrow": "المسابح",
        "pools.title": "استمتع بالماء<br><em>في الأهلي.</em>",
        "pools.status": "معلومات المسابح",
        "pools.statusText": "تحقق من الجدول الحالي قبل الزيارة",
        "pools.experience": "تجربة المسابح",
        "pools.facilityTitle": "الماء والرياضة والصيف.",
        "pools.facilityText": "اكتشف مرافق المسابح وفرص السباحة العامة في بيئة النادي.",
        "pools.hoursButton": "ساعات العمل",
        "pools.hoursEyebrow": "ساعات العمل",
        "pools.hoursTitle": "خطط لزيارتك.",
        "pools.demoNote": "جدول تجريبي — يجب تأكيد ساعات العمل الرسمية مع النادي قبل الإطلاق.",
        "pools.contactEyebrow": "تحتاج إلى معلومات؟",
        "pools.contactTitle": "تواصل مع المسابح.",
        "pools.call": "اتصال",
        "pools.whatsapp": "رسالة",

        "days.monday": "الاثنين",
        "days.tuesday": "الثلاثاء",
        "days.wednesday": "الأربعاء",
        "days.thursday": "الخميس",
        "days.friday": "الجمعة",
        "days.saturday": "السبت",
        "days.sunday": "الأحد",

        "legacy.eyebrow": "الأرشيف",
        "legacy.title": "ثلاث محطات.<br><em>قصة واحدة.</em>",
        "legacy.founded": "البداية",
        "legacy.1944Title": "تأسيس النادي الأهلي.",
        "legacy.1944Text": "بدأ النادي رحلته كنادٍ أهلي رياضي، ليؤسس مؤسسة رياضية أصبحت جزءاً من تاريخ الرياضة الأردنية.",
        "legacy.headquarters": "بيت جديد",
        "legacy.1986Title": "بيادر وادي السير.",
        "legacy.1986Text": "افتتح المقر الحالي ليصبح بيتاً لأجيال من الرياضيين والعائلات.",
        "legacy.today": "الفصل القادم",
        "legacy.todayTitle": "ما زال يتقدم.",
        "legacy.todayText": "تواصل الرياضة والثقافة والمجتمع والأجيال الجديدة تشكيل مستقبل الأهلي.",

        "culture.eyebrow": "التراث الشركسي",
        "culture.title": "الرياضة ليست<br><em>كل القصة.</em>",
        "culture.text": "تحمل هوية الأهلي أيضاً إرثاً ثقافياً، بما في ذلك الفلكلور والعادات الشركسية التي تواصل ربط الأجيال.",
        "culture.members": "أعضاء فرقة الفلكلور",

        "community.eyebrow": "المجتمع",
        "community.title": "نادٍ له<br><em>دور اجتماعي.</em>",
        "community.text": "إلى جانب المنافسة، تشمل رسالة الأهلي الشراكات المجتمعية والمسؤولية الاجتماعية وفرص المشاركة.",
        "community.cta": "تواصل مع الأهلي",

        "events.eyebrow": "ماذا يحدث؟",
        "events.title": "من داخل<br><em>النادي.</em>",
        "events.all": "شاهد جميع الفعاليات",
        "events.sport": "رياضة",
        "events.community": "مجتمع",
        "events.culture": "ثقافة",
        "events.event1": "أنشطة كرة القدم",
        "events.event2": "فعاليات مجتمعية",
        "events.event3": "مناسبات ثقافية",
        "events.eventText": "تدريب ومسابقات وأنشطة رياضية.",

        "booking.eyebrow": "حجز الملاعب",
        "booking.title": "مباراتك القادمة<br><em>تبدأ هنا.</em>",
        "booking.text": "اختر الملعب والتاريخ والوقت المفضل. هذه النسخة التجريبية تعرض تجربة الحجز المستقبلية للنادي.",
        "booking.note": "نظام حجز تجريبي — غير متصل بعد بنظام الحجوزات المباشر للنادي.",
        "booking.name": "الاسم الكامل",
        "booking.namePlaceholder": "اسمك",
        "booking.phone": "رقم الهاتف",
        "booking.field": "الملعب",
        "booking.chooseField": "اختر الملعب",
        "booking.players": "اللاعبون",
        "booking.date": "التاريخ",
        "booking.time": "الوقت",
        "booking.chooseTime": "اختر الوقت",
        "booking.notes": "معلومات إضافية",
        "booking.notesPlaceholder": "هل هناك أي معلومات إضافية؟",
        "booking.submit": "إرسال طلب الحجز",

        "contact.eyebrow": "زر الأهلي",
        "contact.title": "بيتك<br><em>في النادي.</em>",
        "contact.addressLabel": "العنوان",
        "contact.address": "52 شارع موسى النهار،<br>عمّان، الأردن",
        "contact.directions": "احصل على الاتجاهات",
        "contact.phoneLabel": "الهاتف",
        "contact.emailLabel": "البريد الإلكتروني",
        "contact.socialLabel": "التواصل الاجتماعي",

        "footer.text": "أكثر من نادٍ. إرث مستمر.",

        "modal.title": "تم استلام الطلب.",
        "modal.text": "تم حفظ طلب الحجز التجريبي على هذا الجهاز.",
        "modal.reference": "المرجع",
        "modal.done": "تم"
    }

};


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

function applyLanguage(lang) {

    const dictionary = translations[lang] || translations.en;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle("rtl", lang === "ar");

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (dictionary[key] !== undefined) {
            element.innerHTML = dictionary[key];
        }

    });


    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (dictionary[key] !== undefined) {
            element.placeholder = dictionary[key];
        }

    });


    const languageButton = document.getElementById("languageToggle");

    if (languageButton) {
        languageButton.textContent = lang === "en" ? "AR" : "EN";
    }

    localStorage.setItem("alAhliLanguage352", lang);
}


function toggleLanguage() {

    const current =
        localStorage.getItem("alAhliLanguage352") || "en";

    applyLanguage(current === "en" ? "ar" : "en");
}


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hidden");
        }

    }, 700);

});


/* =========================================================
   HEADER
========================================================= */

const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {

    if (!header) return;

    header.classList.toggle(
        "scrolled",
        window.scrollY > 60
    );

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });


    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });

    });

}


/* =========================================================
   LANGUAGE BUTTON
========================================================= */

const languageToggle =
    document.getElementById("languageToggle");

if (languageToggle) {

    languageToggle.addEventListener(
        "click",
        toggleLanguage
    );

}


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

applyLanguage(
    localStorage.getItem("alAhliLanguage352") || "en"
);


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: .12
        }
    );


document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
});


/* =========================================================
   COUNTERS
========================================================= */

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const element = entry.target;

                const target =
                    Number(element.dataset.counter);

                let current = 0;

                const duration = 1400;
                const start = performance.now();

                function update(time) {

                    const progress =
                        Math.min(
                            (time - start) / duration,
                            1
                        );

                    const eased =
                        1 - Math.pow(1 - progress, 3);

                    current =
                        Math.floor(target * eased);

                    element.textContent =
                        target >= 1000
                            ? `${current.toLocaleString()}+`
                            : current;

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }

                }

                requestAnimationFrame(update);

                counterObserver.unobserve(element);

            });

        },
        {
            threshold: .7
        }
    );


document.querySelectorAll("[data-counter]").forEach(element => {
    counterObserver.observe(element);
});


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroBackground =
    document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    if (!heroBackground) return;

    if (window.scrollY < window.innerHeight) {

        heroBackground.style.transform =
            `scale(1.04) translateY(${window.scrollY * .12}px)`;

    }

});


/* =========================================================
   SPORT TABS
========================================================= */

const sportTabs =
    document.querySelectorAll(".sport-tab");

sportTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        sportTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const sport =
            tab.dataset.sport;

        document.querySelectorAll(".sport-panel")
            .forEach(panel => {
                panel.classList.remove("active");
            });

        const selected =
            document.getElementById(
                `sport-${sport}`
            );

        if (selected) {
            selected.classList.add("active");
        }

    });

});


/* =========================================================
   FIELD BOOKING
========================================================= */

const bookingForm =
    document.getElementById("bookingForm");

const bookingField =
    document.getElementById("bookingField");

const bookingDate =
    document.getElementById("bookingDate");

const bookingModal =
    document.getElementById("bookingModal");

const bookingReference =
    document.getElementById("bookingReference");


function generateReference() {

    return "AA-" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );

}


function getBookings() {

    return JSON.parse(
        localStorage.getItem(
            "alAhliBookings352"
        ) || "[]"
    );

}


function saveBookings(bookings) {

    localStorage.setItem(
        "alAhliBookings352",
        JSON.stringify(bookings)
    );

}


function isConflict(field, date, time) {

    return getBookings().some(
        booking =>
            booking.field === field &&
            booking.date === date &&
            booking.time === time &&
            booking.status !== "rejected"
    );

}


if (bookingDate) {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];

    bookingDate.min = today;

}


document.querySelectorAll(".field-select")
    .forEach(button => {

        button.addEventListener("click", () => {

            const field =
                button.dataset.field;

            if (bookingField) {
                bookingField.value = field;
            }

            document
                .getElementById("booking")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                document.getElementById(
                    "bookingName"
                ).value.trim();

            const phone =
                document.getElementById(
                    "bookingPhone"
                ).value.trim();

            const field =
                bookingField.value;

            const players =
                document.getElementById(
                    "bookingPlayers"
                ).value;

            const date =
                bookingDate.value;

            const time =
                document.getElementById(
                    "bookingTime"
                ).value;

            const notes =
                document.getElementById(
                    "bookingNotes"
                ).value.trim();


            if (
                isConflict(
                    field,
                    date,
                    time
                )
            ) {

                alert(
                    "This field and time are already requested."
                );

                return;

            }


            const reference =
                generateReference();


            const booking = {

                reference,
                name,
                phone,
                field,
                players,
                date,
                time,
                notes,
                status: "pending",
                createdAt:
                    new Date().toISOString()

            };


            const bookings =
                getBookings();

            bookings.push(booking);

            saveBookings(bookings);


            bookingReference.textContent =
                reference;

            bookingModal.classList.add("open");

            bookingForm.reset();

        }
    );

}


/* =========================================================
   MODAL
========================================================= */

const modalClose =
    document.getElementById("modalClose");

const modalDone =
    document.getElementById("modalDone");


function closeModal() {

    if (bookingModal) {
        bookingModal.classList.remove("open");
    }

}


if (modalClose) {
    modalClose.addEventListener(
        "click",
        closeModal
    );
}

if (modalDone) {
    modalDone.addEventListener(
        "click",
        closeModal
    );
}

if (bookingModal) {

    bookingModal.addEventListener(
        "click",
        event => {

            if (
                event.target === bookingModal
            ) {
                closeModal();
            }

        }
    );

}


/* =========================================================
   ADMIN PORTAL
========================================================= */

const adminLogin =
    document.getElementById("adminLogin");

const dashboard =
    document.getElementById("dashboard");

const adminLoginForm =
    document.getElementById("adminLoginForm");


function showDashboard() {

    if (!adminLogin || !dashboard) return;

    adminLogin.style.display = "none";

    dashboard.classList.add(
        "logged-in"
    );

    renderAdminBookings();
    updateAdminStats();

}


if (adminLoginForm) {

    adminLoginForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const username =
                document.getElementById(
                    "adminUsername"
                ).value;

            const password =
                document.getElementById(
                    "adminPassword"
                ).value;

            const error =
                document.getElementById(
                    "loginError"
                );


            /*
                DEMO ONLY.

                These credentials are intentionally
                client-side for Phase 3.5.2.

                They MUST be replaced by secure
                server-side authentication in Phase 4.
            */

            if (
                username === "admin" &&
                password === "alahli1944"
            ) {

                sessionStorage.setItem(
                    "alAhliAdmin352",
                    "true"
                );

                showDashboard();

            } else {

                error.classList.add("show");

            }

        }
    );

}


if (
    adminLogin &&
    dashboard &&
    sessionStorage.getItem(
        "alAhliAdmin352"
    ) === "true"
) {

    showDashboard();

}


/* =========================================================
   ADMIN NAVIGATION
========================================================= */

const dashboardNav =
    document.querySelectorAll(".dashboard-nav");

const dashboardPanels =
    document.querySelectorAll(".dashboard-panel");

const dashboardTitle =
    document.getElementById("dashboardTitle");


dashboardNav.forEach(button => {

    button.addEventListener("click", () => {

        dashboardNav.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        dashboardPanels.forEach(panel => {
            panel.classList.remove("active");
        });

        const panel =
            document.getElementById(
                `panel-${button.dataset.panel}`
            );

        if (panel) {
            panel.classList.add("active");
        }

        if (dashboardTitle) {
            dashboardTitle.textContent =
                button.textContent.trim();
        }

    });

});


/* =========================================================
   ADMIN BOOKINGS
========================================================= */

function renderAdminBookings() {

    const table =
        document.getElementById(
            "bookingTableBody"
        );

    const recent =
        document.getElementById(
            "recentBookings"
        );

    if (!table) return;

    const bookings =
        getBookings();


    if (!bookings.length) {

        table.innerHTML = `
            <tr>
                <td colspan="7">
                    No booking requests yet.
                </td>
            </tr>
        `;

        if (recent) {
            recent.innerHTML =
                `<p style="color:#666;font-size:11px">
                    No recent bookings.
                </p>`;
        }

        return;

    }


    table.innerHTML =
        bookings
            .slice()
            .reverse()
            .map(booking => `

                <tr>

                    <td>${booking.reference}</td>

                    <td>${escapeHtml(booking.name)}</td>

                    <td>${escapeHtml(booking.field)}</td>

                    <td>${booking.date}</td>

                    <td>${booking.time}</td>

                    <td>
                        <span class="status-badge">
                            ${booking.status}
                        </span>
                    </td>

                    <td>

                        ${
                            booking.status === "pending"
                                ? `
                                    <button
                                        class="action-button"
                                        onclick="approveBooking('${booking.reference}')"
                                    >
                                        Approve
                                    </button>

                                    <button
                                        class="action-button"
                                        onclick="rejectBooking('${booking.reference}')"
                                    >
                                        Reject
                                    </button>
                                  `
                                : "—"
                        }

                    </td>

                </tr>

            `)
            .join("");


    if (recent) {

        recent.innerHTML =
            bookings
                .slice()
                .reverse()
                .slice(0, 5)
                .map(booking => `

                    <div class="booking-row">

                        <div>

                            <strong>
                                ${escapeHtml(booking.name)}
                            </strong>

                            <small>
                                ${booking.field}
                                ·
                                ${booking.date}
                                ·
                                ${booking.time}
                            </small>

                        </div>

                        <span class="status-badge">
                            ${booking.status}
                        </span>

                    </div>

                `)
                .join("");

    }

}


function updateAdminStats() {

    const bookings =
        getBookings();

    const pending =
        bookings.filter(
            booking =>
                booking.status === "pending"
        ).length;


    const count =
        document.getElementById(
            "adminBookingCount"
        );

    const pendingCount =
        document.getElementById(
            "adminPendingCount"
        );


    if (count) {
        count.textContent =
            bookings.length;
    }

    if (pendingCount) {
        pendingCount.textContent =
            pending;
    }

}


function approveBooking(reference) {

    const bookings =
        getBookings();

    const booking =
        bookings.find(
            item =>
                item.reference === reference
        );

    if (!booking) return;

    booking.status = "approved";

    saveBookings(bookings);

    renderAdminBookings();
    updateAdminStats();

}


function rejectBooking(reference) {

    const bookings =
        getBookings();

    const booking =
        bookings.find(
            item =>
                item.reference === reference
        );

    if (!booking) return;

    booking.status = "rejected";

    saveBookings(bookings);

    renderAdminBookings();
    updateAdminStats();

}


function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   FACILITY TOGGLES
========================================================= */

document.querySelectorAll(
    ".toggle-control"
).forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const isOpen =
            button.classList.contains("active");

        button.textContent =
            isOpen ? "OPEN" : "CLOSED";

    });

});


/* =========================================================
   POOL ADMIN STATUS
========================================================= */

const poolToggle =
    document.getElementById("poolToggle");

const adminPoolStatus =
    document.getElementById(
        "adminPoolStatus"
    );


if (poolToggle) {

    poolToggle.addEventListener(
        "click",
        () => {

            const open =
                poolToggle.classList.toggle(
                    "active"
                );

            poolToggle.textContent =
                open ? "OPEN" : "CLOSED";

            if (adminPoolStatus) {
                adminPoolStatus.textContent =
                    open ? "OPEN" : "CLOSED";
            }

            localStorage.setItem(
                "alAhliPoolOpen352",
                String(open)
            );

        }
    );

}


/* =========================================================
   LOGOUT
========================================================= */

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        () => {

            sessionStorage.removeItem(
                "alAhliAdmin352"
            );

            location.reload();

        }
    );

}
