import { cn } from "@/lib/utils"

interface PageBannerProps {
  title: string
  breadcrumb: {
    home?: string
    current: string
  }
  className?: string
}

export function PageBanner({ 
  title, 
  breadcrumb = { home: 'Home', current: '' },
  className 
}: PageBannerProps) {
  return (
    <div className={cn(
      "relative w-full h-[200px] flex flex-col items-center justify-center text-white",
      "bg-black/90",
      className
    )}>
      <h1 className="text-3xl font-semibold mb-2">
        {title}
      </h1>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm opacity-80">
          {breadcrumb.home && (
            <>
              <li>
                <a 
                  href="/" 
                  className="hover:underline"
                >
                  {breadcrumb.home}
                </a>
              </li>
              <li>{'>'}</li>
            </>
          )}
          <li aria-current="page">
            {breadcrumb.current}
          </li>
        </ol>
      </nav>
    </div>
  )
}

