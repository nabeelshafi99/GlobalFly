
import "./smallcard.scss";

const SmallCard = ({img,title,des}) => {
    return(
        <div className="small-card">
            <div className="small-card-img">
            <img src={img} alt="" />
            </div>
            <div className="small-card-centent">
                <h4>{title}</h4>
                <h5>{des}</h5>
            </div>
        </div>
    )
}



export default SmallCard;