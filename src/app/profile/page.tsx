import { auth } from "@/auth/auth";
import { redirect } from "next/navigation";
import prisma from "@/utils/prisma";
import Link from "next/link";
import {
  QrCode,
  Award,
  Coins,
  TrendingUp,
  Clock,
  LogOut,
  Home,
  Sparkles,
} from "lucide-react";

// Демо-данные для заглушки (потом заменим на реальные из БД)
const DEMO_LOYALTY = {
  points: 2450,
  totalSpent: 12400,
  level: "silver" as const,
  nextLevel: "gold" as const,
  nextThreshold: 20000,
};

const LEVELS = {
  bronze: {
    name: "Гость",
    emoji: "🥉",
    gradient: "from-amber-800 via-amber-700 to-amber-600",
    text: "text-amber-100",
  },
  silver: {
    name: "Друг",
    emoji: "🥈",
    gradient: "from-slate-500 via-slate-400 to-slate-300",
    text: "text-white",
  },
  gold: {
    name: "Горский",
    emoji: "🥇",
    gradient: "from-amber-500 via-yellow-400 to-amber-300",
    text: "text-amber-900",
  },
  platinum: {
    name: "Аксакал",
    emoji: "💎",
    gradient: "from-slate-300 via-blue-200 to-slate-300",
    text: "text-slate-800",
  },
};

const DEMO_HISTORY = [
  {
    id: "1",
    type: "earn",
    amount: 650,
    description: "Заказ в ресторане",
    date: "10.10.2026",
  },
  {
    id: "2",
    type: "earn",
    amount: 890,
    description: "Заказ в ресторане",
    date: "08.10.2026",
  },
  {
    id: "3",
    type: "spend",
    amount: -500,
    description: "Оплата баллами",
    date: "05.10.2026",
  },
  {
    id: "4",
    type: "bonus",
    amount: 200,
    description: "Бонус за регистрацию",
    date: "01.10.2026",
  },
];

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { email: true, createdAt: true },
  });

  if (!user) {
    redirect("/");
  }

  const level = LEVELS[DEMO_LOYALTY.level];
  const progress = Math.min(
    (DEMO_LOYALTY.totalSpent / DEMO_LOYALTY.nextThreshold) * 100,
    100
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      {/* ========== ЗАГОЛОВОК ========== */}
      <header>
        <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">
          Личный кабинет
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-50 tracking-tight">
          Привет, {user.email.split("@")[0]}!
        </h1>
      </header>

      {/* ========== ВИРТУАЛЬНАЯ КАРТА ЛОЯЛЬНОСТИ ========== */}
      <section className="relative">
        <div
          className={`bg-gradient-to-r ${level.gradient} rounded-3xl p-8 shadow-2xl`}
        >
          {/* Верх: уровень и баллы */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className={`${level.text} opacity-70 text-xs uppercase tracking-widest mb-1`}>
                Уровень
              </p>
              <p className={`${level.text} text-3xl font-bold flex items-center gap-3`}>
                <span className="text-4xl">{level.emoji}</span>
                {level.name}
              </p>
            </div>
            <div className="text-right">
              <p className={`${level.text} opacity-70 text-xs uppercase tracking-widest mb-1`}>
                Баллы
              </p>
              <p className={`${level.text} text-4xl font-bold font-mono`}>
                {DEMO_LOYALTY.points.toLocaleString("ru-RU")}
              </p>
            </div>
          </div>

          {/* Владелец */}
          <div className="mb-6">
            <p className={`${level.text} opacity-70 text-xs uppercase tracking-widest mb-1`}>
              Владелец
            </p>
            <p className={`${level.text} text-xl font-semibold`}>
              {user.email}
            </p>
          </div>

          {/* Прогресс до следующего уровня */}
          <div>
            <div className={`flex justify-between ${level.text} opacity-80 text-xs mb-2`}>
              <span>До уровня «{LEVELS[DEMO_LOYALTY.nextLevel].name}»</span>
              <span className="font-mono">
                {DEMO_LOYALTY.totalSpent.toLocaleString("ru-RU")} /{" "}
                {DEMO_LOYALTY.nextThreshold.toLocaleString("ru-RU")} ₽
              </span>
            </div>
            <div className="w-full bg-black/20 rounded-full h-2 overflow-hidden">
              <div
                className="bg-white/80 rounded-full h-2 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className={`${level.text} opacity-70 text-xs mt-2`}>
              Потрачено всего: {DEMO_LOYALTY.totalSpent.toLocaleString("ru-RU")} ₽
            </p>
          </div>
        </div>

        {/* QR-код (заглушка) */}
        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl w-32 h-32 flex flex-col items-center justify-center">
          <QrCode className="w-16 h-16 text-stone-800" />
          <p className="text-[10px] text-stone-500 mt-1 text-center leading-tight">
            QR-код<br />скоро
          </p>
        </div>
      </section>

      {/* ========== СТАТИСТИКА ========== */}
      <section className="grid sm:grid-cols-3 gap-4">
        {[
          {
            icon: Coins,
            label: "Баллов накоплено",
            value: DEMO_LOYALTY.points.toLocaleString("ru-RU"),
            accent: "text-amber-400",
          },
          {
            icon: TrendingUp,
            label: "Потрачено всего",
            value: `${DEMO_LOYALTY.totalSpent.toLocaleString("ru-RU")} ₽`,
            accent: "text-amber-400",
          },
          {
            icon: Award,
            label: "Текущая скидка",
            value:
              DEMO_LOYALTY.level === "silver"
                ? "5%"
                : DEMO_LOYALTY.level === "gold"
                  ? "10%"
                  : DEMO_LOYALTY.level === "platinum"
                    ? "15%"
                    : "0%",
            accent: "text-amber-400",
          },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-amber-500/40 transition-colors"
            >
              <Icon className={`w-6 h-6 ${stat.accent} mb-3`} />
              <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="text-stone-50 text-2xl font-bold font-mono">
                {stat.value}
              </p>
            </div>
          );
        })}
      </section>

      {/* ========== ИНФОРМАЦИЯ ОБ АККАУНТЕ ========== */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <h2 className="text-stone-50 font-bold text-lg mb-5 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          Информация об аккаунте
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">
              Email
            </p>
            <p className="text-stone-100">{user.email}</p>
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-widest mb-1">
              Дата регистрации
            </p>
            <p className="text-stone-100">
              {new Date(user.createdAt).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ========== ИСТОРИЯ ОПЕРАЦИЙ ========== */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <h2 className="text-stone-50 font-bold text-lg mb-5 flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-400" />
          История операций
        </h2>

        <div className="space-y-2">
          {DEMO_HISTORY.map((tx) => {
            const isPositive = tx.amount > 0;
            return (
              <div
                key={tx.id}
                className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div>
                  <p className="text-stone-100 text-sm font-medium">
                    {tx.description}
                  </p>
                  <p className="text-stone-500 text-xs">{tx.date}</p>
                </div>
                <p
                  className={`font-mono font-bold text-sm ${
                    isPositive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {isPositive ? "+" : ""}
                  {tx.amount.toLocaleString("ru-RU")}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== КНОПКИ ========== */}
      <section className="flex flex-wrap gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-stone-100 text-sm font-medium transition-colors"
        >
          <Home className="w-4 h-4" />
          На главную
        </Link>
        <form
          action={async () => {
            "use server";
            const { signOut: serverSignOut } = await import("@/auth/auth");
            await serverSignOut({ redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-full text-rose-300 text-sm font-medium transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Выйти
          </button>
        </form>
      </section>
    </div>
  );
}