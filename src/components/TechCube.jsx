import React from "react";
import {
    FaJava,
    FaAngular,
    FaBootstrap,
    FaGithub,
} from "react-icons/fa";
import {
    SiSpringboot,
    SiHibernate,
    SiDjango,
    SiMysql,
    SiPostman,
} from "react-icons/si";

const icons = [
    { icon: <FaJava />, color: "#007396", direction: "left-right" },
    { icon: <FaAngular />, color: "#DD0031", direction: "top-bottom" },
    { icon: <FaBootstrap />, color: "#7952B3", direction: "bottom-top" },
    { icon: <SiSpringboot />, color: "#6DB33F", direction: "left-right" },
    { icon: <SiHibernate />, color: "#59666C", direction: "top-bottom" },
    { icon: <SiDjango />, color: "#092E20", direction: "bottom-top" },
    { icon: <SiMysql />, color: "#4479A1", direction: "left-right" },
    { icon: <SiPostman />, color: "#FF6C37", direction: "top-bottom" },
    { icon: <FaGithub />, color: "#181717", direction: "bottom-top" },
];

const TechIconsFlow = () => {
    return (
        <>
            <style>{`
        @keyframes moveLeftRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        @keyframes moveTopBottom {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        @keyframes moveBottomTop {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100vh); }
        }

        @keyframes rotateIcon {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .move-left-right {
          animation: moveLeftRight 12s linear infinite;
        }

        .move-top-bottom {
          animation: moveTopBottom 10s linear infinite;
        }

        .move-bottom-top {
          animation: moveBottomTop 14s linear infinite;
        }

        .rotate-icon {
          animation: rotateIcon 3s linear infinite;
        }
      `}</style>

            <div className="relative w-full h-[80vh] overflow-hidden">
                {icons.map((item, index) => {
                    const animationClass =
                        item.direction === "left-right"
                            ? "move-left-right"
                            : item.direction === "top-bottom"
                                ? "move-top-bottom"
                                : "move-bottom-top";

                    return (
                        <div
                            key={index}
                            className={`absolute ${animationClass}`}
                            style={{
                                top: item.direction.includes("top") ? "0%" : item.direction.includes("bottom") ? "100%" : `${index * 10 + 5}%`,
                                left: item.direction === "left-right" ? "-10%" : `${index * 10 + 5}%`,
                                animationDelay: `${index * 0.8}s`,
                            }}
                        >
                            <div
                                className="rotate-icon text-6xl md:text-7xl lg:text-8xl"
                                style={{ color: item.color }}
                            >
                                {item.icon}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default TechIconsFlow;
