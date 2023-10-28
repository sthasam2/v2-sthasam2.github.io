import { useTranslation } from "@/i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h2 className="h2">{t("title")}</h2>
    </>
  );
}
