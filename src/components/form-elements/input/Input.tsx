// Import Antd
import { Input as InputAntd } from 'antd';
import { InputProps as InputPropsAntd } from 'antd/lib/input';

// Import Components
import FormItem, { FormItemProps } from 'src/components/form-elements/form-item/FormItem';

export type MergedProps = Omit<InputPropsAntd, 'name'> & Omit<FormItemProps, 'children'>;

function Input(props: MergedProps) {
  return (
    <FormItem {...props}>
      <InputAntd {...props} name="" allowClear autoComplete="off" />
    </FormItem>
  );
}

export default Input;
