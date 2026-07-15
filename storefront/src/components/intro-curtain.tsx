"use client";

import { useEffect, useState } from "react";

type Phase = "draw" | "l1" | "l2" | "brand" | "open";

// timings (ms) at which each phase begins
const SCHEDULE: [Phase, number][] = [
  ["draw", 0],
  ["l1", 1600],
  ["l2", 3200],
  ["brand", 4800],
  ["open", 6000],
];
const DONE_AT = 6800;
const SEEN_KEY = "ah-intro-seen";

export function IntroCurtain() {
  const [phase, setPhase] = useState<Phase>("draw");
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* ignore */
    }

    if (reduce || seen) {
      setDone(true);
      setMounted(false);
      return;
    }

    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }

    document.body.style.overflow = "hidden";
    const timers = SCHEDULE.map(([p, t]) =>
      window.setTimeout(() => setPhase(p), t),
    );
    const end = window.setTimeout(() => setDone(true), DONE_AT);
    const unmount = window.setTimeout(() => finish(), DONE_AT + 800);

    function finish() {
      document.body.style.overflow = "";
      setMounted(false);
    }

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
      clearTimeout(unmount);
      document.body.style.overflow = "";
    };
  }, []);

  const skip = () => {
    setPhase("open");
    setDone(true);
    window.setTimeout(() => {
      document.body.style.overflow = "";
      setMounted(false);
    }, 900);
  };

  if (!mounted) return null;

  return (
    <div className="intro" data-phase={phase} data-done={done} aria-hidden>
      <div className="intro-pane top" />
      <div className="intro-pane bottom" />
      {phase === "draw" && <div className="intro-scan" />}

      <div className="intro-stage">
        <div className="intro-center">
          {phase === "draw" && <Reticle />}

          {phase === "l1" && (
            <p key="l1" className="intro-line">
              Everyone&rsquo;s aiming.
            </p>
          )}

          {phase === "l2" && (
            <p key="l2" className="intro-line accent">
              Few aim true.
            </p>
          )}

          {(phase === "brand" || phase === "open") && (
            <div className="intro-brand" key="brand">
              <span className="mark">AH</span>
              <span className="word">Anointed&nbsp;Hustlaz</span>
              <span className="est">STS Clothing · Est. 2015</span>
            </div>
          )}
        </div>
      </div>

      {!done && (
        <button className="intro-skip" onClick={skip}>
          Skip intro →
        </button>
      )}
    </div>
  );
}

function Reticle() {
  return (
    <svg className="intro-reticle" viewBox="0 0 220 220" aria-hidden>
      <circle className="ring" cx="110" cy="110" r="98" />
      <circle className="ring2" cx="110" cy="110" r="42" />
      {/* crosshair with a central gap */}
      <line className="cross" x1="110" y1="6" x2="110" y2="86" />
      <line className="cross" x1="110" y1="134" x2="110" y2="214" />
      <line className="cross" x1="6" y1="110" x2="86" y2="110" />
      <line className="cross" x1="134" y1="110" x2="214" y2="110" />
      {/* range ticks */}
      <line className="tick" x1="110" y1="96" x2="110" y2="104" />
      <line className="tick" x1="110" y1="116" x2="110" y2="124" />
      <line className="tick" x1="96" y1="110" x2="104" y2="110" />
      <line className="tick" x1="116" y1="110" x2="124" y2="110" />
      <circle className="dot" cx="110" cy="110" r="2.4" />
    </svg>
  );
}
