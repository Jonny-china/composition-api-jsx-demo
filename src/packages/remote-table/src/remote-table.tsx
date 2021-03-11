import { defineComponent } from '@vue/composition-api'

// import styles from './src.module.scss'
// import classNames from 'classnames/bind'
// const cn = classNames.bind(styles)

const RemoteTable = defineComponent({
  name: 'FnbRemoteTable',
  props: {},
  setup(props) {
    console.log(props)
    return () => <div>569</div>
  }
})

export default RemoteTable
