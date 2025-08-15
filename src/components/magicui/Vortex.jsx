"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { createNoise3D } from "simplex-noise";

export const Vortex = ({
  children,
  className,
  containerClassName,
  particleCount = 700,
  rangeY = 100,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = "#000000",
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlePool = useRef([]);
  const particleCountRef = useRef(particleCount);
  const baseHueRef = useRef(baseHue);
  const baseSpeedRef = useRef(baseSpeed);
  const rangeSpeedRef = useRef(rangeSpeed);
  const baseRadiusRef = useRef(baseRadius);
  const rangeRadiusRef = useRef(rangeRadius);
  const rangeYRef = useRef(rangeY);
  const backgroundColorRef = useRef(backgroundColor);
  const noise3D = createNoise3D();

  useEffect(() => {
    particleCountRef.current = particleCount;
    baseHueRef.current = baseHue;
    baseSpeedRef.current = baseSpeed;
    rangeSpeedRef.current = rangeSpeed;
    baseRadiusRef.current = baseRadius;
    rangeRadiusRef.current = rangeRadius;
    rangeYRef.current = rangeY;
    backgroundColorRef.current = backgroundColor;
  }, [
    particleCount,
    baseHue,
    baseSpeed,
    rangeSpeed,
    baseRadius,
    rangeRadius,
    rangeY,
    backgroundColor,
  ]);

  const PARTICLE_INIT_SPEED = 0.5;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      this.x = Math.random() * canvas.width;
      this.y =
        canvas.height / 2 +
        Math.random() * rangeYRef.current -
        rangeYRef.current / 2;
      this.z = Math.random() * canvas.width;

      this.px = 0;
      this.py = 0;
      this.pz = 0;

      this.vx = 0;
      this.vy = 0;
      this.vz = 0;

      this.hue = baseHueRef.current;
      this.saturation = 100;
      this.lightness = 50;

      this.radius = baseRadiusRef.current + Math.random() * rangeRadiusRef.current;
      this.speed = baseSpeedRef.current + Math.random() * rangeSpeedRef.current;
      this.initSpeed = PARTICLE_INIT_SPEED;
    }

    update(tick) {
      this.px = this.x;
      this.py = this.y;
      this.pz = this.z;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const noise =
        noise3D(
          this.x / (canvas.width * 0.5),
          this.y / (canvas.height * 0.5),
          tick * 0.0005
        ) *
        Math.PI *
        2;

      this.vx = Math.cos(noise) * this.speed;
      this.vy = Math.sin(noise) * this.speed;

      this.x += this.vx;
      this.y += this.vy;

      if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
        this.reset();
      }
    }

    render(ctx) {
      ctx.beginPath();
      ctx.fillStyle = `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const createParticles = () => {
    const newParticles = [];
    const canvas = canvasRef.current;
    if (!canvas) return;

    for (let i = 0; i < particleCountRef.current; i++) {
      newParticles.push(new Particle());
    }
    particlePool.current = newParticles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) {
      return;
    }

    const resize = () => {
      const { current: container } = containerRef;
      if (!container) return;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    const setup = () => {
      resize();
      createParticles();
    };

    setup();
    window.addEventListener("resize", resize);

    let tick = 0;
    const animate = () => {
      if (!ctx) return;

      tick++;

      ctx.fillStyle = backgroundColorRef.current;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlePool.current.forEach((p) => {
        p.update(tick);
        p.render(ctx);
      });

      window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [particleCount, rangeY, baseHue, baseSpeed, rangeSpeed, baseRadius, rangeRadius, backgroundColor]);

  return (
    <div className={cn("relative h-full w-full", containerClassName)} ref={containerRef}>
      <canvas ref={canvasRef} className="absolute h-full w-full" />
      {children}
    </div>
  );
}; 