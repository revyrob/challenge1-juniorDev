import "./List.scss";
import SearchBar from "../SerachBar/SearchBar";
import arrowSort from "../../assets/icons/sort-24px.svg";
import VideoClip from "../VideoClip/VideoClip";

function List() {
  //iterate through the backend data to fill in the VideoClips

  //make a function to sort the video data with an onClick event
  //sort by title name
  //sort by date

  //create a deleteHandler to delete the selected show from the list

  //create a likeHandler to add a like to the selected show
  return (
    <section className="list">
      <div className="list__header">
        <h1 className="list__title">Shows</h1>
        <div className="list__btns">
          <SearchBar className="list__search" />
        </div>
      </div>

      <div className="list__tablet">
        <div className="list__wrapper">
          <div className="list__subtitle">
            Title
            <img
              className="list__subtitle--icon"
              src={arrowSort}
              alt="arrrow sorts"
            />
          </div>

          <div className="list__subtitle ">
            Channel
            <img
              className="list__subtitle--icon"
              src={arrowSort}
              alt="arrrow sorts"
            />
          </div>

          <div className="list__subtitle ">
            Description
            <img
              className="list__subtitle--icon"
              src={arrowSort}
              alt="arrrow sorts"
            />
          </div>

          <div className="list__subtitle ">
            Date
            <img
              className="list__subtitle--icon"
              src={arrowSort}
              alt="arrrow sorts"
            />
          </div>

          <div className="list__subtitle ">
            Likes
            <img
              className="list__subtitle--icon"
              src={arrowSort}
              alt="arrrow sorts"
            />
          </div>

          <div className="list__subtitle ">Actions</div>
        </div>
        <VideoClip />
      </div>
    </section>
  );
}
export default List;
