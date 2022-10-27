import React, { useState } from "react";
import "./Nav.css";
import Card from "../Card/Card";

// TODO  add modal to small pics

export default function Nav() {
  const [topic, setTopic] = useState([
    {
      id: ".map() in JSX",
      src: "assets/basics/.map()inJSX.jpg",
    },
    {
      id: "if...else in JSX",
      src: "assets/basics/if-else-in-JSX.jpg",
    },
    {
      id: "Variable Attributes",
      src: "assets/basics/Variable Attributes in JSX.jpg",
    },
    {
      id: "Event Listeners",
      src: "assets/basics/Event-Listener-in-JSX.jpg",
    },
    {
      id: "Ternary Operator",
      src: "assets/basics/IF ELSE Ternary operator in React.jpg",
    },
    {
      id: "If...then && operator",
      src: "assets/basics/IF TRUE THEN YES &&operator.jpg",
    },
    {
      id: "Key attribute",
      src: "assets/basics/keys for marking lis.jpg",
    },
    {
      id: "React.createElement",
      src: "assets/basics/React.createElement.jpg",
    },
  ]);

  const [clickedImg, setClickedImg] = useState("");
  const [modalState, setModalState] = useState(false);
  const [active, setActive] = useState("Loops");

  const onClick = (e) => {
    setClickedImg(e.target.getAttribute("src"));
    setModalState(true);
  };

  function underline(t) {
    if (!t.target.hasAttribute("class")) {
      t.target.setAttribute("class", "underline");
    }
  }

  const onMouseEnter = (e) => {
    e.target.style.width = "33vw";
  };

  const onMouseLeave = (e) => {
    e.target.style.width = "22vw";
  };

  return (
    <main>
      <nav>
        <ul>
          {/* BASICS */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: ".map() in JSX",
                  src: "assets/basics/.map()inJSX.jpg",
                },
                {
                  id: "if...else in JSX",
                  src: "assets/basics/if-else-in-JSX.jpg",
                },
                {
                  id: "Variable Attributes",
                  src: "assets/basics/Variable Attributes in JSX.jpg",
                },
                {
                  id: "Event Listeners",
                  src: "assets/basics/Event-Listener-in-JSX.jpg",
                },
                {
                  id: "Ternary Operator",
                  src: "assets/basics/IF ELSE Ternary operator in React.jpg",
                },
                {
                  id: "If...then && operator",
                  src: "assets/basics/IF TRUE THEN YES &&operator.jpg",
                },
                {
                  id: "Key attribute",
                  src: "assets/basics/keys for marking lis.jpg",
                },
                {
                  id: "React.createElement",
                  src: "assets/basics/React.createElement.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            // TODO maybe something like this?
            className={active === "Basics" ? "underline" : ""}
          >
            Basics
          </li>
          {/* INLINE STYLING */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "Inline style",
                  src: "assets/inline-style/1.0 Changing inline style syntax.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Inline style" ? "underline" : ""}
          >
            Inline style
          </li>
          {/* COMPONENTS */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "",
                  src: "assets/components/1.1 Rendering a component.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.2 Nesting components-2 returns in one component.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.3 Using a var in a component.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.4 Insert logic into render function.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.5 Using conditionals in components.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.6 this. keyword in components.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.7 Pass 'props' into a component.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.8 Render unique components based on props.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.9 default props.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.10 Event listeners in components.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.11 Naming event listeners.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.12 this.props.children.jpg",
                },
                {
                  id: "",
                  src: "assets/components/1.13 this.setState updating state.jpg",
                },
                {
                  id: "",
                  src: "assets/componentsSTATE function-basedVSclass-based.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Components" ? "underline" : ""}
          >
            Components
          </li>
          {/* COMPONENT LIFECYCLE */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "",
                  src: "assets/component-lifecycle/Intro to lifecycle methods.jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/Component Lifecycle.jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/Lifecycle List.jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/1.1 MOUNTING - contructor.jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/1.2 MOUNTING - getDerivedStateFromProps.jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/1.3 MOUNTING - render().jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/1.4 MOUNTING - componentDidMount().jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/2.1 UPDATING - shouldComponentUpdate().jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/2.2 UPDATING - ...and render().jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/2.3 UPDATING - componentDidUpdate().jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/3.1 UNMOUNTING - componentWillUnmount().jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/componentDidMount.jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/componentDidUpdate.jpg",
                },
                {
                  id: "",
                  src: "assets/component-lifecycle/componentWillUnmount.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Lifecycle" ? "underline" : ""}
          >
            Lifecycle
          </li>
          {/* HOOKS */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1.0 HOOKS class VS func with state.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1.1 HOOKS useState hook.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1.2 HOOKS Initial state.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1.3 HOOKS setState,destructuring,target.value.jpg.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1.4 HOOKS previousState.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1.5 HOOKS arrays as setState argument.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1.6 HOOKS objects as setState argument.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1.7 HOOKS Multiple setStates.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/2 HOOKS useEffect REVIEW.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/2.1 HOOKS useEffect.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/2.2 HOOKS cleanup after useEffect.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/2.3 HOOKS useEffect only after 1st render with []",
                },
                {
                  id: "",
                  src: "assets/hooks/2.4 HOOKS useEffect fetch() api.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/2.5 HOOKS 2 RULES with another fetch example.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/2.6 HOOKS separate hooks for separate effects with fetch ex.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Hooks" ? "underline" : ""}
            Conditionals
          >
            Hooks
          </li>
          {/* PROPS */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "",
                  src: "assets/props/PropTypes class and func components.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Props" ? "underline" : ""}
          >
            Props
          </li>
          {/* CLASSES */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "",
                  src: "assest/stateless-represent/1.0 Stateless to Statefull.jpg",
                },
                {
                  id: "",
                  src: "assest/stateless-represent/1.1 Passing onChange data from Child-Parent-Sibling.jpg",
                },
                {
                  id: "",
                  src: "assest/stateless-represent/Controled VS Uncontroled components.jpg",
                },
                {
                  id: "",
                  src: "assest/stateless-represent/Presentational and Container Components.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Stateless/Represent" ? "underline" : ""}
          >
            Stateless/Represent
          </li>
          {/* CREATE REACT APP */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "",
                  src: "assets/create-react-app/Starting react-app.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "create-react-app" ? "underline" : ""}
          >
            create-react-app
          </li>
        </ul>
      </nav>

      {/* -----------------------MAP TO FILL CARDS */}
      <div className="card-container">
        {topic.map((img, index) => {
          return (
            <Card
              props={img}
              key={img.id}
              index={index + 1}
              length={topic.length}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={onClick}
            />
          );
        })}
      </div>

      {/*  */}
      {/* ---------------------------MODAL */}
      {/*  */}

      {modalState ? (
        <span
          className="modal"
          style={{ display: "flex" }}
          onClick={() => {
            setModalState(false);
          }}
        >
          <img src={clickedImg} alt="" className="modal-img" />
        </span>
      ) : null}
    </main>
  );
}
