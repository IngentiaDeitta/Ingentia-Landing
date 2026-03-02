'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

export interface Project {
    id: string;
    name: string;
    icon: LucideIcon;
}

interface ProjectBadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    project: Project;
}

const ProjectBadge = React.forwardRef<HTMLAnchorElement, ProjectBadgeProps>(
    ({ project, className, ...props }, ref) => {
        const Icon = project.icon;

        return (
            <a ref={ref} className={cn('inline-block', className)} {...props}>
                <Badge
                    variant="outline"
                    className="gap-1.5 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm text-white border-white/20 transition-all hover:bg-white/10 hover:border-white/40"
                >
                    <Icon className="size-3.5 text-accent-blue" />
                    <span className="text-[13px] font-medium">{project.name}</span>
                </Badge>
            </a>
        );
    }
);
ProjectBadge.displayName = 'ProjectBadge';

export default ProjectBadge;
