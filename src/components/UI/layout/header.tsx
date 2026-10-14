"use client";
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Link,
} from "@heroui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import RegistrationModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

// Компонент логотипа
export const Logo = () => {
  return (
    <Image
      src="/icon.png"
      alt={siteConfig.title}
      width={26}
      height={26}
      priority
      style={{ width: "26px", height: "26px" }}
    />
  );
};

// Основной компонент заголовка
export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    setIsMenuOpen(false);
  };

  const handleNavigate = (href: string) => {
    router.push(href);
    setIsMenuOpen(false);
  };

  const getNavItems = () => {
    return siteConfig.navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <NavbarItem key={item.href}>
          <Link
            color="foreground"
            href={item.href}
            className={`px-3 py-1
              ${isActive ? "text-blue-500" : "text-foreground"}
              hover:text-blue-300 hover:border
              hover:border-blue-300 hover:rounded-md
              transition-colors
              transition-border
              duration-200`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`h-[${layoutConfig.headerHeight}]`}
    >
      <NavbarContent>
        {/* Бургер — виден только на мобилке */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex gap-1">
            <Logo />
            <p className="font-bold text-inherit">{siteConfig.title}</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Ссылки — только на десктопе */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        {status === "loading" ? (
          <NavbarItem>
            <span className="text-sm text-foreground/50">Загрузка...</span>
          </NavbarItem>
        ) : session ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <span className="text-sm text-foreground/80">
                Привет, {session.user?.email}!
              </span>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Button
                color="primary"
                variant="flat"
                onPress={() => router.push("/profile")}
              >
                Профиль
              </Button>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Button
                color="secondary"
                variant="flat"
                onPress={handleSignOut}
              >
                Выйти
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Button
                color="secondary"
                variant="flat"
                onPress={() => setIsLoginOpen(true)}
              >
                Логин
              </Button>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
              <Button
                color="primary"
                variant="flat"
                onPress={() => setIsRegistrationOpen(true)}
              >
                Регистрация
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      {/* Мобильное меню */}
      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              color="foreground"
              href={item.href}
              className="w-full block py-2 text-lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          {status === "loading" ? (
            <span className="text-sm text-foreground/50">Загрузка...</span>
          ) : session ? (
            <div className="flex flex-col gap-3 mt-4">
              <span className="text-sm text-foreground/80">
                Привет, {session.user?.email}!
              </span>
              <Button
                color="primary"
                variant="flat"
                onPress={() => handleNavigate("/profile")}
              >
                Профиль
              </Button>
              <Button color="secondary" variant="flat" onPress={handleSignOut}>
                Выйти
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 mt-4">
              <Button
                color="secondary"
                variant="flat"
                onPress={() => {
                  setIsLoginOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Логин
              </Button>
              <Button
                color="primary"
                variant="flat"
                onPress={() => {
                  setIsRegistrationOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Регистрация
              </Button>
            </div>
          )}
        </NavbarMenuItem>
      </NavbarMenu>

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Navbar>
  );
}