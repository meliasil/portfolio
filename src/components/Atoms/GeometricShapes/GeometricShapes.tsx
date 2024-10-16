import style from "./GeometricShapes.module.scss";

const GeometricShapes: React.FC = () => {
  return (
    <div className={style.shapes}>
      <div className={style.shape1}></div>
      <div className={style.shape2}></div>
      <div className={style.shape3}></div>
    </div>
  );
};

export default GeometricShapes;
