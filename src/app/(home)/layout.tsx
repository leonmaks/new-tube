import { SidebarProvider } from "@/components/ui/sidebar"
import { HomeNavbar } from "./_home"

type HomeLayoutProps = {
  children: React.ReactNode
}

export default function HomeLayout({
  children
}: HomeLayoutProps) {
  return (
    <SidebarProvider>
      <div className="w-full bg-blue-200">
        <HomeNavbar />
        <div>
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
