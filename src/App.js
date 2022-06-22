import "./App.css";

import CounterTwo from "./components/CounterTwo";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import ErrorBoundary from "./components/ErrorBoundary";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import FragmentDemo from "./components/FragmentDemo";
// import Hero from "./components/Hero";

function App() {
  return (
    <div className='App'>
      <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName='Batman' />
        <Hero heroName='Superman' />
        <Hero heroName='Joker' />
      </ErrorBoundary> */}

      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter />      */}
      {/* <Message /> */}
      {/* <Greet name="Druva" heroName="IronMan" />
      <Greet name="Jeevini" heroName="WonderWoman" />
      <Greet name="Jithu" heroName="Superman" />
      <Welcome name="Druva" heroName="IronMan"/>
      <Welcome name="Jeevini" heroName="WonderWoman"/> */}
    </div>
  );
}

export default App;
