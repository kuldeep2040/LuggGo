
import CountUp from "react-countup";
import { Lightbulb, Eye } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Empowering <span className="text-blue-500">Innovation</span>, One Line at a Time
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We're a team of makers, doers, and dreamers building products that matter. We craft modern solutions for real-world problems using elegant design and rock-solid tech.
        </p>
      </section>

      {/* Mission + Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Lightbulb className="text-blue-500" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To simplify technology for every business and individual by creating seamless digital experiences. We aim to build tools that are fast, intuitive, and scalable.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="text-blue-500" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To be the go-to digital partner for startups and enterprises across the globe, setting new standards in performance, design, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats with Typing Effect */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center grid sm:grid-cols-3 gap-12">
          <div>
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp end={50} duration={2} />+
            </h3>
            <p className="mt-2 text-gray-600">Clients Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp end={98} duration={2} />%
            </h3>
            <p className="mt-2 text-gray-600">Client Retention</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp decimals={1} end={4.9} duration={2} />/5
            </h3>
            <p className="mt-2 text-gray-600">Avg. Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Team Section with Dummy Images */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Meet Our <span className="text-blue-500">Founders</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {[
              {
                name: "Kaustubh Sharma",
                role: "Co-Founder & Full-Stack Dev",
                img: "https://media.licdn.com/dms/image/v2/D5603AQEIh4iCAKBj9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727974334078?e=1753315200&v=beta&t=nsG85cJNvIBWiTNwfntg4gFuEfIVmN4CWggmN5EPEII",
              },
              {
                name: "Kuldeep Singh",
                role: "Co-Founder & Tech Lead",
                img: "https://media.licdn.com/dms/image/v2/D4D03AQHhlc4U8FxlLw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698473083369?e=1753315200&v=beta&t=cZq5ihv8K6ijHuWEtOmKEkGrG891BkEw0inh64p95ic",
              },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mb-4"
                />
                <h4 className="font-medium text-lg">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Want to <span className="text-blue-500">Work With Us?</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Whether you're a founder with a vision or a developer looking to collaborate, we’re always open to meaningful conversations.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
