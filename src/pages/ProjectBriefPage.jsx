import { React, useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const ProjectBrief = () => {
  const [shownxt, setshownxt] = useState(false);
  const [showprev, setshowprev] = useState(false);
  const ProjectId = useParams().id;
  console.log(ProjectId);
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: [
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
        "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
        "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
      ],
      images: [
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
      ],
    },
    {
      id: 2,
      name: "Project 2",
      description: [
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
        "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
        "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
      ],
      images: [
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
      ],
    },
    {
      id: 3,
      name: "Project 3",
      description: [
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
        "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
        "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
      ],
      images: [
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
      ],
    },
    {
      id: 4,
      name: "Project 4",
      description: [
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
        "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
        "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
      ],
      images: [
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
      ],
    },
    {
      id: 5,
      name: "Project 5",
      description: [
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
        "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
        "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think",
      ],
      images: [
        "https://static.wixstatic.com/media/3e801a90be0c49beb6e8b0b2fb157374.jpg/v1/fit/w_1740,h_437,q_90/3e801a90be0c49beb6e8b0b2fb157374.webp",
        "https://static.wixstatic.com/media/a8a68fb8d07f45ccbecec54d20509694.jpg/v1/fit/w_1740,h_437,q_90/a8a68fb8d07f45ccbecec54d20509694.webp",
        "https://static.wixstatic.com/media/20b77430ee264fa296a893330e2b839b.jpg/v1/fit/w_1740,h_437,q_90/20b77430ee264fa296a893330e2b839b.webp",
      ],
    }
  ];
  useEffect(() => {
    console.log(projects.length);
    if (parseInt(ProjectId) === 1) {
      setshowprev(false);
      setshownxt(true);
    } else if (parseInt(ProjectId) === projects.length) {
      setshowprev(true);
      setshownxt(false);
    } else {
      setshowprev(true);
      setshownxt(true);
    }
  });
  const project = projects.find(
    (project) => project.id === parseInt(ProjectId)
  );
  console.log(project);
  function handleNxtProject(ProjectId) {
    let Id = parseInt(ProjectId);
    Id += 1;
    console.log(Id);
  }
  function handlePervProject(ProjectId) {
    let Id = parseInt(ProjectId);
    Id -= 1;
    console.log(Id);
  }
  return (
    <div className="py-18 bg-[#e9ebeb]">
      <div className="container mx-auto">
        <div className="bg-white py-20 px-24">
          <div>
            <h1 className="text-xl font-medium ">{project.name}</h1>
          </div>
          <div className="mt-30">
            {project.description.map((desc, index) => (
              <p className="py-2" key={index}>
                {desc}
              </p>
            ))}
          </div>
        </div>
        <div className="pt-18 bg-[#e9ebeb]">
          <div className="container mx-auto p-4 xl:px-80">
            <div className="flex flex-col w-full gap-24">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 xl:px-80">
          <div className="flex justify-between items-center">
            {showprev && (
              <NavLink to={`/projects/${parseInt(ProjectId) - 1}`}>
                <div className="flex flex-row items-center gap-4">
                  <MdOutlineKeyboardArrowLeft className="text-2xl" />
                  <p className="font-bold text-xl">Previous Project</p>
                </div>
              </NavLink>
            )}
            {shownxt && (
              <NavLink to={`/projects/${parseInt(ProjectId) + 1}`}>
                <div className="flex flex-row items-center gap-4">
                  <p className="font-bold text-xl">Next Project</p>
                  <MdOutlineKeyboardArrowRight className="text-2xl" />
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBrief;
