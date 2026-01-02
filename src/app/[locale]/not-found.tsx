import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Container } from "@/components/Container";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <Container className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
          {t("title")}
        </h2>
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">
          {t("desc")}
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
          >
            {t("btn")}
          </Link>
        </div>
      </div>
    </Container>
  );
}
