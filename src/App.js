import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import image from "./aboutimage.png";

function App() {
  const handleclick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.fname.value.trim();
    const lname = e.target.lname.value.trim();
    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    if (!fname || !lname || !email || !subject || !message) {
      toast.error("Please fill all required fields!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Enter a valid email address!");
      return;
    }

    toast.success("Message Sent Successfully!");
    e.target.reset();
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">Developer</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="contact-btn" onClick={handleclick}>
          Contact
        </button>
      </header>

      <section id="home" className="hero">
        <div className="hero-left">
          <div className="image-wrapper">
            <img src="/profile.jpg" alt="profile" className="profile-img" />
          </div>
        </div>

        <div className="hero-right">
          <h1>
            Hey I'm <span className="highlight">Sheik Thavuth</span>
          </h1>
          <h2>
            I'm a <span className="highlight">Full Stack Developer</span>
          </h2>

          <p>
            I create responsive UI with React and powerful backend systems using
            Node.js, CSS,Html & MySQL. Passionate about    problem solving
            and building real-world applications.
          </p>

          <div className="socials">
            <a
              href="https://github.com/sheikthavuthwork-dot"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/sheik-thavuth-442169326"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <a href="/Sheik-Thavuth-Resume.pdf" download>
            <button className="download-btn">Download CV</button>
          </a>
        </div>
      </section>

      <section id="about" className="about">
  <div className="about-container">

    <div className="about-text">
      <h2>Hello You</h2>

      <h4 className="sub-heading">
        MY NAME IS SHEIK THAVUTH & I’M A FULL STACK DEVELOPER.
      </h4>

      <p>
        My journey started with curiosity about how websites work. Over time,
        I learned HTML, CSS, JavaScript and moved into frameworks like React
        and backend technologies like Node.js.
      </p>

      <p>
        I love building clean UI, fast APIs, and full applications that help
        real people.
      </p>

      <p className="moral">
        MORAL OF THE STORY: Keep learning, keep building — anything is
        possible.
      </p>

      {/* 🔥 Added Education Section */}
      <div className="education">
        <h3>Education</h3>

        <ul>
          <li>
            <strong>Bachelor of Computer Applications (BCA)</strong>  
             <br></br>Mohamed Sathak College of Arts and Science.<br></br>
             2018-2021
          </li>

          <li>
            <strong>Higher Secondary Education</strong> <br></br> 
             St'Annes Matric and Higher Secondary School.<br></br>
             2016-2018
          </li>

         
        </ul>
      </div>

      <button className="chat-btn" onClick={handleclick}>
        CONTACT ME FOR A CHAT
      </button>
    </div>

    <div className="about-image">
      <img src={image} alt="Sheik Thavuth" className="about-image" />
    </div>

  </div>
</section>


      

      <section id="skills" className="skills">
  <h2 className="skills-title">What I Do</h2>
  <p className="skills-text">
    I am a full stack developer skilled in modern web technologies.
    Here are the tools & technologies I use:
  </p>

  <div className="skills-grid">

    <div className="skill-card">
      <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html" />
      <p>HTML</p>
    </div>

    <div className="skill-card">
      <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css" />
      <p>CSS</p>
    </div>

    <div className="skill-card">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="javascript" />
      <p>JavaScript</p>
    </div>

    <div className="skill-card">
      <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="reactjs" />
      <p>React JS</p>
    </div>

    <div className="skill-card">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png"  alt="github"/>
      <p>GitHub</p>
    </div>

    <div className="skill-card">
      <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="nodejs" />
      <p>Node JS</p>
    </div>

  </div>
</section>


      

      <section id="projects" className="projects">
        <h2 className="projects-title">My Works</h2>
        <p className="projects-subtitle">
          Take a look at some of the projects I’ve built with passion & creativity.
        </p>

        <div className="projects-container">

          <a
            href="YOUR_TODO_APP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b"
              alt="To-Do App"
            />
            <div className="project-info">
              <h3>To-Do App</h3>
              <p>Task management app with add/edit/delete & local storage support.</p>
              <div className="tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>
            </div>
          </a>

          <a
            href="YOUR_CURRENCY_CONVERTER_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/1*2bf303U0V7AH3wP6ezUZ5g.jpeg"
              alt="Currency Converter"
            />
            <div className="project-info">
              <h3>Currency Converter</h3>
              <p>Live currency conversion using API with minimal UI.</p>
              <div className="tags">
                <span>API</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>
            </div>
          </a>

          <a
            href="YOUR_WEATHER_APP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
              alt="Weather App"
            />
            <div className="project-info">
              <h3>Weather Forecast</h3>
              <p>Displays weather & 5-day forecast using OpenWeather API.</p>
              <div className="tags">
                <span>React</span>
                <span>API</span>
                <span>CSS</span>
              </div>
            </div>
          </a>

          <a
            href="YOUR_BAKERY_APP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/53db6594438199.5e7eac01a0f80.jpg"
              alt="Bakery App"
            />
            <div className="project-info">
              <h3>Bakery App</h3>
              <p>Clean UI bakery app with product listing & cart features.</p>
              <div className="tags">
                <span>React</span>
                <span>CSS</span>
              </div>
            </div>
          </a>

        </div>
      </section>




      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <p className="contact-label">CONTACT</p>
            <h1 className="contact-title">
              Let’s make something <br /> great together
            </h1 >
            <p className="contact-desc">
              Feel free to reach out for collaborations or inquiries.
            </p>

            <div className="contact-socials">
              <a
                href="https://github.com/sheikthavuthwork-dot"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="mailto:sheikthavuthwork@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/sheik-thavuth-442169326"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label>First Name</label>
                  <input
                    name="fname"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>

                <div>
                  <label>Last Name</label>
                  <input
                    name="lname"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <label>Email *</label>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />

              <label>Subject</label>
              <input name="subject" type="text" placeholder="Subject" required />

              <label>Your Message *</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Submit Form
              </button>
            </form>

            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

