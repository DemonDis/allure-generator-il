import "./styles.scss";
import { View } from "backbone.marionette";
import PieChartView from "./PieChartView";
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
    return Object.assign(super.serializeData(), {});
  }
}

export default SummaryWidgetViewIL;
