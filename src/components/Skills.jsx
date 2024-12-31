import { useEffect } from "react";
import { Skill } from "./Boxes";
import { Friendly, Passionate, Resourceful } from "./SVGs";
import gsap from "gsap";

function Skills() {
  useEffect(() => {
    // gsap.fromTo(
    //   ".skill",

    //   {
    //     scale: 1,
    //     opacity: 1,
    //     duration: 1.5,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".skill",
    //       start: "top 80%",
    //       toggleActions: "play none none reverse",
    //     },
    //   }
    // );

    gsap.utils.toArray(".skills").forEach((skill) => {
      gsap.fromTo(
        skill,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: skill,
            start: "top 100%",
            toggleActions: "play none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="font-jost p-5 mt-28 gap-10 flex flex-col md:mx-12 sm:mx-10 sm:text-lg lg:flex-row xl:mb-80 ">
      <Skill
        svg={<Passionate />}
        title="PASSIONATE"
        description=" Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions."
        className="skills"
      />
      <Skill
        svg={<Resourceful />}
        title="RESOURCEFUL"
        description=" Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs."
        className="skills"
      />
      <Skill
        svg={<Friendly />}
        title="FRIENDLY"
        description="We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide."
        className="skills"
      />
    </div>
  );
}

export default Skills;
