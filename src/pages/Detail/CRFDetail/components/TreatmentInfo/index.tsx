import React from 'react';
import {
  Tabs,
  Form,
  Divider,
  Radio,
  Rate,
  Input,
  Button,
  Select,
  TimePicker,
  DatePicker,
} from 'antd';
import styles from './index.less';

import LaborInspect from '../BasicComponents/LaborInspect';
import Immunohistochemical from '../BasicComponents/Immunohistochemical';
import MolecularDetection from '../BasicComponents/MolecularDetection';

const { TabPane } = Tabs;

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 8,
  },
};

class TreatmentInfo extends React.Component {
  trement = [
    { label: '1线', value: 1 },
    { label: '2线', value: 2 },
    { label: '3线', value: 3 },
    { label: '4线', value: 4 },
    { label: '5线', value: 5 },
    { label: '手术', value: 6 },
    { label: '放疗', value: 7 },
    { label: '其他', value: 8 },
  ];

  best_effect_evalution = [
    { label: 'PD-进展', value: 1 },
    { label: 'SD-稳定', value: 2 },
    { label: 'PR-部分缓解', value: 3 },
    { label: 'CR-完全缓解', value: 4 },
    { label: '术后未发现新病灶', value: 5 },
  ];
  render() {
    return (
      <div>
        <Tabs tabPosition="top">
          <TabPane tab="治疗记录" key="treatment_record">
            <Form name="treatment_record" {...layout}>
              <Form.Item label="几线治疗" name="trement">
                <Select style={{ width: 120 }} options={this.trement} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="实验室检查" key="labor_inspect">
            <LaborInspect />
          </TabPane>
          <TabPane tab="免疫组化" key="immunohistochemical">
            <Immunohistochemical />
          </TabPane>
          <TabPane tab="分子检测" key="molecular_detection">
            <MolecularDetection />
          </TabPane>
          <TabPane tab="疗效评估" key="effect_evalution">
            <Form name="effect_evalution" {...layout}>
              <Form.Item
                label="最佳疗效评估日期"
                name="best_effect_evalution_date"
              >
                <DatePicker />
              </Form.Item>
              <Form.Item label="最佳疗效评估" name="best_effect_evalution">
                <Select
                  style={{ width: 120 }}
                  options={this.best_effect_evalution}
                />
              </Form.Item>
              <Form.Item label="进展日期" name="progress_date">
                <DatePicker />
              </Form.Item>
              <Form.Item label="进展描述" name="progress_description">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  保存
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="症状体征" key="system_sign"></TabPane>
          <TabPane tab="副反应" key="side_reaction"></TabPane>
        </Tabs>
      </div>
    );
  }
}
export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-edit-cell">
      <TreatmentInfo />
    </div>
  </div>
);
