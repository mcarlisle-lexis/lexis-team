/* Lexis "Meet the Team" — staff data.
 * Extracted from the New Website staff-profile docs (OneDrive, Jul 2026).
 * campus = canonical value used for filtering; campusLabel = display override (optional).
 * photo = filename in ./assets, or null to render an initials avatar.
 */
window.PEOPLE = [
  {
    slug: "brad-perks", name: "Brad Perks", role: "Academic Manager",
    campus: "Brisbane", campusLabel: "All campuses · based Brisbane",
    languages: "English, Japanese", hometown: "Melbourne, Australia", since: "Since birth", photo: "brad-perks.jpg",
    bio: `Melbourne-born Brad has spent nearly 20 years working in English language education across Australia and Japan. After living and teaching in Japan for 11 years, he decided to make Brisbane home in 2020. With experience across language schools, universities and international education programs, he has been at Lexis for almost two years, supporting students in finding the right course and learning pathway to suit their needs. Traded Melbourne and Japan for Brisbane sunshine; still enjoys a competitive game of tennis.`,
    q1: `Welcome to your Australian learning journey! I'm here to support you as you work towards your academic goals and help you make the most of your experience studying in Australia. I look forward to guiding you, encouraging your progress, and helping you build your English skills, confidence and connections along the way.`,
    q2: `Brisbane has a relaxed lifestyle, with many shops and cafés opening early and closing earlier than in some major cities. However, as a vibrant international city, it offers a wide variety of global restaurants, cultural experiences and exciting nightlife options to enjoy.`,
    q3: `Definitely the massive student lounge! It's where we hold all our awesome activities, and it's the perfect place to relax, make new friends and practise your English outside the classroom.`
  },
  {
    slug: "kaitlyn-apaipora", name: "Kaitlyn Apaipora", role: "Student Services & Activity Officer",
    campus: "Brisbane", languages: "English", hometown: "Auckland, New Zealand", since: "2025", photo: "kaitlyn-apaipora.jpg",
    bio: `Another Kiwi who has made the move to Australia! After spending 2.5 years living in London and travelling throughout Europe, Kaitlyn recently relocated to Brisbane and joined the Lexis team in October 2025. With a passion for travel and connecting with people from different cultures, she loves helping students settle into life in Brisbane and make the most of their Lexis experience. "Just to let you know, New Zealand pies are better than Australia's. Up the WAHS!"`,
    q1: `I help students feel comfortable and supported throughout their entire journey, from their first day at Lexis to graduation. I'm like a big sister on campus and am always happy to answer questions, offer advice, or point you in the right direction. I also organise fun and engaging activities that encourage students to step out of their comfort zones, make new friends and explore everything Brisbane has to offer.`,
    q2: `You'll meet so many amazing people and create memories that will stay with you forever. One of the most rewarding parts of my job is seeing students grow in confidence, both in their English and in themselves. My advice is to put yourself out there, sign up for activities, and take every opportunity to explore and try something new. If you're coming to Brisbane on your own, don't worry — you'll quickly make friends and become part of our Lexis family.`,
    q3: `My favourite thing about Brisbane is that you get to experience city life while still being close to some of Australia's best beaches. It's easy to take a quick weekend road trip and explore new places with friends. Brisbane has such a chill and welcoming atmosphere, and there's always something happening around the city — food, sports, nature or nightlife, there's something for everyone.`
  },
  {
    slug: "maria-edwards", name: "Maria Edwards", role: "Accommodation Co-ordinator",
    campus: "Brisbane", languages: "English", hometown: "Brisbane, Australia", since: "Since birth", photo: "maria-edwards.jpg",
    bio: `I came on board with Lexis in 2022 and have been here for over four years now. I arrange homestay and Student One accommodation for Lexis students, liaising with hosts, Student One staff and students during their stay to ensure it's comfortable and enjoyable. Working at Lexis keeps me young — I love seeing the students each day and hearing their laughter. I may have been born in Australia but I'm half Russian; my mother immigrated here when she was eight. My outfit isn't complete unless I'm wearing flowers in my hair!`,
    q1: `I'll do my best to find you the perfect homestay match. I want you to feel like you're part of the host's family. I feel so much satisfaction when I see how happy the students I've placed are.`,
    q2: `You may feel lost at first, but remember, we are all here for you. Lexis is a big family and we will listen and encourage you to have new experiences. We are here for you to lean on — there are so many adventures to have while you're studying at Lexis Brisbane.`,
    q3: `A couple of my favourite weekend activities include visiting the Mt Coot-tha Botanic Gardens and taking photos — there's so much beauty to see. I also love exploring the numerous antique and op shops around Brisbane, where there are so many treasures to find.`
  },
  {
    slug: "crispian-short", name: "Crispian Short", role: "Campus Manager",
    campus: "Brisbane", languages: "English", hometown: "Brisbane, Australia", since: "1980s", photo: "crispian-short.jpg",
    bio: `Crispian has spent almost 25 years in education since living and working in Japan as an English teacher. That experience has spanned universities, vocational colleges and TAFE — in teaching and administration — working with a range of stakeholders from students and agents to government departments. At Lexis, he manages the daily and future needs of the Brisbane campus, encompassing students, teachers and facilities. If not at Lexis, he's spending time with family and watching and playing sports.`,
    q1: `I support students and teachers to have the best education experience in Brisbane.`,
    q2: `Brisbane is a morning city. You'll see many people get up early to walk, cycle, run, watch the sunrise, and grab a coffee or breakfast at a café from 6am. Join them.`,
    q3: `There is more history in Brisbane than you realise.`
  },
  {
    slug: "jordan-gregory", name: "Jordan Gregory", role: "Accommodation & Student Services Officer",
    campus: "Byron Bay", languages: "English", hometown: "Dorset, UK", since: "August 2025", photo: "jordan-gregory.jpg",
    bio: `Jordan has been at Lexis since the start of September 2025 — new to Byron Bay at the time, but now a fully-fledged local. At Lexis, he helps sort out everything from homestay accommodation to running the activities calendar and answering all your queries about the campus and the town. He loves that Byron Bay has so much to offer all year round, is equal parts tranquil and fun, and that you'll begin to feel at home here very quickly indeed.`,
    q1: `I really try to connect with the students here and make them feel comfortable. Through my role as homestay co-ordinator I speak often with the hosts you'll stay with, and as the student services officer it's my responsibility to make you feel settled here on campus. Fundamentally my job is to make sure you have the best time possible!`,
    q2: `Byron is a small town and that's the best thing about it. If you want a mall, you can catch the coach up to Brissy, but here you can walk to a beach and have it all to yourself. This is a beautiful part of the planet, and it's no wonder this small town resonates across the world.`,
    q3: `A walk up to the lighthouse at dawn, watching the dolphins surf the waves, and understanding that just by going outside you're going to be immersed in this awesome Australian experience.`
  },
  {
    slug: "ian-pratt", name: "Ian Pratt", role: "Managing Director",
    campus: "Head Office", dept: "Marketing", campusLabel: "Noosa", languages: "English, Japanese", hometown: "Canberra, Australia", since: "Born here", photo: "ian-pratt.jpg",
    bio: `After living overseas as international students, my wife and I started Lexis back in 2004. We're incredibly lucky that we've been able to spend our lives doing a job that we're absolutely passionate about.`,
    q1: `I work with a great team at Lexis to run our operations in Australia! I have a great job — I work with a wonderful team, I meet students from all over the world, and I get to travel to amazing places!`,
    q2: `I'm not meant to have a favourite school, but there's something very special about Noosa. No matter where you're from, you can become part of the community here. Slow down and enjoy a completely different lifestyle while you study!`,
    q3: `I love two very different parts of the Noosa lifestyle — it's one of the most naturally beautiful places in Australia, with stunning national parks and beaches, but it's also one of the best places for dining out, with world-class cafes, restaurants and bars. Come and check it out for yourself!`
  },
  {
    slug: "lindsay-planck", name: "Lindsay Planck", role: "General Manager",
    campus: "Head Office", photo: null,
    bio: ``,
    q1: ``, q2: ``, q3: ``
  },
  {
    slug: "chris-orvis", name: "Chris Orvis", role: "Operations Manager",
    campus: "Head Office", photo: null,
    bio: ``,
    q1: ``, q2: ``, q3: ``
  },
  {
    slug: "jason-knapp", name: "Jason Knapp", role: "Marketing Director",
    campus: "Head Office", dept: "Marketing", campusLabel: "Noosa", languages: "English", hometown: "Brisbane, Australia", since: "Since birth", photo: "jason-knapp.jpg",
    bio: `With a career spanning multiple Queensland universities, I've now called Lexis home for almost ten years — a journey that has connected me with students and education partners from over 50 countries. I divide my time between Brisbane and Noosa, and I'm a firm believer that Noosa's lifestyle is second to none. When I'm not working, you'll find me travelling the world, exploring new cities, sampling local cuisines and immersing myself in how people truly live.`,
    q1: `I help students choose the study plan and location that's the best fit for them across our schools. The right learning experience isn't just about the course — it's about life outside the classroom too. Matching students with the right experience is what I do best.`,
    q2: `Australian study life is all about cultural openness. Get out there, talk to the locals, hear their stories, and use what you learn in class to grow and connect.`,
    q3: `My mornings in Noosa start with a run through Noosa National Park — tropical rainforest trails opening onto secluded beaches — then a cool-down swim and coffee at Sails Café before the workday begins. During June, July and August you'll see the whale migration on your journey. Hard to imagine a better way to start the day.`
  },
  {
    slug: "jing-tsai", name: "Jing Tsai", role: "Country Manager — Taiwan",
    campus: "Head Office", dept: "Marketing", campusLabel: "Taiwan", languages: "Mandarin (native), English, Japanese", hometown: "Kaohsiung, Taiwan", since: "In Australia since 2010", photo: null,
    bio: `Jing is from Taiwan, a beautiful island famous for its stunning mountains, vibrant night markets and friendly people. With years of experience in international education, student counselling and market development, she is passionate about helping students achieve their study-abroad goals. At Lexis she works closely with education agents across Taiwan and supports students in finding the course and campus that best suit their aspirations. Passionate about travel, great food and exploring different cultures, Jing believes studying abroad is about much more than learning English — it's an opportunity to broaden your horizons, build confidence and create unforgettable life experiences.`,
    q1: `Having travelled to many countries myself, I know every great journey starts with the right plan. At Lexis, I help students choose the course, campus and destination that best suit their goals, so they can enjoy not only learning English but also discovering new cultures, building confidence and creating memories that last a lifetime.`,
    q2: `Bring your curiosity, not just your suitcase. The biggest surprises often happen outside the classroom — meeting people from different cultures, trying something new, and discovering that you're capable of more than you ever imagined. Those are the memories you'll take home with you.`,
    q3: `Noosa will always be special to me because it was the first city I visited in Australia, and where I studied at Lexis Noosa. I made friends from around the world, spent my days surrounded by sunshine, beaches and national parks, and loved those lazy afternoons after class — lying on the sand, listening to the ocean and soaking up the sun. That journey opened my curiosity for the world.`
  },
  {
    slug: "wakako-yamaguchi", name: "Wakako Yamaguchi", role: "Sales & Marketing Manager",
    campus: "Head Office", dept: "Marketing", campusLabel: "All campuses",
    languages: "Japanese, English", hometown: "Iwate, Japan", since: "2007", photo: null,
    bio: `I've been with Lexis English for over 15 years, working in recruitment and marketing to help Japanese students make their study experience in Australia truly worthwhile. I love our Manly campus because you can enjoy beautiful ocean views from the terrace and still reach Sydney city in just 20 minutes. I also love relaxing at the beach.`,
    q1: `Most of my work is with our education agents in Japan, helping them find the best options for their students. I also create marketing campaigns and help develop programs that Japanese students will enjoy and benefit from while studying in Australia.`,
    q2: `If you come to Manly in winter, you might even be lucky enough to spot whales from our campus terrace. It's one of those unforgettable experiences that makes studying here so special, so don't forget to take a break and enjoy the view.`,
    q3: `I've lived in Brisbane for many years, but I never get tired of it. It's such a beautiful, well-designed city, and I love how the river, parks and modern buildings all come together. My favourite view is the Brisbane skyline from South Bank at night — absolutely stunning, and I still stop to admire it every time I visit.`
  },
  {
    slug: "mike-carlisle", name: "Mike Carlisle", role: "Direct Marketing",
    campus: "Head Office", dept: "Marketing", campusLabel: "Brisbane", languages: "English", hometown: "Manchester, UK", since: "2018", photo: "mike-carlisle.jpg",
    bio: `Manchester-born Mike has spent nearly 20 years in English language education across the UK, Ireland, New Zealand and Australia — from summer camps to universities — before making the move Down Under in 2018. At Lexis, he helps students find the right course and campus to get the most out of their time in Australia. Traded Manchester rain for Brisbane sunshine; kept the Oasis records.`,
    q1: `I made the same move our students make — left Manchester for Australia in 2018 — so I know exactly what the big questions feel like. Now I help students answer them: which course, which campus, city or beach town, so the Australia they get matches the Australia they imagined.`,
    q2: `There's no wrong Lexis campus, just different flavours — big-city energy in Sydney and Brisbane, or beach towns where your teacher surfs before class. Pick the Australia you want to live in.`,
    q3: `The weather — after growing up in the UK, I don't think I'll ever take it for granted. And you're on the doorstep of some of the most iconic nature spots in the world. Islands, rainforest, the reef up the coast — all weekend-trip distance.`
  },
  {
    slug: "nami-lee", name: "Nami Lee", role: "Graphic Designer",
    campus: "Head Office", dept: "Marketing", campusLabel: "Brisbane", languages: "English, Korean", hometown: "Seoul, South Korea", since: "2015", photo: "nami-lee.jpg",
    bio: `Born in Seoul, Nami fell in love with Australia on a working holiday in 2015 and never left. As Lexis' graphic designer, she creates all the visual materials that help students navigate their journey.`,
    q1: `I handle everything design — from the Instagram videos you watch to the brochure you're reading right now! My job is to make everything at Lexis look beautiful and truly 'Lexi-fied', making it easier and more exciting for you to find us.`,
    q2: `Pack an open mind and a sense of adventure! Whichever Lexis campus you choose, you're going to absolutely fall in love with the Australian lifestyle from day one.`,
    q3: `Brisbane's perfect winter weather means it never gets too cold. Plus there are heaps of beautiful parks and lush greenery everywhere you go.`
  },
  {
    slug: "priscila-campos", name: "Priscila Campos", role: "Marketing Manager, Latin America",
    campus: "Head Office", dept: "Marketing", campusLabel: "Offshore · Brazil",
    languages: "English, Portuguese, Spanish", hometown: "São Paulo, Brazil", photo: "priscila-campos.jpg",
    bio: `I've been part of the Lexis team for almost five years, but my Lexis story actually started as a student, studying Cambridge English in Noosa. Today I support our Latin American agents with the tools and resources they need to help students choose Lexis. Noosa will always have a special place in my heart, and when I'm not working you'll usually find me enjoying Pilates and exploring new cafés.`,
    q1: `I'm the Business Development and Marketing Manager for Latin America. I work with our amazing agent partners across the region, supporting them with marketing, training, events, translations, and the tools they need to confidently introduce students to Lexis. Knowing that my work helps more Latin American students discover the opportunity to study, grow and experience life in Australia is what makes my role so rewarding.`,
    q2: `Be open to saying "yes" to new experiences. Join activities, talk to people from different countries, and don't be afraid to make mistakes when speaking English. The more you get involved, the more you'll grow — both in your English and in yourself.`,
    q3: `I've been lucky enough to visit every Lexis campus, and what I love most is that each one offers a completely different experience. Noosa will always be special because it's where my journey began, but from beach towns to vibrant cities, every campus has its own unique vibe. If you can study at more than one campus, it's the best way to experience Australia.`
  },
  {
    slug: "olga-kuperman", name: "Olga Kuperman", role: "Student Services & Homestay",
    campus: "Noosa", languages: "", hometown: "Tula, Russia", since: "August 2017", photo: null,
    bio: `Living in five countries has shaped who I am and given me a deep appreciation for cultural exchange and new experiences. With an international career and a passion for building connections, I joined Lexis Noosa in 2026 and enjoy helping students feel at home by connecting them with the local community and helping them find their place in Noosa.`,
    q1: `I help shape the student experience beyond the classroom by connecting international students with welcoming host families. Through local community connections, students can immerse themselves in Australian culture and experience the unique Noosa coastal lifestyle.`,
    q2: `My Noosa tip: bring your swimmers, even in winter! A morning ocean swim or a walk along the beach before class is the perfect way to start the day. And if mornings aren't your thing, an after-class beach escape is the ideal way to unwind and experience the Noosa lifestyle like a local.`,
    q3: `A hidden beach in Noosa National Park that's only accessible at low tide — one of those local secrets that makes living here so special.`
  },
  {
    slug: "robert-dillewaard", name: "Robert Dillewaard", role: "Campus Manager",
    campus: "Noosa", languages: "English, some Dutch (and Aussie slang)", hometown: "Noosa, Australia", since: "Since birth", photo: "robert-dillewaard.jpg",
    bio: `I've been part of the Lexis team for seven years, beginning as a teacher and now serving as Campus Manager. Together with my amazing team in Noosa, I help ensure our students have a positive and rewarding experience from the day they arrive until the day they graduate. When I'm not at work, you'll usually find me on the golf course, camping outdoors, or enjoying time with my family.`,
    q1: `I keep the campus running smoothly, ensuring our teachers are well prepared, our students are thriving, and all the moving parts stay on track. If something needs attention, I'm usually involved — whether it's a student question, a staffing issue, or a printer that has decided it no longer believes in teamwork.`,
    q2: `When students come to Noosa, they can expect more than just great English classes. They'll join a supportive and welcoming community where staff and teachers genuinely care about their success and wellbeing. With beautiful beaches, a relaxed atmosphere and students from all over the world, Noosa is the perfect place to improve your English, make lifelong friendships and create unforgettable memories.`,
    q3: `It's hard to pick just a few favourite parts of Noosa! I love the beaches, the National Park, and the fact that you can finish work and be on a walking trail or golf course within minutes. And if I'm not there, you'll probably find me camping somewhere nearby and pretending I don't have emails to check.`
  },
  {
    slug: "vanesa-vachova", name: "Vanesa Vachova", role: "Student Services & Activities Officer",
    campus: "Noosa", languages: "Czech, English", hometown: "Prague, Czechia", since: "2026", photo: "vanesa-vachova.jpg",
    bio: `Vanesa is from the Czech Republic and first came to Lexis as a student. After working at a language school in Malta, she returned to Australia in 2026 and started working at Lexis Noosa. Now she supports students throughout their time at the Noosa campus and organises activities to help them make the most of their experience.`,
    q1: `I'm here to support the students at the Noosa campus and help them throughout their time at Lexis. My role includes welcoming new students, helping with administration in the office, and organising activities where I get to spend time with students outside the classroom.`,
    q2: `Noosa is a small beach town, so it feels very different from a big city — but that's also what makes it special. It has a beautiful national park with amazing coastal walks and great surfing, so be prepared to spend a lot of time outdoors enjoying the beaches and nature.`,
    q3: `My favourite way to spend a day is surfing at Little Cove or walking through the national park to Hell's Gates. I also love exploring the endless beaches along the Sunshine Coast, driving down to Coolum and hiking Mount Coolum.`
  },
  {
    slug: "lindsey-new", name: "Lindsey New", role: "Operations Manager, Western Australia",
    campus: "Perth", languages: "English", hometown: "England", since: "1994", photo: "lindsey-new.jpg",
    bio: `Hi, my name is Lindsey, and welcome to Lexis Perth! I was born in England and moved to Singapore when I was two years old before settling in Perth in 1994. I love working in English language education because every day I have the opportunity to meet and connect with people from all over the world. I began my career as an English teacher, spending six years in the classroom before moving into administration, and I now have the privilege of serving as Operations Manager at Lexis Perth. One thing that may surprise you: I used to be a circus instructor and perform on the flying trapeze!`,
    q1: `I'm the Operations Manager in Perth and I look after everything at the school, from the building to the teachers and our wonderful students.`,
    q2: `Lexis Perth is located minutes from Kings Park, one of the world's largest inner-city parks. Just a short distance from campus, it offers spectacular views of the Perth skyline and the Swan River.`,
    q3: `My favourite thing about Perth is its lifestyle. We have beautiful beaches, plenty of sunshine and so many amazing outdoor spaces to enjoy all year round. I also love how relaxed and welcoming the city is — it has everything you need without feeling too busy. Whether it's the beach, Kings Park or a coffee by the river, there's always something to do. A fantastic place to live and an even better place for international students to experience Australian life.`
  },
  {
    slug: "lydia-liu", name: "Lydia Liu", role: "Student Services Supervisor",
    campus: "Perth", languages: "English, Chinese", hometown: "China", since: "2000", photo: "lydia-liu.jpg",
    bio: `I've been at Lexis for almost 10 years, helping students with enrolments, course changes, payments and general support during their time at school. What I love most about the Perth campus is the friendly atmosphere and the chance to meet students from so many different countries. In my free time I enjoy watching movies and hiking, and one of my favourite local spots in Perth is Kings Park.`,
    q1: `If you have questions about your course, timetable, attendance, payments, letters, holidays or general school life, I'm one of the people who can help. I also support students when they need information or aren't sure what to do — my job is to make things easier and help you enjoy your time at Lexis.`,
    q2: `Everyone at Lexis is very friendly and ready to help. My tip is to ask questions whenever you're unsure about something, whether it's your class, transport, accommodation or life in Perth. Students often make friends very quickly here, so even if you feel nervous on your first day, you'll usually settle in faster than you expect.`,
    q3: `One of my favourite things about Perth is going to the beach and watching the ocean waves and the sky.`
  },
  {
    slug: "maiko", name: "Maiko", role: "Student Services",
    campus: "Perth", languages: "Japanese, English", hometown: "Tokyo, Japan", since: "2010", photo: "maiko.jpg",
    bio: `I'm part of the Student Services team at Lexis, and I joined in 2022. I've always wanted to help students from all over the world feel happy, supported and welcome while studying in Australia. I'm here to make your student life easier by answering your questions, helping you settle in, and encouraging you to enjoy new experiences during your time at Lexis. A little about me: I enjoy trying new recipes and cooking dishes from different countries, and I love watching sport — especially soccer — with my family.`,
    q1: `I support students throughout their journey at Lexis, from arrival to graduation, by helping with administration, daily operations, activities and payments. Most importantly, I make sure students feel welcomed, supported and comfortable by being someone they can rely on.`,
    q2: `Honestly, there's nothing you need to know — you'll be fine! Just get excited, have fun and make the most of it. The people who enjoy it the most win!`,
    q3: `My favourite thing about Perth is definitely the people. They're so friendly and easy to talk to. Whether you're at a bus stop, traffic lights or in a queue, people often start a chat even if you've never met before. It makes Perth feel welcoming and gives you a real sense of belonging.`
  },
  {
    slug: "morena-sacchetti", name: "Morena Sacchetti", role: "Accommodation Coordinator & Student Services",
    campus: "Perth", languages: "English, Italian", hometown: "Italy", since: "2015", photo: "morena-sacchetti.jpg",
    bio: `From Lexis student to Lexis team member — Morena's journey has come full circle! After first joining us in 2017, she returned as an English teacher in 2019 and now supports students through Homestay and Student Services. She loves sharing tips, helping students settle into Perth and making their experience memorable. Originally from Italy, she enjoys discovering great food, new cafés, family adventures and exploring everything Perth has to offer with her husband and son.`,
    q1: `I'm here to help students settle in and enjoy their Lexis journey! From finding the right accommodation to sharing Perth tips, I love supporting students every step of the way. Having been an international student myself, I know the excitement of starting a new adventure!`,
    q2: `Perth is an incredible city! With beautiful parks, stunning beaches and hidden gems waiting to be discovered, there's so much to explore beyond the classroom. Come ready to embrace a new continent, a new culture and a new state of mind — it's an experience you'll remember for life!`,
    q3: `The easy-going lifestyle. Perth has a relaxed and authentic feel where everyone can find their own pace. Whether you love beaches, nature, cafés or quiet moments, there's always a place to enjoy what makes you happy.`
  },
  {
    slug: "fabiana-oppini", name: "Fabiana Oppini", role: "Registrar",
    campus: "Head Office", dept: "Registrations", campusLabel: "Sunshine Coast", languages: "English, Italian, French", hometown: "Milan, Italy", since: "2014", photo: "fabiana-oppini.jpg",
    bio: `Although I've only been part of the Lexis Maroochydore tribe for the past couple of months, I've worked in student services for several years, supporting students with enrolments and answering their questions before they begin their journey. Outside of work, you'll usually find me at the beach, on a bushwalk with my dog, playing tennis, or simply lost in a good book.`,
    q1: `I help students through the enrolment process, making sure everything is ready before they start their course at Lexis. I'm here to answer questions, guide them through the paperwork, and make the process as smooth and stress-free as possible.`,
    q2: `Be warned… once you arrive in Maroochydore, you might not want to leave! With plenty of beautiful beaches, a relaxed lifestyle and friendly people, it's easy to fall in love with the Sunshine Coast. Very important… don't forget your sunscreen!`,
    q3: `After growing up in Italy and England, it was the Sunshine Coast lifestyle that stole my heart. Maroochydore has the perfect mix of beautiful beaches, great weather and a relaxed lifestyle.`
  },
  {
    slug: "marli-rocker", name: "Marli Rocker", role: "Registrations Supervisor",
    campus: "Head Office", dept: "Registrations", campusLabel: "Sunshine Coast", languages: "English", hometown: "Sunshine Coast, QLD", since: "Since birth", photo: "marli-rocker.jpg",
    bio: `Marli has grown up on the Sunshine Coast and is in her second tenure with Lexis, lasting over 10 years. With a background in marketing and administration, Marli oversees the Registrations Team and assists students with finalising their enrolments and studies abroad.`,
    q1: `The Registrations Team process enrolments and become a vital part of making students' travel dreams become a reality.`,
    q2: `Lexis has a campus location to suit everyone's needs, giving students the opportunity to enjoy more than one location to maximise their experience in Australia. Combine a beach stay with a city stay, and get the most from your time abroad.`,
    q3: `The Sunshine Coast has something to offer everyone. You can enjoy the relaxed pace of a smaller city with easy access to pristine beaches and hinterland. Visit nearby Brisbane to explore city life on the weekends!`
  },
  {
    slug: "mika-wilson", name: "Mika Wilson", role: "Registrar",
    campus: "Head Office", dept: "Registrations", campusLabel: "Sunshine Coast", languages: "Japanese, English", hometown: "Tokyo, Japan", since: "2023", photo: "mika-wilson.jpg",
    bio: `Mika joined Lexis in 2026 as a Registrar, supporting students throughout their enrolment journey. Originally from Tokyo, she moved to New Zealand in 2015 and worked as an education agent helping international students settle into local schools. She moved to Australia in 2023 and enjoys gardening and beach time.`,
    q1: `As a Registrar, I help students get ready for their studies at Lexis. I process enrolments, make sure students are enrolled in the right course, and provide all the important documents they need before they arrive. My goal is to make the enrolment process as smooth and stress-free as possible so students can start their studies with confidence.`,
    q2: `The Sunshine Coast has a relaxed lifestyle, so it's a good idea to plan your accommodation and transport in advance. Once you're here, you'll find that people are very friendly and happy to help, making it easy to settle into your new life and studies.`,
    q3: `The Sunshine Coast is a very welcoming and relaxed place to live and study. It's a great balance — not too busy, but never too quiet. One of the best things about our campus is its amazing location, with the beach right behind it. Whether you enjoy surfing, swimming or simply relaxing by the ocean, I'm sure you'll love studying in such a beautiful coastal environment.`
  },
  {
    slug: "alana-berghofer", name: "Alana Berghofer", role: "Activities & Student Services Officer",
    campus: "Sunshine Coast", languages: "English", hometown: "Sunshine Coast, Australia", since: "Since the start", photo: "alana-berghofer.jpg",
    bio: `Alana has lived as a Sunny Coast local, an exchange student in Verona, Italy, and most recently departed Seoul, South Korea, as an English teacher. She has the unique experience of having navigated being a student and working in foreign countries. Now she works on the sidelines, aiding students in their experience at Lexis English Sunshine Coast. Even after living in and travelling around over 20 countries, there's a reason the Sunshine Coast is the place she comes home to.`,
    q1: `I understand what it's like to move to different countries and deal with situations you've never even imagined! I'm here in the good and the bad to be of help to you. I also organise activities for students to meet people and have fun — groups as big as 25 or as small as one. Happy for anyone to join. No question is too strange or out there — ask and I'll help!`,
    q2: `Say yes. In my experience, saying yes gets you where you want to be. You can always leave early or say no next time, but take that first step. You need to take action to have a good time. Don't wait for something fun to happen — go create the life you want to have.`,
    q3: `The ocean, the nature and the sunsets. My favourite thing to do is borrow a book from the library, go to the beach, read and lie in the sun. Vitamin D, ocean wind and fresh fruit are good for the soul, and all three are in abundance at our campus. Think relaxed coastal town with the added benefits of city facilities close by.`
  },
  {
    slug: "mark-townsend", name: "Mark Townsend", role: "Academic Manager",
    campus: "Sunshine Coast", languages: "English", hometown: "Kingsbridge, England", since: "1996", photo: "mark-townsend.jpg",
    bio: `Mark has been at Lexis for five years, first as a teacher and then as Academic/Campus Manager for the last three. He helps students choose the best courses to achieve their goals and is always available for a chat. He loves the view of the river and ocean from the student lounge at Lexis, especially when the humpback whales are migrating. Weekends often see Mark dressed in lycra and riding his road bike around the beautiful Sunshine Coast.`,
    q1: `Mark organises the timetable for teachers and students, meets with students when they first arrive to decide which class they'll be in, and keeps everything running as smoothly as possible. He's also there to help at any time and to support students to get the most out of their time at Lexis Sunshine Coast.`,
    q2: `Lexis Sunshine Coast is in the perfect location — close to amazing beaches, the biggest shopping mall on the Sunshine Coast, parks and barbecues by the river, plus rainforest and waterfalls just a short drive away.`,
    q3: `Walking on the beach in the evening with our family dachshund (sausage dog), watching the sky and sea change colours, and hearing the sand squeaking under my feet. The beach, the sea and the sky are different every day, but stunning every day. Seeing the moon rise over the horizon or baby turtles heading to the sea are just a bonus!`
  },
  {
    slug: "lucinda-seefeld", name: "Lucinda Seefeld", role: "Accommodation Co-ordinator",
    campus: "Sunshine Coast", photo: null,
    bio: ``,
    q1: ``, q2: ``, q3: ``
  },
  {
    slug: "melina-treichel", name: "Melina Treichel", role: "Accommodation Co-ordinator",
    campus: "Sydney", photo: null,
    bio: ``,
    q1: ``, q2: ``, q3: ``
  },
  {
    slug: "issi-daniels", name: "Issi Daniels", role: "Student Services & Activity Coordinator",
    campus: "Sydney", languages: "English", hometown: "Manly, Sydney", since: "Since birth", photo: "issi-daniels.jpg",
    bio: `Hi! I'm Issi, and I've been working at Lexis Sydney–Manly for over three years. I love helping students settle into life in Australia by organising exciting activities and making sure everyone feels welcome, supported and has the best possible experience at Lexis. Our campus is only a few steps from Manly Beach, so we get to enjoy incredible ocean views every day — which never gets old! When I'm not at work, I love spending time at the beach, having picnics with friends, and going to concerts and music festivals.`,
    q1: `My role at Lexis is to make your experience as fun and memorable as possible! I organise all of our activities and events, help you settle into life in Sydney, and am always here to answer any questions you have. As a Sydney local, I love sharing my favourite hidden gems, must-visit spots and local tips so you can experience the very best of Sydney!`,
    q2: `My tip would be to say yes to as many activities as you can — it's the perfect opportunity to make new friends and discover amazing places around Sydney and the Northern Beaches. Remember that everyone is new when they arrive, so don't be afraid to put yourself out there!`,
    q3: `Sydney really does offer the best of both worlds; you can experience the city vibes while never being far from the beach. It's hard to choose just one favourite spot, but I'd have to say North Head Lookout in Manly for its incredible sunsets, and Curl Curl Beach as my favourite swimming spot!`
  },
  {
    slug: "pricila-van-ahn", name: "Pricila Van Ahn", role: "Academic Manager",
    campus: "Sydney", languages: "English, Portuguese, Spanish", hometown: "Porto Alegre, Brazil", since: "2013", photo: "pricila-van-ahn.jpg",
    bio: `I grew up in Brazil but left in 2000 to complete my tertiary education in Linguistics and Second Language Teaching in New Zealand, where I lived for 10 years. I've taught English as a second language in South Korea, Brazil, Canada, New Zealand and Australia. More recently, I've been an Academic Manager at Lexis for four years. Besides engaging with international students, I love cinema, politics, sports, travelling and going to rock concerts.`,
    q1: `I help students get placed at the right level, track their progress so they're on pace to complete their course, and step in quickly if a student is struggling or has a concern. I make sure the classroom experience is consistent and supportive, so students improve their English skills and enjoy their time studying.`,
    q2: `Lexis Manly is right in front of the beach but also very near the city (a 20-minute ferry ride). You can have a bit of both worlds — the beach and the city life! We're a small campus and praise our sense of community and belonging.`,
    q3: `The location! We can go surfing after classes and work. We can also use our beautiful surroundings for BBQs, walks and picnics, always focusing on using English as we enjoy the outdoors. My favourite spot is North Curl Curl, near the rocks — it has the best rock pool!`
  },
  {
    slug: "valerie-garcia", name: "Valerie Garcia", role: "Student Services Officer",
    campus: "Sydney", languages: "English, French", hometown: "Paris, France", since: "2013", photo: "valerie-garcia.jpg",
    bio: `Bonjour! I'm French and have worked in language education across France, the UK and Australia. I've been part of the Lexis family for five years, helping students feel welcome and supported. What I love most about the Sydney campus is its cultural diversity and seeing students grow in confidence. My happy place? Coffee, good company, sunshine… preferably after a Pilates class!`,
    q1: `I'm one of the friendly faces you'll see at reception! I help students with everything from enrolments to everyday questions, making sure their Lexis journey is as easy and enjoyable as possible.`,
    q2: `Come with an open mind, don't be afraid to speak English (mistakes are part of learning!), and get ready to meet people from all over the world. Bring your curiosity and a smile!`,
    q3: `Coming from France, I love how Sydney combines city life with nature. You can finish work and be at the beach in minutes — something that's hard to beat!`
  }
];
