import { Wine, Martini, Beer, GlassWater } from "lucide-react";

const BarPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* ========== ЗАГОЛОВОК ========== */}
      <header className="text-center">
        <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
          Напитки
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4 flex items-center justify-center gap-3">
          <Wine className="w-9 h-9 text-amber-600" />
          Барная карта
        </h1>
        <p className="text-gray-600 text-lg">
          Авторские коктейли, винтажные позиции и крепкий алкоголь
        </p>
      </header>

      {/* ========== АВТОРСКИЕ КОКТЕЙЛИ ========== */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-amber-500 flex items-center gap-3">
          <Martini className="w-6 h-6 text-amber-600" />
          Авторские коктейли
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              name: "Маунтин Дьюи",
              price: "450 ₽",
              desc: "Бурбон, мёд, лимон, тимьян, домашняя грушевая настойка",
              abv: "18%",
              vol: "250 мл",
            },
            {
              name: "Каспийский бриз",
              price: "520 ₽",
              desc: "Водка, клюквенный морс, лайм, игристое вино, розмарин",
              abv: "22%",
              vol: "280 мл",
            },
            {
              name: "Дагестанский чай",
              price: "380 ₽",
              desc: "Джин, чай матча, огурец, сироп бузины, содовая",
              abv: "14%",
              vol: "260 мл",
            },
            {
              name: "Горец",
              price: "490 ₽",
              desc: "Коньяк, вишнёвый ликёр, апельсин, корица, гвоздика",
              abv: "26%",
              vol: "200 мл",
            },
            {
              name: "Шамаханская царица",
              price: "580 ₽",
              desc: "Текила, маракуйя, перец чили, лайм, агавовый сироп",
              abv: "20%",
              vol: "240 мл",
            },
            {
              name: "Белый джин",
              price: "530 ₽",
              desc: "Джин, ликёр личи, розовая вода, лимон, белок",
              abv: "16%",
              vol: "220 мл",
            },
          ].map((cocktail) => (
            <div
              key={cocktail.name}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-3 mb-3">
                <h4 className="text-lg font-bold text-gray-900">
                  {cocktail.name}
                </h4>
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {cocktail.price}
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {cocktail.desc}
              </p>
              <div className="flex justify-between text-xs text-gray-400 font-mono">
                <span>{cocktail.abv}</span>
                <span>{cocktail.vol}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== ВИННАЯ КАРТА ========== */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-amber-500 flex items-center gap-3">
          <Wine className="w-6 h-6 text-amber-600" />
          Винная карта
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Красные вина",
              wines: [
                { name: "Саперави", region: "Грузия", price: "2 400 ₽" },
                { name: "Киндзмараули", region: "Грузия", price: "3 200 ₽" },
                { name: "Мерло", region: "Франция", price: "4 500 ₽" },
                { name: "Каберне Совиньон", region: "Чили", price: "3 800 ₽" },
              ],
            },
            {
              title: "Белые вина",
              wines: [
                { name: "Ркацители", region: "Грузия", price: "2 100 ₽" },
                { name: "Цинандали", region: "Грузия", price: "2 800 ₽" },
                { name: "Шардоне", region: "Франция", price: "4 200 ₽" },
                { name: "Совиньон Блан", region: "Н. Зеландия", price: "4 900 ₽" },
              ],
            },
          ].map((group) => (
            <div
              key={group.title}
              className="bg-white border border-gray-100 p-7 rounded-2xl shadow-sm"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100">
                {group.title}
              </h4>
              <ul className="space-y-3.5">
                {group.wines.map((wine) => (
                  <li
                    key={wine.name}
                    className="flex justify-between items-center gap-3"
                  >
                    <div>
                      <span className="font-medium text-gray-900">
                        {wine.name}
                      </span>
                      <span className="text-gray-400 text-sm ml-2">
                        {wine.region}
                      </span>
                    </div>
                    <span className="font-bold text-amber-600 font-mono text-sm whitespace-nowrap">
                      {wine.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========== КРЕПКИЙ АЛКОГОЛЬ ========== */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-amber-500 flex items-center gap-3">
          <Beer className="w-6 h-6 text-amber-600" />
          Крепкий алкоголь
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Чача", region: "Грузия", price: "350 ₽" },
            { name: "Коньяк", region: "Дагестан", price: "400 ₽" },
            { name: "Виски", region: "Шотландия", price: "650 ₽" },
            { name: "Бурбон", region: "США", price: "600 ₽" },
          ].map((drink) => (
            <div
              key={drink.name}
              className="bg-white border border-gray-100 p-5 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <p className="font-bold text-lg text-gray-900">{drink.name}</p>
              <p className="text-gray-400 text-sm mb-3">{drink.region}</p>
              <p className="text-amber-600 font-bold text-xl font-mono">
                {drink.price}
              </p>
              <p className="text-xs text-gray-400 mt-1">50 мл</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ ========== */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-amber-500 flex items-center gap-3">
          <GlassWater className="w-6 h-6 text-amber-600" />
          Безалкогольные коктейли
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              name: "Горный мёд",
              price: "320 ₽",
              desc: "Мёд, лимон, имбирь, мята, содовая",
              vol: "280 мл",
            },
            {
              name: "Каспийский закат",
              price: "290 ₽",
              desc: "Гранатовый сок, апельсин, розмарин, тоник",
              vol: "260 мл",
            },
            {
              name: "Лезгинка",
              price: "280 ₽",
              desc: "Облепиха, имбирь, яблоко, корица",
              vol: "240 мл",
            },
          ].map((drink) => (
            <div
              key={drink.name}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-3 mb-3">
                <h4 className="text-lg font-bold text-gray-900">
                  {drink.name}
                </h4>
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {drink.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {drink.desc}
              </p>
              <p className="text-xs text-gray-400 font-mono">{drink.vol}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BarPage;