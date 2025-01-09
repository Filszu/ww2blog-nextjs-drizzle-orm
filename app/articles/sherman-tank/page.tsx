import { ArticlePage } from "@/components/ArticlePage";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const shermanTankArticle = {
  title: "The M4 Sherman Tank: America's Workhorse of WWII",
  mainImage: "/placeholder.svg",
  content: `
    <p>The M4 Sherman, officially Medium Tank, M4, was the most widely used medium tank by the United States and Western Allies in World War II. The M4 Sherman proved to be reliable, relatively cheap to produce, and available in great numbers. Thousands were distributed through the Lend-Lease program to the British Commonwealth and Soviet Union.</p>
    
    <h2>Development and Production</h2>
    <p>The Sherman tank was designed in 1940 as a medium tank to replace the earlier M3 Lee and Grant medium tanks. The first production model of the M4 was the M4A1, which began rolling off the assembly line in February 1942. The tank went through several iterations throughout the war, with each new version incorporating improvements based on battlefield experience.</p>
    
    <h2>Combat Performance</h2>
    <p>The Sherman's reliability and mechanical ruggedness were its greatest strengths. It was able to travel hundreds of miles without breaking down, which was a significant advantage over its German counterparts. However, the Sherman did have some drawbacks. Its 75 mm gun was outmatched by the German Panther and Tiger tanks, and its armor was relatively thin, making it vulnerable to German anti-tank weapons.</p>
    
    <h2>Legacy</h2>
    <p>Despite its shortcomings, the M4 Sherman played a crucial role in the Allied victory in World War II. Its availability in large numbers and its reliability made it a formidable weapon on the battlefield. After the war, the Sherman tank continued to serve in many countries' armed forces, with some variants seeing action as late as the 1980s.</p>
  `,
  specifications: [
    { label: "Weight", value: "30.3 tonnes (66,800 lb)" },
    { label: "Length", value: "5.84 m (19 ft 2 in)" },
    { label: "Width", value: "2.62 m (8 ft 7 in)" },
    { label: "Height", value: "2.74 m (9 ft)" },
    {
      label: "Crew",
      value: "5 (commander, gunner, loader, driver, co-driver)",
    },
    { label: "Main armament", value: "75 mm gun M3" },
  ],
  exampleImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
};

export default function ShermanTankArticle() {
  return (
    <>
      <Navigation />
      <ArticlePage {...shermanTankArticle} />
      <Footer />
    </>
  );
}
