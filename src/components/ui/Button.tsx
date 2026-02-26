

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'outline-white';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5';

    const variants = {
        primary: 'bg-gradient-to-r from-primary-light via-primary-base to-primary-dark text-white hover:shadow-lg',
        secondary: 'bg-white text-primary-base hover:bg-gray-50',
        accent: 'bg-gradient-to-r from-accent-light via-accent-base to-accent-dark text-primary-dark font-semibold hover:shadow-lg',
        outline: 'border-2 border-primary-base text-primary-base hover:bg-primary-base hover:text-white shadow-none',
        'outline-white': 'border-2 border-white/30 text-white hover:bg-white hover:text-primary-dark shadow-none'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
