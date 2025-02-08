import React from "react";
import myImage from "../assets/download.jpg";

export const AboutUs = () => {
  return (
    <>
      <div>
        <h1 className="text-8xl;">
          Empowering Your Online Presence Discover the DevnDez Difference Today!
        </h1>
        <div className="px-4 text-left; rounded-md; font-size: var(--text-2xl);line-height: var(--text-2xl--line-height); font-medium font-weight: 500;">
          <article>
            {/* <img className="float-right.." src={myImage} alt="My Example"/>  */}
            <p class="line-clamp-3; text-justify">
              Welcome to Quinova, where we make websites that are so good, they
              might just steal your lunch money! or like the espresso shot your
              website never knew it needed! We’re like the friendly neighborhood
              superheroes of the internet, ready to save your brand from being
              lost in the digital jungle. Need a website? we’ll whip it up so
              engagingly that even your cat will sit up and take notice. It’s so
              catchy that even your dog will want to read it! Whether you’re a
              tiny startup or a big business, we’re here to help you shine like
              a star without the drama of a reality show. So, let’s join forces
              and make your online presence unforgettable because who says
              success can’t come with a few giggles and magic?
            </p>
          </article>
        </div>

        <div>
          <h1 className="text-8xl;">MISSION</h1>
          <div className="px-4 text-left; rounded-md; font-size: var(--text-2xl);line-height: var(--text-2xl--line-height); font-medium font-weight: 500;">
            <article>
              <p class="line-clamp-3; text-justify">
                At Quinova, we’re on a mission to help businesses and startups
                grow faster than a cat chasing a laser pointer! We know that
                technology and design can work wonders, and we’re here to help
                you harness that magic. Our team is like a bunch of Geeks mixing
                creativity, tech skills, and a sprinkle of strategic thinking to
                create online experiences that pop! We take the time to
                understand your needs and work closely with you to build
                solutions that really hit the mark. With our focus on quality,
                innovation, and making our clients happy, we want to be your
                trusty sidekick in the digital world. Why not? team up and turn
                your ideas into reality because together, we can turn your
                ideas into reality!
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
