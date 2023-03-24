import Footer from "../components/Footer";
import Header from "../components/Header";

function HomePage() {
  return (
    <div class="h-screen">
      <Header />
      <div class="mt-24 container mx-auto w-4/6 h-2/4 bg-white rounded-lg shadow-md overflow-hidden">
        <div class="flex flex-row h-full">
          <div class="basis-3/4 my-auto pl-10">
            <div class="tracking-wide text-black-500 font-bold">
              <h1 class="text-5xl hero-title">Revolutionize your teaching</h1>
            </div>
            <a
              href="#"
              class="block mt-4 md:w-4/6 leading-7 text-lg font-medium text-black hover:underline"
            >
              Empower your students with cutting-edge software engineering
              skills. Join MyWebClass and discover advanced technologies that
              will transform your teaching and their learning journey.
            </a>
            <div class="mt-4">
              <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg">
                Start Here
              </button>
            </div>
          </div>
          <div class="basis-1/4">
            <img
              class="h-full"
              src="/images/teacher.gif"
              alt="a teacher with students"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
