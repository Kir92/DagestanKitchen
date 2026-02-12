const RecipesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
      
      {/* ========== АВАРСКИЙ ХИНКАЛ ========== */}
      <section className="scroll-mt-8" id="hinkal">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Аварский хинкал
          </h1>
          <div className="flex gap-4 text-gray-600 mb-6">
            <span className="flex items-center gap-1">⏱ 2 часа</span>
            <span className="flex items-center gap-1">🍽 6 порций</span>
            <span className="flex items-center gap-1">🔥 450 ккал</span>
          </div>
          <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden">
            <img src="/images/avarskiy-hinkal.jpg" alt="Аварский хинкал" className="w-full h-full object-cover" />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-500">Ингредиенты</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Для теста:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Мука пшеничная — 500 г</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Кефир — 250 мл</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Яйцо — 1 шт</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Сода — 1 ч. ложка</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Соль — 1 ч. ложка</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Для бульона:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Баранина (на кости) — 1 кг</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Лук репчатый — 2 шт</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Морковь — 1 шт</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Чеснок — 4 зубчика</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Лавровый лист, перец</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Для соуса:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Чеснок — 5 зубчиков</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Сметана — 200 г</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Кинза, укроп</li>
                <li className="flex items-start gap-2"><span className="text-orange-500">•</span>Соль, перец</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
          <h3 className="font-bold text-lg text-amber-800 mb-2 flex items-center gap-2">💡 Совет повара</h3>
          <p className="text-amber-700">В Аварии хинкал подают на большом блюде: сначала выкладывают хинкалины, сверху — куски мяса. Отдельно — пиала с бульоном и соус. Едят руками, макая хинкал сначала в соус, затем в бульон.</p>
        </div>
      </section>

      {/* ========== ХАЧАПУРИ ПО-АДЖАРСКИ ========== */}
      <section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="hachapuri">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Хачапури по-аджарски</h2>
          <div className="flex gap-4 text-gray-600 mb-6">
            <span className="flex items-center gap-1">⏱ 1 час</span>
            <span className="flex items-center gap-1">🍽 4 порции</span>
            <span className="flex items-center gap-1">🔥 380 ккал</span>
          </div>
          <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden">
            <img src="/images/adjarskiy-hachapuri.jpg" alt="Хачапури по-аджарски" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">📋 Ингредиенты</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-amber-600">•</span>Мука — 500 г</li>
              <li className="flex items-start gap-2"><span className="text-amber-600">•</span>Молоко — 250 мл</li>
              <li className="flex items-start gap-2"><span className="text-amber-600">•</span>Сливочное масло — 100 г</li>
              <li className="flex items-start gap-2"><span className="text-amber-600">•</span>Сыр сулугуни — 400 г</li>
              <li className="flex items-start gap-2"><span className="text-amber-600">•</span>Сыр адыгейский — 200 г</li>
              <li className="flex items-start gap-2"><span className="text-amber-600">•</span>Яйца — 5 шт (1 в тесто, 4 для подачи)</li>
              <li className="flex items-start gap-2"><span className="text-amber-600">•</span>Дрожжи сухие — 7 г</li>
              <li className="flex items-start gap-2"><span className="text-amber-600">•</span>Сахар — 1 ст. ложка</li>
              <li className="flex items-start gap-2"><span className="text-amber-600">•</span>Соль — 0.5 ч. ложки</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">👨‍🍳 Приготовление</h3>
            <ol className="space-y-4">
              <li className="flex gap-3"><span className="font-bold text-amber-600">1.</span>Замесить дрожжевое тесто, оставить на 1 час.</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">2.</span>Натереть сыры, смешать.</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">3.</span>Раскатать тесто овалом, завернуть края лодочкой.</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">4.</span>Выложить сыр, выпекать 20 мин при 200°C.</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">5.</span>Вбить яйцо в центр, запекать ещё 3-5 мин.</li>
              <li className="flex gap-3"><span className="font-bold text-amber-600">6.</span>Подавать с кусочком сливочного масла сверху.</li>
            </ol>
          </div>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
          <p className="text-amber-700">🇬🇪 Классическое аджарское хачапури едят, отрывая кусочки теста и макая в расплавленный сыр с яйцом.</p>
        </div>
      </section>

      {/* ========== ШАШЛЫК ИЗ БАРАНИНЫ ========== */}
      <section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="shashlyk">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Шашлык из баранины</h2>
          <div className="flex gap-4 text-gray-600 mb-6">
            <span>⏱ 3 часа (с маринадом)</span>
            <span>🍽 6 порций</span>
            <span>🔥 320 ккал</span>
          </div>
          <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden">
            <img src="/images/lamb-shashlik.jpg" alt="Шашлык из баранины" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">🥩 Ингредиенты</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-red-500">•</span>Баранина (задняя нога) — 2 кг</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span>Лук репчатый — 5-6 шт</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span>Зира — 1 ст. ложка</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span>Кинза — большой пучок</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span>Уксус винный — 50 мл</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span>Масло растительное — 50 мл</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span>Соль, перец — по вкусу</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">🔥 Маринад и жарка</h3>
            <ul className="space-y-3">
              <li className="flex gap-2"><span className="text-red-500 font-bold">1.</span>Нарезать мясо кусками 4-5 см.</li>
              <li className="flex gap-2"><span className="text-red-500 font-bold">2.</span>Лук нарезать кольцами, подавить с солью.</li>
              <li className="flex gap-2"><span className="text-red-500 font-bold">3.</span>Смешать мясо с луком, зирой, кинзой, уксусом.</li>
              <li className="flex gap-2"><span className="text-red-500 font-bold">4.</span>Мариновать 2-3 часа (лучше ночь).</li>
              <li className="flex gap-2"><span className="text-red-500 font-bold">5.</span>Жарить на углях 12-15 минут, поливая маринадом.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== ЛЮЛЯ-КЕБАБ ИЗ БАРАНИНЫ ========== */}
      <section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="lyulya">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Люля-кебаб из баранины</h2>
          <div className="flex gap-4 text-gray-600 mb-6">
            <span>⏱ 1.5 часа</span>
            <span>🍽 8 порций</span>
            <span>🔥 410 ккал</span>
          </div>
          <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden">
            <img src="/images/lyulya-kebab.jpg" alt="Люля-кебаб" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">🥩 Для люля-кебаб:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-red-600">•</span>Баранина (жирная) — 1.5 кг</li>
              <li className="flex items-start gap-2"><span className="text-red-600">•</span>Курдючный жир — 200 г</li>
              <li className="flex items-start gap-2"><span className="text-red-600">•</span>Лук — 4 шт</li>
              <li className="flex items-start gap-2"><span className="text-red-600">•</span>Чеснок — 5 зубчиков</li>
              <li className="flex items-start gap-2"><span className="text-red-600">•</span>Зелень (петрушка, кинза) — пучок</li>
              <li className="flex items-start gap-2"><span className="text-red-600">•</span>Базилик сухой — 1 ч. ложка</li>
              <li className="flex items-start gap-2"><span className="text-red-600">•</span>Соль, перец — по вкусу</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">🔥 Секрет идеального люля:</h3>
            <p className="text-gray-700 mb-4">Мясо пропустить через мясорубку, вымешивать фарш 15-20 минут до липкости. Охладить 1 час. Формовать на широкие шампуры, жарить над углями 10-12 минут.</p>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-700 font-medium">💡 Важно: люля-кебаб не содержит яиц и хлеба! Только мясо, жир и специи.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== СТЕЙК ТАМАГАВК ========== */}
      <section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="tomahawk">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Стейк Томагавк</h2>
          <div className="flex gap-4 text-gray-600 mb-6">
            <span>⏱ 1 час</span>
            <span>🍽 2 порции</span>
            <span>🔥 620 ккал</span>
          </div>
          <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden">
            <img src="/images/tomahawk.jpg" alt="Стейк Томагавк" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">🥩 Ингредиенты:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-amber-700">•</span>Стейк Томагавк (ребро) — 1-1.2 кг</li>
              <li className="flex items-start gap-2"><span className="text-amber-700">•</span>Соль крупная — по вкусу</li>
              <li className="flex items-start gap-2"><span className="text-amber-700">•</span>Перец чёрный — 1 ст. ложка</li>
              <li className="flex items-start gap-2"><span className="text-amber-700">•</span>Розмарин — 3 веточки</li>
              <li className="flex items-start gap-2"><span className="text-amber-700">•</span>Тимьян — 3 веточки</li>
              <li className="flex items-start gap-2"><span className="text-amber-700">•</span>Чеснок — 4 зубчика</li>
              <li className="flex items-start gap-2"><span className="text-amber-700">•</span>Сливочное масло — 80 г</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-gray-800 mb-4">🔥 Приготовление:</h3>
            <ol className="space-y-3">
              <li className="flex gap-2"><span className="font-bold text-amber-700">1.</span>Достать мясо за 1 час до готовки.</li>
              <li className="flex gap-2"><span className="font-bold text-amber-700">2.</span>Обсушить, щедро посолить, поперчить.</li>
              <li className="flex gap-2"><span className="font-bold text-amber-700">3.</span>Обжарить на сковороде-гриль по 3-4 мин каждую сторону.</li>
              <li className="flex gap-2"><span className="font-bold text-amber-700">4.</span>Добавить масло, чеснок, травы, поливать стейк 2 мин.</li>
              <li className="flex gap-2"><span className="font-bold text-amber-700">5.</span>Довести в духовке 10 мин при 180°C (medium rare).</li>
              <li className="flex gap-2"><span className="font-bold text-amber-700">6.</span>Отдохнуть 10-15 мин под фольгой.</li>
            </ol>
          </div>
        </div>
      </section>

    {/* ========== БАРНАЯ КАРТА ========== */}
<section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="bar">
  <div className="mb-8">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center gap-3">
      🍷 Барная карта
    </h2>
    <p className="text-gray-600 text-xl">Авторские коктейли, винтажные позиции и крепкий алкоголь</p>
  </div>

  {/* АВТОРСКИЕ КОКТЕЙЛИ */}
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-amber-500">
      🍸 Авторские коктейли
    </h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Коктейль 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800">Маунтин Дьюи</h4>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">450 ₽</span>
        </div>
        <p className="text-gray-600 mb-2">Бурбон, мёд, лимон, тимьян, домашняя грушевая настойка</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>18%</span>
          <span>250 мл</span>
        </div>
      </div>

      {/* Коктейль 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800">Каспийский бриз</h4>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">520 ₽</span>
        </div>
        <p className="text-gray-600 mb-2">Водка, клюквенный морс, лайм, игристое вино, розмарин</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>22%</span>
          <span>280 мл</span>
        </div>
      </div>

      {/* Коктейль 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800">Дагестанский чай</h4>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">380 ₽</span>
        </div>
        <p className="text-gray-600 mb-2">Джин, чай матча, огурец, сироп бузины, содовая</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>14%</span>
          <span>260 мл</span>
        </div>
      </div>

      {/* Коктейль 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800">Горец</h4>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">490 ₽</span>
        </div>
        <p className="text-gray-600 mb-2">Коньяк, вишнёвый ликёр, апельсин, корица, гвоздика</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>26%</span>
          <span>200 мл</span>
        </div>
      </div>

      {/* Коктейль 5 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800">Шамаханская царица</h4>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">580 ₽</span>
        </div>
        <p className="text-gray-600 mb-2">Текила, маракуйя, перец чили, лайм, агавовый сироп</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>20%</span>
          <span>240 мл</span>
        </div>
      </div>

      {/* Коктейль 6 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800">Белый джин</h4>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">530 ₽</span>
        </div>
        <p className="text-gray-600 mb-2">Джин, ликёр личи, розовая вода, лимон, белок</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>16%</span>
          <span>220 мл</span>
        </div>
      </div>
    </div>
  </div>

  {/* ВИННАЯ КАРТА */}
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-amber-500">
      🍇 Винная карта
    </h3>
    <div className="grid md:grid-cols-2 gap-6">
      {/* Красные вина */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h4 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Красные вина
        </h4>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-800">Саперави</span>
              <span className="text-gray-500 text-sm ml-2">Грузия</span>
            </div>
            <span className="font-bold text-amber-600">2 400 ₽</span>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-800">Киндзмараули</span>
              <span className="text-gray-500 text-sm ml-2">Грузия</span>
            </div>
            <span className="font-bold text-amber-600">3 200 ₽</span>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-800">Мерло</span>
              <span className="text-gray-500 text-sm ml-2">Франция</span>
            </div>
            <span className="font-bold text-amber-600">4 500 ₽</span>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-800">Каберне Совиньон</span>
              <span className="text-gray-500 text-sm ml-2">Чили</span>
            </div>
            <span className="font-bold text-amber-600">3 800 ₽</span>
          </li>
        </ul>
      </div>

      {/* Белые вина */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h4 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Белые вина
        </h4>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-800">Ркацители</span>
              <span className="text-gray-500 text-sm ml-2">Грузия</span>
            </div>
            <span className="font-bold text-amber-600">2 100 ₽</span>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-800">Цинандали</span>
              <span className="text-gray-500 text-sm ml-2">Грузия</span>
            </div>
            <span className="font-bold text-amber-600">2 800 ₽</span>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-800">Шардоне</span>
              <span className="text-gray-500 text-sm ml-2">Франция</span>
            </div>
            <span className="font-bold text-amber-600">4 200 ₽</span>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-800">Совиньон Блан</span>
              <span className="text-gray-500 text-sm ml-2">Н. Зеландия</span>
            </div>
            <span className="font-bold text-amber-600">4 900 ₽</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* КРЕПКИЙ АЛКОГОЛЬ */}
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-amber-500">
      🥃 Крепкий алкоголь
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition">
        <p className="font-bold text-lg text-gray-800">Чача</p>
        <p className="text-gray-500 text-sm mb-2">Грузия</p>
        <p className="text-amber-600 font-bold text-xl">350 ₽</p>
        <p className="text-xs text-gray-400">50 мл</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition">
        <p className="font-bold text-lg text-gray-800">Коньяк</p>
        <p className="text-gray-500 text-sm mb-2">Дагестан</p>
        <p className="text-amber-600 font-bold text-xl">400 ₽</p>
        <p className="text-xs text-gray-400">50 мл</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition">
        <p className="font-bold text-lg text-gray-800">Виски</p>
        <p className="text-gray-500 text-sm mb-2">Шотландия</p>
        <p className="text-amber-600 font-bold text-xl">650 ₽</p>
        <p className="text-xs text-gray-400">50 мл</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition">
        <p className="font-bold text-lg text-gray-800">Бурбон</p>
        <p className="text-gray-500 text-sm mb-2">США</p>
        <p className="text-amber-600 font-bold text-xl">600 ₽</p>
        <p className="text-xs text-gray-400">50 мл</p>
      </div>
    </div>
  </div>

  {/* БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ */}
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-amber-500">
      🧃 Безалкогольные коктейли
    </h3>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800">Горный мёд</h4>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">320 ₽</span>
        </div>
        <p className="text-gray-600">Мёд, лимон, имбирь, мята, содовая</p>
        <div className="text-sm text-gray-500 mt-2">280 мл</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800">Каспийский закат</h4>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">290 ₽</span>
        </div>
        <p className="text-gray-600">Гранатовый сок, апельсин, розмарин, тоник</p>
        <div className="text-sm text-gray-500 mt-2">260 мл</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-gray-800">Лезгинка</h4>
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">280 ₽</span>
        </div>
        <p className="text-gray-600">Облепиха, имбирь, яблоко, корица</p>
        <div className="text-sm text-gray-500 mt-2">240 мл</div>
      </div>
    </div>
  </div>
</section>

      {/* Навигационная панель быстрого перехода */}
      <div className="sticky bottom-8 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg flex flex-wrap justify-center gap-2 max-w-4xl mx-auto border border-gray-200">
        <a href="#hinkal" className="px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-full text-sm font-medium transition">Хинкал</a>
        <a href="#hachapuri" className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full text-sm font-medium transition">Хачапури</a>
        <a href="#shashlyk" className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-full text-sm font-medium transition">Шашлык</a>
        <a href="#lyulya" className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-full text-sm font-medium transition">Люля</a>
        <a href="#tomahawk" className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full text-sm font-medium transition">Томагавк</a>
        <a href="#bar" className="px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full text-sm font-medium transition">Бар</a>
      </div>
    </div>
  );
};

export default RecipesPage;