// Import Antd
import { Form } from 'antd';
import { FormItemProps as FormItemPropsAntd } from 'antd/lib/form';

export interface FormItemProps extends FormItemPropsAntd {
  name: string | number | (string | number)[] | undefined;
  notForm?: boolean;
}

function FormItem(props: FormItemProps) {
  // Destruct Props
  const { children, notForm } = props;

  return (
    <div className="custom-form-item">
      {notForm ? <div>{children}</div> : <Form.Item {...props}>{children}</Form.Item>}
    </div>
  );
}

export default FormItem;
