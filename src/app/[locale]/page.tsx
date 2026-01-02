import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { useTranslations } from "next-intl";

import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../../public/img/benefit-one.png";
import benefitTwoImg from "../../../public/img/benefit-two.png";

export default function Home() {
  const t = useTranslations("Home");
  const tBen = useTranslations("Benefits");

  const benefitOne = {
    title: tBen("one.title"),
    desc: tBen("one.desc"),
    image: benefitOneImg,
    bullets: [
      {
        title: tBen("one.bullets.0.title"),
        desc: tBen("one.bullets.0.desc"),
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: tBen("one.bullets.1.title"),
        desc: tBen("one.bullets.1.desc"),
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: tBen("one.bullets.2.title"),
        desc: tBen("one.bullets.2.desc"),
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };

  const benefitTwo = {
    title: tBen("two.title"),
    desc: tBen("two.desc"),
    image: benefitTwoImg,
    bullets: [
      {
        title: tBen("two.bullets.0.title"),
        desc: tBen("two.bullets.0.desc"),
        icon: <ChartBarSquareIcon />,
      },
      {
        title: tBen("two.bullets.1.title"),
        desc: tBen("two.bullets.1.desc"),
        icon: <SunIcon />,
      },
      {
        title: tBen("two.bullets.2.title"),
        desc: tBen("two.bullets.2.desc"),
        icon: <FaceSmileIcon />,
      },
    ],
  };

  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle={t("coreCapabilities")}
        title={t("engineeringExcellence")}
      >
        {t("engineeringDesc")}
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle={t("philosophy")}
        title={t("innovationAtScale")}
      >
        {t("philosophyDesc")}
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      {/* <SectionTitle
        preTitle={t("clientSuccess")}
        title={t("trustedBy")}
      >
        {t("clientDesc")}
      </SectionTitle> */}

      {/* <Testimonials /> */}

      <SectionTitle preTitle={t("support")} title={t("faq")}>
        {t("faqDesc")}
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
