import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/");
    }
    const toLike = () => {
        navigate("/like");
    }
    const toRank = () => {
        navigate("/rank");
    }
    return <div className="nav-wrap">
        <h2 onClick={toHome}>MOVIE</h2>
        <div className="linkToBtn">
            <span onClick={toLike}>LIKE</span>
            <span onClick={toRank}>RANK</span>
        </div>
    </div>
}

export default Nav;