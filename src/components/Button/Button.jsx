import { CustomButton } from "./buttonStyles";

const Button = ({
  type,
  border,
  background,
  color,
  className,
  id,
  onClick,
  size,
  children,
  scaleHover,
  backgroundHover,
  colorHover,
  borderHover,
  disabled,
}) => {
  return (
    <CustomButton
      type={type ? type : "button"}
      border={border}
      background={background}
      color={color}
      className={className ? `btn-components ${className}` : "btn-components"}
      id={id}
      onClick={onClick}
      size={size}
      scaleHover={scaleHover}
      backgroundHover={backgroundHover}
      colorHover={colorHover}
      borderHover={borderHover}
      disabled={disabled}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
