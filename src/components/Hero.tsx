import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                    {chunks}
                  </span>
                ),
              })}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {t("description")}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#services"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition flex items-center justify-center">
                {t("explore")}
              </a>
              <a
                href="#portfolio"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition">
                <span>{t("viewPortfolio")}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                   <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center w-full mt-10 lg:mt-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-4xl font-bold text-gray-800 dark:text-white">100%</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t("stats.years")}</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-4xl font-bold text-gray-800 dark:text-white">7+</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t("stats.projects")}</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-4xl font-bold text-gray-800 dark:text-white">99.9%</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t("stats.uptime")}</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-4xl font-bold text-gray-800 dark:text-white">24/7</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t("stats.support")}</p>
              </div>
          </div>
        </div>
      </Container>
    </>
  );
}
