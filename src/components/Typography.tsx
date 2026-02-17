import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Heading: React.FC<TextProps & { level?: 'h1' | 'h2' | 'h3' }> = ({
    children,
    className = '',
    level = 'h1',
    delay = 0,
    ...props
}) => {
    const Tag = level as React.ElementType;

    // Base sizes
    const sizes = {
        h1: 'text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1]',
        h2: 'text-3xl md:text-5xl tracking-tight leading-tight',
        h3: 'text-2xl md:text-3xl tracking-normal',
    };

    return (
        // @ts-ignore - Dynamic motion component type
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            <Tag className={`font-serif text-cream-100 ${sizes[level]} ${className}`} {...props}>
                {children}
            </Tag>
        </motion.div>
    );
};

export const Text: React.FC<TextProps & { subtle?: boolean }> = ({
    children,
    className = '',
    subtle = false,
    delay = 0.2,
    ...props
}) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`font-sans text-lg md:text-xl leading-relaxed ${subtle ? 'text-charcoal-500' : 'text-cream-200'} ${className}`}
            {...props}
        >
            {children}
        </motion.p>
    );
};

export const AccentText: React.FC<TextProps> = ({ children, className = '', delay = 0, ...props }) => (
    <motion.span
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        className={`text-gold-500 font-serif italic ${className}`}
        {...props}
    >
        {children}
    </motion.span>
);
