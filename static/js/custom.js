$(document).ready(function(){
    $('.hero').click(function(){
       var name = "",
           position = "",
           descriptionLine1 = "",
           descriptionLine2 = "",
           pic = "",
           fb = "";

       if($(this).hasClass('kevin')){
         name = "Kevin Y. Aton";
         position = "Webnified Graphic Designer";
         descriptionLine1 = "Kevin is a embodiement of a modern picasso. He is a born with an innate talent in arts and illustration. Now, as he works with Webnified Inc, He is on the move to put his illustration to its zenith by using design and art that illustrate and gives life to appls and technologies!";
         descriptionLine2 = "Armed with pencil, paper, creative softwares and his trusty ol’ sketchbook, Kevin is on the move to make the applications at Webnified tick, lively and with character.";
         pic = "img/team/profile-card/kevin-irl.png";
         fb = "https://www.facebook.com/Kevin1617";
       } else if ($(this).hasClass('edsil')){
         name = "Edsil R. Basadre";
         position = "Webnified Software Engineer / Frontend";
         descriptionLine1 = "Edsil is a pixel and code perfectionist guy who focuses on frontend and the experience a user would feel in using applications engineered at Webnified. He is awarded for being part of the team who won at Philippine Web Development Hachkathon for Charities (by PWDO) at Microsoft PH.";
         descriptionLine2 = "Edsil makes sure that the products and applications made by Webnified is as intuitive, fast, and effecient as possible by bending technologies to his will!";
         pic = "img/team/profile-card/edsil-irl.png";
         fb = "https://www.facebook.com/Andresky.Bonifaciosky";
       } else if ($(this).hasClass('logi')){
         name = "Niel Patrick M. Lugpatan";
         position = "Webnified Creative Director / Co-Founder";
         descriptionLine1 = "Niel, most commonly known as “Logi”, is the creative and design chieftan of Webnified Inc., A whiz at user experience, design and branding, Logi takes it to the next level at Webnified Inc. He has been a freelance UX Designer and Web Designer at startups before and an active volunteer / speaker at tech events held by Google Developers Group CDO.";
         descriptionLine2 = "Burning with passion to bring out the design that makes technology created by Webnified Inc. more human friendly and the vision to create technology products that could actually be used by your grandparents is Logi’s Ebil epic skill manifestation!";
         pic = "img/team/profile-card/logi-irl.png";
         fb = "https://www.facebook.com/logi.ebiil";
       } else if ($(this).hasClass('gerber')){
         name = "Gerber U. Garcia";
         position = "Webnified Operations Consultant";
         descriptionLine1 = "A seasoned operations professional with 10 years of experience doing corporate and business streamline processes in local and multi-national companies, with particular strengths in Business Development, Channel Management Training, Account Management, Operations Management, Organizational Development, Process Improvement and Project Management.";
         descriptionLine2 = "His next career step would be to maximize his contribution as a business professional through involvement in management activities that is deeply involved in strategy formulation and business model creation.";
         pic = "img/team/profile-card/gerber-irl.png";
         fb = "https://www.facebook.com/gerber.garcia.35";
       } else if ($(this).hasClass('raven')){
         name = "Raven G .Duran";
         position = "Webnified CEO / Founder";
         descriptionLine1 = "Raven, the ideator and technology head behind Webnified Inc., has been in the field of web and cloud technology ever since he was 15. Had been awarded at several programming / web competitions. An active community servant leader and Youngest Speaker in the field of technology and student leadership (ICTS, Google Developers Group, Supreme Student Council, Ayala Young Leaders, and Kagayan Information Technology Students).";
         descriptionLine2 = "Armed with sheer passion, mindset for excellence and vision for innovation in the field of technology comes the idea to build what is now called Webnified Inc.!";
         pic = "img/team/profile-card/raven-irl.png";
         fb = "https://www.facebook.com/rabintoy";
       } else if ($(this).hasClass('papot')){
         name = "Ronald Ryan T. Aluyen";
         position = "Webnified Sales Consultant";
         descriptionLine1 = "Ryan has been in the industry of innovations for more than 10 years. Providing architectures and technical feasibilities in the field of telecommunications, banking and mobile payments. He has worked with the big tech companies in the Philippines the past years and the experience and level of knowledge he had over time has turn to a passion to create and impact more using innovations particularly in the field of technology.";
         descriptionLine2 = "Armed with his ideas, experience and innovative thinking, Ryan can easily sell out applications that works how people would want them to be!";
         pic = "img/team/profile-card/papot-irl.png";
         fb = "https://www.facebook.com/Ronald.Ryan.Tan.Aluyen";
       } else if ($(this).hasClass('juls')){
         name = "Jules A. Mercado";
         position = "Webnified Software Engineer / Frontend";
         descriptionLine1 = "Jules is at heart a thinker and innovations guy with the desire to put a dent in the world using technology for community one step at a time. His passion is what drives him to learn anything technology related. Though, don’t get fooled for he is not just your typical “Jack of all trades” guy, for he shines best at engineering disruptive softwares!";
         descriptionLine2 = "With his tinkering and fast learning ability, Jules is able to put together the pieces of technology like a puzzle to make it to something people would want to use and Webnified’s going to be proud of.";
         pic = "img/team/profile-card/juls-irl.png";
         fb = "https://www.facebook.com/julsm1";
       } else if ($(this).hasClass('dimful')){
         name = "Dimful D. Benantolis";
         position = "Webnified Software Engineer / Backend";
         descriptionLine1 = "Dimful, the “Guitarman” writes code like how he graciously struck and pluck his accoustic guitar. An achiever in the field of competitive programming (Champion of Regional Programming Competitions), he uses this algorithmic sense and ability to make applications that are intuitive and optimized.";
         descriptionLine2 = "Dimful is responsible for Webnified’s solid backend and makes sure that database is as secure, reliable and lightning fast as possible!";
         pic = "img/team/profile-card/dimful-irl.png";
         fb = "https://www.facebook.com/dimful";
       } else if ($(this).hasClass('geoff')){
         name = "Geoff D. Diaz";
         position = "Webnified Software Engineer / Research";
         descriptionLine1 = "Geoff is a tinkerer, code ninja, and a “tell me, I’ll build it” guy. He’s abiliity to turn ideas into reality is brought by his tinkering and algorithmic thinking ability. Awarded as champion in several programming competitions (QITC, ICT GEEK, ICTS and DevCon), he is a geek at heart.";
         descriptionLine2 = "Having his passion in the art of coding and technology tinkering, Geoff makes or engineer ideas into usable and lab tested applications or products at Webnified Inc.!";
         pic = "img/team/profile-card/geoff-irl.png";
         fb = "https://www.facebook.com/Dyl3r";
       } 

       $('.profile-card').find(".profile-img").find("img").attr({src: pic, alt: name});
       $('.profile-card').find(".identity").find(".name").text(name);
       $('.profile-card').find(".identity").find(".position").text(position);
       $('.profile-card').find(".identity").find(".fb-link").find("a").attr("href",fb);
       $('.profile-card').find(".awesome-desc").find("p").first().text(descriptionLine1);
       $('.profile-card').find(".awesome-desc").find("p").first().next().text(descriptionLine2);
    });
});

new WOW().init();

$(document).ready(function() {
  $("#project-slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
    
  });

  $('.send-button').click(function(){
      var needChoice = $.trim($('#type option:selected').text());
      var nameBody = $.trim($('#name').val());
      var emailBody = $.trim($('#email').val());
      var mobileBody = $.trim($('#phone').val());
      var messageBody = $.trim($('#projectInfo').val());
      $('.contact-fields').hide(500);

      $.post( "send.php", { message: messageBody, need: needChoice, name: nameBody, email: emailBody, mobile: mobileBody  })
      .done(function( data ) {
        if ($.trim(data) == 'error') {
          alert("There has been an error. Please refresh this page and try again.");
          return;
        } else {
          $('.message-sent').show(500);
          return;
        }
      });
  });

  // Projects
  $('.project-item').click(function(){
    var projectPic = "",
         projectName = "",
         projectHeading = "",
         projectDescription = "";

    if($(this).hasClass('slide1')){
      projectPic = "img/slider/slide1.jpg";
      projectName = "Philippine Breast Cancer Network";
      projectHeading = "The Philippines’ Largest Network of Communities that battles Breast Cancer";
      projectDescription = "The Philippine Breast Cancer Network is the country's leading not-for-profit volunteer service network focused on identifying the environmental causes of breast cancer. Webnified has collaborated with PBCN to create an action oriented site that triggers target emotions and make them share the advocacy to fight breast cancer.";
    } else if($(this).hasClass('slide2')) {
      projectPic = "img/slider/slide2.jpg";
      projectName = "BayaniJuan";
      projectHeading = "Harnessing technology for Nation Building";
      projectDescription = "Joining the Philippines' Web Development hackathon for Charities (Caritakathon). Webnified has organized and form a site with the sole purpose to get leads and collaborate with organizations using cloud technology for nation building.";
    } else if($(this).hasClass('slide3')) {
      projectPic = "img/slider/slide3.jpg";
      projectName = "Project Lego";
      projectHeading = "Javascript Automated Testing and Monitoring Library";
      projectDescription = "We're done with the plethora of testing and monitoring tools available for Javascript on the web. And we've made a resolution to build a better suited automated testing and monitoring library for our projects and hence Project Lego!";
    } else if($(this).hasClass('slide4')) {
      projectPic = "img/slider/slide4.jpg";
      projectName = "HyFlex®";
      projectHeading = "The world’s biggest selling industrial work glove.";
      projectDescription = "HyFlex®, with the mission of protecting millions of hands world wide and is the biggest selling industrial work glove has collaborated Webnified, Inc. to create a website that will not just promote and sell their products but would also connect them to their audience and build a brand promise extending reach and availability";
    } else if($(this).hasClass('slide5')) {
      projectPic = "img/slider/slide5.jpg";
      projectName = "GiftFold";
      projectHeading = "International online donations processor";
      projectDescription = "GiftFold is a startup that focuses on Online Donations Processing. Charities trust GiftFold to process millions of dollars in online donations on their behalf. We at Webnified, Inc. is responsible in the development of the web application and brand that people could not only trust but would is also secure, fast, reliable and effecient as possible.";
    }

    $('.project-card').find("img").attr({src: projectPic, alt: projectName});
    $('.project-card').find(".project-name").text(projectName);
    $('.project-card').find(".project-title").text(projectHeading);
    $('.project-card').find(".project-desc").text(projectDescription);
  });

});