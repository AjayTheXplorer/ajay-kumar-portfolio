import './EngineeringStories.css';


const stories = [
  {
    number: '01',
    project: 'NEXAHOMEZ',
    category: 'REALTIME · IoT',
    title: 'Keeping four physical channels truly independent.',
    problem:
      'Physical switch events could interfere with the logical state of other relay channels when local and MQTT control were mixed.',
    solution:
      'Separated confirmed physical state from logical relay state so every local event affects only its own D1–D4 channel.',
    result:
      'Bidirectional control remains channel-specific while Android and ESP state stay synchronized.',
    accent: 'nexa',
  },
  {
    number: '02',
    project: 'NEXAHOMEZ',
    category: 'MQTT · RECOVERY',
    title: 'Designing realtime communication that can recover.',
    problem:
      'A connected IoT system cannot depend on a connection staying alive forever.',
    solution:
      'Implemented Wi-Fi and MQTT recovery paths that restore connectivity, subscriptions, availability and device status after reconnection.',
    result:
      'The system can recover its realtime communication path without replacing the working MQTT architecture.',
    accent: 'nexa',
  },
  {
    number: '03',
    project: 'TAPNIX',
    category: 'PRODUCT · REALTIME',
    title: 'Connecting an entire restaurant workflow in realtime.',
    problem:
      'A restaurant order is not just a checkout action — customer, kitchen, waiter and management all need the same evolving order state.',
    solution:
      'Structured the platform around sessions, orders, state transitions and realtime WebSocket events across customer and staff workflows.',
    result:
      'The same order lifecycle can flow from customer ordering through kitchen/waiter operations to session-level billing.',
    accent: 'tapnix',
  },
];

function EngineeringStories() {
  return (
    <section id="engineering" className="section engineering-stories">
      <div className="container">

        <div className="engineering-stories__header">
          <p className="engineering-stories__eyebrow">
            ENGINEERING STORIES
          </p>

          <h2 className="text-section">
            Problems first.
            <span>Engineering decisions second.</span>
          </h2>

          <p className="text-body engineering-stories__intro">
            Selected examples of how I approach system behaviour,
            realtime communication and product workflows.
          </p>
        </div>

        <div className="engineering-stories__list">

          {stories.map((story) => (
            <article
              key={story.number}
              className={`engineering-story engineering-story--${story.accent}`}
            >
              <div className="engineering-story__number">
                {story.number}
              </div>

              <div className="engineering-story__main">

                <div className="engineering-story__meta">
                  <span>{story.project}</span>
                  <span>{story.category}</span>
                </div>

                <h3>
                  {story.title}
                </h3>

                <div className="engineering-story__details">

                  <div>
                    <p className="engineering-story__label">
                      PROBLEM
                    </p>

                    <p>
                      {story.problem}
                    </p>
                  </div>

                  <div>
                    <p className="engineering-story__label">
                      APPROACH
                    </p>

                    <p>
                      {story.solution}
                    </p>
                  </div>

                  <div>
                    <p className="engineering-story__label">
                      RESULT
                    </p>

                    <p>
                      {story.result}
                    </p>
                  </div>

                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default EngineeringStories;