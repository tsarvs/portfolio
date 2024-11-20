import {motion} from "framer-motion";
import {useState} from "react";
import CountUp from "react-countup";
import {
    FaCss3,
    FaFigma,
    FaHtml5,
    FaJs,
    FaReact,
    FaWordpress,
    FaJava,
    FaPython,
    FaAws
} from "react-icons/fa";
import {
    SiAdobephotoshop,
    SiAdobexd,
    SiFramer,
    SiNextdotjs,
    SiDotnet,
    SiSpring,
    SiTerraform,
    SiBitrise,
    SiConcourse,
    SiYaml,
    SiMicrosoftazure
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import {fadeIn} from "../../variants";

//  data
export const aboutData = [
    {
        title: "experience",
        info: [
            {
                title: "Software Engineer / Team Lead - 7Factor Software",
                stage: "2021 - Present",
            },
            {
                title: "Web Application Developer - K-Rise Systems",
                stage: "2019 - 2021",
            },
            {
                title: "Co-op - Homecare Homebase",
                stage: "2016 - 2018",
            },
        ],
    },
    {
        title: "skills",
        info: [
            {
                title: "Front-End Development",
                icons: [
                    FaReact,
                    SiNextdotjs,
                    FaHtml5,
                    FaCss3,
                    FaJs,
                    SiFramer,
                    FaWordpress,
                ],
            },
            {
                title: "Back-End Development",
                icons: [SiDotnet, FaJava, SiSpring, FaPython],
            },
            {
                title: "CI/CD & Pipeline Automation",
                icons: [SiTerraform, SiBitrise, SiConcourse, SiYaml],
            },
            {
                title: "Cloud Computing",
                icons: [FaAws, SiMicrosoftazure],
            },
            {
                title: "UI/UX Design",
                icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
            },
        ],
    },
    {
        title: "Certifications",
        info: [
            {
                title: "AWS Certified Cloud Practitioner",
                stage: "2022",
            },
            {
                title: "Azure Fundamentals",
                stage: "2023",
            },
        ],
    },
    {
        title: "credentials",
        info: [
            {
                title: "Bachelor of Computer Science & Computer Engineering",
                stage: "2019",
            },
            {
                title: "Minor Degree in Mathematics",
                stage: "2019",
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left">

            {/* avatar img */}
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex absolute bottom-0 -left-[370px]"
            >
                <Avatar/>
            </motion.div>

            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
                {/* text */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2"
                    >
                        Writing code that <span className="text-accent">captivates.</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
                    >
                        Ever since I could hold a video game controller, I've been astounded by the world of
                        technology. I was lucky enough to able to turn my fascination into a career, as I have now been working in the
                        tech industry for over 5 years professionally.
                        <br/><br/>
                        I've had the opportunity to work on a variety of projects that have helped me grow in multiple
                        different ways, both with my technical and interpersonal skills. I'm always looking for new
                        challenges and opportunities to learn and collaborate with others, and I'm excited to
                        see where my career takes me next.
                    </motion.p>

                    {/* counters */}
                    <motion.div
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
                    >
                        <div className="flex flex-1 xl:gap-x-6">
                            {/* experience */}
                            <div
                                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={5} duration={5}/>
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Years of experience.
                                </div>
                            </div>

                            {/* clients */}
                            <div
                                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={3} duration={7}/>
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    keyboards smashed.
                                </div>
                            </div>

                            {/* projects */}
                            <div
                                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={3942} duration={7}/>
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Unfinished projects.
                                </div>
                            </div>

                            {/* awards */}
                            <div className="relative flex-1">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    0
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Accidental prod deploys.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* info */}
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
                >
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((item, itemI) => (
                            <div
                                key={itemI}
                                className={`${
                                    index === itemI &&
                                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                onClick={() => setIndex(itemI)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>

                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                        {aboutData[index].info.map((item, itemI) => (
                            <div
                                key={itemI}
                                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
                            >
                                {/* title */}
                                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                                <div className="hidden md:flex">-</div>
                                <div>{item.stage}</div>

                                <div className="flex gap-x-4">
                                    {/* icons */}
                                    {item.icons?.map((Icon, iconI) => (
                                        <div key={iconI} className="text-2xl text-white">
                                            <Icon/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
