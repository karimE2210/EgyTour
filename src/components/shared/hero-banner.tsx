import { cn } from "@/lib/utils";

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  height?: "default" | "tall";
  className?: string;
}

export function HeroBanner({
  backgroundImage,
  title,
  subtitle,
  height = "default",
  className,
}: HeroBannerProps) {
  return (
    <section
      className={cn(
        "relative w-full",
        height === "default" ? "h-[80vh]" : "h-[90vh]",
        "min-h-[400px]",
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl opacity-90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
} 