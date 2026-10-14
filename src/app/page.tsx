import { Clock, UtensilsCrossed, Flame, ChefHat } from "lucide-react";

const MenuPage = () => {
  const menu = [
    {
      category: "Горячее",
      items: [
        {
          id: "hinkal",
          name: "Аварский хинкал",
          price: "650 ₽",
          desc: "Тонкое тесто, сваренное на пару, подаётся с бульоном, отварной бараниной и чесночным соусом.",
          time: "2 часа",
          portions: "6 порций",
          kcal: "450 ккал",
          image: "/images/avarskiy-hinkal.jpg",
        },
        {
          id: "kurze",
          name: "Курзе",
          price: "580 ₽",
          desc: "Дагестанские пельмени с мясом, защипанные косичкой. Подаются со сметаной или бульоном.",
          time: "1.5 часа",
          portions: "4 порции",
          kcal: "420 ккал",
          image: "/images/kurze.jpg",
        },
        {
          id: "botishal",
          name: "Ботишал",
          price: "520 ₽",
          desc: "Кумыкское блюдо — тонкое тесто с мясом, запечённое до золотистой корочки.",
          time: "1 час",
          portions: "3 порции",
          kcal: "380 ккал",
          image: "/images/botishal.jpg",
        },
        {
          id: "chudu",
          name: "Чуду",
          price: "350 ₽",
          desc: "Тонкие пироги с мясом, творогом или зеленью. Готовятся на сухой сковороде.",
          time: "40 минут",
          portions: "2 порции",
          kcal: "290 ккал",
          image: "/images/chudu.jpg",
        },
        {
          id: "dzhur",
          name: "Джур-джур",
          price: "620 ₽",
          desc: "Хинкал по-лакски — тонкие полоски теста с бараниной и чесночным соусом.",
          time: "1.5 часа",
          portions: "4 порции",
          kcal: "440 ккал",
          image: "/images/dzhur-dzhur.jpg",
        },
        {
          id: "plov",
          name: "Плов по-дагестански",
          price: "680 ₽",
          desc: "Рассыпчатый рис с бараниной, курагой и специями. Готовится в казане.",
          time: "2 часа",
          portions: "5 порций",
          kcal: "520 ккал",
          image: "/images/plov.jpg",
        },
        {
          id: "tandyr",
          name: "Тандыр-баранина",
          price: "1 200 ₽",
          desc: "Баранина, запечённая в тандыре до мягкости. Подаётся с луком и зеленью.",
          time: "3 часа",
          portions: "4 порции",
          kcal: "580 ккал",
          image: "/images/tandyr-baranina.jpg",
        },
        {
          id: "kebab-lavash",
          name: "Кебаб в лаваше",
          price: "450 ₽",
          desc: "Сочный кебаб из баранины, завёрнутый в тонкий лаваш с овощами и соусом.",
          time: "1 час",
          portions: "2 порции",
          kcal: "480 ккал",
          image: "/images/kebab-lavash.jpg",
        },
        {
          id: "shashlyk",
          name: "Шашлык из баранины",
          price: "890 ₽",
          desc: "Мясо молодого барашка, маринованное с луком, зирой и кинзой. Жарится на углях до сочной корочки.",
          time: "3 часа",
          portions: "6 порций",
          kcal: "320 ккал",
          image: "/images/lamb-shashlik.jpg",
        },
        {
          id: "lyulya",
          name: "Люля-кебаб из баранины",
          price: "720 ₽",
          desc: "Сочный фарш из баранины с курдючным жиром, луком и специями. Без яиц и хлеба.",
          time: "1.5 часа",
          portions: "8 порций",
          kcal: "410 ккал",
          image: "/images/lyulya-kebab.jpg",
        },
        {
          id: "tomahawk",
          name: "Стейк Томагавк",
          price: "3 200 ₽",
          desc: "Огромное ребро на кости, обжаренное на гриле с розмарином и тимьяном.",
          time: "1 час",
          portions: "2 порции",
          kcal: "620 ккал",
          image: "/images/tomahawk.jpg",
        },
      ],
    },
    {
      category: "Супы",
      items: [
        {
          id: "shurpa",
          name: "Шурпа",
          price: "480 ₽",
          desc: "Наваристый суп с бараниной, овощами и специями. Подаётся в казане.",
          time: "2.5 часа",
          portions: "4 порции",
          kcal: "380 ккал",
          image: "/images/shurpa.jpg",
        },
        {
          id: "hinkal-sup",
          name: "Хинкал-суп",
          price: "420 ₽",
          desc: "Лёгкий вариант хинкала — бульон с кусочками теста и бараниной.",
          time: "1.5 часа",
          portions: "4 порции",
          kcal: "320 ккал",
          image: "/images/hinkal-sup.jpg",
        },
        {
          id: "bozbash",
          name: "Бозбаш",
          price: "460 ₽",
          desc: "Гороховый суп с бараниной и овощами. Сытный и ароматный.",
          time: "2 часа",
          portions: "4 порции",
          kcal: "400 ккал",
          image: "/images/bozbash.jpg",
        },
      ],
    },
    {
      category: "Выпечка",
      items: [
        {
          id: "hachapuri",
          name: "Хачапури по-аджарски",
          price: "550 ₽",
          desc: "Лодочка из дрожжевого теста с расплавленным сулугуни, сверху — яйцо и масло.",
          time: "1 час",
          portions: "4 порции",
          kcal: "380 ккал",
          image: "/images/adjarskiy-hachapuri.jpg",
        },
        {
          id: "chudu-tvorog",
          name: "Чуду с творогом",
          price: "320 ₽",
          desc: "Тонкие пироги с творогом и зеленью. Подаются со сливочным маслом.",
          time: "40 минут",
          portions: "2 порции",
          kcal: "260 ккал",
          image: "/images/chudu-tvorog.jpg",
        },
      ],
    },
    {
      category: "Закуски",
      items: [
        {
          id: "urbech",
          name: "Урбеч с хлебом",
          price: "280 ₽",
          desc: "Паста из перетёртых орехов или семян льна. Подаётся с домашним хлебом.",
          time: "—",
          portions: "2 порции",
          kcal: "340 ккал",
          image: "/images/urbech.jpg",
        },
        {
          id: "cheese",
          name: "Сыры дагестанские",
          price: "420 ₽",
          desc: "Ассорти из чанаха и брынзы с зеленью и мёдом.",
          time: "—",
          portions: "3 порции",
          kcal: "280 ккал",
          image: "/images/dagestan-cheese.jpg",
        },
        {
          id: "pickles",
          name: "Соленья",
          price: "250 ₽",
          desc: "Домашние солёные огурцы, помидоры и капуста с луком и маслом.",
          time: "—",
          portions: "3 порции",
          kcal: "120 ккал",
          image: "/images/pickles.jpg",
        },
        {
          id: "sujuk",
          name: "Домашняя колбаса (суджук)",
          price: "480 ₽",
          desc: "Кавказская колбаса из говядины со специями. Подаётся с зеленью.",
          time: "—",
          portions: "3 порции",
          kcal: "450 ккал",
          image: "/images/sujuk.jpg",
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pt-6 pb-12 space-y-12">
      {/* ========== ЗАГОЛОВОК ========== */}
      <header className="text-center">
        <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
          Меню ресторана
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Дагестанская кухня
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Аутентичные блюда горного края — от хинкала до премиальных стейков
        </p>
      </header>

      {/* ========== КАТЕГОРИИ ========== */}
      {menu.map((section) => (
        <section key={section.category} className="scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 pb-4 border-b-2 border-amber-500 inline-block">
            {section.category}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((dish) => (
              <article
                key={dish.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Фото или заглушка */}
                <div className="h-52 overflow-hidden">
                  {dish.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                      <UtensilsCrossed className="w-16 h-16 text-amber-300" />
                    </div>
                  )}
                </div>

                {/* Контент */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {dish.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 text-gray-500 mb-4 text-xs">
                    {dish.time !== "—" && (
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        {dish.time}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />
                      {dish.portions}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-600" />
                      {dish.kcal}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-gray-900 font-mono">
                      {dish.price}
                    </span>
                    <a
                      href="/recipes"
                      className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-medium text-xs transition-colors"
                    >
                      <ChefHat className="w-4 h-4" />
                      Рецепт
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* ========== ПОДВАЛ ========== */}
      <div className="text-center pt-8 border-t border-white/10">
        <p className="text-stone-100">
          Хотите приготовить дома? Загляните в{" "}
          <a
            href="/recipes"
            className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4"
          >
            книгу рецептов
          </a>
        </p>
      </div>
    </div>
  );
};

export default MenuPage;