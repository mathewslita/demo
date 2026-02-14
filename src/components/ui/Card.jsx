import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Card = ({ children, className, ...props }) => {
    return (
        <div className={cn("glass-card rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/5", className)} {...props}>
            {children}
        </div>
    );
};
