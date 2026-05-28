import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center", className)}>
      <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle &&
        <p className="text-gray-300 text-sm md:text-base">
          {subtitle}
        </p>
      }
    </div>
  )
}
