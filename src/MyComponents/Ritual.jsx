
import { useState, useEffect, useRef, useCallback } from "react";
import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Heat",
    description: "Bring fresh water to a gentle boil.",
  },
  {
    number: "02",
    title: "Pour",
    description: "Pour it into your favourite cup.",
  },
  {
    number: "03",
    title: "Steep",
    description: "Drop in your Chuskii and let it sit for four minutes.",
  },
  {
    number: "04",
    title: "Chuskii",
    description: "Wrap your hands around it. Take a sip. Take your time.",
  },
];

const RITUAL_SECONDS = 4 * 60;

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;

  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function Ritual() {
  const [secondsLeft, setSecondsLeft] = useState(RITUAL_SECONDS);
  const [status, setStatus] = useState("idle");

  const intervalRef = useRef(null);

  useEffect(() => {
    if (status !== "running") return;

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setStatus("done");
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [status]);

  const handleStart = useCallback(() => {
    if (status === "running") return;

    setSecondsLeft(RITUAL_SECONDS);
    setStatus("running");
  }, [status]);

  const label =
    status === "running"
      ? "STEEPING..."
      : status === "done"
      ? "TIME TO SIP"
      : "READY TO STEEP";

  const buttonLabel =
    status === "running"
      ? "RITUAL IN PROGRESS"
      : status === "done"
      ? "START AGAIN"
      : "START MY 4-MINUTE RITUAL";

  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 sm:py-24 lg:py-28">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/ritual-background-leaves.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-forest-deep/80" />
      </div>

      {/* Main centered container */}
      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-8">

        {/* LEFT COLUMN */}
        <Reveal className="w-full">
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] text-botanical/40">
            THE CHUSKII RITUAL
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-[1.1] text-ivory-warm sm:text-6xl">
            Four minutes.
            <br />
            <span className="italic text-saffron">
              Just for you.
            </span>
          </h2>

          {/* Steps */}
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {STEPS.map((step) => (
              <div key={step.number}>
                <span className="font-serif text-2xl text-botanical">
                  {step.number}
                </span>

                <h3 className="mt-1 font-serif text-xl font-semibold text-ivory-warm">
                  {step.title}
                </h3>

                <p className="mt-1 max-w-xs font-sans text-sm leading-relaxed text-botanical/40">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* RIGHT COLUMN — TIMER */}
        <Reveal className="flex w-full flex-col items-center justify-center">
          {/* Timer circle */}
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-botanical/40 sm:h-72 sm:w-72">

            {/* Decorative flower */}
            <svg
              viewBox="0 0 200 200"
              className="spin-slow absolute inset-6 opacity-40"
              aria-hidden="true"
            >
              {[0, 45, 90, 135, 180, 225, 270, 315].map(
                (angle, i) => (
                  <ellipse
                    key={angle}
                    cx="100"
                    cy="55"
                    rx="16"
                    ry="42"
                    transform={`rotate(${angle} 100 100)`}
                    fill={
                      [
                        "var(--color-terracotta)",
                        "var(--color-botanical)",
                        "var(--color-saffron)",
                      ][i % 3]
                    }
                  />
                )
              )}
            </svg>

            {/* Timer text */}
            <div className="relative flex flex-col items-center">
              <span className="font-serif text-5xl tabular-nums text-ivory-warm sm:text-6xl">
                {formatTime(secondsLeft)}
              </span>

              <span className="mt-2 font-sans text-[11px] font-semibold tracking-[0.2em] text-botanical/40">
                {label}
              </span>
            </div>
          </div>

          {/* Start button */}
          <button
            onClick={handleStart}
            disabled={status === "running"}
            className="mt-10 rounded-full bg-saffron px-8 py-4 font-sans text-xs font-semibold tracking-[0.14em] text-forest-deep transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {buttonLabel}
          </button>
        </Reveal>
      </div>
    </section>
  );
}