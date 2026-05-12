import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { catalogProjectDetails, defaultSpecifications, projects } from "./index";
import maxIcon from "@/assets/ozon/max.png";
import vkIcon from "@/assets/ozon/vk.png";
import tgIcon from "@/assets/ozon/tg.png";
import sbpIcon from "@/assets/ozon/sbp.png";
import cardIcon from "@/assets/ozon/cards.svg";
import downIcon from "@/assets/ozon/down.png";

export const Route = createFileRoute("/projects/$projectName")({
  component: ProjectPage,
});

type ProjectImage = {
  path: string;
  src: string;
};

const horizontalFolderByProjectName: Record<string, string> = {
  АНДРЕЕВСКИЙ: "АНДРЕЕВСКИЙ 79 +",
  БАЖЕНОВ: "БАЖЕНОВ 324 +",
  БАРАНОВСКИЙ: "БАРАНОВСКИЙ 255 +",
  БРЮЛЛОВ: "БРЮЛЛОВ 235 +",
  ВАСИЛЕВСКИЙ: "василевский 188 +",
  ВИНОГРАД: "ВИНОГРАД 142 +",
  ВОРОНИХИН: "ВОРОНИХИН 134 +",
  ГОЛОСОВ: "ГОЛОСОВ 142 +",
  ГРИГОРЬЕВ: "ГРИГОРЬЕВ 145 +",
  ГУРЬЕВ: "ГУРЬЕВ 119 +",
  ДУШКИН: "ДУШКИН 137 +",
  ЕФИМОВ: "ЕФИМОВ 125 +",
  ЗАМЯТИН: "ЗАМЯТИН 111 +",
  КАЗАКОВ: "КАЗАКОВ 155 +",
  КАЛАБИН: "КАЛАБИН 103 +",
  КАМИНСКИЙ: "КАМИНСКИЙ 126 +",
  КИБИРЕВ: "КИБИРЕВ 148 +",
  КОКОВИХИН: "коковихин 161 +",
  КУРОЧКИН: "курочкин 41 +",
  ЛЫГИН: "ЛЫГИН 112 +",
  НИКИТИН: "никитин 133 +",
  ПЛАТОНОВ: "ПЛАТОНОВ 225 +",
  ПОКРОВСКИЙ: "ПОКРОВСКИЙ 92 +",
  ПОЛЯНСКИЙ: "ПОЛЯНСКИЙ 168 +",
  РУБАНЕНКО: "РУБАНЕНКО 102 +",
  РУДНЕВ: "РУДНЕВ 124 +",
  СВИЯЗЕВ: "СВИЗЯЕВ 200 +",
  СИМБИРЦЕВ: "СИМБИРЦЕВ 138 +",
  СИРОТКИН: "СИРОТКИН 98 +",
  СТОЛЕТОВ: "СТОЛЕТОВ 87 +",
  ТУРЧЕВИЧ: "ТУРЧЕВИЧ 132 +",
  ТЮРИН: "ТЮРИН 261 +",
  ФОМИН: "фомин 261 +",
  ХВОРИНОВ: "хворинов 104 +",
  ЧАРУШИН: "ЧАРУШИН 187 +",
  ЧИЧАГОВ: "ЧИЧАГОВ 195 +",
  ШУХОВ: "ШУХОВ 106 +",
};

const projectBriefByName: Record<string, string[]> = {
  РУБАНЕНКО: ["Размеры - 8,9x13,7 м", "3 спальни - 11/11/13 м2", "с/у - 5,7 м2"],
};

function normalizeName(value: string) {
  return value.toLocaleUpperCase("ru-RU");
}

function getProjectDetails(projectName: string) {
  const normalizedName = normalizeName(projectName);

  return (
    projects.find((project) => project.name === normalizedName) ??
    catalogProjectDetails.find((project) => project.name === normalizedName)
  );
}

function makeImage(path: string): ProjectImage {
  return {
    path,
    src: path,
  };
}

function getHorizontalImageExtension(projectName: string, imageNumber: number) {
  const webpImagesByProject: Record<string, number[]> = {
    АНДРЕЕВСКИЙ: [2],
    БАЖЕНОВ: [2, 3],
    БАРАНОВСКИЙ: [2, 3],
    БРЮЛЛОВ: [2],
    ВАСИЛЕВСКИЙ: [2],
    ВИНОГРАД: [2, 3],
    ВОРОНИХИН: [2],
    ГОЛОСОВ: [2],
    ГРИГОРЬЕВ: [2, 3],
    ГУРЬЕВ: [2],
    ДУШКИН: [2],
    ЕФИМОВ: [2],
    КАЗАКОВ: [2, 3],
    КАЛАБИН: [2],
    КИБИРЕВ: [2],
    КОКОВИХИН: [2],
    КУРОЧКИН: [2],
    ЛЫГИН: [2],
    НИКИТИН: [2, 3],
    ПЛАТОНОВ: [2],
    ПОКРОВСКИЙ: [2],
    ПОЛЯНСКИЙ: [2],
    РУБАНЕНКО: [2],
    РУДНЕВ: [2],
    СВИЯЗЕВ: [2],
    СИМБИРЦЕВ: [2],
    СИРОТКИН: [2],
    СТОЛЕТОВ: [2],
    ТУРЧЕВИЧ: [2],
    ТЮРИН: [2],
    ФОМИН: [2, 3],
    ХВОРИНОВ: [2],
    ЧАРУШИН: [2],
    ЧИЧАГОВ: [2, 3],
    ШУХОВ: [2],
  };

  if (webpImagesByProject[projectName]?.includes(imageNumber)) {
    return "webp";
  }

  return "webp";
}

function getProjectImages(projectName: string) {
  const normalizedName = normalizeName(projectName);
  const horizontalFolder = horizontalFolderByProjectName[normalizedName] ?? normalizedName;
  const horizontalBasePath = `/Озон и вб горизонталки/${horizontalFolder}`;

  const posterImage = makeImage(`${horizontalBasePath}/${normalizedName}.webp`);
  const horizontalImages = [
    posterImage,
    ...Array.from({ length: 14 }, (_, index) => {
      const imageNumber = index + 2;
      const extension = getHorizontalImageExtension(normalizedName, imageNumber);

      return makeImage(`${horizontalBasePath}/${imageNumber}.${extension}`);
    }),
  ];

  return {
    posterImage,
    thumbnails: horizontalImages,
  };
}

function ProjectPage() {
  const { projectName } = Route.useParams();
  const normalizedProjectName = normalizeName(projectName);
  const details = getProjectDetails(projectName);
  const { posterImage, thumbnails } = useMemo(() => getProjectImages(projectName), [projectName]);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);
  const [hiddenImagePaths, setHiddenImagePaths] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState<ProjectImage>(posterImage);
  const title =
    details?.title ??
    `Проект дома из газобетона ${normalizedProjectName.toLocaleLowerCase("ru-RU")}`;
  const brief = projectBriefByName[normalizedProjectName];
  const specifications = details?.specifications ?? defaultSpecifications;
  const visibleThumbnails = thumbnails.filter((image) => !hiddenImagePaths.includes(image.path));

  useEffect(() => {
    setHiddenImagePaths([]);
    setActiveImage(posterImage);
  }, [posterImage]);

  useEffect(() => {
    const preventPageZoom = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    };

    const preventZoomShortcuts = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && ["+", "-", "=", "0"].includes(event.key)) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventPageZoom, { passive: false });
    window.addEventListener("keydown", preventZoomShortcuts);

    return () => {
      window.removeEventListener("wheel", preventPageZoom);
      window.removeEventListener("keydown", preventZoomShortcuts);
    };
  }, []);

  const hideImage = (image: ProjectImage) => {
    setHiddenImagePaths((currentPaths) =>
      currentPaths.includes(image.path) ? currentPaths : [...currentPaths, image.path],
    );

    if (activeImage.path === image.path) {
      setActiveImage(posterImage);
    }
  };

  const scrollThumbnailsDown = () => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    thumbnailsRef.current?.scrollBy({
      top: isDesktop ? 320 : 0,
      left: isDesktop ? 0 : 320,
      behavior: "smooth",
    });
  };

  const scrollThumbnailsUp = () => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    thumbnailsRef.current?.scrollBy({
      top: isDesktop ? -320 : 0,
      left: isDesktop ? 0 : -320,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white text-[#4b412d]">
      <section className="px-4 pb-7 pt-5 sm:px-8 lg:px-[105px] lg:pt-9">
        <Link
          to="/"
          aria-label="Вернуться на главную"
          className="mb-4 flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#4b412d] text-[22px] leading-none transition hover:bg-[#f6efe1] lg:mb-7 lg:h-12 lg:w-12 lg:text-[30px]"
        >
          ‹
        </Link>

        <div className="grid gap-3 lg:gap-8 lg:grid-cols-[1fr_300px] lg:items-start xl:grid-cols-[1fr_360px]">
          <button
            type="button"
            className="overflow-hidden bg-white text-left"
            onClick={() => setActiveImage(posterImage)}
          >
            <img
              src={activeImage.src}
              alt={title}
              className="aspect-[1.28] w-full object-contain object-top"
              onError={() => hideImage(activeImage)}
            />
          </button>

          <div className="relative self-start">
            <div
              ref={thumbnailsRef}
              className="flex max-h-none gap-3 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:max-h-[820px] lg:grid-cols-1 lg:gap-4 xl:max-h-[980px]"
            >
            {visibleThumbnails.map((image, index) => (
              <button
                key={image.path}
                type="button"
                className={`${index === 0 ? "hidden lg:block" : ""} w-[31%] shrink-0 overflow-hidden bg-white transition hover:opacity-85 lg:w-auto`}
                onClick={() => setActiveImage(image)}
              >
                <img
                  src={image.src}
                  alt={`${title}, изображение ${index + 1}`}
                  className="aspect-[1.25] w-full object-contain object-top"
                  loading="lazy"
                  onError={() => hideImage(image)}
                />
              </button>
            ))}
            </div>
            <button
              type="button"
              aria-label="Показать следующие изображения"
              className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center transition hover:scale-105 lg:bottom-3 lg:left-1/2 lg:right-auto lg:top-auto lg:h-12 lg:w-12 lg:-translate-x-1/2 lg:translate-y-0"
              onClick={scrollThumbnailsDown}
            >
              <img src={downIcon} alt="" className="h-8 w-8 -rotate-90 object-contain lg:h-10 lg:w-10 lg:rotate-0" />
            </button>
            <button
              type="button"
              aria-label="Прокрутить изображения"
              className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center transition hover:scale-105 lg:left-1/2 lg:right-auto lg:top-3 lg:h-12 lg:w-12 lg:-translate-x-1/2 lg:translate-y-0"
              onClick={scrollThumbnailsUp}
            >
              <img src={downIcon} alt="" className="h-8 w-8 rotate-90 object-contain lg:h-10 lg:w-10 lg:rotate-180" />
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-7 lg:mt-8 lg:grid-cols-[1fr_170px] lg:items-end lg:gap-8">
          <div>
            <h1 className="max-w-[660px] text-[20px] font-semibold leading-tight lg:text-[32px]">{title}</h1>
            <div className="mt-7 text-[13px] font-semibold leading-snug lg:text-[20px]">
              <p className="mb-4 text-[14px] lg:text-[20px]">Характеристики проекта дома:</p>
              {brief ? (
                <ul className="space-y-1">
                  {brief.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              ) : (
                <dl className="space-y-1">
                  {specifications.map(([label, value]) => (
                    <div key={label}>
                      <dt className="inline">{label}: </dt>
                      <dd className="inline">{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>

          <p className="pb-1 text-[20px] font-semibold leading-none">Цена: 2600 ₽</p>
        </div>

        <section className="mt-10 grid gap-6 rounded-[4px] bg-[#efe4bd] px-7 py-8 lg:mt-8 lg:min-h-[310px] lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-16 lg:py-10 xl:gap-24 xl:px-20">
          <form className="space-y-3 lg:mx-auto lg:w-full lg:max-w-[640px] lg:space-y-4">
            <h2 className="mb-3 text-[14px] font-semibold lg:text-[20px]">Данные покупателя</h2>
            <input className="h-[52px] w-full rounded-[6px] bg-white px-3 text-[13px] font-semibold outline-none placeholder:text-[#beb8ad] lg:h-[78px] lg:px-4 lg:text-[16px]" placeholder="Имя" />
            <input className="h-[52px] w-full rounded-[6px] bg-white px-3 text-[13px] font-semibold outline-none placeholder:text-[#beb8ad] lg:h-[78px] lg:px-4 lg:text-[16px]" placeholder="Телефон" />
            <input className="h-[52px] w-full rounded-[6px] bg-white px-3 text-[13px] font-semibold outline-none placeholder:text-[#beb8ad] lg:h-[78px] lg:px-4 lg:text-[16px]" placeholder="Почта" />
          </form>

          <div className="lg:mx-auto lg:w-full lg:max-w-[640px]">
            <h2 className="mb-3 text-[14px] font-semibold lg:text-[20px]">Выберите способ оплаты</h2>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <button type="button" className="flex h-[64px] items-center justify-center rounded-[6px] bg-white lg:h-[104px]">
                <img src={sbpIcon} alt="СБП" className="mx-auto block h-12 w-24 object-contain object-center lg:h-18 lg:w-32" />
              </button>
              <button type="button" className="flex h-[64px] items-center justify-center rounded-[6px] bg-white lg:h-[104px]">
                <img src={cardIcon} alt="Банковская карта" className="mx-auto block h-12 w-24 object-contain object-center lg:h-18 lg:w-32" />
              </button>
            </div>
            <button
              type="button"
              className="mt-5 h-[58px] w-full rounded-[5px] bg-[#5b421d] text-[18px] font-semibold text-white transition hover:bg-[#493516] lg:mt-10 lg:h-[92px] lg:text-[22px]"
            >
              Оплатить
            </button>
          </div>
        </section>
      </section>

      <ProjectFooter />
    </main>
  );
}

function ProjectFooter() {
  const socialLinks = [
    { id: "max", image: maxIcon, label: "MAX" },
    { id: "vk", image: vkIcon, label: "VK" },
    { id: "tg", image: tgIcon, label: "Telegram" },
  ];

  return (
    <footer className="bg-white px-5 py-9 text-[#4b412d] sm:px-8 lg:px-[105px]">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[1.3fr_0.7fr_1fr] lg:items-start lg:gap-10">
        <div className="contents lg:block">
          <div className="order-4 mt-4 flex justify-center gap-3 lg:mt-0 lg:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href="#"
                aria-label={link.label}
                className="flex h-16 w-16 items-center justify-center rounded-[6px] bg-[#D2B776]"
              >
                <img src={link.image} alt="" className="h-[52px] w-[52px] object-contain" loading="lazy" />
              </a>
            ))}
          </div>
          <div className="order-1 lg:mt-10">
            <p className="text-[17px] font-semibold">Москва</p>
            <a href="tel:+78006003048" className="mt-1 block text-[28px] font-semibold leading-tight sm:text-[28px]">
              +7 (800) 600-30-48
            </a>
          </div>
        </div>

        <div className="order-2 lg:pt-[105px]">
          <p className="text-[17px] font-semibold lg:text-[15px]">Почта</p>
          <a href="mailto:info@sk-april.ru" className="mt-1 block text-[16px] font-semibold leading-tight">
            info@sk-april.ru
          </a>
        </div>

        <div className="order-3 lg:pt-[105px]">
          <p className="text-[17px] font-semibold lg:text-[15px]">Адрес</p>
          <p className="mt-1 max-w-[360px] text-[16px] font-semibold leading-tight">
            117218, г. Москва, улица Кржижановского,
            <br />
            29 корпус 2, офис 12-02
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-3 text-[9px] font-semibold text-[#b8b8b8] sm:text-[13px] lg:mt-12 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-5">
        <p>Отправляя заявку, вы соглашаетесь с нашей политикой конфиденциальности</p>
        <a href="#" className="hover:text-[#4b412d]">
          Политика конфиденциальности
        </a>
        <p>© 2010 — 2026, Строительная компания «Апрель»</p>
      </div>
    </footer>
  );
}
