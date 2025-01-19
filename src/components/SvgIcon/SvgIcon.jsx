const SvgIcon = ({ src, width, height, cssClass, onClick }) => (
  <img
    src={`/img/svg/${src}`}
    alt={src}
    width={width}
    height={height}
    className={cssClass}
    onClick={onClick}
  />
);

export default SvgIcon;
