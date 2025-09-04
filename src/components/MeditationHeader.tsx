import { Button } from "@/components/ui/button";

interface MeditationHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MeditationHeader = ({ activeTab, onTabChange }: MeditationHeaderProps) => {
  const navItems = ["Meditate", "Sounds", "Progress", "Settings"];

  return (
    <header className="w-full bg-soft-white/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <h1 className="text-xl font-semibold text-foreground">Serene</h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item}
                variant={activeTab === item ? "default" : "ghost"}
                onClick={() => onTabChange(item)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === item
                    ? "bg-gradient-button text-white shadow-button"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MeditationHeader;