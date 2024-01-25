import "./Sele.scss";
import { Button } from "../../utils";
const Sele = () => {
  return (
    <div className="sele__container">
      <div className="sele__items">
        <Button className="btn" type="button" btn-size="sm" mode="p">
          New laptop
        </Button>
        <h2 className="sele__title">Sale up to 50% off</h2>
        <p className="sele__text">12 inch hd display</p>
        <Button className="btn" type="button" btn-size="sm" mode="p">
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default Sele;
