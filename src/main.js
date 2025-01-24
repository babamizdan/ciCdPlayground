import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Abel Kocsis",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Automating software engineer tasks"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, Docker, Kubernetes, JUnit, Selenium, Cypress",
    // What do you want to learn in this workshop?
    expectations: ["A general overview and some hands on experience what tools we can use and why."],
  },
});
