"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Ikatan Pelajar Muhammadiyah",
    description: "Ikatan Pelajar Muhammadiyah (IPM) adalah organisasi otonom Muhammadiyah yang berfokus pada pengembangan kepemimpinan, keislaman, dan keterampilan pelajar. Ekstrakurikuler IPM bertujuan membentuk karakter siswa yang religius, disiplin, mandiri, dan berwawasan luas. Kegiatan IPM meliputi pelatihan kepemimpinan, kajian keislaman, aksi sosial, serta berbagai program pengembangan diri lainnya. Melalui IPM, siswa diajarkan untuk berorganisasi, berkontribusi dalam kegiatan sosial, serta mengamalkan nilai-nilai Islam dalam kehidupan sehari-hari.",
    icon:"/ipm.png",
  },
  {
    title: "Hizbul Wathan (HW)",
    description: "Hizbul Wathan (HW) adalah organisasi kepanduan yang berlandaskan nilai-nilai Islam dan merupakan bagian dari Muhammadiyah. Ekstrakurikuler HW bertujuan membentuk karakter disiplin, mandiri, serta berjiwa kepemimpinan bagi siswa. Kegiatan dalam HW meliputi latihan keterampilan kepanduan, pembinaan akhlak, pembelajaran kedisiplinan, serta kegiatan alam terbuka seperti berkemah dan bakti sosial. Dengan mengikuti HW, siswa diharapkan memiliki semangat kebersamaan, jiwa sosial yang tinggi, serta mampu mengamalkan nilai-nilai keislaman dalam kehidupan sehari-hari.",
    icon:"/hw.png",
  },
  {
    title: "Tapak Suci",
    description: "Tapak Suci adalah seni bela diri yang merupakan bagian dari Muhammadiyah, mengajarkan keterampilan fisik sekaligus nilai-nilai spiritual Islam. Ekstrakurikuler ini bertujuan membentuk siswa yang tangguh, disiplin, serta berakhlak mulia. Kegiatan dalam Tapak Suci meliputi latihan bela diri, penguatan mental, pengembangan karakter, serta kompetisi kejuaraan. Selain melatih keterampilan bertahan dan menyerang, Tapak Suci juga menanamkan nilai sportivitas, kepemimpinan, dan ketahanan diri, sehingga siswa dapat tumbuh menjadi pribadi yang kuat secara fisik dan spiritual.",
    icon:"/tpk.jpg"
  },
]

function truncateText(text: string, maxWords: number): string {
  const words = text.split(" ")
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text
}
export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Us</h2>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[400px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div>
                      {
                        feature.icon == "/ipm.png" ? (
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={35}
                            height={35}
                          />
                        ) : (
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={60}
                            height={60}
                          />
                        )
                      }
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {truncateText(feature.description, 20)}
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.flowersandsaints.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

