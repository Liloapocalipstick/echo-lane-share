import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

interface MeditationTimerProps {
  selectedDuration: number;
  onDurationChange: (duration: number) => void;
}

const MeditationTimer = ({ selectedDuration, onDurationChange }: MeditationTimerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(selectedDuration * 60);
  const durations = [5, 10, 15, 20];

  useEffect(() => {
    setTimeRemaining(selectedDuration * 60);
  }, [selectedDuration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetTimer = () => {
    setIsPlaying(false);
    setTimeRemaining(selectedDuration * 60);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-card rounded-3xl p-8 shadow-card backdrop-blur-sm border border-white/20">
      <div className="text-center space-y-8">
        {/* Heading */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">Find Your Inner Peace</h2>
          <p className="text-muted-foreground text-sm">
            Choose your meditation length and begin your journey to mindfulness
          </p>
        </div>

        {/* Duration Selection */}
        <div className="flex justify-center gap-2">
          {durations.map((duration) => (
            <Button
              key={duration}
              variant={selectedDuration === duration ? "default" : "outline"}
              onClick={() => onDurationChange(duration)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                selectedDuration === duration
                  ? "bg-gradient-button text-white shadow-button border-0"
                  : "bg-white/80 text-muted-foreground border-border hover:bg-sage-light/20"
              }`}
            >
              {duration} min
            </Button>
          ))}
        </div>

        {/* Timer Display */}
        <div className="space-y-4">
          <Button
            onClick={handlePlayPause}
            className="w-20 h-20 rounded-full bg-gradient-button text-white shadow-button hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </Button>
          
          <div className="space-y-1">
            <div className="text-4xl font-light text-foreground">
              {formatTime(timeRemaining)}
            </div>
            <div className="text-sm text-muted-foreground">
              minutes remaining
            </div>
          </div>
        </div>

        {/* Reset Button */}
        {timeRemaining !== selectedDuration * 60 && (
          <Button
            onClick={resetTimer}
            variant="outline"
            className="text-sm text-muted-foreground border-border hover:bg-muted/50"
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};

export default MeditationTimer;