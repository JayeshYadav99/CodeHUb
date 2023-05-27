import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from '../Card';

export default function CertificationCourses() {
  return (
    <div>
      <section>
        <div class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Welcome to Learning Section
              </h1>
            
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">from programming languages to cutting-edge technologies, explore a curated selection of courses and unlock the door to unlimited learning possibilities</p>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/free-developer-certificates-banner.jpg"
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Harvard  Certifications</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Harvard offers a series of academic online courses exploring various facets of computer science, including programming fundamentals and AI.</p>

            </div>
            </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
  <Card image={`https://courses.javacodegeeks.com/wp-content/uploads/2020/02/8f8e5124-1dab-47e6-8fa6-3fbdc0738f0a-974ffb43cd83.small_-1-767x430.jpg`} text={`This course picks up where CS50 leaves off, diving more deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.`} title={`CS50's Web Programming with Python and JavaScript`}/>
  <Card image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/8da0f22826d0_w240.webp`} text={`Discover the fundamentals of artificial intelligence  with this comprehensive introductory course. Explore various machine learning techniques, algorithms, and applications..`} title={`CS50's Introduction to Artificial Intelligence with Python`}/>
  <Card image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/f1aa4077cca1_w240.webp`} text={`Learn game development fundamentals with CS50's Introduction to Game Development, covering game design, programming, and mechanics using popular frameworks and tools.`} title={`CS50's Introduction to Game Development`}/>
  
  </div>
  </section>
  <section>
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Microsoft  Certifications and Badges</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Microsoft offers thousands of modules and hundreds of learning paths to explore the company’s products, including Office 365, Visual Studio, and Azure. Once you finish a course, you’ll get a badge on your learner profile..</p>

            </div>
            </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card title={`AZ-104: Configure and manage virtual networks for Azure administrators`} image={`https://ccweb.imgix.net/https%3A%2F%2Fd3f1iyfxxz8i1e.cloudfront.net%2Fcourses%2Fcourse_image%2Fd935778c9e14.svg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=9148d1d9c8f81ef3ce17551a088961b9`} text={`In this course, Azure administrators learn how to configure and manage virtual networks, enabling them to establish secure and efficient network infrastructure within the Azure ecosystem. Gain the skills needed to optimize network connectivity, implement network security measures, and ensure smooth communication between resources in Azure.`}/>
      <Card title={`AZ-104: Configure and manage virtual networks for Azure administrators`} image={`https://ccweb.imgix.net/https%3A%2F%2Fd3f1iyfxxz8i1e.cloudfront.net%2Fcourses%2Fcourse_image%2F41405d314f5a.svg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=a6f6651bcc1470ada7ec48ce0172d5e1`} text={`
Explore the fundamentals of Microsoft Dynamics 365 Marketing in this comprehensive course, designed to provide an in-depth understanding of the key features and functionalities of Dynamics 365 for marketing purposes.`}/>
      <Card title={`Create and use analytics reports with Power BI`} image={`https://365solutions.com/wp-content/uploads/2019/06/powerbi-reports-bi.png`} text={`In this comprehensive course on creating and using analytics reports with Power BI, you will learn the fundamentals of Power BI, explore data-gathering techniques, connect to multiple data sources, create customized visuals, configure dashboards, and learn how to publish and share reports with your team or the wider audience`}/>
      </div>
      </section>
      {/* <section>
        <div class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">

              <p class="text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1902/1902726.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Dictionary
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  The dictionary search feature allows users to easily find the
                  meaning of words and access their pronunciations. With a
                  simple search, users can obtain comprehensive definitions,
                  synonyms, antonyms, and example sentences for any word they
                  want to explore.
                </p>
                <a
                  href="/Dictionary"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline space-y- "
                >
                  Check out here
                </a>
              </div>

              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3261/3261308.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Random Quiz Game
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Enjoy a challenging quiz game with 10 randomly generated
                  questions. Test your knowledge and have fun answering a
                  variety of engaging and thought-provoking questions.
                </p>
                <a
                  href="/Quiz"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </a>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1048/1048966.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  Assignment Generator
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  This feature simplifies assignment creation and allows for
                  convenient sharing and storage in a standardized PDF format.
                </p>
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Coming Soon
                </a>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1048/1048966.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  CalcXpert
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  This feature simplifies amths
                </p>
                <a
                  href="/CalcXpert"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </a>
              </div>
              <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3488/3488426.png"
                    alt="mockup"
                    width="40px"
                  />
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">
                  {" "}
                  GitHub Repository Search
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Explore and discover GitHub repositories easily with the
                  GitHub Repo Search feature. Search for repositories based on
                  keywords, topics, or specific criteria. Find relevant
                  projects, libraries, and resources for your development needs.
                </p>
                <a
                  href="/Github"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check out here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>

  )
}
