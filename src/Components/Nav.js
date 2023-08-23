import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/");
    }
    const toLike = () => {
        navigate("/like");
    }
    const toReview = () => {
        navigate("/review");
    }
    return <div className="nav-wrap">
      <h2 onClick={toHome}>MOVIE</h2> 
      <div className="linkBtn">
      <span onClick={toLike}>LIKE</span> 
      <span onClick={toReview}>REVIEW</span>
      </div>
    </div>
}

export default Nav;