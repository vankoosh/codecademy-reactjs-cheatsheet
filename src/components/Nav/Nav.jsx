import React, { useState } from "react";
// import "./Nav.css";
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
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
                {
                  id: "",
                  src: "assets/hooks/1 HOOKS Why use hooks.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Objects" ? "underline" : ""}
            Conditionals
          >
            Objects
          </li>
          {/* FUNCTIONS */}
          <li
            onClick={(e) => {
              setTopic([
                { id: "1/6", src: "imgs/FUNCTIONS/FunctionDeclaration.jpg" },
                {
                  id: "2/6",
                  src: "imgs/FUNCTIONS/FunctionExpression.jpg",
                },
                {
                  id: "3/6",
                  src: "imgs/FUNCTIONS/ConciseBodyArrowFunctions.jpg",
                },
                {
                  id: "4/6",
                  src: "imgs/FUNCTIONS/DefaultParameter.jpg",
                },
                {
                  id: "5/6",
                  src: "imgs/FUNCTIONS/HelperFunctions.jpg",
                },
                {
                  id: "6/6",
                  src: "imgs/FUNCTIONS/ReturnKeyword.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Functions" ? "underline" : ""}
          >
            Functions
          </li>
          {/* CLASSES */}
          <li
            onClick={(e) => {
              setTopic([
                { id: "1/8", src: "imgs/CLASSES/Classes.jpg" },
                {
                  id: "2/8",
                  src: "imgs/CLASSES/Constructor.jpg",
                },
                {
                  id: "3/8",
                  src: "imgs/CLASSES/ANewInstance.jpg",
                },
                {
                  id: "4/8",
                  src: "imgs/CLASSES/AddingMethods.jpg",
                },
                {
                  id: "5/8",
                  src: "imgs/CLASSES/CallingMethods.jpg",
                },
                {
                  id: "6/8",
                  src: "imgs/CLASSES/StaticSuperclassMethod.jpg",
                },
                {
                  id: "7/8",
                  src: "imgs/CLASSES/ExtendSubclassFromSuperclass.jpg",
                },
                {
                  id: "8/8",
                  src: "imgs/CLASSES/ExcersiseWithDefaultParams.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Classes" ? "underline" : ""}
          >
            Classes
          </li>
          {/* FETCH */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "1/11",
                  src: "imgs/FETCH/fetch()Review.jpg",
                },
                {
                  id: "2/11",
                  src: "imgs/FETCH/fetch()GETDiagram.jpg",
                },
                {
                  id: "3/11",
                  src: "imgs/FETCH/fetch()GETExample.jpg",
                },
                {
                  id: "4/11",
                  src: "imgs/FETCH/fetch()GETExampleWithPromise.jpg",
                },
                {
                  id: "5/11",
                  src: "imgs/FETCH/fetch()POSTDiagram.jpg",
                },
                {
                  id: "6/11",
                  src: "imgs/FETCH/fetch()POSTExample.jpg",
                },
                {
                  id: "7/11",
                  src: "imgs/FETCH/fetch()POSTExample II.jpg",
                },
                {
                  id: "8/11",
                  src: "imgs/FETCH/asyncAwaitGETwithFetch()Diagram.jpg",
                },
                {
                  id: "9/11",
                  src: "imgs/FETCH/asyncAwaitGETwithFetch()Example.jpg",
                },
                {
                  id: "10/11",
                  src: "imgs/FETCH/asyncAwaitPOSTwithFetch()Diagram.jpg",
                },
                {
                  id: "11/11",
                  src: "imgs/FETCH/asyncAwaitPOSTwithFetch()Example.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "FETCH" ? "underline" : ""}
          >
            FETCH
          </li>
          {/* ASYNC AWAIT */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "1/9",
                  src: "imgs/ASYNC-AWAIT/AsyncAwaitIntroduction.jpg",
                },
                {
                  id: "2/9",
                  src: "imgs/ASYNC-AWAIT/AsyncAwaitReview.jpg",
                },
                {
                  id: "3/9",
                  src: "imgs/ASYNC-AWAIT/AsyncKeyword.jpg",
                },
                {
                  id: "4/9",
                  src: "imgs/ASYNC-AWAIT/AwaitOperator.jpg",
                },
                {
                  id: "5/9",
                  src: "imgs/ASYNC-AWAIT/WritinAsyncFunctions.jpg",
                },
                {
                  id: "6/9",
                  src: "imgs/ASYNC-AWAIT/HandlingIndependentPromises.jpg",
                },
                {
                  id: "7/9",
                  src: "imgs/ASYNC-AWAIT/HandlingChainedPromises.jpg",
                },
                {
                  id: "8/9",
                  src: "imgs/ASYNC-AWAIT/HandlingErrors.jpg",
                },
                {
                  id: "9/9",
                  src: "imgs/ASYNC-AWAIT/AwaitPromise.all().jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "ASYNC - AWAIT" ? "underline" : ""}
          >
            ASYNC - AWAIT
          </li>
          {/* PROMISES */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "1/7",
                  src: "imgs/PROMISES/Promises Review.jpg",
                },
                {
                  id: "2/7",
                  src: "imgs/PROMISES/ConstructingAPromiseObject.jpg",
                },
                {
                  id: "3/7",
                  src: "imgs/PROMISES/HandlingPromisesWithCallbacks.jpg",
                },
                {
                  id: "4/7",
                  src: "imgs/PROMISES/ConsumingPromisesWith.then()and.catch().jpg",
                },
                {
                  id: "5/7",
                  src: "imgs/PROMISES/ConsumingPromisesWith.catch().jpg",
                },
                {
                  id: "6/7",
                  src: "imgs/PROMISES/ChainingMultiplePromises.jpg",
                },
                {
                  id: "7/7",
                  src: "imgs/PROMISES/Promise.all().jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "PROMISES" ? "underline" : ""}
          >
            PROMISES
          </li>
          {/* XHR GET-POST */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "1/7",
                  src: "imgs/XHR-GET-POST/XHRReview.jpg",
                },
                {
                  id: "2/7",
                  src: "imgs/XHR-GET-POST/MakingXHRGETDiagram.jpg",
                },
                {
                  id: "3/7",
                  src: "imgs/XHR-GET-POST/XHRGETSyntax.jpg",
                },
                {
                  id: "4/7",
                  src: "imgs/XHR-GET-POST/XHRGETExample.jpg",
                },
                {
                  id: "5/7",
                  src: "imgs/XHR-GET-POST/XHRGETExample II.jpg",
                },
                {
                  id: "6/7",
                  src: "imgs/XHR-GET-POST/MakingXHRPOSTDiagram.jpg",
                },
                {
                  id: "7/7",
                  src: "imgs/XHR-GET-POST/XHRPOSTExample.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "XHR GET-POST" ? "underline" : ""}
          >
            XHR GET-POST
          </li>
          {/* MODULES */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: "1/7",
                  src: "imgs/MODULES/NodeModulesInJS.jpg",
                },
                {
                  id: "2/7",
                  src: "imgs/MODULES/BrowserModulesInJS.jpg",
                },
                {
                  id: "3/7",
                  src: "imgs/MODULES/Export-ImportExcercise.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Modules" ? "underline" : ""}
          >
            Modules
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
