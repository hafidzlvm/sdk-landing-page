"use client";
 
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Container } from "@/components/Container";
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("PopupWidget"); // Reusing error strings for now or add generic Error keys later
 
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (
    <Container className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {t("error")}
        </h2>
        <div className="mt-8">
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
          >
            {t("back")}
          </button>
        </div>
      </div>
    </Container>
  );
}
