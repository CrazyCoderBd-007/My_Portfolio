document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const langBnBtn = document.getElementById('lang-bn');
    const langEnBtn = document.getElementById('lang-en');

    // --- থিম চেঞ্জিং লজিক ---
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // --- ল্যাঙ্গুয়েজ চেঞ্জিং লজিক ---
    const translations = {
        bn: {
            // পুরাতন কী
            portfolio_title: "আমার পোর্টফোলিও",
            my_name: "[আপনার নাম]",
            my_profession: "[আপনার পেশা]",
            footer_text: `© ${new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত। [আপনার নাম]`,
            
            // নতুন কী
            nav_skills: "দক্ষতা",
            nav_projects: "প্রকল্প",
            nav_contact: "যোগাযোগ",
            download_resume: "সিভি ডাউনলোড",
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
            form_submit_button: "বার্তা পাঠান"
        },
        en: {
            // পুরাতন কী
            portfolio_title: "My Portfolio",
            my_name: "[Your Name]",
            my_profession: "[Your Profession]",
            footer_text: `© ${new Date().getFullYear()} All rights reserved. [Your Name]`,

            // নতুন কী
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            download_resume: "Download Resume",
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
            form_submit_button: "Send Message"
        }
    };

    const changeLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            // Placeholder এর জন্য আলাদাভাবে চেক করা
            if (element.placeholder && translations[lang][key]) {
                 element.placeholder = translations[lang][key];
            } else if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        lang === 'bn' ? (langBnBtn.classList.add('active'), langEnBtn.classList.remove('active')) 
                      : (langEnBtn.classList.add('active'), langBnBtn.classList.remove('active'));
    };

    langBnBtn.addEventListener('click', () => changeLanguage('bn'));
    langEnBtn.addEventListener('click', () => changeLanguage('en'));

    // পেজ লোড হলে ডিফল্ট ভাষা ও অ্যানিমেশন চালু করা
    changeLanguage('bn');
    AOS.init({
        duration: 800, // অ্যানিমেশনের সময়কাল
        once: true, // অ্যানিমেশন শুধু একবার হবে
    });
});
