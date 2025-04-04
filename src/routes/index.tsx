import { A } from "@solidjs/router";
import { BsMailbox } from "solid-icons/bs";
import {
  FaBrandsDev,
  FaBrandsGithub,
  FaBrandsLinkedin,
  FaBrandsTwitter,
} from "solid-icons/fa";
import { Component } from "solid-js";

const Title: Component = () => {
  return (
    <header class="flex flex-col gap-4 items-stretch md:items-center">
      <h1 class="text-5xl lg:text-9xl break-words text-center">
        Alberto Forni
      </h1>
      <ul
        role="list"
        class="flex flex-col sm:flex-row sm:flex-wrap text-lg gap-3 justify-center items-center"
      >
        <li class="flex gap-1 items-center">
          <BsMailbox />
          <A href="mailto:me@albertoforni.com">me@albertoforni.com</A>
        </li>
        <li class="flex gap-1 items-center">
          <FaBrandsLinkedin />
          <A href="https://www.linkedin.com/in/albertoforni/">
            linkedin.com/in/albertoforni
          </A>
        </li>
        <li class="flex gap-1 items-center">
          <FaBrandsGithub />
          <A href="https://github.com/albertoforni">github.com/albertoforni</A>
        </li>
        <li class="flex gap-1 items-center">
          <FaBrandsDev />
          <A href="https://dev.to/albertoforni">dev.to/albertoforni</A>
        </li>
        <li class="flex gap-1 items-center">
          <FaBrandsTwitter />
          <A href="https://x.com/albertoforni">x.com/albertoforni</A>
        </li>
      </ul>
    </header>
  );
};

const Profile: Component = () => {
  return (
    <section>
      <p class="max-w-3xl mx-auto text-xl leading-relaxed text-center mt-8 mb-12">
        Full Stack Developer with 10+ years of experience in software
        development and business administration. Expert in designing scalable
        systems, modernizing codebases, and leading cross-functional teams.
        Passionate about delivering high-quality software solutions, mentoring
        developers, and exploring innovative technologies.
      </p>
    </section>
  );
};

const Home: Component = () => {
  return (
    <div class="h-screen w-screen overflow-hidden flex flex-col">
      <main class="text-gray-700 flex flex-col px-4">
        <Title />
        <Profile />
      </main>
      <section class="flex-1 overflow-hidden hidden flex-col justify-end items-center md:flex">
        <img
          src="me.webp"
          alt="Alberto Forni"
          class="max-h-full object-cover"
        />
      </section>
    </div>
  );
};

export default Home;
