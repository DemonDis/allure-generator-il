import GraphLayoutIL from "./GraphLayoutIL";

allure.api.addTab("graph-il", {
  title: "tab.graph-il.name",
  icon: "fa fa-flask",
  route: "graph-il",
  onEnter: () => new GraphLayoutIL(),
});
