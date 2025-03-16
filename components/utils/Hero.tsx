"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroSection = () => {
    const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-6 py-2 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Gabung Sekarang </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              SMA 4
            </h1>
            <h1>
                <span className="text-transparent px-2 bg-gradient-to-r from-[#2f937f] to-primary bg-clip-text">
                    MUHAMMADIYAH
                </span>
            </h1>
            MAKASSAR
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`SMA Muhammadiyah Makassar sekolah yang mencetak siswa kompetitif, Islami, berakhlak mulia, berdaya saing global, berilmu, beriman, kreatif, mandiri, serta memiliki kepedulian sosial dan semangat kolaborasi dalam kehidupan bermasyarakat.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              SMAMPAT
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="/"
              >
                PPDB
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
                mounted && theme === "light"
                  ? "https://www.smadwiwarna.sch.id/wp-content/uploads/2024/09/Biaya-Sekolah-SMA-scaled.jpg"
                  : "https://www.smadwiwarna.sch.id/wp-content/uploads/2024/09/Biaya-Sekolah-SMA-scaled.jpg"
              }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
