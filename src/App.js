render() {
  debugger;
  return (
    <div className="App">
      <button onClick={() => this.handleOnClickItems()}>
        Click to change items count
      </button>
      <button onClick={() => this.handleOnClickUsers()}>
        Click to change user count
      </button>
      <p> {this.props.items.length}</p>
    </div>
  );
