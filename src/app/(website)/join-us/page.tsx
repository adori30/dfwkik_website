import Image from "next/image";

export default function JoinUs() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <div className="flex flex-col items-center pt-14 md:flex-row">
        <div className="flex flex-1 flex-col p-4 md:ml-12 md:p-0">
          <div className="mb-8 text-2xl font-extralight md:text-4xl">
            Take the first step
          </div>
          <div className="text-4xl font-semibold md:text-8xl">
            COME WATCH A CLASS.
          </div>
          <div className="mt-8 text-xl font-extralight md:text-2xl">
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
      <div className="md:px-0 px-4 text-center flex flex-col items-center justify-center bg-slate-300 py-32 text-5xl font-semibold text-slate-900 md:text-7xl">
        <div className="font-light">ONE FLAT</div>
        <div className="mb-8 font-light">MONTHLY RATE.</div>
        <div>3 MARTIAL ARTS.</div>
      </div>
      <div className="flex flex-col items-center justify-center px-8 md:px-16 py-8">
        <div className="md:p-8 p-4 text-4xl">MONTHLY RATES:</div>
        <div className="flex w-full flex-col md:flex-row">
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
    <div className="m-0 mb-8 flex flex-1 flex-col items-center md:mb-0 md:mr-8 md:last:mr-0">
      <div className="relative aspect-square h-auto w-full">
        <Image src={image} alt="picture of a practice" fill style={{objectFit:"cover"}} />
      </div>
      <div className="mt-4 text-2xl min-[1795px]:text-4xl">
        {categorySection}
      </div>
      <div className="mt-2 text-2xl">{priceSection}</div>
      <div className="text-md mt-4 font-thin md:text-lg">
        Pay month to month - no obligations
      </div>
      <div className="text-md mt-2 font-thin md:text-lg">Cancel anytime</div>
      {notes && (
        <div className="mt-2 text-sm font-extralight italic">{notes}</div>
      )}
    </div>
  );
}
