"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="bg-black h-[100vh] w-100">
      <AnimatedSVGLines />
    </div>
  );
}

const AnimatedSVGLines = () => {
  return (
    <div className="relative">
      <svg
        className="left-lines"
        width="195"
        height="138"
        viewBox="0 0 195 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M195 31.5L89.8055 30.377C76.1575 30.377 62.535 29.076 49.0906 26.4886L-21 13"
          stroke="url(#ob-linear-gradient-left)"
        />
        <path
          d="M195 50L69.295 47.754L-21 41.016"
          stroke="url(#ob-linear-gradient-left)"
        />
        <path
          d="M195 68.5L-21 69.5642"
          stroke="url(#ob-linear-gradient-left)"
        />
        <path
          d="M195 87L69.2951 89.2463L-21 96.1614"
          stroke="url(#ob-linear-gradient-left)"
        />
        <path
          d="M195 105.5L89.8055 106.623C76.1575 106.623 62.535 107.924 49.0906 110.511L-21 124"
          stroke="url(#ob-linear-gradient-left)"
        />

        <g>
          <path
            d="M195 31.5L89.8055 30.377C76.1575 30.377 62.535 29.076 49.0906 26.4886L-21 13"
            stroke="url(#glow_gradient_1)"
            strokeWidth="1.2"
            mask="url(#glow_mask_1)"
            className="animate-pulse"
          />
          <circle
            cx="195"
            cy="31.5"
            r="2"
            fill="#9fe6fd"
            className="animate-pulse"
          />
        </g>

        <g>
          <path
            d="M195 50L69.295 47.754L-21 41.016"
            stroke="url(#glow_gradient_2)"
            strokeWidth="1.2"
            mask="url(#glow_mask_2)"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <circle
            cx="195"
            cy="50"
            r="2"
            fill="#9fe6fd"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </g>

        <g>
          <path
            d="M195 68.5L-21 69.5642"
            stroke="url(#glow_gradient_3)"
            strokeWidth="1.2"
            mask="url(#glow_mask_3)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="195"
            cy="68.5"
            r="2"
            fill="#9fe6fd"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </g>

        <g>
          <path
            d="M195 87L69.2951 89.2463L-21 96.1614"
            stroke="url(#glow_gradient_4)"
            strokeWidth="1.2"
            mask="url(#glow_mask_4)"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <circle
            cx="195"
            cy="87"
            r="2"
            fill="#9fe6fd"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </g>

        <g>
          <path
            d="M195 105.5L89.8055 106.623C76.1575 106.623 62.535 107.924 49.0906 110.511L-21 124"
            stroke="url(#glow_gradient_5)"
            strokeWidth="1.2"
            mask="url(#glow_mask_5)"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <circle
            cx="195"
            cy="105.5"
            r="2"
            fill="#9fe6fd"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </g>

        <defs>
          <motion.linearGradient
            id="ob-linear-gradient-left"
            initial={{
              x1: "0%",
              x2: "-10%",
            }}
            animate={{
              x1: "120%",
              x2: "110%",
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
              repeatDelay: 0.5,
            }}
            y1="167.386"
            y2="125.855"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="white" stopOpacity="0" />
            <stop offset="0.7" stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </motion.linearGradient>

          {/* Glow masks and gradients for each path */}
          <mask id="glow_mask_1">
            <path
              d="M195 31.5L89.8055 30.377C76.1575 30.377 62.535 29.076 49.0906 26.4886L-21 13"
              fill="black"
            />
            <circle cx="195" cy="31.5" r="2" fill="white" />
          </mask>
          <radialGradient
            id="glow_gradient_1"
            cx="195"
            cy="31.5"
            r="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFE358" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFE358" stopOpacity="0" />
          </radialGradient>

          <mask id="glow_mask_2">
            <path d="M195 50L69.295 47.754L-21 41.016" fill="black" />
            <circle cx="195" cy="50" r="2" fill="white" />
          </mask>
          <radialGradient
            id="glow_gradient_2"
            cx="195"
            cy="50"
            r="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFE358" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFE358" stopOpacity="0" />
          </radialGradient>

          <mask id="glow_mask_3">
            <path d="M195 68.5L-21 69.5642" fill="black" />
            <circle cx="195" cy="68.5" r="2" fill="white" />
          </mask>
          <radialGradient
            id="glow_gradient_3"
            cx="195"
            cy="68.5"
            r="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFE358" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFE358" stopOpacity="0" />
          </radialGradient>

          <mask id="glow_mask_4">
            <path d="M195 87L69.2951 89.2463L-21 96.1614" fill="black" />
            <circle cx="195" cy="87" r="2" fill="white" />
          </mask>
          <radialGradient
            id="glow_gradient_4"
            cx="195"
            cy="87"
            r="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFE358" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFE358" stopOpacity="0" />
          </radialGradient>

          <mask id="glow_mask_5">
            <path
              d="M195 105.5L89.8055 106.623C76.1575 106.623 62.535 107.924 49.0906 110.511L-21 124"
              fill="black"
            />
            <circle cx="195" cy="105.5" r="2" fill="white" />
          </mask>
          <radialGradient
            id="glow_gradient_5"
            cx="195"
            cy="105.5"
            r="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFE358" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFE358" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
