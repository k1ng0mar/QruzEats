import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategorySelectionCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export function CategorySelectionCard({ href, icon, title, subtitle, className }: CategorySelectionCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className={cn("transition-all duration-300 ease-in-out group-hover:shadow-lg", className)}>
        <CardContent className="p-4 flex flex-col items-start gap-2">
          <div className="bg-muted p-3 rounded-lg">
            {icon}
          </div>
          <h3 className="font-headline font-bold text-lg">{title}</h3>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
