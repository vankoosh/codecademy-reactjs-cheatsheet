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
    }
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
          {/* LOOPS */}
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
            className={active === "Loops" ? "underline" : ""}
          >
            Loops
          </li>
          {/* ARRAYS */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: 1,
                  count: "1/4",
                  src: "imgs/ARRAYS/Arrays.jpg",
                },
                {
                  id: 2,
                  count: "2/4",
                  src: "imgs/ARRAYS/ChangeArrayElementsByAssignment.jpg",
                },
                {
                  id: 3,
                  count: "3/4",
                  src: "imgs/ARRAYS/AccesingIndexOfNestedArrays.jpg",
                },
                {
                  id: 4,
                  count: "4/4",
                  src: "imgs/ARRAYS/NestedLoop-ComparingTwoArrays.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Arrays" ? "underline" : ""}
          >
            Arrays
          </li>
          {/* ARRAY ITERATORS */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: 1,
                  count: "1/6",
                  src: "imgs/ARRAY-ITERATORS/filter().jpg",
                },
                {
                  id: 2,
                  count: "2/6",
                  src: "imgs/ARRAY-ITERATORS/findIndex().jpg",
                },
                {
                  id: 3,
                  count: "3/6",
                  src: "imgs/ARRAY-ITERATORS/forEach().jpg",
                },
                {
                  id: 4,
                  count: "4/6",
                  src: "imgs/ARRAY-ITERATORS/map().jpg",
                },
                {
                  id: 5,
                  count: "5/6",
                  src: "imgs/ARRAY-ITERATORS/reduce().jpg",
                },
                {
                  id: 6,
                  count: "6/6",
                  src: "imgs/ARRAY-ITERATORS/IteratorsExamples.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Array Iterators" ? "underline" : ""}
          >
            Array Iterators
          </li>
          {/* CONDITIONALS */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: 1,
                  count: "1/5",
                  src: "imgs/CONDITIONALS/ConditionalStatementsReview.jpg",
                },
                {
                  id: 2,
                  count: "2/5",
                  src: "imgs/CONDITIONALS/SwitchStatement.jpg",
                },
                {
                  id: 3,
                  count: "3/5",
                  src: "imgs/CONDITIONALS/TernaryOperator.jpg",
                },
                {
                  id: 4,
                  count: "4/5",
                  src: "imgs/CONDITIONALS/TruthyAndFalsyStatements.jpg",
                },
                {
                  id: 5,
                  count: "5/5",
                  src: "imgs/CONDITIONALS/Short-circuitOREvaluation.jpg",
                },
              ]);
              underline(e);
              setActive(e.target.innerText);
            }}
            className={active === "Conditionals" ? "underline" : ""}
          >
            Conditionals
          </li>
          {/* OBJECTS */}
          <li
            onClick={(e) => {
              setTopic([
                {
                  id: 1,
                  count: "1/13",
                  src: "imgs/OBJECTS/ObjectsReview.jpg",
                },
                {
                  id: 2,
                  count: "2/13",
                  src: "imgs/OBJECTS/AdvancedObjectsReview.jpg",
                },
                {
                  id: 3,
                  count: "3/13",
                  src: "imgs/OBJECTS/LoopingThroughObjects.jpg",
                },
                {
                  id: 4,
                  count: "4/13",
                  src: "imgs/OBJECTS/CreatingObjectLiterals.jpg",
                },
                {
                  id: 5,
                  count: "5/13",
                  src: "imgs/OBJECTS/Destructured{}Assignment.jpg",
                },
                {
                  id: 6,
                  count: "6/13",
                  src: "imgs/OBJECTS/Built-inMethodsLikeObject.keys().entries().assign().jpg",
                },
                {
                  id: 7,
                  count: "7/13",
                  src: "imgs/OBJECTS/FactoryFunctions.jpg",
                },
                {
                  id: 8,
                  count: "8/13",
                  src: "imgs/OBJECTS/ObjectsAndPrivacy.jpg",
                },
                {
                  id: 9,
                  count: "9/13",
                  src: "imgs/OBJECTS/RefactoringKeyValueShorthand.jpg",
                },
                {
                  id: 10,
                  count: "10/13",
                  src: "imgs/OBJECTS/Getters.jpg",
                },
                {
                  id: 11,
                  count: "11/13",
                  src: "imgs/OBJECTS/Setters.jpg",
                },
                {
                  id: 12,
                  count: "12/13",
                  src: "imgs/OBJECTS/thisKeyword.jpg",
                },
                {
                  id: 13,
                  count: "13/13",
                  src: "imgs/OBJECTS/thisAndArrowFunctions.jpg",
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
