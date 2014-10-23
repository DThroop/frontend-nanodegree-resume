//var firstName="Dean";
//var awesomeThoughts="I am "+firstName+" and I am AWESOME!";
//var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
//console.log(funThoughts);

//$("#main").append(funThoughts);

//var name="Dean Throop";
//var role="Software Engineer";

//$("#main").append(skills[0]);

//$("#main").append(skills.length);
//var skills=["awesomeness","programming","teaching","JS"];

var bio={
  "name" : "Dean Throop",
  "role" : "Software Engineer",
  "contacts" : {
    "mobile" : "208-305-4361",
    "email" : "DThroop@TrackITServices.com",
    "github" : "DThroop",
    "twitter" : "@Dean.Throop",
    "location" : "Craigmont, ID"
  },
  "BioPic" : "images/fry.jpg",
  "welcome" : "Howdy ho neighbor!",
  "skills" : [
  "awesomeness",
  "programming",
  "teaching",
  "JS"
  ]
};

var work={
  "jobs" : [
  {
    "company" : "Pacific Cabinets, Inc.",
    "city" : "Ferdinand",
    "title" : "IT Manager",
    "state" : "ID",
    "date" : "April 2009-current",
    "description" : "I did something"
  },
  {
    "company" : "University of Idaho",
    "city" : "Moscow",
    "title" : "Bitch",
    "state" : "ID",
    "date" : "May 2008-April 2009",
    "description" : "I did something"
  }
  ]
};

var education = {
  "schools" : [
  {
    "name" : "University of Idaho",
    "city" : "Moscow, ID",
    "degree" : "BS",
    "major" : ["Computer Science","Political Science"]
  },
  {
    "name" : "Kamiah High School",
    "city" : "Kamiah, ID",
    "degree" : "Diploma"
  }
  ]
};

var projects = {
  "theProjects" : [
    {
      "title" : "A Proj Title",
      "dates" : "2014-2015",
      "description" : "A description",
      "image" : "something.jpg"
    },
    {
      "title" : "Another Proj Title",
      "dates" : "2015-2016",
      "description" : "Another description",
      "image" : "another.jpg"
    }
  ]
};
//education.name="University of Idaho";
//education.years=4;
//education.city="Moscow, ID";

//var formattedName=HTMLheaderName.replace("%data%", bio.name);
//var formattedRole=HTMLheaderRole.replace("%data%", bio.role);

//console.log(formattedName);
//console.log(formattedRole);

$("#header").prepend(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").prepend(HTMLgithub.replace("%data%",bio.contacts.github));
$("#header").prepend(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#header").prepend(HTMLemail.replace("%data%",bio.contacts.email));
$("#header").prepend(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#header").prepend(HTMLWelcomeMsg.replace("%data%",bio.welcome));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace("%data%",bio.BioPic));

//$("#main").append(currentJob.position);
$("#main").append(education["schools"].name);

//$("#header").append(HTMLskillsStart);
//for(skill in bio.skills)
if(bio.skills!=0)
{
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%",bio.skills));
}

$(document).click(function(loc){
  //logClicks(loc.clientX,loc.clientY);
  logClicks(loc.pageX,loc.pageY);
  //pageX or pageY
  //http://dev-notes.com/code.php?q=33 for production grade code
});

displayWork();

$("#main").append(internationalizeButton);

function displayWork()
{
  for(job in work.jobs)
  {
    var formattedEmployer =
      HTMLworkEmployer.replace("%data%",work.jobs[job].company);
    var formattedTitle =
      HTMLworkTitle.replace("%data%",work.jobs[job].title);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployer+formattedTitle);
    $(".work-entry:last").append(
      HTMLworkDates.replace("%data%",work.jobs[job].date));
  }
}

function inName(name)
{
  var names=name.trim().split(" ");
  names[0]=
    names[0].slice(0,1).toUpperCase() +
    names[0].slice(1).toLowerCase();
  return names[0] + " " + names[1].toUpperCase();
}

projects.display = function()
{
  for (project in projects.theProjects)
  {
    $("#projects").append(HTMLprojectStart);
    $("#projects").append(
      HTMLprojectTitle.replace("%data%",projects.theProjects[project].title));
    $("#projects").append(
      HTMLprojectDates.replace("%data%",projects.theProjects[project].dates));
    $("#projects").append(
      HTMLprojectDescription.replace("%data%",projects.theProjects[project].description));
    //$("#projects").append(
    //  HTMLprojectImage.replace("%data%",projects[project].image));
  }
}

projects.display();

function locationizer(work_obj) {
  var locations=[];
  for(job in work_obj.jobs)
  {
    //console.log(locations.length);
    //console.log(work_obj.jobs[job].location);
    locations.push(work_obj.jobs[job].location);
  }
  //locations.pop();
  return locations;
}
