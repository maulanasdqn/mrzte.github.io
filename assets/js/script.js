const { ref, setup, createApp } = Vue;

const app = createApp({
  setup() {
    const name = ref("Maulana Sodiqin");
    const welcome = ref("Coder.Linux Enthusiast");
    const greeting = ref("Hallo iam");
    const role = ref("Junior Frontend Developer");

    const getHome = () => {
      console.log("Get Home");
    };

    const getSkils = () => {
      console.log("Get Skils");
    };

    const getProjects = () => {
      console.log("Get Projects");
    };

    const getContacts = () => {
      console.log("Get Contacts");
    };

    const navbar = [
      {
        name: "Home",
        link: getHome(),
      },
      {
        name: "Skils",
        link: getSkils(),
      },
      {
        name: "Projects",
        link: getProjects(),
      },
      {
        name: "Contacts",
        link: getContacts(),
      },
    ];
    return {
      name,
      welcome,
      greeting,
      role,
      navbar,
    };
  },
});

app.mount("#app");
