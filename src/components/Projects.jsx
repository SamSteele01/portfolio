import React, {Component} from "react";
import Hero from "./Hero.jsx";
import Single from "./Single.jsx";
import VideoSingle from "./VideoSingle.jsx";
import TitleBar from "./TitleBar.jsx";
import heroText from "../data/heroText.js";
import projectText from "../data/projectText.js";
import placeholder from "../styles/projectImages/responsive-design-dark-blue.png";
import Image1 from "../styles/projectImages/EZ-tour.png";
import Image2 from "../styles/projectImages/slack-overflow.png";
import Image3 from "../styles/projectImages/etsy.png";
import Image4 from "../styles/projectImages/Code-snippet2.png";
import Image5 from "../styles/projectImages/robot-linkedin.png";
import Image6 from "../styles/projectImages/memory-game.png";
import Image7 from "../styles/projectImages/bent-creek.png";

export default class Projects extends Component {

  render() {

    const strings = {
      heroImg1: "heroImg1",
      heroImg2: "heroImg2",
      heroImg3: "heroImg3",
      videoM4a1: "https://s3.us-east-2.amazonaws.com/samsteelewebdevportfolio/trimmed-eztour-presentation2.mp4",
      videoWebm1: "https://s3.us-east-2.amazonaws.com/samsteelewebdevportfolio/trimmed-eztour-presentation2.webm",
      title1: "EZ-Tour",
      title2: "Slack-overflow",
      title3: "Etsy",
      title4: "Code snippet organizer",
      title5: "LinkedIn for Robots",
      title6: "Memory game",
      title7: "Bent Creek Ceramics",
      link1: "https://eztour.herokuapp.com/",
      link2: "https://blooming-shore-88321.herokuapp.com/",
      link3: "https://tiy-durham-etsy-project.github.io/Etsy-group-project/",
      gitHub1: "https://github.com/SamSteele01/Final_Project",
      gitHub2: "https://github.com/TIY-Durham-Slackoverflow-project/Slackoverflow",
      gitHub3: "https://github.com/TIY-Durham-Etsy-project/Etsy-group-project/tree/master",
      gitHub4: "https://github.com/SamSteele01/Robot-LinkedIn",
      gitHub5: "https://github.com/SamSteele01/Code-snippet-organizer",
      gitHub6: "https://github.com/SamSteele01/memory-game",
      gitHub7: "https://github.com/SamSteele01/Week-one-project",
      category1: "Group Projects",
      description1: "Using GitHub, Trello, and an Agile methodology",
      category2: "Back End Projects",
      description2: "",
      category3: "Front End Projects",
      description3: ""
    }
  
    return (
      <div className="project">
        <Hero imageClassName={strings.heroImg1} heroText={heroText[1]}/>
        <TitleBar category={strings.category1} description={strings.description1} />
        <VideoSingle id={0} title={strings.title1} videoM4a={strings.videoM4a1} videoWebm={strings.videoWebm1} image={Image1} placeholder={placeholder} link={strings.link1} text={projectText[1]} gitHub={strings.gitHub1}/>
        <Single id={1} title={strings.title2} image={Image2} placeholder={placeholder} link={strings.link2} text={projectText[2]} gitHub={strings.gitHub2} backward={true}/>
        <Single id={2} title={strings.title3} image={Image3} placeholder={placeholder} link={strings.link3} text={projectText[3]} gitHub={strings.gitHub3}/>

        <Hero imageClassName={strings.heroImg2}
        // heroText={heroText[2]}
        />

        <TitleBar category={strings.category2} description={strings.description2} />
        <Single id={3} title={strings.title4} image={Image4} placeholder={placeholder} text={projectText[4]} gitHub={strings.gitHub4} backward={true}/>
        <Single id={4} title={strings.title5} image={Image5} placeholder={placeholder} text={projectText[5]} gitHub={strings.gitHub5} />
      </div>
    );
  }
}

Projects.propTypes = {
};
