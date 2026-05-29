'use client';
import { useRef, useEffect } from 'react';

export function DotMatrixN() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = 400;
        const height = 400;
        canvas.width = width;
        canvas.height = height;

        const offscreen = document.createElement('canvas');
        offscreen.width = width;
        offscreen.height = height;
        const octx = offscreen.getContext('2d');
        if (!octx) return;

        octx.font = '900 350px "Mona Sans", sans-serif';
        octx.textAlign = 'center';
        octx.textBaseline = 'middle';
        octx.fillStyle = 'white';
        octx.fillText('N', width / 2, height / 2);

        const imgData = octx.getImageData(0, 0, width, height).data;

        const dotSize = 2; // Size of the orange square
        const gap = 2;     // Space between squares
        const step = dotSize + gap;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#FB851E';

        for (let y = 0; y < height; y += step) {
            for (let x = 0; x < width; x += step) {
                const i = (y * width + x) * 4;
                const alpha = imgData[i + 3];

                if (alpha > 128) {

                    const normalizedPos = (x + y) / (width + height);
                    const drawProbability = 0.95 - (normalizedPos * 0.5);

                    if (Math.random() < drawProbability) {
                        ctx.fillRect(x, y, dotSize, dotSize);
                    }
                }
            }
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full object-contain select-none drop-shadow-lg"
        />
    );
}