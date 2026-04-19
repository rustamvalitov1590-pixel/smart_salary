// ShiftCalc 2026 — Master Precision Engine

const CONFIG = {
    BASE_SALARY: 0,
    MRP_2026: 4325,
    TAX_DEDUCTION: 129750,  // Стандартный вычет 30 МРП (Код 701)
    SHIFT_ALLOWANCE: 650,
    MED_ADD: 6616,          // Код 293
    MED_DEDUCT: 5240,       // Код 442
    BONUS_PERCENT: 0.25,
    MEDICAL_EXAM_RATE: 0.05805275580518526, // Код 290: Сверхточный расчет 5.805...%
    FITNESS_DEDUCTION: 22263,  // Удержание за фитнес
    DRIVER_SALARY_4: 652076.8831168831
};

const HOLIDAY_BONUSES = {
    2: 40,  // Март
    8: 50,  // Сентябрь
    9: 40,  // Октябрь
    11: 40  // Декабрь
};

const TRANSLATIONS = {
    ru: {
        app_title: "Smart Salary",
        app_subtitle: "Ваша персональная финансовая стратегия",
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
        preloader_subtitle: "Финансовые расчеты высокой точности"
    },
    kk: {
        app_title: "Smart Salary",
        app_subtitle: "Сіздің жеке қаржылық стратегияңыз",
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
        preloader_subtitle: "Жоғары дәлдіктегі қаржылық есептеулер"
    }
};

let currentState = {
    lang: 'ru', // Текущий язык
    selectedGraph: "График №3-1 (дневной)",
    selectedShift: 'A',
    selectedMonth: 2, // Март
    salary: CONFIG.BASE_SALARY,
    hasJointRole: false,
    expenses: [],
    userSchedules: {} // Хранилище правок пользователя
};

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
});

function initApp() {
    document.getElementById('month').value = currentState.selectedMonth;
    document.getElementById('base-salary').value = currentState.salary;
    document.getElementById('schedule-select').value = currentState.selectedGraph;
    
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
            gsap.from(".gsap-reveal", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out"
            });
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
    
    // Сброс часов обучения при смене месяца/смены
    const trainingInput = document.getElementById('input-training');
    if (trainingInput) trainingInput.value = 0;
    
    // Auto-populate night hours
    const nightHoursInput = document.getElementById('input-night');
    if (nightHoursInput) {
        nightHoursInput.value = shiftData.n || 0;
        
        // Ensure Night logic is triggered if n > 0
        const nightCB = document.getElementById('discrete-night');
        const nightRow = document.getElementById('night-hours-row');
        if (shiftData.n > 0) {
            if (nightCB) nightCB.checked = true;
            if (nightRow) nightRow.style.display = 'grid';
        } else {
            if (nightCB) nightCB.checked = false;
            if (nightRow) nightRow.style.display = 'none';
        }
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


function calculate() {
    const salary = parseFloat(document.getElementById('base-salary').value) || 0;
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
    
    const code290 = code001 * CONFIG.MEDICAL_EXAM_RATE; // Медосмотр: расчет на базе 001
    
    // ДОПЛАТА ЗА ВОЖДЕНИЕ
    const drivingCB = document.getElementById('driving-allowance');
    let codeDriving = 0;
    if (drivingCB && drivingCB.checked) {
        const dRate = parseFloat(document.getElementById('driver-rate').value) || 0;
        codeDriving = (CONFIG.DRIVER_SALARY_4 / norm) * totalHours * (dRate / 100);
        
        // Save to localStorage
        localStorage.setItem('driver_rate', dRate);
    }

    const totalGrossCalculated = code001 + code027 + code028 + code115 + code002 + shiftAllowance + medAdd + code116 + code290 + code030 + codeDriving + code010 + codeDiscretePay + code154;

    
    const opv = Math.round(totalGrossCalculated * 0.10);
    const vosms = Math.round(totalGrossCalculated * 0.02);
    const taxableIncome = totalGrossCalculated - opv - vosms - CONFIG.TAX_DEDUCTION;
    const ipn = Math.max(0, Math.round(taxableIncome * 0.10));
    
    const totalNetBeforeAlimony = totalGrossCalculated - opv - vosms - ipn - CONFIG.MED_DEDUCT;
    
    // ФИТНЕС
    const fitnessCheckbox = document.getElementById('fitness-deduction');
    const fitnessAmount = (fitnessCheckbox && fitnessCheckbox.checked) ? CONFIG.FITNESS_DEDUCTION : 0;

    // АЛИМЕНТЫ
    const alimonyPercent = parseFloat(document.getElementById('alimony-percent').value) || 0;
    const alimonyAmount = Math.round(totalNetBeforeAlimony * (alimonyPercent / 100));
    
    const totalNet = totalNetBeforeAlimony - alimonyAmount - fitnessAmount;
    
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
        totalGrossCalculated, totalNet, salaryNet, festiveNet, freeBalance, totalExpenses, opv, vosms, ipn, R, isCritical, expenseRatio, alimonyAmount, fitnessAmount,
        code001, code027, code028, code115, code002, shiftAllowance, medAdd, code116, code290, code030, codeDriving, code010, codeDiscretePay, code154,
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

}

function updateDisplay(data) {
    animateValue('res-net', data.salaryNet);
    animateValue('res-gross', data.totalGrossCalculated);
    animateValue('res-tax', data.opv + data.vosms + data.ipn);
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
            ${renderRow('Основная ЗП', data.code001, '001', data.formulas.f001)}
            ${renderRow('Праздничные (База)', data.code027, '027', data.formulas.f027)}
            ${data.code028 > 0 ? renderRow('Праздничные (Доплата)', data.code028, '028', data.formulas.f028) : ''}
            ${renderRow('Премия (25%)', data.code115, '115', data.formulas.f115)}
            ${renderRow('Время в пути', data.code002, '002', ' ЧасыВПути × Ставка')}
            ${renderRow('Надбавка за вахту', data.shiftAllowance, '062', 'Дни × 650')}
            ${renderRow('Медстраховка (Начисл.)', data.medAdd, '293', 'Фикс')}
            ${data.code030 > 0 ? renderRow('Совмещение (30%)', data.code030, '030', 'КурсЧасы × 30%') : ''}
            ${data.codeDriving > 0 ? renderRow('Доплата за вождение', data.codeDriving, '031', data.formulas.fDriving) : ''}
            ${data.code010 > 0 ? renderRow('Ночные 50%', data.code010, '010', data.formulas.f010) : ''}
            ${data.codeDiscretePay > 0 ? renderRow('Дискретность доплата', data.codeDiscretePay, '062', 'Выезды × 650') : ''}
            ${data.code154 > 0 ? renderRow(t('row_training'), data.code154, '154', data.formulas.f154) : ''}
            ${data.code116 > 0 ? renderRow('Праздничная премия', data.code116, '116', 'МРП × 4325') : ''}

            ${data.code290 > 0 ? renderRow(t('row_med_exam'), data.code290, '290', data.formulas.f290) : ''}
            ${renderRow(t('row_total_to_issue'), data.totalGrossCalculated, '399', '')}
        `;
    }

    const detailedTaxes = document.getElementById('detailed-taxes');
    if (detailedTaxes) {
        detailedTaxes.innerHTML = `
            ${renderRow(t('tax_opv'), data.opv, '420', 'Gross × 10%')}
            ${renderRow(t('tax_vosms'), data.vosms, '425', 'Gross × 2%')}
            ${renderRow(t('tax_ipn'), data.ipn, '411', data.formulas.fIPN)}
            ${renderRow(t('tax_med_deduct'), CONFIG.MED_DEDUCT, '442', 'Fix')}
            ${data.alimonyAmount > 0 ? renderRow(t('tax_alimony'), data.alimonyAmount, 'Deduct', `Net × ${document.getElementById('alimony-percent').value}%`) : ''}
            ${data.fitnessAmount > 0 ? renderRow(t('row_fitness'), data.fitnessAmount, 'Deduct', 'Fix') : ''}
        `;
    }

    updateDonutChart(data.salaryNet, data.totalExpenses);
}

function updateDonutChart(net, expenses) {
    const svgIncome = document.getElementById('donut-segment-income');
    const svgExpenses = document.getElementById('donut-segment-expenses');
    const pctText = document.getElementById('donut-pct');
    
    if (!svgIncome || !svgExpenses || isNaN(net) || net <= 0) {
        if (pctText) pctText.textContent = '0%';
        return;
    }

    const circumference = 2 * Math.PI * 85; // ~534.07
    
    // Расходы как доля от чистой ЗП
    const expenseRatio = Math.min(expenses / net, 1);
    const freeRatio = Math.max(0, 1 - expenseRatio);

    // Устанавливаем базу (dasharray)
    svgIncome.style.strokeDasharray = `${circumference} ${circumference}`;
    svgExpenses.style.strokeDasharray = `${circumference} ${circumference}`;

    // Доход (Зеленый) всегда полный круг
    svgIncome.style.strokeDashoffset = 0;
    
    // Расходы (Красный) — сектор поверх зеленого
    // Если расходов 0, offset = circumference (круг не виден)
    // Если расходы = ЗП, offset = 0 (круг полностью перекрыт красным)
    const expensesOffset = circumference * (1 - expenseRatio);
    svgExpenses.style.strokeDashoffset = expensesOffset;

    // Процент свободных денег в центре
    const freePct = Math.round(freeRatio * 100);
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
    
    const tabs = ['calc', 'details', 'expenses', 'graphs'];
    tabs.forEach(t => {
        const el = document.getElementById(`tab-${t}`);
        if (el) el.style.display = (t === tabId) ? 'block' : 'none';
    });
    
    if (tabId === 'expenses') renderExpenses();
    if (tabId === 'graphs') renderScheduleEditor();
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
    const priority = document.getElementById('exp-priority').value;

    if (!name || isNaN(amount)) return;

    const newExpense = { 
        id: Date.now(), 
        name, 
        amount, 
        type, 
        term, 
        priority, // 'mandatory', 'optional'
        startMonth: currentState.selectedMonth, 
        isReducible: priority === 'optional' // для обратной совместимости
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
        list.innerHTML = '<div style="text-align:center; opacity:0.5; padding:20px">Список пока пуст...</div>';
        renderSavingsAnalysis([]);
        return;
    }

    const groups = {
        credit: { title: '💳 Кредиты и займы', items: [] },
        regular: { title: '🔄 Регулярные расходы', items: [] },
        once: { title: '📅 В этом месяце (Разовые)', items: [] }
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
                // Показываем разовые только если они для текущего месяца
                if (exp.type === 'once' && !isActive) return;

                html += `
                    <div class="expense-item ${exp.priority === 'optional' ? 'reducible' : ''} ${!isActive ? 'inactive' : ''} gsap-reveal">
                        <div class="expense-info">
                            <div style="display:flex; align-items:center; gap:8px">
                                <span class="expense-name">${exp.name}</span>
                                <span class="priority-badge ${exp.priority === 'mandatory' ? 'priority-mandatory' : 'priority-optional'}">
                                    ${exp.priority === 'mandatory' ? 'Обязательный' : 'Дополнительный'}
                                </span>
                                ${!isActive ? '<span class="type-badge">Завершен/Ожидает</span>' : ''}
                            </div>
                            <div class="expense-meta">
                                <span class="type-badge">${key === 'credit' ? 'Кредит' : key === 'regular' ? 'Ежемесячный' : 'Разовый'}</span>
                                ${exp.type === 'credit' ? `<span class="expense-term">Срок: ${exp.term} мес.</span>` : ''}
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:15px">
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
            <div class="savings-title">🚨 Критическая нагрузка</div>
            <div class="savings-text">Ваши расходы превысили 85% дохода, но у вас нет необязательных трат для сокращения. Рекомендуется пересмотреть бюджет.</div>
        `;
        return;
    }

    const totalPotentialSavings = optionalExpenses.reduce((sum, e) => sum + e.amount, 0);
    
    panel.style.display = 'block';
    panel.className = 'savings-card critical gsap-reveal';
    panel.innerHTML = `
        <div class="savings-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            Внимание: Перерасход!
        </div>
        <div class="savings-text">
            Ваши расходы составляют <b>${Math.round(ratio * 100)}%</b> от дохода. 
            Рекомендуем сократить <span class="savings-amount">${optionalExpenses.length} доп. трат</span>. 
            Это позволит освободить <span class="savings-amount">${formatCurrency(totalPotentialSavings)}</span>.
        </div>
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
                <div class="shift-title">Параметры смены ${shift}</div>
                <div class="editor-row">
                    <div class="field">
                        <label>Часы (всего)</label>
                        <input type="number" id="ed-${shift}-w" value="${s.w || 0}">
                    </div>
                    <div class="field">
                        <label>Ночные</label>
                        <input type="number" id="ed-${shift}-n" value="${s.n || 0}">
                    </div>
                </div>
                <div class="editor-row">
                    <div class="field">
                        <label>Праздничные часы</label>
                        <input type="number" id="ed-${shift}-h" value="${s.h || 0}">
                    </div>
                    <div class="field">
                        <label>Часы в пути</label>
                        <input type="number" id="ed-${shift}-r" value="${s.r || 0}">
                    </div>
                </div>
                <div class="editor-row">
                    <div class="field">
                        <label>Отпуск (дни)</label>
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
