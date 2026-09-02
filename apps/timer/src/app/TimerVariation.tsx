import {useState, useEffect, useRef} from 'react';

// Alternative variation: Countdown Timer
function CountdownTimer() {
    const [initialTime, setInitialTime] = useState(300); // 5 minutes in seconds
    const [timeLeft, setTimeLeft] = useState(300);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Start countdown
    const handleStart = () => {
        if (intervalRef.current === null && timeLeft > 0) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                        }
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    };

    // Pause countdown
    const handlePause = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
        }
    };

    // Reset countdown
    const handleReset = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTimeLeft(initialTime);
        setIsRunning(false);
    };

    // Set preset times
    const setPresetTime = (minutes: number) => {
        const seconds = minutes * 60;
        setInitialTime(seconds);
        setTimeLeft(seconds);
        handleReset();
    };

    // Cleanup
    useEffect(() => {
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{ 
                fontSize: '48px', 
                margin: '20px 0',
                color: timeLeft <= 60 ? 'red' : 'black'
            }}>
                {formatTime(timeLeft)}
            </h1>
            
            {timeLeft === 0 && (
                <p style={{ fontSize: '24px', color: 'red' }}>Time's Up!</p>
            )}

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
                <button onClick={isRunning ? handlePause : handleStart}>
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button onClick={handleReset} disabled={timeLeft === initialTime}>
                    Reset
                </button>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={() => setPresetTime(1)}>1 min</button>
                <button onClick={() => setPresetTime(5)}>5 min</button>
                <button onClick={() => setPresetTime(10)}>10 min</button>
                <button onClick={() => setPresetTime(15)}>15 min</button>
            </div>
        </div>
    );
}

export default CountdownTimer;

