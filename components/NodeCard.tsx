import React from 'react';
import { Card } from "@/components/ui/card";
import { CalendarDays, Heart, BadgePlus, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export interface NodeItems {
    isDark: boolean,
    title: string,
    creator: string,
    createdAt: string
}

const NodeCard: React.FC<NodeItems> = ({ isDark, title, creator, createdAt }) => {
    return (
        <Card className={`w-72 p-6 rounded-2xl ${isDark ? 'bg-node-card text-foreground' : 'bg-background text-foreground'} shadow-lg relative overflow-visible border-0 transition-all duration-300 hover:shadow-xl hover:scale-105`}>
            <div className="absolute -top-3 -right-3 flex space-x-2">
                {['check', 'heart', 'plus'].map((icon, index) => (
                    <button key={icon} className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-floating-button hover:bg-floating-button-muted' : 'bg-muted hover:bg-muted-foreground'} transition-all duration-200 group shadow-lg hover:shadow-xl`}>
                        {icon === 'check' && <Check className={`w-4 h-4 ${isDark ? 'text-muted-foreground group-hover:text-check-btn' : 'text-muted-foreground group-hover:text-check-btn'} transition-colors duration-200`} />}
                        {icon === 'heart' && <Heart className={`w-4 h-4 ${isDark ? 'text-muted-foreground group-hover:text-love-btn' : 'text-muted-foreground group-hover:text-love-btn'} transition-colors duration-200`} />}
                        {icon === 'plus' && <BadgePlus className={`w-4 h-4 ${isDark ? 'text-muted-foreground group-hover:text-create-btn' : 'text-muted-foreground group-hover:text-create-btn'} transition-colors duration-200`} />}
                    </button>
                ))}
            </div>
            <div className="flex flex-col items-start gap-4">
                <h3 className="text-xl font-bold leading-tight tracking-tight">
                    {title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>{createdAt}</span>
                </div>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-node-hr">
                <Button
                    variant="ghost"
                >
                    Read More
                </Button>
                <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {creator}
                </Link>
            </div>
        </Card>
    )
}

export default NodeCard