import { Text } from "@/ui/text/text";

export default function AboutSection() {
  return (
    <div className="about-section bg-white dark:bg-stone-600">
      <div className="wrapper container-4xl p-6 py-[70px]">
        <div className="mx-auto max-w-2xl text-center">
          <Text
            as="h1"
            size="h1"
            className="text-3xl text-foreground-secondary"
          >
            About Me
          </Text>
          <p className="">Get to know about the person behind @nard.</p>
        </div>
        <div className="mt-5">
          <div className="bento-grid mx-auto grid max-w-[600px] grid-cols-3 grid-rows-3 gap-2">
            <div className="c1 col-span-3 border p-3 sm:col-span-1 sm:row-span-3 sm:min-h-[300px]">
              1
            </div>
            <div className="c1 col-span-3 border p-3 sm:col-span-2">2</div>
            <div className="c1 col-span-3 border p-3 sm:col-span-1 sm:row-span-2">
              3
            </div>
            <div className="c1 col-span-3 border bg-black p-3 text-white sm:col-span-1 sm:row-span-2">
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
