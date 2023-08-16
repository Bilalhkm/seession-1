function WelcomeFC(Props) {
  if (Props.nme) {
    return <h1>Hello {"Props.name"}!</h1>;
  } else {
    return <h1>Hello World!</h1>;
  }
}
export default WelcomeFC;
