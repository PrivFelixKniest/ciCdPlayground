import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Felix Kniest",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Jenkins", "GH Actions", "Automatic Testing"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, GH Actions",
    // What do you want to learn in this workshop?
    expectations: ["Pipeline management"],
  },
});
