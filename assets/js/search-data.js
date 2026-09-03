// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-selected-publications",
          title: "Selected publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "news-we-started-our-lab",
          title: 'We started our lab!',
          description: "",
          section: "News",},{id: "news-we-have-joined-the-vib-ai-as-a-core-member",
          title: 'We have joined the VIB.AI as a core member.',
          description: "",
          section: "News",},{id: "news-manas-raikar-joined-us-as-a-phd-student",
          title: 'Manas Raikar joined us as a PhD student!',
          description: "",
          section: "News",},{id: "news-céline-debou-joined-us-for-a-three-month-visit",
          title: 'Céline Debou joined us for a three-month visit!',
          description: "",
          section: "News",},{id: "news-pieter-jan-vanoost-joined-us-as-a-new-phd-student",
          title: 'Pieter Jan Vanoost joined us as a new PhD student!',
          description: "",
          section: "News",},{id: "news-the-lab-has-been-awarded-an-erc-starting-grant",
          title: 'The lab has been awarded an ERC Starting Grant!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%6F%75%74%65%72.%73%61%65%6C%65%6E%73@%75%67%65%6E%74.%62%65", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=msYffYEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
