import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Star } from "lucide-react";
import { useEffect, useState, type WheelEvent } from "react";
import logo from "@/assets/лого 2.png";
import mainImage from "@/assets/MAIN.jpeg";
import bidImage from "@/assets/bid.png";
import projectOne from "@/assets/Проекты лендинг/РУБАНЕНКО.png";
import projectTwo from "@/assets/Проекты лендинг/СТОЛЕТОВ.png";
import projectThree from "@/assets/Проекты лендинг/СИРОТКИН.png";
import smetaOne from "@/assets/smeta/1.png";
import smetaTwo from "@/assets/smeta/2.png";
import smetaThree from "@/assets/smeta/3.png";
import interiorOne from "@/assets/interior/1.png";
import interiorTwo from "@/assets/interior/2.png";
import interiorThree from "@/assets/interior/3.png";
import giftHouse from "@/assets/gift/1.png";
import giftEstimate from "@/assets/gift/image 364.png";
import ozonLogo from "@/assets/ozon/ozon.png";
import wbLogo from "@/assets/ozon/wb.png";
import quoteIcon from "@/assets/ozon/,,.png";
import faceIcon from "@/assets/ozon/face.png";
import maxIcon from "@/assets/ozon/max.png";
import vkIcon from "@/assets/ozon/vk.png";
import tgIcon from "@/assets/ozon/tg.png";
import pdfIcon from "@/assets/ozon/pdf.png";
import arrowOne from "@/assets/ozon/arrow_1.png";
import arrowTwo from "@/assets/ozon/arrow_2.png";

export const Route = createFileRoute("/")({
  component: Index,
});

export const projects = [
  {
    id: "one",
    name: "РУБАНЕНКО",
    image: projectOne,
    title: "Одноэтажный дом из газобетонных блоков площадью 102 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "автоклавный газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "металлочерепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    id: "two",
    name: "СТОЛЕТОВ",
    image: projectTwo,
    title: "Одноэтажный дом из газобетонных блоков площадью 87 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "пустотные железобетонные плиты"],
      ["Крыша", "металлочерепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    id: "three",
    name: "СИРОТКИН",
    image: projectThree,
    title: "Одноэтажный дом из газобетонных блоков площадью 98 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "металлочерепица"],
      ["Фасад", "керамический кирпич"],
    ],
  },
];

export const defaultSpecifications = [
  ["Фундамент", "монолитная плита"],
  ["Стены", "газобетонные блоки"],
  ["Перекрытия", "деревянные"],
  ["Крыша", "металлочерепица"],
  ["Фасад", "клинкерный кирпич"],
];

export const catalogOrder = [
  "КАЗАКОВ",
  "ЛЫГИН",
  "ГРИГОРЬЕВ",
  "ПОЛЯНСКИЙ",
  "ВОРОНИХИН",
  "ГОЛОСОВ",
  "ШУХОВ",
  "АНДРЕЕВСКИЙ",
  "ХВОРИНОВ",
  "ГУРЬЕВ",
  "КИБИРЕВ",
  "СВИЯЗЕВ",
  "ЕФИМОВ",
  "ВИНОГРАД",
  "СИМБИРЦЕВ",
  "НИКИТИН",
  "КОКОВИХИН",
  "КУРОЧКИН",
  "ВАСИЛЕВСКИЙ",
  "ФОМИН",
  "ПОКРОВСКИЙ",
  "ЗАМЯТИН",
  "ТУРЧЕВИЧ",
  "ТЮРИН",
  "БРЮЛЛОВ",
  "РУДНЕВ",
  "ЧАРУШИН",
  "КАЛАБИН",
  "ПЛАТОНОВ",
  "ДУШКИН",
  "БАЖЕНОВ",
  "БАРАНОВСКИЙ",
  "ЧИЧАГОВ",
  "КАМИНСКИЙ",
];

function getCatalogOrderIndex(path: string) {
  const normalizedPath = path.toLocaleUpperCase("ru-RU");
  const orderIndex = catalogOrder.findIndex((name) => normalizedPath.includes(name));

  return orderIndex === -1 ? catalogOrder.length : orderIndex;
}

function isHitProjectPath(path: string) {
  const normalizedPath = path.toLocaleUpperCase("ru-RU");

  return ["РУБАНЕНКО", "СТОЛЕТОВ", "СИРОТКИН"].some((name) => normalizedPath.includes(name));
}

export const catalogProjectDetails = [
  {
    name: "КАЗАКОВ",
    title: "Двухэтажный дом из газобетонных блоков площадью 155 м2",
    specifications: [
      ["Фундамент", "железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "четырехскатная - гибкая черепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "ЛЫГИН",
    title: "Одноэтажный дом из газобетонных блоков площадью 112 м2",
    specifications: [
      ["Фундамент", "железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "пустотные железобетонные плиты"],
      ["Крыша", "металлочерепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "ГРИГОРЬЕВ",
    title: "Двухэтажный дом из газобетонных блоков площадью 145 м2",
    specifications: [
      ["Фундамент", "железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "пустотные железобетонные плиты"],
      ["Крыша", "металлочерепица"],
      ["Фасад", "керамический кирпич"],
    ],
  },
  {
    name: "ПОЛЯНСКИЙ",
    title: "Одноэтажный дом из газобетонных блоков площадью 168 м2",
    specifications: [
      ["Фундамент", "железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "металлочерепица"],
      ["Фасад", "керамический кирпич"],
    ],
  },
  {
    name: "ВОРОНИХИН",
    title: "Одноэтажный дом из газобетонных блоков площадью 134 м2",
    specifications: [
      ["Фундамент", "железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "пустотные железобетонные плиты"],
      ["Крыша", "двускатная - гибкая черепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "ГОЛОСОВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 142 м2",
    specifications: [
      ["Фундамент", "железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "пустотные железобетонные плиты"],
      ["Крыша", "двускатная - гибкая черепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "ШУХОВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 106 м2",
    specifications: [
      ["Фундамент", "ленточный"],
      ["Стены", "газобетон"],
      ["Перекрытия", "пустотные железобетонные плиты"],
      ["Крыша", "металлочерепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "АНДРЕЕВСКИЙ",
    title: "Одноэтажный дом из газобетонных блоков площадью 79 м2",
    specifications: [
      ["Фундамент", "ленточный"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "металлочерепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "ХВОРИНОВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 104 м2",
    specifications: [
      ["Фундамент", "железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "Монолитная плита"],
      ["Крыша", "Четырехскатная металлочерепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "ГУРЬЕВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 119 м2",
    specifications: [
      ["Фундамент", "ленточный"],
      ["Стены", "газобетон"],
      ["Перекрытия", "пустотные железобетонные плиты"],
      ["Крыша", "Четырехскатная металлочерепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "КИБИРЕВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 148 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "Четырехскатная металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "СВИЯЗЕВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 200 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный"],
    ],
  },
  {
    name: "ЕФИМОВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 125 м2",
    specifications: [
      ["Фундамент", "ленточный"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "Четырехскатная металлочерепица"],
      ["Фасад", "штукатурка"],
    ],
  },
  {
    name: "ВИНОГРАД",
    title: "Двухэтажный дом из газобетонных блоков площадью 142 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "пустотные железобетонные плиты"],
      ["Крыша", "металлочерепица с утеплением"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "СИМБИРЦЕВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 138 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "НИКИТИН",
    title: "Двухэтажный дом из газобетонных блоков площадью 133 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "КОКОВИХИН",
    title: "Одноэтажный дом из газобетонных блоков площадью 161 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "КУРОЧКИН",
    title: "Одноэтажный дом из газобетонных блоков площадью 41 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "кирпич полнотелый одинарный"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный"],
    ],
  },
  {
    name: "ВАСИЛЕВСКИЙ",
    title: "Одноэтажный дом из газобетонных блоков площадью 188 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "плоская кровля"],
      ["Фасад", "кирпич облицовочный"],
    ],
  },
  {
    name: "ФОМИН",
    title: "Двухэтажный дом из газобетонных блоков площадью 261 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "ПОКРОВСКИЙ",
    title: "Одноэтажный дом из газобетонных блоков площадью 92 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "ЗАМЯТИН",
    title: "Двухэтажный дом из газобетонных блоков площадью 111 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "двухскатная - металлочерепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "ТУРЧЕВИЧ",
    title: "Одноэтажный дом из газобетонных блоков площадью 132 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "двухскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "ТЮРИН",
    title: "Одноэтажный дом из газобетонных блоков площадью 261 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "облицовочный кирпич"],
    ],
  },
  {
    name: "БРЮЛЛОВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 235 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "РУДНЕВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 124 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "ЧАРУШИН",
    title: "Одноэтажный дом из газобетонных блоков площадью 187 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "КАЛАБИН",
    title: "Одноэтажный дом из газобетонных блоков площадью 103 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный"],
    ],
  },
  {
    name: "ПЛАТОНОВ",
    title: "Одноэтажный дом из газобетонных блоков площадью 225 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "деревянные балки"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный"],
    ],
  },
  {
    name: "ДУШКИН",
    title: "Одноэтажный дом из газобетонных блоков площадью 137 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "двухскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "БАЖЕНОВ",
    title: "Двухэтажный дом из газобетонных блоков площадью 324 м2",
    specifications: [
      ["Фундамент", "монолитная железобетонная плита"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - гибкая черепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "БАРАНОВСКИЙ",
    title: "Двухэтажный дом из газобетонных блоков площадью 255 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "ЧИЧАГОВ",
    title: "Двухэтажный дом из газобетонных блоков площадью 195 м2",
    specifications: [
      ["Фундамент", "ростверк на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "кирпич облицовочный керамический"],
    ],
  },
  {
    name: "КАМИНСКИЙ",
    title: "Одноэтажный дом из газобетонных блоков площадью 126 м2",
    specifications: [
      ["Фундамент", "ленточный на буронабивных сваях"],
      ["Стены", "газобетон"],
      ["Перекрытия", "Пустотные железобетонные плиты"],
      ["Крыша", "четырехскатная - металлочерепица"],
      ["Фасад", "Облицовочный кирпич"],
    ],
  },
];

function getCatalogProjectDetails(path: string) {
  const normalizedPath = path.toLocaleUpperCase("ru-RU");

  return catalogProjectDetails.find((project) => normalizedPath.includes(project.name));
}

const catalogImages = Object.entries(
  import.meta.glob<string>("/src/assets/Проекты лендинг/*.png", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .sort(([a], [b]) => getCatalogOrderIndex(a) - getCatalogOrderIndex(b))
  .map(([path, image], index) => {
    const details = getCatalogProjectDetails(path);

    return {
      id: `catalog-${index + 1}`,
      name: details?.name ?? catalogOrder[index],
      image,
      title: details?.title ?? "Одноэтажный дом из газобетонных блоков площадью 170 м2",
      specifications: details?.specifications,
      path,
    };
  })
  .filter((project) => !isHitProjectPath(project.path))
  .slice(0, catalogOrder.length);

type ExampleImage = {
  src: string;
  alt: string;
};

function Index() {
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

  return (
    <main className="min-h-screen bg-[#fefefe] text-[#4b412d]">
      <Hero />
      <section className="px-5 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-[105px]">
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <h1 className="text-[32px] font-semibold leading-tight tracking-normal sm:text-[48px]">
            Хит продаж
          </h1>
          <div className="flex items-center gap-1 text-[#ffc400]" aria-label="Рейтинг 5 звезд">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current stroke-current sm:h-6 sm:w-6" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:gap-14">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              image={project.image}
              title={project.title}
              specifications={project.specifications}
            />
          ))}
        </div>
      </section>
      <ProjectExample />
      <InteriorExample />
      <CatalogSection />
      <MarketplaceSection />
      <ReviewsSection />
      <FaqSection />
      <BidSection />
      <FooterSection />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative h-[710px] min-h-[620px] overflow-hidden sm:h-[430px] lg:h-[520px] xl:h-[clamp(520px,calc((100vw-322px)/2.28),700px)]">
      <img
        src={mainImage}
        alt="Современный загородный дом Апрель Премиум"
        className="absolute inset-0 h-full w-full object-cover object-[52%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent sm:bg-gradient-to-r sm:from-black/70 sm:via-black/28 sm:to-black/12" />
      <div className="relative z-10 flex h-full max-w-[1180px] flex-col justify-end px-4 pb-9 text-white sm:px-8 sm:pb-24 lg:ml-10 lg:pb-32 xl:ml-14">
        <img src={logo} alt="Апрель Премиум" className="mb-8 h-12 w-fit sm:mb-5 sm:h-20" />
        <h2 className="max-w-full text-[15px] font-bold leading-tight tracking-normal sm:text-[48px] 2xl:whitespace-nowrap">
          Готовые проекты со скидкой напрямую от продавца
        </h2>
        <p className="mt-2 text-[9px] font-semibold leading-tight sm:mt-2 sm:text-[24px]">
          по россии звонок бесплатный{" "}
          <a href="tel:+78006003048" className="transition hover:text-[#d2b776]">
            +7 (800) 600-30-48
          </a>
        </p>
      </div>
    </section>
  );
}

function ProjectCard({
  name,
  image,
  title,
  specifications = defaultSpecifications,
}: {
  name: string;
  image: string;
  title: string;
  specifications?: string[][];
}) {
  return (
    <Link
      to="/projects/$projectName"
      params={{ projectName: name }}
      className="group flex min-h-full cursor-pointer flex-col overflow-hidden bg-[#fef6f6] shadow-[0_1px_0_rgba(75,65,45,0.08)] transition duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_18px_38px_rgba(75,65,45,0.2)]"
    >
      <img
        src={image}
        alt={title}
        className="block aspect-[0.76] w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col px-5 pb-4 pt-4 text-[#4b412d]">
        <h3 className="text-[18px] font-semibold leading-tight">{title}</h3>
        <dl className="mt-7 space-y-2 text-[16px] leading-tight">
          {specifications.map(([label, value]) => (
            <Info key={label} label={label} value={value} />
          ))}
        </dl>
        <div className="mt-auto flex items-end justify-between gap-4 pt-9">
          <p className="text-[28px] font-semibold leading-none">1 900 ₽</p>
          <span
            className="inline-flex min-w-24 items-center justify-center rounded-[7px] bg-[#4b3a1f] px-5 py-2 text-center text-[14px] font-semibold uppercase leading-none text-white transition hover:bg-[#342d1f] sm:min-w-32 sm:px-7 sm:text-[16px]"
          >
            Цена
          </span>
        </div>
      </div>
    </Link>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-1">
      <dt>{label}:</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}

function ImageCarousel({ images, imageClassName }: { images: ExampleImage[]; imageClassName: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ExampleImage | null>(null);
  const [selectedImageScale, setSelectedImageScale] = useState(1);
  const visibleImages = images.map((_, index) => images[(activeIndex + index) % images.length]);

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  const openImage = (image: ExampleImage) => {
    setSelectedImage(image);
    setSelectedImageScale(1);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedImageScale(1);
  };

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  const zoomSelectedImage = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setSelectedImageScale((currentScale) => {
      const nextScale = currentScale + (event.deltaY < 0 ? 0.12 : -0.12);

      return Math.min(3, Math.max(0.7, Number(nextScale.toFixed(2))));
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Показать предыдущие изображения"
        className="absolute left-0 top-1/2 z-10 h-12 w-12 -translate-y-1/2 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4b412d] lg:left-[-82px] lg:h-16 lg:w-16"
        onClick={showPrevious}
      >
        <img src={arrowOne} alt="" className="h-full w-full object-contain" loading="lazy" />
      </button>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12 xl:gap-16">
        {visibleImages.map((image, index) => (
          <div key={image.src} className={`overflow-hidden bg-white ${index === 0 ? "block" : "hidden lg:block"}`}>
            <button
              type="button"
              className="block h-full w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4b412d]"
              onClick={() => openImage(image)}
            >
              <img src={image.src} alt={image.alt} className={`block object-cover ${imageClassName}`} loading="lazy" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Показать следующие изображения"
        className="absolute right-0 top-1/2 z-10 h-12 w-12 -translate-y-1/2 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4b412d] lg:right-[-82px] lg:h-16 lg:w-16"
        onClick={showNext}
      >
        <img src={arrowTwo} alt="" className="h-full w-full object-contain" loading="lazy" />
      </button>
      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onWheel={zoomSelectedImage}
          onClick={closeImage}
        >
          <button
            type="button"
            aria-label="Закрыть изображение"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[28px] font-semibold leading-none text-[#4b412d] shadow-lg"
            onClick={closeImage}
          >
            ×
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[88vh] max-w-[92vw] object-contain transition-transform duration-150"
            style={{ transform: `scale(${selectedImageScale})` }}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}

function ProjectExample() {
  const images = [
    { src: smetaOne, alt: "Титульный лист примера проекта" },
    { src: smetaTwo, alt: "Лист с общими данными проекта" },
    { src: smetaThree, alt: "Фасад дома из примера проекта" },
  ];

  return (
    <section className="overflow-hidden bg-white pb-14 pt-20 sm:pb-16 sm:pt-24">
      <div className="px-5 sm:px-8 lg:px-[105px]">
        <h2 className="mb-10 text-[32px] font-semibold leading-tight tracking-normal text-[#4b412d] sm:text-[48px]">
          Пример нашего проекта
        </h2>
        <ImageCarousel images={images} imageClassName="aspect-[1.38] h-full w-full" />
        <div className="mt-12 flex justify-center">
          <a
            href={smetaOne}
            download
            className="inline-flex min-h-14 items-center gap-3 rounded-[6px] bg-[#b6a676] px-4 py-2 text-[18px] font-semibold uppercase leading-none text-white transition hover:bg-[#a79769] sm:text-[24px]"
          >
            <img src={pdfIcon} alt="" className="h-10 w-10 shrink-0 object-contain" loading="lazy" />
            Скачать пример проекта
          </a>
        </div>
      </div>
    </section>
  );
}

function InteriorExample() {
  const images = [
    { src: interiorOne, alt: "Интерьер ванной комнаты" },
    { src: interiorTwo, alt: "Интерьер кухни и столовой" },
    { src: interiorThree, alt: "Интерьер спальни" },
  ];

  return (
    <section className="bg-white pb-14 pt-20 sm:pb-16 sm:pt-24">
      <div className="px-5 sm:px-8 lg:px-[105px]">
        <h2 className="mb-8 text-[32px] font-semibold leading-tight tracking-normal text-[#4b412d] sm:text-[48px]">
          <span className="sm:hidden">Пример интерьера</span>
          <span className="hidden sm:inline">У каждого проекта пример интерьера</span>
        </h2>
        <ImageCarousel images={images} imageClassName="aspect-[0.75] w-full" />
      </div>
    </section>
  );
}

function CatalogSection() {
  const [visibleCatalogCount, setVisibleCatalogCount] = useState(3);
  const visibleCatalogImages = catalogImages.slice(0, visibleCatalogCount);
  const hasMoreCatalogImages = visibleCatalogCount < catalogImages.length;
  const showMoreCatalogImages = () => {
    setVisibleCatalogCount((currentCount) => Math.min(currentCount + 3, catalogImages.length));
  };

  return (
    <section className="bg-white pb-14 pt-20 sm:pb-16 sm:pt-24">
      <div className="px-5 sm:px-8 lg:px-[105px]">
        <div className="mb-9 flex flex-wrap items-center gap-6">
          <h2 className="text-[32px] font-semibold leading-tight tracking-normal text-[#4b412d] sm:text-[48px]">
            Каталог
          </h2>
          <span className="rounded-[8px] bg-[#e8d9ad] px-5 py-4 text-[34px] font-semibold leading-none text-[#4b412d] sm:text-[50px]">
            -10%
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:hidden">
          {visibleCatalogImages.map((project) => (
            <CatalogCard
              key={project.id}
              name={project.name}
              image={project.image}
              title={project.title}
              specifications={project.specifications}
            />
          ))}
        </div>
        <div className="hidden gap-8 lg:grid lg:grid-cols-3 xl:gap-14">
          {catalogImages.map((project) => (
            <CatalogCard
              key={project.id}
              name={project.name}
              image={project.image}
              title={project.title}
              specifications={project.specifications}
            />
          ))}
          <GiftOfferBlock className="mt-0 lg:col-span-2" />
        </div>
        {hasMoreCatalogImages ? (
          <div className="mt-10 flex justify-center lg:hidden">
            <button
              type="button"
              className="w-full max-w-[440px] rounded-[8px] bg-[#b6a676] px-8 py-5 text-[22px] font-semibold leading-none text-white transition hover:bg-[#a79769]"
              onClick={showMoreCatalogImages}
            >
              Показать еще
            </button>
          </div>
        ) : null}
        <GiftOfferBlock className="lg:hidden" />
      </div>
    </section>
  );
}

function CatalogCard({
  name,
  image,
  title,
  specifications = defaultSpecifications,
}: {
  name: string;
  image: string;
  title: string;
  specifications?: string[][];
}) {
  return (
    <Link
      to="/projects/$projectName"
      params={{ projectName: name }}
      className="group flex min-h-full cursor-pointer flex-col overflow-hidden bg-[#fef6f6] transition duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_18px_38px_rgba(75,65,45,0.2)]"
    >
      <img
        src={image}
        alt={title}
        className="block aspect-[0.76] w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col px-5 pb-4 pt-4 text-[#4b412d]">
        <h3 className="text-[18px] font-semibold leading-tight">{title}</h3>
        <dl className="mt-7 space-y-2 text-[16px] leading-tight">
          {specifications.map(([label, value]) => (
            <Info key={label} label={label} value={value} />
          ))}
        </dl>
        <div className="mt-auto flex items-end justify-between gap-4 pt-9">
          <p className="text-[28px] font-semibold leading-none">1 900 ₽</p>
          <span
            className="inline-flex min-w-24 items-center justify-center rounded-[7px] bg-[#4b3a1f] px-5 py-2 text-center text-[14px] font-semibold uppercase leading-none text-white transition hover:bg-[#342d1f] sm:min-w-32 sm:px-7 sm:text-[16px]"
          >
            Цена
          </span>
        </div>
      </div>
    </Link>
  );
}

function GiftOfferBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`mt-14 flex min-h-full flex-col items-center justify-center ${className}`}>
        <div className="flex w-full max-w-[640px] flex-wrap items-center justify-center gap-6 sm:gap-9">
            <img
              src={giftEstimate}
              alt="Расчет материалов"
              className="h-32 w-32 object-contain sm:h-44 sm:w-44"
              loading="lazy"
            />
            <span className="text-[34px] font-semibold text-[#4b412d]">+</span>
            <img
              src={giftHouse}
              alt="Проект бани"
              className="h-[104px] w-[240px] rounded-[3px] object-cover sm:h-[128px] sm:w-[316px]"
              loading="lazy"
            />
          </div>
          <div className="mt-3 w-full rounded-[6px] bg-[#e8d9ad] px-6 py-7 text-center text-[#4b412d] lg:rounded-r-none">
            <p className="text-[28px] font-semibold leading-tight sm:text-[42px]">
              Расчет материалов и проект бани
              <br />
              на выбор при покупке проекта
            </p>
            <p className="mt-4 text-[42px] font-bold leading-none sm:text-[58px]">в подарок</p>
          </div>
    </div>
  );
}

function MarketplaceSection() {
  return (
    <section className="bg-white pb-20">
      <div className="bg-[#e8d9ad] px-5 py-4 text-center text-[#4b412d] sm:px-8">
        <h2 className="mx-auto max-w-[1120px] text-[16px] font-semibold leading-tight tracking-normal sm:text-[clamp(26px,5vw,58px)]">
          <span className="block whitespace-nowrap">Вы всегда можете купить наши проекты</span>
          <span className="block whitespace-nowrap">на Ozon и Wildberries</span>
        </h2>
      </div>
      <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-10 px-5 pt-12 text-center text-[#4b412d] sm:grid-cols-2 sm:gap-24 sm:px-8">
        <MarketplaceItem
          image={ozonLogo}
          title="Ozon"
          caption="4 место в рейтинге"
          href="https://www.ozon.ru/seller/aprel-2841847/"
        />
        <MarketplaceItem
          image={wbLogo}
          title="Wildberries"
          caption="3 место в рейтинге"
          href="https://www.wildberries.ru/seller/250006995"
        />
      </div>
    </section>
  );
}

function MarketplaceItem({ image, title, caption, href }: { image: string; title: string; caption: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center transition hover:-translate-y-1 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d2b776]"
      aria-label={`Перейти на ${title}`}
    >
      <img src={image} alt={title} className="h-40 w-40 rounded-[34px] object-cover sm:h-52 sm:w-52" loading="lazy" />
      <p className="mt-6 whitespace-nowrap text-[22px] font-semibold leading-tight sm:text-[28px]">{caption}</p>
    </a>
  );
}

function ReviewsSection() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const newReviewText =
    "Рекомендую СК Апрель и готовые проекты домов к покупке. Проект продуман до мелочей, прописаны все детали, объемы материалов. В подарок прислали проект бани, который мы тоже будем воплощать в реальность. Рекомендую на все 10000% 👍";
  const defaultReviewText =
    "Очень быстро прислали проект дома, хорошо расписан все понятно. Очень хорошая, ответственная компания, быстро ответили и прислали, рекомендую.";
  const secondReviewText =
    "Отличный проект с архитектурными и конструктивными решениями. В проекте все понятно. В смете всё указано. Будем строить дом по данному проекту. Продавец отвечает на все вопросы быстро. В подарок прислали проект бани,за что отдельное спасибо,очень приятно)))";
  const thirdReviewText =
    "Хороший проект, смета по количеству материалов есть, даже саморезы посчитаны. Проект понятный, информации для самостоятельного строительства достаточно. Рекомендую.";
  const reviews = [
    {
      id: "review-1",
      marketplace: "Ozon",
      image: ozonLogo,
      name: "Юлия",
      text: newReviewText,
      href: "https://www.ozon.ru/product/gotovyy-proekt-odnoetazhnogo-doma-106m2-chertezhi-smeta-3d-vizualizatsiya-2053911896/reviews?ruuid=0197a0c2-90c7-758a-a380-31b3bc958f6d&utm_campaign=reviews_link&utm_medium=share_button&utm_source=smm",
    },
    {
      id: "review-2",
      marketplace: "Ozon",
      image: ozonLogo,
      name: "Анжела",
      text: secondReviewText,
      href: "https://www.ozon.ru/product/proekt-odnoetazhnogo-doma-iz-gazobetona-112-m-2-spalni-kuhnya-gostinaya-chertezhi-smeta-2160701704/reviews?ruuid=019d29ab-d0e9-76db-bfae-5f086a3011c5&utm_campaign=reviews_link&utm_medium=share_button&utm_source=smm",
    },
    {
      id: "review-3",
      marketplace: "WB",
      image: wbLogo,
      name: "Максим",
      text: thirdReviewText,
      href: "https://www.wildberries.ru/catalog/494860889/feedbacks?imtId=438207180&size=688372983",
    },
  ];
  const showPreviousReview = () => {
    setActiveReviewIndex((currentIndex) => (currentIndex - 1 + reviews.length) % reviews.length);
  };
  const showNextReview = () => {
    setActiveReviewIndex((currentIndex) => (currentIndex + 1) % reviews.length);
  };

  return (
    <section className="bg-white px-5 pb-20 pt-2 sm:px-8 lg:px-[105px]">
      <h2 className="mb-10 text-[32px] font-semibold leading-tight tracking-normal text-[#4b412d] sm:text-[46px]">
        Отзывы с наших магазинов на маркетплейсах
      </h2>
      <div className="relative">
        <button
          type="button"
          aria-label="Показать предыдущий отзыв"
          className="absolute left-0 top-1/2 z-10 h-12 w-12 -translate-y-1/2 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4b412d] lg:hidden"
          onClick={showPreviousReview}
        >
          <img src={arrowOne} alt="" className="h-full w-full object-contain" loading="lazy" />
        </button>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        {reviews.map((review, index) => {
          const ReviewCard = review.href ? "a" : "article";

          return (
          <ReviewCard
            key={review.id}
            href={review.href}
            target={review.href ? "_blank" : undefined}
            rel={review.href ? "noreferrer" : undefined}
            className={`${index === activeReviewIndex ? "flex" : "hidden"} min-h-[430px] flex-col rounded-[8px] bg-[#fef6f6] px-8 py-9 text-[#4b412d] transition hover:shadow-[0_14px_30px_rgba(75,65,45,0.14)] lg:flex lg:min-h-[470px]`}
          >
            <div className="min-h-0">
              <img src={quoteIcon} alt="" className="h-12 w-14 object-contain" loading="lazy" />
              <p className="mt-6 line-clamp-[14] text-[15px] font-semibold leading-snug sm:text-[16px]">
                {review.text}
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between gap-5 pt-10">
              <div className="flex items-center gap-4">
                <img src={faceIcon} alt="" className="h-12 w-12 object-contain" loading="lazy" />
                <span className="text-[18px] font-semibold">{review.name}</span>
              </div>
              <div className="flex items-center gap-2 text-[18px] font-semibold">
                <img src={review.image} alt={review.marketplace} className="h-7 w-7 rounded-[7px] object-cover" loading="lazy" />
                <span>{review.marketplace}</span>
              </div>
            </div>
          </ReviewCard>
          );
        })}
        </div>
        <button
          type="button"
          aria-label="Показать следующий отзыв"
          className="absolute right-0 top-1/2 z-10 h-12 w-12 -translate-y-1/2 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4b412d] lg:hidden"
          onClick={showNextReview}
        >
          <img src={arrowTwo} alt="" className="h-full w-full object-contain" loading="lazy" />
        </button>
      </div>
    </section>
  );
}

function FaqSection() {
  const questions = [
    "Почему здесь дешевле?",
    "Почему здесь дешевле?",
    "Почему здесь дешевле?",
    "Почему здесь дешевле?",
    "Почему здесь дешевле?",
  ];

  return (
    <section className="bg-white px-5 pb-24 pt-4 sm:px-8 lg:px-[105px]">
      <h2 className="mb-10 text-[36px] font-semibold leading-tight tracking-normal text-[#4b412d] sm:text-[52px]">
        Ответы на вопросы
      </h2>
      <div className="rounded-[8px] bg-[#fef6f6] px-6 py-4 text-[#4b412d] sm:px-10 sm:py-5">
        {questions.map((question, index) => (
          <details key={`${question}-${index}`} className="group border-b border-[#6b5a3b] last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[20px] font-semibold leading-tight sm:text-[26px] [&::-webkit-details-marker]:hidden">
              <span>{question}</span>
              <ChevronDown className="h-9 w-9 shrink-0 stroke-[3] transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="max-w-3xl pb-6 text-[17px] font-normal leading-snug sm:text-[20px]">
              Мы продаем проекты напрямую, поэтому цена ниже без лишних наценок.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function BidSection() {
  return (
    <section
      className="flex min-h-[640px] items-center justify-center bg-cover bg-center px-5 py-16 sm:min-h-[780px]"
      style={{ backgroundImage: `url(${bidImage})` }}
    >
      <form className="w-full max-w-[580px] rounded-[8px] bg-[#e8d9ad]/80 px-7 py-10 text-center backdrop-blur-[2px] sm:px-12">
        <h2 className="mb-9 text-[32px] font-semibold leading-tight tracking-normal text-[#4b412d] sm:text-[42px]">
          Хочу купить проект
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="h-16 w-full rounded-[10px] bg-white px-4 text-[24px] font-semibold text-[#4b412d] outline-none placeholder:text-[#bdbdbd] focus:ring-2 focus:ring-[#5b421d]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            className="h-16 w-full rounded-[10px] bg-white px-4 text-[24px] font-semibold text-[#4b412d] outline-none placeholder:text-[#bdbdbd] focus:ring-2 focus:ring-[#5b421d]"
          />
          <input
            type="email"
            name="email"
            placeholder="Почта"
            className="h-16 w-full rounded-[10px] bg-white px-4 text-[24px] font-semibold text-[#4b412d] outline-none placeholder:text-[#bdbdbd] focus:ring-2 focus:ring-[#5b421d]"
          />
        </div>
        <button
          type="submit"
          className="mt-8 min-h-16 w-full rounded-[10px] bg-[#5b421d] px-6 text-[28px] font-semibold leading-tight text-white transition hover:bg-[#493516] sm:text-[38px]"
        >
          Отправить заявку
        </button>
      </form>
    </section>
  );
}

function FooterSection() {
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

