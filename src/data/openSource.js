import grapesEchartsLogo from "../images/projects/grapesjs-echarts.png"
import dhtmlLogo from "../images/projects/dhtml.png"
import covid19Logo from "../images/projects/covid-19-dashboard.png"
import thisSiteLogo from "../images/projects/this.png"
const projects = [
  {
    image: grapesEchartsLogo,
    title: "Grapes JS - Echarts",
    description: "Chart components plugin for Grapes JS, powered by echarts",
    url: "https://github.com/jvas28/grapesjs-echarts",
    preview: "https://codepen.io/jvas28/pen/ZEGByOq",
    stack: ["grapesjs", "echarts", "js", "vuejs"],
  },
  {
    image: dhtmlLogo,
    title: "DHTML",
    description:
      "Configuration based template testing application. Allows you to change elements classes in live presentations.",
    url: "https://github.com/jvas28/dhtml",
    preview: "https://jvas28.github.io/dhtml/",
    stack: ["js", "reactjs"],
  },
  {
    image: covid19Logo,
    title: "COVID-19 Dashboard",
    description:
      "Dashboard PWA for Coronavirus tracking. World statisticas, and heatmap.",
    url: "https://github.com/jvas28/covid19-dashboard",
    preview: "https://jvas28.github.io/covid19-dashboard/",
    stack: ["react", "echarts"],
  },
  {
    image: thisSiteLogo,
    title: "This very site",
    description:
      "Not a fork from other dev or designer, just a Gatsby project and some Styles.",
    url: "https://github.com/jvas28/vasconez.dev",
    stack: ["gatsby"],
  },
]
export default projects
