import "./App.css";
import CommentDeltails from "./components/CommentDetails";
import CardExampleGroups from "./components/Testss/Test";

function App() {
  return (
    <div className="App">
      <CommentDeltails
        name="Sam"
        content="Nice blog posst"
        timeAgo="today at 6:00PM"
        avatar="https://images.immediate.co.uk/production/volatile/sites/3/2021/01/naruto-b9f92c5.jpg?quality=90&fit=620,413"
      ></CommentDeltails>
      <CommentDeltails
        name="Sam"
        content="Nice blog posst"
        timeAgo="today at 6:00PM"
        avatar="https://ss-ava.saostar.vn/w800/pc/1594552169806/eujb4tnwsaukzif.jpg"
      ></CommentDeltails>
      <CommentDeltails
        name="Sam"
        content="Nice blog posst"
        timeAgo="today at 6:00PM"
        avatar="https://cdn.myanimelist.net/images/characters/12/450359.jpg"
      ></CommentDeltails>
      <CardExampleGroups></CardExampleGroups>
    </div>
  );
}

export default App;
