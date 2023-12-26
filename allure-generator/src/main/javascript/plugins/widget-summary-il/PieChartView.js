import { arc, pie } from "d3-shape";
import { omit } from "underscore";
import BaseChartView from "../../components/graph-base/BaseChartView";
import TooltipView from "../../components/tooltip/TooltipView";


class PieChartView extends BaseChartView {
  initialize(options) {
    this.options = options;
    this.model = this.options.model;

    this.arc = arc();
    this.pie = pie()
      .sort(null)
      .value((d) => d.value);
    this.tooltip = new TooltipView({ position: "center" });
    this.getChartData();
  }

  getChartData() {
    this.statistic = this.model.get("items")[0]['reportName'];
    const { total } = this.statistic;
    const stats = omit(this.statistic, "total");
    this.data = Object.keys(stats).map((key) => ({
      name: key.toUpperCase(),
      value: stats[key],
      part: stats[key] / total,
    })).filter(item => item.value);
  }

  setupViewport() {
    super.setupViewport();
    return this.svg;
  }

  onAttach() {


    this.svg = this.setupViewport();
    this.svg
      .select(".chart__plot")
      .append("text")
      .text(this.getChartTitle());
    super.onAttach();
  }

  getChartTitle() {
    return `${this.statistic}`;
  }
}

export default PieChartView;
