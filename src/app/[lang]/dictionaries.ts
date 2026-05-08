import "server-only";
import type { Locale } from "@/i18n/config";

const dictionaries = {
  en: () => import("../../../messages/en.json").then((m) => m.default),
  ko: () => import("../../../messages/ko.json").then((m) => m.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
