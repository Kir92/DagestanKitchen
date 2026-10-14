import {
  Clock,
  UtensilsCrossed,
  Flame,
  Lightbulb,
  ChefHat,
} from "lucide-react";

const RecipesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
      {/* ========== ЗАГОЛОВОК ========== */}
      <header className="text-center">
        <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
          Книга рецептов
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Готовим дома
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Пошаговые рецепты дагестанских и кавказских блюд с ингредиентами и советами повара
        </p>
      </header>

      {/* ========== АВАРСКИЙ ХИНКАЛ ========== */}
      <section className="scroll-mt-24" id="hinkal">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Аварский хинкал
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 2 часа
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 6 порций
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 450 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Для теста",
              items: [
                { name: "Мука пшеничная", amount: "500 г" },
                { name: "Кефир", amount: "250 мл" },
                { name: "Яйцо", amount: "1 шт" },
                { name: "Сода", amount: "1 ч. ложка" },
                { name: "Соль", amount: "1 ч. ложка" },
              ],
            },
            {
              title: "Для бульона",
              items: [
                { name: "Баранина (на кости)", amount: "1 кг" },
                { name: "Лук репчатый", amount: "2 шт" },
                { name: "Морковь", amount: "1 шт" },
                { name: "Чеснок", amount: "4 зубчика" },
                { name: "Лавровый лист, перец", amount: "" },
              ],
            },
            {
              title: "Для соуса",
              items: [
                { name: "Чеснок", amount: "5 зубчиков" },
                { name: "Сметана", amount: "200 г" },
                { name: "Кинза, укроп", amount: "пучок" },
                { name: "Соль, перец", amount: "по вкусу" },
              ],
            },
          ].map((group) => (
            <div
              key={group.title}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5 text-gray-600 text-sm">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2.5">
                    <span className="text-amber-500 mt-1.5 leading-none">•</span>
                    <span>
                      <span className="font-medium text-gray-800">
                        {item.name}
                      </span>
                      {item.amount && ` — ${item.amount}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-lg text-amber-900 mb-1.5">
              Совет повара
            </h3>
            <p className="text-amber-800 leading-relaxed">
              В Аварии хинкал подают на большом блюде: сначала выкладывают хинкалины, сверху — куски мяса. Отдельно — пиала с бульоном и соус. Едят руками, макая хинкал сначала в соус, затем в бульон.
            </p>
          </div>
        </div>
      </section>

      {/* ========== ХАЧАПУРИ ПО-АДЖАРСКИ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="hachapuri"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Хачапури по-аджарски
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 1 час
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 4 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 380 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Мука", amount: "500 г" },
                { name: "Молоко", amount: "250 мл" },
                { name: "Сливочное масло", amount: "100 г" },
                { name: "Сыр сулугуни", amount: "400 г" },
                { name: "Сыр адыгейский", amount: "200 г" },
                { name: "Яйца", amount: "5 шт" },
                { name: "Дрожжи сухие", amount: "7 г" },
                { name: "Сахар", amount: "1 ст. ложка" },
                { name: "Соль", amount: "0.5 ч. ложки" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Замесить дрожжевое тесто, оставить на 1 час.",
                "Натереть сыры, смешать.",
                "Раскатать тесто овалом, завернуть края лодочкой.",
                "Выложить сыр, выпекать 20 мин при 200°C.",
                "Вбить яйцо в центр, запекать ещё 3–5 мин.",
                "Подавать с кусочком сливочного масла сверху.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Классическое аджарское хачапури едят, отрывая кусочки теста и макая в расплавленный сыр с яйцом.
          </p>
        </div>
      </section>

      {/* ========== ШАШЛЫК ИЗ БАРАНИНЫ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="shashlyk"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Шашлык из баранины
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 3 часа с маринадом
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 6 порций
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 320 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Баранина (задняя нога)", amount: "2 кг" },
                { name: "Лук репчатый", amount: "5–6 шт" },
                { name: "Зира", amount: "1 ст. ложка" },
                { name: "Кинза", amount: "большой пучок" },
                { name: "Уксус винный", amount: "50 мл" },
                { name: "Масло растительное", amount: "50 мл" },
                { name: "Соль, перец", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-amber-600" />
              Маринад и жарка
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Нарезать мясо кусками 4–5 см.",
                "Лук нарезать кольцами, подавить с солью.",
                "Смешать мясо с луком, зирой, кинзой, уксусом.",
                "Мариновать 2–3 часа (лучше ночь).",
                "Жарить на углях 12–15 минут, поливая маринадом.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ========== ЛЮЛЯ-КЕБАБ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="lyulya"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Люля-кебаб из баранины
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 1.5 часа
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 8 порций
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 410 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Для люля-кебаб
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Баранина (жирная)", amount: "1.5 кг" },
                { name: "Курдючный жир", amount: "200 г" },
                { name: "Лук", amount: "4 шт" },
                { name: "Чеснок", amount: "5 зубчиков" },
                { name: "Зелень (петрушка, кинза)", amount: "пучок" },
                { name: "Базилик сухой", amount: "1 ч. ложка" },
                { name: "Соль, перец", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-amber-600" />
              Секрет идеального люля
            </h3>
            <p className="text-gray-700 leading-relaxed mb-5 text-sm">
              Мясо пропустить через мясорубку, вымешивать фарш 15–20 минут до липкости. Охладить 1 час. Формовать на широкие шампуры, жарить над углями 10–12 минут.
            </p>
            <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500">
              <p className="text-amber-800 font-medium text-sm flex gap-2">
                <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" />
                Люля-кебаб не содержит яиц и хлеба! Только мясо, жир и специи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== СТЕЙК ТОМАГАВК ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="tomahawk"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Стейк Томагавк
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 1 час
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 2 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 620 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Стейк Томагавк (ребро)", amount: "1–1.2 кг" },
                { name: "Соль крупная", amount: "по вкусу" },
                { name: "Перец чёрный", amount: "1 ст. ложка" },
                { name: "Розмарин", amount: "3 веточки" },
                { name: "Тимьян", amount: "3 веточки" },
                { name: "Чеснок", amount: "4 зубчика" },
                { name: "Сливочное масло", amount: "80 г" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Достать мясо за 1 час до готовки.",
                "Обсушить, щедро посолить, поперчить.",
                "Обжарить на сковороде-гриль по 3–4 мин каждую сторону.",
                "Добавить масло, чеснок, травы, поливать стейк 2 мин.",
                "Довести в духовке 10 мин при 180°C (medium rare).",
                "Отдохнуть 10–15 мин под фольгой.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
            {/* ========== КУРЗЕ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="kurze"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Курзе
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 1.5 часа
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 4 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 420 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Мука", amount: "400 г" },
                { name: "Яйцо", amount: "1 шт" },
                { name: "Вода", amount: "150 мл" },
                { name: "Соль", amount: "1 ч. ложка" },
                { name: "Баранина (мякоть)", amount: "500 г" },
                { name: "Лук репчатый", amount: "2 шт" },
                { name: "Зелень (кинза, укроп)", amount: "пучок" },
                { name: "Соль, перец, зира", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Замесить крутое тесто, накрыть, дать отдохнуть 30 минут.",
                "Мясо пропустить через мясорубку с луком, добавить зелень и специи.",
                "Раскатать тесто тонко, нарезать кружочки.",
                "На каждый кружок положить фарш, защипать «косичкой».",
                "Варить в подсолённой воде 10–12 минут.",
                "Подавать со сметаной или бульоном, посыпав зеленью.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Курзе — визитная карточка дагестанской кухни. Главное — косичка по краю: она не даёт соку вытечь. Тесто раскатывают как можно тоньше, чтобы курзе получились нежными.
          </p>
        </div>
      </section>

      {/* ========== БОТИШАЛ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="botishal"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Ботишал
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 1 час
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 3 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 380 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Мука", amount: "300 г" },
                { name: "Кефир", amount: "150 мл" },
                { name: "Сода", amount: "0.5 ч. ложки" },
                { name: "Соль", amount: "по вкусу" },
                { name: "Творог", amount: "300 г" },
                { name: "Картофель", amount: "2 шт" },
                { name: "Сыр", amount: "100 г" },
                { name: "Зелень", amount: "пучок" },
                { name: "Сливочное масло", amount: "50 г" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Замесить тесто на кефире с содой и солью, дать отдохнуть 20 минут.",
                "Картофель отварить, размять, смешать с творогом, сыром и зеленью.",
                "Раскатать тесто тонким слоем, выложить начинку.",
                "Защипать края или накрыть вторым слоем теста.",
                "Обжарить на сухой сковороде по 3–4 минуты с каждой стороны.",
                "Смазать сливочным маслом, подавать горячим.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Ботишал — кумыкское блюдо, похожее на большой закрытый пирог с начинкой. Тесто должно быть тонким, а начинка — сочной. Подают, разрезав на куски, со сметаной.
          </p>
        </div>
      </section>

      {/* ========== ЧУДУ С МЯСОМ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="chudu"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Чуду с мясом
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 40 минут
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 2 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 290 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Мука", amount: "300 г" },
                { name: "Вода", amount: "150 мл" },
                { name: "Соль", amount: "0.5 ч. ложки" },
                { name: "Баранина или говядина", amount: "300 г" },
                { name: "Лук репчатый", amount: "2 шт" },
                { name: "Зелень", amount: "пучок" },
                { name: "Соль, перец", amount: "по вкусу" },
                { name: "Сливочное масло", amount: "для смазки" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Замесить мягкое тесто, накрыть, дать отдохнуть 20 минут.",
                "Мясо мелко порубить или пропустить через мясорубку с луком.",
                "Добавить зелень, соль, перец — перемешать.",
                "Раскатать тонкие лепёшки, на одну выложить фарш, накрыть второй.",
                "Защипать края, обрезать лишнее.",
                "Обжарить на сухой сковороде по 2–3 минуты с каждой стороны.",
                "Смазать маслом, подавать горячим.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Чуду — тонкие пироги, которые готовятся на сухой сковороде без масла. Тесто должно быть очень тонким, чтобы чуду получились хрустящими. Едят руками, макая в сметану.
          </p>
        </div>
      </section>

      {/* ========== ДЖУР-ДЖУР ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="dzhur"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Джур-джур
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 1.5 часа
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 4 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 440 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Мука", amount: "400 г" },
                { name: "Вода", amount: "180 мл" },
                { name: "Соль", amount: "1 ч. ложка" },
                { name: "Баранина (на кости)", amount: "700 г" },
                { name: "Лук репчатый", amount: "2 шт" },
                { name: "Чеснок", amount: "5 зубчиков" },
                { name: "Лавровый лист", amount: "2 шт" },
                { name: "Соль, перец", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Сварить наваристый бульон из баранины с луком и лавровым листом (1.5 часа).",
                "Замесить крутое тесто, дать отдохнуть 30 минут.",
                "Раскатать тесто тонко, нарезать полосками шириной 1–1.5 см.",
                "Бульон процедить, мясо разобрать на куски.",
                "Полоски теста отварить в бульоне 3–4 минуты.",
                "Чеснок растолочь с солью, развести бульоном — это соус.",
                "Подавать: тесто, мясо, соус, бульон в отдельной пиале.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Джур-джур — лакский вариант хинкала. Название происходит от звука, который издаёт кипящий бульон. Тесто нарезают полосками, а не ромбами, как в аварском хинкале.
          </p>
        </div>
      </section>

      {/* ========== ПЛОВ ПО-ДАГЕСТАНСКИ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="plov"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Плов по-дагестански
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 2 часа
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 5 порций
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 520 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Рис (девзира или басмати)", amount: "500 г" },
                { name: "Баранина", amount: "700 г" },
                { name: "Морковь", amount: "3 шт" },
                { name: "Лук репчатый", amount: "2 шт" },
                { name: "Курага", amount: "100 г" },
                { name: "Чеснок", amount: "1 головка" },
                { name: "Зира, барбарис", amount: "по 1 ч. ложке" },
                { name: "Масло растительное", amount: "100 мл" },
                { name: "Соль, перец", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Рис промыть, замочить на 30 минут.",
                "В казане разогреть масло, обжарить мясо до корочки.",
                "Добавить лук, морковь — обжарить 5 минут.",
                "Влить воду, добавить курагу, специи, тушить 40 минут.",
                "Сверху выложить рис, влить кипяток на 2 см выше риса.",
                "Воткнуть головку чеснока, накрыть, готовить на малом огне 20 минут.",
                "Дать настояться 10 минут, перемешать.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Дагестанский плов отличается от узбекского: добавляют курагу и барбарис, а рис готовят отдельно от мяса, чтобы он остался рассыпчатым. Подают на большом блюде, украсив курагой.
          </p>
        </div>
      </section>
            {/* ========== ТАНДЫР-БАРАНИНА ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="tandyr"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Тандыр-баранина
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 3 часа
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 4 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 580 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Баранина (лопатка или окорок)", amount: "1.5 кг" },
                { name: "Лук репчатый", amount: "3 шт" },
                { name: "Чеснок", amount: "1 головка" },
                { name: "Зира", amount: "1 ст. ложка" },
                { name: "Розмарин", amount: "2 веточки" },
                { name: "Соль крупная", amount: "по вкусу" },
                { name: "Перец чёрный", amount: "1 ч. ложка" },
                { name: "Масло растительное", amount: "50 мл" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Баранину натереть солью, перцем, зирой и чесноком.",
                "Оставить мариноваться 1 час при комнатной температуре.",
                "Разогреть тандыр или духовку до 200°C.",
                "Подвесить мясо в тандыр (или положить на решётку в духовке).",
                "Запекать 2 часа, периодически поливая соком.",
                "Дать отдохнуть 15 минут под фольгой.",
                "Подавать с луком, зеленью и лепёшкой.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Тандыр — глиняная печь, в которой мясо приобретает особый аромат дыма. Если тандыра нет, можно использовать духовку с решёткой и поддоном с водой внизу.
          </p>
        </div>
      </section>

      {/* ========== КЕБАБ В ЛАВАШЕ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="kebab-lavash"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Кебаб в лаваше
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 1 час
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 2 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 480 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Баранина (мякоть)", amount: "500 г" },
                { name: "Лук репчатый", amount: "2 шт" },
                { name: "Зелень (кинза, петрушка)", amount: "пучок" },
                { name: "Лаваш тонкий", amount: "2 шт" },
                { name: "Помидоры", amount: "2 шт" },
                { name: "Огурцы маринованные", amount: "2 шт" },
                { name: "Соус (чесночный или томатный)", amount: "по вкусу" },
                { name: "Соль, перец, зира", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Мясо мелко нарубить ножом или пропустить через мясорубку.",
                "Добавить лук, зелень, специи — вымешать фарш.",
                "Сформировать колбаски, обжарить на гриле или сковороде.",
                "Лаваш смазать соусом, выложить кебаб.",
                "Добавить помидоры, огурцы, зелень.",
                "Завернуть плотно, обжарить на сухой сковороде 1–2 минуты с каждой стороны.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Секрет сочного кебаба — рубленое, а не молотое мясо. Если рубить ножом, фарш сохранит текстуру и будет сочнее. Лаваш лучше брать тонкий, армянский.
          </p>
        </div>
      </section>

      {/* ========== ШУРПА ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="shurpa"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Шурпа
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 2.5 часа
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 4 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 380 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Баранина (на кости)", amount: "800 г" },
                { name: "Картофель", amount: "4 шт" },
                { name: "Морковь", amount: "2 шт" },
                { name: "Лук репчатый", amount: "2 шт" },
                { name: "Помидоры", amount: "2 шт" },
                { name: "Болгарский перец", amount: "1 шт" },
                { name: "Чеснок", amount: "4 зубчика" },
                { name: "Зелень (кинза, укроп)", amount: "пучок" },
                { name: "Лавровый лист, зира, соль", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Баранину залить холодной водой, довести до кипения.",
                "Снять пену, варить на малом огне 1.5 часа.",
                "Добавить лук, морковь, помидоры — варить 20 минут.",
                "Добавить картофель, болгарский перец — варить 15 минут.",
                "Добавить специи, чеснок, лавровый лист.",
                "Варить ещё 5 минут, снять с огня.",
                "Дать настояться 15 минут, посыпать зеленью.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Шурпа — наваристый суп, который варят в казане на открытом огне. Чем дольше варится бульон, тем насыщеннее вкус. Подают в глубоких пиалах с большим количеством зелени.
          </p>
        </div>
      </section>

      {/* ========== ХИНКАЛ-СУП ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="hinkal-sup"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Хинкал-суп
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 1.5 часа
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 4 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 320 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Мука", amount: "300 г" },
                { name: "Кефир", amount: "150 мл" },
                { name: "Яйцо", amount: "1 шт" },
                { name: "Сода", amount: "0.5 ч. ложки" },
                { name: "Баранина (на кости)", amount: "500 г" },
                { name: "Лук репчатый", amount: "1 шт" },
                { name: "Морковь", amount: "1 шт" },
                { name: "Чеснок", amount: "3 зубчика" },
                { name: "Соль, перец, лавровый лист", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Сварить бульон из баранины с луком и морковью (1 час).",
                "Замесить тесто на кефире с яйцом, содой и солью.",
                "Раскатать тесто, нарезать ромбами или полосками.",
                "Бульон процедить, мясо разобрать.",
                "В кипящий бульон опустить тесто, варить 5 минут.",
                "Добавить мясо, чеснок, специи.",
                "Подавать в глубокой пиале, посыпав зеленью.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Хинкал-суп — лёгкий вариант традиционного хинкала: тесто варится прямо в бульоне, получается сытный суп. Подают в пиалах, отдельно — чесночный соус.
          </p>
        </div>
      </section>

      {/* ========== БОЗБАШ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="bozbash"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Бозбаш
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 2 часа
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 4 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 400 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Баранина (на кости)", amount: "700 г" },
                { name: "Горох (нут или колотый)", amount: "200 г" },
                { name: "Картофель", amount: "3 шт" },
                { name: "Морковь", amount: "1 шт" },
                { name: "Лук репчатый", amount: "2 шт" },
                { name: "Помидоры", amount: "2 шт" },
                { name: "Курага", amount: "50 г" },
                { name: "Зелень, специи", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Горох замочить на ночь (если нут) или промыть (если колотый).",
                "Баранину залить водой, довести до кипения, снять пену.",
                "Добавить горох, варить 1 час на малом огне.",
                "Добавить лук, морковь, помидоры — варить 20 минут.",
                "Добавить картофель и курагу — варить 15 минут.",
                "Добавить специи, зелень, варить 5 минут.",
                "Дать настояться 10 минут под крышкой.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Бозбаш — сытный гороховый суп с бараниной. В Дагестане его часто готовят зимой. Курага добавляет сладковатую нотку, которая оттеняет насыщенный бульон.
          </p>
        </div>
      </section>

      {/* ========== ЧУДУ С ТВОРОГОМ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="chudu-tvorog"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Чуду с творогом
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 40 минут
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 2 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 260 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Мука", amount: "300 г" },
                { name: "Вода", amount: "150 мл" },
                { name: "Соль", amount: "0.5 ч. ложки" },
                { name: "Творог", amount: "400 г" },
                { name: "Яйцо", amount: "1 шт" },
                { name: "Зелень (укроп, петрушка)", amount: "пучок" },
                { name: "Сливочное масло", amount: "для смазки" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Замесить мягкое тесто, накрыть, дать отдохнуть 20 минут.",
                "Творог смешать с яйцом, зеленью и солью.",
                "Раскатать тонкие лепёшки, на одну выложить начинку.",
                "Накрыть второй лепёшкой, защипать края.",
                "Обжарить на сухой сковороде по 2–3 минуты с каждой стороны.",
                "Смазать сливочным маслом, подавать горячим.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Чуду с творогом — вариант для тех, кто не ест мясо. Начинка должна быть не слишком влажной, иначе тесто порвётся. Творог лучше брать сухой, домашний.
          </p>
        </div>
      </section>

      {/* ========== УРБЕЧ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="urbech"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Урбеч с хлебом
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 2 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 340 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Урбеч (из льна, абрикосовых косточек или орехов)", amount: "150 г" },
                { name: "Домашний хлеб или лепёшка", amount: "4 куска" },
                { name: "Мёд", amount: "по вкусу" },
                { name: "Сливочное масло", amount: "по вкусу" },
                { name: "Зелень для подачи", amount: "по желанию" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Подача
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Урбеч переложить в небольшую пиалу.",
                "Если паста густая — разбавить тёплой водой до нужной консистенции.",
                "Хлеб нарезать ломтями, подсушить на сухой сковороде.",
                "Смазать хлеб сливочным маслом, сверху — урбеч.",
                "Полить мёдом, подавать с зелёным чаем.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Урбеч — традиционная дагестанская паста из перетёртых семян или орехов. Готовится на каменных жерновах, без добавок. Особенно ценятся урбеч из льна и абрикосовых косточек.
          </p>
        </div>
      </section>

      {/* ========== СЫРЫ ДАГЕСТАНСКИЕ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="cheese"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Сыры дагестанские
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 3 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 280 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Состав ассорти
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Сыр чанах", amount: "150 г" },
                { name: "Сыр брынза", amount: "150 г" },
                { name: "Домашний творожный сыр", amount: "100 г" },
                { name: "Мёд", amount: "2 ст. ложки" },
                { name: "Грецкие орехи", amount: "50 г" },
                { name: "Зелень (кинза, петрушка)", amount: "пучок" },
                { name: "Лепёшка или лаваш", amount: "для подачи" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Подача
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Сыры нарезать тонкими ломтиками или кубиками.",
                "Выложить на большое плоское блюдо в виде ассорти.",
                "Добавить грецкие орехи и зелень.",
                "Полить мёдом (часть сыров — отдельно, чтобы не смешивать вкусы).",
                "Подавать с лепёшкой или лавашом.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Чанах — рассольный сыр, который готовят в Дагестане веками. Он плотный, солёный, отлично сочетается с мёдом и орехами. Брынза — более мягкий и нежный вариант.
          </p>
        </div>
      </section>

      {/* ========== СОЛЕНЬЯ ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="pickles"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Соленья
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 3 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 120 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Огурцы солёные", amount: "3 шт" },
                { name: "Помидоры солёные", amount: "3 шт" },
                { name: "Капуста квашеная", amount: "200 г" },
                { name: "Лук репчатый", amount: "1 шт" },
                { name: "Масло растительное", amount: "3 ст. ложки" },
                { name: "Зелень (укроп, петрушка)", amount: "пучок" },
                { name: "Перец чёрный", amount: "по вкусу" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Подача
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Огурцы и помидоры нарезать крупными кусками.",
                "Капусту слегка отжать от рассола.",
                "Лук нарезать тонкими полукольцами.",
                "Всё смешать в большой миске.",
                "Заправить маслом, поперчить, посыпать зеленью.",
                "Подавать как закуску к горячим блюдам.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            В Дагестане соленья готовят в бочках, с добавлением чеснока, хрена и зелени. Подают как закуску к хинкалу, шашлыку и другим горячим блюдам.
          </p>
        </div>
      </section>

      {/* ========== ДОМАШНЯЯ КОЛБАСА (СУДЖУК) ========== */}
      <section
        className="scroll-mt-24 pt-16 border-t border-gray-200"
        id="sujuk"
      >
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5 pb-3 border-b-2 border-amber-500 inline-block">
            Домашняя колбаса (суджук)
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" /> 3 дня
            </span>
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-600" /> 3 порции
            </span>
            <span className="inline-flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" /> 450 ккал
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Ингредиенты
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {[
                { name: "Говядина (жирная)", amount: "1 кг" },
                { name: "Курдючный жир", amount: "200 г" },
                { name: "Чеснок", amount: "5 зубчиков" },
                { name: "Соль нитритная", amount: "20 г" },
                { name: "Перец чёрный", amount: "1 ст. ложка" },
                { name: "Зира", amount: "1 ч. ложка" },
                { name: "Кишки (натуральные)", amount: "1 м" },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1.5 leading-none">•</span>
                  <span>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    — {item.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-xl text-gray-900 mb-5 flex items-center gap-2.5">
              <ChefHat className="w-5 h-5 text-amber-600" />
              Приготовление
            </h3>
            <ol className="space-y-3.5 text-gray-700 text-sm">
              {[
                "Мясо и жир пропустить через мясорубку с крупной решёткой.",
                "Добавить чеснок, соль, перец, зиру — вымешать.",
                "Оставить фарш в холодильнике на 12 часов.",
                "Набить фаршем кишки, перевязать.",
                "Подвесить в прохладном месте на 2–3 дня для подсушивания.",
                "Готовый суджук нарезать тонкими ломтиками.",
                "Подавать как закуску с зеленью и лепёшкой.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Суджук — традиционная кавказская колбаса. В Дагестане его готовят из говядины с курдючным жиром, добавляя зиру и чеснок. Вялится в проветриваемом месте, при температуре 5–10°C.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RecipesPage;