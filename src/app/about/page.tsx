const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
      
      {/* ========== ГЕРОЙ СЕКЦИЯ ========== */}
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/dagestan-mountains.jpg" 
            alt="Горы Дагестана" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 py-20 md:py-28 px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Добро пожаловать в
            <span className="block text-amber-400 mt-2">Дагестанскую кухню</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Аутентичные рецепты, вековые традиции и гостеприимство гор
          </p>
          <div className="flex gap-4 justify-center mt-10">
            <span className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium">🏔️ С 2015 года</span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium border border-white/30">
              👨‍🍳 100+ рецептов
            </span>
          </div>
        </div>
      </section>

      {/* ========== НАША ИСТОРИЯ ========== */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 pb-3 border-b-4 border-amber-500 inline-block">
            Наша история
          </h2>
          <div className="space-y-4 text-gray-600 text-lg">
            <p>
              Всё началось в маленьком ауле в горах Дагестана, где бабушка Патимат 
              готовила хинкал для своей большой семьи. Её руки помнили рецепты, 
              которые передавались из поколения в поколение больше 200 лет.
            </p>
            <p>
              В 2015 году мы открыли первый сайт, чтобы поделиться этими рецептами 
              со всем миром. Сегодня наша кулинарная школа объединяет поваров из 
              Махачкалы, Москвы и даже Нью-Йорка.
            </p>
            <p className="font-medium text-amber-600">
              «Горец не накроет стол, пока не убедится, что гости сыты» — 
              это не просто пословица, это наш главный принцип.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-gray-300 h-48 rounded-xl overflow-hidden shadow-lg">
              <img src="/images/dagestan-village.jpg" alt="Аул в горах" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-300 h-32 rounded-xl overflow-hidden shadow-lg">
              <img src="/images/dagestan-cooking.jpg" alt="Приготовление хинкала" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="bg-gray-300 h-32 rounded-xl overflow-hidden shadow-lg">
              <img src="/images/dagestan-tea.jpg" alt="Горский чай" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-300 h-48 rounded-xl overflow-hidden shadow-lg">
              <img src="/images/dagestan-hospitality.jpg" alt="Дагестанское застолье" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== НАШИ ЦЕННОСТИ ========== */}
      <section className="bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Наши ценности
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="text-5xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Аутентичность</h3>
            <p className="text-gray-600">
              Мы собираем рецепты в этнографических экспедициях по сёлам Дагестана. 
              Только настоящие, проверенные веками технологии.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Гостеприимство</h3>
            <p className="text-gray-600">
              Для нас каждый пользователь — дорогой гость. Мы отвечаем на вопросы, 
              помогаем с рецептами и радуемся вашим успехам на кухне.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Доступность</h3>
            <p className="text-gray-600">
              Адаптируем горские рецепты так, чтобы их можно было повторить 
              в любой точке мира из доступных продуктов.
            </p>
          </div>
        </div>
      </section>

      {/* ========== НАША КОМАНДА ========== */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 pb-3 border-b-4 border-amber-500 inline-block">
          Наша команда
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {/* Шеф-повар */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-200">
              <img src="/images/chef-patimat.jpg" alt="Патимат" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Патимат Алиев</h3>
            <p className="text-amber-600 font-medium mb-2">Шеф-повар, основатель</p>
            <p className="text-gray-500 text-sm">
              10 лет опыта. Хранитель семейных рецептов в 4 поколении.
            </p>
          </div>
          
          {/* Технолог */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-200">
              <img src="/images/chef-magomed.jpg" alt="Магомед" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Магомед Расулов</h3>
            <p className="text-amber-600 font-medium mb-2">Технолог-адаптатор</p>
            <p className="text-gray-500 text-sm">
              Переводит традиционные рецепты в современные форматы.
            </p>
          </div>
          
          {/* Редактор */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-200">
              <img src="/images/chef-aminat.jpg" alt="Аминат" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Аминат Гаджиева</h3>
            <p className="text-amber-600 font-medium mb-2">Редактор рецептов</p>
            <p className="text-gray-500 text-sm">
              Филолог, собиратель диалектных названий блюд и ингредиентов.
            </p>
          </div>
          
          {/* Фотограф */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-200">
              <img src="/images/chef-timur.jpg" alt="Тимур" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Тимур Кадыров</h3>
            <p className="text-amber-600 font-medium mb-2">Фотограф</p>
            <p className="text-gray-500 text-sm">
              Объездил весь Дагестан, чтобы запечатлеть настоящую кухню.
            </p>
          </div>
        </div>
      </section>

      {/* ========== ЦИФРЫ И ФАКТЫ ========== */}
      <section className="bg-gray-900 text-white p-8 md:p-12 rounded-3xl">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-amber-400 mb-2">200+</div>
            <div className="text-gray-300">лет традиций</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-400 mb-2">150</div>
            <div className="text-gray-300">аутентичных рецептов</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-400 mb-2">50k+</div>
            <div className="text-gray-300">довольных поваров</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-400 mb-2">12</div>
            <div className="text-gray-300">стран мира</div>
          </div>
        </div>
      </section>

      {/* ========== КУЛИНАРНЫЕ ЭКСПЕДИЦИИ ========== */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="bg-gray-300 h-80 rounded-2xl overflow-hidden shadow-xl">
            <img src="/images/dagestan-expedition.jpg" alt="Кулинарная экспедиция" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 pb-3 border-b-4 border-amber-500 inline-block">
            Кулинарные экспедиции
          </h2>
          <p className="text-gray-600 text-lg">
            Каждое лето мы отправляемся в высокогорные аулы, чтобы записать рецепты, 
            которые ещё хранят старейшины. Так мы спасаем от забвения уникальные 
            технологии приготовления чуду, курзе и старинного хинкала.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              🏔️ 15 экспедиций
            </span>
            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              📜 40 спасённых рецептов
            </span>
            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              👵 25 бабушек-хранительниц
            </span>
          </div>
        </div>
      </section>

      {/* ========== КОНТАКТЫ ========== */}
      <section className="bg-white p-8 md:p-12 rounded-3xl shadow-md border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Свяжитесь с нами
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Телефон */}
          <div className="text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-gray-800 mb-2">Телефон</h3>
            <p className="text-gray-600">+7 (988) 123-45-67</p>
            <p className="text-sm text-gray-500 mt-1">Ежедневно с 10:00 до 20:00</p>
          </div>
          
          {/* Email */}
          <div className="text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">info@dagestan-kitchen.ru</p>
            <p className="text-sm text-gray-500 mt-1">Ответим в течение 24 часов</p>
          </div>
          
          {/* Адрес */}
          <div className="text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-bold text-gray-800 mb-2">Адрес</h3>
            <p className="text-gray-600">г. Махачкала, ул. Горская, 15</p>
            <p className="text-sm text-gray-500 mt-1">Кулинарная студия "Горец"</p>
          </div>
        </div>
        
        {/* Социальные сети */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Мы в социальных сетях
          </h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-gray-100 hover:bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition">
              📘
            </a>
            <a href="#" className="bg-gray-100 hover:bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition">
              📷
            </a>
            <a href="#" className="bg-gray-100 hover:bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition">
              🎬
            </a>
            <a href="#" className="bg-gray-100 hover:bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition">
              📱
            </a>
          </div>
        </div>
      </section>

      {/* ========== ОТЗЫВЫ ========== */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 pb-3 border-b-4 border-amber-500 inline-block">
          Нас благодарят
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Отзыв 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                <img src="/images/review-1.jpg" alt="Анна" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-800">Анна Смирнова</h4>
                  <span className="text-amber-500 text-sm">★ ★ ★ ★ ★</span>
                </div>
                <p className="text-gray-500 text-sm mb-2">Москва</p>
                <p className="text-gray-600">
                  "Благодаря вашему сайту приготовила настоящий аварский хинкал! 
                  Муж сказал, что такого вкусного не ел даже в ресторане. Спасибо!"
                </p>
              </div>
            </div>
          </div>
          
          {/* Отзыв 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                <img src="/images/review-2.jpg" alt="Тимур" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-800">Тимур Джабраилов</h4>
                  <span className="text-amber-500 text-sm">★ ★ ★ ★ ★</span>
                </div>
                <p className="text-gray-500 text-sm mb-2">Казань</p>
                <p className="text-gray-600">
                  "Очень рад, что есть проект, сохраняющий нашу культуру. 
                  Рецепт чуду с крапивой — это любовь с первой ложки!"
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition">
            Оставить отзыв
          </button>
        </div>
      </section>

      {/* ========== ПРИГЛАШЕНИЕ ========== */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 p-12 rounded-3xl text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Приезжайте в гости!
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Мы проводим мастер-классы, дегустации и кулинарные туры в Дагестане. 
          Научим готовить хинкал, лепить курзе и заваривать горский чай.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition">
            Записаться на МК
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition">
            Посмотреть туры
          </button>
        </div>
      </section>

      {/* ========== НАВИГАЦИЯ ========== */}
      <div className="sticky bottom-8 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg flex flex-wrap justify-center gap-2 max-w-4xl mx-auto border border-gray-200">
        <a href="#history" className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full text-sm font-medium transition">История</a>
        <a href="#values" className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full text-sm font-medium transition">Ценности</a>
        <a href="#team" className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full text-sm font-medium transition">Команда</a>
        <a href="#expeditions" className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full text-sm font-medium transition">Экспедиции</a>
        <a href="#contacts" className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full text-sm font-medium transition">Контакты</a>
        <a href="#reviews" className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full text-sm font-medium transition">Отзывы</a>
      </div>
    </div>
  );
};

export default AboutPage;