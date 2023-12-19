import WidgetsGridView from "../../components/widgets-grid/WidgetsGridView";
import AppLayout from "../../layouts/application/AppLayout";
import GraphCollectionIL from "./GraphCollectionIL";

export default class GraphLayoutIL extends AppLayout {
  initialize() {
    this.collection = new GraphCollectionIL();
  }

  loadData() {
    return this.collection.fetch();
  }

  getContentView() {
    return new WidgetsGridView({ model: this.collection, tabName: "graph-il" });
  }
}
