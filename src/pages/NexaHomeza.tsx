import "./NexaHomeza.css";
import Navbar from "../components/Navbar";

const NexaHomeza = () => {
  return (
    <main className="case-study-page">
      <Navbar />

      {/* =========================
          HERO
      ========================= */}
      <section className="case-hero">
        <div className="container">

          <div className="case-eyebrow">
            SMART HOME · REALTIME SYSTEM
          </div>

          <h1 className="case-title">
            NexaHomez
          </h1>

          <p className="case-subtitle">
            A bidirectional smart-home automation system
            connecting Android, MQTT and physical devices
            in real time.
          </p>

          <div className="case-meta">
            <span>Android</span>
            <span>MQTT / HiveMQ</span>
            <span>ESP8266</span>
            <span>Firebase</span>
            <span>Realtime State</span>
          </div>
          
        </div>
      </section>


      {/* =========================
          OVERVIEW
      ========================= */}
      <section className="case-overview section">
        <div className="container">

          <div className="case-section-heading">
            <span>OVERVIEW</span>

            <h2>
              Connecting software with the physical world.
            </h2>
          </div>


          <div className="case-overview-grid">

            <div className="case-overview-content">

              <p>
                NexaHomez is a smart-home automation system
                built around bidirectional communication between
                an Android application and physical devices.
              </p>

              <p>
                The system allows a device to be controlled from
                the Android application while also reflecting
                physical switch changes back into the application.
              </p>

              <p>
                The realtime communication path uses MQTT through
                HiveMQ Cloud, while Firebase is used for
                authentication, device metadata and persistent
                application state.
              </p>

            </div>


            <aside className="case-overview-card">

              <div className="overview-item">
                <span>ROLE</span>
                <strong>Android + System Engineering</strong>
              </div>

              <div className="overview-item">
                <span>TYPE</span>
                <strong>Smart Home Automation</strong>
              </div>

              <div className="overview-item">
                <span>REALTIME</span>
                <strong>MQTT / HiveMQ Cloud</strong>
              </div>

              <div className="overview-item">
                <span>HARDWARE</span>
                <strong>ESP8266 + 4-Channel Relay</strong>
              </div>

            </aside>

          </div>

        </div>
      </section>


      {/* =========================
          ARCHITECTURE
      ========================= */}
      <section className="case-architecture section">
        <div className="container">

          <div className="case-section-heading">
            <span>ARCHITECTURE</span>

            <h2>
              Two-way control between software and the physical world.
            </h2>
          </div>


          {/* MAIN ARCHITECTURE */}
          <div className="architecture-card">

            <div className="architecture-node architecture-node-main">
              <span>ANDROID APP</span>
              <strong>Control &amp; Monitoring</strong>
            </div>


            <div className="architecture-line">
              <span>MQTT COMMAND</span>
              <div />
            </div>


            <div className="architecture-node architecture-node-broker">
              <span>REALTIME TRANSPORT</span>
              <strong>HiveMQ Cloud</strong>
            </div>


            <div className="architecture-line">
              <span>MQTT</span>
              <div />
            </div>


            <div className="architecture-node architecture-node-device">
              <span>EDGE DEVICE</span>
              <strong>ESP8266</strong>
            </div>


            <div className="architecture-split">

              <div className="architecture-branch">

                <div className="architecture-branch-line" />

                <div className="architecture-node architecture-node-small">
                  <span>OUTPUT</span>
                  <strong>4-Channel Relay</strong>
                </div>

              </div>


              <div className="architecture-branch">

                <div className="architecture-branch-line" />

                <div className="architecture-node architecture-node-small">
                  <span>INPUT</span>
                  <strong>Physical Switches</strong>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
              REVERSE FLOW
          ========================= */}
          <div className="architecture-reverse">

            <div className="architecture-reverse-label">
              <span>REVERSE DIRECTION</span>
              <strong>
                Physical state → Android
              </strong>
            </div>


            <div className="architecture-flow">

              <div className="flow-step">
                <span>01</span>
                <strong>Physical Switch</strong>
                <small>Local input</small>
              </div>


              <div className="flow-arrow">
                →
              </div>


              <div className="flow-step">
                <span>02</span>
                <strong>ESP8266</strong>
                <small>State handling</small>
              </div>


              <div className="flow-arrow">
                →
              </div>


              <div className="flow-step">
                <span>03</span>
                <strong>MQTT STATUS</strong>
                <small>HiveMQ</small>
              </div>


              <div className="flow-arrow">
                →
              </div>


              <div className="flow-step">
                <span>04</span>
                <strong>Android UI</strong>
                <small>State reflection</small>
              </div>

            </div>

          </div>


          {/* =========================
              FIREBASE ROLE
          ========================= */}
          <div className="firebase-role">

            <div className="firebase-role-heading">

              <span>FIREBASE ROLE</span>

              <h3>
                Persistence, metadata and application state.
              </h3>

            </div>


            <p>
              Firebase remains part of the system for authentication,
              user data, home and room metadata, device metadata,
              ESP assignment and persistent application state.
              It is not used as the realtime MQTT command transport.
            </p>

          </div>

        </div>
      </section>

      {/* =========================
              ENGINEERING CHALLENGE
          ========================= */}
      <section className="case-challenge section">
        <div className="container">

          <div className="case-section-heading">
            <span>ENGINEERING CHALLENGE</span>

            <h2>
              Keeping four independent channels truly independent.
            </h2>
          </div>


          {/* PROBLEM */}
          <div className="challenge-intro">

            <div className="challenge-label">
              <span>PROBLEM</span>
            </div>

            <div className="challenge-content">
              <h3>
                A change on one channel could interfere with another.
              </h3>

              <p>
                NexaHomez had four independent hardware channels:
                D1, D2, D3 and D4. During mixed Android and physical
                switch operations, an event intended for one channel
                could affect the logical state of another channel.
              </p>

            </div>

          </div>


          {/* INVESTIGATION */}
          <div className="challenge-block">

            <div className="challenge-step">
              <span>01</span>
              <strong>Investigation</strong>
            </div>

            <div className="challenge-detail">

              <p>
                The ESP state flow was examined across physical input
                handling, MQTT commands, relay updates and status
                publishing.
              </p>

              <div className="state-model">

                <div className="state-item">
                  <span>PHYSICAL INPUT</span>
                  <strong>Raw / confirmed state</strong>
                </div>

                <div className="state-arrow">→</div>

                <div className="state-item">
                  <span>STATE HANDLING</span>
                  <strong>Channel-specific processing</strong>
                </div>

                <div className="state-arrow">→</div>

                <div className="state-item">
                  <span>RELAY</span>
                  <strong>Logical device state</strong>
                </div>

                <div className="state-arrow">→</div>

                <div className="state-item">
                  <span>STATUS</span>
                  <strong>MQTT → Android</strong>
                </div>

              </div>

            </div>

          </div>


          {/* ROOT CAUSE */}
          <div className="challenge-block">

            <div className="challenge-step">
              <span>02</span>
              <strong>Root Cause</strong>
            </div>

            <div className="challenge-detail">

              <p>
                The state handling contained multiple state
                representations for physical input, confirmation,
                pending status and relay state. The critical requirement
                was to prevent these representations from allowing one
                channel's event to affect another channel.
              </p>

              <div className="channel-grid">

                <div>D1</div>
                <div>D2</div>
                <div>D3</div>
                <div>D4</div>

              </div>

              <p className="challenge-note">
                Each event needed to retain its channel identity
                throughout the processing path.
              </p>

            </div>

          </div>


          {/* SOLUTION */}
          <div className="challenge-block challenge-solution">

            <div className="challenge-step">
              <span>03</span>
              <strong>Solution</strong>
            </div>

            <div className="challenge-detail">

              <h3>
                Separate physical confirmation from logical relay state.
              </h3>

              <p>
                The state handling was revised so that confirmed physical
                state and logical relay state were managed separately.
                A local event updates only the channel that generated
                that event.
              </p>

              <div className="isolation-flow">

                <div className="isolation-source">
                  <span>INPUT</span>
                  <strong>D3</strong>
                </div>

                <div className="isolation-arrow">
                  →
                </div>

                <div className="isolation-target">
                  <span>ONLY AFFECTS</span>
                  <strong>D3 STATE</strong>
                </div>

                <div className="isolation-arrow">
                  →
                </div>

                <div className="isolation-target">
                  <span>STATUS</span>
                  <strong>D3 → Android</strong>
                </div>

              </div>

            </div>

          </div>


          {/* RESULT */}
          <div className="challenge-result">

            <div>
              <span>RESULT</span>

              <h3>
                D1–D4 channel isolation verified.
              </h3>
            </div>

            <p>
              Android commands and physical switch events can now be
              handled independently per channel without intentionally
              changing unrelated channels. The behavior was tested and
              frozen as part of the NexaHomez V1 baseline.
            </p>

          </div>

        </div>
      </section>

      {/* =========================
              REALTIME COMMUNICATION
          ========================= */}
      <section className="case-realtime section">
        <div className="container">

          <div className="case-section-heading">
            <span>REALTIME COMMUNICATION</span>

            <h2>
              MQTT became the realtime bridge between the app and the device.
            </h2>
          </div>


          {/* COMMAND PATH */}
          <div className="realtime-card">

            <div className="realtime-card-header">
              <div>
                <span>COMMAND PATH</span>

                <h3>
                  Android → ESP8266
                </h3>
              </div>

              <p>
                An Android action is published as an MQTT command and
                processed by the corresponding device channel.
              </p>
            </div>


            <div className="realtime-flow">

              <div className="realtime-node">
                <span>01</span>
                <strong>Android UI</strong>
                <small>User action</small>
              </div>

              <div className="realtime-arrow">→</div>

              <div className="realtime-node">
                <span>02</span>
                <strong>MqttManager</strong>
                <small>MQTT publish</small>
              </div>

              <div className="realtime-arrow">→</div>

              <div className="realtime-node realtime-node-accent">
                <span>03</span>
                <strong>HiveMQ Cloud</strong>
                <small>Realtime transport</small>
              </div>

              <div className="realtime-arrow">→</div>

              <div className="realtime-node">
                <span>04</span>
                <strong>ESP8266</strong>
                <small>Command handling</small>
              </div>

              <div className="realtime-arrow">→</div>

              <div className="realtime-node">
                <span>05</span>
                <strong>Relay</strong>
                <small>Physical output</small>
              </div>

            </div>


            <div className="topic-example">

              <span>COMMAND TOPIC</span>

              <code>
                room/&#123;roomId&#125;/device/&#123;espId&#125;/cmd/D1
              </code>

            </div>

          </div>


          {/* STATUS PATH */}
          <div className="realtime-card">

            <div className="realtime-card-header">
              <div>
                <span>STATUS PATH</span>

                <h3>
                  Physical Device → Android
                </h3>
              </div>

              <p>
                A physical state change is processed by the ESP8266
                and published back as MQTT status for the Android app.
              </p>
            </div>


            <div className="realtime-flow">

              <div className="realtime-node">
                <span>01</span>
                <strong>Physical Input</strong>
                <small>Switch event</small>
              </div>

              <div className="realtime-arrow">→</div>

              <div className="realtime-node">
                <span>02</span>
                <strong>ESP8266</strong>
                <small>State handling</small>
              </div>

              <div className="realtime-arrow">→</div>

              <div className="realtime-node realtime-node-accent">
                <span>03</span>
                <strong>MQTT STATUS</strong>
                <small>HiveMQ Cloud</small>
              </div>

              <div className="realtime-arrow">→</div>

              <div className="realtime-node">
                <span>04</span>
                <strong>MqttManager</strong>
                <small>Status reception</small>
              </div>

              <div className="realtime-arrow">→</div>

              <div className="realtime-node">
                <span>05</span>
                <strong>Android UI</strong>
                <small>State reflection</small>
              </div>

            </div>


            <div className="topic-example">

              <span>STATUS TOPIC</span>

              <code>
                room/&#123;roomId&#125;/device/&#123;espId&#125;/status/D1
              </code>

            </div>

          </div>


          {/* DESIGN DECISION */}
          <div className="realtime-decision">

            <div className="realtime-decision-label">
              <span>DESIGN DECISION</span>
            </div>

            <div className="realtime-decision-content">

              <h3>
                Commands and status were kept as separate MQTT directions.
              </h3>

              <p>
                The command path is used to send requested device actions,
                while the status path reports the resulting device state.
                This separation keeps realtime control and state reporting
                conceptually distinct.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          RELIABILITY & RECOVERY
      ========================= */}
      <section className="case-recovery section">
        <div className="container">

          <div className="case-section-heading">
            <span>RELIABILITY &amp; RECOVERY</span>

            <h2>
              Recovering the realtime path when connectivity breaks.
            </h2>
          </div>


          {/* RECOVERY STORY */}
          <div className="recovery-intro">

            <div className="recovery-label">
              <span>THE CHALLENGE</span>
            </div>

            <div className="recovery-content">

              <h3>
                Realtime systems have to handle connection loss as a normal state.
              </h3>

              <p>
                NexaHomez was designed so that temporary network or broker
                failures did not require the entire communication architecture
                to be rebuilt manually. Recovery had to restore the MQTT path,
                subscriptions and device state communication.
              </p>

            </div>

          </div>


          {/* ESP RECOVERY */}
          <div className="recovery-card">

            <div className="recovery-card-heading">

              <span>ESP8266 RECOVERY</span>

              <h3>
                Wi-Fi → MQTT → State synchronization
              </h3>

            </div>


            <div className="recovery-flow">

              <div className="recovery-step">
                <span>01</span>
                <strong>Connection loss</strong>
                <small>Wi-Fi failure or stuck attempt</small>
              </div>

              <div className="recovery-arrow">→</div>

              <div className="recovery-step">
                <span>02</span>
                <strong>Wi-Fi recovery</strong>
                <small>Timeout, abort and retry</small>
              </div>

              <div className="recovery-arrow">→</div>

              <div className="recovery-step">
                <span>03</span>
                <strong>MQTT reconnect</strong>
                <small>Realtime connection restored</small>
              </div>

              <div className="recovery-arrow">→</div>

              <div className="recovery-step">
                <span>04</span>
                <strong>Subscriptions</strong>
                <small>Required command paths restored</small>
              </div>

              <div className="recovery-arrow">→</div>

              <div className="recovery-step">
                <span>05</span>
                <strong>State sync</strong>
                <small>Availability and device status</small>
              </div>

            </div>

          </div>


          {/* ANDROID RECOVERY */}
          <div className="recovery-card">

            <div className="recovery-card-heading">

              <span>ANDROID RECOVERY</span>

              <h3>
                Restoring the MQTT connection without rebuilding the app state.
              </h3>

            </div>


            <div className="android-recovery-grid">

              <div className="android-recovery-item">
                <span>01</span>

                <strong>
                  Connection state tracking
                </strong>

                <p>
                  The Android MQTT layer keeps track of connection state
                  and reconnect behavior.
                </p>
              </div>


              <div className="android-recovery-item">
                <span>02</span>

                <strong>
                  Subscription restoration
                </strong>

                <p>
                  Required MQTT status subscriptions can be restored
                  after reconnecting.
                </p>
              </div>


              <div className="android-recovery-item">
                <span>03</span>

                <strong>
                  Status continuity
                </strong>

                <p>
                  Reconnected Android clients can receive the latest
                  device state again through the MQTT status path.
                </p>
              </div>

            </div>

          </div>


          {/* VERIFIED RECOVERY */}
          <div className="recovery-result">

            <div className="recovery-result-heading">

              <span>VERIFIED V1 BEHAVIOR</span>

              <h3>
                Recovery was tested as part of the frozen baseline.
              </h3>

            </div>


            <div className="recovery-checklist">

              <div>
                <span>✓</span>
                <strong>Wi-Fi recovery</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>MQTT recovery</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Android MQTT recovery</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Network reconnect synchronization</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Current device state synchronization</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Availability / status restoration</strong>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          EVIDENCE & VERIFICATION
      ========================= */}
      <section className="case-evidence section">
        <div className="container">

          <div className="case-section-heading">
            <span>EVIDENCE &amp; VERIFICATION</span>

            <h2>
              From architecture decisions to verified device behavior.
            </h2>
          </div>


          <div className="evidence-intro">

            <p>
              The system was validated through ESP serial logs,
              MQTT communication traces and bidirectional device
              behavior tests.
            </p>

            <p>
              The evidence below represents the types of checks used
              to verify connectivity, device status, local control,
              MQTT commands and recovery behavior.
            </p>

          </div>


          {/* =========================
              ANDROID APP EVIDENCE
          ========================= */}
          <div className="android-evidence">

            <div className="android-evidence-heading">
              <div>
                <span>ANDROID APPLICATION</span>

                <h3>
                  The Android app behind the realtime smart-home system.
                </h3>
              </div>

              <p>
                The application provides device control, automation,
                ESP module setup and home-management capabilities
                as the Android layer of NexaHomez.
              </p>
            </div>


            <div className="android-evidence-grid">

              {/* DEVICE CONTROL */}
              <article className="android-evidence-card android-evidence-card-featured">

                <div className="android-evidence-media">
                  <img
                    src="/images/nexahomeza/nexahomeza-android-device-control.png"
                    alt="NexaHomeza Android app device control screen"
                    loading="lazy"
                  />
                </div>

                <div className="android-evidence-content">
                  <span>01 · DEVICE CONTROL</span>

                  <h4>
                    Control and monitor connected devices from Android.
                  </h4>

                  <p>
                    The main application screen brings rooms, device
                    availability and ON/OFF controls into a single
                    interface for the connected smart-home system.
                  </p>
                </div>

              </article>


              {/* AUTOMATION */}
              <article className="android-evidence-card">

                <div className="android-evidence-media">
                  <img
                    src="/images/nexahomeza/nexahomeza-android-automation.png"
                    alt="NexaHomeza Android automation and schedule screen"
                    loading="lazy"
                  />
                </div>

                <div className="android-evidence-content">
                  <span>02 · AUTOMATION</span>

                  <h4>
                    Configure device schedules and automation behavior.
                  </h4>

                  <p>
                    The Android application includes scheduling controls
                    for configuring automated device behavior.
                  </p>
                </div>

              </article>


              {/* ESP SETUP */}
              <article className="android-evidence-card">

                <div className="android-evidence-media">
                  <img
                    src="/images/nexahomeza/nexahomeza-android-device-setup.png"
                    alt="NexaHomeza Android ESP module setup screen"
                    loading="lazy"
                  />
                </div>

                <div className="android-evidence-content">
                  <span>03 · DEVICE SETUP</span>

                  <h4>
                    Link an ESP module to a room from the application.
                  </h4>

                  <p>
                    The setup flow connects an ESP module with the
                    selected room, bridging the Android configuration
                    layer with the physical device layer.
                  </p>
                </div>

              </article>


              {/* SETTINGS */}
              <article className="android-evidence-card">

                <div className="android-evidence-media">
                  <img
                    src="/images/nexahomeza/nexahomeza-android-settings.png"
                    alt="NexaHomeza Android settings and home management screen"
                    loading="lazy"
                  />
                </div>

                <div className="android-evidence-content">
                  <span>04 · SETTINGS</span>

                  <h4>
                    Manage the smart-home environment from Android.
                  </h4>

                  <p>
                    Settings expose home-management, device-management
                    and application preferences through the Android UI.
                  </p>
                </div>

              </article>

            </div>

          </div>


          {/* =========================
              EVIDENCE GRID
          ========================= */}
          <div className="evidence-grid">


            {/* CONNECTIVITY */}
            <article className="evidence-card">

              <div className="evidence-card-top">
                <span>01 · CONNECTIVITY</span>

                <div className="evidence-status">
                  VERIFIED
                </div>
              </div>

              <h3>
                Wi-Fi and MQTT connection established.
              </h3>

              <p>
                The ESP8266 establishes network connectivity and then
                connects to the MQTT broker before restoring its
                command subscriptions.
              </p>

              <div className="evidence-log">

                <code>
                  [WIFI] CONNECTED
                  <br />
                  [MQTT] CONNECTED
                  <br />
                  [MQTT] SUBSCRIBED: command topics
                  <br />
                  [AVAILABILITY] ONLINE
                </code>

              </div>

            </article>


            {/* STATUS */}
            <article className="evidence-card">

              <div className="evidence-card-top">
                <span>02 · DEVICE STATUS</span>

                <div className="evidence-status">
                  VERIFIED
                </div>
              </div>

              <h3>
                D1–D4 status publishing.
              </h3>

              <p>
                After the MQTT connection is established, the ESP
                publishes the current status of each relay channel.
              </p>

              <div className="evidence-log">

                <code>
                  [STATUS] D1 → OFF
                  <br />
                  [STATUS] D2 → OFF
                  <br />
                  [STATUS] D3 → OFF
                  <br />
                  [STATUS] D4 → OFF
                </code>

              </div>

            </article>


            {/* LOCAL INPUT */}
            <article className="evidence-card">

              <div className="evidence-card-top">
                <span>03 · LOCAL CONTROL</span>

                <div className="evidence-status">
                  VERIFIED
                </div>
              </div>

              <h3>
                Physical switch events are reflected in device state.
              </h3>

              <p>
                Local input events are processed by the ESP8266 and
                reflected through the device status publishing path.
              </p>

              <div className="evidence-log">

                <code>
                  [TIME] LOCAL STATE
                  <br />
                  [LOCAL] D1 → ON
                  <br />
                  [STATUS] D1 → ON
                  <br />
                  [LOCAL] D4 → ON
                </code>

              </div>

            </article>


            {/* MQTT COMMAND */}
            <article className="evidence-card">

              <div className="evidence-card-top">
                <span>04 · MQTT COMMAND</span>

                <div className="evidence-status">
                  VERIFIED
                </div>
              </div>

              <h3>
                Android command reaches the physical relay path.
              </h3>

              <p>
                MQTT commands received by the ESP are mapped to the
                corresponding device channel and applied to the relay.
              </p>

              <div className="evidence-log">

                <code>
                  [MQTT] MESSAGE RECEIVED
                  <br />
                  [MQTT CMD] D1 → OFF
                  <br />
                  [RELAY] D1 → OFF
                  <br />
                  [STATUS] D1 → OFF
                </code>

              </div>

            </article>


            {/* RECOVERY */}
            <article className="evidence-card evidence-card-wide">

              <div className="evidence-card-top">
                <span>05 · RECOVERY</span>

                <div className="evidence-status">
                  VERIFIED
                </div>
              </div>

              <h3>
                Connectivity loss followed by successful recovery.
              </h3>

              <p>
                During recovery testing, the ESP experienced repeated
                Wi-Fi connection timeouts before successfully reconnecting.
                MQTT was then restored, subscriptions were re-established
                and device status was published again.
              </p>

              <div className="evidence-log">

                <code>
                  [WIFI] CONNECTION TIMEOUT
                  <br />
                  [WIFI] Starting connection attempt...
                  <br />
                  [WIFI] CONNECTED
                  <br />
                  [MQTT] CONNECTED
                  <br />
                  [MQTT] SUBSCRIBED: command topics
                  <br />
                  [AVAILABILITY] ONLINE
                  <br />
                  [STATUS] D1 → OFF
                  <br />
                  [STATUS] D2 → OFF
                  <br />
                  [STATUS] D3 → OFF
                  <br />
                  [STATUS] D4 → OFF
                </code>

              </div>

            </article>


            {/* STATE RESTORE */}
            <article className="evidence-card evidence-card-wide">

              <div className="evidence-card-top">
                <span>06 · STATE RESTORE</span>

                <div className="evidence-status">
                  VERIFIED
                </div>
              </div>

              <h3>
                Saved relay state restored after device restart.
              </h3>

              <p>
                The V1 test evidence also includes restoration of saved
                relay state during ESP startup before reconnecting to the
                realtime communication layer.
              </p>

              <div className="evidence-log">

                <code>
                  [STATE] Saved relay state restored
                  <br />
                  [STATE] D1 → ON
                  <br />
                  [STATE] D2 → ON
                  <br />
                  [STATE] D3 → ON
                  <br />
                  [STATE] D4 → ON
                  <br />
                  [STATE] Logical relay outputs restored
                </code>

              </div>

            </article>

          </div>


          {/* VERIFICATION SUMMARY */}
          <div className="evidence-summary">

            <div className="evidence-summary-heading">

              <span>VERIFICATION SUMMARY</span>

              <h3>
                The important part was not just making the system work —
                it was verifying its behavior across different states.
              </h3>

            </div>


            <div className="verification-list">

              <div>
                <span>01</span>
                <strong>Android → MQTT → ESP → Relay</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Physical Input → ESP → MQTT → Android</strong>
              </div>

              <div>
                <span>03</span>
                <strong>D1–D4 channel isolation</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Wi-Fi / MQTT recovery</strong>
              </div>

              <div>
                <span>05</span>
                <strong>Current state synchronization</strong>
              </div>

              <div>
                <span>06</span>
                <strong>Device state restoration</strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
        ROLE & TECHNOLOGY
      ========================= */}
      <section className="case-stack section">
        <div className="container">

          <div className="case-section-heading">
            <span>ROLE &amp; TECHNOLOGY</span>

            <h2>
              The engineering responsibilities behind the system.
            </h2>
          </div>


          <div className="stack-grid">

            {/* ROLE */}
            <div className="stack-card stack-role">

              <span>ROLE</span>

              <h3>
                Android &amp; Realtime System Engineering
              </h3>

              <p>
                Worked across the Android application, realtime
                communication layer and ESP8266 device behavior,
                including device state handling, MQTT communication,
                recovery behavior and bidirectional synchronization.
              </p>

            </div>


            {/* ANDROID */}
            <div className="stack-card">

              <span>ANDROID</span>

              <h3>
                Application Layer
              </h3>

              <div className="technology-list">
                <span>Kotlin</span>
                <span>Android SDK</span>
                <span>Jetpack</span>
                <span>Hilt</span>
                <span>MVVM</span>
                <span>MVI</span>
                <span>Firebase</span>
              </div>

            </div>


            {/* REALTIME */}
            <div className="stack-card">

              <span>REALTIME</span>

              <h3>
                Communication Layer
              </h3>

              <div className="technology-list">
                <span>MQTT</span>
                <span>HiveMQ Cloud</span>
                <span>TLS</span>
                <span>Realtime State</span>
                <span>Publish / Subscribe</span>
              </div>

            </div>


            {/* DEVICE */}
            <div className="stack-card">

              <span>DEVICE</span>

              <h3>
                Embedded Layer
              </h3>

              <div className="technology-list">
                <span>ESP8266</span>
                <span>4-Channel Relay</span>
                <span>Physical Inputs</span>
                <span>Wi-Fi Recovery</span>
                <span>Device State</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
        VERIFICATION
      ========================= */}
      <section className="case-verification section">
        <div className="container">

          <div className="verification-panel">

            <div className="verification-content">

              <span>PROJECT VERIFICATION</span>

              <h2>
                Built, tested and documented as a real hardware-software system.
              </h2>

              <p>
                NexaHomez was developed and tested across the Android
                application, MQTT communication layer and ESP8266
                hardware. The V1 baseline was frozen after verification
                of bidirectional control, state synchronization,
                D1–D4 isolation and connection recovery behavior.
              </p>

            </div>


            <div className="verification-actions">

              <a
                href="https://github.com/AjayTheXplorer/NexaHomez"
                target="_blank"
                rel="noreferrer"
                className="verification-link verification-link-primary"
              >
                GitHub Repository
                <span>↗</span>
              </a>

              <div className="verification-note">
                <strong>Source visibility</strong>

                <span>
                  Repository access may be private. Technical
                  implementation can be reviewed when access is granted.
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
        CASE STUDY NAVIGATION
      ========================= */}
      <section className="case-navigation section">
        <div className="container">

          <div className="case-navigation-grid">

            <a
              href="/"
              className="case-nav-link"
            >
              <span>←</span>
              Back to Work
            </a>


            <a
              href="/work/tapnix"
              className="case-nav-next"
            >
              <span>NEXT CASE STUDY</span>

              <strong>
                Tapnix
                <span>→</span>
              </strong>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default NexaHomeza;