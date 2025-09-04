import { useState } from "react";
import MeditationHeader from "@/components/MeditationHeader";
import MeditationTimer from "@/components/MeditationTimer";
import mountainBackground from "@/assets/mountain-background.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Meditate");
  const [selectedDuration, setSelectedDuration] = useState(10);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${mountainBackground})`,
      }}
    >
      {/* Background overlay for better readability */}
      <div className="min-h-screen bg-gradient-to-b from-white/30 via-white/20 to-white/40">
        <MeditationHeader 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12">
          {activeTab === "Meditate" && (
            <MeditationTimer
              selectedDuration={selectedDuration}
              onDurationChange={setSelectedDuration}
            />
          )}
          
          {activeTab === "Sounds" && (
            <div className="text-center bg-gradient-card rounded-3xl p-8 shadow-card backdrop-blur-sm border border-white/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Sounds</h2>
              <p className="text-muted-foreground">Peaceful sounds coming soon...</p>
            </div>
          )}
          
          {activeTab === "Progress" && (
            <div className="text-center bg-gradient-card rounded-3xl p-8 shadow-card backdrop-blur-sm border border-white/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Progress</h2>
              <p className="text-muted-foreground">Track your meditation journey here...</p>
            </div>
          )}
          
          {activeTab === "Settings" && (
            <div className="text-center bg-gradient-card rounded-3xl p-8 shadow-card backdrop-blur-sm border border-white/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Settings</h2>
              <p className="text-muted-foreground">Customize your experience...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
