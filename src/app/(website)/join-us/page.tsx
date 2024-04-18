import Image from "next/image";

export default function JoinUs() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <div className="flex flex-col md:flex-row items-center pt-14">
        <div className="md:ml-12 flex flex-1 flex-col p-4 md:p-0">
          <div className="mb-8 text-2xl md:text-4xl font-extralight">
            Take the first step
          </div>
          <div className="text-4xl md:text-8xl font-semibold">COME WATCH A CLASS.</div>
          <div className="mt-8 text-xl md:text-2xl font-extralight">
            If you like what you see you can join us the very next class!
          </div>
        </div>
        <div className="flex flex-1 justify-center p-8">
          <Image
            className="items-center justify-center"
            src={"/kendo_practice.jpg"}
            alt={"image of two kenshi"}
            width={700}
            height={0}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-slate-300 py-32 text-5xl md:text-7xl font-semibold text-slate-900">
        <div className="font-light">ONE FLAT</div>
        <div className="mb-8 font-light">MONTHLY RATE.</div>
        <div>3 MARTIAL ARTS.</div>
      </div>
      <div className="flex flex-col items-center justify-center px-16 py-8">
        <div className="p-8 text-4xl">MONTHLY RATES:</div>
        <div className="flex flex-col md:flex-row w-full">
          <PricingSection
            image="/two_kenshi_kamae.jpg"
            categorySection="ADULTS (18+) -"
            priceSection="ONLY $50/MONTH"
          />
          <PricingSection
            image="/beginner_students.jpg"
            categorySection="9 TO 17 & STUDENTS -"
            priceSection="ONLY $35/MONTH"
          />
          <PricingSection
            image="/seiza.jpg"
            categorySection="KIDS UNDER 9* -"
            priceSection="FREE!"
            notes="*Must be accompanied by an adult"
          />
          <PricingSection
            image="/jodo_practice.jpg"
            categorySection="FAMILY PRICE -"
            priceSection="ONLY $100/MONTH"
          />
        </div>
      </div>
    </div>
  );
}

function PricingSection({
  image,
  categorySection,
  priceSection,
  notes,
}: Readonly<{
  image: string;
  categorySection: string;
  priceSection: string;
  notes?: string;
}>) {
  return (
    <div className="flex flex-1 flex-col items-center m-8">
      <div className="h-auto w-full aspect-square relative">
        <Image src={image} alt="two kenshi in kamae" fill objectFit="cover"/>
      </div>
      <div className="mt-20 text-4xl">{categorySection}</div>
      <div className="mt-4 text-4xl">{priceSection}</div>
      <div className="mt-8 text-xl font-thin">
        Pay month to month - no obligations
      </div>
      <div className="mt-2 text-xl font-thin">Cancel anytime</div>
      {notes && (
        <div className="mt-2 text-lg font-extralight italic">{notes}</div>
      )}
    </div>
  );
}
