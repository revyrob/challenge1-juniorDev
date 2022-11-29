import "./VideoClip.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import delteCan from "../../assets/icons/delete_outline-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";

function VideoClip() {
  //fill with information being brought in from the backend data

  //for the description bring in only approx 1 sentence
  return (
    <section className="videoClip">
      <div className="videoClip__wrapper">
        <div className="videoClip__info">
          <h2 className="videoClip__location">
            This show is amazing <img src={chevron} alt="chevron right" />
          </h2>
        </div>

        <div className="videoClip__info">
          <h2 className="videoClip__info--info">Channel</h2>
        </div>

        <div className="videoClip__info">
          <h2 className="videoClip__info--info">Description</h2>
        </div>

        <div className="videoClip__info">
          <h2 className="videoClip__info--info">Date</h2>
        </div>

        <div className="videoClip__info">
          <h2 className="videoClip__info--info">Likes</h2>
        </div>

        <div className="videoClip__info">
          <div className="videoClip__icon--tablet">
            <img src={delteCan} alt="garbage can" />

            <img src={editPen} alt="pen" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default VideoClip;
