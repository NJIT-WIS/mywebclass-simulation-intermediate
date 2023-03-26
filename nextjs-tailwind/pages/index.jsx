import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from 'next/head';

function HomePage() {
  return (
    <div>
      <Head>
        <title>My Webclass Homepage</title>
        <meta name="description" content="Revolutionize your teaching with cutting-edge software engineering skills. Join MyWebClass and discover advanced technologies that will transform your teaching and their learning journey." />
        <meta name="keywords" content="MyWebClass, software engineering skills, teaching, learning journey, advanced technologies, students, education, online learning, e-learning, web development, coding, programming, curriculum, courses, tutorials, instructors, education technology, virtual classroom, distance learning, student engagement" />
      </Head>
      <Header />
      <div class="mx-auto container w-4/6 h-screen">
        <div class="mt-24 mx-auto h-4/6 bg-white rounded-lg shadow-2xl overflow-hidden">
          <div class="flex flex-col md:flex-row h-full">
            <div class="basis-4/6 my-auto pl-10">
              <div class="tracking-wide text-black-500 font-bold">
                <h1 class="text-4xl hero-title">Revolutionize your teaching</h1>
              </div>
              <a
                href="#"
                class="block mt-4 md:w-5/6 leading-7 text-lg font-medium text-black hover:underline"
              >
                Empower your students with cutting-edge software engineering
                skills. Join MyWebClass and discover advanced technologies that
                will transform your teaching and their learning journey.
              </a>
              <div class="mt-4">
                <button class="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg">
                  Start Here
                </button>
              </div>
            </div>
            <div class="basis-2/6">
              <img
                class="h-full w-full"
                src="/images/teacher.gif"
                alt="a teacher with students"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
