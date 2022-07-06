import { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>输入点什么：</Text>
        <Input
          confirmType='search'
          placeholder='请输入'
        />
      </View>
    )
  }
}
