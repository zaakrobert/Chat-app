import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="65ec3008-8e68-4a59-80ad-8bd287c5b720"
      userName="John"
      userSecret="123123"
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App