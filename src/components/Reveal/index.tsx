import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  className?: string;
  duration?: number;
  delay?: number;
  yPosition?: number;
  xPosition?: number;
  slider?: boolean;
  sliderFrom?: "left" | "right";
}

const Reveal = ({
  children,
  width = "fit-content",
  duration = 0.5,
  delay = 0.2,
  yPosition = 75,
  xPosition = 0,
  slider,
  sliderFrom = "left",
  className,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: yPosition,
            x: xPosition,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
        whileInView={"onscreen"}
      >
        {children}
      </motion.div>
      {slider && (
        <motion.div
          variants={{
            hidden: {
              [sliderFrom]: 0,
            },
            visible: {
              [sliderFrom]: "100%",
            },
          }}
          animate={slideControls}
          initial="hidden"
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "var(--color-primary)",
          }}
        />
      )}
    </div>
  );
};

export default Reveal;
