import './TechnicalProfile.css';

const capabilityGroups = [
  {
    number: '01',
    title: 'Android Engineering',
    description:
      'My primary engineering domain — building, maintaining and improving production Android applications.',
    technologies: [
      'Kotlin',
      'Android SDK',
      'Jetpack',
      'MVVM',
      'MVI',
      'Hilt',
      'REST APIs',
      'Firebase',
    ],
    primary: true,
  },
  {
    number: '02',
    title: 'Realtime Systems',
    description:
      'Designing communication paths where applications, devices and backend services need to stay synchronized.',
    technologies: [
      'MQTT',
      'HiveMQ',
      'WebSockets',
      'Django Channels',
      'Redis',
      'Realtime State',
    ],
  },
  {
    number: '03',
    title: 'IoT & Device Systems',
    description:
      'Connecting software applications with physical devices, relays, sensors and local control systems.',
    technologies: [
      'ESP8266',
      'MQTT',
      'Relay Control',
      'Physical Inputs',
      'Device State',
      'Wi-Fi Recovery',
    ],
  },
  {
    number: '04',
    title: 'Product & Full-Stack Engineering',
    description:
      'Building complete product workflows across customer interfaces, operational dashboards and backend services.',
    technologies: [
      'React',
      'TypeScript',
      'Django',
      'Django REST',
      'PostgreSQL',
      'Redux Toolkit',
      'REST APIs',
    ],
  },
  {
    number: '05',
    title: 'Engineering & Release Tools',
    description:
      'Handling the development lifecycle beyond writing application code — debugging, quality, builds and releases.',
    technologies: [
      'Firebase Crashlytics',
      'Play Console',
      'Git',
      'GitLab',
      'SonarCloud',
      'Debugging',
      'Build Management',
    ],
  },
];

function TechnicalProfile() {
  return (
    <section
      id="technical-profile"
      className="section technical-profile"
    >
      <div className="container">

        <div className="technical-profile__header">

          <p className="technical-profile__eyebrow">
            TECHNICAL PROFILE
          </p>

          <h2 className="text-section">
            Android at the core.
            <span>Systems beyond the screen.</span>
          </h2>

          <p className="text-body technical-profile__intro">
            My primary focus is Android engineering, with hands-on
            experience extending into realtime communication, IoT,
            backend services and complete product workflows.
          </p>

        </div>

        <div className="technical-profile__grid">

          {capabilityGroups.map((group) => (
            <article
              key={group.number}
              className={`capability-card ${
                group.primary ? 'capability-card--primary' : ''
              }`}
            >

              <div className="capability-card__top">

                <span className="capability-card__number">
                  {group.number}
                </span>

                {group.primary && (
                  <span className="capability-card__primary">
                    CORE
                  </span>
                )}

              </div>

              <h3>
                {group.title}
              </h3>

              <p className="capability-card__description">
                {group.description}
              </p>

              <div className="capability-card__technologies">
                {group.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TechnicalProfile;