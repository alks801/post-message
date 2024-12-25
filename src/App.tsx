import "./App.css"

function postParentMessage<T extends string>(type: T, payload?: Record<string, unknown>) {
  try {
    window.parent.postMessage(
      {
        type,
        payload,
      },
      '*'
    );
    alert("Sent");
  } catch (err) {
    alert("Can't post message to parent");
    console.error("Can't post message to parent", err);
  }
}

function App() {
  return (
    <>
      <h1>Test Post Message</h1>
      <button onClick={() => postParentMessage('PW_WIDGET_OPEN_RULES_PAGE')}>Send</button>
    </>
  )
}

export default App
