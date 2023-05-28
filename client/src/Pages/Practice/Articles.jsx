import React from 'react'
import  Card from '../Card'
export default function Articles() {
  return (
    <div>
    <section>
      <div class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to Practice Section
            </h1>
          
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">"Elevate Your Coding Game: Level up your programming skills with hands-on practice and challenging exercises in our dedicated Programming Practice Section</p>
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
              src="https://cdn.unstop.com/uploads/images/practice/practice-vector.png?d=749x646"
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">HackerRank Skills Test</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">HackerRank, a platform for learning algorithms and data structures and preparing for coding interviews, provides skills certifications tests in topics such as problem solving, Python, and JavaScript.</p>

          </div>
          </div>
    </section>
    <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
<Card image={`https://www.marketing91.com/wp-content/uploads/2020/06/Problem-Solving-Skills-1024x576.jpg`} text={`     Test and certify your basic problem-solving skills with the Problem Solving (Basic) Skills Certification Test by HackerRank..`} title={`Problem Solving (Basic) Skills Certification Test`}/>
<Card image={`https://clspt-uploads-prd.s3.us-east-1.amazonaws.com/unsigned/post__javascript-certification-0808b8be49caac41e195ae8b19ad8ff5.jpg`} text={`Test your knowledge of JavaScript syntax, data types, functions, and basic programming concepts, and validate your proficiency in JavaScript for web development and coding tasks.`} title={`JavaScript (Basic) Skills Certification`}/>
<Card image={`https://th.bing.com/th/id/OIP.AgacsgdklG2UNqqeBjBfdgHaEK?pid=ImgDet&rs=1`} text={`Showcase your abilities in Node.js development and enhance your credentials for backend web development and server-side scripting.`} title={`Node (Basic) Skills Certification`}/>

</div>
</section>
<section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Data Structures Practice</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Sharpen your problem-solving skills and master data structures and algorithms with our DSA practice section. Solve coding challenges, tackle algorithmic problems, and enhance your proficiency in programming for technical interviews and real-world applications.</p>

          </div>
          </div>
    </section>
    <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
    <Card title={`DSA Sheet by Love Babbar`} image={`https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220211142631/Love-Babbar-DSA-Sheet-450-Coding-Questions-min.png`} text={`Master the art of Data Structures and Algorithms with Love Babbar's DSA Sheet, packed with 450 coding questions. Prepare yourself for technical interviews at top companies like Amazon, Microsoft, and Google, by strengthening your understanding of DSA concepts and gaining proficiency in programming languages like C++, Java, or Python, along with the efficient use of STL.`}/>
    <Card title={`Top 100 DSA interview questions`} image={`https://media.geeksforgeeks.org/wp-content/uploads/20230419180619/Top-100-dsa-interview-questions-copy.webp`} text={`
Prepare for your next technical interview with the Top 100 DSA interview questions, carefully categorized based on the data structures and algorithms utilized. Enhance your problem-solving skills and excel in interviews by diving into this comprehensive collection of practice questions.`}/>
    <Card title={`Top 10 Algorithms and Data Structures for Competitive Programming`} image={`https://media.geeksforgeeks.org/wp-content/cdn-uploads/Competitive-Programming-1.jpg`} text={`Master the essential algorithms and data structures required for competitive programming with this curated course. Gain a competitive edge by learning and practicing the top 10 algorithms and data structures commonly encountered in programming contests and coding competitions.`}/>
    </div>
    </section>
    <section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">IBM Free Certificates</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">IBM’s platform CognitiveClass.ai offers 90 courses and 10 learning paths in data science, AI, big data, cloud computing, and blockchain..</p>

          </div>
          </div>
    </section>
    <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card title={`Deep Learning with TensorFlow`} image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/4a8a20cb6898_w240.webp`} text={`This course on TensorFlow covers the fundamentals of deep learning, including linear and nonlinear regression, logistic regression, activation functions, convolutional neural networks (CNNs) for image processing, recurrent neural networks (RNNs) for sequence data, unsupervised learning techniques such as restricted Boltzmann machines, and the use of autoencoders for feature extraction and data compression`}/>
      <Card title={`Build Swift Mobile Apps with Watson AI Services`} image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/93138da85d3f_w240.webp`}text={`In this short course, you'll learn how to write three mobile apps in Swift on iOS that use the IBM Watson Cloud Developer SDK to access the Watson service. You'll learn how to write those applications by using the following Watson services: - Watson Natural Language Understanding: A collection of APIs that provide text analysis by processing natural language.`}/>
      <Card title={`Build Swift Mobile Apps with Watson AI Services`}     image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/41e194bf280b_w240.webp`} text={`Welcome to this machine learning course on Dimensionality Reduction. Dimensionality Reduction is a category of unsupervised machine learning techniques used to reduce the number of features in a dataset. Dimension reduction can also be used to group similar variables together.In this course, you will learn the theory behind dimension reduction, and get some hands-on practice using Principal Components Analysis (PCA) and Exploratory Factor Analysis (EFA) on survey data.`}/>
      </div>
      </section>
      <section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">GitLab Free Certificates</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">GitLab, the popular version control website for hosting your repos, also offers free online courses to grow your professional skills.</p>

          </div>
          </div>
    </section>
    <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card title={`GitLab 101 Tool Certification`} image={`course.PNG`} text={`Everyone at GitLab needs to know how to use GitLab and be technical to some level. This training is geared toward GitLab team members who are in non-engineering roles (i.e. talent acquisition, peopleops, marketing, finance, etc) and/or have not used a DevOps tool like GitLab before. This can also be helpful for non-engineering people outside of GitLab wanting to learn how to use GitLab for personal projects`}/>
      <Card title={`GitLab 201 Tool Certification`} image={`https://sdtimes.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-20-at-4.25.04-PM.png`} text={  `This course on GitLab 201 covers essential skills for effective collaboration and project management using GitLab. Learn to create epics, review and provide feedback on merge requests, and create new handbook pages to enhance documentation and knowledge sharing within your organization. Gain practical knowledge to streamline your development workflow and maximize productivity with GitLab.`}/>
      <Card title={`GitLab All-Remote Certification`} image={`https://cdn.pathfactory.com/assets/10519/thumbnails/343277/71d1e9d2-52e6-49ef-a5c9-cc2cfe6714c6.png`} text={`This certification is ideal for aspiring or new managers, individual contributors, or anyone who is looking to rapidly increase their remote foundational skills and strategic perspective. The certification is also ideal for individuals who prefer to complete training at their own pace through reading comprehension and viewing video.`}/>
      </div>
      </section>

  </div>
  )
}
