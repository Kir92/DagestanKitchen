const IngredientsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
      
      {/* ========== ЗАГОЛОВОК ========== */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          🛒 Ингредиенты
        </h1>
        <p className="text-xl text-gray-600">
          Всё необходимое для приготовления блюд дагестанской и кавказской кухни
        </p>
      </div>

      {/* ========== АВАРСКИЙ ХИНКАЛ ========== */}
      <section className="scroll-mt-8" id="hinkal">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-orange-500 inline-block">
          Аварский хинкал
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Тесто */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥟</span>
              <h3 className="text-xl font-bold text-gray-800">Для теста</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Мука пшеничная</span> — 500 г</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Кефир</span> — 250 мл</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Яйцо</span> — 1 шт</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Сода</span> — 1 ч. ложка</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Соль</span> — 1 ч. ложка</span>
              </li>
            </ul>
          </div>

          {/* Бульон */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥣</span>
              <h3 className="text-xl font-bold text-gray-800">Для бульона</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Баранина (на кости)</span> — 1 кг</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Лук репчатый</span> — 2 шт</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Морковь</span> — 1 шт</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Чеснок</span> — 4 зубчика</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Лавровый лист, перец</span></span>
              </li>
            </ul>
          </div>

          {/* Соус */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥫</span>
              <h3 className="text-xl font-bold text-gray-800">Для соуса</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Чеснок</span> — 5 зубчиков</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Сметана</span> — 200 г</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Кинза, укроп</span> — пучок</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span><span className="font-medium">Соль, перец</span> — по вкусу</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Дополнительная информация */}
        <div className="mt-4 bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
          <p className="text-orange-700">
            <span className="font-bold">📌 Общая калорийность:</span> 450 ккал на порцию • 
            <span className="font-bold ml-2">Время приготовления:</span> 2 часа
          </p>
        </div>
      </section>

      {/* ========== ХАЧАПУРИ ПО-АДЖАРСКИ ========== */}
      <section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="hachapuri">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-amber-500 inline-block">
          Хачапури по-аджарски
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Тесто */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥐</span>
              <h3 className="text-xl font-bold text-gray-800">Для теста</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Мука пшеничная</span> — 500 г</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Молоко</span> — 250 мл</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Масло сливочное</span> — 100 г</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Дрожжи сухие</span> — 7 г</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Сахар</span> — 1 ст. ложка</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Соль</span> — 0.5 ч. ложки</span>
              </li>
            </ul>
          </div>

          {/* Начинка */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🧀</span>
              <h3 className="text-xl font-bold text-gray-800">Для начинки</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Сыр сулугуни</span> — 400 г</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Сыр адыгейский</span> — 200 г</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Яйца</span> — 4 шт (для подачи)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span><span className="font-medium">Масло сливочное</span> — 50 г (для подачи)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-amber-700">
            <span className="font-bold">📌 Общая калорийность:</span> 380 ккал на порцию • 
            <span className="font-bold ml-2">Время приготовления:</span> 1 час
          </p>
        </div>
      </section>

      {/* ========== ШАШЛЫК ИЗ БАРАНИНЫ ========== */}
      <section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="shashlyk">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-red-500 inline-block">
          Шашлык из баранины
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Мясо */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥩</span>
              <h3 className="text-xl font-bold text-gray-800">Основные ингредиенты</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><span className="font-medium">Баранина (задняя нога)</span> — 2 кг</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><span className="font-medium">Лук репчатый</span> — 5-6 шт</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><span className="font-medium">Кинза</span> — большой пучок</span>
              </li>
            </ul>
          </div>

          {/* Маринад */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🧂</span>
              <h3 className="text-xl font-bold text-gray-800">Для маринада</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><span className="font-medium">Зира</span> — 1 ст. ложка</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><span className="font-medium">Уксус винный</span> — 50 мл</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><span className="font-medium">Масло растительное</span> — 50 мл</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><span className="font-medium">Соль, перец</span> — по вкусу</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
          <p className="text-red-700">
            <span className="font-bold">📌 Общая калорийность:</span> 320 ккал на порцию • 
            <span className="font-bold ml-2">Время приготовления:</span> 3 часа (с маринадом)
          </p>
        </div>
      </section>

      {/* ========== ЛЮЛЯ-КЕБАБ ИЗ БАРАНИНЫ ========== */}
      <section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="lyulya">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-red-600 inline-block">
          Люля-кебаб из баранины
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥩</span>
              <h3 className="text-xl font-bold text-gray-800">Для фарша</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><span className="font-medium">Баранина (жирная)</span> — 1.5 кг</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><span className="font-medium">Курдючный жир</span> — 200 г</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><span className="font-medium">Лук</span> — 4 шт</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><span className="font-medium">Чеснок</span> — 5 зубчиков</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌿</span>
              <h3 className="text-xl font-bold text-gray-800">Специи и зелень</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><span className="font-medium">Петрушка</span> — пучок</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><span className="font-medium">Кинза</span> — пучок</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><span className="font-medium">Базилик сухой</span> — 1 ч. ложка</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><span className="font-medium">Соль, перец</span> — по вкусу</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
          <p className="text-red-700">
            <span className="font-bold">📌 Общая калорийность:</span> 410 ккал на порцию • 
            <span className="font-bold ml-2">Время приготовления:</span> 1.5 часа
          </p>
          <p className="text-red-600 font-medium mt-2">
            ⚠️ Важно: люля-кебаб не содержит яиц и хлеба! Только мясо, жир и специи.
          </p>
        </div>
      </section>

      {/* ========== СТЕЙК ТОМАГАВК ========== */}
      <section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="tomahawk">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-amber-700 inline-block">
          Стейк Томагавк
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥩</span>
              <h3 className="text-xl font-bold text-gray-800">Основное</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span><span className="font-medium">Стейк Томагавк (ребро)</span> — 1-1.2 кг</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span><span className="font-medium">Соль крупная</span> — по вкусу</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span><span className="font-medium">Перец чёрный</span> — 1 ст. ложка</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌿</span>
              <h3 className="text-xl font-bold text-gray-800">Ароматизаторы</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span><span className="font-medium">Розмарин</span> — 3 веточки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span><span className="font-medium">Тимьян</span> — 3 веточки</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span><span className="font-medium">Чеснок</span> — 4 зубчика</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 font-bold">•</span>
                <span><span className="font-medium">Сливочное масло</span> — 80 г</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-amber-50 border-l-4 border-amber-700 p-4 rounded-r-lg">
          <p className="text-amber-700">
            <span className="font-bold">📌 Общая калорийность:</span> 620 ккал на порцию • 
            <span className="font-bold ml-2">Время приготовления:</span> 1 час
          </p>
          <p className="text-amber-600 font-medium mt-2">
            💡 Рекомендуемая прожарка: Medium Rare
          </p>
        </div>
      </section>

      {/* ========== БАРНАЯ КАРТА ========== */}
      <section className="scroll-mt-8 pt-8 border-t-2 border-gray-200" id="bar">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-amber-500 inline-block">
          Барная карта
        </h2>
        
        <div className="space-y-8 mt-8">
          {/* Коктейли */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>🍸</span> Авторские коктейли
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Маунтин Дьюи", ingredients: "Бурбон, мёд, лимон, тимьян, грушевая настойка", price: "450 ₽" },
                { name: "Каспийский бриз", ingredients: "Водка, клюквенный морс, лайм, игристое вино, розмарин", price: "520 ₽" },
                { name: "Дагестанский чай", ingredients: "Джин, чай матча, огурец, сироп бузины, содовая", price: "380 ₽" },
                { name: "Горец", ingredients: "Коньяк, вишнёвый ликёр, апельсин, корица, гвоздика", price: "490 ₽" },
                { name: "Шамаханская царица", ingredients: "Текила, маракуйя, перец чили, лайм, агавовый сироп", price: "580 ₽" },
                { name: "Белый джин", ingredients: "Джин, ликёр личи, розовая вода, лимон, белок", price: "530 ₽" }
              ].map((cocktail, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-800">{cocktail.name}</h4>
                    <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-sm font-medium">{cocktail.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{cocktail.ingredients}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Безалкогольные */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>🧃</span> Безалкогольные
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Горный мёд", ingredients: "Мёд, лимон, имбирь, мята, содовая", price: "320 ₽" },
                { name: "Каспийский закат", ingredients: "Гранатовый сок, апельсин, розмарин, тоник", price: "290 ₽" },
                { name: "Лезгинка", ingredients: "Облепиха, имбирь, яблоко, корица", price: "280 ₽" }
              ].map((cocktail, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-800">{cocktail.name}</h4>
                    <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-sm font-medium">{cocktail.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{cocktail.ingredients}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Вина и крепкий алкоголь */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>🍷</span> Вина
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Саперави (Грузия)</span>
                  <span className="text-amber-600 font-bold">2 400 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Киндзмараули (Грузия)</span>
                  <span className="text-amber-600 font-bold">3 200 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Ркацители (Грузия)</span>
                  <span className="text-amber-600 font-bold">2 100 ₽</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>🥃</span> Крепкий алкоголь
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Чача (Грузия)</span>
                  <span className="text-amber-600 font-bold">350 ₽/50 мл</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Коньяк (Дагестан)</span>
                  <span className="text-amber-600 font-bold">400 ₽/50 мл</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Виски (Шотландия)</span>
                  <span className="text-amber-600 font-bold">650 ₽/50 мл</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== НАВИГАЦИЯ ========== */}
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

export default IngredientsPage;