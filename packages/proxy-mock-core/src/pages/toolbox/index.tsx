import './index.less'
import JSONSVG from '../../components/svg/JSONSVG'
import ToolItem from './ToolItem'
import JsonToTs from './JsonToTs'

const toolConfig = [
  {
    title: 'json-to-ts',
    icon: <JSONSVG className="icon" />,
    desc: '把json转为ts类型',
    children: <JsonToTs />,
  },
]

const Toolbox = () => {
  return (
    <div className="layout-page toolbox-page">
      {toolConfig.map(item => {
        return <ToolItem {...item} key={item.title} />
      })}
    </div>
  )
}

export default Toolbox
