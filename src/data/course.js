// Hero copy and the 14 chapter outlines, per language.
// Chapter `id`s are shared across languages so navigation survives a switch.

const HERO = {
  uk: {
    badge: 'Онлайн-курс · інтерактивні квізи',
    title: 'AI for Product Designers',
    subtitle:
      'Програма для продуктових дизайнерів, UX-дослідників та аналітиків. Практичні розділи та інтерактивні квізи проведуть вас через повний продуктовий флоу — від AI-ресерчу до готового кейсу для портфоліо.',
  },
  en: {
    badge: 'Online course · interactive quizzes',
    title: 'AI for Product Designers',
    subtitle:
      'A program for product designers, UX researchers and analysts. Hands-on chapters and interactive quizzes guide you through the full product flow — from AI research to a finished portfolio case.',
  },
}

const BLOCKS = {
  uk: [
    { id: 'block-1', title: 'Знайомство + вступ до AI в дизайні', topics: ['Що таке AI: ключові концепції та термінологія', 'Переваги використання AI в роботі дизайнера', 'Екосистема інструментів AI', 'Основи prompt engineering', 'Просунуті техніки промптингу'] },
    { id: 'block-2', title: 'AI-інструменти для маркетингових досліджень', topics: ['Новий підхід до рісьорчу з AI', 'Джерела даних та пошукові AI-платформи', 'Аналіз конкурентів за допомогою AI', 'Виявлення трендів, аналіз сигналів та побудова гіпотез'] },
    { id: 'block-3', title: 'Робота з даними та аналітика', topics: ['Дизайнер як data communicator', 'Структурування неструктурованих даних', 'AI-візуалізація: діаграми, класифікації, word cloud', 'Аналіз конкурентів через AI'] },
    { id: 'block-4', title: 'AI для розуміння користувачів', topics: ['Аналітика інтерв’ю', 'Створення та використання AI-персон', 'Проведення інтерв’ю з AI-згенерованими персонами', 'Гіпотезування через AI-моделювання', 'Формулювання продуктової проблеми'] },
    { id: 'block-5', title: 'Створення рішень для MVP', topics: ['Побудова структури продукту', 'Планування roadmap через AI', 'Створення AI-презентацій для стейкхолдерів'] },
    { id: 'block-6', title: 'Візуальний дизайн з AI', topics: ['Генерація концептів', 'Артдирекшн і редизайн'] },
    { id: 'block-7', title: 'Генеративний AI в дизайні', topics: ['Створення графічних елементів та іконографіки', 'Генерація персонажів', 'AI-анімація'] },
    { id: 'block-8', title: 'UX writing та контент', topics: ['Створення UX-текстів', 'Адаптація текстів під різні аудиторії', 'Локалізація та переклади'] },
    { id: 'block-9', title: 'Оцінювання дизайн-рішень', topics: ['Автоматизоване A/B тестування', 'Генерація юзер-флоу та корнер-кейсів', 'Аналіз результатів тестування'] },
    { id: 'block-10', title: 'Вайб-кодинг', topics: ['Вступ у кодинг', 'Інструменти трансформації дизайну в код', 'HTML/CSS для дизайнерів'] },
    { id: 'block-11', title: 'Cursor та інструменти інтеграції', topics: ['Налаштування Cursor', 'Перенесення UI-елементів у код'] },
    { id: 'block-12', title: 'Робота з API', topics: ['Інтеграція AI-сервісів через API', 'Створення бібліотеки компонентів'] },
    { id: 'block-13', title: 'Тестування продукту', topics: ['Аналітика даних', 'Користувацьке тестування з AI-сценаріями', 'Аналіз поведінки користувачів', 'AI для генерації юніт-тестів'] },
    { id: 'block-14', title: 'Етика та майбутнє AI в дизайні', topics: ['Усунення упереджень в AI-розробках', 'Тренди та майбутнє AI в дизайні'] },
  ],
  en: [
    { id: 'block-1', title: 'Kickoff + intro to AI in design', topics: ['What AI is: key concepts and terminology', 'Benefits of using AI in a designer’s work', 'The AI tools ecosystem', 'Prompt engineering basics', 'Advanced prompting techniques'] },
    { id: 'block-2', title: 'AI tools for market research', topics: ['A new approach to research with AI', 'Data sources and AI search platforms', 'Competitor analysis with AI', 'Spotting trends, analyzing signals and forming hypotheses'] },
    { id: 'block-3', title: 'Working with data and analytics', topics: ['The designer as a data communicator', 'Structuring unstructured data', 'AI visualization: diagrams, classifications, word clouds', 'Competitor analysis with AI'] },
    { id: 'block-4', title: 'AI for understanding users', topics: ['Interview analytics', 'Creating and using AI personas', 'Running interviews with AI-generated personas', 'Hypothesizing through AI modeling', 'Framing the product problem'] },
    { id: 'block-5', title: 'Designing solutions for an MVP', topics: ['Building the product structure', 'Planning a roadmap with AI', 'Creating AI presentations for stakeholders'] },
    { id: 'block-6', title: 'Visual design with AI', topics: ['Generating concepts', 'Art direction and redesign'] },
    { id: 'block-7', title: 'Generative AI in design', topics: ['Creating graphic elements and iconography', 'Generating characters', 'AI animation'] },
    { id: 'block-8', title: 'UX writing and content', topics: ['Writing UX copy', 'Adapting copy for different audiences', 'Localization and translation'] },
    { id: 'block-9', title: 'Evaluating design solutions', topics: ['Automated A/B testing', 'Generating user flows and corner cases', 'Analyzing test results'] },
    { id: 'block-10', title: 'Vibe coding', topics: ['Intro to coding', 'Tools that turn design into code', 'HTML/CSS for designers'] },
    { id: 'block-11', title: 'Cursor and integration tools', topics: ['Setting up Cursor', 'Turning UI elements into code'] },
    { id: 'block-12', title: 'Working with APIs', topics: ['Integrating AI services via API', 'Building a component library'] },
    { id: 'block-13', title: 'Product testing', topics: ['Data analytics', 'User testing with AI scenarios', 'Analyzing user behavior', 'AI for generating unit tests'] },
    { id: 'block-14', title: 'Ethics and the future of AI in design', topics: ['Removing bias in AI development', 'Trends and the future of AI in design'] },
  ],
}

export function getHero(lang) {
  return HERO[lang] || HERO.uk
}

export function getBlocks(lang) {
  return BLOCKS[lang] || BLOCKS.uk
}
