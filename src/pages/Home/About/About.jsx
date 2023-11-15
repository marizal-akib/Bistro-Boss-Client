import bg from "../../../assets/home/chef-service.jpg";
const About = () => {
  return (
    <div
      className="hero min-h-screen mb-10"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-5xl py-28 bg-white text-black">
          <h1 className="mb-5 text-5xl  font-light">Bistro Boss</h1>
          <p className="mb-5 text-lg w-5/6 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
