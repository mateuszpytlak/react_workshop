import './App.css';
import { Button } from './ui/Button/Button';
import { Text } from './ui/Text/Text';

function App() {

  return (
    <>
      <Text>Test text</Text>
      <Button label="Hello world!" onClick={ () => alert('haj') } disabled={true} />
    </>
  )
}

export default App
