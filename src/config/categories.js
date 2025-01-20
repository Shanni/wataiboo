export const MAIN_CATEGORIES = {
    AI_TOOLS: 'AI & Automation',
    PRODUCTIVITY: 'Productivity & Business',
    DEVELOPER: 'Developer & Tech',
    CONTENT: 'Content & Design',
    EDUCATION: 'Education & Learning'
};

// Mapping of Product Hunt topics to our main categories
export const TOPIC_TO_CATEGORY_MAP = {
    // AI & Automation
    'Artificial Intelligence': MAIN_CATEGORIES.AI_TOOLS,
    'Machine Learning': MAIN_CATEGORIES.AI_TOOLS,
    'ChatGPT': MAIN_CATEGORIES.AI_TOOLS,
    'AI': MAIN_CATEGORIES.AI_TOOLS,
    'Bots': MAIN_CATEGORIES.AI_TOOLS,
    'Data & Analytics': MAIN_CATEGORIES.AI_TOOLS,

    // Productivity & Business
    'Productivity': MAIN_CATEGORIES.PRODUCTIVITY,
    'SaaS': MAIN_CATEGORIES.PRODUCTIVITY,
    'E-Commerce': MAIN_CATEGORIES.PRODUCTIVITY,
    'Shopping': MAIN_CATEGORIES.PRODUCTIVITY,
    'Marketing': MAIN_CATEGORIES.PRODUCTIVITY,
    'SEO': MAIN_CATEGORIES.PRODUCTIVITY,
    'Fintech': MAIN_CATEGORIES.PRODUCTIVITY,
    'Investing': MAIN_CATEGORIES.PRODUCTIVITY,
    'Career': MAIN_CATEGORIES.PRODUCTIVITY,
    'Business': MAIN_CATEGORIES.PRODUCTIVITY,
    'Storage': MAIN_CATEGORIES.PRODUCTIVITY,

    // Developer & Tech
    'Developer Tools': MAIN_CATEGORIES.DEVELOPER,
    'Tech': MAIN_CATEGORIES.DEVELOPER,
    'GitHub': MAIN_CATEGORIES.DEVELOPER,
    'API': MAIN_CATEGORIES.DEVELOPER,
    'Code Generation': MAIN_CATEGORIES.DEVELOPER,
    'Programming': MAIN_CATEGORIES.DEVELOPER,
    'User Experience': MAIN_CATEGORIES.DEVELOPER,

    // Content & Design
    'Content Creation': MAIN_CATEGORIES.CONTENT,
    'Design Tools': MAIN_CATEGORIES.CONTENT,
    'Video': MAIN_CATEGORIES.CONTENT,
    'Photography': MAIN_CATEGORIES.CONTENT,
    'Social Media': MAIN_CATEGORIES.CONTENT,
    'iOS': MAIN_CATEGORIES.CONTENT,

    // Education & Learning
    'Education': MAIN_CATEGORIES.EDUCATION,
    'Online Learning': MAIN_CATEGORIES.EDUCATION,
    'Health': MAIN_CATEGORIES.EDUCATION,
    'Health & Fitness': MAIN_CATEGORIES.EDUCATION
};

// Category descriptions for UI tooltips or info
export const CATEGORY_DESCRIPTIONS = {
    [MAIN_CATEGORIES.AI_TOOLS]: 'AI-powered tools, bots, and data analytics solutions',
    [MAIN_CATEGORIES.PRODUCTIVITY]: 'Business tools, productivity apps, and financial solutions',
    [MAIN_CATEGORIES.DEVELOPER]: 'Development tools, technical solutions, and programming resources',
    [MAIN_CATEGORIES.CONTENT]: 'Design, media creation, and content management tools',
    [MAIN_CATEGORIES.EDUCATION]: 'Learning platforms, educational resources, and health information'
};

// Category icons (you can use these with react-icons)
export const CATEGORY_ICONS = {
    [MAIN_CATEGORIES.AI_TOOLS]: 'FaRobot',
    [MAIN_CATEGORIES.PRODUCTIVITY]: 'FaBriefcase',
    [MAIN_CATEGORIES.DEVELOPER]: 'FaCode',
    [MAIN_CATEGORIES.CONTENT]: 'FaPalette',
    [MAIN_CATEGORIES.EDUCATION]: 'FaGraduationCap'
}; 