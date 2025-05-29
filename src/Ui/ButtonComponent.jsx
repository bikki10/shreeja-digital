const ButtonComponent = ({
  children,
  onClick,
  href,
  type = "button",
  className = "",
  disabled = false,
  ...props
}) => {
  if (href) {
    return (
      <a
        href={href}
        className={`${className} inline-block`}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
