import CustomButton from "./CustomButton";
import $ from "jquery";

function calculateAge(birthdate) {
  var today = new Date();
  var birthdate = new Date(birthdate);

  var years = today.getFullYear() - birthdate.getFullYear();

  var birthdateMonth = birthdate.getMonth();
  var todayMonth = today.getMonth();
  if (
    todayMonth < birthdateMonth ||
    (todayMonth === birthdateMonth && today.getDate() < birthdate.getDate())
  ) {
    years--;
  }

  return years;
}

function About() {
  function clickEvent() {
    const headerHeight = 90;
    const pos = $("#skill").offset().top - headerHeight;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div className="about" id="about">
      <h1>
        ABOUT <b>ME</b>
      </h1>
      <div className="about-container">
        <img src="../assets/pic.jpg" />
        <div>
          <h1>Software Developer / Web Developer</h1>
          <p>
            My name is <b>Ronald Gulayan</b>, just an ordinary person, and my
            dream is to become a software developer or web developer. I always
            enjoy creating something on my own and challenging myself in various
            things.
          </p>
          <div className="info">
            <ul>
              <li>
                <b>Name:</b> Gulayan, Ronald G.
              </li>
              <li>
                <b>Age:</b> {calculateAge("2002-07-12")}
              </li>
              <li>
                <b>Email:</b> ronaldgulaya***@gmail.com
              </li>
            </ul>
            <ul>
              <li>
                <b>Phone:</b> +639384535***
              </li>
              <li>
                <b>Address:</b> Blk 1 Lot 1 Fake Street Cavite
              </li>
              <li>
                <b>Hobby:</b> Coding, Solving logic, ML
              </li>
            </ul>
          </div>
          <CustomButton
            clickEvent={clickEvent}
            text="My Skills and Tools"
            color="rgb(0, 136, 136)"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
