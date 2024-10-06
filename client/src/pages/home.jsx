import Navbar from "../components/navbar";
import homebg from "../assets/images/homebg.png";
import homecard1 from "../assets/images/homecard1.png";
import homecard2 from "../assets/images/homecard2.png";
import homecard3 from "../assets/images/homecard3.png";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Home = () => {
  const cards = [
    {
      img: homecard1,
      title: "Child Development Milestone",
      desc: "Learn about the key milestones in your child’s growth and development and share your experiences.",
    },
    {
      img: homecard2,
      title: "Work-Life Balance for Parents",
      desc: " Tips and advice on maintaining a healthy balance between your work life and parenting responsibilities.",
    },
    {
      img: homecard3,
      title: "Parenting in the Digital Age",
      desc: " Learn how to navigate the digital world safely with your children and manage screen time effectively.",
    },
  ];
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-full mt-2 flex justify-center items-center bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: `url(${homebg})` }}
      >
        <div className="flex justify-center items-center flex-col bg-white bg-opacity-80 w-4/5 md:w-1/2 rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4 text-center">
            Welcome to Parenting Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-700 italic mb-6 text-center">
            A place where parents can share experiences, tips, and insights to
            help each other raise happy and healthy families.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link
              href="#read-more"
              className="bg-[#A6DCE6] hover:bg-[#5C8C8F] text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300"
            >
              Explore Blogs
            </Link>
            <Link
              to="signin"
              className="bg-transparent hover:bg-[#A6DCE6] text-gray-800 border border-[#A6DCE6] hover:text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      <section id="about-us" className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#A6DCE6] mb-4">
            What is Parenting Blog About?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our Parenting Blog is a space where parents from around the world
            can connect, share their experiences, and learn from one another.
            Whether you’re a new parent or a seasoned pro, our community has
            something for everyone. Dive into topics ranging from child
            development, family activities, to advice on balancing work and
            parenthood.
          </p>
        </div>
      </section>
      <div className="flex flex-col ml-14 md:ml-0 md:items-center">
        <h1 className="text-center font-bold text-3xl text-[#A6DCE6] mt-3">
          {" "}
          Topics You Can Learn From
        </h1>
        <div className="flex flex-row flex-wrap gap-10 mt-10 mb-10 ">
          {cards.map((data) => (
            <div
              className="w-96  bg-gray-100 p-5 h-full shadow-gray-600 transition-transform   duration-500 hover:shadow-2xl  hover:scale-105   shadow-xl "
              key={data.title}
            >
              <img src={data.img} alt="" className="w-full h-52" />
              <h3 className="text-2xl font-bold mb-2">{data.title}</h3>
              <p className="text-gray-700 mb-4">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
