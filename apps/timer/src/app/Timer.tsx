import {useState, useEffect, useRef} from 'react';

function Timer() {
    const [time, setTime] = useState(0); // Time in seconds
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Start timer
    const handleStart = () => {
        if (intervalRef.current === null) {
            setIsRunning(true);
            setIsPaused(false);
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
    };

    // Pause timer
    const handlePause = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
            setIsPaused(true);
        }
    };

    // Resume timer
    const handleResume = () => {
        if (intervalRef.current === null && isPaused) {
            setIsRunning(true);
            setIsPaused(false);
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
    };

    // Reset timer
    const handleReset = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTime(0);
        setIsRunning(false);
        setIsPaused(false);
    };

    // Toggle between start/pause
    const handleToggle = () => {
        if (!isRunning && !isPaused) {
            handleStart();
        } else if (isRunning) {
            handlePause();
        } else if (isPaused) {
            handleResume();
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: '48px', margin: '20px 0' }}>
                {/* {formatTime(time)} */}
                {time}
            </h1>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={handleToggle}>
                    {
                        !isRunning && !isPaused 
                            ? 'Start' 
                            : isRunning 
                                ? 'Pause' 
                                : 'Resume'
                    }
                </button>
                <button onClick={handleReset} disabled={time === 0}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Timer;
