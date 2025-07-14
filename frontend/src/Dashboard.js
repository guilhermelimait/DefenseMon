import React, { useEffect, useState } from "react";

function readinessLevel(events) {
  const recentHigh = events.filter(
    (e) => e.severity === "high" && Date.now() - new Date(e.timestamp) < 24 * 3600 * 1000
  ).length;
  if (recentHigh >= 3) return { level: "Red", message: "Evacuate or prepare to flee" };
  if (recentHigh >= 1) return { level: "Yellow", message: "Stay alert" };
  return { level: "Green", message: "Situation normal" };
}

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [readiness, setReadiness] = useState({ level: "Green", message: "Loading..." });

  useEffect(() => {
    fetch("../data/events.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setReadiness(readinessLevel(data));
      });
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>OSINT Monitoring Dashboard</h1>
      <h2>
        Readiness Level: <span style={{ color: readiness.level === "Red" ? "red" : readiness.level === "Yellow" ? "gold" : "green" }}>{readiness.level}</span>
      </h2>
      <p>{readiness.message}</p>
      <h3>Highlights</h3>
      <ul>
        {events.slice(0, 5).map((e, i) => (
          <li key={i}>
            <strong>{e.title}</strong> ({e.severity})<br />
            <small>{e.timestamp} — {e.region}</small><br />
            {e.description} <a href={e.source} target="_blank" rel="noopener noreferrer">[source]</a>
          </li>
        ))}
      </ul>
      <h3>Event Timeline</h3>
      <ol>
        {events.map((e, i) => (
          <li key={i}>
            <strong>{e.title}</strong> — {e.timestamp}
            <br />
            {e.description}
          </li>
        ))}
      </ol>
    </div>
  );
}