import React, { useState, useEffect, ReactNode } from "react";

interface FunctionalComponentProps {
  initialCount: number;
}

interface ClassComponentProps {}

class ExampleComponent extends React.Component<ClassComponentProps> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count has been updated:", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

const FunctionalComponent: React.FC<FunctionalComponentProps> = ({
  initialCount,
}) => {
  const [count, setCount] = useState<number>(initialCount);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="border p-3">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

class ClassComponent extends React.Component<ClassComponentProps> {
  constructor(props: ClassComponentProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const functionalComponentInstance: ReactNode = (
      <FunctionalComponent initialCount={this.state.count} />
    );

    return (
      <div className="w-[100vw] flex justify-center">
        {functionalComponentInstance}
      </div>
    );
  }
}

export default ClassComponent;
