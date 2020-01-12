import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const COLORS = ["#00C49F", "#CCC", "#FF0000", "#FF8042"];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value
  } = props;
  console.log(props);
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 4) * cos;
  const sy = cy + (outerRadius + 4) * sin;
  const mx = cx + (outerRadius + 8) * cos;
  const my = cy + (outerRadius + 10) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 8;
  const ey = my;

  const px = cx + (outerRadius + 4) * cos;
  const py = cy + (outerRadius + 4) * sin;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill={fill}>
        {payload.loss ? "超過" : "残高"}
      </text>
      <text x={cx} y={cy + 10} dy={8} textAnchor="middle" fill={fill}>
        {`${payload.loss ? payload.loss : payload.balance}円`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 3}
        outerRadius={outerRadius + 5}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={px} cy={py} r={3} fill={fill} stroke="none" />
      <text
        // x={ex + (cos >= 0 ? 1 : -1) * 12}
        // y={ey + 7}
        x={sx + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 14 * (sin >= 0 ? 1 : 0)}
        textAnchor={textAnchor}
        fill={fill}
      >{`${value}円`}</text>
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

interface Props {
  onedaySpendingData: {
    expense: number;
    usageLimit: number;
  };
}
export default class Example extends PureComponent<Props, {}> {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/hqnrgxpj/";

  state = {
    activeIndex: this.props.onedaySpendingData.expense ? 0 : 1
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    const { expense, usageLimit } = this.props.onedaySpendingData;
    const balance = usageLimit - expense > 0 ? usageLimit - expense : 0;
    const loss = usageLimit - expense < 0 ? Math.abs(usageLimit - expense) : 0;

    const data = [
      { name: "出費", value: expense, loss, balance },
      { name: "残金", value: balance, loss, balance }
    ];

    return (
      <PieChart width={190} height={160}>
        <Pie
          activeIndex={0}
          activeShape={renderActiveShape}
          data={data}
          cx={65}
          cy={80}
          innerRadius={40}
          outerRadius={50}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
          startAngle={450}
          endAngle={90}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={!loss ? COLORS[index % COLORS.length] : COLORS[2]}
            />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
