const HelloWorld = ({title,subTitle,age}) => {
    return (
    <header>
      <h1> {title} </h1>
      <h4>{subTitle} </h4>
      <h3>your age is {age}</h3>
    </header>
    );
  };
  export default HelloWorld;