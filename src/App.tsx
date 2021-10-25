// Import Components
import FormApp from './components/form-elements/form/FormApp';
import Input from './components/form-elements/input/Input';

// Import Antd
import { Row, Col, Form, Button } from 'antd';

// Import Assets
import './App.css';
import 'antd/dist/antd.css';

function App() {
  // Instance
  const [sheetsForm] = Form.useForm();

  return (
    <div className="App">
      <FormApp form={sheetsForm} name="sheets-form">
        <Row>
          <Col span={24}>
            <Input name="name" label="Adınız" required />
          </Col>
          <Col span={24}>
            <Input name="surname" label="Soyadınız" required />
          </Col>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Gönder
            </Button>
          </Col>
        </Row>
      </FormApp>
    </div>
  );
}

export default App;
