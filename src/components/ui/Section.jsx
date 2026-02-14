import React from 'react';
import { cn } from '../../lib/utils';

export const Section = ({ children, className, id, ...props }) => {
    return (
        <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)} {...props}>
            <div className="container mx-auto px-4 relative z-10">
                {children}
            </div>
        </section>
    );
};
