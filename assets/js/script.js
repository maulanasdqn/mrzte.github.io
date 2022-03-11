const { ref, setup, createApp } = Vue;

const app = createApp({
  setup() {
    const name = ref("Maulana Sodiqin");
    const welcome = ref("Coder.Linux Enthusiast");
    const greeting = ref("Hallo iam");
    const role = ref("Junior Frontend Developer");
    const isNavbarShow = ref(false);
    const isHomeView = ref(false);
    const isSkillsView = ref(false);
    const isProjectsView = ref(false);
    const isContactsView = ref(false);

    const getHome = () => {
      console.log("Get Home");
      isHomeView.value = true;
      isProjectsView.value = false;
      isContactsView.value = false;
      isSkillsView.value = false;
    };

    const getSkils = () => {
      console.log("Get Skils");
      isHomeView.value = false;
      isProjectsView.value = false;
      isContactsView.value = false;
      isSkillsView.value = true;
    };

    const getProjects = () => {
      console.log("Get Projects");
      isHomeView.value = false;
      isProjectsView.value = true;
      isContactsView.value = false;
      isSkillsView.value = false;
    };

    const getContacts = () => {
      console.log("Get Contacts");
      isHomeView.value = false;
      isProjectsView.value = false;
      isContactsView.value = true;
      isSkillsView.value = false;
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
      isNavbarShow,
    };
  },
});

app.mount("#app");
