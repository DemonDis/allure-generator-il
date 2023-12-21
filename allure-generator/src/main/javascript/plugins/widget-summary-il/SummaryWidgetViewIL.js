import "./styles.scss";
import { View } from "backbone.marionette";
import PieChartView from "../../components/graph-pie-chart/PieChartView";
import { regions } from "../../decorators";
import template from "./SummaryWidgetViewIL.hbs";

@regions({
  chart: ".summary-widget__chart",
})
class SummaryWidgetViewIL extends View {
  template = template;

  onRender() {
    this.showChildView(
      "chart",
      new PieChartView({
        model: this.model,
        showLegend: false,
      }),
    );
  }

  serializeData() {
    console.log('!!!!!', Object.assign(super.serializeData()));
    const testRuns = this.model.get("items");
    console.log('*****', testRuns.map((item) => {return item}));
    console.log('%%%%%', testRuns[0]);
    // return testRuns.map((item) => {return item});
    return Object.assign(super.serializeData());
  }
}

export default SummaryWidgetViewIL;
