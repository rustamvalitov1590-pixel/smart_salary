// ShiftCalc 2026 — Master Precision Engine

const CONFIG = {
    BASE_SALARY: 0,
    MRP_2026: 4325,
    TAX_DEDUCTION: 129750,  // Стандартный вычет 30 МРП (Код 701)
    SHIFT_ALLOWANCE: 650,
    MED_ADD: 6616,          // Код 293
    MED_DEDUCT: 5240,       // Код 442
    BONUS_PERCENT: 0.25,
    UNION_FEE: 0.01,         // Профсоюзный взнос (Код 440)
    MEDICAL_EXAM_RATE: 0.05805275580518526, // Код 290
    FITNESS_DEDUCTION: 22263,  // Удержание за фитнес
    DRIVER_SALARY_4: 652076.8831168831
};

const HOLIDAY_BONUSES = {
    2: 40,  // Март
    8: 50,  // Сентябрь
    9: 40,  // Октябрь
    11: 40  // Декабрь
};

const NORMS_2025 = [160, 160, 144, 176, 152, 168, 176, 168, 176, 184, 160, 168];
const HOLIDAYS_2025 = [
    [1, 2, 7], // Янв
    [], // Фев
    [8, 21, 22, 23, 24, 25], // Мар (Наурыз + перенос)
    [], // Апр
    [1, 7, 8, 9], // Май
    [16], // Июн (Курбан айт)
    [6, 7, 8], // Июл
    [30], // Авг
    [], // Сен
    [25], // Окт
    [], // Ноя
    [16, 17] // Дек
];

const TRANSLATIONS = {
    ru: {
        app_title: "Smart Salary",
        app_subtitle: "Ваша персональная финансовая стратегия",
        tab_dashboard: "Обзор",
        tab_calc: "Калькулятор",
        tab_details: "Детализация",
        tab_expenses: "Расходы",
        tab_graphs: "Графики",
        welcome_title: "Профессиональное планирование на 2026 год",
        welcome_desc: "Ваш персональный помощник для точного расчета заработной платы по производственному календарю 2026 года. Система автоматически учитывает налоги, праздничные, ночные часы и помогает анализировать ваш личный бюджет.",
        feature_graphs: "11+ Графиков",
        feature_taxes: "Налоги 2026",
        feature_budget: "Планирование бюджета",
        card_shifts: "Параметры вахты",
        label_schedule: "Выберите график работы",
        label_month: "Месяц 2026",
        label_salary: "Оклад (₸)",
        placeholder_salary: "Введите оклад",
        label_alimony: "Алименты (удержание)",
        alimony_none: "Нет",
        alimony_1: "25% (1 ребенок)",
        alimony_2: "33.3% (2 детей)",
        alimony_3: "50% (3+ детей)",
        label_joint: "Доплата за совмещение (30%)",
        sub_joint: "Начисляется от основного оклада",
        label_driving: "Доплата за вождение",
        sub_driving: "Служебный транспорт / Спецтехника",
        label_driver_rate: "Ставка (%)",
        driver_hint: "* Расчет по окладу водителя 4р: 652 076.88 ₸",
        label_night_discrete: "Ночные (дискретный режим)",
        sub_night_discrete: "Специальный расчет ночных смен",
        label_night_hours: "Ночные часы",
        label_discrete_nights: "Дискретный режим",
        label_discrete_nights_label: "Дискр. выезды",
        night_hint: "* Доплата: (R/2) × Часы + Выезды × 650",
        card_tabel: "Данные табеля",
        label_norm: "Норма (ч)",
        label_total: "Всего по графику (ч)",
        label_holiday: "Праздничные (ч)",
        label_road: "Часы в пути",
        label_night: "Ночные (ч)",
        summary_net: "Зарплата (Net)",
        summary_festive: "К празднику (Премия)",
        summary_gross: "Всего начислено",
        summary_tax: "Налоги",
        card_gross: "Начисления",
        card_taxes_alimony: "Удержания и Налоги",
        tab_expenses_title: "Добавить расход / кредит",
        label_exp_name: "Название",
        placeholder_exp: "Напр. Кредит на авто",
        label_exp_amount: "Сумма платежа (₸)",
        label_exp_type: "Тип расхода",
        exp_type_reg: "Регулярный (Всегда)",
        exp_type_credit: "Кредит (Срок)",
        exp_type_once: "Разовый (В этом месяце)",
        label_exp_term: "Срок (мес.)",
        label_exp_priority: "Важность расхода",
        exp_pri_high: "Обязательный (Кредиты, аренда, налоги)",
        exp_pri_low: "Необязательный (Подписки, развлечения, кафе)",
        btn_add_exp: "+ Добавить в список",
        card_your_expenses: "Ваши обязательства",
        label_free_balance: "Свободный остаток (ЗП - Расходы)",
        label_total_expenses: "Общая сумма расходов:",
        label_can_save: "Можно сэкономить:",
        card_editor: "Редактор графика (2026)",
        label_editor_shift: "Выберите смену для редактирования",
        label_editor_norm: "Норма часов в месяц",
        btn_save: "💾 Сохранить и применить",
        storage_hint: "* Данные сохраняются в памяти этого браузера",
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        shift_label: "Смена",
        row_basic: "Основная ЗП",
        row_holiday_base: "Праздничные (База)",
        row_holiday_extra: "Праздничные (Доплата)",
        row_bonus: "Премия (25%)",
        row_road: "Часы в пути",
        row_shift: "Надбавка за вахту",
        row_med_add: "Медстраховка (Начисл.)",
        row_joint: "Совмещение (30%)",
        row_driving: "Доплата за вождение",
        row_night: "Ночные 50%",
        row_discrete: "Дискретность доплата",
        row_festive_bonus: "Праздничная премия",
        row_med_exam: "Мед. осмотр",
        label_training: "Обучение (ч)",
        row_training: "Обучение без отрыва",
        tax_opv: "ОПВ (10%)",
        tax_vosms: "ВОСМС (2%)",
        tax_ipn: "ИПН (10%)",
        tax_med_deduct: "Медстраховка (Удерж.)",
        tax_alimony: "Алименты",
        free_pct_label: "Свободно",
        budget_critical: "ВНИМАНИЕ: ПЕРЕРАСХОД",
        budget_normal: "В ПРЕДЕЛАХ НОРМЫ",
        row_total_to_issue: "К выдаче",
        label_fitness: "Фитнес абонемент",
        sub_fitness: "Фиксированное удержание (22 263 ₸)",
        row_fitness: "Фитнес абонемент",
        label_med_exam: "Медосмотр (Пункт 290)",
        sub_med_exam: "Начисляется один раз в год в выбранном месяце",
        preloader_subtitle: "Финансовые расчеты высокой точности",
        dash_projection: "Прогноз дохода (2026)",
        dash_net_12: "Чистая прибыль за 12 месяцев",
        label_expenses_annual: "Расходы (Год)",
        label_free_annual: "Свободно",
        dash_liabilities: "Обязательства",
        dash_potential: "Потенциал",
        dash_chart_title: "Динамика зарплаты",
        month_short_jan: "Янв",
        month_short_jun: "Июн",
        month_short_dec: "Дек",
        label_vac_start: "Начало отпуска",
        label_vac_end: "Конец отпуска",
        label_union: "Профсоюзный взнос (1%)",
        sub_union: "Удержание 1% от основных начислений",
        label_other_gross: "Прочие начисления (Gross)",
        legend_income: "Доход",
        legend_expenses: "Расходы",
        label_category: "Категория",
        cat_credits: "Кредиты",
        cat_utilities: "Комуслуги",
        cat_education: "Обучение",
        cat_shopping: "Шопинг",
        cat_entertainment: "Развлечения",
        cat_events: "Мероприятия",
        cat_food: "Продукты",
        cat_other: "Прочее",
        row_bonus_base_hint: "от Базы 2025",
        exp_empty: "Список пока пуст...",
        exp_group_credit: "💳 Кредиты и займы",
        exp_group_reg: "🔄 Регулярные расходы",
        exp_group_once: "📅 В этом месяце (Разовые)",
        exp_pri_mandatory: "Обязательный",
        exp_pri_optional: "Дополнительный",
        exp_type_credit_label: "Кредит",
        exp_type_reg_label: "Ежемесячный",
        exp_type_once_label: "Разовый",
        exp_remains: "Осталось",
        exp_month_unit: "мес.",
        exp_active_always: "Активен всегда",
        savings_critical_title: "🚨 Критическая нагрузка",
        savings_critical_desc: "Ваши расходы превысили 85% дохода, но у вас нет необязательных трат для сокращения. Рекомендуется пересмотреть бюджет.",
        savings_warning_title: "Внимание: Перерасход!",
        savings_warning_desc: "Ваши расходы составляют {ratio}% от дохода. Рекомендуем сократить {count} доп. трат. Это позволит освободить {amount}.",
        ed_shift_params: "Параметры смены",
        ed_hours_total: "Часы (всего)",
        ed_night: "Ночные",
        ed_holiday: "Праздничные часы",
        ed_road: "Часы в пути",
        ed_vac_days: "Отпуск (дни)",
        formula_manual: "Ручной ввод",
        formula_fix: "Фикс",
        formula_base: "База",
        formula_days: "Дни",
        formula_road_calc: "ЧасыВПути × Ставка",
        formula_course_hours: "КурсЧасы",
        formula_trips: "Выезды"
    },
    kk: {
        app_title: "Smart Salary",
        app_subtitle: "Сіздің жеке қаржылық стратегияңыз",
        tab_dashboard: "Шолу",
        tab_calc: "Есептегіш",
        tab_details: "Толығырақ",
        tab_expenses: "Шығындар",
        tab_graphs: "Графиктер",
        welcome_title: "2026 жылға арналған кәсіби жоспарлау",
        welcome_desc: "2026 жылғы өндірістік күнтізбе бойынша жалақыны дәл есептеуге арналған жеке көмекшіңіз. Жүйе салықтарды, мерекелік, түнгі сағаттарды автоматты түрде ескереді және жеке бюджетіңізді талдауға көмектеседі.",
        feature_graphs: "11+ График",
        feature_taxes: "2026 Салықтар",
        feature_budget: "Бюджетті жоспарлау",
        card_shifts: "Вахта параметрлері",
        label_schedule: "Жұмыс кестесін таңдаңыз",
        label_month: "2026 жылдың айы",
        label_salary: "Лауазымдық жалақы (₸)",
        placeholder_salary: "Жалақыны енгізіңіз",
        label_alimony: "Алимент (ұстап калу)",
        alimony_none: "Жоқ",
        alimony_1: "25% (1 бала)",
        alimony_2: "33.3% (2 бала)",
        alimony_3: "50% (3+ бала)",
        label_joint: "Қоса атқару үшін төлем (30%)",
        sub_joint: "Негізгі жалақыдан есептеледі",
        label_driving: "Көлік жүргізгені үшін төлем",
        sub_driving: "Қызметтік көлік / Арнайы техника",
        label_driver_rate: "Мөлшерлеме (%)",
        driver_hint: "* 4-ші дәрежелі жүргізушінің жалақысы бойынша есеп: 652 076.88 ₸",
        label_night_discrete: "Түнгі ауысым (дискретті режим)",
        sub_night_discrete: "Түнгі ауысымдарды арнайы есептеу",
        label_night_hours: "Түнгі сағаттар",
        label_discrete_nights: "Дискретті режим",
        label_discrete_nights_label: "Дискр. шығулар",
        night_hint: "* Қосымша төлем: (R/2) × Сағат + Шығулар × 650",
        card_tabel: "Табель деректері",
        label_norm: "Норма (сағ)",
        label_total: "График бойынша барлығы (сағ)",
        label_holiday: "Мереке күндері (сағ)",
        label_road: "Жолдағы сағаттар",
        label_night: "Түнгі сағаттар (сағ)",
        summary_net: "Жалақы (Net)",
        summary_festive: "Мерекеге орай (Сыйлықақы)",
        summary_gross: "Барлығы есептелді",
        summary_tax: "Салықтар",
        card_gross: "Есептеулер",
        card_taxes_alimony: "Ұстап калулар мен салықтар",
        tab_expenses_title: "Шығынды / Кредитті қосу",
        label_exp_name: "Атауы",
        placeholder_exp: "Мысалы: Көлік кредиті",
        label_exp_amount: "Төлем сомасы (₸)",
        label_exp_type: "Шығын түрі",
        exp_type_reg: "Тұрақты (Әрқашан)",
        exp_type_credit: "Кредит (Мерзім)",
        exp_type_once: "Бір реттік (Осы айда)",
        label_exp_term: "Мерзімі (ай)",
        label_exp_priority: "Шығынның маңыздылығы",
        exp_pri_high: "Міндетті (Кредиттер, жалдау, салықтар)",
        exp_pri_low: "Міндетті емес (Жазылымдар, ойын-сауық)",
        btn_add_exp: "+ Тізімге қосу",
        card_your_expenses: "Сіздің міндеттемелеріңіз",
        label_free_balance: "Бос қалдық (Жалақы - Шығыстар)",
        label_total_expenses: "Шығыстардың жалпы сомасы:",
        label_can_save: "Үнемдеуге болады:",
        card_editor: "График редакторы (2026)",
        label_editor_shift: "Өңдеу үшін ауысымды таңдаңыз",
        label_editor_norm: "Айына сағат нормасы",
        btn_save: "💾 Сақтау және қолдану",
        storage_hint: "* Деректер осы браузердің жадында сақталады",
        months: ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"],
        shift_label: "Ауысым",
        row_basic: "Негізгі жалақы",
        row_holiday_base: "Мереке күндері (База)",
        row_holiday_extra: "Мереке күндері (Қосымша)",
        row_bonus: "Сыйлықақы (25%)",
        row_road: "Жолдағы сағаттар",
        row_shift: "Вахталық үстемеақы",
        row_med_add: "Медсақтандыру (Есептелген)",
        row_joint: "Қоса атқару (30%)",
        row_driving: "Көлік жүргізгені үшін төлем",
        row_night: "Түнгі 50%",
        row_discrete: "Дискреттілік төлем",
        row_festive_bonus: "Мерекелік сыйлықақы",
        row_med_exam: "Медициналық тексеру",
        label_training: "Оқу (сағ)",
        row_training: "Өндірістен қол үзбей оқу",
        tax_opv: "БЖЗҚ (10%)",
        tax_vosms: "МӘМС (2%)",
        tax_ipn: "ЖТС (10%)",
        tax_med_deduct: "Медсақтандыру (Ұсталған)",
        tax_alimony: "Алимент",
        free_pct_label: "Бос",
        budget_critical: "НАЗАР АУДАРЫҢЫЗ: АРТЫҚ ШЫҒЫН",
        budget_normal: "ҚАЛЫПТЫ ШЕКТЕ",
        row_total_to_issue: "Берілуге тиіс",
        label_fitness: "Фитнес абонементі",
        sub_fitness: "Тұрақты ұстап қалу (22 263 ₸)",
        row_fitness: "Фитнес абонементі",
        label_med_exam: "Медициналық тексеру (290-тармақ)",
        sub_med_exam: "Таңдалған айда жылына бір рет есептеледі",
        preloader_subtitle: "Жоғары дәлдіктегі қаржылық есептеулер",
        dash_projection: "Табыс болжамы (2026)",
        dash_net_12: "12 айдағы таза пайда",
        label_expenses_annual: "Шығындар (Жыл)",
        label_free_annual: "Бос",
        dash_liabilities: "Міндеттемелер",
        dash_potential: "Әлеует",
        dash_chart_title: "Жалақы динамикасы",
        month_short_jan: "Қаң",
        month_short_jun: "Мау",
        month_short_dec: "Жел",
        label_vac_start: "Демалыс басы",
        label_vac_end: "Демалыс соңы",
        label_union: "Кәсіподақ жарнасы (1%)",
        sub_union: "Негізгі есептеулерден 1% ұстап қалу",
        label_other_gross: "Басқа есептеулер (Gross)",
        legend_income: "Табыс",
        legend_expenses: "Шығындар",
        label_category: "Санат",
        cat_credits: "Кредиттер",
        cat_utilities: "Комқызметтер",
        cat_education: "Оқу",
        cat_shopping: "Шопинг",
        cat_entertainment: "Ойын-сауық",
        cat_events: "Іс-шаралар",
        cat_food: "Азық-түлік",
        cat_other: "Басқа",
        row_bonus_base_hint: "2025 Базасынан",
        exp_empty: "Тізім бос...",
        exp_group_credit: "💳 Кредиттер мен қарыздар",
        exp_group_reg: "🔄 Тұрақты шығындар",
        exp_group_once: "📅 Осы айда (Бір реттік)",
        exp_pri_mandatory: "Міндетті",
        exp_pri_optional: "Қосымша",
        exp_type_credit_label: "Кредит",
        exp_type_reg_label: "Ай сайын",
        exp_type_once_label: "Бір реттік",
        exp_remains: "Қалды",
        exp_month_unit: "ай",
        exp_active_always: "Әрқашан белсенді",
        savings_critical_title: "🚨 Критикалық жүктеме",
        savings_critical_desc: "Шығындарыңыз табыстың 85%-ынан асты, бірақ қысқартуға болатын міндетті емес шығындар жоқ. Бюджетті қайта қарау ұсынылады.",
        savings_warning_title: "Назар аударыңыз: Артық шығын!",
        savings_warning_desc: "Шығындарыңыз табыстың {ratio}% құрайды. {count} қосымша шығынды қысқартуды ұсынамыз. Бұл {amount} босатуға мүмкіндік береді.",
        ed_shift_params: "Ауысым параметрлері",
        ed_hours_total: "Сағаттар (барлығы)",
        ed_night: "Түнгі",
        ed_holiday: "Мерекелік сағаттар",
        ed_road: "Жолдағы сағаттар",
        ed_vac_days: "Демалыс (күндер)",
        formula_manual: "Қолмен енгізу",
        formula_fix: "Фикс",
        formula_base: "База",
        formula_days: "Күндер",
        formula_road_calc: "ЖолСағаттары × Ставка",
        formula_course_hours: "КурсСағаттары",
        formula_trips: "Шығулар"
    }
};

let currentState = {
    lang: 'ru', // Текущий язык
    selectedGraph: localStorage.getItem('selectedGraph') || 'graph1',
    selectedShift: localStorage.getItem('selectedShift') || 'A',
    salary: parseFloat(localStorage.getItem('salary')) || 700000,
    unionFeeByMonth: JSON.parse(localStorage.getItem('unionFeeByMonth')) || {}, // monthIndex -> boolean
    medExamByMonth: JSON.parse(localStorage.getItem('medExamByMonth')) || {},   // monthIndex -> boolean
    expenses: JSON.parse(localStorage.getItem('shiftcalc_expenses')) || [],
    userSchedules: {}, // Хранилище правок пользователя
    selectedMonth: new Date().getMonth(),
    annualBonus2025: 0,
    joint: localStorage.getItem('joint') === 'true',
    alimony: parseFloat(localStorage.getItem('alimony')) || 0,
    fitness: localStorage.getItem('fitness') === 'true'
};

function savePersistentState() {
    localStorage.setItem('selectedGraph', currentState.selectedGraph);
    localStorage.setItem('selectedShift', currentState.selectedShift);
    localStorage.setItem('salary', currentState.salary);
    localStorage.setItem('unionFeeByMonth', JSON.stringify(currentState.unionFeeByMonth));
    localStorage.setItem('medExamByMonth', JSON.stringify(currentState.medExamByMonth));
    localStorage.setItem('joint', currentState.joint);
    localStorage.setItem('alimony', currentState.alimony);
    localStorage.setItem('fitness', currentState.fitness);
}

function t(key) {
    return TRANSLATIONS[currentState.lang][key] || key;
}

function changeLanguage(lang) {
    currentState.lang = lang;
    localStorage.setItem('selected_lang', lang);
    
    // Update Switcher UI
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`lang-ru`);
    const kkBtn = document.getElementById(`lang-kk`);
    if (lang === 'ru' && activeBtn) activeBtn.classList.add('active');
    if (lang === 'kk' && kkBtn) kkBtn.classList.add('active');

    updateUIStrings();
    
    // Re-render components that have hardcoded strings
    renderMonthDropdown();
    renderShiftSelector();
    calculate();
}

function updateUIStrings() {
    // Basic elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = t(key);
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
}

function renderMonthDropdown() {
    const monthSelect = document.getElementById('month');
    const editorMonthSelect = document.getElementById('editor-month');
    const months = TRANSLATIONS[currentState.lang].months;
    const currentVal = monthSelect.value;
    
    [monthSelect, editorMonthSelect].forEach(select => {
        if (!select) return;
        select.innerHTML = months.map((m, i) => `<option value="${i}" ${i == currentVal ? 'selected' : ''}>${m}</option>`).join('');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loading');
    
    // Restore language preference
    const savedLang = localStorage.getItem('selected_lang');
    if (savedLang) currentState.lang = savedLang;

    loadExpenses();
    loadUserSchedules();
    initApp();
    updateUIStrings();
    renderMonthDropdown();
    updateView();
    calculateYearlyProjection(); // Первичный расчет года
    updateDashboardBonus(); // Расчет годовой премии 2025
});

function initApp() {
    document.getElementById('month').value = currentState.selectedMonth;
    document.getElementById('base-salary').value = currentState.salary;
    document.getElementById('schedule-select').value = currentState.selectedGraph;
    
    if (document.getElementById('joint-role')) document.getElementById('joint-role').checked = currentState.joint;
    if (document.getElementById('alimony-percent')) document.getElementById('alimony-percent').value = currentState.alimony;
    if (document.getElementById('fitness-deduction')) document.getElementById('fitness-deduction').checked = currentState.fitness;
    
    // Initialize dynamic shifts
    renderShiftSelector();

    // Start Premium Preloader Timeline
    const tl = gsap.timeline({
        onComplete: hidePreloader
    });

    tl.to(".preloader-logo", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)"
    })
    .to(".preloader-title span", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out"
    }, "-=0.5")
    .to(".preloader-subtitle", {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, "-=0.4")
    .to(".preloader-progress", {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut"
    }, "-=1");

    // Load driving allowance settings
    const savedDRate = localStorage.getItem('driver_rate');
    if (savedDRate) document.getElementById('driver-rate').value = savedDRate;
}

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    gsap.to(preloader, {
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
            preloader.style.display = 'none';
            document.body.classList.remove('loading');
            
            // Auto-reveal workspace
            const workspace = document.getElementById('workspace');
            if (workspace) {
                workspace.style.display = 'block';
                workspace.style.opacity = '1';
                
                gsap.from(".gsap-reveal", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power2.out"
                });
                
                calculate();
            }
        }
    });

    gsap.to(".preloader-content", {
        scale: 1.05,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in"
    });
}

function startApp() {
    const hero = document.getElementById('hero-screen');
    const workspace = document.getElementById('workspace');

    // Transition Hero out
    gsap.to(hero, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
            hero.style.display = 'none';
            
            // Show Workspace
            workspace.style.display = 'block';
            gsap.to(workspace, {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            });

            // Reveal workspace contents
            // Восстанавливаем оклад и график
            document.getElementById('input-salary').value = currentState.salary2026;
            document.getElementById('schedule-select').value = currentState.selectedGraph;
            document.getElementById('shift-select').value = currentState.selectedShift;
            document.getElementById('month').value = currentState.selectedMonth;

            updateView();
            gsap.from(".gsap-reveal", { opacity: 0, y: 20, duration: 0.8, stagger: 0.1 });
        }
    });
}

function onScheduleChange() {
    currentState.selectedGraph = document.getElementById('schedule-select').value;
    
    // Auto-select valid shift if current one doesn't exist in new graph
    const graphData = getActiveScheduleData();
    const monthData = graphData ? graphData.data[currentState.selectedMonth] : null;
    if (monthData) {
        const availableShifts = Object.keys(monthData).filter(k => k !== 'norm');
        if (!availableShifts.includes(currentState.selectedShift)) {
            currentState.selectedShift = availableShifts[0];
        }
    }
    
    renderShiftSelector();
    updateView();
}

function renderShiftSelector() {
    const container = document.getElementById('shift-selector-container');
    if (!container) return;

    const graphData = getActiveScheduleData();
    if (!graphData) return;

    const monthData = graphData.data[currentState.selectedMonth];
    if (!monthData) return;

    const shifts = Object.keys(monthData).filter(k => k !== 'norm').sort();
    
    container.innerHTML = shifts.map(s => `
        <button id="shift-${s}" 
                class="toggle-btn ${s === currentState.selectedShift ? 'active' : ''}" 
                onclick="setShift('${s}')">${s}</button>
    `).join('');
}

function setShift(shift) {
    currentState.selectedShift = shift;
    const container = document.getElementById('shift-selector-container');
    if (container) {
        container.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.toggle('active', btn.innerText === shift);
        });
    }
    updateView();
}

function updateView() {
    const monthIdx = parseInt(document.getElementById('month').value);
    currentState.selectedMonth = monthIdx;
    
    const graph = getActiveScheduleData();
    if (!graph) return;

    const monthData = graph.data[monthIdx];
    if (!monthData) return;
    
    const shiftData = monthData[currentState.selectedShift];
    if (!shiftData) return;
    
    document.getElementById('input-norm').value = monthData.norm;
    document.getElementById('input-total').value = shiftData.w || 0;
    document.getElementById('input-holiday').value = shiftData.h || 0;
    document.getElementById('input-road').value = shiftData.r || 8;
    
    // Восстановление галочек профсоюза и медосмотра
    const unionCB = document.getElementById('union-fee-toggle');
    if (unionCB) {
        let lastVal = true;
        for (let i = 0; i <= monthIdx; i++) {
            if (currentState.unionFeeByMonth[i] !== undefined) lastVal = currentState.unionFeeByMonth[i];
        }
        unionCB.checked = lastVal;
    }

    const medCB = document.getElementById('med-exam-allowance');
    if (medCB) {
        medCB.checked = !!currentState.medExamByMonth[monthIdx];
    }
    
    calculate();
}

function toggleDrivingDetails() {
    const cb = document.getElementById('driving-allowance');
    const details = document.getElementById('driving-details');
    if (!cb || !details) return;

    if (cb.checked) {
        details.style.display = 'block';
        gsap.fromTo(details, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
        gsap.to(details, { 
            height: 0, 
            opacity: 0, 
            duration: 0.3, 
            ease: "power2.in", 
            onComplete: () => details.style.display = 'none' 
        });
    }
    calculate();
}

function toggleNightDetails() {
    const cb = document.getElementById('discrete-night');
    const details = document.getElementById('night-details');
    if (!cb || !details) return;

    if (cb.checked) {
        details.style.display = 'block';
        gsap.fromTo(details, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
        gsap.to(details, { 
            height: 0, 
            opacity: 0, 
            duration: 0.3, 
            ease: "power2.in", 
            onComplete: () => details.style.display = 'none' 
        });
    }
    calculate();
}


function handleUnionToggle() {
    const isChecked = document.getElementById('union-fee-toggle').checked;
    const currentMonth = currentState.selectedMonth;
    
    // Переносим на этот и все последующие месяца
    for (let i = currentMonth; i < 12; i++) {
        currentState.unionFeeByMonth[i] = isChecked;
    }
    savePersistentState();
    calculate();
}

function handleMedExamToggle() {
    const isChecked = document.getElementById('med-exam-allowance').checked;
    currentState.medExamByMonth[currentState.selectedMonth] = isChecked;
    savePersistentState();
    calculate();
}

function calculate() {
    // 1. Собираем данные из UI
    const salary = parseFloat(document.getElementById('base-salary').value) || 0;
    currentState.salary = salary;
    currentState.selectedGraph = document.getElementById('schedule-select').value;
    currentState.joint = document.getElementById('joint-role')?.checked || false;
    currentState.alimony = parseFloat(document.getElementById('alimony-percent')?.value) || 0;
    currentState.fitness = document.getElementById('fitness-deduction')?.checked || false;
    
    savePersistentState();
    const norm = parseFloat(document.getElementById('input-norm').value) || 1;
    const R = salary / norm;
    
    const totalHours = parseFloat(document.getElementById('input-total').value) || 0;
    const holidayHours = parseFloat(document.getElementById('input-holiday').value) || 0;
    const roadHours = parseFloat(document.getElementById('input-road').value) || 0;
    const trainingHours = parseFloat(document.getElementById('input-training')?.value) || 0;

    // ГРУППА А (База премии)
    const workHoursClean = Math.max(0, totalHours - holidayHours);
    const code001 = workHoursClean * R;
    const code027 = holidayHours * R;
    const code154 = trainingHours * R; // Обучение оплачивается как база (R)
    
    // ДОПЛАТА ЗА НОЧНЫЕ (КОД 010)
    const nightCB = document.getElementById('discrete-night');
    let code010 = 0;
    let codeDiscretePay = 0;
    
    if (nightCB && nightCB.checked) {
        const nHours = parseFloat(document.getElementById('night-hours').value) || 0;
        const dNights = parseFloat(document.getElementById('discrete-nights').value) || 0;
        
        code010 = nHours * (R / 2);
        codeDiscretePay = dNights * 650;
    }

    const bonusBase = code001 + code027 + code010;
    const code115 = bonusBase * CONFIG.BONUS_PERCENT;

    // ГРУППА Б (Без премии)
    const code028 = holidayHours * R * 0.5;
    const code002 = roadHours * R;
    
    const shiftDays = totalHours / 11;
    const shiftAllowance = shiftDays * CONFIG.SHIFT_ALLOWANCE;
    const medAdd = CONFIG.MED_ADD;
    const bonusMRPCount = HOLIDAY_BONUSES[currentState.selectedMonth] || 0;
    const code116 = bonusMRPCount * CONFIG.MRP_2026;
    
    // СОВМЕЩЕНИЕ (Пункт 30%)
    const jointRoleCheckbox = document.getElementById('joint-role');
    currentState.hasJointRole = jointRoleCheckbox ? jointRoleCheckbox.checked : false;
    const code030 = currentState.hasJointRole ? (totalHours * R * 0.30) : 0;
    
    // МЕДОСМОТР (КОД 290)
    const medExamCheckbox = document.getElementById('med-exam-allowance');
    const code290 = (medExamCheckbox && medExamCheckbox.checked) ? (code001 * CONFIG.MEDICAL_EXAM_RATE) : 0;
    
    // ДОПЛАТА ЗА ВОЖДЕНИЕ
    const drivingCB = document.getElementById('driving-allowance');
    let codeDriving = 0;
    if (drivingCB && drivingCB.checked) {
        const dRate = parseFloat(document.getElementById('driver-rate').value) || 0;
        codeDriving = (CONFIG.DRIVER_SALARY_4 / norm) * totalHours * (dRate / 100);
        
        // Save to localStorage
        localStorage.setItem('driver_rate', dRate);
    }

    // ГОДОВАЯ ПРЕМИЯ (В ЯНВАРЕ)
    let annualBonus = 0;
    if (currentState.selectedMonth === 0) { // Январь
        annualBonus = currentState.annualBonus2025 || 0;
    }

    const otherGross = parseFloat(document.getElementById('input-other-gross').value) || 0;
    const totalGrossCalculated = code001 + code027 + code028 + code115 + code002 + shiftAllowance + medAdd + code116 + code290 + code030 + codeDriving + code010 + codeDiscretePay + code154 + annualBonus + otherGross;

    
    // НАЛОГИ И УДЕРЖАНИЯ (ПО РАСЧЕТНОМУ ЛИСТКУ)
    const opv = Math.round(totalGrossCalculated * 0.10);
    const vosms = Math.round(totalGrossCalculated * 0.02);
    
    // 440: Профсоюз (1% от базы: 001 + 002 + 115)
    const unionToggle = document.getElementById('union-fee-toggle');
    const unionFee = (unionToggle && unionToggle.checked) ? Math.round((code001 + code002 + code115) * 0.01) : 0;

    const taxableIncome = totalGrossCalculated - opv - vosms - CONFIG.TAX_DEDUCTION;
    const ipn = Math.max(0, Math.round(taxableIncome * 0.10));
    
    // Итого Net до алиментов и фитнеса (учитывая все удержания из листка)
    const totalNetBeforeExtras = totalGrossCalculated - opv - vosms - ipn - CONFIG.MED_DEDUCT - unionFee;
    
    // ФИТНЕС
    const fitnessCheckbox = document.getElementById('fitness-deduction');
    const fitnessAmount = (fitnessCheckbox && fitnessCheckbox.checked) ? CONFIG.FITNESS_DEDUCTION : 0;

    // АЛИМЕНТЫ
    const alimonyPercent = parseFloat(document.getElementById('alimony-percent').value) || 0;
    const alimonyAmount = Math.round(totalNetBeforeExtras * (alimonyPercent / 100));
    
    const totalNet = totalNetBeforeExtras - alimonyAmount - fitnessAmount;
    
    const festiveNet = code116 * 0.78408;
    const salaryNet = totalNet - festiveNet;
    
    // Бюджет (Фильтрация по актуальности для выбранного месяца)
    const activeExpenses = currentState.expenses.filter(exp => {
        if (exp.type === 'regular') return true;
        if (exp.type === 'once') return exp.startMonth === currentState.selectedMonth;
        if (exp.type === 'credit') {
            const monthsPassed = currentState.selectedMonth - exp.startMonth;
            return monthsPassed >= 0 && monthsPassed < exp.term;
        }
        return true;
    });

    const totalExpenses = activeExpenses.reduce((sum, exp) => sum + exp.amount, 0);
    const expenseRatio = salaryNet > 0 ? (totalExpenses / salaryNet) : 0;
    const isCritical = expenseRatio > 0.85;
    const freeBalance = salaryNet - totalExpenses;

    updateDisplay({
        totalGrossCalculated, totalNet, salaryNet, festiveNet, freeBalance, totalExpenses, opv, vosms, ipn, unionFee, R, isCritical, expenseRatio, alimonyAmount, fitnessAmount,
        code001, code027, code028, code115, code002, shiftAllowance, medAdd, code116, code290, code030, codeDriving, code010, codeDiscretePay, code154, annualBonus, otherGross,
        formulas: {
            f001: `${workHoursClean}ч × ${Math.round(R)}`,
            f027: `${holidayHours}ч × ${Math.round(R)}`,
            f154: `${trainingHours}ч × ${Math.round(R)}`,
            f010: code010 > 0 ? `${document.getElementById('night-hours').value}ч × ${Math.round(R/2)}` : '',
            f028: `${holidayHours}ч × ${Math.round(R)} × 0.5`,
            f115: `${Math.round(bonusBase).toLocaleString()} × 25%`,
            f290: `${Math.round(code001).toLocaleString()} × 5.805%`,
            fDriving: codeDriving > 0 ? `${Math.round(CONFIG.DRIVER_SALARY_4/norm)}/ч × ${totalHours}ч × ${document.getElementById('driver-rate').value}%` : '',
            fIPN: `(${Math.round(totalGrossCalculated-opv-vosms).toLocaleString()} - 129,750) × 10%`
        }
    });

    if (typeof calculateYearlyProjection === 'function') {
        calculateYearlyProjection(); 
    }
}

function updateDisplay(data) {
    animateValue('res-net', data.salaryNet);
    animateValue('res-gross', data.totalGrossCalculated);
    animateValue('res-tax', data.opv + data.vosms + data.ipn + data.unionFee);
    animateValue('res-free-balance', data.freeBalance);
    animateValue('res-total-expenses', data.totalExpenses);
    
    const reducibleLabel = document.getElementById('res-reducible-total');
    if (reducibleLabel) {
        reducibleLabel.textContent = data.isCritical ? t('budget_critical') : t('budget_normal');
        reducibleLabel.style.color = data.isCritical ? "#f87171" : "#10b981";
    }

    const festiveBox = document.getElementById('festive-summary');
    if (festiveBox) {
        if (data.festiveNet > 0) {
            festiveBox.style.display = 'block';
            animateValue('res-festive-net', data.festiveNet);
        } else {
            festiveBox.style.display = 'none';
        }
    }

    const detailedGross = document.getElementById('detailed-gross');
    if (detailedGross) {
        detailedGross.innerHTML = `
            ${renderRow(t('row_basic'), data.code001, '001', data.formulas.f001)}
            ${renderRow(t('row_holiday_base'), data.code027, '027', data.formulas.f027)}
            ${data.code028 > 0 ? renderRow(t('row_holiday_extra'), data.code028, '028', data.formulas.f028) : ''}
            ${renderRow(t('row_bonus'), data.code115, '115', data.formulas.f115)}
            ${renderRow(t('row_road'), data.code002, '002', t('formula_road_calc'))}
            ${renderRow(t('row_shift'), data.shiftAllowance, '062', `${t('formula_days')} × 650`)}
            ${renderRow(t('row_med_add'), data.medAdd, '293', t('formula_fix'))}
            ${data.code030 > 0 ? renderRow(t('row_joint'), data.code030, '030', `${t('formula_course_hours')} × 30%`) : ''}
            ${data.codeDriving > 0 ? renderRow(t('row_driving'), data.codeDriving, '031', data.formulas.fDriving) : ''}
            ${data.code010 > 0 ? renderRow(t('row_night'), data.code010, '010', data.formulas.f010) : ''}
            ${data.codeDiscretePay > 0 ? renderRow(t('row_discrete'), data.codeDiscretePay, '062', `${t('formula_trips')} × 650`) : ''}
            ${data.code154 > 0 ? renderRow(t('row_training'), data.code154, '154', data.formulas.f154) : ''}
            ${data.code116 > 0 ? renderRow(t('row_festive_bonus'), data.code116, '116', 'МРП × 4325') : ''}

            ${data.code290 > 0 ? renderRow(t('row_med_exam'), data.code290, '290', data.formulas.f290) : ''}
            ${data.otherGross > 0 ? renderRow(t('label_other_gross'), data.otherGross, 'Misc', t('formula_manual')) : ''}
            ${data.annualBonus > 0 ? renderRow(`${t('summary_festive')} (2025)`, data.annualBonus, '300', `17.5% ${t('row_bonus_base_hint')}`) : ''}
            ${renderRow(t('row_total_to_issue'), data.totalGrossCalculated, '399', '')}
        `;
    }

    const detailedTaxes = document.getElementById('detailed-taxes');
    if (detailedTaxes) {
        detailedTaxes.innerHTML = `
            ${renderRow(t('tax_opv'), data.opv, '420', 'Gross × 10%')}
            ${renderRow(t('tax_vosms'), data.vosms, '425', 'Gross × 2%')}
            ${renderRow(t('tax_ipn'), data.ipn, '411', data.formulas.fIPN)}
            ${renderRow(t('tax_med_deduct'), CONFIG.MED_DEDUCT, '442', t('formula_fix'))}
            ${data.unionFee > 0 ? renderRow(t('label_union'), data.unionFee, '440', `${t('formula_base')} × 1%`) : ''}
            ${data.alimonyAmount > 0 ? renderRow(t('tax_alimony'), data.alimonyAmount, 'Deduct', `Net × ${document.getElementById('alimony-percent').value}%`) : ''}
            ${data.fitnessAmount > 0 ? renderRow(t('row_fitness'), data.fitnessAmount, 'Deduct', t('formula_fix')) : ''}
        `;
    }

    updateDonutChart(data.salaryNet, data.totalExpenses);
}

const CATEGORY_COLORS = {
    income: '#10b981',       // Green for remaining income
    credits: '#f87171',    // Red
    utilities: '#60a5fa',  // Blue
    education: '#8b5cf6',  // Purple
    shopping: '#fbbf24',   // Amber
    entertainment: '#ec4899', // Pink
    events: '#f97316',     // Orange
    food: '#22c55e',        // Green
    other: '#94a3b8'       // Slate
};

const CATEGORY_LABELS = {
    credits: 'cat_credits',
    utilities: 'cat_utilities',
    education: 'cat_education',
    shopping: 'cat_shopping',
    entertainment: 'cat_entertainment',
    events: 'cat_events',
    food: 'cat_food',
    other: 'cat_other'
};

function updateDonutChart(net, totalExpenses) {
    const container = document.getElementById('donut-segments-container');
    const legend = document.querySelector('.legend');
    const pctText = document.getElementById('donut-pct');
    
    if (!container || !legend || isNaN(net) || net <= 0) return;

    // 1. Фильтруем активные расходы за текущий месяц
    const activeExpenses = currentState.expenses.filter(checkIsActive);
    
    // 2. Группируем по категориям
    const categoryTotals = {};
    activeExpenses.forEach(exp => {
        const cat = exp.category || 'other';
        categoryTotals[cat] = (categoryTotals[cat] || 0) + exp.amount;
    });

    const circumference = 2 * Math.PI * 85;
    container.innerHTML = '';
    legend.innerHTML = '';

    let currentOffset = 0;

    // 3. Сначала рисуем сегмент "Свободно" (Доход минус Расходы)
    const freeAmount = Math.max(0, net - totalExpenses);
    const freeRatio = freeAmount / net;
    
    if (freeRatio > 0) {
        const dashArray = `${circumference * freeRatio} ${circumference}`;
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "100");
        circle.setAttribute("cy", "100");
        circle.setAttribute("r", "85");
        circle.setAttribute("fill", "transparent");
        circle.setAttribute("stroke", CATEGORY_COLORS.income);
        circle.setAttribute("stroke-width", "15");
        circle.style.strokeDasharray = dashArray;
        circle.style.strokeDashoffset = -currentOffset;
        circle.style.transform = "rotate(-90deg)";
        circle.style.transformOrigin = "center";
        circle.style.transition = "stroke-dashoffset 0.8s ease, stroke-dasharray 0.8s ease";
        container.appendChild(circle);
        
        currentOffset += circumference * freeRatio;
        
        // Добавляем в легенду
        legend.innerHTML += `
            <div class="legend-item">
                <div class="dot" style="background: ${CATEGORY_COLORS.income}"></div>
                <span>${t('free_pct_label')}</span>
            </div>
        `;
    }

    // 4. Рисуем сегменты расходов по категориям
    Object.keys(categoryTotals).forEach(cat => {
        const amount = categoryTotals[cat];
        const ratio = amount / net;
        if (ratio <= 0) return;

        const dashArray = `${circumference * ratio} ${circumference}`;
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "100");
        circle.setAttribute("cy", "100");
        circle.setAttribute("r", "85");
        circle.setAttribute("fill", "transparent");
        circle.setAttribute("stroke", CATEGORY_COLORS[cat] || CATEGORY_COLORS.other);
        circle.setAttribute("stroke-width", "15");
        circle.style.strokeDasharray = dashArray;
        circle.style.strokeDashoffset = -currentOffset;
        circle.style.transform = "rotate(-90deg)";
        circle.style.transformOrigin = "center";
        circle.style.transition = "stroke-dashoffset 0.8s ease, stroke-dasharray 0.8s ease";
        container.appendChild(circle);
        
        currentOffset += circumference * ratio;

        // Добавляем в легенду
        legend.innerHTML += `
            <div class="legend-item">
                <div class="dot" style="background: ${CATEGORY_COLORS[cat] || CATEGORY_COLORS.other}"></div>
                <span>${t(CATEGORY_LABELS[cat]) || cat}</span>
            </div>
        `;
    });

    // 5. Обновляем процент свободных денег
    const freePct = Math.round((freeAmount / net) * 100);
    if (pctText) {
        const currentPct = parseInt(pctText.textContent) || 0;
        gsap.to({ val: currentPct }, {
            val: freePct,
            duration: 0.8,
            ease: "power2.out",
            onUpdate: function() { 
                pctText.textContent = Math.round(this.targets()[0].val) + '%'; 
            }
        });
    }
}

function renderRow(label, value, code, formula) {
    return `
        <div class="breakdown-row gsap-reveal">
            <div class="breakdown-info">
                <div class="breakdown-label">
                    <span class="breakdown-code">${code}</span>
                    <span>${label}</span>
                </div>
                ${formula ? `<div class="breakdown-formula">${formula}</div>` : ''}
            </div>
            <div class="breakdown-value">
                ${formatCurrency(value)}
            </div>
        </div>
    `;
}

function switchTab(tabId, btn) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    
    const tabs = ['dashboard', 'calc', 'details', 'expenses', 'graphs'];
    tabs.forEach(t => {
        const el = document.getElementById(`tab-${t}`);
        if (el) el.style.display = (t === tabId) ? 'block' : 'none';
    });
    
    if (tabId === 'dashboard') {
        calculateYearlyProjection();
        updateDashboardBonus();
    }
    if (tabId === 'expenses') renderExpenses();
    if (tabId === 'graphs') renderScheduleEditor();
}

function updateDashboardBonus() {
    const salary2026 = parseFloat(document.getElementById('base-salary').value) || 0;
    
    // Считаем дни отпуска из дат
    const vStart = document.getElementById('vacation-start').value;
    const vEnd = document.getElementById('vacation-end').value;
    let vacationDays = 0;
    
    if (vStart && vEnd) {
        const start = new Date(vStart);
        const end = new Date(vEnd);
        if (!isNaN(start) && !isNaN(end) && end >= start) {
            // Разница в мс / (1000 * 60 * 60 * 24) + 1 (чтобы включить последний день)
            vacationDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
        }
    }
    
    // Получаем данные за Январь (индекс 0) без премии
    const janFull = calculateSpecificMonthNet(0, salary2026, true);
    
    // Целевая сумма на руки в Январе (с премией)
    const targetJanNet = 2268533.75;
    
    // ПРОВЕРЕННАЯ ФОРМУЛА GROSS FROM NET (Учитывая потолки РК)
    const OPV_CAP = 50 * CONFIG.MRP_2026;
    const MIN_SALARY = 85000; 
    const VOSMS_CAP = 10 * MIN_SALARY * 0.02;
    const TAX_DEDUCT = CONFIG.TAX_DEDUCTION; 
    
    // Формула для дохода выше потолков ОПВ/ВОСМС:
    // Net = Gross - OPV_CAP - VOSMS_CAP - IPN - MedDeduct - UnionFee
    // IPN = (Gross - OPV_CAP - VOSMS_CAP - TAX_DEDUCT) * 0.1
    // UnionFee = Gross * 0.01
    // => Gross = (Net + 0.9 * (OPV_CAP + VOSMS_CAP) - 0.1 * TAX_DEDUCT + CONFIG.MED_DEDUCT) / 0.89
    const targetJanGross = (targetJanNet + 0.9 * (OPV_CAP + VOSMS_CAP) - 0.1 * TAX_DEDUCT + CONFIG.MED_DEDUCT) / 0.89;
    const bonusGross = Math.max(0, targetJanGross - janFull.gross);
    
    currentState.annualBonus2025 = bonusGross;
    
    const bonusEl = document.getElementById('dash-annual-bonus');
    const baseEl = document.getElementById('dash-bonus-base');
    
    if (bonusEl) bonusEl.textContent = formatCurrency(currentState.annualBonus2025);
    
    if (baseEl) {
        // Оценка оклада 2025: Оклад 2026 - (Оклад 2026 * Инфляция)
        const OFFICIAL_INFLATION = 12.3;
        const estSalary2025 = salary2026 * (1 - OFFICIAL_INFLATION / 100); 
        
        // Учет отпуска: база уменьшается пропорционально отработанным дням
        const workDaysRatio = (365 - vacationDays) / 365;
        const yearBase2025 = estSalary2025 * 12 * workDaysRatio;
        
        const calculatedPercent = (yearBase2025 > 0) ? (bonusGross / yearBase2025) * 100 : 0;
        baseEl.textContent = `${t('row_bonus_base_hint')}: ${formatCurrency(yearBase2025)} (${t('label_salary')}: ${formatCurrency(estSalary2025)})`;
        
        // Обновляем заголовок карточки на дашборде
        const dashTitleEl = document.querySelector('.dash-card.bonus .dash-label');
        if (dashTitleEl) dashTitleEl.textContent = `${t('summary_festive')} (${calculatedPercent.toFixed(2)}%)`;
        
        // Обновляем текст в деталях начисления (код 300) в списке
        const items = document.querySelectorAll('.payout-item');
        items.forEach(item => {
            const codeEl = item.querySelector('.item-code');
            if (codeEl && codeEl.textContent.trim() === '300') {
                const detailsEl = item.querySelector('.item-details');
                if (detailsEl) detailsEl.textContent = `${calculatedPercent.toFixed(2)}% ${t('row_bonus_base_hint')}`;
            }
        });
    }
}

function calculateSpecificMonthNet(monthIdx, salary, returnFull = false) {
    const schedule = getActiveScheduleData();
    if (!schedule) return 0;
    const monthData = schedule.data[monthIdx];
    const shiftData = monthData[currentState.selectedShift] || monthData['A'];
    
    const R = salary / monthData.norm;
    const workHoursClean = Math.max(0, (shiftData.w || 0) - (shiftData.h || 0));
    const c001 = workHoursClean * R;
    const c027 = (shiftData.h || 0) * R;
    const c028 = (shiftData.h || 0) * R * 0.5;
    const c010 = (shiftData.n || 0) * (R / 2);
    const c115 = (c001 + c027 + c010) * CONFIG.BONUS_PERCENT;
    const shiftAllowance = ((shiftData.w || 0) / 11) * CONFIG.SHIFT_ALLOWANCE;
    const c116 = (HOLIDAY_BONUSES[monthIdx] || 0) * CONFIG.MRP_2026;
    
    // Доп. коды, которые могут быть включены
    const hasJoint = document.getElementById('joint-role')?.checked || false;
    const c030 = hasJoint ? ((shiftData.w || 0) * R * 0.30) : 0;
    
    const medExam = !!currentState.medExamByMonth[monthIdx];
    const c290 = medExam ? (c001 * CONFIG.MEDICAL_EXAM_RATE) : 0;
    
    const driving = document.getElementById('driving-allowance')?.checked || false;
    let cDriving = 0;
    if (driving) {
        const dRate = parseFloat(document.getElementById('driver-rate')?.value) || 0;
        cDriving = (CONFIG.DRIVER_SALARY_4 / monthData.norm) * (shiftData.w || 0) * (dRate / 100);
    }

    const gross = c001 + c027 + c028 + c115 + shiftAllowance + CONFIG.MED_ADD + c116 + c010 + c030 + c290 + cDriving;
    
    // Union Fee check
    let hasUnion = true;
    for (let i = 0; i <= monthIdx; i++) {
        if (currentState.unionFeeByMonth[i] !== undefined) hasUnion = currentState.unionFeeByMonth[i];
    }
    const unionFee = hasUnion ? (gross * 0.01) : 0;

    const opv = Math.round(gross * 0.10);
    const vosms = Math.round(gross * 0.02);
    const taxable = gross - opv - vosms - CONFIG.TAX_DEDUCTION;
    const ipn = Math.max(0, Math.round(taxable * 0.10));
    const net = gross - opv - vosms - ipn - CONFIG.MED_DEDUCT - unionFee;

    if (returnFull) {
        return { gross, net, opv, vosms, ipn };
    }
    return net;
}

function saveExpenses() { localStorage.setItem('shiftcalc_expenses', JSON.stringify(currentState.expenses)); }
function loadExpenses() {
    const saved = localStorage.getItem('shiftcalc_expenses');
    if (saved) { currentState.expenses = JSON.parse(saved); renderExpenses(); }
}

function calculateYearlyProjection() {
    const salary = parseFloat(document.getElementById('base-salary').value) || 0;
    const schedule = getActiveScheduleData();
    if (!schedule) return;

    let totalYearNet = 0;
    let monthlyData = [];

    // Проверка: был ли медосмотр хоть в одном месяце?
    const hasAnyMedExam = Object.values(currentState.medExamByMonth).some(v => v === true);
    let medExamAdded = false;

    for (let m = 0; m < 12; m++) {
        // Рассчитываем месяц через общую функцию (без медосмотра внутри, чтобы не дублировать)
        // Для этого временно подменим статус медосмотра для этого месяца в currentState
        const originalMedStatus = currentState.medExamByMonth[m];
        currentState.medExamByMonth[m] = false; 
        
        let monthResult = calculateSpecificMonthNet(m, salary, true);
        
        // Возвращаем статус назад
        currentState.medExamByMonth[m] = originalMedStatus;

        let monthNet = monthResult.net;

        // Если это январь, добавляем годовую премию
        if (m === 0) {
            // Рассчитываем налог на премию (упрощенно или через Gross)
            // Но премия у нас уже в Gross, поэтому добавим её к январскому Gross и пересчитаем Net для января
            const janGrossWithBonus = monthResult.gross + (currentState.annualBonus2025 || 0);
            
            // Налоги для января с учетом бонуса
            const opv = Math.min(janGrossWithBonus * 0.10, 50 * CONFIG.MRP_2026);
            const vosms = Math.min(janGrossWithBonus * 0.02, 10 * 85000 * 0.02);
            const taxable = janGrossWithBonus - opv - vosms - CONFIG.TAX_DEDUCTION;
            const ipn = Math.max(0, Math.round(taxable * 0.10));
            
            // Проверка профсоюза для января
            let hasUnion = true;
            if (currentState.unionFeeByMonth[0] !== undefined) hasUnion = currentState.unionFeeByMonth[0];
            const unionFee = hasUnion ? (janGrossWithBonus * 0.01) : 0;

            monthNet = janGrossWithBonus - opv - vosms - ipn - CONFIG.MED_DEDUCT - unionFee;
        }

        // Если в этом месяце отмечен медосмотр И мы его еще не добавляли в годовой итог
        if (originalMedStatus && !medExamAdded) {
            // Считаем "чистый" доход от медосмотра
            const medGross = (salary / schedule.data[m].norm) * (schedule.data[m][currentState.selectedShift] || schedule.data[m]['A']).w * CONFIG.MEDICAL_EXAM_RATE;
            const medNet = medGross * 0.89; // Приблизительный чистый доход (минус налоги)
            monthNet += medNet;
            medExamAdded = true;
        }

        totalYearNet += monthNet;
        monthlyData.push(monthNet);
    }

    // Расходы за год
    const totalYearExpenses = currentState.expenses.reduce((sum, exp) => {
        if (exp.type === 'regular') return sum + (exp.amount * 12);
        if (exp.type === 'credit') return sum + (exp.amount * Math.min(exp.term, 12));
        if (exp.type === 'once') return sum + exp.amount;
        return sum;
    }, 0);

    // Обновляем UI Дашборда
    animateValue('dash-year-net', totalYearNet);
    animateValue('dash-year-exp', totalYearExpenses);
    animateValue('dash-year-free', totalYearNet - totalYearExpenses);

    // Отрисовка мини-графика
    const chartContainer = document.getElementById('yearly-mini-chart');
    if (chartContainer) {
        const maxNet = Math.max(...monthlyData, 1);
        chartContainer.innerHTML = monthlyData.map((val, i) => `
            <div class="chart-bar" 
                 style="height: ${(val / maxNet) * 100}%" 
                 data-value="${Math.round(val/1000)}k"></div>
        `).join('');
    }
    
    // Автосохранение
    savePersistentState();
}

function formatCurrency(val) { 
    return val.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ₸'; 
}

function animateValue(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    const startValue = parseFloat(el.textContent.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
    const obj = { val: startValue };
    gsap.to(obj, { val: value, duration: 1, ease: "power2.out", onUpdate: () => { el.textContent = formatCurrency(obj.val); } });
}

function addExpense() {
    const name = document.getElementById('exp-name').value;
    const amount = parseFloat(document.getElementById('exp-amount').value);
    const type = document.getElementById('exp-type').value;
    const term = parseInt(document.getElementById('exp-term').value) || 0;

    if (!name || isNaN(amount)) return;

    const category = document.getElementById('exp-category').value;
    
    // Авто-приоритет: Кредиты, услуги, обучение, еда - обязательны. Остальное - нет.
    const mandatoryCategories = ['credits', 'utilities', 'education', 'food'];
    const priority = mandatoryCategories.includes(category) ? 'mandatory' : 'optional';

    const newExpense = {
        id: Date.now(),
        name,
        amount,
        category,
        type,
        priority,
        startMonth: currentState.selectedMonth,
        term: (type === 'credit') ? term : 1,
        isReducible: priority === 'optional'
    };

    currentState.expenses.push(newExpense);
    saveExpenses();
    renderExpenses();
    calculate();

    // Reset fields
    document.getElementById('exp-name').value = '';
    document.getElementById('exp-amount').value = '';
    document.getElementById('exp-term').value = '';
    document.getElementById('exp-reducible').checked = false;
}

function toggleTermField() {
    const type = document.getElementById('exp-type').value;
    const field = document.getElementById('term-field');
    if (field) {
        if (type === 'credit') {
            field.style.display = 'block';
            gsap.fromTo(field, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.3 });
        } else {
            gsap.to(field, { height: 0, opacity: 0, duration: 0.2, onComplete: () => field.style.display = 'none' });
        }
    }
}

function deleteExpense(id) {
    currentState.expenses = currentState.expenses.filter(e => e.id !== id);
    saveExpenses();
    renderExpenses();
    calculate();
}

function renderExpenses() {
    const list = document.getElementById('expenses-list');
    if (!list) return;
    
    if (currentState.expenses.length === 0) {
        list.innerHTML = `<div style="text-align:center; opacity:0.5; padding:20px">${t('exp_empty')}</div>`;
        renderSavingsAnalysis([]);
        return;
    }

    const groups = {
        credit: { title: t('exp_group_credit'), items: [] },
        regular: { title: t('exp_group_reg'), items: [] },
        once: { title: t('exp_group_once'), items: [] }
    };

    currentState.expenses.forEach(exp => {
        if (groups[exp.type]) groups[exp.type].items.push(exp);
    });

    let html = '';
    for (const [key, group] of Object.entries(groups)) {
        if (group.items.length > 0) {
            html += `<div class="expense-group-header">${group.title}</div>`;
            group.items.forEach(exp => {
                const isActive = checkIsActive(exp);
                if (!isActive) return;

                html += `
                    <div class="expense-item ${exp.priority === 'optional' ? 'reducible' : ''} gsap-reveal">
                        <div class="expense-info">
                            <div style="display:flex; align-items:center; gap:8px">
                                <span class="expense-name">${exp.name}</span>
                                <span class="priority-badge ${exp.priority === 'mandatory' ? 'priority-mandatory' : 'priority-optional'}">
                                    ${exp.priority === 'mandatory' ? t('exp_pri_mandatory') : t('exp_pri_optional')}
                                </span>
                            </div>
                            <div class="expense-meta">
                                <span class="type-badge">${key === 'credit' ? t('exp_type_credit_label') : key === 'regular' ? t('exp_type_reg_label') : t('exp_type_once_label')}</span>
                                ${exp.type === 'credit' ? `
                                    <span class="expense-term" style="color: var(--accent-blue)">
                                        ${t('exp_remains')}: ${exp.term - (currentState.selectedMonth - exp.startMonth)} ${t('exp_month_unit')} 
                                        / ОД: ${formatCurrency(exp.amount * (exp.term - (currentState.selectedMonth - exp.startMonth)))}
                                    </span>
                                ` : ''}
                                ${exp.type === 'regular' ? `<span class="expense-term">${t('exp_active_always')}</span>` : ''}
                            </div>
                        </div>
                        <div class="expense-actions">
                            <span class="expense-amount">${formatCurrency(exp.amount)}</span>
                            <button class="btn-delete" onclick="deleteExpense(${exp.id})">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                            </button>
                        </div>
                    </div>
                `;
            });
        }
    }

    list.innerHTML = html;
    
    // Активные для анализа экономии
    const activeForSavings = currentState.expenses.filter(checkIsActive);
    renderSavingsAnalysis(activeForSavings);
}

function checkIsActive(exp) {
    if (exp.type === 'regular') return true;
    if (exp.type === 'once') return exp.startMonth === currentState.selectedMonth;
    if (exp.type === 'credit') {
        const monthsPassed = currentState.selectedMonth - exp.startMonth;
        // Кредит активен, если мы в месяце начала или позже, но не дольше срока
        return monthsPassed >= 0 && monthsPassed < exp.term;
    }
    return true;
}

function renderSavingsAnalysis(activeExpenses) {
    const panel = document.getElementById('savings-panel');
    if (!panel) return;

    // Считаем общую зарплату Net (из currentState если нужно, но проще передать из calculate)
    // Для простоты используем глобальный расчет внутри render, но лучше взять из DOM если calculate уже прошел
    const netEl = document.getElementById('res-net');
    const netText = netEl ? netEl.textContent.replace(/[^\d.,]/g, '').replace(',', '.') : "0";
    const netValue = parseFloat(netText) || 0;
    
    const totalExpenses = activeExpenses.reduce((sum, e) => sum + e.amount, 0);
    const ratio = netValue > 0 ? (totalExpenses / netValue) : 0;

    // Показываем панель только если расходы > 85%
    if (ratio <= 0.85) {
        panel.style.display = 'none';
        return;
    }

    const optionalExpenses = activeExpenses.filter(e => e.priority === 'optional');
    if (optionalExpenses.length === 0) {
        panel.style.display = 'block';
        panel.className = 'savings-card critical gsap-reveal';
        panel.innerHTML = `
            <div class="savings-title">${t('savings_critical_title')}</div>
            <div class="savings-text">${t('savings_critical_desc')}</div>
        `;
        return;
    }

    const totalPotentialSavings = optionalExpenses.reduce((sum, e) => sum + e.amount, 0);
    
    panel.style.display = 'block';
    panel.className = 'savings-card critical gsap-reveal';
    
    let desc = t('savings_warning_desc')
        .replace('{ratio}', `<b>${Math.round(ratio * 100)}</b>`)
        .replace('{count}', `<span class="savings-amount">${optionalExpenses.length}</span>`)
        .replace('{amount}', `<span class="savings-amount">${formatCurrency(totalPotentialSavings)}</span>`);

    panel.innerHTML = `
        <div class="savings-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            ${t('savings_warning_title')}
        </div>
        <div class="savings-text">${desc}</div>
    `;
}

function loadUserSchedules() {
    const saved = localStorage.getItem('user_schedules');
    if (saved) {
        try {
            currentState.userSchedules = JSON.parse(saved);
        } catch (e) {
            console.error("Error loading user schedules", e);
        }
    }
}

function getActiveScheduleData() {
    const base = SCHEDULES_2026[currentState.selectedGraph];
    if (!base) return null;

    // Клонируем базу
    const merged = JSON.parse(JSON.stringify(base));

    // Накладываем правки пользователя
    if (currentState.userSchedules[currentState.selectedGraph]) {
        const userGraph = currentState.userSchedules[currentState.selectedGraph];
        for (const month in userGraph) {
            if (!merged.data[month]) merged.data[month] = {};
            if (userGraph[month].norm !== undefined) merged.data[month].norm = userGraph[month].norm;
            
            for (const shift of ['A', 'B', 'C', 'D']) {
                if (userGraph[month][shift]) {
                    if (!merged.data[month][shift]) merged.data[month][shift] = {};
                    Object.assign(merged.data[month][shift], userGraph[month][shift]);
                }
            }
        }
    }
    return merged;
}

function renderScheduleEditor() {
    const container = document.getElementById('editor-shifts-grid');
    if (!container) return;

    // Синхронизируем значения селекторов редактора с глобальным состоянием
    document.getElementById('editor-schedule-select').value = currentState.selectedGraph;
    document.getElementById('editor-month').value = currentState.selectedMonth;

    const fullData = getActiveScheduleData();
    const monthData = fullData ? fullData.data[currentState.selectedMonth] : null;
    if (!monthData) return;

    const availableShifts = Object.keys(monthData).filter(k => k !== 'norm').sort();
    
    // Sync shift dropdown options if they changed
    const shiftSelect = document.getElementById('editor-shift-select');
    if (shiftSelect) {
        const currentVal = shiftSelect.value;
        shiftSelect.innerHTML = availableShifts.map(s => `<option value="${s}">${s}</option>`).join('');
        if (availableShifts.includes(currentVal)) {
            shiftSelect.value = currentVal;
        }
    }

    document.getElementById('ed-norm').value = monthData.norm || 168;

    const selectedShift = shiftSelect ? shiftSelect.value : 'A';

    let html = '';
    availableShifts.forEach(shift => {
        if (shift !== selectedShift) return; // Render only selected

        const s = (monthData && monthData[shift]) ? monthData[shift] : { w: 0, n: 0, h: 0, r: 0, vd: 0 };
        html += `
            <div class="shift-editor-card gsap-reveal">
                <div class="shift-title">${t('ed_shift_params')} ${shift}</div>
                <div class="editor-row">
                    <div class="field">
                        <label>${t('ed_hours_total')}</label>
                        <input type="number" id="ed-${shift}-w" value="${s.w || 0}">
                    </div>
                    <div class="field">
                        <label>${t('ed_night')}</label>
                        <input type="number" id="ed-${shift}-n" value="${s.n || 0}">
                    </div>
                </div>
                <div class="editor-row">
                    <div class="field">
                        <label>${t('ed_holiday')}</label>
                        <input type="number" id="ed-${shift}-h" value="${s.h || 0}">
                    </div>
                    <div class="field">
                        <label>${t('ed_road')}</label>
                        <input type="number" id="ed-${shift}-r" value="${s.r || 0}">
                    </div>
                </div>
                <div class="editor-row">
                    <div class="field">
                        <label>${t('ed_vac_days')}</label>
                        <input type="number" id="ed-${shift}-vd" value="${s.vd || 0}">
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function saveScheduleChanges() {
    const graph = currentState.selectedGraph;
    const month = currentState.selectedMonth;
    const selectedShift = document.getElementById('editor-shift-select').value || 'A';

    if (!currentState.userSchedules[graph]) currentState.userSchedules[graph] = {};
    if (!currentState.userSchedules[graph][month]) currentState.userSchedules[graph][month] = {};

    const data = currentState.userSchedules[graph][month];
    data.norm = parseFloat(document.getElementById('ed-norm').value) || 0;

    // We only update the shift that is currently visible in the editor
    if (!data[selectedShift]) data[selectedShift] = {};
    
    const s = data[selectedShift];
    s.w = parseFloat(document.getElementById(`ed-${selectedShift}-w`).value) || 0;
    s.n = parseFloat(document.getElementById(`ed-${selectedShift}-n`).value) || 0;
    s.h = parseFloat(document.getElementById(`ed-${selectedShift}-h`).value) || 0;
    s.r = parseFloat(document.getElementById(`ed-${selectedShift}-r`).value) || 0;
    s.vd = parseFloat(document.getElementById(`ed-${selectedShift}-vd`).value) || 0;

    localStorage.setItem('user_schedules', JSON.stringify(currentState.userSchedules));
    
    // Feedback
    const btn = event.target.closest('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '✅ Сохранено!';
    btn.style.background = '#00c853';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 2000);

    updateView();
}

function syncFromEditor(type) {
    if (type === 'graph') {
        currentState.selectedGraph = document.getElementById('editor-schedule-select').value;
        document.getElementById('schedule-select').value = currentState.selectedGraph;
    } else {
        currentState.selectedMonth = parseInt(document.getElementById('editor-month').value);
        document.getElementById('month').value = currentState.selectedMonth;
    }
    
    renderScheduleEditor();
    updateView();
}

function saveExpenses() { localStorage.setItem('shiftcalc_expenses', JSON.stringify(currentState.expenses)); }
function loadExpenses() {
    const saved = localStorage.getItem('shiftcalc_expenses');
    if (saved) { currentState.expenses = JSON.parse(saved); renderExpenses(); }
}
