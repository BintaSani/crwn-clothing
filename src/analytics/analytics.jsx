import ReactGA from "react-ga";

const TrackGoogleAnalyticsEvent = (category, event_name, label) => {
  // console.log("GA event:", category, ":", event_name, ":", label);

  let event_params = {
    category,
    event_name,
    label,
  };
  // Send GA4 Event
  ReactGA.event(event_name, event_params);
};

export default TrackGoogleAnalyticsEvent;
