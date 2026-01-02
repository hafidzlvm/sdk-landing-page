"use client";
import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '../navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  };

  return (
    <div className="ml-4 flex items-center">
      <select
        defaultValue={locale}
        onChange={handleChange}
        disabled={isPending}
        className="w-full h-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-trueGray-800 dark:border-gray-600 dark:text-white"
      >
        <option value="en">English</option>
        <option value="id">Indonesia</option>
      </select>
    </div>
  );
}
