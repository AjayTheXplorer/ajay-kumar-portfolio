import "./Tapnix.css";
// import CaseStudyHeader from "../components/CaseStudyHeader";
import Navbar from "../components/Navbar";

const Tapnix = () => {
  return (
    <main className="tapnix-case-study">

       <Navbar  />

      {/* HERO */}
      <section className="tapnix-hero">
        <div className="container">

          <div className="tapnix-eyebrow">
            RESTAURANT · REALTIME PRODUCT
          </div>

          <h1 className="tapnix-title">
            Tapnix
          </h1>

          <p className="tapnix-subtitle">
            A smart restaurant ordering and management platform
            connecting customers, kitchen and restaurant operations
            through a realtime product workflow.
          </p>

          <div className="tapnix-meta">
            <span>React</span>
            <span>TypeScript</span>
            <span>Django</span>
            <span>PostgreSQL</span>
            <span>Redis</span>
            <span>WebSockets</span>
          </div>

        </div>
      </section>


      {/* OVERVIEW */}
      <section className="tapnix-overview section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span>OVERVIEW</span>

            <h2>
              Turning a restaurant QR scan into a complete
              ordering workflow.
            </h2>
          </div>


          <div className="tapnix-overview-grid">

            <div className="tapnix-overview-content">

              <p>
                Tapnix is a smart restaurant management platform
                designed around QR-based customer ordering,
                restaurant operations and realtime order
                communication.
              </p>

              <p>
                A customer can scan a table QR code, join or create
                a restaurant session, browse the menu, place an
                order and follow its progress until the session bill
                is generated.
              </p>

              <p>
                On the restaurant side, the same system connects
                kitchen, waiter and management workflows through
                structured order states and realtime events.
              </p>

            </div>


            <aside className="tapnix-overview-card">

              <div className="tapnix-overview-item">
                <span>ROLE</span>
                <strong>
                  Product &amp; Full-Stack Engineering
                </strong>
              </div>

              <div className="tapnix-overview-item">
                <span>TYPE</span>
                <strong>
                  Restaurant Management Platform
                </strong>
              </div>

              <div className="tapnix-overview-item">
                <span>FRONTEND</span>
                <strong>
                  React + TypeScript
                </strong>
              </div>

              <div className="tapnix-overview-item">
                <span>BACKEND</span>
                <strong>
                  Django REST + Channels
                </strong>
              </div>

              <div className="tapnix-overview-item">
                <span>REALTIME</span>
                <strong>
                  WebSockets + Redis
                </strong>
              </div>

            </aside>

          </div>

        </div>
      </section>


      {/* PRODUCT FLOW */}
      <section className="tapnix-product-flow section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span>PRODUCT FLOW</span>

            <h2>
              From table QR to session bill.
            </h2>
          </div>


          {/* CUSTOMER JOURNEY */}

          <div className="tapnix-flow-label">
            <span>CUSTOMER JOURNEY</span>

            <p>
              The customer journey starts at the table and continues
              through the complete ordering and billing lifecycle.
            </p>
          </div>


          <div className="tapnix-flow">

            <div className="tapnix-flow-step">
              <span>01</span>

              <div>
                <strong>QR Scan</strong>
                <small>
                  Customer scans the table QR code.
                </small>
              </div>
            </div>


            <div className="tapnix-flow-arrow">
              →
            </div>


            <div className="tapnix-flow-step">
              <span>02</span>

              <div>
                <strong>Table &amp; Session</strong>
                <small>
                  Table is resolved and a session is joined or created.
                </small>
              </div>
            </div>


            <div className="tapnix-flow-arrow">
              →
            </div>


            <div className="tapnix-flow-step">
              <span>03</span>

              <div>
                <strong>Menu</strong>
                <small>
                  Customer browses the restaurant menu.
                </small>
              </div>
            </div>


            <div className="tapnix-flow-arrow">
              →
            </div>


            <div className="tapnix-flow-step">
              <span>04</span>

              <div>
                <strong>Cart &amp; Order</strong>
                <small>
                  Customer creates a MAIN or QUICK order.
                </small>
              </div>
            </div>


            <div className="tapnix-flow-arrow">
              →
            </div>


            <div className="tapnix-flow-step">
              <span>05</span>

              <div>
                <strong>Order Tracking</strong>
                <small>
                  Order progress is reflected through realtime events.
                </small>
              </div>
            </div>


            <div className="tapnix-flow-arrow">
              →
            </div>


            <div className="tapnix-flow-step">
              <span>06</span>

              <div>
                <strong>Session Bill</strong>
                <small>
                  Active orders are combined into the session bill.
                </small>
              </div>
            </div>

          </div>


          {/* OPERATIONS JOURNEY */}

          <div className="tapnix-operations-flow">

            <div className="tapnix-flow-label">
              <span>RESTAURANT OPERATIONS</span>

              <p>
                The same order lifecycle continues across the
                restaurant-side operational dashboards.
              </p>
            </div>


            <div className="tapnix-operations-grid">

              <div className="tapnix-operation-card">
                <span>01</span>

                <strong>Kitchen</strong>

                <p>
                  Chef workflows handle MAIN orders through their
                  preparation lifecycle.
                </p>
              </div>


              <div className="tapnix-operation-connector">
                →
              </div>


              <div className="tapnix-operation-card">
                <span>02</span>

                <strong>Waiter</strong>

                <p>
                  Ready orders, quick orders and waiter calls are
                  handled through the waiter workflow.
                </p>
              </div>


              <div className="tapnix-operation-connector">
                →
              </div>


              <div className="tapnix-operation-card">
                <span>03</span>

                <strong>Management</strong>

                <p>
                  Restaurant-side dashboards provide order, session,
                  menu and operational management.
                </p>
              </div>

            </div>

          </div>


          {/* SYSTEM SUMMARY */}

          <div className="tapnix-flow-summary">

            <div className="tapnix-flow-summary-label">
              <span>SYSTEM FLOW</span>
            </div>

            <div className="tapnix-flow-summary-content">

              <strong>
                QR → Table → Session → Menu → Order → Realtime →
                Operations → Bill
              </strong>

              <p>
                The product connects the customer experience with
                restaurant operations through a shared session and
                order lifecycle.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="tapnix-architecture section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span>SYSTEM ARCHITECTURE</span>

            <h2>
              REST for business operations. WebSockets for realtime state.
            </h2>
          </div>


          <div className="tapnix-architecture-intro">

            <p>
              Tapnix separates the transactional API flow from the
              realtime communication layer. User actions enter through
              the Django REST API, business services process the operation,
              and resulting events are propagated through Redis and
              Django Channels to connected clients.
            </p>

          </div>


          <div className="tapnix-architecture-diagram">

            {/* FRONTEND */}

            <div className="tapnix-architecture-column">

              <div className="tapnix-architecture-layer tapnix-layer-frontend">

                <span>01 · FRONTEND</span>

                <h3>
                  React Application
                </h3>

                <p>
                  Customer, Chef, Waiter, Manager and Admin experiences
                  share the same frontend application.
                </p>

                <div className="tapnix-layer-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Redux Toolkit</span>
                  <span>Axios</span>
                </div>

              </div>

            </div>


            <div className="tapnix-architecture-connector">
              <span>REST</span>
              <div />
              <small>Business request</small>
            </div>


            {/* BACKEND */}

            <div className="tapnix-architecture-column">

              <div className="tapnix-architecture-layer tapnix-layer-backend">

                <span>02 · BACKEND</span>

                <h3>
                  Django REST API
                </h3>

                <p>
                  API views coordinate authentication, sessions,
                  orders, pricing, cancellation, billing and
                  restaurant operations.
                </p>

                <div className="tapnix-layer-tags">
                  <span>Django</span>
                  <span>DRF</span>
                  <span>JWT</span>
                  <span>Business Services</span>
                </div>

              </div>


              <div className="tapnix-layer-inner-flow">

                <div>
                  <span>BUSINESS LOGIC</span>
                  <strong>Order &amp; Session Services</strong>
                </div>

                <div>
                  <span>STATE</span>
                  <strong>Order Lifecycle</strong>
                </div>

              </div>

            </div>


            <div className="tapnix-architecture-connector">
              <span>DATA</span>
              <div />
              <small>Persistence</small>
            </div>


            {/* DATABASE */}

            <div className="tapnix-architecture-column">

              <div className="tapnix-architecture-layer tapnix-layer-database">

                <span>03 · DATA</span>

                <h3>
                  PostgreSQL
                </h3>

                <p>
                  Persistent restaurant, menu, table, session,
                  order, participant and billing data.
                </p>

                <div className="tapnix-layer-tags">
                  <span>PostgreSQL</span>
                  <span>Django ORM</span>
                  <span>Sessions</span>
                  <span>Orders</span>
                </div>

              </div>

            </div>

          </div>


          {/* REALTIME PATH */}

          <div className="tapnix-realtime-architecture">

            <div className="tapnix-realtime-heading">

              <span>REALTIME PATH</span>

              <h3>
                Database events are propagated to connected clients.
              </h3>

              <p>
                Realtime communication is handled separately through
                Django Channels and Redis rather than treating the
                WebSocket connection as the primary transactional API.
              </p>

            </div>


            <div className="tapnix-realtime-flow">

              <div className="tapnix-realtime-node">
                <span>01</span>
                <strong>Business Event</strong>
                <small>Django service</small>
              </div>

              <div className="tapnix-realtime-arrow">
                →
              </div>

              <div className="tapnix-realtime-node">
                <span>02</span>
                <strong>Event Publisher</strong>
                <small>Realtime event</small>
              </div>

              <div className="tapnix-realtime-arrow">
                →
              </div>

              <div className="tapnix-realtime-node tapnix-realtime-accent">
                <span>03</span>
                <strong>Redis / Channels</strong>
                <small>Message layer</small>
              </div>

              <div className="tapnix-realtime-arrow">
                →
              </div>

              <div className="tapnix-realtime-node">
                <span>04</span>
                <strong>WebSocket</strong>
                <small>Connected clients</small>
              </div>

              <div className="tapnix-realtime-arrow">
                →
              </div>

              <div className="tapnix-realtime-node">
                <span>05</span>
                <strong>Redux / UI</strong>
                <small>State reflection</small>
              </div>

            </div>

          </div>


          {/* ARCHITECTURE PRINCIPLE */}

          <div className="tapnix-architecture-principle">

            <div className="tapnix-principle-label">
              <span>ARCHITECTURE PRINCIPLE</span>
            </div>

            <div className="tapnix-principle-content">

              <h3>
                Transactional operations and realtime updates have
                different responsibilities.
              </h3>

              <p>
                REST handles the business operation. The resulting state
                change can then be propagated through the realtime layer
                so that customer and restaurant-side interfaces can
                reflect the updated state.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* REALTIME EVENT FLOW */}
      <section className="tapnix-event-flow section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span>REALTIME EVENT FLOW</span>

            <h2>
              One business action can update multiple interfaces.
            </h2>
          </div>


          <div className="tapnix-event-intro">
            <p>
              Tapnix treats realtime communication as a consequence of
              business state changes. The REST operation performs the
              business action, while the realtime layer distributes the
              resulting event to connected clients.
            </p>
          </div>


          {/* MAIN EVENT FLOW */}

          <div className="tapnix-event-timeline">

            <div className="tapnix-event-step">
              <span>01</span>

              <div className="tapnix-event-step-content">
                <span>CLIENT ACTION</span>

                <h3>
                  Customer or staff performs an action.
                </h3>

                <p>
                  An order is created or an existing order changes state
                  through the application workflow.
                </p>
              </div>
            </div>


            <div className="tapnix-event-line">
              <div />
            </div>


            <div className="tapnix-event-step">
              <span>02</span>

              <div className="tapnix-event-step-content">
                <span>BUSINESS OPERATION</span>

                <h3>
                  Django processes the operation.
                </h3>

                <p>
                  The API and business services handle the corresponding
                  session, order or operational state change.
                </p>
              </div>
            </div>


            <div className="tapnix-event-line">
              <div />
            </div>


            <div className="tapnix-event-step">
              <span>03</span>

              <div className="tapnix-event-step-content">
                <span>PERSISTED STATE</span>

                <h3>
                  Database state is updated.
                </h3>

                <p>
                  The resulting business state is persisted before the
                  corresponding realtime event is propagated.
                </p>
              </div>
            </div>


            <div className="tapnix-event-line">
              <div />
            </div>


            <div className="tapnix-event-step tapnix-event-step-accent">
              <span>04</span>

              <div className="tapnix-event-step-content">
                <span>REALTIME EVENT</span>

                <h3>
                  Event is published to the realtime layer.
                </h3>

                <p>
                  The event publisher sends the relevant event into the
                  Channels and Redis communication layer.
                </p>
              </div>
            </div>


            <div className="tapnix-event-line">
              <div />
            </div>


            <div className="tapnix-event-step">
              <span>05</span>

              <div className="tapnix-event-step-content">
                <span>CONNECTED CLIENTS</span>

                <h3>
                  WebSocket clients receive the update.
                </h3>

                <p>
                  Connected customer and restaurant-side clients receive
                  the event through their realtime subscriptions.
                </p>
              </div>
            </div>

          </div>


          {/* CLIENT DISTRIBUTION */}

          <div className="tapnix-client-distribution">

            <div className="tapnix-client-heading">

              <span>CLIENT DISTRIBUTION</span>

              <h3>
                The same backend event can reach different product views.
              </h3>

            </div>


            <div className="tapnix-client-grid">

              <div className="tapnix-client-card">
                <span>01</span>

                <strong>Customer UI</strong>

                <p>
                  Order tracking and session state can reflect the
                  latest order event.
                </p>
              </div>


              <div className="tapnix-client-card">
                <span>02</span>

                <strong>Chef Dashboard</strong>

                <p>
                  Kitchen-facing interfaces can receive relevant order
                  lifecycle updates.
                </p>
              </div>


              <div className="tapnix-client-card">
                <span>03</span>

                <strong>Waiter Dashboard</strong>

                <p>
                  Ready orders, quick orders and waiter-related events
                  can be reflected in the operational interface.
                </p>
              </div>


              <div className="tapnix-client-card">
                <span>04</span>

                <strong>Management UI</strong>

                <p>
                  Restaurant-side views can reflect operational changes
                  without requiring every state transition to be manually
                  refreshed.
                </p>
              </div>

            </div>

          </div>


          {/* FRONTEND REALTIME LAYER */}

          <div className="tapnix-client-layer">

            <div className="tapnix-client-layer-heading">

              <span>FRONTEND REALTIME LAYER</span>

              <h3>
                SocketManager → EventBus → Redux / UI
              </h3>

              <p>
                The frontend realtime core separates socket connection
                handling from event distribution and UI state updates.
              </p>

            </div>


            <div className="tapnix-client-layer-flow">

              <div>
                <span>01</span>
                <strong>SocketManager</strong>
                <small>Connection</small>
              </div>

              <div className="tapnix-client-layer-arrow">
                →
              </div>

              <div>
                <span>02</span>
                <strong>EventBus</strong>
                <small>Event distribution</small>
              </div>

              <div className="tapnix-client-layer-arrow">
                →
              </div>

              <div>
                <span>03</span>
                <strong>Redux / Local State</strong>
                <small>State update</small>
              </div>

              <div className="tapnix-client-layer-arrow">
                →
              </div>

              <div>
                <span>04</span>
                <strong>UI</strong>
                <small>State reflection</small>
              </div>

            </div>

          </div>


          <div className="tapnix-event-principle">

            <span>REALTIME PRINCIPLE</span>

            <strong>
              The API changes the business state. The realtime layer
              communicates that change.
            </strong>

          </div>

        </div>
      </section>

      {/* ORDER LIFECYCLE */}
      <section className="tapnix-order-lifecycle section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span>ORDER LIFECYCLE</span>

            <h2>
              Orders move through controlled business states.
            </h2>
          </div>


          <div className="tapnix-lifecycle-intro">

            <p>
              Tapnix models order progression as an explicit state
              machine. Each action is evaluated against the current
              order state before the status is changed.
            </p>

          </div>


          {/* NORMAL MAIN FLOW */}

          <div className="tapnix-lifecycle-card">

            <div className="tapnix-lifecycle-card-heading">

              <div>
                <span>NORMAL MAIN FLOW</span>

                <h3>
                  Kitchen-prepared order lifecycle
                </h3>
              </div>

              <p>
                The normal MAIN order progresses through confirmation,
                preparation, serving and closure.
              </p>

            </div>


            <div className="tapnix-lifecycle-flow">

              <div className="tapnix-status-node">
                <span>01</span>
                <strong>CREATED</strong>
                <small>Order created</small>
              </div>

              <div className="tapnix-status-arrow">
                <span>confirm</span>
                →
              </div>

              <div className="tapnix-status-node">
                <span>02</span>
                <strong>CONFIRMED</strong>
                <small>Order accepted</small>
              </div>

              <div className="tapnix-status-arrow">
                <span>prepare</span>
                →
              </div>

              <div className="tapnix-status-node">
                <span>03</span>
                <strong>PREPARING</strong>
                <small>Kitchen processing</small>
              </div>

              <div className="tapnix-status-arrow">
                <span>ready</span>
                →
              </div>

              <div className="tapnix-status-node">
                <span>04</span>
                <strong>READY</strong>
                <small>Ready for service</small>
              </div>

              <div className="tapnix-status-arrow">
                <span>serve</span>
                →
              </div>

              <div className="tapnix-status-node">
                <span>05</span>
                <strong>SERVED</strong>
                <small>Served to customer</small>
              </div>

              <div className="tapnix-status-arrow">
                <span>close</span>
                →
              </div>

              <div className="tapnix-status-node">
                <span>06</span>
                <strong>CLOSED</strong>
                <small>Lifecycle complete</small>
              </div>

            </div>

          </div>


          {/* CANCELLATION */}

          <div className="tapnix-cancellation-flow">

            <div className="tapnix-cancellation-heading">

              <span>CANCELLATION PATH</span>

              <h3>
                Cancellation is a separate terminal path.
              </h3>

              <p>
                Orders can be cancelled from the early lifecycle stages
                according to the actor and authorization rules.
              </p>

            </div>


            <div className="tapnix-cancellation-diagram">

              <div className="tapnix-cancel-source">
                <span>EARLY STATE</span>

                <strong>
                  CREATED / CONFIRMED
                </strong>
              </div>

              <div className="tapnix-cancel-arrow">
                cancel →
              </div>

              <div className="tapnix-cancel-terminal">
                <span>TERMINAL STATE</span>

                <strong>
                  CANCELLED
                </strong>
              </div>

            </div>

          </div>


          {/* QUICK ORDER */}

          <div className="tapnix-quick-flow">

            <div className="tapnix-quick-heading">

              <span>QUICK ORDER BEHAVIOR</span>

              <h3>
                Operational workflows can use shorter transitions.
              </h3>

              <p>
                QUICK orders support direct operational paths such as
                moving from CREATED or CONFIRMED directly to SERVED.
              </p>

            </div>


            <div className="tapnix-quick-diagram">

              <div className="tapnix-quick-node">
                <span>CREATED</span>
                <strong>→ SERVED</strong>
                <small>Direct QUICK path</small>
              </div>

              <div className="tapnix-quick-node">
                <span>CONFIRMED</span>
                <strong>→ SERVED</strong>
                <small>Direct QUICK path</small>
              </div>

            </div>

          </div>


          {/* STATE MACHINE LAYERS */}

          <div className="tapnix-state-machine">

            <div className="tapnix-state-machine-heading">

              <span>STATE MACHINE ARCHITECTURE</span>

              <h3>
                Validation, authorization and execution remain separate.
              </h3>

            </div>


            <div className="tapnix-state-layers">

              <div className="tapnix-state-layer">

                <span>01</span>

                <strong>
                  State Machine
                </strong>

                <p>
                  Determines whether a requested transition is valid
                  for the current state.
                </p>

              </div>


              <div className="tapnix-state-layer-arrow">
                ↓
              </div>


              <div className="tapnix-state-layer">

                <span>02</span>

                <strong>
                  Authorization Service
                </strong>

                <p>
                  Determines whether the current actor can perform
                  the requested action.
                </p>

              </div>


              <div className="tapnix-state-layer-arrow">
                ↓
              </div>


              <div className="tapnix-state-layer">

                <span>03</span>

                <strong>
                  OrderStatusService
                </strong>

                <p>
                  Applies the validated status change and coordinates
                  lifecycle processing.
                </p>

              </div>


              <div className="tapnix-state-layer-arrow">
                ↓
              </div>


              <div className="tapnix-state-layer">

                <span>04</span>

                <strong>
                  Persistence &amp; Events
                </strong>

                <p>
                  Updated state participates in pricing, lifecycle
                  events and realtime propagation.
                </p>

              </div>

            </div>

          </div>


          {/* TERMINAL STATES */}

          <div className="tapnix-terminal-states">

            <div>
              <span>TERMINAL STATES</span>

              <strong>
                CLOSED
              </strong>

              <small>
                Normal lifecycle completion
              </small>
            </div>

            <div>
              <span>TERMINAL STATES</span>

              <strong>
                CANCELLED
              </strong>

              <small>
                Cancellation completion
              </small>
            </div>

          </div>

        </div>
      </section>

      {/* SESSION & BILLING */}
      <section className="tapnix-billing section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span>SESSION &amp; BILLING</span>

            <h2>
              The bill is built around the restaurant session.
            </h2>
          </div>


          <div className="tapnix-billing-intro">

            <p>
              Tapnix treats the table session as the billing boundary.
              Multiple active orders can belong to the same session,
              allowing the customer experience to maintain a running
              session-level bill.
            </p>

          </div>


          {/* BILLING PIPELINE */}

          <div className="tapnix-billing-pipeline">

            <div className="tapnix-billing-node">

              <span>01</span>

              <strong>
                Table Session
              </strong>

              <small>
                Active restaurant session
              </small>

            </div>


            <div className="tapnix-billing-arrow">
              →
            </div>


            <div className="tapnix-billing-node">

              <span>02</span>

              <strong>
                Orders
              </strong>

              <small>
                Orders belonging to the session
              </small>

            </div>


            <div className="tapnix-billing-arrow">
              →
            </div>


            <div className="tapnix-billing-node">

              <span>03</span>

              <strong>
                Active Items
              </strong>

              <small>
                Non-cancelled order items
              </small>

            </div>


            <div className="tapnix-billing-arrow">
              →
            </div>


            <div className="tapnix-billing-node">

              <span>04</span>

              <strong>
                Tax Resolution
              </strong>

              <small>
                Applicable tax slab
              </small>

            </div>


            <div className="tapnix-billing-arrow">
              →
            </div>


            <div className="tapnix-billing-node tapnix-billing-node-accent">

              <span>05</span>

              <strong>
                Session Bill
              </strong>

              <small>
                Running subtotal + GST
              </small>

            </div>

          </div>


          {/* TAX RESOLUTION */}

          <div className="tapnix-tax-resolution">

            <div className="tapnix-tax-heading">

              <span>TAX RESOLUTION</span>

              <h3>
                The applicable tax is resolved through a defined priority.
              </h3>

              <p>
                When calculating the session bill, Tapnix resolves the
                applicable tax slab for each menu item.
              </p>

            </div>


            <div className="tapnix-tax-chain">

              <div className="tapnix-tax-node">

                <span>01</span>

                <strong>
                  Menu Item Tax
                </strong>

                <small>
                  Active item-level tax slab
                </small>

              </div>


              <div className="tapnix-tax-arrow">
                ↓
              </div>


              <div className="tapnix-tax-node">

                <span>02</span>

                <strong>
                  Category Tax
                </strong>

                <small>
                  Active category-level slab
                </small>

              </div>


              <div className="tapnix-tax-arrow">
                ↓
              </div>


              <div className="tapnix-tax-node">

                <span>03</span>

                <strong>
                  Restaurant Default
                </strong>

                <small>
                  Default active tax slab
                </small>

              </div>


              <div className="tapnix-tax-arrow">
                ↓
              </div>


              <div className="tapnix-tax-node">

                <span>04</span>

                <strong>
                  No Tax
                </strong>

                <small>
                  0% when no applicable slab exists
                </small>

              </div>

            </div>

          </div>


          {/* CALCULATION MODEL */}

          <div className="tapnix-bill-calculation">

            <div className="tapnix-calculation-heading">

              <span>CALCULATION MODEL</span>

              <h3>
                Each active item contributes to the running session total.
              </h3>

            </div>


            <div className="tapnix-calculation-grid">

              <div className="tapnix-calculation-card">

                <span>01 · ITEM SUBTOTAL</span>

                <strong>
                  Price × Quantity
                </strong>

                <p>
                  Each non-cancelled order item contributes its current
                  item subtotal to the session calculation.
                </p>

              </div>


              <div className="tapnix-calculation-card">

                <span>02 · TAX</span>

                <strong>
                  Subtotal × Tax %
                </strong>

                <p>
                  The resolved tax percentage is applied to the item
                  subtotal.
                </p>

              </div>


              <div className="tapnix-calculation-card tapnix-calculation-card-accent">

                <span>03 · FINAL TOTAL</span>

                <strong>
                  Subtotal + Tax
                </strong>

                <p>
                  Item totals are aggregated into the session-level
                  running bill.
                </p>

              </div>

            </div>

          </div>


          {/* BILL SUMMARY */}

          <div className="tapnix-bill-summary">

            <div className="tapnix-bill-summary-heading">

              <span>SESSION BILL</span>

              <h3>
                A single running view of the active session.
              </h3>

            </div>


            <div className="tapnix-bill-summary-flow">

              <div>
                <span>ORDERS</span>
                <strong>Multiple</strong>
                <small>Orders in the session</small>
              </div>

              <div>
                <span>ITEMS</span>
                <strong>Active</strong>
                <small>Cancelled items excluded</small>
              </div>

              <div>
                <span>SUBTOTAL</span>
                <strong>Calculated</strong>
                <small>Item subtotal aggregation</small>
              </div>

              <div>
                <span>GST</span>
                <strong>Resolved</strong>
                <small>Tax amount aggregation</small>
              </div>

              <div>
                <span>FINAL TOTAL</span>
                <strong>Calculated</strong>
                <small>Subtotal + GST</small>
              </div>

            </div>

          </div>


          {/* IMPLEMENTATION NOTE */}

          <div className="tapnix-billing-note">

            <div>
              <span>IMPLEMENTATION NOTE</span>

              <strong>
                Billing currently resolves tax from the active tax
                configuration at bill calculation time.
              </strong>
            </div>

            <p>
              The current source contains a tax snapshot helper, but it
              is not used in the current order/bill path. The portfolio
              therefore documents the existing implementation rather
              than presenting it as historical tax snapshot billing.
            </p>

          </div>

        </div>
      </section>

      {/* PRODUCT EVIDENCE */}
      <section className="tapnix-evidence section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span className="tapnix-eyebrow">PRODUCT EVIDENCE</span>
            <h2>From Customer Order to Restaurant Operations</h2>
            <p>
              A visual walkthrough of the customer ordering experience and the
              operational dashboards used to manage orders and sessions.
            </p>
          </div>

          {/* CUSTOMER JOURNEY */}
          <div className="tapnix-journey">
            <div className="tapnix-journey-item">
              <span>01</span>
              <strong>Menu</strong>
            </div>

            <div className="tapnix-journey-line" />

            <div className="tapnix-journey-item">
              <span>02</span>
              <strong>Food Detail</strong>
            </div>

            <div className="tapnix-journey-line" />

            <div className="tapnix-journey-item">
              <span>03</span>
              <strong>Cart</strong>
            </div>

            <div className="tapnix-journey-line" />

            <div className="tapnix-journey-item">
              <span>04</span>
              <strong>Tracking</strong>
            </div>

            <div className="tapnix-journey-line" />

            <div className="tapnix-journey-item">
              <span>05</span>
              <strong>Bill</strong>
            </div>
          </div>

          {/* CUSTOMER EXPERIENCE */}
          <div className="tapnix-evidence-group">

            <div className="tapnix-evidence-group-heading">
              <div>
                <span className="tapnix-evidence-kicker">CUSTOMER EXPERIENCE</span>
                <h3>Ordering Journey</h3>
              </div>

              <p>
                QR-based ordering flow from menu discovery to order tracking and
                session billing.
              </p>
            </div>

            {/* FEATURED MENU */}
            <div className="tapnix-featured-evidence">

              <div className="tapnix-device-shot tapnix-device-shot-featured">
                <img
                  src="/images/tapnix/tapnix-menu.png"
                  alt="Tapnix customer menu interface"
                />
              </div>

              <div className="tapnix-featured-copy">
                <span className="tapnix-shot-number">01</span>

                <h4>Digital Restaurant Menu</h4>

                <p>
                  Customers enter the restaurant experience through the QR-linked
                  digital menu, browse categories and discover available menu items.
                </p>

                <div className="tapnix-evidence-tags">
                  <span>QR Entry</span>
                  <span>Menu Discovery</span>
                  <span>Mobile UI</span>
                </div>
              </div>

            </div>

            {/* CUSTOMER SCREENSHOTS */}
            <div className="tapnix-device-grid">

              <article className="tapnix-device-card">
                <div className="tapnix-device-shot">
                  <img
                    src="/images/tapnix/tapnix-food-detail.png"
                    alt="Tapnix food detail screen"
                  />
                </div>

                <div className="tapnix-device-caption">
                  <span>02</span>
                  <div>
                    <h4>Food Detail</h4>
                    <p>Item details and ordering interaction.</p>
                  </div>
                </div>
              </article>

              <article className="tapnix-device-card">
                <div className="tapnix-device-shot">
                  <img
                    src="/images/tapnix/tapnix-cart.png"
                    alt="Tapnix shopping cart screen"
                  />
                </div>

                <div className="tapnix-device-caption">
                  <span>03</span>
                  <div>
                    <h4>Unified Cart</h4>
                    <p>Selected items consolidated before checkout.</p>
                  </div>
                </div>
              </article>

              <article className="tapnix-device-card">
                <div className="tapnix-device-shot">
                  <img
                    src="/images/tapnix/tapnix-order-tracking.png"
                    alt="Tapnix order tracking screen"
                  />
                </div>

                <div className="tapnix-device-caption">
                  <span>04</span>
                  <div>
                    <h4>Order Tracking</h4>
                    <p>Realtime order progress visible to the customer.</p>
                  </div>
                </div>
              </article>

              <article className="tapnix-device-card">
                <div className="tapnix-device-shot">
                  <img
                    src="/images/tapnix/tapnix-bill.png"
                    alt="Tapnix session bill screen"
                  />
                </div>

                <div className="tapnix-device-caption">
                  <span>05</span>
                  <div>
                    <h4>Session Bill</h4>
                    <p>Session-level billing with subtotal and GST breakdown.</p>
                  </div>
                </div>
              </article>

            </div>
          </div>

          {/* OPERATIONS */}
          <div className="tapnix-evidence-group tapnix-operations-group">

            <div className="tapnix-evidence-group-heading">
              <div>
                <span className="tapnix-evidence-kicker">RESTAURANT OPERATIONS</span>
                <h3>Staff & Management Interfaces</h3>
              </div>

              <p>
                Operational interfaces supporting kitchen, waiter and management
                workflows.
              </p>
            </div>

            <div className="tapnix-device-grid tapnix-operations-grid">

              <article className="tapnix-device-card">
                <div className="tapnix-device-shot">
                  <img
                    src="/images/tapnix/tapnix-chef.png"
                    alt="Tapnix chef dashboard"
                  />
                </div>

                <div className="tapnix-device-caption">
                  <span>01</span>
                  <div>
                    <h4>Chef Dashboard</h4>
                    <p>Kitchen-side order management and status progression.</p>
                  </div>
                </div>
              </article>

              <article className="tapnix-device-card">
                <div className="tapnix-device-shot">
                  <img
                    src="/images/tapnix/tapnix-waiter.png"
                    alt="Tapnix waiter dashboard"
                  />
                </div>

                <div className="tapnix-device-caption">
                  <span>02</span>
                  <div>
                    <h4>Waiter Dashboard</h4>
                    <p>Order and table-service workflow for restaurant staff.</p>
                  </div>
                </div>
              </article>

              <article className="tapnix-device-card">
                <div className="tapnix-device-shot">
                  <img
                    src="/images/tapnix/tapnix-admin-orders.png"
                    alt="Tapnix admin orders dashboard"
                  />
                </div>

                <div className="tapnix-device-caption">
                  <span>03</span>
                  <div>
                    <h4>Order Management</h4>
                    <p>Management view for monitoring restaurant orders.</p>
                  </div>
                </div>
              </article>

              <article className="tapnix-device-card">
                <div className="tapnix-device-shot">
                  <img
                    src="/images/tapnix/tapnix-admin-session.png"
                    alt="Tapnix admin session management dashboard"
                  />
                </div>

                <div className="tapnix-device-caption">
                  <span>04</span>
                  <div>
                    <h4>Session Management</h4>
                    <p>Restaurant session-level operational visibility.</p>
                  </div>
                </div>
              </article>

            </div>
          </div>

        </div>
      </section>

      {/* ENGINEERING CHALLENGES */}
      <section className="tapnix-engineering section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span className="tapnix-eyebrow">ENGINEERING DECISIONS</span>

            <h2>
              Problems were solved at the architecture level,
              not only at the UI level.
            </h2>

            <p>
              Tapnix combines realtime communication, state-driven order
              processing, session billing and role-based operational workflows.
            </p>
          </div>

          <div className="tapnix-engineering-grid">

            {/* 01 */}
            <article className="tapnix-engineering-card">

              <div className="tapnix-engineering-number">
                01
              </div>

              <span className="tapnix-engineering-label">
                REALTIME
              </span>

              <h3>
                Keeping multiple restaurant interfaces synchronized
              </h3>

              <p>
                Customer, chef, waiter and management interfaces need to react
                when an order changes. Tapnix separates business-state mutation
                from realtime event distribution.
              </p>

              <div className="tapnix-engineering-flow">
                <span>REST</span>
                <b>→</b>
                <span>Database</span>
                <b>→</b>
                <span>Event</span>
                <b>→</b>
                <span>WebSocket</span>
                <b>→</b>
                <span>Redux / UI</span>
              </div>

            </article>


            {/* 02 */}
            <article className="tapnix-engineering-card">

              <div className="tapnix-engineering-number">
                02
              </div>

              <span className="tapnix-engineering-label">
                ORDER STATE
              </span>

              <h3>
                Managing different order lifecycles
              </h3>

              <p>
                MAIN and QUICK orders can follow different progression paths.
                Order transitions are therefore handled through a dedicated
                state-machine and service layer rather than scattered UI logic.
              </p>

              <div className="tapnix-engineering-flow">
                <span>State Machine</span>
                <b>→</b>
                <span>Authorization</span>
                <b>→</b>
                <span>Status Service</span>
                <b>→</b>
                <span>Persistence</span>
              </div>

            </article>


            {/* 03 */}
            <article className="tapnix-engineering-card">

              <div className="tapnix-engineering-number">
                03
              </div>

              <span className="tapnix-engineering-label">
                BILLING
              </span>

              <h3>
                Building a session-level billing model
              </h3>

              <p>
                A restaurant session can contain multiple orders. Billing
                therefore operates at the session level, aggregating active
                order items before resolving tax and calculating the final bill.
              </p>

              <div className="tapnix-engineering-flow">
                <span>Session</span>
                <b>→</b>
                <span>Orders</span>
                <b>→</b>
                <span>Active Items</span>
                <b>→</b>
                <span>Tax</span>
                <b>→</b>
                <span>Total</span>
              </div>

            </article>


            {/* 04 */}
            <article className="tapnix-engineering-card">

              <div className="tapnix-engineering-number">
                04
              </div>

              <span className="tapnix-engineering-label">
                INTEGRITY
              </span>

              <h3>
                Identifying boundaries that require hardening
              </h3>

              <p>
                Source-level auditing identified security and financial-integrity
                areas requiring further remediation, including pricing,
                authorization, participant credentials and customer WebSocket
                membership verification.
              </p>

              <div className="tapnix-risk-list">
                <span>Pricing Integrity</span>
                <span>Authorization</span>
                <span>Session Access</span>
                <span>WebSocket Membership</span>
              </div>

            </article>

          </div>

        </div>
      </section>

      {/* ROLE & TECHNOLOGY */}
      <section className="tapnix-role section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span className="tapnix-eyebrow">ROLE & TECHNOLOGY</span>

            <h2>
              Full product ownership across the application stack
            </h2>

            <p>
              Tapnix involved hands-on work across frontend architecture,
              backend workflows, realtime communication, data modelling and
              product-level debugging.
            </p>
          </div>

          <div className="tapnix-role-layout">

            {/* ROLE */}
            <div className="tapnix-role-main">

              <span className="tapnix-role-label">
                MY ROLE
              </span>

              <h3>
                Product & Full-Stack Engineering
              </h3>

              <p>
                Worked across the customer ordering experience, restaurant
                operations and management workflows, connecting frontend
                interactions with backend business logic and realtime events.
              </p>

              <div className="tapnix-responsibility-grid">

                <div className="tapnix-responsibility">
                  <span>01</span>
                  <div>
                    <h4>Frontend Architecture</h4>
                    <p>
                      React, TypeScript, Redux Toolkit and role-specific
                      application workflows.
                    </p>
                  </div>
                </div>

                <div className="tapnix-responsibility">
                  <span>02</span>
                  <div>
                    <h4>Backend Development</h4>
                    <p>
                      Django, Django REST Framework and business-service
                      architecture.
                    </p>
                  </div>
                </div>

                <div className="tapnix-responsibility">
                  <span>03</span>
                  <div>
                    <h4>Realtime Systems</h4>
                    <p>
                      Django Channels, Redis, WebSocket events and centralized
                      frontend realtime handling.
                    </p>
                  </div>
                </div>

                <div className="tapnix-responsibility">
                  <span>04</span>
                  <div>
                    <h4>Data & Business Logic</h4>
                    <p>
                      Restaurant, session, order, order-item, menu and tax
                      relationships.
                    </p>
                  </div>
                </div>

                <div className="tapnix-responsibility">
                  <span>05</span>
                  <div>
                    <h4>Debugging & Verification</h4>
                    <p>
                      Tracing UI, API, persistence and realtime behaviour across
                      multiple application roles.
                    </p>
                  </div>
                </div>

                <div className="tapnix-responsibility">
                  <span>06</span>
                  <div>
                    <h4>Product Workflows</h4>
                    <p>
                      Customer ordering, chef operations, waiter workflows and
                      management interfaces.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* TECHNOLOGY STACK */}
            <aside className="tapnix-stack-card">

              <span className="tapnix-role-label">
                TECHNOLOGY STACK
              </span>

              <div className="tapnix-stack-group">

                <span className="tapnix-stack-category">
                  FRONTEND
                </span>

                <div className="tapnix-stack-items">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Redux Toolkit</span>
                </div>

              </div>

              <div className="tapnix-stack-group">

                <span className="tapnix-stack-category">
                  BACKEND
                </span>

                <div className="tapnix-stack-items">
                  <span>Django</span>
                  <span>Django REST Framework</span>
                </div>

              </div>

              <div className="tapnix-stack-group">

                <span className="tapnix-stack-category">
                  DATA
                </span>

                <div className="tapnix-stack-items">
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                </div>

              </div>

              <div className="tapnix-stack-group">

                <span className="tapnix-stack-category">
                  REALTIME
                </span>

                <div className="tapnix-stack-items">
                  <span>Django Channels</span>
                  <span>WebSocket</span>
                </div>

              </div>

            </aside>

          </div>

          <div className="tapnix-role-statement">
            <span>ENGINEERING SCOPE</span>

            <p>
              Designed and implemented application flows that connect
              customer actions, backend business state, persistent data and
              realtime updates across the restaurant platform.
            </p>
          </div>

        </div>
      </section>

      {/* VERIFICATION & PROJECT STATUS */}
      <section className="tapnix-verification section">
        <div className="container">

          <div className="tapnix-section-heading">
            <span className="tapnix-eyebrow">VERIFICATION</span>

            <h2>
              A working product architecture with documented verification
            </h2>

            <p>
              The project was evaluated across customer ordering, restaurant
              operations, realtime communication, order lifecycle and billing
              workflows.
            </p>
          </div>


          <div className="tapnix-verification-layout">

            {/* VERIFIED AREAS */}
            <div className="tapnix-verified-card">

              <div className="tapnix-verification-header">
                <div>
                  <span className="tapnix-verification-label">
                    VERIFIED AREAS
                  </span>

                  <h3>
                    Core workflows and architecture
                  </h3>
                </div>

                <span className="tapnix-status-badge">
                  DOCUMENTED
                </span>
              </div>


              <div className="tapnix-verification-list">

                <div className="tapnix-verification-item">
                  <span>01</span>
                  <div>
                    <h4>Customer Ordering</h4>
                    <p>
                      QR entry, menu discovery, cart, checkout and order
                      tracking flows.
                    </p>
                  </div>
                </div>


                <div className="tapnix-verification-item">
                  <span>02</span>
                  <div>
                    <h4>Restaurant Operations</h4>
                    <p>
                      Chef, waiter and management workflows for handling
                      restaurant orders.
                    </p>
                  </div>
                </div>


                <div className="tapnix-verification-item">
                  <span>03</span>
                  <div>
                    <h4>Realtime Communication</h4>
                    <p>
                      WebSocket-based event propagation through the centralized
                      realtime frontend layer.
                    </p>
                  </div>
                </div>


                <div className="tapnix-verification-item">
                  <span>04</span>
                  <div>
                    <h4>Order Lifecycle</h4>
                    <p>
                      MAIN and QUICK order paths with defined state transitions
                      and terminal states.
                    </p>
                  </div>
                </div>


                <div className="tapnix-verification-item">
                  <span>05</span>
                  <div>
                    <h4>Session Billing</h4>
                    <p>
                      Session-level aggregation of active order items followed
                      by tax resolution and final bill calculation.
                    </p>
                  </div>
                </div>


                <div className="tapnix-verification-item">
                  <span>06</span>
                  <div>
                    <h4>Product Interfaces</h4>
                    <p>
                      Customer, chef, waiter and administrative interfaces
                      documented through product evidence.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* PROJECT STATUS */}
            <aside className="tapnix-status-card">

              <span className="tapnix-verification-label">
                CURRENT PROJECT STATE
              </span>

              <h3>
                Working architecture,
                <br />
                ongoing hardening
              </h3>

              <p>
                The project has a functioning customer and restaurant workflow
                architecture. Source-level auditing also identified security
                and financial-integrity areas that require further remediation.
              </p>


              <div className="tapnix-status-divider" />


              <div className="tapnix-status-row">
                <span>Architecture</span>
                <strong>Implemented</strong>
              </div>

              <div className="tapnix-status-row">
                <span>Realtime</span>
                <strong>Implemented</strong>
              </div>

              <div className="tapnix-status-row">
                <span>Customer Flow</span>
                <strong>Implemented</strong>
              </div>

              <div className="tapnix-status-row">
                <span>Operations</span>
                <strong>Implemented</strong>
              </div>

              <div className="tapnix-status-row">
                <span>Security Hardening</span>
                <strong>Ongoing</strong>
              </div>

            </aside>

          </div>


          {/* TECHNICAL REVIEW */}
          <div className="tapnix-review-panel">

            <div className="tapnix-review-content">

              <span className="tapnix-verification-label">
                TECHNICAL REVIEW
              </span>

              <h3>
                Source available for technical review
              </h3>

              <p>
                The repository is private. Relevant implementation details,
                architecture and technical evidence can be shared for a
                technical review when required.
              </p>

            </div>

            <div className="tapnix-review-action">
              <span>PRIVATE REPOSITORY</span>
              <strong>Available on request</strong>

              <div className="verification-actions">

              <a
                href="https://github.com/sangwa2529/RestMvp"
                target="_blank"
                rel="noreferrer"
                className="verification-link verification-link-primary"
              >
                GitHub Repository
                <span>↗</span>
              </a>

              

            </div>
            </div>

          </div>


          {/* CLOSING STATEMENT */}
          <div className="tapnix-closing">

            <span className="tapnix-eyebrow">
              CASE STUDY SUMMARY
            </span>

            <h3>
              Tapnix demonstrates product engineering across
              customer experience, operations and realtime systems.
            </h3>

            <p>
              The project combines a customer-facing ordering experience with
              restaurant operations, state-driven workflows, session billing
              and realtime communication in a single product architecture.
            </p>

          </div>

        </div>
      </section>

      {/* CASE STUDY NAVIGATION */}
      <section className="tapnix-case-navigation">
        <div className="container">

          <div className="tapnix-next-project">

            <div className="tapnix-next-project-copy">
              <span className="tapnix-eyebrow">
                NEXT CASE STUDY
              </span>

              <h2>
                NexaHomez
              </h2>

              <p>
                A realtime smart-home automation system built around Android,
                MQTT, ESP8266 and bidirectional device-state synchronization.
              </p>
            </div>

            <a
              href="/work/nexahomeza"
              className="tapnix-next-project-link"
            >
              View NexaHomez
              <span>→</span>
            </a>

          </div>


          <div className="tapnix-navigation-footer">

            <a href="/" className="tapnix-back-link">
              ← Back to all work
            </a>

            <a href="/#contact" className="tapnix-contact-link">
              Discuss a project →
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Tapnix;