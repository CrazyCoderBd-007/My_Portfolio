document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const langBnBtn = document.getElementById('lang-bn');
    const langEnBtn = document.getElementById('lang-en');

    // --- থিম চেঞ্জিং লজিক ---
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        // আইকন পরিবর্তন
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    // --- ল্যাঙ্গুয়েজ চেঞ্জিং লজিক ---
    const translations = {
        bn: {
            portfolio_title: "আমার পোর্টফোলিও",
            nav_info: "তথ্য",
            nav_address: "ঠিকানা",
            nav_contact: "যোগাযোগ",
            my_name: "[এখানে আপনার নাম লিখুন]",
            my_profession: "[এখানে আপনার পেশা লিখুন]",
            info_title: "আমার তথ্য",
            info_name_label: "নাম",
            info_name_value: "[আপনার পুরো নাম]",
            info_religion_label: "ধর্ম",
            info_religion_value: "[আপনার ধর্ম]",
            info_age_label: "বয়স",
            info_age_value: "[আপনার বয়স]",
            address_title: "আমার ঠিকানা",
            address_details_1: "[আপনার সম্পূর্ণ ঠিকানা এখানে লিখুন]",
            address_details_2: "[গ্রাম/শহর, জেলা, দেশ]",
            contact_title: "যোগাযোগ",
            contact_intro: "আমার সাথে যোগাযোগ করতে নিচের মাধ্যমগুলো ব্যবহার করতে পারেন।",
            footer_text: `© ${new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত। [আপনার নাম]`
        },
        en: {
            portfolio_title: "My Portfolio",
            nav_info: "Information",
            nav_address: "Address",
            nav_contact: "Contact",
            my_name: "[Enter your name here]",
            my_profession: "[Enter your profession here]",
            info_title: "My Information",
            info_name_label: "Name",
            info_name_value: "[Your full name]",
            info_religion_label: "Religion",
            info_religion_value: "[Your religion]",
            info_age_label: "Age",
            info_age_value: "[Your age]",
            address_title: "My Address",
            address_details_1: "[Enter your full address here]",
            address_details_2: "[Village/City, District, Country]",
            contact_title: "Contact",
            contact_intro: "You can use the following platforms to contact me.",
            footer_text: `© ${new Date().getFullYear()} All rights reserved. [Your Name]`
        }
    };

    const changeLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // বাটন সক্রিয় করা
        if(lang === 'bn') {
            langBnBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langBnBtn.classList.remove('active');
        }
    };

    langBnBtn.addEventListener('click', () => changeLanguage('bn'));
    langEnBtn.addEventListener('click', () => changeLanguage('en'));

    // পেজ লোড হওয়ার সাথে সাথে ডিফল্ট ভাষা সেট করা
    changeLanguage('bn');
});
