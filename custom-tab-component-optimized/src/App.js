import Tab from "./Tab";
import "./styles.css";

const tabs = [
  {
    id: "1",
    tabTitle: "Tab 1",
    title: "iphone",
    content: "chapri phone",
  },
  {
    id: "2",
    tabTitle: "Tab 2",
    title: "samsung",
    content:
      "Samsung is a South Korean multinational manufacturing conglomerate headquartered in Samsung Digital City, Suwon, South Korea. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol (business conglomerate).",
  },
  {
    id: "3",
    tabTitle: "Tab 3",
    title: "Motorola",
    content:
      "Motorola is a brand of Android smartphones owned by Lenovo. Motorola used to be a much larger company that made a wide variety of electronic products, but it was split up in 2011. The Motorola Mobility division, which makes smartphones, was acquired by Google in 2012 and then sold to Lenovo in 2014.",
  },
];

export default function App() {
  return (
    <div className="App">
      <Tab tabs={tabs} />
    </div>
  );
}
