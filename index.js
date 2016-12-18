import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Radio, InputNumber, Switch, Form } from 'antd'

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}

class App extends Component {

  constructor(props) {
    super(props)
  }

  renderItemSetting() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form horizontal >
        <Form.Item label="item number" {...formItemLayout} >
          {getFieldDecorator('itemNumber', {initialValue: 6})(
            <InputNumber />
          )}
        </Form.Item>
        <Form.Item label="width random" {...formItemLayout} >
          {getFieldDecorator('widthRandom')(
            <Switch />
          )}
        </Form.Item>
        <Form.Item label="height random" {...formItemLayout} >
          {getFieldDecorator('heightRandom')(
            <Switch />
          )}
        </Form.Item>
      </Form>
    )
  }

  renderBoxController() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form horizontal >
        <Form.Item label="flex-direction" {...formItemLayout} >
          {getFieldDecorator('flexDirection', {initialValue: 'row'})(
            <Radio.Group>
              <Radio value="row">row</Radio>
              <Radio value="row-reverse">row-reverse</Radio>
              <Radio value="column">column</Radio>
              <Radio value="column-reverse">column-reverse</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="flex-wrap" {...formItemLayout} >
          {getFieldDecorator('flexWrap', {initialValue: 'nowrap'})(
            <Radio.Group>
              <Radio value="nowrap">nowrap</Radio>
              <Radio value="wrap">wrap</Radio>
              <Radio value="wrap-reverse">wrap-reverse</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="flex-flow" {...formItemLayout} >
          <p>flex-direction || flex-wrap</p>
        </Form.Item>
        <Form.Item label="justify-content" {...formItemLayout} >
          {getFieldDecorator('justifyContent', {initialValue: 'flex-start'})(
            <Radio.Group>
              <Radio value="flex-start">flex-start</Radio>
              <Radio value="flex-end">flex-end</Radio>
              <Radio value="center">center</Radio>
              <Radio value="space-between">space-between</Radio>
              <Radio value="space-around">space-around</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="align-items" {...formItemLayout} >
          {getFieldDecorator('alignItems', {initialValue: 'flex-start'})(
            <Radio.Group>
              <Radio value="flex-start">flex-start</Radio>
              <Radio value="flex-end">flex-end</Radio>
              <Radio value="center">center</Radio>
              <Radio value="baseline">baseline</Radio>
              <Radio value="stretch">stretch</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="align-content" {...formItemLayout} >
          {getFieldDecorator('alignContent', {initialValue: 'flex-start'})(
            <Radio.Group>
              <Radio value="flex-start">flex-start</Radio>
              <Radio value="flex-end">flex-end</Radio>
              <Radio value="center">center</Radio>
              <Radio value="space-between">space-between</Radio>
              <Radio value="space-around">space-around</Radio>
              <Radio value="stretch">stretch</Radio>
            </Radio.Group>
          )}
        </Form.Item>
      </Form>
    )
  }

  renderItems() {
    const { getFieldsValue } = this.props.form
    const { itemNumber = 6, widthRandom, heightRandom } = getFieldsValue()
    console.log('widthRandom: ', widthRandom);

    const itemArr = []
    for (let i = 0; i < itemNumber; i++) {
      const style = {
        width: widthRandom ? Math.ceil(100/i+1) : 100,
        height: heightRandom ? Math.ceil(70/i+1) : 70
      }
      itemArr.push(<div key={i} className="item" style={style}> {i} </div>)
    }
    return itemArr
  }

  render() {
    const { getFieldsValue } = this.props.form
    const { flexDirection, flexWrap, justifyContent, alignItems, alignContent } = getFieldsValue()
    return (
      <div className="wrapper">
        <h1>Item Setting</h1>
        {this.renderItemSetting()}
        <h1>Flex Demo</h1>
        <div>
        {this.renderBoxController()}
        </div>
        <div className="box" style={{flexDirection, flexWrap, justifyContent, alignItems, alignContent}}>
          {this.renderItems()}
        </div>
      </div>
    )
  }
}
App = Form.create()(App);


ReactDOM.render(<App />, document.getElementById('root'))
