import {
  Mountain,
  Heart,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  Send,
  MessageCircle,
  Camera,
  Play,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
      {/* ========== ГЕРОЙ ========== */}
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/dagestan-mountains.jpg"
            alt="Горы Дагестана"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 py-20 md:py-28 px-8 text-center text-white">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            О проекте
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Добро пожаловать в
            <span className="block text-amber-400 mt-2">
              Дагестанскую кухню
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Аутентичные рецепты, вековые традиции и гостеприимство гор
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <span className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium text-sm">
              С 2015 года
            </span>
            <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium text-sm border border-white/30">
              100+ рецептов
            </span>
          </div>
        </div>
      </section>

      {/* ========== НАША ИСТОРИЯ ========== */}
      <section
        className="scroll-mt-24 grid md:grid-cols-2 gap-12 items-center"
        id="history"
      >
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight pb-3 border-b-2 border-amber-500 inline-block">
            Наша история
          </h2>
          <div className="space-y-4 text-stone-100 text-base leading-relaxed">
            <p>
              Всё началось в маленьком ауле в горах Дагестана, где бабушка
              Патимат готовила хинкал для своей большой семьи. Её руки помнили
              рецепты, которые передавались из поколения в поколение больше
              200 лет.
            </p>
            <p>
              В 2015 году мы открыли первый сайт, чтобы поделиться этими
              рецептами со всем миром. Сегодня наша кулинарная школа объединяет
              поваров из Махачкалы, Москвы и даже Нью-Йорка.
            </p>
            <p className="font-medium text-amber-300 border-l-4 border-amber-500 pl-4">
              «Горец не накроет стол, пока не убедится, что гости сыты» — это не
              просто пословица, это наш главный принцип.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-48 rounded-2xl overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dagestan-village.jpg"
                alt="Аул в горах"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-32 rounded-2xl overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dagestan-cooking.jpg"
                alt="Приготовление хинкала"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-32 rounded-2xl overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dagestan-tea.jpg"
                alt="Горский чай"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dagestan-hospitality.jpg"
                alt="Дагестанское застолье"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== ЦЕННОСТИ ========== */}
      <section
        className="scroll-mt-24 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 rounded-3xl"
        id="values"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-10 text-center">
          Наши ценности
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Mountain,
              title: "Аутентичность",
              text: "Мы собираем рецепты в этнографических экспедициях по сёлам Дагестана. Только настоящие, проверенные веками технологии.",
            },
            {
              icon: Heart,
              title: "Гостеприимство",
              text: "Для нас каждый пользователь — дорогой гость. Мы отвечаем на вопросы, помогаем с рецептами и радуемся вашим успехам на кухне.",
            },
            {
              icon: Globe,
              title: "Доступность",
              text: "Адаптируем горские рецепты так, чтобы их можно было повторить в любой точке мира из доступных продуктов.",
            },
          ].map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 mb-4">
                  <Icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== КОМАНДА ========== */}
      <section className="scroll-mt-24" id="team">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-10 pb-3 border-b-2 border-amber-500 inline-block">
          Наша команда
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              img: "/images/chef-patimat.jpg",
              name: "Патимат Алиев",
              role: "Шеф-повар, основатель",
              desc: "10 лет опыта. Хранитель семейных рецептов в 4 поколении.",
            },
            {
              img: "/images/chef-magomed.jpg",
              name: "Магомед Расулов",
              role: "Технолог-адаптатор",
              desc: "Переводит традиционные рецепты в современные форматы.",
            },
            {
              img: "/images/chef-aminat.jpg",
              name: "Аминат Гаджиева",
              role: "Редактор рецептов",
              desc: "Филолог, собиратель диалектных названий блюд и ингредиентов.",
            },
            {
              img: "/images/chef-timur.jpg",
              name: "Тимур Кадыров",
              role: "Фотограф",
              desc: "Объездил весь Дагестан, чтобы запечатлеть настоящую кухню.",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {member.name}
              </h3>
              <p className="text-amber-600 font-medium text-sm mb-2">
                {member.role}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== ЦИФРЫ ========== */}
      <section className="bg-gray-900 text-white p-8 md:p-12 rounded-3xl">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "лет традиций" },
            { value: "150", label: "аутентичных рецептов" },
            { value: "50k+", label: "довольных поваров" },
            { value: "12", label: "стран мира" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-amber-400 mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== ЭКСПЕДИЦИИ ========== */}
      <section
        className="scroll-mt-24 grid md:grid-cols-2 gap-12 items-center"
        id="expeditions"
      >
        <div className="order-2 md:order-1">
          <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dagestan-expedition.jpg"
              alt="Кулинарная экспедиция"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight pb-3 border-b-2 border-amber-500 inline-block">
            Кулинарные экспедиции
          </h2>
          <p className="text-stone-100 leading-relaxed">
            Каждое лето мы отправляемся в высокогорные аулы, чтобы записать
            рецепты, которые ещё хранят старейшины. Так мы спасаем от забвения
            уникальные технологии приготовления чуду, курзе и старинного хинкала.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "15 экспедиций",
              "40 спасённых рецептов",
              "25 бабушек-хранительниц",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== КОНТАКТЫ ========== */}
      <section
        className="scroll-mt-24 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
        id="contacts"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-10 text-center">
          Свяжитесь с нами
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              title: "Телефон",
              value: "+7 (988) 123-45-67",
              note: "Ежедневно с 10:00 до 20:00",
            },
            {
              icon: Mail,
              title: "Email",
              value: "info@dagestan-kitchen.ru",
              note: "Ответим в течение 24 часов",
            },
            {
              icon: MapPin,
              title: "Адрес",
              value: "г. Махачкала, ул. Горская, 15",
              note: "Кулинарная студия «Горец»",
            },
          ].map((contact) => {
            const Icon = contact.icon;
            return (
              <div key={contact.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 mb-4">
                  <Icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-700">{contact.value}</p>
                <p className="text-sm text-gray-500 mt-1">{contact.note}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
            Мы в социальных сетях
          </h3>
          <div className="flex justify-center gap-4">
            {[MessageCircle, Camera, Play, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-gray-50 hover:bg-amber-500 hover:text-white text-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ОТЗЫВЫ ========== */}
      <section className="scroll-mt-24" id="reviews">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-10 pb-3 border-b-2 border-amber-500 inline-block">
          Нас благодарят
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              img: "/images/review-1.jpg",
              name: "Анна Смирнова",
              city: "Москва",
              text: "Благодаря вашему сайту приготовила настоящий аварский хинкал! Муж сказал, что такого вкусного не ел даже в ресторане. Спасибо!",
            },
            {
              img: "/images/review-2.jpg",
              name: "Тимур Джабраилов",
              city: "Казань",
              text: "Очень рад, что есть проект, сохраняющий нашу культуру. Рецепт чуду с крапивой — это любовь с первой ложки!",
            },
          ].map((review) => (
            <div
              key={review.name}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">{review.city}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {review.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== ПРИГЛАШЕНИЕ ========== */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 p-10 md:p-14 rounded-3xl text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Приезжайте в гости!
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-amber-50">
          Мы проводим мастер-классы, дегустации и кулинарные туры в Дагестане.
          Научим готовить хинкал, лепить курзе и заваривать горский чай.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full font-bold transition">
            Записаться на МК
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition">
            Посмотреть туры
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;