'use client';
import { useRef, useEffect } from 'react';

export function InfinityCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const pixelRatio = window.devicePixelRatio || 1;
        let width = 0;
        let height = 0;
        let time = 0;
        let animationFrameId: number;

        // Precompute points for maximum performance
        let points: { x: number; y: number; z: number }[] = [];

        const initPoints = () => {
            points = [];
            // Scale the infinity symbol dynamically based on screen width
            const A = Math.min(width * 0.35, 550); // X Amplitude (Width)
            const B = A * 0.35; // Y Amplitude (Height of loops)
            const C = A * 0.35; // Z Amplitude (Depth)
            const ribbonWidth = A * 0.25;

            const numT = 1500; // Density along the curve
            const numW = 12;   // Density across the ribbon width

            for (let i = 0; i < numT; i++) {
                for (let j = 0; j < numW; j++) {
                    const t = (i / numT) * Math.PI * 2;
                    const w = ((j / (numW - 1)) - 0.5) * ribbonWidth;

                    // Base 3D Figure 8 (Viviani's curve variation)
                    const x0 = A * Math.sin(t);
                    const y0 = B * Math.sin(2 * t);
                    const z0 = C * Math.cos(t);

                    // Tangent vectors (Derivatives)
                    const dx = A * Math.cos(t);
                    const dy = 2 * B * Math.cos(2 * t);
                    const dz = -C * Math.sin(t);

                    // Normal vector (Cross product of Tangent and Up vector (0,1,0))
                    let nx = -dz;
                    let nz = dx;
                    const nLen = Math.sqrt(nx * nx + nz * nz);
                    if (nLen > 0) { nx /= nLen; nz /= nLen; }

                    // Binormal vector (Cross product of Normal and Tangent)
                    let bx = dy * nz;
                    let by = dz * nx - dx * nz;
                    let bz = -dy * nx;
                    const bLen = Math.sqrt(bx * bx + by * by + bz * bz);
                    if (bLen > 0) { bx /= bLen; by /= bLen; bz /= bLen; }

                    // Offset the point along the Binormal to create the ribbon width
                    const x = x0 + bx * w;
                    const y = y0 + by * w;
                    const z = z0 + bz * w;

                    points.push({ x, y, z });
                }
            }
        };

        const resize = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width * pixelRatio;
            canvas.height = height * pixelRatio;
            ctx.scale(pixelRatio, pixelRatio);
            initPoints();
        };

        const resizeObserver = new ResizeObserver(() => resize());
        resizeObserver.observe(container);
        resize();

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height * 0.6;
            const perspective = 1200;

            time += 0.002; // Rotation speed
            const cosT = Math.cos(time);
            const sinT = Math.sin(time);

            for (let i = 0; i < points.length; i++) {
                const p = points[i];

                // Horizontal rotation around the Y axis
                const rotatedX = p.x * cosT - p.z * sinT;
                const rotatedZ = p.x * sinT + p.z * cosT;
                const rotatedY = p.y;

                const zAdjusted = perspective + rotatedZ;
                if (zAdjusted < 0.1) continue; // Skip points behind camera

                const scale = perspective / zAdjusted;
                const screenX = centerX + rotatedX * scale;
                const screenY = centerY + rotatedY * scale;

                // Calculate opacity (alpha) based on depth to create a 3D fading effect
                const alpha = Math.max(0.05, Math.min(0.9, scale * scale * 0.7));

                // Exact Orange from the design
                ctx.fillStyle = `rgba(241, 132, 53, ${alpha})`;

                // Size of the dots changes based on depth
                const dotSize = Math.max(0.5, 1.2 * scale);

                ctx.fillRect(screenX, screenY, dotSize, dotSize);
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}