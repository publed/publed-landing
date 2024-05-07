import Link from 'next/link';

interface ButtonI {
  variant: 'light' | 'blue' | 'secondary' | 'small' | 'lightblue';
  className?: string;
  onClick?: () => void;
  children: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
  href?: string;
}

const Button = ({
  variant,
  className,
  onClick,
  children,
  type,
  href,
}: ButtonI) => {
  const variants = {
    light:
      'px-9 py-[10px] rounded-full bg-regular-blue-20 text-dark-blue-60 font-medium hover:bg-regular-blue-30 focus:bg-regular-blue-20 form-ring transition duration-300 ease-in-out border border-dark-blue-60',
    blue: 'px-9 py-[10px] rounded-full bg-dark-blue-60 text-default-0 font-medium hover:bg-dark-blue-50 focus:bg-dark-blue-60 form-ring transition duration-300 ease-in-out',
    secondary:
      'px-9 py-[10px] rounded-full border border-dark-blue-30 bg-light-blue-20 bg-transparent hover:text-default-0 font-medium hover:bg-dark-blue-60 text-dark-blue-60 focus:bg-transparent form-ring transition duration-300 ease-in-out',
    small:
      'px-2 py-2 md:px-5 md:py-1 rounded-full border border-dark-blue-60 bg-regular-blue-20 text-dark-blue-60 text-xs md:text-[10px] lg:text-sm font-medium hover:bg-regular-blue-30 focus:bg-regular-blue-20 form-ring transition duration-300 ease-in-out',
    lightblue:
      'rounded-full border border-dark-blue-60 bg-regular-blue-20 text-dark-blue-60 hover:bg-regular-blue-30 focus:bg-regular-blue-20 form-ring transition duration-300 ease-in-out',
  };

  const ButtonContent = () => (
    <button
      onClick={onClick}
      className={`${className} ${variants[variant]} `}
      type={type || 'button'}
    >
      {children}
    </button>
  );

  return href ? (
    <a href={href} target='_blank' className={`${className} ${variants[variant]}`}>
      {children}
    </a>
  ) : (
    <ButtonContent />
  );
};

export default Button;
