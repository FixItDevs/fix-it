import "./FeedColumn.css";

const dummyText =
  "I have a garbage disposal in my sink and it started gurgling water back up after running it. Thought it was the disposal, cleaned it out, checked for blockage but it seems to be fine. It appears to be the drain pipe going down to my basement to the main clean out. My hunch was further confirmed after running the dishwasher that shares a drain line and the sink filled up. Nothing is blocked beneath that because toilets and showers drain with no problem so the blockage is in the drain pipe from the kitchen.  I don't want to cause further blockage in the main line although it's 4 inch so it might be okay. Any advice is welcome including tips on opening the access at the bottom of the drain pipe.";

const FeedColumn = () => {
  return (
    <div className="feed-col-container">
      <h1 className="feed-title">I am a dummy title by the way</h1>

      {/* 👇🏻 mapped post feed */}
      <div className="main-feed-container">
        <div className="feed-item">{dummyText}</div>
        <div className="feed-item">{dummyText}</div>
        <div className="feed-item">{dummyText}</div>
        <div className="feed-item">{dummyText}</div>
        <div className="feed-item">{dummyText}</div>
        <div className="feed-item">{dummyText}</div>
        <div className="feed-item">{dummyText}</div>
      </div>
    </div>
  );
};

export default FeedColumn;
