import React, { useEffect, useRef } from 'react';
import './FractalTree.css';

export const FractalTree = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 300;

    const drawBranch = (x, y, length, angle, depth) => {
      if (depth === 0) return;

      const endX = x + length * Math.cos(angle);
      const endY = y + length * Math.sin(angle);

      ctx.strokeStyle = depth > 4 ? '#3b82f6' : depth > 2 ? '#ef4444' : '#10b981';
      ctx.lineWidth = depth * 0.8;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      const newLength = length * 0.7;
      const angleOffset = Math.PI / 6;

      drawBranch(endX, endY, newLength, angle - angleOffset, depth - 1);
      drawBranch(endX, endY, newLength, angle + angleOffset, depth - 1);
    };

    let animationId;
    let startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const wave = Math.sin(elapsed * 0.5) * 0.1;

      const startX = canvas.width / 2;
      const startY = canvas.height - 20;
      const initialLength = 80;
      const initialAngle = -Math.PI / 2 + wave;

      ctx.strokeStyle = '#6b7280';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX, startY - 40);
      ctx.stroke();

      drawBranch(startX, startY - 40, initialLength, initialAngle, 7);

      for (let i = 0; i < 5; i++) {
        const particleX = startX + Math.sin(elapsed + i) * 50;
        const particleY = startY - 100 + Math.cos(elapsed * 0.7 + i) * 30;

        ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(elapsed + i) * 0.2})`;
        ctx.beginPath();
        ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fractal-tree-container">
      <canvas ref={canvasRef} className="fractal-canvas" />

    </div>
  );
};

