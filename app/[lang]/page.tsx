import { getDictionary } from "@/app/localse/i18n";
export default async function Home({params}: {params: {lang: string}}) {
  const t = await getDictionary(params.lang as 'en' | 'zh');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-2xl">{t.page.title}</h1>
      <p className="text-sm">{t.page.desc}</p>
    </div>
  );
}