"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clientes" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Clientes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Os melhores já estão contando com a gente
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            <Link
              href="https://www.instagram.com/icon.fitbrands/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80 flex flex-col items-center justify-center"
            >
              <Image
                src="/icon-logo.jpg"
                alt="Icon"
                width={160}
                height={160}
                className="rounded-2xl"
              />
              <p className="font-bold font-montserrat">ICON Fitbrands</p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
