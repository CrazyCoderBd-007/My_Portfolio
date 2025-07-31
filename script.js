document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const langBnBtn = document.getElementById('lang-bn');
    const langEnBtn = document.getElementById('lang-en');
    let typedInstance = null; // Typed.js এর ইনস্ট্যান্স ধরে রাখার জন্য, যাতে ভাষা পরিবর্তনের সময় এটিকে রিসেট করা যায়।

    // --- অনুবাদগুলো এখানে থাকবে (আপনার নিজের তথ্য দিয়ে এই অংশটি পরিবর্তন করুন) ---
    const translations = {
        bn: {
            portfolio_title: "আমার পোর্টফোলিও",
            nav_skills: "দক্ষতা",
            nav_projects: "প্রকল্প",
            nav_contact: "যোগাযোগ",
            home_intro: "হ্যালো, আমি",
            my_name: "[এখানে আপনার নাম লিখুন]",
            im_a: "আমি একজন",
            typing_strings: ["ওয়েব ডেভেলপার", "ফ্রিল্যান্সার", "কনটেন্ট ক্রিয়েটর"], // আপনার দক্ষতা এখানে যোগ করুন
            download_resume: "সিভি ডাউনলোড",
            contact_me: "যোগাযোগ করুন",
            skills_title: "আমার দক্ষতা",
            skill_html: "এইচটিএমএল৫",
            skill_css: "সিএসএস৩",
            skill_js: "জাভাস্ক্রিপ্ট",
            skill_react: "রিঅ্যাক্ট",
            projects_title: "আমার প্রকল্পসমূহ",
            project1_title: "প্রকল্পের নাম ১",
            project1_desc: "এই প্রকল্পটি কী সম্পর্কিত এবং কোন প্রযুক্তি ব্যবহার করা হয়েছে তার একটি সংক্ষিপ্ত বিবরণ।",
            project2_title: "প্রকল্পের নাম ২",
            project2_desc: "এই প্রকল্পটি কী সম্পর্কিত এবং কোন প্রযুক্তি ব্যবহার করা হয়েছে তার একটি সংক্ষিপ্ত বিবরণ।",
            project_live_demo: "লাইভ ডেমো",
            project_github_code: "গিটহাব কোড",
            contact_title: "যোগাযোগ",
            contact_intro: "যেকোনো প্রশ্ন বা কাজের জন্য আমার সাথে যোগাযোগ করুন।",
            form_name_placeholder: "আপনার নাম",
            form_email_placeholder: "আপনার ইমেইল",
            form_message_placeholder: "আপনার বার্তা",
            form_submit_button: "বার্তা পাঠান",
            footer_text: `© ${new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত। [আপনার নাম]`
        },
        en: {
            portfolio_title: "My Portfolio",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            home_intro: "Hello, I'm",
            my_name: "[Enter Your Name Here]",
            im_a: "I'm a",
            typing_strings: ["Web Developer", "Freelancer", "Content Creator"], // Add your skills here
            download_resume: "Download Resume",
            contact_me: "Contact Me",
            skills_title: "My Skills",
            skill_html: "HTML5",
            skill_css: "CSS3",
            skill_js: "JavaScript",
            skill_react: "React",
            projects_title: "My Projects",
            project1_title: "Project Name 1",
            project1_desc: "A brief description of what this project is about and what technologies were used.",
            project2_title: "Project Name 2",
            project2_desc: "A brief description of what this project is about and what technologies were used.",
            project_live_demo: "Live Demo",
            project_github_code: "GitHub Code",
            contact_title: "Contact Me",
            contact_intro: "Feel free to reach out for any questions or collaborations.",
            form_name_placeholder: "Your Name",
            form_email_placeholder: "Your Email",
            form_message_placeholder: "Your Message",
            form_submit_button: "Send Message",
            footer_text: `© ${new Date().getFullYear()} All rights reserved. [Your Name]`
        }
    };
    
    // ফাংশন: থিম প্রয়োগ করা এবং localStorage এ সেভ করা
    const applyTheme = (theme) => {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.body.classList.remove('dark-theme');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    };

    // ইভেন্ট লিসেনার: থিম বাটনে ক্লিক করলে থিম পরিবর্তন এবং সেভ হবে
    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // ফাংশন: ভাষা পরিবর্তন করা এবং localStorage এ সেভ করা
    const changeLanguage = (lang) => {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        
        // সমস্ত টেক্সট পরিবর্তন করা
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (element.placeholder && translations[lang][key]) {
                 element.placeholder = translations[lang][key];
            } else if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // বাটন সক্রিয় করা
        if (lang === 'bn') {
            langBnBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langBnBtn.classList.remove('active');
        }

        // টাইপিং অ্যানিমেশন নতুন করে চালু করা
        if (typedInstance) {
            typedInstance.destroy(); // পুরোনো ইনস্ট্যান্স ধ্বংস করা
        }
        typedInstance = new Typed('#typed-text', {
            strings: translations[lang].typing_strings,
            typeSpeed: 70,
            backSpeed: 40,
            loop: true,
            smartBackspace: true,
        });
    };

    // ইভেন্ট লিসেনার: ভাষা বাটনে ক্লিক করলে ভাষা পরিবর্তন হবে
    langBnBtn.addEventListener('click', () => changeLanguage('bn'));
    langEnBtn.addEventListener('click', () => changeLanguage('en'));
    
    // ফাংশন: ওয়েবসাইট লোড হওয়ার সময় সমস্ত সেটিংস চালু করা
    const initializeWebsite = () => {
        // ১. সেভ করা থিম লোড করা (ডিফল্ট: light)
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);

        // ২. সেভ করা ভাষা লোড করা (ডিফল্ট: bn)
        const savedLang = localStorage.getItem('language') || 'bn';
        changeLanguage(savedLang);

        // ৩. স্ক্রল অ্যানিমেশন (AOS) চালু করা
        AOS.init({
            duration: 800, // অ্যানিমেশনের সময়কাল
            once: true,    // অ্যানিমেশন শুধু একবার হবে
        });
    };

    // ওয়েবসাইট চালু করার জন্য ফাংশনটি কল করা
    initializeWebsite();
});```
