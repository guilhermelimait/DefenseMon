import requests
import json
from datetime import datetime, timedelta

def fetch_gdelt_events():
    # GDELT Event API: Last 15 minutes
    url = "http://api.gdeltproject.org/api/v2/events/doc?query=military+OR+troop+OR+conflict&mode=artlist&format=json&maxrecords=50"
    response = requests.get(url)
    data = response.json()
    events = []
    for item in data.get("articles", []):
        events.append({
            "timestamp": item.get("seendate"),
            "title": item.get("title"),
            "description": item.get("snippet", ""),
            "type": "military" if "military" in item.get("title", "").lower() else "conflict",
            "severity": "high" if "attack" in item.get("title", "").lower() or "invasion" in item.get("title", "").lower() else "medium",
            "source": item.get("url"),
            "region": item.get("sourcecountry", "global")
        })
    return events

if __name__ == "__main__":
    events = fetch_gdelt_events()
    # Optionally, load previous events and merge/deduplicate
    with open("../data/events.json", "w") as f:
        json.dump(events, f, indent=2)